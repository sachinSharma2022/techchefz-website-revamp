"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Tab } from "@headlessui/react";
import { ImageCustom } from "@/components/ui/imageCustom";

import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { base_Uri } from "@/lib/constants";
import { base_Url } from "@/lib/constants";

const Discover = ({ props }) => {
  console.log("tt", props);
  const { theme, setTheme } = useContext(MyContext);

  // const technologyData = [
  //   {
  //     title: "Frontend",
  //     technologyList: [
  //       {
  //         icon: "/images/icons/react.svg",
  //         title: "React.JS",
  //       },
  //       {
  //         icon: "/images/icons/react.svg",
  //         title: "React.JS",
  //       },
  //       {
  //         icon: "/images/icons/react.svg",
  //         title: "React.JS",
  //       },
  //       {
  //         icon: "/images/icons/react.svg",
  //         title: "React.JS",
  //       },
  //       {
  //         icon: "/images/icons/react.svg",
  //         title: "React.JS",
  //       },
  //       {
  //         icon: "/images/icons/react.svg",
  //         title: "React.JS",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Back-end",
  //     technologyList: [
  //       {
  //         icon: "/images/icons/react.svg",
  //         title: "React.JS",
  //       },
  //       {
  //         icon: "/images/icons/react.svg",
  //         title: "React.JS",
  //       },
  //       {
  //         icon: "/images/icons/react.svg",
  //         title: "React.JS",
  //       },
  //       {
  //         icon: "/images/icons/react.svg",
  //         title: "React.JS",
  //       },
  //       {
  //         icon: "/images/icons/react.svg",
  //         title: "React.JS",
  //       },
  //       {
  //         icon: "/images/icons/react.svg",
  //         title: "React.JS",
  //       },
  //     ],
  //   },
  // ];
  return (
    <section
      className={`${styles.discoverSection} ${
        theme ? styles.discoverSectionDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.discoverTop}>
          <div>
            <h6
              className={cn(styles.discoverTitle, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
            ></h6>
            <h3
              className={cn(styles.discoverHeading, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}
            ></h3>
          </div>

          <Link href="/technology/cms">
            <Button variant={theme ? "lightBlueOutline" : "outline"} size="md">
              {props.Btn} <Icons.ArrowRight size={18} />
            </Button>
          </Link>
        </div>

        <div className={styles.discoverTabSection}>
          <Tab.Group vertical defaultIndex={0}>
            <Tab.List className={styles.discoverLeft}>
              {props?.techStack?.map((data, index) => (
                <Tab>
                  <div className={styles.discoverHead}>
                    <h5 className={`${styles.subHeading}`}>{data.Title}</h5>
                    <p className={styles.subContent}>{data.Description}</p>
                  </div>
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels className={styles.platformsButtons}>
              <Tab.Panel>
                {props?.techStack[0]?.TechDetail?.map((item, index) => (
                  <div key={index} className={styles.dataSection}>
                    <h6 className={styles.subTitle}>{item.Heading}</h6>

                    {/* Sub Section */}
                    <div className={styles.buttonSection}>
                      {props?.techStack[0]?.TechDetail?.map((subItems, index) => (
                        <div key={index} className={styles.platformsBtn}>
                          <div className="d-flex align-items-center">
                            <div className={styles.iconImg}>
                              <ImageCustom
                                src={
                                  subItems?.Images?.data?.attributes?.url
                                    ? `${base_Url}${subItems?.Images?.data?.attributes?.url}`
                                    : `${base_Url}/`
                                }
                                width={28}
                                height={28}
                                alt="image"
                              />
                            </div>
                            <p>{subItems.Title} </p>
                          </div>
                          <Icons.ArrowUpRight />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel>
                {props?.techStack?.map((item, index) => (
                  <div key={index} className={styles.dataSection}>
                    <h6 className={styles.subTitle}>{item.title}</h6>

                    {/* Sub Section */}
                    <div className={styles.buttonSection}>
                      {/* {item.technologyList.map((subItems, index) => (
                        <div key={index} className={styles.platformsBtn}>
                          <div className="d-flex align-items-center">
                            <div className={styles.iconImg}>
                              <ImageCustom
                                src={subItems.icon}
                                width={24}
                                height={22}
                                alt="image"
                              />
                            </div>
                            <p>{subItems.title} </p>
                          </div>
                          <Icons.ArrowUpRight />
                        </div>
                      ))} */}
                    </div>
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel>
                {/* {technologyData.map((item, index) => (
                  <div key={index} className={styles.dataSection}>
                    <h6 className={styles.subTitle}>{item.title}</h6>

                   
                    <div className={styles.buttonSection}>
                      {item.technologyList.map((subItems, index) => (
                        <div key={index} className={styles.platformsBtn}>
                          <div className="d-flex align-items-center">
                            <div className={styles.iconImg}>
                              <ImageCustom
                                src={subItems.icon}
                                width={24}
                                height={22}
                                alt="image"
                              />
                            </div>
                            <p>{subItems.title} </p>
                          </div>
                          <Icons.ArrowUpRight />
                        </div>
                      ))} */}
                {/* </div>
                  </div>
                ))} */}
              </Tab.Panel>
              <Tab.Panel>
                {/* {technologyData.map((item, index) => (
                  <div key={index} className={styles.dataSection}>
                    <h6 className={styles.subTitle}>{item.title}</h6>

                   
                    <div className={styles.buttonSection}>
                      {item.technologyList.map((subItems, index) => (
                        <div key={index} className={styles.platformsBtn}>
                          <div className="d-flex align-items-center">
                            <div className={styles.iconImg}>
                              <ImageCustom
                                src={subItems.icon}
                                width={24}
                                height={22}
                                alt="image"
                              />
                            </div>
                            <p>{subItems.title} </p>
                          </div>
                          <Icons.ArrowUpRight />
                        </div>
                      ))}
                    </div>
                  </div>
                ))} */}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default Discover;
