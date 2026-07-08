import React, { FC, ReactNode } from 'react'
import { StyleBaseContext } from '../styleBase'

export interface Props {
  children: ReactNode
}

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
}

const labelStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '12px',
  fontWeight: 'normal',
  color: '#767676'
}

/**
 * classベース（.in-*）とmixinベース（.mixin-*）の実装を
 * 同一画面に並べて表示し、スタイリングの差分を確認しやすくするためのラッパー。
 * mixinベースのスタイルは src/mixin-based.scss で定義している。
 */
const StyleComparison: FC<Props> = (props: Props) => {
  const { children } = props

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <section style={sectionStyle}>
        <h4 style={labelStyle}>classベース（.in-*）</h4>
        <div>
          {children}
        </div>
      </section>
      <section style={sectionStyle}>
        <h4 style={labelStyle}>mixinベース（.mixin-*）</h4>
        <div>
          <StyleBaseContext.Provider value='mixin'>
            {children}
          </StyleBaseContext.Provider>
        </div>
      </section>
    </div>
  )
}

export default StyleComparison
