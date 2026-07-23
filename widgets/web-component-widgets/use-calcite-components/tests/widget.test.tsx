import { React } from 'jimu-core'
import _Widget from '../src/runtime/widget'
import { widgetRender, wrapWidget } from 'jimu-for-test'

jest.mock('calcite-components', () => ({}))

const render = widgetRender()
describe('test widget', () => {
  it('simple test', () => {
    const Widget = wrapWidget(_Widget, {
      config: { text: 'calcite' },
      context: {
        folderUrl: ''
      } as any
    })
    const { queryByText } = render(<Widget widgetId="Widget_1" />)
    expect(queryByText('Hello, calcite').tagName).toBe('H1')
  })
})
