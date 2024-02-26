"use client";
import { MyContext } from "@/context/theme";
import { useContext,useState } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Tab,Transition } from "@headlessui/react";
import { ImageCustom } from "@/components/ui/imageCustom";

import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { base_Uri } from "@/lib/constants";
import { base_Url } from "@/lib/constants";

const Discover = ({ props }) => {
  console.log("tt", props);
  const { theme, setTheme } = useContext(MyContext);
  const [tabIndex, setTabIndex] = useState(0);
 //console.log(tabIndex,"tab")
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
          <div className={styles.buttonSec}>
            <Link href={props.BtnLink}>
              <Button
                variant={theme ? "lightBlueOutline" : "outline"}
                size="md"
              >
                {props.Btn} <Icons.ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>

        <div className={styles.discoverTabSection}>
          <Tab.Group vertical defaultIndex={0} onChange={setTabIndex}>
            <Tab.List className={styles.discoverLeft}>
              {props?.techStack?.map((data, index) => (
                <Tab key={index}>
                  <div className={styles.discoverHead}>
                    <h5 className={`${styles.subHeading}`}>{data.Title}</h5>
                    <p className={styles.subContent}>{data.Description}</p>
                  </div>
                </Tab>
              ))}
            </Tab.List>
           
       
            <Tab.Panels className={styles.platformsButtons}>
            
              {props?.techStack?.map((item, index) => (
             
                <Tab.Panel static={true} key={index}>
                   <Transition  show={tabIndex === index}  enter= "enterTech"
              enterFrom="enterFromTech"
              enterTo="enterToTech"
              leave="leaveTech"
              leaveFrom="leaveFromTech"
              leaveTo="leaveToTech" >
                    {console.log(tabIndex === index,"ind")}
                  <div className={styles.dataSection}>
                    <h6 className={styles.subTitle}>
                      {item.TechDetail[0]?.Heading}
                    </h6>

                    {/* Sub Section */}
                    <div className={styles.buttonSection}>
                      {item?.TechDetail?.map((subItems, index) => (
                        <Link
                          href="/"
                          key={index}
                          className={styles.platformsBtn}
                        >
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
                          {/* <Icons.ArrowUpRight /> */}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className={styles.dataSection}>
                    <h6 className={styles.subTitle}>
                      {item.multipletech2[0]?.Heading}
                    </h6>
                    <div className={styles.buttonSection}>
                      {item?.multipletech2?.map((subItems, index) => (
                        <Link
                          href="/"
                          key={index}
                          className={styles.platformsBtn}
                        >
                          <div className="d-flex align-items-center">
                            <div className={styles.iconImg}>
                              <ImageCustom
                                src={
                                  subItems?.Images?.data?.attributes?.url
                                    ? `${base_Url}${subItems?.Images?.data?.attributes?.url}`
                                    : `${base_Url}/`
                                }
                                width={24}
                                height={22}
                                alt="image"
                              />
                            </div>
                            <p>{subItems.Title} </p>
                          </div>
                          {/* <Icons.ArrowUpRight /> */}
                        </Link>
                      ))}
                    </div>
                  </div>
                  </Transition>
                </Tab.Panel>
                
                
              ))}
             
            </Tab.Panels>
             
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default Discover;
