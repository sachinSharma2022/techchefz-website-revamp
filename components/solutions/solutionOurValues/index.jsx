"use client";
import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";
import styles from "./style.module.scss";
import { base_Url } from "@/lib/constants";

const SolutionOurValues = ({ props }) => {
  console.log("mmm", props);
  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState(null);
  const { theme, setTheme } = useContext(MyContext);

  // const accordionData = [
  //   {
  //     iconUrl: "images/icons/video.svg",
  //     title: "Strategy and Consulting",
  //     content:
  //       "We specialize in comprehensive website audits that provide valuable insights and recommendations to enhance your online presence. ",
  //     listItems: [
  //       "We specialize in comprehensive website audits that provide valuable insights.",
  //       "We provide comprehensive website audits that provide valuable insights.",
  //       "We understand your requirements and provide comprehensive website audits that provide valuable insights.",
  //     ],
  //   },
  //   {
  //     iconUrl: "images/icons/video.svg",
  //     title: "Product Engineering & Custom Development",
  //     content:
  //       "We specialize in comprehensive website audits that provide valuable insights and recommendations to enhance your online presence. ",
  //     listItems: [
  //       "We specialize in comprehensive website audits that provide valuable insights.",
  //       "We provide comprehensive website audits that provide valuable insights.",
  //       "We understand your requirements and provide comprehensive website audits that provide valuable insights.",
  //     ],
  //   },
  //   {
  //     iconUrl: "images/icons/customer.svg",
  //     title: "Customer Experience & Martech",
  //     content:
  //       "We specialize in comprehensive website audits that provide valuable insights and recommendations to enhance your online presence. ",
  //     listItems: [
  //       "We specialize in comprehensive website audits that provide valuable insights.",
  //       "We provide comprehensive website audits that provide valuable insights.",
  //       "We understand your requirements and provide comprehensive website audits that provide valuable insights.",
  //     ],
  //   },
  //   {
  //     iconUrl: "images/icons/data.svg",
  //     title: "Data Analytics & Intelligence",
  //     content:
  //       "We specialize in comprehensive website audits that provide valuable insights and recommendations to enhance your online presence. ",
  //     listItems: [
  //       "We specialize in comprehensive website audits that provide valuable insights.",
  //       "We provide comprehensive website audits that provide valuable insights.",
  //       "We understand your requirements and provide comprehensive website audits that provide valuable insights.",
  //     ],
  //   },
  //   {
  //     iconUrl: "images/icons/enterprise.svg",
  //     title: "Enterprise Technology Platforms",
  //     content:
  //       "We specialize in comprehensive website audits that provide valuable insights and recommendations to enhance your online presence. ",
  //     listItems: [
  //       "We specialize in comprehensive website audits that provide valuable insights.",
  //       "We provide comprehensive website audits that provide valuable insights.",
  //       "We understand your requirements and provide comprehensive website audits that provide valuable insights.",
  //     ],
  //   },
  //   {
  //     iconUrl: "images/icons/team.svg",
  //     title: "Team Augmentation",
  //     content:
  //       "We specialize in comprehensive website audits that provide valuable insights and recommendations to enhance your online presence. ",
  //     listItems: [
  //       "We specialize in comprehensive website audits that provide valuable insights.",
  //       "We provide comprehensive website audits that provide valuable insights.",
  //       "We understand your requirements and provide comprehensive website audits that provide valuable insights.",
  //     ],
  //   },
  // ];

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
      className={`${styles.solutionOurValuesStyle} ${
        theme ? styles.solutionOurValuesDark : ""
      }`}
    >
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.ourValuesHead}>
          <h6
            className={cn(styles.ourValuesTitle, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
          ></h6>
          <h3
            className={cn(styles.ourValuesHeading, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
          ></h3>
          <p className={styles.ourValuesText}>{props?.Description}</p>
        </div>

        <div className={styles.ourValuesAccordion}>
          {props?.Views.map((data, index) => (
            <Disclosure key={index}>
              {(panel) => {
                const { open, close } = panel;
                console.log("jj", data.secoundDescription.split(","));

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
                        src={
                          data.Image.data.attributes.url
                            ? `${base_Url}${data.Image.data.attributes.url}`
                            : `${base_Url}/`
                        }
                        width={30}
                        height={30}
                        alt="bannerImg"
                      />
                      <h4 className={styles.title}>{data.Title}</h4>
                      <div className={styles.iconBox}>
                        {!open ? <Icons.ArrowDown /> : <Icons.ArrowUp />}
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className={styles.accordionBody}>
                      <div className={styles.imgBox}>
                        <ImageCustom
                          src={
                            data.img.data.attributes.url
                              ? `${base_Uri}${data.img.data.attributes.url}`
                              : `${base_Uri}/`
                          }
                          width={200}
                          height={200}
                          alt="bannerImg"
                        />
                      </div>
                      <div className={styles.accordionBodyContent}>
                        {data.Description}
                        <ul className={styles.listStyle}>
                          {data?.secoundDescription
                            ?.split(",")
                            .map((items, index) => (
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
      </div>
    </section>
  );
};

export default SolutionOurValues;
