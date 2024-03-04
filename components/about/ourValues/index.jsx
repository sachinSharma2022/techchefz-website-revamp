"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { Disclosure, Transition } from "@headlessui/react";
import { useContext, useState } from "react";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import TextRevel from "@/components/ui/sectionAnimation";

const OurValues = ({ props }) => {
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

  return (
    <section
      className={`${styles.ourValues} ${theme ? styles.ourValuesDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={styles.ourValuesHead}>
            <h6
              className={cn(styles.ourValuesTitle, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
            ></h6>
            <h3
              className={cn(styles.ourValuesHeading, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
            ></h3>
          </div>
        </TextRevel>

        <div className={styles.ourValuesContent}>
          <div className="row justify-content-between">
            <div className="col-12 col-lg-6">
              <div className={styles.ourValueImg}>
                <ImageCustom
                  src={
                    props?.Image?.data?.attributes?.url
                      ? `${base_Uri}${props?.Image?.data?.attributes?.url}`
                      : `${base_Uri}/`
                  }
                  width={600}
                  height={550}
                  alt="content-img"
                />
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <p className={styles.ourValuesText}>{props?.Description}</p>
              <div className={styles.ourValuesAccordion}>
                {props?.FaqComponent?.map((data, index) => (
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
                          <AnimatePresence>
                            <Disclosure.Panel
                              as={motion.div}
                              initial={{ y: -20, opacity: 0.2 }}
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
                              className={styles.accordionBody}
                            >
                              {data.Description}
                            </Disclosure.Panel>
                          </AnimatePresence>
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
