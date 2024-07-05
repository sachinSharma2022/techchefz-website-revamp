"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";
import styles from "./style.module.scss";

const AnimatedLogo = (props) => {
  const { theme, setTheme } = useContext(MyContext);
  const handleClick = () => {
    mobileMenuShow && setMobileMenuShow(false);
    isTechMenu && setTechMenu(false);
    isMoreMenu && setMoreMenu(false);
  };
  return (
    <Link
      href={props.href || "/"}
      className={cn(
        styles.animatedLogo,
        theme ? styles.animatedLogoDark : "",
        props.className
      )}
      onClick={handleClick}
    >
      <div className={styles.logo}>
        <ImageCustom
          src={cn(
            theme
              ? "/images/animated-logo/logo-white.svg"
              : "/images/animated-logo/logo.svg"
          )}
          width={153}
          height={40}
          alt="header-logo"
        />
        <h4 className={styles.header}>digital</h4>
      </div>
    </Link>
  );
};

export default AnimatedLogo;
