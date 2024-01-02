import React from "react";
import { ImageCustom } from "@/components/ui/imageCustom";

import styles from "./style.module.scss";

function Solutions() {
  return (
    <section className={styles.solutions}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-3 col-lg-3">
            <h6 className={styles.solutionTitle}>Solutions</h6>
          </div>
          <div className="col-md-7 col-lg-8">
            <h3 className={styles.solutionHeading}>
              Revving Up Digital Experiences: Ride, Record, and Recall.
            </h3>
            <p className={styles.solutionText}>
              Our motorcycle mobile application development team aimed to craft
              an MVP tailored for the iconic Royal Enfield brand. This app would
              be effortlessly scalable and optimized post initial rider
              feedback. Lets delve into the strategy that propelled us toward
              this objective.
            </p>
          </div>
        </div>

        <div className={styles.solutionImgs}>
          <div className="row justify-content-center ">
            <div className="col-md-12 col-lg-12">
              <ImageCustom
                src="/images/solution1.png"
                width={1060}
                height={500}
                alt="content-img"
              />
            </div>
          </div>
          <div className={styles.solutionBottomImgs}>
            <div >
              <ImageCustom
                src="/images/solution2.png"
                width={500}
                height={400}
                alt="content-img"
              />
            </div>
            <div >
              <ImageCustom
                src="/images/solution3.png"
                width={500}
                height={400}
                alt="content-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
