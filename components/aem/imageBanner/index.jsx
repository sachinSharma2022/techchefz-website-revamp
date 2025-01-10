"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import { ImageCustom } from "@/components/ui/imageCustom";
import styles from "./style.module.scss";

const AemImageBanner = ({ props }) => {
  const { theme } = useContext(MyContext);
  return (
    <>
      <ImageCustom
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGl0JTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D"
        width={2000}
        height={2000}
        alt="banner image"
        className={styles.imageBanner}
      />
    </>
  );
};

export default AemImageBanner;
