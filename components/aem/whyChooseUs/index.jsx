"use client";
import { MyContext } from "@/context/theme";
import { Disclosure } from "@headlessui/react";
import { useContext, useState } from "react";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

import TextRevel from "@/components/ui/sectionAnimation";
import styles from "./style.module.scss";
import AemSolution from "../aemSolution";

const WhyChooseUs = ({ id }) => {
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

  const toggleSection = [
    {
      title: "Comprehensive AEM Managed Services",
      description:
        "From hosting to updates, our AEM Managed Services keep your CMS running smoothly.",
    },
    {
      title: "Custom AEM Development",
      description:
        "Tailored AEM development solutions to meet the unique needs of your business.",
    },
    {
      title: "AEM Edge Delivery:",
      description:
        "Leverage AEM's Edge Delivery to accelerate global content delivery, ensuring fast, scalable, and secure experiences for your users—regardless of location.",
    },
    {
      title: "Certified Adobe Experts",
      description:
        "Work with certified Adobe Experience Manager developers with years of expertise.",
    },
    {
      title: "Seamless AEM Migration",
      description: "Migrate to AEM with zero downtime and no data loss.",
    },
    {
      title: "24/7 Support",
      description:
        "Continuous monitoring and proactive support for your Adobe Experience Manager platform.",
    },
  ];

  return (
    <section
      className={cn(styles.whyChooseUs, !theme ? styles.whyChooseUsDark : "")}
      id={id}
    >
      <div className={cn("primary-container")} id="formScroll">
        <TextRevel>
          <div className={styles.ourValuesHead}>
            <h6 className={cn(styles.ourValuesTitle, "gradient-text")}>
              Why Choose Us
            </h6>
            <h3 className={cn(styles.ourValuesHeading, "gradient-text")}>
              Enhance your digital experiences with scalable, secure, and
              efficient <span>AEM Managed Services.</span>
            </h3>
          </div>
        </TextRevel>

        <div className={styles.ourValuesContent}>
          <div className={styles.toggleSection}>
            <p className={styles.ourValuesText}>
              Transform your digital experiences with our expert AEM Managed
              services. From seamless implementation and smooth migrations to
              tailored customizations and reliable support, we deliver scalable,
              secure, and efficient results.
            </p>
            <div className={styles.ourValuesAccordion}>
              {toggleSection.map((data, index) => (
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
                          {data.title}
                          <div className={styles.iconBox}>
                            {!open ? <Icons.ArrowDown /> : <Icons.ArrowUp />}
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className={styles.accordionBody}>
                          {data.description}
                        </Disclosure.Panel>
                      </>
                    );
                  }}
                </Disclosure>
              ))}
            </div>
          </div>
          <div className={styles.formSection}>
            <AemSolution />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
