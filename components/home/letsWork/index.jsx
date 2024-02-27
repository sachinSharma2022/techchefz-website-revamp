"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import CountryDropdown from "@/components/ui/countryDropdown";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Error, Input, Textarea } from "@/components/ui/inputCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";
import { Form, Formik, useFormik } from "formik";
import { commonValidationSchema } from "@/lib/FormSchema";
import { triggerMail } from "@/lib/triggerMail";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/lib/ServerActions";
import { useRef, useState } from "react";
import CircleLoader from "@/components/ui/circleLoader";
import CustomDropdown from "@/components/ui/customDropdown";
import { countryList } from "@/lib/country";

const LetsWork = ({ contact }) => {
  const { theme, setTheme } = useContext(MyContext);
  const [inprogress, setinprogress] = useState(false);

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
      setinprogress(true);
      triggerMail({ content: JSON.stringify(values) });
      action.resetForm();
      setTimeout(() => {
        setinprogress(false);
      }, 4000);
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
                        label="First Name*"
                        placeholder="First Name*"
                        type="name"
                        id="firstName"
                        name="firstName"
                        // error={Boolean(touched.fullName && errors.fullName)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullName}
                        errorStatus={touched.fullName && errors.fullName}
                      />
                      {touched.fullName && errors.fullName && (
                        <Error>{errors.fullName}</Error>
                      )}
                    </div>
                    <div className={`${styles.inputSpace}`}>
                      <Input
                        label="Last Name*"
                        placeholder="Last Name*"
                        type="name"
                        id="LastName"
                        name="LastName"
                        // error={Boolean(touched.fullName && errors.fullName)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullName}
                        errorStatus={touched.fullName && errors.fullName}
                      />
                      {touched.fullName && errors.fullName && (
                        <Error>{errors.fullName}</Error>
                      )}
                    </div>
                    <div className={`${styles.inputSpace}`}>
                      <CountryDropdown
                        id="phone"
                        name="phone"
                        onChange={handleChange}
                        setFieldValue={setFieldValue}
                        onBlur={handleBlur}
                        value={values.phone}
                        clear={inprogress}
                      />
                      {touched.phone && errors.phone && (
                        <Error>{errors.phone}</Error>
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
                        value={values.email}
                      />
                      {touched.email && errors.email && (
                        <Error>{errors.email}</Error>
                      )}
                    </div>
                    <div className={`${styles.inputSpace}`}>
                      <CustomDropdown
                        placeholder="Select Purpose*"
                        title="Select Purpose*"
                        options={countryList}
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
                        value={values.companyName}
                      />
                      {touched.companyName && errors.companyName && (
                        <Error>{errors.companyName}</Error>
                      )}
                    </div>
                    <div className={`${styles.inputSpace}`}>
                      <Textarea
                        label="Project Explanation*"
                        placeholder="Project Explanation*"
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
                        value={values.projectExplanation}
                      />
                      {touched.projectExplanation &&
                        errors.projectExplanation && (
                          <Error>{errors.projectExplanation}</Error>
                        )}
                    </div>
                  </div>
                  <div className={styles.captchaImg}>
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      ref={recaptchaRef}
                      onChange={handleCaptchaSubmission}
                      className={styles.reCaptcha}
                    />
                  </div>
                  <div className={styles.policyArea}>
                    <p className={styles.policyText}>
                      {contact?.policy}
                      <span className={styles.policyHighlight}>
                        <Link href={contact?.BtnLink}>Privacy Policy</Link>
                      </span>
                    </p>
                    <div className={`${styles.buttonGrid}`}>
                      <Button
                        variant={theme ? "blueBtnDark" : "blueBtn"}
                        size="md"
                        i
                        disabled={
                          (isVerified ? false : true)
                            ? true
                            : inprogress
                            ? true
                            : false
                        }
                        type="submit"
                      >
                        {contact?.Btn}
                        {inprogress ? (
                          <CircleLoader repeatCount={1} />
                        ) : (
                          <Icons.ArrowRight size={18} />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>

            <ImageCustom
              src={
                contact?.Image?.data?.attributes?.url
                  ? `${base_Uri}${contact?.Image?.data?.attributes?.url}`
                  : `${base_Uri}/`
              }
              width={480}
              height={616}
              alt="contactImg"
              className={styles.contactImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsWork;
