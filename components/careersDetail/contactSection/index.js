"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import CountryDropdown from "@/components/ui/countryDropdown";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Input, InputFile, Textarea, Error } from "@/components/ui/inputCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext, useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/lib/ServerActions";
import styles from "./style.module.scss";
import { jobsValidationSchema } from "@/lib/FormSchema";
import { Form, Formik, useFormik } from "formik";
import { triggerMailWithFile } from "@/lib/triggerMail";
import CircleLoader from "@/components/ui/circleLoader";
import ConfirmationPopup from "@/components/ui/confirmationPopup";
import Link from "next/link";

const ContactSection = ({ props, id }) => {
  const { theme, setTheme } = useContext(MyContext);
  const recaptchaRef = useRef(null);
  const [isVerified, setIsverified] = useState(false);
  const [inprogress, setinprogress] = useState(false);
  const [fileName, setFileName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
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
    setTouched,
  } = useFormik({
    initialValues: formInitialSchema,
    validationSchema: jobsValidationSchema,
    onSubmit: (values, action) => {
      const formdata = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formdata.append(key, value);
      });
      formdata.append("formType", "Job");
      setinprogress(true);
      triggerMailWithFile(formdata);
      setTimeout(() => {
        action.resetForm();
        setFileName("");
        recaptchaRef.current.reset();
        setinprogress(false);
        dialogOpen();
      }, 4000);
    },
  });

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }
  const dialogOpen = () => setIsOpen(true);
  const dialogClose = () => setIsOpen(false);

  return (
    <section
      className={`${styles.contactSectionStyle} ${
        theme ? styles.contactSectionStyleDark : ""
      }`}
      id={id}
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
              <p>{props?.Description}</p>
              <h3>{props.Hedding}</h3>
              <ul>
                <li>Only pdf/doc are accepted up to 5mb only.</li>
                <li>
                  Designers are appreciated to share their portfolio links.
                </li>
              </ul>
            </div>
            <ConfirmationPopup open={isOpen} onClose={dialogClose} />
            <Formik>
              <Form onSubmit={handleSubmit}>
                <div className={styles.contactUsForm}>
                  <p className={styles.formText}>{props.SubTitle}</p>
                  <div className={styles.contactFormArea}>
                    <div className="grid-2-last-full">
                      <div className="input-item">
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
                          value={values.firstName}
                        />
                        {touched.firstName && errors.firstName && (
                          <Error>{errors.firstName}</Error>
                        )}
                      </div>
                      <div className="input-item">
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
                          value={values.lastName}
                        />
                        {touched.lastName && errors.lastName && (
                          <Error>{errors.lastName}</Error>
                        )}
                      </div>
                      <div className="input-item">
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
                          value={values.email}
                        />
                        {touched.email && errors.email && (
                          <Error>{errors.email}</Error>
                        )}
                      </div>
                      <div className="input-item">
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
                      <div className="input-item">
                        <InputFile
                          label="Upload CV* (pdf/doc upto 5mb)"
                          placeholder="Upload CV* (pdf/doc upto 5mb)"
                          type="file"
                          id="uploadCV"
                          name="uploadCV"
                          error={Boolean(touched.uploadCV && errors.uploadCV)}
                          setFieldValue={setFieldValue}
                          onBlur={handleBlur}
                          settouched={setTouched}
                          touched={touched}
                          setfilename={setFileName}
                          filename={fileName}
                          errorStatus={touched.uploadCV && errors.uploadCV}
                        />
                        {touched.uploadCV && errors.uploadCV && (
                          <Error>{errors.uploadCV}</Error>
                        )}
                      </div>
                      <div className="input-item">
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
                          value={values.portfolioLink}
                          errorStatus={
                            touched.portfolioLink && errors.portfolioLink
                          }
                        />
                        {touched.portfolioLink && errors.portfolioLink && (
                          <Error>{errors.portfolioLink}</Error>
                        )}
                      </div>
                      <div className="input-item">
                        <Textarea
                          label="Cover Letter*"
                          placeholder="Cover Letter*"
                          rows="5"
                          id="projectExplanation"
                          name="projectExplanation"
                          error={Boolean(
                            touched.projectExplanation &&
                              errors.projectExplanation
                          )}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.projectExplanation}
                          errorStatus={
                            touched.projectExplanation &&
                            errors.projectExplanation
                          }
                        />
                        {touched.projectExplanation &&
                          errors.projectExplanation && (
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
                      theme={"dark"}
                    />
                  </div>
                  <div className={styles.policyArea}>
                    <div className={styles.policyText}>
                      I understand and consent to my personal data being
                      processed in accordance with TechChefz&apos;s
                      <span className={styles.policyHighlight}>
                      <Link href="/privacy-policy" target="_blank"> Privacy Policy</Link>
                      </span>
                    </div>

                    <Button
                      variant={theme ? "blueBtnDark" : "blueBtn"}
                      size="lg"
                      disabled={
                        (isVerified ? false : true)
                          ? true
                          : inprogress
                          ? true
                          : false
                      }
                      type="submit"
                    >
                      Send a Message
                      {inprogress ? (
                        <CircleLoader repeatCount={1} />
                      ) : (
                        <Icons.ArrowRight size={18} />
                      )}
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
