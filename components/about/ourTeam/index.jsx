"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { Tab } from "@headlessui/react";
import { useContext, useState } from "react";

import LeftDrawer from "@/components/common/leftDrawer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";

const OurTeam = ({ props }) => {
  console.log("aa", props);
  const { theme } = useContext(MyContext);
  let [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className={cn(styles.ourTeam, theme ? styles.ourTeamDark : "")}>
      <div className={cn("primary-container")}>
        <div className="tab">
          <Tab.Group>
            <div className={styles.ourTeamHead}>
              <div className={styles.titleWrapper}>
                <h6
                  className={cn(styles.ourTeamTitle, "gradient-text")}
                  dangerouslySetInnerHTML={{ __html: `${props[0]?.Title}` }}
                ></h6>
                <h3
                  className={cn(styles.ourTeamHeading, "gradient-text")}
                  dangerouslySetInnerHTML={{
                    __html: `${props[0]?.Description}`,
                  }}
                ></h3>
              </div>
              <Tab.List className={styles.tabWrapper}>
                <Tab>
                  {({ selected }) => (
                    <div className={selected ? styles.btnActive : styles.btnIn}>
                      {props[0]?.BoardOfDirector}
                    </div>
                  )}
                </Tab>
                <Tab>
                  {({ selected }) => (
                    <div
                      className={
                        selected ? styles.btnActive : styles.btnInactive
                      }
                    >
                      {props[0]?.TeamMembers}
                    </div>
                  )}
                </Tab>
              </Tab.List>
            </div>

            <Tab.Panels className={styles.contentWrapper}>
              <Tab.Panel>
                <div className="row">
                  <div className={styles.teamCards}>
                    {props[0]?.ListofDirectors?.map((data, index) => (
                      <div
                        role="button"
                        onClick={() => {
                          setIndex(index);
                          setIsOpen(true);
                        }}
                        key={index}
                        className={styles.teamCardBg}
                      >
                        <div className={styles.cardHead}>
                          <div>
                            <h4>{data.Name} </h4>
                            <p>{data.Designation}</p>
                          </div>
                          <Icons.ArrowRight width={26} height={24} />
                        </div>
                        <Link
                          className={styles.linkedInIcon}
                          href={data.LinkedinLink}
                        >
                          <Icons.Linkedin width={34} height={34} />
                        </Link>
                        <ImageCustom
                          src={
                            data?.Images?.data?.attributes?.url
                              ? `${base_Uri}${data?.Images?.data?.attributes?.url}`
                              : `${base_Uri}/`
                          }
                          width={1000}
                          height={1000}
                          alt="team-member"
                          className={styles.teamImg}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className={styles.coreTeam}>
                  {props[0]?.TeamList?.map((item, index) => (
                    <div key={index} className={styles.cardItem}>
                      <div className={styles.teamImage}>
                        <ImageCustom
                          src={
                            item?.Images?.data?.attributes?.url
                              ? `${base_Uri}${item?.Images?.data?.attributes?.url}`
                              : `${base_Uri}/`
                          }
                          width={500}
                          height={530}
                          alt="profile"
                        />
                      </div>
                      <h4 className={styles.nameTitle}>{item.Name}</h4>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>

        {/* Info Modal */}
        <LeftDrawer
          key={index}
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
                  src={
                    props[0]?.ListofDirectors[index]?.Images?.data?.attributes
                      ?.url
                      ? `${base_Uri}${props[0]?.ListofDirectors[index]?.Images?.data?.attributes?.url}`
                      : `${base_Uri}/`
                  }
                  width={500}
                  height={530}
                  alt="profile"
                />
              </div>
              <h4 className={styles.teamName}>
                {props[0]?.ListofDirectors[index]?.Name}
              </h4>
              <p className={styles.teamRole}>
                {props[0]?.ListofDirectors[index]?.Designation}
              </p>
            </div>

            <div className={styles.infoSec}>
              <p className={styles.modalContent}>
                {props[0]?.ListofDirectors[index]?.Description}
              </p>
              <p className={styles.teamMail}>
                <Icons.MailIcon width={24} height={24} className="me-2" />
                {props[0]?.ListofDirectors[index]?.email}
              </p>

              <div className={styles.socialSection}>
                <h4>Let’s Get Connect</h4>
                <div className={styles.modalIcons}>
                <Link href={props[0]?.ListofDirectors[index]?.LinkedinLink}>
                  <Icons.Linkedin
                    className={styles.linkdinIcon}
                    width={34}
                    height={34}
                  />
                  </Link>
                  <Link href={props[0]?.ListofDirectors[index]?.twitterlink}>
                  <Icons.twitter
                    className={styles.twitter}
                    width={34}
                    height={34}
                  />
                </Link>
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
