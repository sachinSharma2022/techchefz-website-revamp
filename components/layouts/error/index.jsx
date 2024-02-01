"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext, useEffect } from "react";
import styles from "./style.module.scss";

const Error = () => {
  const { theme } = useContext(MyContext);

  //   useEffect(() => {
  //     document.querySelector("body").classList.add("error-page");
  //   });

  return (
    <section className={cn(styles.error, theme ? styles.errorDark : "")}>
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.errorLeft}>
          <ImageCustom
            src={"/images/not-found.svg"}
            width={700}
            height={800}
            alt="error-img"
          />
        </div>
        <div className={styles.errorRight}>
          <h2 className={styles.title}>Oops!!</h2>
          <h4 className={styles.subTitle}>
            The page you are looking for cannot be found.
          </h4>
          <p className={styles.description}>Few possible reasons :</p>
          <ul className={styles.listSection}>
            <li>The address may have been typed incorrectly.</li>
            <li>It may be a broken or outdated link.</li>
          </ul>
          <Link href="/">
            <Button variant="blueBtn" className={styles.errorBtn} size="lg">
              <Icons.ArrowLeft size={20} /> Back to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
