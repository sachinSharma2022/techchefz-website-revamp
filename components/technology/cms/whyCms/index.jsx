"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Disclosure } from "@headlessui/react";
import { useState } from "react";
// import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";

import styles from "./style.module.scss";

const WhyCms = ({props}) => {
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

  return (
    <section className={`${styles.whyCmsStyle} ${theme ? styles.whyCmsDark : ""}`}>
      <div className={cn("primary-container")}>
        <div className={styles.ourValuesHead}>
          <h6 className={cn(styles.ourValuesTitle,"gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.Title}`}}>
          </h6>
          <h3 className={cn(styles.ourValuesHeading,"gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}`}}>
          </h3>
        </div>

        <div className={styles.ourValuesContent}>
          <div className={styles.ourValueImg}>
          <ImageCustom
                  src= {props?.Image?.data?.attributes?.url?`${base_Uri}${props?.Image?.data?.attributes?.url}`:`${base_Uri}/`}
                 
                  width={600}
                  height={550}
                  alt="content-img"
                />
          </div>
          <div>
            <p className={styles.ourValuesText}>
              {props?.Description}
            </p>
            <div className={styles.ourValuesAccordion}>
              {props?.FaqComponent.map((data, index) => (
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
                          {data?.Title}
                          <div className={styles.iconBox}>
                            {!open ? <Icons.ArrowDown /> : <Icons.ArrowUp />}
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className={styles.accordionBody}>
                        {data?.Description}
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
    </section>
  );
};

export default WhyCms;