import { React } from 'jimu-core'
import { Loading, Alert, Button } from 'jimu-ui'
import type { ChartDataState } from '../state/types'

export interface StatusStatesProps {
  state: ChartDataState
  onRetry: () => void
}

/**
 * Renders the LOADING / UNCONFIGURED / EMPTY / ERROR / UNSUPPORTED states.
 * READY (and TOO_MANY_CATEGORIES, which still renders bars) are handled by the caller.
 */
export const StatusStates = (props: StatusStatesProps): React.ReactElement | null => {
  const { state, onRetry } = props

  if (state.status === 'LOADING' && state.bars.length === 0) {
    return <div className="topn-chart-status"><Loading /></div>
  }

  if (state.status === 'UNCONFIGURED') {
    return (
      <div className="topn-chart-status">
        <Alert type="info" text={state.message ?? 'Please configure this widget.'} />
      </div>
    )
  }

  if (state.status === 'EMPTY') {
    return (
      <div className="topn-chart-status">
        <Alert type="info" text="No results for the current configuration." />
      </div>
    )
  }

  if (state.status === 'UNSUPPORTED' || state.status === 'ERROR') {
    return (
      <div className="topn-chart-status">
        <Alert type="error" text={state.message ?? 'Unable to load results.'} />
        <Button type="secondary" size="sm" onClick={onRetry} className="topn-chart-retry">Retry</Button>
      </div>
    )
  }

  return null
}
