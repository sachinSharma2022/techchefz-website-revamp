"use client";
import { MyContext } from "@/context/theme";
import { Disclosure } from "@headlessui/react";
import { useContext, useState } from "react";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

import TextRevel from "@/components/ui/sectionAnimation";
import styles from "./style.module.scss";

const WhyChooseUs = ({ props }) => {
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
        "From hosting to updates, our AEM Managed Services keep your CMS running smoothly",
    },
    {
      title: "Custom AEM Development",
      description:
        "From hosting to updates, our AEM Managed Services keep your CMS running smoothly",
    },
    {
      title: "Certified Adobe Experts",
      description:
        "From hosting to updates, our AEM Managed Services keep your CMS running smoothly",
    },
    {
      title: "Seamless AEM Migration",
      description:
        "From hosting to updates, our AEM Managed Services keep your CMS running smoothly",
    },
    {
      title: "24/7 Support",
      description:
        "From hosting to updates, our AEM Managed Services keep your CMS running smoothly",
    },
  ];

  return (
    <section
      className={cn(styles.whyChooseUs, !theme ? styles.whyChooseUsDark : "")}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={styles.ourValuesHead}>
            <h6 className={cn(styles.ourValuesTitle, "gradient-text")}>
              Why Choose Us
            </h6>
            <h3 className={cn(styles.ourValuesHeading, "gradient-text")}>
              Our <span>AEM Services</span> are part of everything we create.
            </h3>
          </div>
        </TextRevel>

        <div className={styles.ourValuesContent}>
          <div className={styles.toggleSection}>
            <p className={styles.ourValuesText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nisi diam, tincidunt id sapien id, laoreet
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
          <div className={styles.ourValueImg}>form Here</div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
