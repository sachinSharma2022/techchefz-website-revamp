import Image from "next/image";

import styles from "./style.module.scss";

function ImageCustom({ src, height, width, alt }) {
  return (
    <div className={`${styles.imgContainerStyle}`}>
      <Image src={src} width={width} height={height} alt={alt} id="globalimg" />
    </div>
  );
}

export { ImageCustom };
