import { createContext, useContext } from 'react'

/**
 * コンポーネントのルートクラス名のプレフィックス。
 * - 'in': ビルド済みCSS（classベース）のクラス名（例: .in-button）
 * - 'mixin': mixinベースのサンプル実装で当てているクラス名（例: .mixin-button）
 *   スタイルの実体は src/mixin-based.scss を参照
 */
export type StyleBase = 'in' | 'mixin'

export const StyleBaseContext = createContext<StyleBase>('in')

export const useStyleBase = (): StyleBase => useContext(StyleBaseContext)
