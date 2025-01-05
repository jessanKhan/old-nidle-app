import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps, memo } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20.0307 15.5302C19.961 15.6 19.8783 15.6553 19.7873 15.693C19.6962 15.7308 19.5986 15.7502 19.5001 15.7502C19.4015 15.7502 19.3039 15.7308 19.2128 15.693C19.1218 15.6553 19.0391 15.6 18.9694 15.5302L12.0001 8.55993L5.03068 15.5302C4.88995 15.671 4.69907 15.75 4.50005 15.75C4.30103 15.75 4.11016 15.671 3.96943 15.5302C3.8287 15.3895 3.74963 15.1986 3.74963 14.9996C3.74963 14.8006 3.8287 14.6097 3.96943 14.469L11.4694 6.96899C11.5391 6.89926 11.6218 6.84394 11.7128 6.80619C11.8039 6.76845 11.9015 6.74902 12.0001 6.74902C12.0986 6.74902 12.1962 6.76845 12.2873 6.80619C12.3783 6.84394 12.461 6.89926 12.5307 6.96899L20.0307 14.469C20.1004 14.5386 20.1557 14.6214 20.1935 14.7124C20.2312 14.8035 20.2506 14.9011 20.2506 14.9996C20.2506 15.0982 20.2312 15.1958 20.1935 15.2868C20.1557 15.3779 20.1004 15.4606 20.0307 15.5302Z"
      fill="#343330"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;