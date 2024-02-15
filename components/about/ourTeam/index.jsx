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
                    <span
                      className={selected ? styles.btnActive : styles.btnIn}
                    >
                      {props[0]?.BoardOfDirector}
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
                      {props[0]?.TeamMembers}
                    </span>
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
                        onClick={() => setIsOpen(true)}
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
                        <div className={styles.teamImg}>
                          <ImageCustom
                            src={
                              data?.Images?.data?.attributes?.url
                                ? `${base_Uri}${data?.Images?.data?.attributes?.url}`
                                : `${base_Uri}/`
                            }
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
        {props[0]?.ListofDirectors?.map((data, index) => (
          <LeftDrawer
            key={index}
            title="About"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <div
              className={cn(
                styles.modalBody,
                theme ? styles.darkThemeStyle : ""
              )}
            >
              <div className={styles.modalInfo}>
                <div className={styles.modalImg}>
                  <ImageCustom
                   
                    src={
                      data?.Images?.data?.attributes?.url
                        ? `${base_Uri}${data?.Images?.data?.attributes?.url}`
                        : `${base_Uri}/`
                    }
                    width={500}
                    height={530}
                    alt="profile"
                  />
                </div>
                <h4 className={styles.teamName}>{data.Name}</h4>
                <p className={styles.teamRole}>{data.Designation}</p>
              </div>

              <div className={styles.infoSec}>
                <p className={styles.modalContent}>{data.Description}</p>
                <p className={styles.teamMail}>
                  <Icons.MailIcon width={24} height={24} className="me-2" />
                  {data.email}
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
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
