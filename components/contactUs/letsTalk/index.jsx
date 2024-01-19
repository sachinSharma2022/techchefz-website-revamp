"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import CountryDropdown from "@/components/ui/countryDropdown";
import { ImageCustom } from "@/components/ui/imageCustom";
import CustomInput from "@/components/ui/inputCustom";
import { MyContext } from "@/context/theme";
import { Tab } from "@headlessui/react";
import { useContext, useState } from "react";

import CustomDropdown from "@/components/ui/customDropdown";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

const LetsTalk = () => {
  const { theme, setTheme } = useContext(MyContext);
  let [isOpen, setIsOpen] = useState(false);

  return (
    <section className={cn("primary-container")}>
      <section
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
                  <div className={styles.contactUsForm}>
                    <p className={styles.formText}>
                      Fill up few details to contact you for a discussion about
                      your project ideas.
                    </p>
                    <div className={styles.contactFormArea}>
                      <div className="row">
                        <div className={`${styles.inputSpace} col-md-6 col-12`}>
                          <CustomInput
                            label="First Name*"
                            placeholder="First Name*"
                            type="name"
                          />
                        </div>
                        <div className={`${styles.inputSpace} col-md-6 col-12`}>
                          <CustomInput
                            label="Last Name*"
                            placeholder="Last Name*"
                            type="name"
                          />
                        </div>
                        <div className={`${styles.inputSpace} col-md-6 col-12`}>
                          <CustomInput
                            label="Email*"
                            placeholder="Email*"
                            type="email"
                          />
                        </div>
                        <div className={`${styles.inputSpace} col-md-6 col-12`}>
                          <CountryDropdown />
                        </div>
                        <div className={`${styles.inputSpace} col-md-6 col-12`}>
                          <CustomInput
                            label="Company Name*"
                            placeholder="Company Name*"
                            type="name"
                          />
                        </div>
                        <div className={`${styles.inputSpace} col-md-6 col-12`}>
                          <CustomDropdown
                            title="Country"
                            options={[
                              "Country",
                              "India",
                              "united State",
                              "New York",
                            ]}
                          />
                        </div>
                        <div
                          className={`${styles.inputSpace} col-md-12 col-12`}
                        >
                          <CustomInput
                            label="Brief Explanation of your project**"
                            placeholder="Brief Explanation of your project**"
                            type="textarea"
                            rows="4"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.captchaImg}>
                      <ImageCustom
                        src="/images/captcha.png"
                        width={219}
                        height={49}
                        alt="captcha"
                      />
                    </div>
                    <div className={styles.policyArea}>
                      <div className={styles.policyText}>
                        I understand and consent to my personal data being
                        processed in accordance with TechChefz&apos;s
                        <span className={styles.policyHighlight}>
                          Privacy Policy
                        </span>
                      </div>
                      <div className={`${styles.buttonGrid}`}>
                        <Button variant="blueBtn" size="md">
                          Send a Message <Icons.ArrowRight size={18} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
                <Tab.Panel>Content 3</Tab.Panel>
                <Tab.Panel>Content 4</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LetsTalk;
