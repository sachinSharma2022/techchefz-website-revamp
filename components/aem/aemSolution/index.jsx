"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import ConfirmationPopup from "@/components/ui/confirmationPopup";
import CountryDropdown from "@/components/ui/countryDropdown";
import { ServiceDropdown } from "@/components/ui/customDropdown";
import { Error, Input } from "@/components/ui/inputCustom";
import { MyContext } from "@/context/theme";
import { aemValidationSchema } from "@/lib/FormSchema";
import { verifyCaptcha } from "@/lib/ServerActions";
import { triggerMail } from "@/lib/triggerMail";
import { cn } from "@/lib/utils";
import { Form, Formik, useFormik } from "formik";
import { useContext, useRef, useState } from "react";
import styles from "./style.module.scss";
import ReCAPTCHA from "react-google-recaptcha";
import CircleLoader from "@/components/ui/circleLoader";

const AemSolution = ({ contact, className, aemContact }) => {
  console.log("hi shivaa", aemContact);
  const { theme } = useContext(MyContext);
  const [inprogress, setInProgress] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const recaptchaRef = useRef(null);

  const options = [
    { name: "AEM Development" },
    { name: "AEM Migration" },
    { name: "AEM Managed Services" },
  ];

  const formInitialSchema = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countyCode: "+91",
    companyName: "",
    serviceInterest: "",
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
    validationSchema: aemValidationSchema,
    onSubmit: (values, action) => {
      setInProgress(true);
      triggerMail({ content: JSON.stringify(values) });
      setTimeout(() => {
        action.resetForm();
        recaptchaRef.current.reset();
        setInProgress(false);
        dialogOpen();
      }, 4000);
    },
  });

  async function handleCaptchaSubmission(token) {
    await verifyCaptcha(token)
      .then(() => setIsVerified(true))
      .catch(() => setIsVerified(false));
  }

  const dialogOpen = () => setIsOpen(true);
  const dialogClose = () => setIsOpen(false);

  return (
    <div
      className={cn(
        styles.aemSolutionStyle,
        theme ? styles.aemSolutionStyleDark : "",
        className
      )}
    >
      <ConfirmationPopup open={isOpen} onClose={dialogClose} theme={theme} />

      <div className={styles.headSection}>
        <h3 className={styles.formHeading}>
          {aemContact.Title}
        </h3>
        <p className={styles.formText}>
          {aemContact.SubTitle}
        </p>
      </div>

      <Formik>
        <Form onSubmit={handleSubmit}>
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
                value={values.firstName}
                errorStatus={touched.firstName && errors.firstName}
                onKeyDown={(event) => {
                  var regex = new RegExp("^[a-zA-Z]*$");
                  if (!regex.test(event.key) && !(event.key === "'")) {
                    event.preventDefault();
                    return false;
                  }
                }}
              />
              {touched.firstName && errors.firstName && (
                <Error>{errors.firstName}</Error>
              )}
            </div>

            <div className={`${styles.inputSpace}`}>
              <Input
                label="Last Name*"
                placeholder="Last Name*"
                type="name"
                id="lastName"
                name="lastName"
                // error={Boolean(touched.fullName && errors.fullName)}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                errorStatus={touched.lastName && errors.lastName}
                onKeyDown={(event) => {
                  var regex = new RegExp("^[a-zA-Z]*$");
                  if (
                    !regex.test(event.key) &&
                    !(event.key === "-") &&
                    !(event.key === " ")
                  ) {
                    event.preventDefault();
                    return false;
                  }
                }}
              />
              {touched.lastName && errors.lastName && (
                <Error>{errors.lastName}</Error>
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
                valueCountryCode={values.countyCode}
                onKeyDown={(event) => {
                  var regex = new RegExp("^[0-9]*$");
                  if (
                    !regex.test(event.key) &&
                    !(event.key == "Backspace") &&
                    !(event.key == "ArrowRight") &&
                    !(event.key == "ArrowLeft")
                  ) {
                    event.preventDefault();
                    return false;
                  }
                }}
              />
              {touched.phone && errors.phone && <Error>{errors.phone}</Error>}
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
              {touched.email && errors.email && <Error>{errors.email}</Error>}
            </div>

            <div className={`${styles.inputSpace}`}>
              <Input
                label="Company*"
                placeholder="Company*"
                type="text"
                id="companyName"
                name="companyName"
                error={Boolean(touched.companyName && errors.companyName)}
                onChange={(e) => {
                  const { value } = e.target;
                  // Regular expression to allow only alphabets and numbers
                  if (/^[A-Za-z0-9\s]*$/.test(value)) {
                    handleChange(e); // Only update value if it matches the regex
                  }
                }}
                onBlur={handleBlur}
                value={values.companyName}
              />
              {touched.companyName && errors.companyName && (
                <Error>{errors.companyName}</Error>
              )}
            </div>

            <div className={cn(styles.inputSpace)}>
              <ServiceDropdown
                placeholder="Service Interest*"
                title="Service Interest*"
                name="serviceInterest"
                setFieldValue={setFieldValue}
                onBlur={handleBlur}
                value={values.serviceInterest}
                options={options}
                errorStatus={touched.serviceInterest && errors.serviceInterest}
                className="custom-dropdown z-5"
              />
              {touched.serviceInterest && errors.serviceInterest && (
                <Error>{errors.serviceInterest}</Error>
              )}
            </div>
            <div className={styles.captchaImg}>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                ref={recaptchaRef}
                onChange={handleCaptchaSubmission}
                theme={"dark"}
              />
            </div>
          </div>

          <div className={cn(styles.buttonGrid)}>
            <Button
              variant={theme ? "blueBtnDark" : "blueBtn"}
              size="md"
              disabled={
                (isVerified ? false : true) ? true : inprogress ? true : false
              }
              type="submit"
            >
              {aemContact.Button}
              {inprogress ? (
                <CircleLoader repeatCount={1} />
              ) : (
                <Icons.ArrowRight size={18} />
              )}
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AemSolution;
