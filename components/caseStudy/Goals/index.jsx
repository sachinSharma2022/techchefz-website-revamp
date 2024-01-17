import React from "react";

import styles from "./style.module.scss";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";

const Goals = () => {
  const listData = [
    {
      content:
        "Create a user-friendly mobile application for storing and monitoring test results, planning visits to medical specialists on the calendar, as well as saving recommendations and doctor’s prescriptions;",
    },
    {
      content:
        "Create a user-friendly mobile application for storing and monitoring test results, planning visits to medical specialists on the calendar, as well as saving recommendations and doctor’s prescriptions;",
    },
    {
      content:
        "Optimize the first release of the project by launching the MVP in the shortest possible time;",
    },
  ];
  return (
    <section className={styles.goals}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-3 col-lg-3">
            <h5 className={styles.goalsTitle}>Goals & Objectives</h5>
          </div>
          <div className="col-md-7 col-lg-8">
            <h3 className={styles.goalsHeading}>
              After a thorough consultation with the client concerning the RE’s
              unique requirements, we determined the core objectives:
            </h3>
            <p className={styles.goalsContent}>
              Our client is an international organization that offers personal
              vehicle rental services online. The company owner reached out to
              us due to the suspicion that a data leak may have occurred in the
              company.
            </p>
            <p className={styles.goalsContent}>
              This is why the client’s web service should have been checked for
              vulnerabilities that may lead to user data losses, confidentiality
              violations, breach of confidentiality, or unauthorized access to
              the system.
            </p>

            <div className={styles.goalsList}>
              {listData.map((data, index) => (
                <>
                  <div key={index} className={styles.goalsTextWrapper}>
                    <div className={styles.goalsIcons}>
                      <Icons.BikeIcon
                        className={styles.goalsIcon}
                        width={27}
                        height={16}
                      />
                    </div>
                    <p className={styles.goalsText}>{data.content}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.goalsImgs}>
          <div className="row justify-content-center ">
            <div className="col-md-12 col-lg12">
              <ImageCustom
                src="/images/goals1.png"
                width={1060}
                height={500}
                alt="content-img"
              />
            </div>
          </div>
          <div className={styles.goalsBottomImg}>
            <div>
              <ImageCustom
                src="/images/goals2.png"
                width={500}
                height={400}
                alt="content-img"
              />
            </div>
            <div>
              <ImageCustom
                src="/images/goals3.png"
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
};

export default Goals;
