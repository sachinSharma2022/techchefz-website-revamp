"use client";
import { Disclosure } from "@headlessui/react";
import { useState } from "react";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";

import styles from "./style.module.scss";

const SolutionTheProcess = () => {
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

  const accordionData = [
    {
      title: "Navigating Cloud Integration Complexities",
      description:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges. ",
    },
    {
      current: styles.active,
      title: "Navigating Cloud Integration Complexities",
      description:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges. ",
    },
    {
      title: "Navigating Cloud Integration Complexities",
      description:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges. ",
    },
  ];
  return (
    <section className={styles.theProcessStyle}>
      <div className={styles.headSection}>
        <div>
          <h6 className={styles.heading}>The Process</h6>
          <h3 className={styles.subHeading}>Dive into Our Approach</h3>
        </div>

        <div className={styles.ourNumbersImg}>
          <ImageCustom
            src="/images/process.svg"
            width={410}
            height={570}
            alt="bannerImg"
          />
        </div>
      </div>

      <div className={`${styles.processCardSection}`}>
        {accordionData.map((data, index) => (
          <div key={index} className={`${styles.processCard} ${data.current}`}>
            <div className={styles.textGradient}>{index}</div>
            <h4 className={styles.title}>{data.title}</h4>
            <p className={styles.description}>{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionTheProcess;
