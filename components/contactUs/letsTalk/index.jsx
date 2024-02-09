"use client";

import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { Tab } from "@headlessui/react";
import { useContext } from "react";

import CustomDropdown from "@/components/ui/customDropdown";
import { cn } from "@/lib/utils";

import JobsForm from "./forms/jobs";
import ProjectForm from "./forms/project";
import ServicesForm from "./forms/services";
import VendorForm from "./forms/vendor";
import styles from "./style.module.scss";

const LetsTalk = () => {
  const { theme } = useContext(MyContext);

  const dropdownData = [
    { value: "Project", label: "Project" },
    { value: "Job", label: "Job" },
    { value: "Services", label: "Services" },
    { value: "Vendor", label: "Vendor" },
  ];

  return (
    <section className={cn("primary-container")}>
      <div
        className={cn(
          styles.letsContactStyle,
          theme ? styles.letsContactStyleDark : ""
        )}
      >
        <div className={styles.workArea}>
          <div className={styles.headingMain}>
            <h3 className={styles.formHeading}>
              Let&apos;s
              <span className={styles.formTechHighlight}>Connect!</span>
            </h3>
            <p className={styles.descriptionText}>
              Have questions or need assistance? Our team is here to provide you
              with the support and information you need.
            </p>
          </div>

          <div className={`${styles.tabDropdownMob} col-md-6 col-12`}>
            <h3 className={styles.tabDropLabel}>Choose Purpose</h3>
            <CustomDropdown
              placeholder=""
              title="Projects"
              options={dropdownData}
            />
          </div>

          <div className={styles.contactTabWrap}>
            <Tab.Group vertical>
              <Tab.List>
                <Tab>
                  {({ selected }) => (
                    <div
                      className={cn(
                        styles.contactInnerFlex,
                        selected && styles.buttonActive
                      )}
                    >
                      <div className={styles.highlightIcon}>
                        <Icons.CustomDevelopment size={40} />
                        <h1>Projects</h1>
                      </div>

                      {selected && (
                        <div className={styles.icon}>
                          <Icons.GradientArrowForward size={24} />
                        </div>
                      )}
                    </div>
                  )}
                </Tab>
                <Tab>
                  {({ selected }) => (
                    <div
                      className={cn(
                        styles.contactInnerFlex,
                        selected && styles.buttonActive
                      )}
                    >
                      <div className={styles.highlightIcon}>
                        <Icons.Intelligence size={40} />
                        <h1>Services</h1>
                      </div>

                      {selected && (
                        <div className={styles.icon}>
                          <Icons.GradientArrowForward size={24} />
                        </div>
                      )}
                    </div>
                  )}
                </Tab>
                <Tab>
                  {({ selected }) => (
                    <div
                      className={cn(
                        styles.contactInnerFlex,
                        selected && styles.buttonActive
                      )}
                    >
                      <div className={styles.highlightIcon}>
                        <Icons.Platforms size={40} />
                        <h1>Jobs</h1>
                      </div>

                      {selected && (
                        <div className={styles.icon}>
                          <Icons.GradientArrowForward size={24} />
                        </div>
                      )}
                    </div>
                  )}
                </Tab>
                <Tab>
                  {({ selected }) => (
                    <div
                      className={cn(
                        styles.contactInnerFlex,
                        selected && styles.buttonActive
                      )}
                    >
                      <div className={styles.highlightIcon}>
                        <Icons.Market size={40} />
                        <h1>Vendors</h1>
                      </div>

                      {selected && (
                        <div className={styles.icon}>
                          <Icons.GradientArrowForward size={24} />
                        </div>
                      )}
                    </div>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  {/* Project Form */}
                  <ProjectForm />
                </Tab.Panel>
                <Tab.Panel>
                  {/* Services Form */}
                  <ServicesForm />
                </Tab.Panel>
                <Tab.Panel>
                  {/* Jobs Form */}
                  <JobsForm />
                </Tab.Panel>
                <Tab.Panel>
                  {/* Vendor Form */}
                  <VendorForm />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
