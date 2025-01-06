import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={164}
    height={37}
    fill="none"
    {...props}
  >
    <Path
      fill="#C9C9C9"
      fillRule="evenodd"
      d="M106.188 9.654c-2.548-2.648-5.053-4.907-8.269-6.085-3.01-1.113-6.154-1.453-9.327-.565-.556.157-1.083.172-1.155-.49-.03-.254.39-.741.678-.81 2.784-.66 5.691-.61 8.45.148a18.033 18.033 0 0 1 7.58 4.295c1.083 1.016 1.971 2.219 3.017 3.268.349.29.791.445 1.246.436 2.05-.035 4.1-.132 6.136-.229a9398.646 9398.646 0 0 0 39.17-1.933c1.369-.068 1.473-.358.896-1.56L153.087 2.5c-.209-.667-.501-1.9 0-1.5 0 .4.859 1.004 1.288 1.256.451 1.386 1.122 2.7 1.591 4.08.304.885.755 1.243 1.729 1.193 1.563-.08 3.141-.23 4.624.637.522.285.955.708 1.251 1.221.297.513.445 1.097.428 1.688.033 1.232-.393 2.427-1.62 2.914a12.771 12.771 0 0 1-3.505.787c-1 .09-1.444.305-1.509 1.432-.187 4.08-1.7 7.75-3.754 11.24a19.38 19.38 0 0 1-5.71 6.273c-3.512 2.427-7.436 3.054-11.608 2.588-5.985-.662-10.829-3.58-14.666-7.96-3.577-4.074-6.858-8.422-10.034-12.803-.783-1.074-1.487-1.318-2.603-1.329-17.037-.131-74.075-.273-91.114-.425-2.086 0-14.176-.05-16.266-.133-.36 0-.679-.304-1.021-.469.342-.2.678-.554 1.032-.572 3.45-.186 16.909-.294 20.36-.47 12.553-.624 65.105-1.26 77.654-1.907 1.761-.09 3.522-.165 5.284-.276.431-.07.856-.173 1.27-.31Zm7.497 6.694c-.401-.548-.729-1.15-1.249-1.98 2.256 0 4.061-.021 5.898.004 12.063.131 24.124.265 36.182.401 1.719.018 1.675.086 1.473 1.772a30.246 30.246 0 0 1-2.79 9.16 16.948 16.948 0 0 1-6.06 6.94 14.818 14.818 0 0 1-10.342 2.505 21.46 21.46 0 0 1-6.624-2.08 28.652 28.652 0 0 1-9.817-7.806c-2.34-2.867-4.466-5.928-6.671-8.916Zm37.153-6.425h2.039l2.054-.004c.65 0 .946.25.946.967V11c.005 1.316.005 1.316-1.473 1.316h-3.544c-.802-.014-1.444-.286-1.466-1.206-.021-.92.639-1.188 1.444-1.188Zm6.984 2.273c-.35-.194-.524-.681-.732-1.268-.101-.284-.21-.59-.351-.898v-.01a33.498 33.498 0 0 1 3.823.082c.289.036.646.76.722 1.207.097.576-.267 1.009-.939 1.038a2.102 2.102 0 0 1-.213 0c-.236-.008-.486.006-.736.02-.576.033-1.153.066-1.574-.171Z"
      clipRule="evenodd"
    />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo
