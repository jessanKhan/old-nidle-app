import * as React from 'react';
import Svg, { SvgProps, G, Rect, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg width={56} height={56} fill="none" {...props}>
    <G filter="url(#a)">
      <Rect width={44} height={44} x={6} y={4} fill="#4C4C4C" rx={10} />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M24.25 28.5h12.5a1.25 1.25 0 0 1 0 2.5h-12.5a1.25 1.25 0 0 1 0-2.5Zm0 5h12.5a1.25 1.25 0 0 1 0 2.5h-12.5a1.25 1.25 0 0 1 0-2.5Zm7.5-10h5a1.25 1.25 0 0 1 0 2.5h-5a1.25 1.25 0 0 1 0-2.5Zm-9.071 2.392L18 21.215l1.767-1.769 2.912 2.912L29.035 16l1.769 1.767-8.125 8.125Z"
        clipRule="evenodd"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
