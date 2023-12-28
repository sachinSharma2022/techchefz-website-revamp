import React from "react";
import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/ui/inputCustom";
import { Icons } from "@/components/icons";
import CountryDropdown from "@/components/ui/countryDropdown";

const LetsWork = () => {
  return (
    <section className={`${styles.lestWorkStyle}`}>
      <div className={styles.workArea}>
        <div className={styles.workGrid}>
          <div className={styles.contactUsForm}>
            <h3 className={styles.formHeading}>
              Let’s work on your
              <span className={styles.formTechHighlight}>new digital ideas.</span>
            </h3>
            <p className={styles.formText}>
              Fill out some quick details about your project and we will get in
              touch with you!
            </p>
            <div className={styles.contactFormArea}>
              <div className="row">
                <div className={`${styles.inputSpace} col-md-6 col-12`}>
                  <CustomInput
                    label="Full Name*"
                    placeholder="Full Name*"
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
                    label="Company*"
                    placeholder="Company*"
                    type="text"
                  />
                </div>
                <div className={`${styles.inputSpace} col-md-12 col-12`}>
                  <CustomInput
                    label="Message*"
                    placeholder="Message*"
                    type="textarea"
                    rows="4"
                  />
                </div>
              </div>
            </div>
            <div className={styles.policyArea}>
              <div className="row d-flex align-items-center">
                <div className="col-md-6 col-12">
                  <div className={styles.policyText}>
                    By sending this form I confirm that I have read and accept
                    the{" "}
                    <span className={styles.policyHighlight}>
                      Privacy Policy
                    </span>
                  </div>
                </div>
                <div className={`${styles.buttonGrid} col-md-6 col-12`}>
                  <Button variant="blueBtn" size="md">
                    Send a Message <Icons.ArrowRight size={18} />
                  </Button>
                </div>
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
    </section>
  );
};

export default LetsWork;
