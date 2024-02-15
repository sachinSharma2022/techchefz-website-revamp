"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import CountryDropdown from "@/components/ui/countryDropdown";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Input, InputFile, Textarea } from "@/components/ui/inputCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";

const ContactSection = ({props}) => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={`${styles.contactSectionStyle} ${
        theme ? styles.contactSectionStyleDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.workArea}>
          <div className={styles.workGrid}>
            <div className={styles.contactImg}>
              <h4>
                {/* Your new{" "}
                <span className={styles.titleGradient}>journey awaits!</span> */}
                {props?.Title}
              </h4>
              <p>
              {props?.Description}
              </p>

               <h3>{props.Hedding}</h3>
              <ul>
                <li>Only pdf/doc are accepted up to 5mb only.</li>
                <li>
                  Designers are appreciated to share their portfolio links.
                </li>
              </ul> 
            </div>

            <div className={styles.contactUsForm}>
              <p className={styles.formText}>
              {props.SubTitle}
              </p>
              <div className={styles.contactFormArea}>
                <div className="row">
                  <div className={`${styles.inputSpace} col-md-6 col-12`}>
                    <Input
                      variant="default"
                      label="First Name*"
                      placeholder="First Name*"
                      type="name"
                    />
                  </div>
                  <div className={`${styles.inputSpace} col-md-6 col-12`}>
                    <Input
                      variant="default"
                      label="Last Name*"
                      placeholder="Last Name*"
                      type="name"
                    />
                  </div>
                  <div className={`${styles.inputSpace} col-md-6 col-12`}>
                    <Input
                      variant="default"
                      label="Email*"
                      placeholder="Email*"
                      type="email"
                    />
                  </div>
                  <div className={`${styles.inputSpace} col-md-6 col-12`}>
                    <CountryDropdown />
                  </div>
                  <div className={`${styles.inputSpace} col-md-6 col-12`}>
                    <InputFile
                      label="Upload CV* (pdf/doc upto 5mb)"
                      placeholder="Upload CV* (pdf/doc upto 5mb)"
                      type="file"
                      id="companyName"
                      name="companyName"
                    />
                  </div>
                  <div className={`${styles.inputSpace} col-md-6 col-12`}>
                    <Input
                      variant="default"
                      label="Portfolio Link"
                      placeholder="Portfolio Link"
                      type="text"
                    />
                  </div>
                  <div className={`${styles.inputSpace} col-md-12 col-12`}>
                    <Textarea
                      label="Cover Letter*"
                      placeholder="Cover Letter*"
                      rows="5"
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
                  I understand and consent to my personal data being processed
                  in accordance with TechChefz&apos;s
                  <span className={styles.policyHighlight}>Privacy Policy</span>
                </div>

                <Button
                  variant={theme ? "blueBtnDark" : "blueBtn"}
                  size="lg"
                  className={styles.btnGrid}
                >
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
