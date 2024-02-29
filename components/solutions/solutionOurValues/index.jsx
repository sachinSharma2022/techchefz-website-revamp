"use client";
import { Disclosure,Transition } from "@headlessui/react";
import { useState } from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";
import styles from "./style.module.scss";
import { base_Url } from "@/lib/constants";
import { motion ,AnimatePresence} from "framer-motion";

const SolutionOurValues = ({ props }) => {
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
                      <motion.span
              initial={{ backgroundColor: "transparent" }}
              animate={{ rotate: open ? 180 : 0 }}
              transition={{
                duration: 0.15,
                type: "tween",
              }}>
              <Icons.ArrowDown /> 
              </motion.span>
                      </div>
                    </Disclosure.Button>
                    <AnimatePresence>
                    <Disclosure.Panel as={motion.div} initial={{ y: -20, opacity: 0.2 }}
    animate={{ y: 0, opacity: 1, }} transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }} exit={{
       y: -20, opacity: 0.2 ,
      transition: { duration: 0.4 },
    }} className={styles.accordionBody}>
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
                                {/* <Icons.CheckIcon /> */}
                                {items}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </Disclosure.Panel>
                    </AnimatePresence>
                    
                   
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
