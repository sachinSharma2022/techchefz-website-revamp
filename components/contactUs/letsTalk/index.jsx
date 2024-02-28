"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { base_Url } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";
import { useContext } from "react";
import Select from "react-select";
import JobsForm from "./forms/jobs";
import ProjectForm from "./forms/project";
import ServicesForm from "./forms/services";
import VendorForm from "./forms/vendor";
import styles from "./style.module.scss";
import { useState } from "react";

const LetsTalk = ({ props }) => {
  const { theme } = useContext(MyContext);
  

  const dropdownData = [
    { value: "Projects", label: "Projects" },
    { value: "Careers", label: "Careers" },
    { value: "Services", label: "Services" },
    { value: "Vendors", label: "Vendors" },
  ];
  const [form, setForm] = useState(dropdownData[0].value);
  const controlStyle = {
    control: (styles) => ({
      ...styles,
      height: 40,
      borderRadius: 0,
      backgroundColor: "transparent",
      borderWidth: 0,
      borderColor: "transparent",
      "&:hover": {
        borderColor: "#05bed7",
      },
      boxShadow: "none",
      fontWeight: 400,
      fontFamily: "../public/fonts/Aeonik-Regular.otf",
      fontSize: "1.2rem",
      color: "#000000",
    }),
    singleValue: () => ({
      color: theme ? "white" : "#111",
      fontSize: "1.125rem",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    valueContainer: (provided) => ({
      ...provided,
      overflow: "visible",
      top: 0,
      position: "relative",
      left: 0,
      display: "flex",
      padding: 0,
    }),
    placeholder: (provided, state) => ({
      ...provided,
      position: "absolute",
      top: state.hasValue || state.selectProps.inputValue ? 0 : "0",
      left: -2,
      transition: "top 0.1s, font-size 0.1s",
      fontSize: (state.hasValue || state.selectProps.inputValue) && 13,
      color: "#8d8d8d",
      fontWeight: 400,
    }),
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#0066CC" : null,
        color: isFocused ? "white" : "#111",
        fontSize: "1.125rem",
        borderColor: isFocused ? "#05bed7" : "#05bed7",
        cursor: "pointer",
      };
    },
  };

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
            <h3
              className={cn(styles.formHeading, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
            ></h3>
            <p
              className={styles.descriptionText}
              dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}
            ></p>
          </div>
          {/* For desktop */}
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
                      {console.log(selected,"selected")}
                      <div className={styles.highlightIcon}>
                        <ImageCustom
                          height={40}
                          width={40}
                          src={
                            props?.Image1?.data?.attributes?.url
                              ? `${base_Url}${props?.Image1?.data?.attributes?.url}`
                              : `${base_Url}/`
                          }
                        />
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
                        <ImageCustom
                          height={40}
                          width={40}
                          src={
                            props?.Image2?.data?.attributes?.url
                              ? `${base_Url}${props?.Image2?.data?.attributes?.url}`
                              : `${base_Url}/`
                          }
                        />
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
                        <ImageCustom
                          height={40}
                          width={40}
                          src={
                            props?.Image3?.data?.attributes?.url
                              ? `${base_Url}${props?.Image3?.data?.attributes?.url}`
                              : `${base_Url}/`
                          }
                        />
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
                        <ImageCustom
                          height={40}
                          width={40}
                          src={
                            props?.Image4?.data?.attributes?.url
                              ? `${base_Url}${props?.Image4?.data?.attributes?.url}`
                              : `${base_Url}/`
                          }
                        />
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
              <div className={styles.panelSection}>
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
              </div>
            </Tab.Group>
          </div>
           
           {/* For mobile */}
           <div className={`${styles.mobileTabContainer}`}>

           <div className={`${styles.tabDropdownMob}`}>
            <h3 className={styles.tabDropLabel}>Choose Purpose</h3>
            <Select
              isSearchable={false}
              options={dropdownData}
              styles={controlStyle}
              defaultValue={{ label: "Project", value: "Project" }}
              onChange={(option)=>{
                setForm(option.value)
              }}
            />
          </div>
         {form==="Projects" && <ProjectForm />}
         {form==="Services" && <ServicesForm />}
         {form==="Careers" && <JobsForm />}
         {form==="Vendors" && <VendorForm />}
         

          
        </div>

           </div>
         
      </div>
    </section>
  );
};

export default LetsTalk;
