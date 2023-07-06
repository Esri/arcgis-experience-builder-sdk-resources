import { React, getAppStore, appActions } from 'jimu-core'
import _Widget from '../src/runtime/widget'
import { widgetRender, wrapWidget, getInitState, getDefaultAppConfig } from 'jimu-for-test'
import { fireEvent } from '@testing-library/react'

const render = widgetRender()
const Widget = wrapWidget(_Widget, { config: {} })

jest.mock('jimu-core', () => {
  return {
    ...jest.requireActual('jimu-core'),
    loadArcGISJSAPIModule: jest.fn().mockImplementation(moduleId => {
      let module
      if (moduleId === 'esri/layers/FeatureLayer') {
        module = jest.fn().mockImplementation(() => {
          return {
            queryFeatureCount: () => Promise.resolve(5)
          }
        })
      }
      return Promise.resolve(module)
    })
  }
})

describe('test show-unit-tests widget', () => {
  it('test p1, use render props', () => {
    const { queryByText, rerender } = render(<Widget config={{ p1: true }} />)
    expect(queryByText('p1 is checked.').className).toBe('has-p1')

    rerender(<Widget config={{ p1: false }} />)
    expect(queryByText('p1 is checked.')).toBeNull()
  })

  it('test label, map from state', () => {
    getAppStore().dispatch(appActions.updateStoreState(getInitState().merge({
      appConfig: getDefaultAppConfig().merge({
        widgets: {
          w1: {
            label: 'W 1'
          }
        }
      })
    })))

    const renderResult = render(<Widget widgetId="w1" />)
    expect(renderResult.queryByText('Widget label:W 1')).toBeInTheDocument()
  })

  it('test theme variable', () => {
    getAppStore().dispatch(appActions.updateStoreState(getInitState().merge(({
      theme: {
        colors: {
          black: '#FFF'
        }
      }
    }) as any)))

    const renderResult = render(<Widget />)
    expect(renderResult.queryByText('Theme variable:#FFF')).toBeInTheDocument()
  })

  it('test event', () => {
    const { queryByText, queryByRole } = render(<Widget />)
    fireEvent.click(queryByRole('button', { name: 'Click me' }))
    expect(queryByText('Count:1')).toBeInTheDocument()
  })

  it('test api', async () => {
    const { findByText, queryByRole } = render(<Widget />)
    fireEvent.click(queryByRole('button', { name: 'Query features' }))
    await findByText('Query Result count:5')
  })
})
