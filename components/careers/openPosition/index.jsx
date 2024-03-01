"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useContext, useState } from "react";

import SmoothDropdown from "@/components/ui/smoothDropdownButton";
import styles from "./style.module.scss";

const OpenPosition = ({ props, id }) => {
  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState(null);
  const [items, setItems] = useState(props);
  const { theme, setTheme } = useContext(MyContext);
  const jobCatogery = ["Backend", "Frontend", "CMS "];
  console.log(props, "");
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
      return curElem?.attributes?.DeveloperApply[0]?.Tag === categItem;
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
      id={id}
    >
      <div className={cn("primary-container")}>
        <div className={styles.openPositionHeader}>
          <h4 className={cn(styles.openPositionHeading, "gradient-text")}>
            <span>{props.length}</span> Open Position
          </h4>
          {/* <SearchInput /> */}
        </div>

        <div className={styles.serviceBtn}>
          {jobCatogery?.map((buttonItem) => (
            <button
              className={styles.badgeButton}
              onClick={() => filterItem(buttonItem)}
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
                                    <p>
                                      {
                                        item?.attributes?.DeveloperDetail[5]
                                          ?.Title
                                      }
                                    </p>
                                    <ul
                                      dangerouslySetInnerHTML={{
                                        __html: `${item?.attributes?.DeveloperDetail[5]?.FullDescription}`,
                                      }}
                                    ></ul>
                                  </div>
                                  <div className={styles.buttonIcon}>
                                    <Icons.ArrowDown />
                                  </div>
                                </Disclosure.Button>
                                <Disclosure.Panel
                                  className={styles.accordionPanel}
                                >
                                  <div className={styles.accordionContent}>
                                    <h6
                                      dangerouslySetInnerHTML={{
                                        __html: `${item?.attributes?.DeveloperDetail[0]?.Title}`,
                                      }}
                                    ></h6>
                                    <p>
                                      {
                                        item?.attributes?.DeveloperDetail[0]
                                          ?.FullDescription
                                      }
                                    </p>
                                    <h6>
                                      {
                                        item?.attributes?.DeveloperDetail[2]
                                          ?.Title
                                      }{" "}
                                    </h6>
                                    <ul
                                      dangerouslySetInnerHTML={{
                                        __html: `${item?.attributes?.DeveloperDetail[2]?.FullDescription}`,
                                      }}
                                    ></ul>
                                    <h6>
                                      {
                                        item?.attributes?.DeveloperDetail[4]
                                          ?.Title
                                      }
                                    </h6>
                                    <ul
                                      dangerouslySetInnerHTML={{
                                        __html: `${item?.attributes?.DeveloperDetail[4]?.FullDescription}`,
                                      }}
                                    ></ul>
                                    <h6>
                                      {
                                        item?.attributes?.DeveloperDetail[5]
                                          ?.Title
                                      }
                                    </h6>
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
