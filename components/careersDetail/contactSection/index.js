"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import CountryDropdown from "@/components/ui/countryDropdown";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Input, InputFile, Textarea,Error } from "@/components/ui/inputCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext,useState,useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha"
import { verifyCaptcha } from "@/lib/ServerActions";
import styles from "./style.module.scss";
import { careerValidationSchema } from "@/lib/FormSchema";
import { Form, Formik,useFormik } from "formik";
import { triggerMail } from "@/lib/triggerMail";

const ContactSection = ({props}) => {
  const { theme, setTheme } = useContext(MyContext);
  const recaptchaRef = useRef(null)
    const [isVerified, setIsverified] = useState(false)
    const formInitialSchema = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      countyCode: "",
      portfolioLink: "",
      uploadCV: "",
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
    validationSchema: careerValidationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      triggerMail({ content: JSON.stringify(values) });
    },
  });

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false))
  }

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
            <Formik>
            <Form onSubmit={handleSubmit}>
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
                      type="text"
                      id="firstName"
                      name="firstName"
                      error={Boolean(touched.firstName && errors.firstName)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      values={values.firstName}
                    />
                    {touched.firstName && errors.firstName && (
                  <Error>{errors.firstName}</Error>
                )}
                  </div>
                  <div className={`${styles.inputSpace} col-md-6 col-12`}>
                    <Input
                      variant="default"
                      label="Last Name*"
                      placeholder="Last Name*"
                      type="name"
                      id="lastName"
                      name="lastName"
                      error={Boolean(touched.lastName && errors.lastName)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      values={values.lastName}
                    />
                    {touched.lastName && errors.lastName && (
                  <Error>{errors.lastName}</Error>
                )}
                  </div>
                  <div className={`${styles.inputSpace} col-md-6 col-12`}>
                    <Input
                      variant="default"
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
                    {touched.email && errors.email && <Error>{errors.email}</Error>}
                  </div>
                  <div className={`${styles.inputSpace} col-md-6 col-12`}>
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
                  <div className={`${styles.inputSpace} col-md-6 col-12`}>
                    <InputFile
                      label="Upload CV* (pdf/doc upto 5mb)"
                      placeholder="Upload CV* (pdf/doc upto 5mb)"
                      type="file"
                      id="uploadCV"
                      name="uploadCV"
                      error={Boolean(touched.uploadCV && errors.uploadCV)}
                      setFieldValue={setFieldValue}
                      onBlur={handleBlur}
                      values={values.uploadCV}
                      errorStatus={touched.uploadCV && errors.uploadCV}
                    />
                    {touched.uploadCV && errors.uploadCV && (
                    <Error>{errors.uploadCV}</Error>
                  )}
                  </div>
                  <div className={`${styles.inputSpace} col-md-6 col-12`}>
                    <Input
                      variant="default"
                      label="Portfolio Link"
                      placeholder="Portfolio Link"
                      type="text"
                      id="portfolioLink"
                      name="portfolioLink"
                      error={Boolean(
                        touched.portfolioLink && errors.portfolioLink
                      )}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      values={values.portfolioLink}
                      errorStatus={touched.portfolioLink && errors.portfolioLink}
                    />
                    {touched.portfolioLink && errors.portfolioLink && (
                    <Error>{errors.portfolioLink}</Error>
                  )}
                  </div>
                  <div className={`${styles.inputSpace} col-md-12 col-12`}>
                    <Textarea
                      label="Cover Letter*"
                      placeholder="Cover Letter*"
                      rows="5"
                      id="projectExplanation"
                    name="projectExplanation"
                    error={Boolean(
                      touched.projectExplanation && errors.projectExplanation
                    )}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.projectExplanation}
                    errorStatus={
                      touched.projectExplanation && errors.projectExplanation
                    }
                    />
                    {touched.projectExplanation && errors.projectExplanation && (
                    <Error>{errors.projectExplanation}</Error>
                  )}
                  </div>
                </div>
              </div>
              <div className={styles.captchaImg}>
              <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            ref={recaptchaRef}
            onChange={handleCaptchaSubmission}
          />
              </div>
              <div className={styles.policyArea}>
                <div className={styles.policyText}>
                  I understand and consent to my personal data being processed
                  in accordance with TechChefz&apos;s
                  <span className={styles.policyHighlight}>Privacy Policy</span>
                </div>

                <Button  variant={theme ? "blueBtnDark" : "blueBtn"} size="lg" disabled={isVerified?false:true} type="submit">
                Send a Message <Icons.ArrowRight size={18} />
                  </Button>
              </div>
            </div>
            </Form>
            </Formik>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
