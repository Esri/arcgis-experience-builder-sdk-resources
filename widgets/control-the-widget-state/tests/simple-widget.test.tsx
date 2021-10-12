import { React } from 'jimu-core'
import _Widget from '../src/runtime/widget'
import { widgetRender, wrapWidget } from 'jimu-for-test'

const render = widgetRender()
describe('test control the widget state widget', () => {
  it('control the widget state test', () => {
    const Widget = wrapWidget(_Widget, {
      config: { exampleConfigProperty: 'a' }
    })
    const { queryByText } = render(<Widget widgetId="Widget_1" />)
    expect(queryByText('exampleConfigProperty: a').tagName).toBe('P')
  })
})
