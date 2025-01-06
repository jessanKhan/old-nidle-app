import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react"
const SvgComponent = (props: SvgProps) => (
  <Svg  fill="none" {...props}>
    <Path
      fill="#000"
      d="M23.278 31.072V34H12.946V16.588h3.6v14.484h6.732Zm22.492-5.784c0 1.272-.216 2.452-.648 3.54a8.177 8.177 0 0 1-1.812 2.82c-.776.792-1.712 1.416-2.808 1.872-1.096.448-2.312.672-3.648.672-1.336 0-2.552-.224-3.648-.672a8.522 8.522 0 0 1-2.82-1.872 8.324 8.324 0 0 1-1.824-2.82c-.424-1.088-.636-2.268-.636-3.54 0-1.272.212-2.448.636-3.528a8.324 8.324 0 0 1 1.824-2.82 8.373 8.373 0 0 1 2.82-1.86c1.096-.456 2.312-.684 3.648-.684 1.336 0 2.552.228 3.648.684a8.157 8.157 0 0 1 2.808 1.872 8.177 8.177 0 0 1 1.812 2.82c.432 1.08.648 2.252.648 3.516Zm-3.684 0c0-.912-.12-1.728-.36-2.448-.24-.728-.588-1.344-1.044-1.848a4.313 4.313 0 0 0-1.644-1.164c-.64-.272-1.368-.408-2.184-.408-.816 0-1.548.136-2.196.408-.648.264-1.2.652-1.656 1.164-.448.504-.792 1.12-1.032 1.848-.24.72-.36 1.536-.36 2.448 0 .92.12 1.744.36 2.472.24.72.584 1.332 1.032 1.836a4.605 4.605 0 0 0 1.656 1.164c.648.264 1.38.396 2.196.396.816 0 1.544-.132 2.184-.396a4.492 4.492 0 0 0 1.644-1.164c.456-.504.804-1.116 1.044-1.836.24-.728.36-1.552.36-2.472Zm18.785-.156h5.976v7.188a9.411 9.411 0 0 1-2.844 1.428c-1 .296-2.06.444-3.18.444-1.432 0-2.728-.22-3.888-.66-1.16-.448-2.152-1.068-2.976-1.86a8.185 8.185 0 0 1-1.908-2.82c-.448-1.088-.672-2.276-.672-3.564 0-1.304.212-2.5.636-3.588a8.109 8.109 0 0 1 1.836-2.808c.792-.784 1.748-1.396 2.868-1.836 1.128-.44 2.388-.66 3.78-.66.72 0 1.392.06 2.016.18.624.112 1.2.272 1.728.48.528.2 1.012.44 1.452.72.44.28.84.588 1.2.924l-1.044 1.608c-.16.256-.368.412-.624.468-.256.056-.536-.008-.84-.192a10.095 10.095 0 0 0-.852-.468 5.764 5.764 0 0 0-.876-.372 6.151 6.151 0 0 0-1.02-.24 8.54 8.54 0 0 0-1.272-.084c-.808 0-1.54.14-2.196.42a4.756 4.756 0 0 0-1.68 1.188 5.37 5.37 0 0 0-1.056 1.848c-.248.72-.372 1.524-.372 2.412 0 .96.136 1.82.408 2.58.272.752.656 1.388 1.152 1.908.496.52 1.088.916 1.776 1.188.696.272 1.468.408 2.316.408.576 0 1.088-.056 1.536-.168.456-.12.9-.28 1.332-.48v-2.928h-1.968c-.232 0-.416-.06-.552-.18a.651.651 0 0 1-.192-.48v-2.004ZM77.414 34H73.79V16.588h3.624V34ZM99.97 16.588V34h-1.86c-.28 0-.516-.044-.708-.132a1.79 1.79 0 0 1-.564-.48l-8.676-11.04c.024.28.04.556.048.828.016.272.024.524.024.756V34h-3.18V16.588h1.896c.152 0 .28.008.384.024a.727.727 0 0 1 .3.084.99.99 0 0 1 .252.168c.08.072.168.168.264.288l8.736 11.088a18.414 18.414 0 0 1-.072-.876c-.016-.288-.024-.56-.024-.816v-9.96h3.18Z"
    />
    <Path
      fill="#C9C9C9"
      fillRule="evenodd"
      d="M56.395 50.654c-2.548-2.648-5.053-4.907-8.27-6.085-3.01-1.113-6.154-1.453-9.327-.565-.556.157-1.083.172-1.155-.49-.029-.255.39-.741.679-.81 2.784-.66 5.69-.61 8.45.148a18.032 18.032 0 0 1 7.58 4.295c1.082 1.016 1.97 2.219 3.017 3.268.348.29.79.445 1.245.436 2.05-.035 4.1-.132 6.136-.229a9461.662 9461.662 0 0 0 39.17-1.933c1.369-.068 1.474-.358.897-1.56l-1.523-3.629c-.209-.667-.502-1.9 0-1.5 0 .4.858 1.004 1.287 1.256.452 1.386 1.123 2.7 1.592 4.08.303.885.754 1.242 1.729 1.193 1.563-.08 3.14-.23 4.624.637.522.285.955.708 1.251 1.221.296.513.444 1.097.428 1.688.032 1.232-.394 2.427-1.621 2.914a12.763 12.763 0 0 1-3.505.787c-.999.09-1.443.305-1.508 1.432-.188 4.08-1.7 7.75-3.754 11.24a19.398 19.398 0 0 1-5.71 6.273c-3.513 2.427-7.436 3.053-11.609 2.588-5.984-.662-10.828-3.58-14.665-7.96-3.577-4.074-6.858-8.422-10.035-12.804-.783-1.073-1.487-1.317-2.602-1.328a41713.66 41713.66 0 0 1-51.114-.425c-2.087 0-4.177-.05-6.266-.133-.361 0-.68-.304-1.022-.469.343-.2.679-.554 1.032-.572 3.451-.186 6.909-.294 10.36-.47 12.554-.625 25.105-1.26 37.654-1.907 1.762-.09 3.523-.165 5.284-.276a8.2 8.2 0 0 0 1.27-.31Zm7.496 6.694c-.4-.548-.729-1.15-1.249-1.98 2.257 0 4.061-.021 5.899.004 12.063.131 24.124.265 36.182.401 1.718.018 1.675.086 1.473 1.772a30.246 30.246 0 0 1-2.79 9.16 16.95 16.95 0 0 1-6.06 6.94 14.816 14.816 0 0 1-10.342 2.505 21.447 21.447 0 0 1-6.624-2.08 28.656 28.656 0 0 1-9.818-7.806c-2.34-2.867-4.465-5.928-6.67-8.916Zm37.154-6.425h2.039l2.054-.004c.65 0 .945.25.945.967l.001.115c.004 1.316.004 1.316-1.473 1.316h-3.545c-.801-.014-1.444-.286-1.465-1.206-.022-.92.639-1.188 1.444-1.188Zm6.984 2.273c-.351-.194-.524-.681-.733-1.268-.1-.284-.209-.59-.35-.898v-.01a33.473 33.473 0 0 1 3.822.082c.289.036.646.76.722 1.207.098.576-.267 1.009-.938 1.038a2.102 2.102 0 0 1-.213 0c-.237-.008-.487.006-.736.02-.577.033-1.154.066-1.574-.171Z"
      clipRule="evenodd"
    />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo