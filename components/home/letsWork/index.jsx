"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import CountryDropdown from "@/components/ui/countryDropdown";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Error, Input, Textarea } from "@/components/ui/inputCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";
import { Form, Formik, useFormik } from "formik";
import { commonValidationSchema } from "@/lib/FormSchema";
import { triggerMail } from "@/lib/triggerMail";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/lib/ServerActions";
import { useRef, useState } from "react";

const LetsWork = ({ contact }) => {
  const { theme, setTheme } = useContext(MyContext);

  const formInitialSchema = {
    fullName: "",
    email: "",
    phone: "",
    countyCode: "",
    companyName: "",
    projectExplanation: "",
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    handleReset,
  } = useFormik({
    initialValues: formInitialSchema,
    validationSchema: commonValidationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      triggerMail({ content: JSON.stringify(values) });
    },
  });

  const recaptchaRef = useRef(null);
  const [isVerified, setIsverified] = useState(false);

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }

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
            <Formik>
              <Form onSubmit={handleSubmit}>
                <div className={styles.contactUsForm}>
                  <h3 className={styles.formHeading}>
                    {contact?.Title}
                    <span className={styles.formTechHighlight}>
                      {contact?.SubTitle}
                    </span>
                  </h3>
                  <p className={styles.formText}>{contact?.Description}</p>
                  <div className={styles.contactFormArea}>
                    <div className={`${styles.inputSpace}`}>
                      <Input
                        label="Full Name*"
                        placeholder="Full Name*"
                        type="name"
                        id="fullName"
                        name="fullName"
                        // error={Boolean(touched.fullName && errors.fullName)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.fullName}
                        errorStatus={touched.fullName && errors.fullName}
                      />
                      {touched.fullName && errors.fullName && (
                        <Error>{errors.fullName}</Error>
                      )}
                    </div>
                    <div className={`${styles.inputSpace}`}>
                      <Input
                        label="Email*"
                        placeholder="Email*"
                        type="email"
                        id="email"
                        name="email"
                        error={Boolean(touched.email && errors.email)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.email}
                      />
                      {touched.email && errors.email && (
                        <Error>{errors.email}</Error>
                      )}
                    </div>
                    <div className={`${styles.inputSpace}`}>
                      <CountryDropdown
                        id="phone"
                        name="phone"
                        onChange={handleChange}
                        setFieldValue={setFieldValue}
                        onBlur={handleBlur}
                        values={values.phone}
                      />
                      {touched.phone && errors.phone && (
                        <Error>{errors.phone}</Error>
                      )}
                    </div>
                    <div className={`${styles.inputSpace}`}>
                      <Input
                        label="Company*"
                        placeholder="Company*"
                        type="text"
                        id="companyName"
                        name="companyName"
                        error={Boolean(
                          touched.companyName && errors.companyName
                        )}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.companyName}
                      />
                      {touched.companyName && errors.companyName && (
                        <Error>{errors.companyName}</Error>
                      )}
                    </div>
                    <div className={`${styles.inputSpace}`}>
                      <Textarea
                        label="Message*"
                        placeholder="Message*"
                        type="textarea"
                        rows="4"
                        id="projectExplanation"
                        name="projectExplanation"
                        error={Boolean(
                          touched.projectExplanation &&
                            errors.projectExplanation
                        )}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.projectExplanation}
                      />
                      {touched.projectExplanation &&
                        errors.projectExplanation && (
                          <Error>{errors.projectExplanation}</Error>
                        )}
                    </div>
                  </div>
                  <div className={styles.captchaImg}>
                    {/* <ImageCustom
                  src="/images/captcha.png"
                  width={219}
                  height={49}
                  alt="captcha"
                /> */}
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      ref={recaptchaRef}
                      onChange={handleCaptchaSubmission}
                    />
                  </div>
                  <div className={styles.policyArea}>
                    <p className={styles.policyText}>
                      {contact?.policy}
                      <span className={styles.policyHighlight}>
                        Privacy Policy
                      </span>
                    </p>
                    <div className={`${styles.buttonGrid} col-md-6 col-12`}>
                      {isVerified ? (
                        <Button
                          variant={theme ? "blueBtnDark" : "blueBtn"}
                          size="lg"
                          type="submit"
                          disabled
                        >
                          {contact?.Btn} <Icons.ArrowRight size={18} />
                        </Button>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>

            <div className={styles.contactImg}>
              <ImageCustom
                src={
                  contact?.Image?.data?.attributes?.url
                    ? `${base_Uri}${contact?.Image?.data?.attributes?.url}`
                    : `${base_Uri}/`
                }
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
