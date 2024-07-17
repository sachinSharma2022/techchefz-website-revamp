"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import Link from "next/link";
import styles from "./style.module.scss";

const AnimatedFooterLogo = (props) => {
  return (
    <Link href={props.href || "/"} className={cn(styles.animatedLogo)}>
      <div className={styles.logo}>
        <ImageCustom
          src="/images/animated-logo/logo-white.svg"
          width={153}
          height={40}
          alt="Techchefz Digital"
        />
        <h4 className={styles.header}>digital</h4>
      </div>
    </Link>
  );
};

export default AnimatedFooterLogo;
