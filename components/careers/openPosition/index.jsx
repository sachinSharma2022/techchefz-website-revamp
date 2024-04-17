"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SmoothDropdown from "@/components/ui/smoothDropdownButton";
import styles from "./style.module.scss";
import TextRevel from "@/components/ui/sectionAnimation";

const OpenPosition = ({ props, id }) => {
  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState(null);
  const [items, setItems] = useState(props);
  const { theme, setTheme } = useContext(MyContext);

  const jobCatogery = props
    .map((item) => item?.attributes?.DeveloperApply[0]?.Tag)
    .filter((item, i, ar) => ar.indexOf(item) === i);
  const createInitialFilters = (filters) => {
    const initialFilters = { "All Openings": true }; // Start with 'all' set to true
    filters.forEach((filter) => {
      initialFilters[filter] = false; // Set each individual filter to false initially
    });
    return initialFilters;
  };
  const [jobCatogeryActive, setjobCatogeryActive] = useState(
    createInitialFilters(jobCatogery)
  );
 
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

  useEffect(() => {
    const updateItems = props.filter((curElem) => {
      if (jobCatogeryActive["All Openings"]) return true;
      return jobCatogeryActive[curElem?.attributes?.DeveloperApply[0]?.Tag];
    });
    //if all filter are removed , all filter is activated
     if (Object.values(jobCatogeryActive).every((value) => value === false)) {
       setjobCatogeryActive((prevActiveFilters) => {
         return {
           ...prevActiveFilters,
           "All Openings": true, 
         };
       });
     }
    setItems(updateItems);
  }, [jobCatogeryActive]);

  const filterItem = (categItem, i) => {
    if (categItem === "All Openings") {
      setItems(props);
      const newActiveFilters = { ...jobCatogeryActive, "All Openings": true };
      Object.keys(jobCatogeryActive).forEach((key) => {
        if (key !== "All Openings") {
          newActiveFilters[key] = false;
        }
      });
      setjobCatogeryActive(newActiveFilters);
    } else {
      setjobCatogeryActive((prevActiveFilters) => {
        return {
          ...prevActiveFilters,
          [categItem]: !prevActiveFilters[categItem],
          "All Openings": false, // Deactivate "All" if any other filter is clicked
        };
      });
    }
   
  };

  const options = [
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
      id={id}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={styles.openPositionHeader}>
            <h4 className={cn(styles.openPositionHeading, "gradient-text")}>
              <span>{props.length}</span> Open Position
            </h4>
            {/* <SearchInput /> */}
          </div>
        </TextRevel>

        <div className={styles.serviceBtn}>
          {Object.keys(jobCatogeryActive)?.map((buttonItem, i) => (
            <button
              className={cn(
                styles.badgeButton,
                jobCatogeryActive[buttonItem] && styles.activeButton
              )}
              onClick={() => filterItem(buttonItem, i)}
              key={buttonItem}
            >
              {buttonItem}
            </button>
          ))}
        </div>

        {jobCatogery.map((catogery) => {
          const i = items.filter(
            (job) => job.attributes?.DeveloperApply[0]?.Tag === catogery
          );
          return (
            <>
              {i.length ? (
                <div className={styles.openPositionContent}>
                  <div className={styles.openPositionTitle}>
                    <h4 className={styles.title}>
                      {catogery} <sup>{i.length}</sup>
                    </h4>
                  </div>
                  <div className={styles.openPositionAccordion}>
                    {items
                      .filter(
                        (job) =>
                          job.attributes?.DeveloperApply[0]?.Tag === catogery
                      )
                      .map((item, index) => (
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
                                    <h4>
                                      {
                                        item?.attributes?.DeveloperApply[0]
                                          ?.Title
                                      }{" "}
                                    </h4>
                                    <ul
                                      dangerouslySetInnerHTML={{
                                        __html: `${item?.attributes?.DeveloperDetail[5]?.FullDescription}`,
                                      }}
                                    ></ul>
                                  </div>
                                  <div className={styles.buttonIcon}>
                                    <motion.span
                                      initial={{
                                        backgroundColor: "transparent",
                                      }}
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
                                  as={motion.div}
                                  initial={{ y: -20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{
                                    duration: 0.4,
                                    ease: [0.04, 0.62, 0.23, 0.98],
                                  }}
                                  exit={{
                                    y: -20,
                                    opacity: 0.2,
                                    transition: { duration: 0.4 },
                                  }}
                                  className={cn(styles.accordionPanel)}
                                >
                                  <div className={styles.accordionContent}>
                                    <h4
                                      dangerouslySetInnerHTML={{
                                        __html: `${item?.attributes?.DeveloperDetail[0]?.Title}`,
                                      }}
                                    ></h4>
                                    <p>
                                      {
                                        item?.attributes?.DeveloperDetail[0]
                                          ?.FullDescription
                                      }
                                    </p>
                                    <h4>
                                      {
                                        item?.attributes?.DeveloperDetail[2]
                                          ?.Title
                                      }{" "}
                                    </h4>
                                    <ul
                                      dangerouslySetInnerHTML={{
                                        __html: `${item?.attributes?.DeveloperDetail[2]?.FullDescription}`,
                                      }}
                                    ></ul>
                                    <h4>
                                      {
                                        item?.attributes?.DeveloperDetail[4]
                                          ?.Title
                                      }
                                    </h4>
                                    <ul
                                      dangerouslySetInnerHTML={{
                                        __html: `${item?.attributes?.DeveloperDetail[4]?.FullDescription}`,
                                      }}
                                    ></ul>
                                    <h4>
                                      {
                                        item?.attributes?.DeveloperDetail[5]
                                          ?.Title
                                      }
                                    </h4>
                                    <ul
                                      dangerouslySetInnerHTML={{
                                        __html: `${item?.attributes?.DeveloperDetail[5]?.FullDescription}`,
                                      }}
                                    ></ul>

                                    <div className={styles.btnSection}>
                                      <Link href={`/careers/${item?.id}`}>
                                        <Button
                                          variant={
                                            theme ? "blueBtnDark" : "blueBtn"
                                          }
                                          size="md"
                                        >
                                          {/* {subItem?.button} */}More Info
                                        </Button>
                                      </Link>
                                      <SmoothDropdown
                                        options={options}
                                        buttonLabel="Apply Through"
                                        variant={
                                          theme ? "lightBlueOutline" : "outline"
                                        }
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
              ) : (
                <></>
              )}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default OpenPosition;
