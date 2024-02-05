"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import CountryDropdown from "@/components/ui/countryDropdown";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Input, Textarea } from "@/components/ui/inputCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";

const LetsWork = ({contact}) => {
  
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.lestWorkStyle} ${
        theme ? styles.lestWorkStyleDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.workArea}>
          <div className={styles.workGrid}>
            <div className={styles.contactUsForm}>
              <h3 className={styles.formHeading}>
                {contact?.Title}
                <span className={styles.formTechHighlight}>
                  {contact?.SubTitle}
                </span>
              </h3>
              <p className={styles.formText}>
                {contact?.Description}
              </p>
              <div className={styles.contactFormArea}>
                <div className="row">
                  <div className={`${styles.inputSpace} col-md-6 col-12`}>
                    <Input
                      label="Full Name*"
                      placeholder="Full Name*"
                      type="name"
                    />
                  </div>
                  <div className={`${styles.inputSpace} col-md-6 col-12`}>
                    <Input label="Email*" placeholder="Email*" type="email" />
                  </div>
                  <div className={`${styles.inputSpace} col-md-6 col-12`}>
                    <CountryDropdown />
                  </div>
                  <div className={`${styles.inputSpace} col-md-6 col-12`}>
                    <Input
                      label="Company*"
                      placeholder="Company*"
                      type="text"
                    />
                  </div>
                  <div className={`${styles.inputSpace} col-md-12 col-12`}>
                    <Textarea
                      label="Message*"
                      placeholder="Message*"
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
                    {contact?.policy}
                      <span className={styles.policyHighlight}>
                        Privacy Policy
                      </span>
                    </div>
                  </div>
                  <div className={`${styles.buttonGrid} col-md-6 col-12`}>
                    <Button variant="blueBtn" size="lg">
                     {contact?.Btn} <Icons.ArrowRight size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contactImg}>
              <ImageCustom
                 src={contact?.Image?.data?.attributes?.url?`${base_Uri}${contact?.Image?.data?.attributes?.url}`:`${base_Uri}/`}
                width={480}
                height={616}
                alt="contactImg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsWork;
