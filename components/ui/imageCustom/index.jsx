import Image from "next/image";

import styles from "./style.module.scss";

function ImageCustom({ src, height, width, alt, className }) {
  return (
    <div className={`${styles.imgContainerStyle} ${className}`}>
      <Image src={src} width={width} height={height} alt={alt} />
    </div>
  );
}

export { ImageCustom };
