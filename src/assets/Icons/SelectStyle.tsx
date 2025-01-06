import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg width={20} height={14} fill="none" {...props}>
    <Path
      fill="#000"
      fillOpacity={0.2}
      d="M19.723.666v1.267h-19V.666h19ZM1.99 5.733H.723V4.466H1.99v1.267Zm2.533 0H3.256V4.466h1.267v1.267ZM5.79 4.466h1.266v1.267H5.79V4.466Zm3.8 1.267H8.323V4.466H9.59v1.267Zm2.533 0h-1.266V4.466h1.266v1.267Zm1.267-1.267h1.266v1.267H13.39V4.466Zm3.8 1.267h-1.267V4.466h1.267v1.267Zm1.266-1.267h1.267v1.267h-1.267V4.466Zm-15.2 5.067H.723V8.266h2.533v1.267Zm1.267-1.267h2.533v1.267H4.523V8.266Zm3.8 0h2.534v1.267H8.323V8.266Zm3.8 0h2.534v1.267h-2.534V8.266Zm3.8 0h2.533v1.267h-2.533V8.266Zm-15.2 3.8h3.8v1.267h-3.8v-1.267Zm5.067 0h1.266v1.267H5.79v-1.267Zm2.533 0h3.8v1.267h-3.8v-1.267Zm7.6 0h3.8v1.267h-3.8v-1.267Zm-2.533 0h1.266v1.267H13.39v-1.267Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
