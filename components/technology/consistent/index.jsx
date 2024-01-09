import React from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

import styles from "./style.module.scss";

const Consistent = () => {
  return (
    <section className={styles.consistent}>
      <div className={styles.consistentImg}>
        <ImageCustom
          src={"/images/consistent-img.png"}
          width={1000}
          height={600}
          alt="img"
        />
      </div>
      <div className={styles.contentSec}>
        <h3 className={styles.consistentTitle}>
          <span>7+ years</span> of consistent excellence, meeting deadlines and
          budgets with precision.
        </h3>
        <div>
          <p className={styles.consistentText}>
            For over seven years, Techchefz has been at the forefront of
            technological innovation. But what truly sets us apart is our
            unwavering commitment to excellence consistently, year after year.
          </p>
          <Button variant="outline" size="sm">
            Learn More <Icons.ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Consistent;
