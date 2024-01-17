"use client";

import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";
import { Dialog } from "@headlessui/react";

import styles from "./style.module.scss";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const OurTeam = () => {
  const { theme } = useContext(MyContext);
  let [isOpen, setIsOpen] = useState(false);

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
  const teamData2 = [
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
    <section className={`${styles.ourTeam} ${theme ? styles.ourTeamDark : ""}`}>
      <div className={cn("primary-container")}>
        <div>
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
                        className={selected ? styles.btnActive : styles.btnIn}
                      >
                        Board of Directors
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
                          <div className={styles.cardHead}>
                            <div>
                              <h6>{data.mebName} </h6>
                              <p>{data.role}</p>
                            </div>
                            <Button
                              variant="default"
                              size="default"
                              onClick={() => setIsOpen(true)}
                            >
                              <Icons.ArrowRight width={26} height={24} />
                            </Button>
                          </div>
                          <Icons.Linkedin
                            width={34}
                            height={34}
                            className={styles.linkdinIcon}
                          />
                          <div className={styles.teamImg}>
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
                <Tab.Panel>
                  <div className="row">
                    <div className={styles.teamCards}>
                      {teamData2.map((data, index) => (
                        <div key={index} className={styles.teamCardBg}>
                          <div className={styles.cardHead}>
                            <div>
                              <h6>{data.mebName} </h6>
                              <p>{data.role}</p>
                            </div>
                            <Icons.ArrowRight width={26} height={24} />
                          </div>
                          <Icons.Linkedin
                            width={34}
                            height={34}
                            className={styles.linkdinIcon}
                          />
                          <div className={styles.teamImg}>
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
              </Tab.Panels>
            </Tab.Group>
          </div>

          <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <div className={styles.overlayStyle} />
            <Dialog.Panel className={`${styles.teamModal}`}>
              <div className={styles.modalTop}>
                <div className={styles.modalTitle}>
                  <h5 className={styles.title}>About</h5>
                  <Button variant="default" onClick={() => setIsOpen(!isOpen)}>
                    <Icons.ModalCross width={32} height={32} />
                  </Button>
                </div>
                <div className={styles.modalImg}>
                  <ImageCustom
                    src={"/images/img/team/profile1.png"}
                    width={200}
                    height={230}
                    alt="profile"
                  />
                </div>

                <h6 className={styles.teamName}>Mayank Moggon</h6>
                <p className={styles.teamRole}>CEO & CTO </p>
              </div>
              <div className={styles.modalBottom}>
                <p className={styles.modalContent}>
                  Our visionary CEO, brings dynamic leadership to Techchefz.
                  With a profound understanding of industry trends and
                  unwavering commitment, he spearheads our strategic direction,
                  driving innovation and growth. As our dedicated CTO, Mayank
                  Maggon shapes our technological landscape. With a rich
                  background in tech, he leads our teams in creating
                  cutting-edge solutions, ensuring we stay at the forefront of
                  industry advancements.
                </p>
                <p className={styles.teamMail}>
                  <Icons.MailIcon width={24} height={24} className="me-2" />
                  mayankmaggon@techchefz.com
                </p>

                <h6>Let’s Get Connect</h6>
                <div className={styles.modalIcons}>
                  <Icons.Linkedin
                    className={styles.linkdinIcon}
                    width={34}
                    height={34}
                  />
                  <Icons.twitter
                    className={styles.twitter}
                    width={34}
                    height={34}
                  />
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
