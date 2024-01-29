"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import CountryDropdown from "@/components/ui/countryDropdown";
import { ImageCustom } from "@/components/ui/imageCustom";
import CustomInput from "@/components/ui/inputCustom";
import { MyContext } from "@/context/theme";
import { Tab } from "@headlessui/react";
import { Form, Formik } from "formik";
import { useContext } from "react";
import * as yep from "yup";

import CustomDropdown from "@/components/ui/customDropdown";
import { cn } from "@/lib/utils";

import styles from "./style.module.scss";
import ProjectForm from "./forms/project";
import ServicesForm from "./forms/services";
import JobsForm from "./forms/jobs";
import VendorForm from "./forms/vendor";

const LetsTalk = () => {
  const { theme } = useContext(MyContext);
  const formInitialSchema = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    countrySelection: "",
    projectExplanation: "",
  };
  const validationSchema = yep.object({
    firstName: yep
      .string()
      .required("First Name is required")
      .matches(/^[A-Za-z]+$/, "Only alphabets are allowed"),
    lastName: yep
      .string()
      .required("Last Name is required")
      .matches(/^[A-Za-z]+$/, "Only alphabets are allowed"),
    email: yep
      .string()
      .email("Please enter a valid Email")
      .required("Email is required"),
    phone: yep.string().required("Phone is required"),
    companyName: yep.string().required("Company Name is required"),
    countrySelection: yep.string().required("Country is required"),
    projectExplanation: yep
      .string()
      .required("Project Explanation is required"),
  });

  return (
    <section className={cn("primary-container")}>
      <div
        className={`${styles.lestWorkStyle} ${
          theme ? styles.lestWorkStyleDark : ""
        }`}
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
              title="Projects"
              options={[
                "Contact us for project ideas.",
                "Contact us for project.",
              ]}
            />
          </div>

          <div className={styles.contactTabWrap}>
            <Tab.Group vertical>
              <Tab.List>
                <Tab>
                  {({ selected }) => (
                    <div className={styles.contactInnerFlex}>
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
                    <div className={styles.contactInnerFlex}>
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
                    <div className={styles.contactInnerFlex}>
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
                    <div className={styles.contactInnerFlex}>
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
