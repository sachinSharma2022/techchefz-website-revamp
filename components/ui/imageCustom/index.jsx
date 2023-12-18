import Image from "next/image"
import { cn } from "../../../lib/utils"
import styles from "./style.module.scss"

function ImageCustom({
  className,
  containerStyle,
  src,
  height,
  width,
  alt,
  layout,
}) {
  return (
    <div className={cn(styles.imgContainerStyle, containerStyle)}>
      <Image
        src={`${process.env.NEXT_PUBLIC_SITE_BASE_URL}${API.imageBasePath}${src}`}
        width={width}
        height={height}
        alt={alt || "theme image"}
        className={cn(className)}
        layout={layout}
      />
    </div>
  )
}

export { ImageCustom }
