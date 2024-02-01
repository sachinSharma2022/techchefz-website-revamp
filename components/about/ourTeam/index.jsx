"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { Tab } from "@headlessui/react";
import { useContext, useState } from "react";

import LeftDrawer from "@/components/common/leftDrawer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import Link from "next/link";

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
        <div className="tab">
          <Tab.Group>
            <div className={styles.ourTeamHead}>
              <div className={styles.titleWrapper}>
                <h6 className={styles.ourTeamTitle}>Our Team</h6>
                <h3 className={styles.ourTeamHeading}>
                  Meet the Founder <br /> behind the Vision.
                </h3>
              </div>
              {/* <Tab.List className={styles.tabWrapper}>
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
              </Tab.List> */}
            </div>

            <Tab.Panels className={styles.contentWrapper}>
              <Tab.Panel>
                <div className="row">
                  <div className={styles.teamCards}>
                    {teamData.map((data, index) => (
                      <div
                        role="button"
                        onClick={() => setIsOpen(true)}
                        key={index}
                        className={styles.teamCardBg}
                      >
                        <div className={styles.cardHead}>
                          <div>
                            <h6>{data.mebName} </h6>
                            <p>{data.role}</p>
                          </div>
                          <Icons.ArrowRight width={26} height={24} />
                        </div>
                        <Link
                          className={styles.linkedInIcon}
                          href="https://www.linkedin.com/"
                        >
                          <Icons.Linkedin width={34} height={34} />
                        </Link>
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
                        <Link
                          className={styles.linkedInIcon}
                          href="https://www.linkedin.com/"
                          target="_blank"
                        >
                          <Icons.Linkedin width={34} height={34} />
                        </Link>
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

        <LeftDrawer
          title="About"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div
            className={cn(styles.modalBody, theme ? styles.darkThemeStyle : "")}
          >
            <div className={styles.modalInfo}>
              <div className={styles.modalImg}>
                <ImageCustom
                  src="/images/img/team/profile1.png"
                  width={500}
                  height={530}
                  alt="profile"
                />
              </div>
              <h4 className={styles.teamName}>Mayank Moggon</h4>
              <p className={styles.teamRole}>CEO & CTO</p>
            </div>

            <div className={styles.infoSec}>
              <p className={styles.modalContent}>
                Our visionary CEO, brings dynamic leadership to Techchefz. With
                a profound understanding of industry trends and unwavering
                commitment, he spearheads our strategic direction, driving
                innovation and growth. As our dedicated CTO, Mayank Maggon
                shapes our technological landscape. With a rich background in
                tech, he leads our teams in creating cutting-edge solutions,
                ensuring we stay at the forefront of industry advancements.
              </p>
              <p className={styles.teamMail}>
                <Icons.MailIcon width={24} height={24} className="me-2" />
                mayankmaggon@techchefz.com
              </p>

              <div className={styles.socialSection}>
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
            </div>
          </div>
        </LeftDrawer>
      </div>
    </section>
  );
};

export default OurTeam;
