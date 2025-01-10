"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import TextRevel from "@/components/ui/sectionAnimation";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";

import styles from "./style.module.scss";

const AemHeroBanner = ({ props }) => {
  const { theme } = useContext(MyContext);
  return (
    <>
      <section
        className={`${styles.heroBannerStyle} ${
          theme ? styles.heroBannerDark : ""
        }`}
      >
        <TextRevel>
          <div className={cn("header-container")}>
            <div className={cn(styles.flexSection, "primary-container")}>
              <h1 className={cn(styles.title, "gradient-text")}>
                AEM Managed <span>Services</span> Tailored to Your Needs
              </h1>
              <div className={styles.contentSec}>
                <p className={cn(styles.leadText, "gradient-text")}>
                  Unlock the full potential of Adobe Experience Manager with our
                  end-to-end AEM Managed Services. From development to
                  migration, we ensure seamless implementation and ongoing
                  support.
                </p>
                <Link href="/">
                  <Button
                    variant={theme ? "blueBtnDark" : "blueBtn"}
                    className={styles.headerBtn}
                    size="md"
                  >
                    Request a Free AEM Consultation
                    <Icons.ArrowRight size={20} className="ms-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </TextRevel>
      </section>
    </>
  );
};

export default AemHeroBanner;
