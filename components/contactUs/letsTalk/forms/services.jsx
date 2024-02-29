"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import CountryDropdown from "@/components/ui/countryDropdown";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Error, Input, Textarea } from "@/components/ui/inputCustom";
import { MyContext } from "@/context/theme";
import { serviceValidationSchema } from "@/lib/FormSchema";
import { triggerMail } from "@/lib/triggerMail";
import { Form, Formik } from "formik";
import { useContext, useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/lib/ServerActions";
import CircleLoader from "@/components/ui/circleLoader";
import Link from "next/link";
import { countryList } from "@/lib/country";
import ConfirmationPopup from "@/components/ui/confirmationPopup";

import CustomDropdown from "@/components/ui/customDropdown";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

const ServicesForm = () => {
  const { theme } = useContext(MyContext);
  const recaptchaRef = useRef(null);
  const [isVerified, setIsverified] = useState(false);
  const [inprogress, setinprogress] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const formInitialSchema = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countyCode: "",
    companyName: "",
    serviceRequired: "",
    projectExplanation: "",
  };

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }
  const dialogOpen=()=>setIsOpen(true)
  const dialogClose=()=>setIsOpen(false)

  return (
    <>
    <ConfirmationPopup open={isOpen} onClose={dialogClose} />
    <Formik
      onSubmit={(values, action) => {
        dialogOpen()
        setinprogress(true);
        triggerMail({ content: JSON.stringify(values),formType:"Services"  });
        action.resetForm();
        setTimeout(() => {
          setinprogress(false);
        }, 4000);
      }}
      initialValues={formInitialSchema}
      initialStatus={{
        success: false,
        successMsg: "",
      }}
      validationSchema={serviceValidationSchema}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        setFieldValue,
        touched,
        values,
      }) => (
        <Form>
          <div className={styles.contactUsForm}>
            <p className={styles.formText}>
              Fill up few details for your specific service requirement.
            </p>
            <div className={styles.contactFormArea}>
              <div className="grid-2-last-full">
                <div className={cn(styles.inputSpace, "input-item")}>
                  <Input
                    label="First Name*"
                    placeholder="First Name*"
                    type="name"
                    id="firstName"
                    name="firstName"
                    error={Boolean(touched.firstName && errors.firstName)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    errorStatus={touched.firstName && errors.firstName}
                  />
                  {touched.firstName && errors.firstName && (
                    <Error>{touched.firstName && errors.firstName}</Error>
                  )}
                </div>
                <div className={cn(styles.inputSpace, "input-item")}>
                  <Input
                    label="Last Name*"
                    placeholder="Last Name*"
                    type="name"
                    id="lastName"
                    name="lastName"
                    error={Boolean(touched.lastName && errors.lastName)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    errorStatus={touched.lastName && errors.lastName}
                  />
                  {touched.lastName && errors.lastName && (
                    <Error>{errors.lastName}</Error>
                  )}
                </div>
                <div className={cn(styles.inputSpace, "input-item")}>
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
                    errorStatus={touched.email && errors.email}
                  />
                  {touched.email && errors.email && (
                    <Error>{errors.email}</Error>
                  )}
                </div>
                <div className={cn(styles.inputSpace, "input-item")}>
                  <CountryDropdown
                    id="phone"
                    name="phone"
                    onChange={handleChange}
                    setFieldValue={setFieldValue}
                    onBlur={handleBlur}
                    value={values.phone}
                    errorStatus={touched.phone && errors.phone}
                    clear={inprogress}
                  />
                  {touched.phone && errors.phone && (
                    <Error>{errors.phone}</Error>
                  )}
                </div>
                <div className={cn(styles.inputSpace, "input-item")}>
                  <Input
                    label="Company Name*"
                    placeholder="Company Name*"
                    type="name"
                    id="companyName"
                    name="companyName"
                    error={Boolean(touched.companyName && errors.companyName)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.companyName}
                    errorStatus={touched.companyName && errors.companyName}
                  />
                  {touched.companyName && errors.companyName && (
                    <Error>{errors.companyName}</Error>
                  )}
                </div>
                <div className={cn(styles.inputSpace, "input-item")}>
                  <CustomDropdown
                    label="Service Required*"
                    name="serviceRequired"
                    setFieldValue={setFieldValue}
                    onBlur={handleBlur}
                    value={values.serviceRequired}
                    options={countryList}
                    errorStatus={
                      touched.serviceRequired && errors.serviceRequired
                    }
                    className="custom-dropdown"
                    placeholder="Service Required*"
                    clear={inprogress}
                  />
                  {touched.serviceRequired && errors.serviceRequired && (
                    <Error>{errors.serviceRequired}</Error>
                  )}
                </div>
                <div className={cn(styles.inputSpace, "input-item")}>
                  <Textarea
                    label="Brief Explanation of your project*"
                    placeholder="Brief Explanation of your project*"
                    type="textarea"
                    rows="4"
                    id="projectExplanation"
                    name="projectExplanation"
                    error={Boolean(
                      touched.projectExplanation && errors.projectExplanation
                    )}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.projectExplanation}
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
                I understand and consent to my personal data being processed in
                accordance with TechChefz&apos;s
                <span className={styles.policyHighlight}><Link href="/privacy-policy">Privacy Policy</Link></span>
              </div>
              <div className={`${styles.buttonGrid}`}>
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
          </div>
        </Form>
      )}
    </Formik>
    </>
   
  );
};

export default ServicesForm;
