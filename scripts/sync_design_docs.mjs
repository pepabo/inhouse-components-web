#!/usr/bin/env node
/**
 * design.pepabo.com のコンポーネントドキュメント（mdx）を、各パッケージの
 * README.md の design-doc マーカー間に転載する。
 *
 *   node scripts/sync_design_docs.mjs --source <design.pepabo.com のパス>
 *   node scripts/sync_design_docs.mjs --source <path> --check   # 書き込まず差分の有無だけ報告
 *
 * mdx は Astro 依存のため、そのまま貼ると壊れる。以下の変換をかける。
 *
 *   1. frontmatter / import / export const components / <script> を除去
 *   2. <div class="code-preview"> の実装デモ → ```html コードブロック化
 *   3. <ColorPreview color="..." /> を除去（flavor 名だけを残す。カラーコードは
 *      flavor token ごとに変わるため README に固定値を書かない）
 *   4. <span class="element-mark">A</span>Foo 見出し → 「A. Foo」
 *   5. <a href>（Astro の target=_blank 付き）→ markdown リンク
 *   6. 画像・リンクの相対パス → https://design.pepabo.com/... の絶対 URL
 *   7. 見出しを1段下げて README（Usage / Mixins）の階層に整合
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'
import { join, dirname, resolve, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE = 'https://design.pepabo.com'
const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const MDX_SUBDIR = 'src/pages/inhouse/components'
const START_MARKER = '<!-- design-doc:start (design.pepabo.com からの転載。更新は手動) -->'
const END_MARKER = '<!-- design-doc:end -->'
const START_RE = /^<!-- design-doc:start[^\n]*-->$/m
const END_RE = /^<!-- design-doc:end -->$/m

// --- mdx → markdown -------------------------------------------------------

/** frontmatter を切り出して { title, body } を返す */
function splitFrontmatter(mdx) {
  const m = mdx.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)
  if (!m) return { title: null, body: mdx }
  const title = m[1].match(/^title:\s*(.+)$/m)?.[1].trim() ?? null
  return { title, body: mdx.slice(m[0].length) }
}

/**
 * `<div class="code-preview">` に対応する `</div>` の終端位置を、div の深さを
 * 数えて求める。閉じタグは列0に揃っていないケースがあるため行位置では判定しない。
 * 対応が取れなければ null。
 */
function findCodePreviewEnd(src, openIdx) {
  const tag = /<div\b[^>]*>|<\/div>/g
  tag.lastIndex = openIdx
  let depth = 0
  let m
  while ((m = tag.exec(src)) !== null) {
    depth += m[0] === '</div>' ? -1 : 1
    if (depth === 0) return m.index + m[0].length
  }
  return null
}

/** 各行から共通の最小インデントを除去する */
function dedent(text) {
  const lines = text.replace(/^\r?\n/, '').replace(/\s+$/, '').split('\n')
  const indents = lines.filter((l) => l.trim() !== '').map((l) => l.match(/^ */)[0].length)
  const cut = indents.length ? Math.min(...indents) : 0
  return lines.map((l) => l.slice(cut)).join('\n')
}

/** <div class="code-preview"> ブロックを ```html フェンスに変換する */
function convertCodePreview(body) {
  const open = /<div class="code-preview">/g
  let out = ''
  let cursor = 0
  let m
  while ((m = open.exec(body)) !== null) {
    const end = findCodePreviewEnd(body, m.index)
    if (end === null) continue
    const inner = body.slice(m.index + m[0].length, end - '</div>'.length)
    out += body.slice(cursor, m.index)
    out += '```html\n' + dedent(inner) + '\n```'
    cursor = end
    open.lastIndex = end
  }
  return out + body.slice(cursor)
}

/** 相対パスをサイトの絶対 URL にする */
function absolutize(url) {
  return url.startsWith('/') ? SITE + url : url
}

/** コードフェンスの外側の行だけに変換をかける */
function transformOutsideFences(body, fn) {
  let inFence = false
  return body
    .split('\n')
    .map((line) => {
      if (/^\s*```/.test(line)) {
        inFence = !inFence
        return line
      }
      return inFence ? line : fn(line)
    })
    .join('\n')
}

function convert(mdx, slug) {
  const { title, body: raw } = splitFrontmatter(mdx)

  let body = raw
    .replace(/^import .*$/gm, '')
    .replace(/^export const components = \{[\s\S]*?^\}[^\n]*$/gm, '')
    .replace(/<script>[\s\S]*?<\/script>/g, '')

  body = convertCodePreview(body)

  // <img src="/..."> はコードブロックの内側にも現れる（コピペしてそのまま動く
  // 例にするため）ので、フェンスを問わず絶対 URL にする
  body = body.replace(
    /(<img\b[^>]*?\ssrc=")(\/[^"]*)"/g,
    (_, head, src) => `${head}${absolutize(src)}"`
  )

  body = transformOutsideFences(body, (line) =>
    line
      // カラーチップは落として flavor 名のみ残す
      .replace(/<ColorPreview\b[^>]*\/>/g, '')
      // 既定値を示す注記 <span class="note-default">*</span> → *
      .replace(/<span class="note-default">([^<]*)<\/span>/g, '$1')
      // <span class="element-mark">A</span>Container → A. Container
      // 1つの見出しに複数（C, D など）並ぶケースがある
      .replace(/<span class="element-mark">([^<]*)<\/span>\s*/g, '$1. ')
      // <a href="..." target="_blank" ...>text</a> → [text](...)
      .replace(
        /<a href="([^"]+)"[^>]*>([^<]*)<\/a>/g,
        (_, href, text) => `[${text}](${absolutize(href)})`
      )
      // markdown の画像・リンクの相対パス → 絶対 URL
      .replace(/(!?\[[^\]]*\])\((\/[^)]+)\)/g, (_, label, url) => `${label}(${absolutize(url)})`)
      // 見出しを1段下げる
      .replace(/^(#{1,5}) /, '#$1 ')
  )

  // 変換で生じた空行の潰れ・連続をならす
  body = body
    .split('\n')
    .map((l) => (l.trim() === '' ? '' : l))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  const label = title ?? slug
  const header = [
    '## デザインドキュメント (Design Documentation)',
    '',
    `> このセクションは Pepabo Design [${label} コンポーネントのドキュメント](${SITE}/inhouse/components/${slug}/) からの転載です。`,
    `> 原本: design.pepabo.com リポジトリの \`${MDX_SUBDIR}/${slug}.mdx\``,
  ].join('\n')

  return `${header}\n\n${body}`
}

// --- README への差し込み ---------------------------------------------------

/** マーカー間を section で置き換える。マーカーが無ければ null */
function splice(readme, section) {
  const start = readme.match(START_RE)
  const end = readme.match(END_RE)
  if (!start || !end || end.index < start.index) return null
  const before = readme.slice(0, start.index)
  const after = readme.slice(end.index + end[0].length)
  return `${before}${START_MARKER}\n\n${section}\n\n${END_MARKER}${after}`
}

// --- エントリポイント -----------------------------------------------------

function parseArgs(argv) {
  const args = { source: process.env.DESIGN_DOC_SRC ?? null, check: false }
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--check') args.check = true
    else if (argv[i] === '--source') args.source = argv[++i]
    else if (argv[i].startsWith('--source=')) args.source = argv[i].slice('--source='.length)
  }
  return args
}

function main() {
  const { source, check } = parseArgs(process.argv.slice(2))
  if (!source) {
    console.error(
      'design.pepabo.com のパスを指定してください:\n' +
        '  node scripts/sync_design_docs.mjs --source /path/to/design.pepabo.com\n' +
        '  DESIGN_DOC_SRC=/path/to/design.pepabo.com node scripts/sync_design_docs.mjs'
    )
    process.exit(1)
  }

  const mdxDir = resolve(source, MDX_SUBDIR)
  if (!existsSync(mdxDir)) {
    console.error(`mdx が見つかりません: ${mdxDir}`)
    process.exit(1)
  }

  const stats = { updated: [], unchanged: [], skipped: [] }

  for (const file of readdirSync(mdxDir).filter((f) => f.endsWith('.mdx')).sort()) {
    const slug = basename(file, '.mdx')
    const readmePath = join(REPO_ROOT, 'packages', slug, 'README.md')

    if (!existsSync(readmePath)) {
      stats.skipped.push(`${slug} (パッケージなし)`)
      continue
    }

    const readme = readFileSync(readmePath, 'utf8')
    if (!START_RE.test(readme)) {
      stats.skipped.push(`${slug} (マーカーなし)`)
      continue
    }

    const section = convert(readFileSync(join(mdxDir, file), 'utf8'), slug)
    const next = splice(readme, section)
    if (next === null) {
      stats.skipped.push(`${slug} (マーカー不正)`)
      continue
    }

    if (next === readme) {
      stats.unchanged.push(slug)
    } else {
      stats.updated.push(slug)
      if (!check) writeFileSync(readmePath, next)
    }
  }

  const verb = check ? '差分あり' : '更新'
  console.log(`${verb}: ${stats.updated.length} / 一致: ${stats.unchanged.length} / スキップ: ${stats.skipped.length}`)
  if (stats.updated.length) console.log(`  ${verb}: ${stats.updated.join(', ')}`)
  if (stats.skipped.length) console.log(`  スキップ: ${stats.skipped.join(', ')}`)

  if (check && stats.updated.length) process.exit(1)
}

main()
