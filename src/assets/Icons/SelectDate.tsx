import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#000"
      fillOpacity={0.2}
      d="M16.16 3.666h-2.374V2.48a.396.396 0 1 0-.792 0v1.187H7.452V2.48a.396.396 0 1 0-.791 0v1.187H4.286a1.982 1.982 0 0 0-1.98 1.98v10.291a1.982 1.982 0 0 0 1.98 1.98H16.16a1.981 1.981 0 0 0 1.979-1.98V5.646a1.98 1.98 0 0 0-1.98-1.98Zm1.188 12.271a1.188 1.188 0 0 1-1.187 1.188H4.286a1.187 1.187 0 0 1-1.188-1.188V9.208h14.25v6.73Zm0-7.52H3.098V5.645c0-.656.53-1.188 1.188-1.188H6.66v1.188a.396.396 0 0 0 .791 0V4.458h5.542v1.188a.396.396 0 0 0 .792 0V4.458h2.375a1.188 1.188 0 0 1 1.187 1.188v2.77Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
