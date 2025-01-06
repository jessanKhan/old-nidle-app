import * as React from "react"
import Svg, { SvgProps, Circle, Rect, Path } from "react-native-svg"
import { memo } from "react"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={114}
    height={114}
    fill="none"
    {...props}
  >
    <Circle cx={57} cy={57} r={57} fill="#4EDB38" fillOpacity={0.2} />
    <Rect width={82} height={82} x={16} y={16} fill="#4EDB38" rx={41} />
    <Path
      fill="#fff"
      d="M74.92 40.543a1.124 1.124 0 0 0-1.463-1.462l-32.73 13.093h-.003l-1.017.405a1.126 1.126 0 0 0-.184 1.995l.922.585.002.005 11.24 7.15 3.577 5.621C57 70.5 57 68.25 57 67.125a10.128 10.128 0 0 1 11.308-10.058l6.61-16.524Zm-4.124 4.253L53.934 61.657l-.484-.76a1.125 1.125 0 0 0-.346-.347l-.76-.483 16.86-16.862 2.651-1.06-1.057 2.65h-.002Z"
    />
    <Path
      fill="#fff"
      d="M75.001 67.125a7.875 7.875 0 1 1-15.75 0 7.875 7.875 0 0 1 15.75 0Zm-4.484-3.778a1.125 1.125 0 0 0-1.544.387l-2.632 4.388-1.231-1.231a1.126 1.126 0 1 0-1.593 1.593l1.741 1.74a1.689 1.689 0 0 0 2.642-.325l3.004-5.008a1.125 1.125 0 0 0-.387-1.544Z"
    />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
