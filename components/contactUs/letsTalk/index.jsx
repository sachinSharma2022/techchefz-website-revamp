"use client";

import React from "react";
import { useContext } from "react";
import { MyContext } from "@/context/theme";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/ui/inputCustom";
import { Icons } from "@/components/icons";
import CountryDropdown from "@/components/ui/countryDropdown";

import styles from "./style.module.scss";
import CustomDropdown from "@/components/ui/customDropdown";

const LetsTalk = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.lestWorkStyle} ${
        theme ? styles.lestWorkStyleDark : ""
      }`}
    >
      <div className={styles.workArea}>
        <div className={styles.headingMain}>
          <h3 className={styles.formHeading}>
            Let's
            <span className={styles.formTechHighlight}>Connect!</span>
          </h3>
          <p className={styles.headingText}>
            Have questions or need assistance? Our team is here to provide you
            with the support and information you need.
          </p>
        </div>

        <div className={styles.workGrid}>
          <div className={styles.contactImg}>
            <ImageCustom
              src="/images/contact.png"
              width={480}
              height={616}
              alt="contactImg"
            />
          </div>
          <div className={styles.contactUsForm}>
            <p className={styles.formText}>
              Fill up few details to contact you for a discussion about your
              project ideas.
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
                    options={["Country", "India", "united State", "New York"]}
                  />
                </div>
                <div className={`${styles.inputSpace} col-md-12 col-12`}>
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
              <div className="row d-flex align-items-center">
                <div className="col-md-6 col-12">
                  <div className={styles.policyText}>
                    I understand and consent to my personal data being processed
                    in accordance with TechChefz's
                    <span className={styles.policyHighlight}>
                      Privacy Policy
                    </span>
                  </div>
                </div>
                <div className={`${styles.buttonGrid} col-md-6 col-12`}>
                  <Button variant="blueBtn" size="sm">
                    Send a Message <Icons.ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
