import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";

import styles from "./style.module.scss";

const OurTeam = () => {
  const [selected, setSelected] = useState();
  const teamData = [
    {
      mebName: "Mayank Maggon",
      role: "CEO & CTO",
      image: "/images/img/team/team1.png",
    },
    {
      mebName: "Akshit Maggon",
      role: "Director",
      image: "/images/img/team/team2.png",
    },
    {
      mebName: "Anita Ahlawat",
      role: "Co-Founder",
      image: "/images/img/team/team3.png",
    },
  ];
  return (
    <section className={styles.ourTeam}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-12">
            <div className="tab">
              <Tab.Group>
                <div className={styles.ourTeamHead}>
                  <div className={styles.titleWrapper}>
                    <h6 className={styles.ourTeamTitle}>Our Team</h6>
                    <h3 className={styles.ourTeamHeading}>
                      Meet the Founder behind the Vision.
                    </h3>
                  </div>
                  <Tab.List className={styles.tabWrapper}>
                    <Tab>
                      {({ selected }) => (
                        <span
                          className={
                            selected ? styles.btnActive : styles.btnInactive
                          }
                        >
                          Directors
                        </span>
                      )}
                    </Tab>
                    <Tab>
                      {({ selected }) => (
                        <span
                          className={
                           selected ? styles.btnActive : styles.btnInactive
                          }
                        >
                          Executive Team
                        </span>
                      )}
                    </Tab>
                  </Tab.List>
                </div>

                <Tab.Panels className={styles.contentWrapper}>
                  <Tab.Panel>
                    <div className="row">
                      <div className={styles.teamCards}>
                        {teamData.map((data, index) => (
                          <div key={index} className={styles.teamCardBg}>
                            <div className={styles.teamCardContent}>
                              <div className={styles.cardHead}>
                                <div>
                                  <h6>{data.mebName} </h6>
                                  <p>{data.role}</p>
                                </div>
                                <Icons.ArrowRight width={26} height={24} />
                              </div>
                              <Icons.Linkdin
                                width={34}
                                height={34}
                                className={styles.linkdinIcon}
                              />
                              <ImageCustom
                                src={data.image}
                                width={240}
                                height={320}
                                alt="team-member"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>Content 2</Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
