"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import { Disclosure, Transition } from "@headlessui/react";
import { useState } from "react";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import TextRevel from "@/components/ui/sectionAnimation";

const Faq = ({ props }) => {
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
      className={cn(
        styles.cmsFaqSection,
        theme ? styles.cmsFaqSectionDark : ""
      )}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={styles.faqHead}>
            <h6
              className={cn(styles.projectHighlight, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
            ></h6>
            <h4
              className={cn(styles.title, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}
            ></h4>
          </div>
        </TextRevel>

        <div className={styles.faqValuesContent}>
          <div className={styles.faqAccordion}>
            {props?.innerFaqs?.map((data, index) => (
              <Disclosure key={index}>
                {(panel) => {
                  const { open, close } = panel;
                  return (
                    <div className={styles.faqSecMain}>
                      <div className={styles.numberSec}>
                        <h2 className={styles.faqNumber}>{data.Title}</h2>
                      </div>

                      <div className={styles.faqList}>
                        <Disclosure.Button
                          className={styles.accordionHead}
                          onClick={() => {
                            if (!open) {
                              close();
                            }
                            togglePanels({ ...panel, key: index });
                          }}
                        >
                          {data.title}
                          {data.Description}
                          {!open ? <Icons.IconPlus /> : <Icons.IconMinus />}
                        </Disclosure.Button>

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
                          {data.FullDescription}
                        </Disclosure.Panel>
                      </div>
                    </div>
                  );
                }}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
