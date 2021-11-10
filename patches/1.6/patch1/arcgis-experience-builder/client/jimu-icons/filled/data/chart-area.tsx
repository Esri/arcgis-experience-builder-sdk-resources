import { React, classNames } from 'jimu-core'
import { Icon, SVGIconProps } from 'jimu-ui'
import svg from '../../svg/filled/data/chart-area.svg'

export const ChartAreaFilled = (props: SVGIconProps) => {
  const { className, ...others } = props
  const classes = classNames('jimu-icon-component', className)
  return <Icon className={classes} icon={svg} {...others} ></Icon>
}
