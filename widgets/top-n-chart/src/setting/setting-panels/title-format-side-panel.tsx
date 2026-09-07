import { React, hooks, classNames } from 'jimu-core'
import { NumericInput, Select, Button, Icon } from 'jimu-ui'
import { SidePopper, SettingRow } from 'jimu-ui/advanced/setting-components'
import { ThemeColorPicker } from 'jimu-ui/basic/color-picker'
import colorFillIcon from 'jimu-icons/svg/filled/editor/color-fill.svg'
import boldIcon from 'jimu-icons/svg/outlined/editor/bold.svg'
import italicIcon from 'jimu-icons/svg/outlined/editor/italic.svg'
import underlineIcon from 'jimu-icons/svg/outlined/editor/underscore.svg'
import strikeThroughIcon from 'jimu-icons/svg/outlined/editor/strike-through.svg'
import textLeftIcon from 'jimu-icons/svg/outlined/editor/text-left.svg'
import textCenterIcon from 'jimu-icons/svg/outlined/editor/text-center.svg'
import textRightIcon from 'jimu-icons/svg/outlined/editor/text-right.svg'
import textJustifyIcon from 'jimu-icons/svg/outlined/editor/text-justify.svg'
import noneCircleIcon from 'jimu-icons/svg/outlined/editor/none-circle.svg'
import type { ITitleFormatConfig, TitleFormatPreset, TextAlign, CharacterEffect } from '../../config'
import { FORMAT_PRESET_SIZE_MAP, FONT_FAMILIES } from '../../config'
import defaultMessages from '../translations/default'
import '../setting.css'

export interface TitleFormatSidePanelProps {
  isOpen: boolean
  toggle: () => void
  trigger: HTMLElement | HTMLElement[]
  widgetId: string
  titleFormat: ITitleFormatConfig
  onChange: (next: Partial<ITitleFormatConfig>) => void
  onReset: () => void
}

const CHARACTER_EFFECTS: CharacterEffect[] = ['NONE', 'SHADOW', 'OUTLINE', 'GLOW', 'GRADIENT', 'EMBOSS']
const ALIGN_ICON_MAP: Record<TextAlign, any> = {
  LEFT: textLeftIcon,
  CENTER: textCenterIcon,
  RIGHT: textRightIcon,
  JUSTIFY: textJustifyIcon
}

/**
 * Best-effort reconstruction of a native-style "Title format" side panel.
 * ExB does not expose the native rich-text toolbar as a single reusable public
 * component (only the low-level Quill-based `RichTextEditor` primitive exists),
 * so this is a custom approximation built from verified public jimu-ui pieces,
 * not a pixel-exact copy of Esri's internal Text-widget toolbar.
 */
export const TitleFormatSidePanel = (props: TitleFormatSidePanelProps): React.ReactElement => {
  const { isOpen, toggle, trigger, widgetId, titleFormat, onChange, onReset } = props
  const translate = hooks.useTranslation(defaultMessages)

  const handleFormatPresetChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const preset = e.target.value as TitleFormatPreset
    onChange({ formatPreset: preset, fontSize: FORMAT_PRESET_SIZE_MAP[preset] })
  }

  const toggleStyle = (key: 'bold' | 'italic' | 'underline' | 'strikethrough'): void => {
    onChange({ [key]: !titleFormat[key] })
  }

  const setAlign = (align: TextAlign): void => onChange({ textAlign: align })

  return (
    <SidePopper
      position="right"
      isOpen={isOpen}
      toggle={toggle}
      trigger={trigger}
      widgetId={widgetId}
      title={translate('titleFormatPanelTitle')}
      aria-label={translate('titleFormatPanelTitle')}
    >
      <div className="topn-chart-setting title-format-side-panel">
        <SettingRow label={translate('textFormatLabel')} flow="wrap">
          <Select value={titleFormat.formatPreset} onChange={handleFormatPresetChange} className="topn-chart-full-width">
            <option value="H1">{translate('headingLevel', { level: 1, size: FORMAT_PRESET_SIZE_MAP.H1 })}</option>
            <option value="H2">{translate('headingLevel', { level: 2, size: FORMAT_PRESET_SIZE_MAP.H2 })}</option>
            <option value="H3">{translate('headingLevel', { level: 3, size: FORMAT_PRESET_SIZE_MAP.H3 })}</option>
            <option value="H4">{translate('headingLevel', { level: 4, size: FORMAT_PRESET_SIZE_MAP.H4 })}</option>
            <option value="H5">{translate('headingLevel', { level: 5, size: FORMAT_PRESET_SIZE_MAP.H5 })}</option>
            <option value="H6">{translate('headingLevel', { level: 6, size: FORMAT_PRESET_SIZE_MAP.H6 })}</option>
            <option value="PARAGRAPH">{translate('paragraphOption', { size: FORMAT_PRESET_SIZE_MAP.PARAGRAPH })}</option>
          </Select>
        </SettingRow>

        <SettingRow label={translate('fontLabel')} flow="wrap">
          <div className="topn-chart-inline-pair">
            <Select
              value={titleFormat.fontFamily}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange({ fontFamily: e.target.value })}
              className="topn-chart-inline-pair-grow"
            >
              {FONT_FAMILIES.map(font => <option key={font} value={font}>{font}</option>)}
            </Select>
            <NumericInput
              className="topn-chart-compact-numeric"
              value={titleFormat.fontSize}
              onChange={(value: number | undefined) => onChange({ fontSize: value ?? FORMAT_PRESET_SIZE_MAP.PARAGRAPH })}
              min={8}
              max={96}
              step={1}
            />
          </div>
        </SettingRow>

        <SettingRow label={translate('styleLabel')} flow="wrap">
          <div className="topn-chart-inline-pair">
            <Button size="sm" type={titleFormat.bold ? 'primary' : 'default'} onClick={() => toggleStyle('bold')} aria-pressed={titleFormat.bold} title={translate('boldLabel')}><Icon icon={boldIcon} size={16} /></Button>
            <Button size="sm" type={titleFormat.italic ? 'primary' : 'default'} onClick={() => toggleStyle('italic')} aria-pressed={titleFormat.italic} title={translate('italicLabel')}><Icon icon={italicIcon} size={16} /></Button>
            <Button size="sm" type={titleFormat.underline ? 'primary' : 'default'} onClick={() => toggleStyle('underline')} aria-pressed={titleFormat.underline} title={translate('underlineLabel')}><Icon icon={underlineIcon} size={16} /></Button>
            <Button size="sm" type={titleFormat.strikethrough ? 'primary' : 'default'} onClick={() => toggleStyle('strikethrough')} aria-pressed={titleFormat.strikethrough} title={translate('strikethroughLabel')}><Icon icon={strikeThroughIcon} size={16} /></Button>
            <div className="topn-chart-color-trigger">
              <ThemeColorPicker
                type="icon-only"
                icon={<Icon icon={colorFillIcon} size={16} />}
                title={translate('highlightColorLabel')}
                value={titleFormat.highlightColor || '#ffff00'}
                onChange={(color: string) => onChange({ highlightColor: color })}
                aria-label={translate('highlightColorLabel')}
              />
            </div>
            <div className="topn-chart-color-trigger">
              <ThemeColorPicker
                type="icon-only"
                icon={<span className="topn-chart-font-color-icon">A</span>}
                title={translate('fontColorLabel')}
                value={titleFormat.fontColor || '#ffffff'}
                onChange={(color: string) => onChange({ fontColor: color })}
                aria-label={translate('fontColorLabel')}
              />
            </div>
          </div>
        </SettingRow>

        <SettingRow label={translate('alignmentLabel')} flow="wrap">
          <div className="topn-chart-inline-pair">
            {(['LEFT', 'CENTER', 'RIGHT', 'JUSTIFY'] as TextAlign[]).map(align => (
              <Button
                key={align}
                size="sm"
                type={titleFormat.textAlign === align ? 'primary' : 'default'}
                onClick={() => setAlign(align)}
                aria-pressed={titleFormat.textAlign === align}
                title={translate(`align${align.charAt(0)}${align.slice(1).toLowerCase()}Label`)}
              >
                <Icon icon={ALIGN_ICON_MAP[align]} size={16} />
              </Button>
            ))}
          </div>
        </SettingRow>

        <SettingRow label={translate('characterSpacingLabel')} flow="no-wrap">
          <NumericInput
            className="topn-chart-compact-numeric"
            value={titleFormat.characterSpacing}
            onChange={(value: number | undefined) => onChange({ characterSpacing: value ?? 0 })}
            min={-10}
            max={20}
            step={1}
          />
        </SettingRow>

        <div className="topn-chart-group-title">{translate('characterEffectLabel')}</div>
        <div className="topn-chart-character-effect-grid">
          {CHARACTER_EFFECTS.map(effect => (
            <button
              key={effect}
              type="button"
              className={classNames('topn-chart-character-effect-swatch', `topn-chart-character-effect-swatch--${effect.toLowerCase()}`, { 'topn-chart-character-effect-swatch--selected': titleFormat.characterEffect === effect })}
              onClick={() => onChange({ characterEffect: effect })}
              aria-pressed={titleFormat.characterEffect === effect}
              title={translate(`effect${effect.charAt(0)}${effect.slice(1).toLowerCase()}Label`)}
            >
              {effect === 'NONE' ? <Icon icon={noneCircleIcon} size={16} /> : 'A'}
            </button>
          ))}
        </div>

        <div className="topn-chart-reset-row">
          <Button type="secondary" size="sm" onClick={onReset}>{translate('resetTitleFormatLabel')}</Button>
        </div>
      </div>
    </SidePopper>
  )
}
