"use client";
import { Disclosure } from "@headlessui/react";
import { useState } from "react";
// import { ChevronRightIcon } from '@heroicons/react/20/solid'

import { ImageCustom } from "@/components/ui/imageCustom";
import styles from "./style.module.scss";
import { Icons } from "@/components/icons";

const OurValues = () => {
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

  const accordianData = [
    {
      title: "Innovation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Obsession with Customer Success",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Exploration",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Excellence in Delivery",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <section className={styles.ourValues}>
      <div className="row">
        <div className="col-md-7 col-lg-8">
          <div className={styles.ourValuesHead}>
            <h6 className={styles.ourValuesTitle}>Our Values</h6>
            <h3 className={styles.ourValuesHeading}>
              Our values are part of everything we create at Instrument.
            </h3>
          </div>
        </div>
      </div>

      <div className={styles.ourValuesContent}>
        <div className="row justify-content-between">
          <div className="col-md-6 col-lg-6">
            <div className={styles.ourValueImg}>
              <ImageCustom
                src={"/images/img/ourValues.png"}
                width={600}
                height={550}
                alt="content-img"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-5">
            <p className={styles.ourValuesText}>
              We believe in a customer-centric ethic without and people-centric
              paradigm within. With a strong sense of community, ownership, and
              collaboration our people work in a spirit of co-creation,
              co-innovation, and co-development to engineer next-generation
              software products with the help of accelerators.
            </p>
            <div className={styles.ourValuesAccordiaon}>
              {accordianData.map((data, index) => (
                <Disclosure key={index}>
                  {(panel) => {
                    const { open, close } = panel;
                    return (
                      <>
                        <Disclosure.Button
                          className={styles.accordiaonHead}
                          onClick={() => {
                            if (!open) {
                              close();
                            }
                            togglePanels({ ...panel, key: index });
                          }}
                        >
                          {data.title}
                          {!open ? <Icons.ArrowDown /> : <Icons.ArrowUp />}
                        </Disclosure.Button>
                        <Disclosure.Panel className={styles.accordiaonBody}>
                          {data.content}
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

export default OurValues;
