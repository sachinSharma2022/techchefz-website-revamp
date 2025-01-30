"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { base_Uri } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";

const TeamBehind = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <div
      className={cn(
        styles.teamBehindWrapper,
        theme ? styles.teamBehindDark : ""
      )}
    >
      <ImageCustom
        src={
          props?.Image?.data?.attributes?.url
            ? `${base_Uri}${props?.Image?.data?.attributes?.url}`
            : `${base_Uri}/`
        }
        alt=""
        width={2560}
        height={1068}
        className={styles.bannerImg}
      />
    </div>
  );
};

export default TeamBehind;
