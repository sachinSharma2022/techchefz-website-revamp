"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Tab } from "@headlessui/react";
import { ImageCustom } from "@/components/ui/imageCustom";

import styles from "./style.module.scss";
import { cn } from "@/lib/utils";

const Discover = () => {
  const technologyData = [
    {
      title: "Frontend",
      technologyList: [
        {
          icon: "/images/icons/react.svg",
          title: "React.JS",
        },
        {
          icon: "/images/icons/react.svg",
          title: "React.JS",
        },
        {
          icon: "/images/icons/react.svg",
          title: "React.JS",
        },
        {
          icon: "/images/icons/react.svg",
          title: "React.JS",
        },
        {
          icon: "/images/icons/react.svg",
          title: "React.JS",
        },
        {
          icon: "/images/icons/react.svg",
          title: "React.JS",
        },
      ],
    },
    {
      title: "Back-end",
      technologyList: [
        {
          icon: "/images/icons/react.svg",
          title: "React.JS",
        },
        {
          icon: "/images/icons/react.svg",
          title: "React.JS",
        },
        {
          icon: "/images/icons/react.svg",
          title: "React.JS",
        },
        {
          icon: "/images/icons/react.svg",
          title: "React.JS",
        },
        {
          icon: "/images/icons/react.svg",
          title: "React.JS",
        },
        {
          icon: "/images/icons/react.svg",
          title: "React.JS",
        },
      ],
    },
  ];
  return (
    <section className={styles.discoverSection}>
      <div className={cn("primary-container")}>
        <div className={styles.discoverTop}>
          <div>
            <h6 className={styles.discoverTitle}>Discover</h6>
            <h3 className={styles.discoverHeading}>Technology Stack</h3>
          </div>

          <Button variant="outline" size="sm">
            Explore Now <Icons.ArrowRight size={18} />
          </Button>
        </div>

        <div className={styles.discoverTabSection}>
          <Tab.Group vertical defaultIndex={0}>
            <Tab.List className={styles.discoverLeft}>
              <Tab>
                <div className={styles.discoverHead}>
                  <h5 className={`${styles.subHeading}`}>Web Platforms</h5>
                  <p className={styles.subContent}>
                    We specialize in comprehensive website audits that provide
                    valuable insights
                  </p>
                </div>
              </Tab>
              <Tab>
                <div className={styles.discoverHead}>
                  <h5 className={`${styles.subHeading}`}>Commerce</h5>
                  <p className={styles.subContent}>
                    We specialize in comprehensive website audits that provide
                    valuable insights
                  </p>
                </div>
              </Tab>
              <Tab>
                <div className={styles.discoverHead}>
                  <h5 className={`${styles.subHeading}`}>
                    Analytics & Marketing
                  </h5>
                  <p className={styles.subContent}>
                    We specialize in comprehensive website audits that provide
                    valuable insights
                  </p>
                </div>
              </Tab>
              <Tab>
                <div className={styles.discoverHead}>
                  <h5 className={`${styles.subHeading}`}>DevSecOps</h5>
                  <p className={styles.subContent}>
                    We specialize in comprehensive website audits that provide
                    valuable insights
                  </p>
                </div>
              </Tab>
            </Tab.List>

            <Tab.Panels className={styles.platformsButtons}>
              <Tab.Panel>
                {technologyData.map((item, index) => (
                  <div key={index} className={styles.dataSection}>
                    <h6 className={styles.subTitle}>{item.title}</h6>

                    {/* Sub Section */}
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
                ))}
              </Tab.Panel>
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default Discover;
