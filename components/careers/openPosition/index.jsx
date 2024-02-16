"use client";
import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import SearchInput from "@/components/ui/searchInput";
import { cn } from "@/lib/utils";

import styles from "./style.module.scss";
import SmoothDropdown from "@/components/ui/smoothDropdownButton";

const OpenPosition = ({props}) => {
  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState(null);
  const { theme, setTheme } = useContext(MyContext);

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
 
  const [active, setActive] = useState(false);
  const filterItem = (categItem) => {
    const updateItems = props.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };

  const options = [
    {
      label: "Techchef Portal",
      link: "https://www.techchefz.com/careers/applyjob/",
      icon: "/images/logo-icon-blue.svg",
    },
    {
      label: "Linkedin",
      link: "https://in.linkedin.com/",
      icon: "/images/icons/linkedin.png",
    },
    {
      label: "Indeed",
      link: "https://in.indeed.com/",
      icon: "/images/icons/indeed.png",
    },
    {
      label: "Naukri",
      link: "https://www.naukri.com/",
      icon: "/images/icons/naukri.png",
    },
  ];

  return (
    <section
      className={`${styles.openPosition} ${
        theme ? styles.openPositionDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.openPositionHeader}>
          <h4 className={cn(styles.openPositionHeading, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${props[0]?.Title}`}}>
           
          </h4>
          <SearchInput />
        </div>

        <div className={styles.serviceBtn}>
          {props?.map((buttonItem) => (
            <button
              className={styles.badgeButton}
              onClick={() => filterItem(buttonItem.Heading)}
              key={buttonItem}
            >
              {buttonItem.Heading}
            </button>
          ))}
        </div>

        {props.map((item, index) => (
          <div key={index} className={styles.openPositionContent} id={item.id}>
            <div className={styles.openPositionTitle}>
              <h4 className={styles.title}>
                {item.Heading} <sup>{item.itemNum} </sup>
              </h4>
            </div>

            <div className={styles.openPositionAccordion}>
              {item?.post?.map((subItem, index) => (
                <Disclosure key={index}>
                  {(panel) => {
                    const { open, close } = panel;
                    return (
                      <div
                        className={`${styles.accordionBody} ${
                          open && styles.accordionShow
                        }`}
                      >
                        <Disclosure.Button
                          onClick={() => {
                            if (!open) {
                              close();
                            }
                            togglePanels({ ...panel, key: index });
                          }}
                          className={styles.accordionButton}
                        >
                          <div className={styles.buttonTitle}>
                            <h6>{subItem.Title} </h6>
                            <p>{subItem.Location}</p>
                          </div>
                          <div className={styles.buttonIcon}>
                            <Icons.ArrowDown />
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className={styles.accordionPanel}>
                          <div className={styles.accordionContent}>
                            <h6 dangerouslySetInnerHTML={{ __html: `${subItem?.Description}`}}></h6>
                            {/* <p>
                              Your specific duties will be based upon your
                              experience as a UI/UX Designer. In this role, you
                              will be responsible for designing and delivering
                              UI/UX for products in accordance with WonderBotz
                              standards practices. You will work closely
                              together with our enthusiastic team of both
                              business and technical specialists. You will be
                              part of a fast-growing and successful team that
                              helps our clients get the maximum benefits.
                            </p>
                            <h6>Required Skills</h6>
                            <ul>
                              <li>Design and update job descriptions.</li>
                              <li>
                                Source potential candidates from various online
                                channels (e.g. social media and professional
                                platforms).
                              </li>
                              <li>
                                Craft recruiting emails to attract passive
                                candidates.
                              </li>
                              <li>
                                Screen incoming resumes and application forms.
                              </li>
                              <li>
                                Interview candidates (via phone, video and
                                in-person).
                              </li>
                            </ul>
                            <h6>Qualifications</h6>
                            <ul>
                              <li>
                                6+ Years of Experience in a Service based
                                Company
                              </li>
                            </ul>
                            <h6>Location</h6>
                            <ul>
                              <li>Remote</li>
                            </ul> */}

                            <div className={styles.btnSection}>
                              <Button
                                variant={theme ? "blueBtnDark" : "blueBtn"}
                                size="md"
                              >
                                {subItem?.button}
                              </Button>
                              <SmoothDropdown
                                options={options}
                                buttonLabel="Apply through"
                                variant={theme ? "lightBlueOutline" : "outline"}
                                size="md"
                              />
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </div>
                    );
                  }}
                </Disclosure>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenPosition;
