"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";

import styles from "./style.module.scss";

const Consistent = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.consistent}  ${theme ? styles.consistentDark : ""}`}
    >
      <div className={styles.primaryContainer}>
        <div className={cn("primary-container")}>
          <div className={styles.consistentImgContainer}>
            <div className={styles.consistentImg}>
              <ImageCustom
                src={"/images/consistent-img.png"}
                width={1000}
                height={600}
                alt="img"
              />
            </div>
          </div>

          <div className={styles.contentSec}>
            <h3 className={styles.consistentTitle}>
              <span>7+ years</span> of consistent excellence, meeting deadlines
              and budgets with precision.
            </h3>
            <div>
              <p className={styles.consistentText}>
                For over seven years, Techchefz has been at the forefront of
                technological innovation. But what truly sets us apart is our
                unwavering commitment to excellence consistently, year after
                year.
              </p>
              <Button
                variant={theme ? "lightBlueOutline" : "outline"}
                size="md"
              >
                Learn More <Icons.ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consistent;
