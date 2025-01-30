"use client";
import { MyContext } from "@/context/theme";
import { Disclosure } from "@headlessui/react";
import { useContext, useState } from "react";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

import TextRevel from "@/components/ui/sectionAnimation";
import styles from "./style.module.scss";
import AemSolution from "../aemSolution";

const WhyChooseUs = ({ id, props }) => {
  console.log("hi choose", props);
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
    <section
      className={cn(styles.whyChooseUs, !theme ? styles.whyChooseUsDark : "")}
      id={id}
    >
      <div className={cn("primary-container")} id="formScroll">
        <TextRevel>
          <div className={styles.ourValuesHead}>
            <h6 className={cn(styles.ourValuesTitle, "gradient-text")}>
              {props?.Title}
            </h6>
            <h3
              className={cn(styles.ourValuesHeading, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
            ></h3>
          </div>
        </TextRevel>

        <div className={styles.ourValuesContent}>
          <div className={styles.toggleSection}>
            <p className={styles.ourValuesText}>{props?.Description}</p>
            <div className={styles.ourValuesAccordion}>
              {props?.aemQuesAns?.map((data, index) => (
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
                          {data.Question}
                          <div className={styles.iconBox}>
                            {!open ? <Icons.ArrowDown /> : <Icons.ArrowUp />}
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className={styles.accordionBody}>
                          {data.answer}
                        </Disclosure.Panel>
                      </>
                    );
                  }}
                </Disclosure>
              ))}
            </div>
          </div>
          <div className={styles.formSection}>
            <AemSolution aemContact={props?.aemContact} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
