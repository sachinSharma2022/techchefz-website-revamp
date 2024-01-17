"use client";

import { Icons } from "@/components/icons";
import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";

const Faq = () => {
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

  const faqAccordionData = [
    {
      faqNumber: "01",
      title: "How do I figure out how much your services will cost?",
      content:
        "Determining the cost of our services is best achieved through a 15-30 minute discovery call, where we can understand your unique requirements. Following that, we will provide a transparent and detailed price within 24-48 hours tailored specifically to your needs.",
    },
    {
      faqNumber: "02",
      title: "Who will be working on the project?",
      content:
        "Determining the cost of our services is best achieved through a 15-30 minute discovery call, where we can understand your unique requirements. Following that, we will provide a transparent and detailed price within 24-48 hours tailored specifically to your needs.",
    },
    {
      faqNumber: "03",
      title: "How do I figure out how much your services will cost?",
      content:
        "Determining the cost of our services is best achieved through a 15-30 minute discovery call, where we can understand your unique requirements. Following that, we will provide a transparent and detailed price within 24-48 hours tailored specifically to your needs.",
    },
  ];
  return (
    <section className={styles.cmsFaqSection}>
      <div className={cn("primary-container")}>
        <div className={styles.faqHead}>
          <p className={styles.projectHighlight}>FAQ’s</p>
          <h4 className={styles.title}>Our commitment to transparency</h4>
        </div>

        <div className={styles.faqValuesContent}>
          <div className={styles.faqAccordion}>
            {faqAccordionData.map((data, index) => (
              <Disclosure key={index}>
                {(panel) => {
                  const { open, close } = panel;
                  return (
                    <div className={styles.faqSecMain}>
                      <div className={styles.numberSec}>
                        <h2 className={styles.faqNumber}>{data.faqNumber}</h2>
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
                          {data.title}{" "}
                          {!open ? <Icons.IconPlus /> : <Icons.IconMinus />}
                        </Disclosure.Button>
                        <Disclosure.Panel className={styles.accordionBody}>
                          {data.content}
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
