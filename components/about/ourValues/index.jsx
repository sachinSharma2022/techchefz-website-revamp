"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { Disclosure } from "@headlessui/react";
import { useContext, useState } from "react";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";

const OurValues = ({props}) => {
 
  const { theme, setTheme } = useContext(MyContext);
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

  // const accordionData = [
  //   {
  //     title: "Innovation",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //   },
  //   {
  //     title: "Obsession with Customer Success",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //   },
  //   {
  //     title: "Exploration",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //   },
  //   {
  //     title: "Excellence in Delivery",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //   },
  // ];
  return (
    <section
      className={`${styles.ourValues} ${theme ? styles.ourValuesDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <div className="row">
          <div className="col-md-7 col-lg-8">
            <div className={styles.ourValuesHead}>
              <h6 className={styles.ourValuesTitle}>{props[0].Title}</h6>
              <h3 className={styles.ourValuesHeading}>
                {props[0].SubTitle}
              </h3>
            </div>
          </div>
        </div>

        <div className={styles.ourValuesContent}>
          <div className="row justify-content-between">
            <div className="col-md-6 col-lg-6">
              <div className={styles.ourValueImg}>
                <ImageCustom
                  src={`${base_Uri}${props[0]?.Image.data.attributes.url}`}
                  width={600}
                  height={550}
                  alt="content-img"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <p className={styles.ourValuesText}>
                {props[0].Description}
              </p>
              <div className={styles.ourValuesAccordion}>
                {props[0]?.FaqComponent?.map((data, index) => (
                  <Disclosure key={index}>
                    {(panel) => {
                      const { open, close } = panel;
                      return (
                        <>
                          <Disclosure.Button
                            className={styles.accordionHead}
                            onClick={() => {
                              if (!open) {
                                close();
                              }
                              togglePanels({ ...panel, key: index });
                            }}
                          >
                            {data.Title}
                            <div className={styles.iconBox}>
                              {!open ? <Icons.ArrowDown /> : <Icons.ArrowUp />}
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Panel className={styles.accordionBody}>
                            {data.Description}
                          </Disclosure.Panel>
                        </>
                      );
                    }}
                  </Disclosure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
