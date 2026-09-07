import { React } from 'jimu-core'
import { TextInput } from 'jimu-ui'

export interface SearchBoxProps {
  value: string
  onChange: (value: string) => void
}

export const SearchBox = (props: SearchBoxProps): React.ReactElement => {
  const { value, onChange } = props
  return (
    <div className="topn-chart-search">
      <TextInput
        size="sm"
        allowClear
        placeholder="Search categories..."
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        aria-label="Search categories"
      />
    </div>
  )
}
