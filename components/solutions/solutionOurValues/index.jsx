"use client";
import { Disclosure } from "@headlessui/react";
import { useState } from "react";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";

import styles from "./style.module.scss";

const SolutionOurValues = () => {
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
      iconUrl: "images/icons/video.svg",
      title: "Strategy and Consulting",
      content:
        "We specialize in comprehensive website audits that provide valuable insights and recommendations to enhance your online presence. ",
      listItems: [
        "We specialize in comprehensive website audits that provide valuable insights.",
        "We provide comprehensive website audits that provide valuable insights.",
        "We understand your requirements and provide comprehensive website audits that provide valuable insights.",
      ],
    },
    {
      iconUrl: "images/icons/video.svg",
      title: "Product Engineering & Custom Development",
      content:
        "We specialize in comprehensive website audits that provide valuable insights and recommendations to enhance your online presence. ",
      listItems: [
        "We specialize in comprehensive website audits that provide valuable insights.",
        "We provide comprehensive website audits that provide valuable insights.",
        "We understand your requirements and provide comprehensive website audits that provide valuable insights.",
      ],
    },
    {
      iconUrl: "images/icons/customer.svg",
      title: "Customer Experience & Martech",
      content:
        "We specialize in comprehensive website audits that provide valuable insights and recommendations to enhance your online presence. ",
      listItems: [
        "We specialize in comprehensive website audits that provide valuable insights.",
        "We provide comprehensive website audits that provide valuable insights.",
        "We understand your requirements and provide comprehensive website audits that provide valuable insights.",
      ],
    },
    {
      iconUrl: "images/icons/data.svg",
      title: "Data Analytics & Intelligence",
      content:
        "We specialize in comprehensive website audits that provide valuable insights and recommendations to enhance your online presence. ",
      listItems: [
        "We specialize in comprehensive website audits that provide valuable insights.",
        "We provide comprehensive website audits that provide valuable insights.",
        "We understand your requirements and provide comprehensive website audits that provide valuable insights.",
      ],
    },
    {
      iconUrl: "images/icons/enterprise.svg",
      title: "Enterprise Technology Platforms",
      content:
        "We specialize in comprehensive website audits that provide valuable insights and recommendations to enhance your online presence. ",
      listItems: [
        "We specialize in comprehensive website audits that provide valuable insights.",
        "We provide comprehensive website audits that provide valuable insights.",
        "We understand your requirements and provide comprehensive website audits that provide valuable insights.",
      ],
    },
    {
      iconUrl: "images/icons/team.svg",
      title: "Team Augmentation",
      content:
        "We specialize in comprehensive website audits that provide valuable insights and recommendations to enhance your online presence. ",
      listItems: [
        "We specialize in comprehensive website audits that provide valuable insights.",
        "We provide comprehensive website audits that provide valuable insights.",
        "We understand your requirements and provide comprehensive website audits that provide valuable insights.",
      ],
    },
  ];
  return (
    <section className={styles.solutionOurValuesStyle}>
      <div className={styles.ourValuesHead}>
        <h6 className={styles.ourValuesTitle}>Our Values</h6>
        <h3 className={styles.ourValuesHeading}>
          Solutions that Meet Your <span>Requirements</span>
        </h3>
        <p className={styles.ourValuesText}>
          We specialize in comprehensive website audits that provide valuable
          insights and recommendations to enhance your online presence.
        </p>
      </div>

      <div className={styles.ourValuesAccordion}>
        {accordionData.map((data, index) => (
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
                    <ImageCustom
                      src={data.iconUrl}
                      width={30}
                      height={30}
                      alt="bannerImg"
                    />
                    <h4 className={styles.title}>{data.title}</h4>
                    <div className={styles.iconBox}>
                      {!open ? <Icons.ArrowDown /> : <Icons.ArrowUp />}
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className={styles.accordionBody}>
                    <div className={styles.imgBox}>
                      <ImageCustom
                        src="/images/our-number.jpg"
                        width={200}
                        height={200}
                        alt="bannerImg"
                      />
                    </div>
                    <div className={styles.accordionBodyContent}>
                      {data.content}
                      <ul className={styles.listStyle}>
                        {data.listItems.map((items, index) => (
                          <li key={index}>
                            <Icons.CheckIcon />
                            {items}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Disclosure.Panel>
                </>
              );
            }}
          </Disclosure>
        ))}
      </div>
    </section>
  );
};

export default SolutionOurValues;
