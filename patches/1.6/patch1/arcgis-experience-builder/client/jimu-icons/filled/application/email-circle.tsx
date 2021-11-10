import { React, classNames } from 'jimu-core'
import { Icon, SVGIconProps } from 'jimu-ui'
import svg from '../../svg/filled/application/email-circle.svg'

export const EmailCircleFilled = (props: SVGIconProps) => {
  const { className, ...others } = props
  const classes = classNames('jimu-icon-component', className)
  return <Icon className={classes} icon={svg} {...others} ></Icon>
}
