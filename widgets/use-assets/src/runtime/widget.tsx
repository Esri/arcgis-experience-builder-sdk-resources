/** @jsx jsx */
import { type AllWidgetProps, jsx } from 'jimu-core'
import { Icon } from 'jimu-ui'
import { type Config } from './config'
const smallImage = require('./small-image.png')

const svg2 = require('./mysvg2.svg')
const svg3 = require('./assets/icons/mysvg3.svg')

export default function (props: AllWidgetProps<Config>) {
  return (
    <div className="widget-use-assets jimu-widget" style={{ overflow: 'auto' }}>
      <h3>Files in the <b>assets</b> folder will be copied to the <b>dist</b> folder when compiled, for both the <b>runtime</b> and <b>setting</b> folders.</h3>
      <br/>
      <div className="m-2">
        <h4>1. Use <b><code>props.context.folderUrl</code></b> to load a large image from a URL. The image must be put in the <b>assets</b> folder because the <b>assets</b> folder will be copied to the <b>dist</b> directory on compile.</h4>
        <img style={{ width: '200px', height: '200px' }} src={`${props.context.folderUrl}dist/runtime/assets/large-image.jpg`}/>
      </div>

      <div className="m-2">
        <h4>2. Use <b><code>require</code></b> to load an image. You don't need to put this image in the <b>assets</b> folder because when you use this approach, the image is inlined on compile.</h4>
        <img style={{ width: '200px', height: '200px' }} src={smallImage}/>
      </div>

      <div>
        <h4>3. SVG image</h4>
        <div>
          <div className="m-2">
            <h5>3.1. Use <b><code>props.context.folderUrl</code></b> to load an SVG image from URL. The image must be put in the <b>assets</b> folder. The SVG is rendered as image.</h5>
            <img style={{ width: '200px', height: '200px' }} src={`${props.context.folderUrl}dist/runtime/assets/mysvg.svg`}/>
          </div>

          <div className="m-2">
            <h5>3.2. Use the <b><code>Icon</code></b> component to render an SV image from a URL. The image must be put in the <b>assets</b> folder. The SVG is rendered as SVG DOM.</h5>
            <Icon icon={`${props.context.folderUrl}dist/runtime/assets/mysvg.svg`} color="red" width="200px" height="200px"/>
          </div>

          <div className="m-2">
            <h5>3.3. Use <b>require</b> to load a SVG file and use an <b><code>Icon</code></b> component to render. The SVG file is inlined on compile and is rendered as image.</h5>
            <Icon icon={svg2} color="red" width="200px" height="200px"/>
          </div>

          <div className="m-2">
            <h5>
              3.4. Use <b>require</b> to load a SVG file located in the <b>src/assets/icons</b> folder. Then use the <b><code>Icon</code></b> component to render. The SVG file is inlined on compile and is rendered as SVG DOM.
            </h5>
            <Icon icon={svg3} color="red" width="200px" height="200px"/>
          </div>
        </div>
      </div>

    </div>
  )
}
