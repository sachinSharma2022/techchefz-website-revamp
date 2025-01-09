"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import ConfirmationPopup from "@/components/ui/confirmationPopup";
import CountryDropdown from "@/components/ui/countryDropdown";
import { ServiceDropdown } from "@/components/ui/customDropdown";
import { Error, Input } from "@/components/ui/inputCustom";
import { MyContext } from "@/context/theme";
import { commonValidationSchema } from "@/lib/FormSchema";
import { verifyCaptcha } from "@/lib/ServerActions";
import { triggerMail } from "@/lib/triggerMail";
import { cn } from "@/lib/utils";
import { Form, Formik } from "formik";
import { useContext, useRef, useState } from "react";
import styles from "./style.module.scss";

const AemSolution = ({ contact, className }) => {
  const { theme } = useContext(MyContext);
  const [inprogress, setInProgress] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

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
    selectPurpose: "",
    companyName: "",
    projectExplanation: "",
  };

  const recaptchaRef = useRef(null);

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
      <ConfirmationPopup open={isOpen} onClose={dialogClose} />

      <div className={styles.headSection}>
        <h3 className={styles.formHeading}>
          Transform Your Digital Experience with Tailored AEM Solutions
        </h3>
        <p className={styles.formText}>
          Fill in the required details so that we can craft an awesome and ideal
          AEM solution for you.
        </p>
      </div>

      <Formik
        initialValues={formInitialSchema}
        validationSchema={commonValidationSchema}
        onSubmit={(values, actions) => {
          setInProgress(true);
          triggerMail({ content: JSON.stringify(values) });
          setTimeout(() => {
            actions.resetForm();
            recaptchaRef.current.reset();
            setInProgress(false);
            dialogOpen();
          }, 4000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className={styles.contactFormArea}>
              <div className={cn(styles.inputSpace)}>
                <Input
                  label="First Name*"
                  placeholder="First Name*"
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  errorStatus={touched.firstName && errors.firstName}
                />
                {touched.firstName && errors.firstName && (
                  <Error>{errors.firstName}</Error>
                )}
              </div>

              <div className={cn(styles.inputSpace)}>
                <Input
                  label="Last Name*"
                  placeholder="Last Name*"
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  errorStatus={touched.lastName && errors.lastName}
                />
                {touched.lastName && errors.lastName && (
                  <Error>{errors.lastName}</Error>
                )}
              </div>

              <div className={cn(styles.inputSpace)}>
                <CountryDropdown
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  setFieldValue={setFieldValue}
                  onBlur={handleBlur}
                  value={values.phone}
                  valueCountryCode={values.countyCode}
                />
                {touched.phone && errors.phone && <Error>{errors.phone}</Error>}
              </div>

              <div className={cn(styles.inputSpace)}>
                <Input
                  label="Email*"
                  placeholder="Email*"
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  errorStatus={touched.email && errors.email}
                />
                {touched.email && errors.email && <Error>{errors.email}</Error>}
              </div>

              <div className={cn(styles.inputSpace)}>
                <Input
                  label="Company Name*"
                  placeholder="Company Name*"
                  type="text"
                  id="companyName"
                  name="companyName"
                  onChange={(e) => {
                    const { value } = e.target;
                    if (/^[A-Za-z0-9\s]*$/.test(value)) {
                      handleChange(e);
                    }
                  }}
                  onBlur={handleBlur}
                  value={values.companyName}
                  errorStatus={touched.companyName && errors.companyName}
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
                  value={values.selectPurpose}
                  options={options}
                  errorStatus={touched.selectPurpose && errors.selectPurpose}
                  className="custom-dropdown z-5"
                />
                {touched.selectPurpose && errors.selectPurpose && (
                  <Error>{errors.selectPurpose}</Error>
                )}
              </div>
            </div>

            <div className={cn(styles.buttonGrid)}>
              <Button
                variant={theme ? "blueBtnDark" : "blueBtn"}
                size="md"
                disabled={isVerified ? inprogress : true}
                type="submit"
              >
                Request a Free AEM Consultation
                <Icons.ArrowRight size={18} />
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AemSolution;
