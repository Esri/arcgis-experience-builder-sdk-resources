import { React, AbstractDataAction, type DataRecordSet, type DataLevel } from 'jimu-core'
import { Popper } from 'jimu-ui'

export default class ExportJson extends AbstractDataAction {
  isSupported (dataSets: DataRecordSet[], dataLevel: DataLevel): Promise<boolean> {
    return Promise.resolve(true)
  }

  onExecute (dataSets: DataRecordSet[], dataLevel: DataLevel, actionConfig?: any): Promise<React.ReactElement> {
    const ids = []
    dataSets.forEach(dataSet => {
      if (!ids.includes(dataSet.dataSource.id)) {
        ids.push(dataSet.dataSource.id)
      }
    })

    return Promise.resolve(<MyPopper ids={ids} />)
  }
}

interface PopperProps {
  ids: string[]
}
function MyPopper (props: PopperProps) {
  const [isOpen, setIsOpen] = React.useState(true)
  const popperRef = document.querySelector('.active-data-action-item')
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return <Popper
    arrowOptions
    open={isOpen}
    toggle={handleToggle}
    reference={popperRef}
    style={{ padding: '10px' }}
    >The data source ids: <br/>{props.ids.join(',')}</Popper>
}
