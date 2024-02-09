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
import { base_Uri } from "@/lib/constants";
import { base_Url } from "@/lib/constants";

const LetsTalk = ({props}) => {
 
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
          styles.lestWorkStyle,
          theme ? styles.lestWorkStyleDark : ""
        )}
      >
        <div className={styles.workArea}>
          <div className={styles.headingMain}>
            <h3 className={styles.formHeading} dangerouslySetInnerHTML={{ __html: `${props?.Title}`}}>
             
            </h3>
            <p className={styles.descriptionText} dangerouslySetInnerHTML={{ __html: `${props?.Description}`}}>
              
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
                        <ImageCustom height={40}  width={40} src={props?.Image1?.data?.attributes?.url?`${base_Url}${props?.Image1?.data?.attributes?.url}`:`${base_Url}/`} />
                        <h1>{props.Title1}</h1>
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
                      <ImageCustom height={40}  width={40} src={props?.Image2?.data?.attributes?.url?`${base_Url}${props?.Image2?.data?.attributes?.url}`:`${base_Url}/`} />
                        <h1>{props.Title2}</h1>
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
                        <ImageCustom height={40}  width={40} src={props?.Image3?.data?.attributes?.url?`${base_Url}${props?.Image3?.data?.attributes?.url}`:`${base_Url}/`} />
                        <h1>{props.Title3}</h1>
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
                      <ImageCustom height={40}  width={40} src={props?.Image4?.data?.attributes?.url?`${base_Url}${props?.Image4?.data?.attributes?.url}`:`${base_Url}/`} />
                        <h1>{props.Title4}</h1>
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
