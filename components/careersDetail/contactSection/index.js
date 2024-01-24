"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import CountryDropdown from "@/components/ui/countryDropdown";
import { ImageCustom } from "@/components/ui/imageCustom";
import CustomInput from "@/components/ui/inputCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";

const ContactSection = () => {
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
            <div className={styles.contactImg}>
              <h4>
                Your new{" "}
                <span className={styles.titleGradient}>journey awaits!</span>
              </h4>
              <p>
                Delve into our case studies to witness firsthand how we&apos;ve
                tackled challenges, delivered solutions, and achieved measurable
                success. Each story is a testament to our commitment, expertise,
                and the transformative impact.
              </p>

              <h3>Heads Up:</h3>
              <ul>
                <li>Only pdf/doc are accepted up to 5mb only.</li>
                <li>
                  Designers are appreciated to share their portfolio links.
                </li>
              </ul>
            </div>

            <div className={styles.contactUsForm}>
              <p className={styles.formText}>
                Fill up few details so that we can contact your regarding an
                opportunity.
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
                    <div className="form-floating">
                      <input
                        label="Upload CV* (pdf/doc upto 5mb)"
                        placeholder="Upload CV* (pdf/doc upto 5mb)"
                        className={`${styles.uploader} form-control`}
                        id="floatingInput"
                        // type="file"
                        // onChange={handleCvFileSelect}
                      />
                      <label className={styles.labelCustom} for="floatingInput">
                        Upload CV* (pdf/doc upto 5mb)
                      </label>
                      <div className={styles.uploadIcon}>
                        <Icons.uploader />
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.inputSpace} col-md-6 col-12`}>
                    <CustomInput
                      label="Portfolio Link"
                      placeholder="Portfolio Link"
                      type="text"
                    />
                  </div>
                  <div className={`${styles.inputSpace} col-md-12 col-12`}>
                    <div className="form-floating">
                      <textarea
                        label="Cover Letter*"
                        placeholder="Cover Letter*"
                        className={`${styles.textArea} form-control`}
                        id="floatingInput"
                        type="text"
                        rows="5"
                      />
                      <label className={styles.labelCustom} for="floatingInput">
                        Cover Letter*
                      </label>
                    </div>
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
                  I understand and consent to my personal data being processed
                  in accordance with TechChefz&apos;s
                  <span className={styles.policyHighlight}>Privacy Policy</span>
                </div>

                <Button variant="blueBtn" size="lg" className={styles.btnGrid}>
                  Send a Message <Icons.ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
