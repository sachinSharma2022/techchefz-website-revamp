import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { MyContext } from "@/app/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";

import styles from "./style.module.scss";

const OurTeam = () => {
  const { theme, setTheme } = useContext(MyContext);
  // const [selected, setSelected] = useState();
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
    <section
      className={`${styles.ourTeam} ${theme ? styles.ourTeamDark : ""}`}
    >
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
                          className={selected ? styles.btnActive : styles.btnIn}
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
                            <Icons.Linkdin
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

            <div className={styles.teamModal}>
              <div className={styles.modalTop}>
                <div className={styles.modalTitle}>
                  <h5 className={styles.title}>About</h5>
                  <Icons.modalCross width={32} height={32} />
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
                <p className={styles.madalContent}>
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
                  <Icons.mail width={24} height={24} className="me-2" />{" "}
                  mayankmaggon@techchefz.com
                </p>

                <h6>Let’s Get Connect</h6>
                <div className={styles.modalIcons}>
                  <Icons.Linkdin
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
