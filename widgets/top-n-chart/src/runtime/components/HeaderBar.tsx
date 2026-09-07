import { React } from 'jimu-core'
import type { IMConfig } from '../../config'

export interface HeaderBarProps {
  config: IMConfig
  /** Right-aligned header content, e.g. the Data Action list. */
  actions?: React.ReactNode
}

const CHARACTER_EFFECT_STYLE: Record<string, React.CSSProperties> = {
  NONE: {},
  SHADOW: { textShadow: '2px 2px 3px rgba(0,0,0,0.6)' },
  OUTLINE: { WebkitTextStroke: '1px currentColor' },
  GLOW: { textShadow: '0 0 6px currentColor, 0 0 10px currentColor' },
  GRADIENT: { background: 'linear-gradient(90deg, currentColor, transparent)', WebkitBackgroundClip: 'text', backgroundClip: 'text' },
  EMBOSS: { textShadow: '-1px -1px 0 rgba(255,255,255,0.4), 1px 1px 0 rgba(0,0,0,0.6)' }
}

export const HeaderBar = (props: HeaderBarProps): React.ReactElement | null => {
  const { config, actions } = props
  if (!config.headerVisible) return actions ? <div className="topn-chart-header"><span className="topn-chart-header-spacer" />{actions}</div> : null
  const title = config.headerTitle?.trim() ? config.headerTitle : 'Top-N Chart'
  const tf = config.titleFormat
  const style: React.CSSProperties = {
    display: 'block',
    fontFamily: tf.fontFamily,
    fontSize: `${tf.fontSize}px`,
    fontWeight: tf.bold ? 700 : undefined,
    fontStyle: tf.italic ? 'italic' : undefined,
    textDecoration: [tf.underline ? 'underline' : '', tf.strikethrough ? 'line-through' : ''].filter(Boolean).join(' ') || undefined,
    backgroundColor: tf.highlightColor || undefined,
    color: tf.fontColor || undefined,
    textAlign: tf.textAlign.toLowerCase() as React.CSSProperties['textAlign'],
    letterSpacing: tf.characterSpacing ? `${tf.characterSpacing}px` : undefined,
    ...CHARACTER_EFFECT_STYLE[tf.characterEffect]
  }
  return (
    <div className="topn-chart-header">
      <span className="topn-chart-header-title" style={style}>{title}</span>
      {actions}
    </div>
  )
}
