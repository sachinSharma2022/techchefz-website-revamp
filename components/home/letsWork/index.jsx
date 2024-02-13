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

const LetsWork = () => {
  const { theme } = useContext(MyContext);
  return (
    <section
      className={cn(
        styles.lestWorkStyle,
        theme ? styles.lestWorkStyleDark : ""
      )}
    >
      <div className={cn("primary-container")}>
        <div className={styles.workArea}>
          <div className={styles.workGrid}>
            <div className={styles.contactUsForm}>
              <h3 className={styles.formHeading}>
                Let’s work on your
                <span className={styles.formTechHighlight}>
                  new digital ideas.
                </span>
              </h3>
              <p className={styles.formText}>
                Fill out some quick details about your project and we will get
                in touch with you!
              </p>
              <div className={styles.contactFormArea}>
                <div className={`${styles.inputSpace}`}>
                  <Input
                    label="Full Name*"
                    placeholder="Full Name*"
                    type="name"
                  />
                </div>
                <div className={`${styles.inputSpace}`}>
                  <Input label="Email*" placeholder="Email*" type="email" />
                </div>
                <div className={`${styles.inputSpace}`}>
                  <CountryDropdown />
                </div>
                <div className={`${styles.inputSpace}`}>
                  <Input label="Company*" placeholder="Company*" type="text" />
                </div>
                <div className={`${styles.inputSpace}`}>
                  <Textarea
                    label="Message*"
                    placeholder="Message*"
                    type="textarea"
                    rows="4"
                  />
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
                <p className={styles.policyText}>
                  By sending this form I confirm that I have read and accept the
                  <span className={styles.policyHighlight}>Privacy Policy</span>
                </p>
                <div className={`${styles.buttonGrid} col-md-6 col-12`}>
                  <Button variant={theme ? "blueBtnDark" : "blueBtn"} size="lg">
                    Send a Message <Icons.ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            </div>

            <div className={styles.contactImg}>
              <ImageCustom
                src="/images/contact.png"
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
