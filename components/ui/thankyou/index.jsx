"use client";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext, useEffect } from "react";
import styles from "./style.module.scss";

const Thankyou = () => {
  const { theme } = useContext(MyContext);

  useEffect(() => {
    document.querySelector("body").classList.add("thankyou-page");
  });

  return (
    <section className={cn(styles.thankyou, theme ? styles.thankyouDark : "")}>
      <div className={cn("primary-container")}>
        <div className={styles.thankyouCenter}>
          <ImageCustom
            src={"/images/thankyou.svg"}
            width={64}
            height={64}
            alt="thankyou-img"
          />
          <h2 className={styles.title}>Thank you!</h2>
          <p className={styles.subTitle}>
            We have received your query and will get back to you as soon as
            possible.
          </p>

          <Link href="/">
            <Button
              variant={theme ? "blueBtnDark" : "blueBtn"}
              className={styles.thankyouBtn}
              size="lg"
            >
              Continue
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Thankyou;
