import React, { CSSProperties } from 'react'
import { createFromIconfontCN } from '@ant-design/icons'
import './index.less'

interface IProps{
  type: string
  spin?: boolean
  rotate?: number
  style?: CSSProperties
}

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
})

export default function SvgIcon (props: IProps) {
  return (
    <IconFont className="r-svg-icon" style={props.style} spin={props.spin} rotate={props.rotate} type={props.type}></IconFont>
  )
}
