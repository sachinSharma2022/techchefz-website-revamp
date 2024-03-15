"use client";
import { MyContext } from "@/context/theme";
import { useContext, useState } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Tab, Disclosure } from "@headlessui/react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { base_Uri } from "@/lib/constants";

import { useMediaQuery } from "react-responsive";
import TextRevel from "@/components/ui/sectionAnimation";

const Discover = ({ props }) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1199px)" });
  const { theme, setTheme } = useContext(MyContext);
  const [tabIndex, setTabIndex] = useState(0);
  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState(null);

  function togglePanels(newPanel) {
    if (activeDisclosurePanel) {
      if (
        activeDisclosurePanel.key !== newPanel.key &&
        activeDisclosurePanel.open
      ) {
        activeDisclosurePanel.close();
      }
    }
    setActiveDisclosurePanel({
      ...newPanel,
      open: !newPanel.open,
    });
  }
  return (
    <section
      className={`${styles.discoverSection} ${
        theme ? styles.discoverSectionDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
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
        </TextRevel>

        <div className={styles.discoverTabSection}>
          {isBigScreen ? (
            <Tab.Group vertical defaultIndex={0} onChange={setTabIndex}>
              <Tab.List className={styles.discoverLeft}>
                {props?.techStack?.map((data, index) => (
                  <Tab key={index}>
                    <div className={styles.discoverHead}>
                      <h5 className={`${styles.subHeading}`}>{data.Title}</h5>
                      <p className={cn(styles.subContent, styles.fadeout)}>
                        {data.Description}
                      </p>
                    </div>
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className={cn(styles.platformsButtons)}>
                {props?.techStack?.map((item, index) => (
                  <Tab.Panel
                    // static={true}

                    key={index}
                    className={cn(styles.tabContainer, "fadeinout")}
                  >
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
                                      ? `${base_Uri}${subItems?.Images?.data?.attributes?.url}`
                                      : `${base_Uri}/`
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
                                      ? `${base_Uri}${subItems?.Images?.data?.attributes?.url}`
                                      : `${base_Uri}/`
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
                    {/* </Transition> */}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          ) : (
            <div>
              {props?.techStack?.map((item, index) => (
                <Disclosure key={index}>
                  {(panel) => {
                    const { open, close } = panel;
                    return (
                      <>
                        <Disclosure.Button
                          onClick={() => {
                            if (!open) {
                              close();
                            }
                            togglePanels({ ...panel, key: index });
                          }}
                          className={styles.discoverLeft}
                        >
                          <div className={styles.discoverHead}>
                            <h5 className={`${styles.subHeading}`}>
                              {item.Title}
                            </h5>
                            <p className={styles.subContent}>
                              {item.Description}
                            </p>
                          </div>
                          <div className={styles.iconBox}>
                            <motion.span
                              initial={{ backgroundColor: "transparent" }}
                              animate={{ rotate: open ? 180 : 0 }}
                              transition={{
                                duration: 0.15,
                                type: "tween",
                              }}
                            >
                              <Icons.ArrowDown />
                            </motion.span>
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel
                          className={cn(styles.platformsButtons, "fadeinout")}
                        >
                          <div className={styles.tabContainer}>
                            {console.log(tabIndex === index, "ind")}
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
                                            subItems?.Images?.data?.attributes
                                              ?.url
                                              ? `${base_Uri}${subItems?.Images?.data?.attributes?.url}`
                                              : `${base_Uri}/`
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
                                            subItems?.Images?.data?.attributes
                                              ?.url
                                              ? `${base_Uri}${subItems?.Images?.data?.attributes?.url}`
                                              : `${base_Uri}/`
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
                          </div>
                        </Disclosure.Panel>
                      </>
                    );
                  }}
                </Disclosure>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Discover;
