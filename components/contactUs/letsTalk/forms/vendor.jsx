"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import CountryDropdown from "@/components/ui/countryDropdown";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Input, Textarea, Error } from "@/components/ui/inputCustom";
import { MyContext } from "@/context/theme";
import { Form, Formik } from "formik";
import { useContext } from "react";
import * as yep from "yup";

import CustomDropdown from "@/components/ui/customDropdown";

import styles from "./style.module.scss";

const VendorForm = () => {
  const { theme } = useContext(MyContext);
  const formInitialSchema = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    countrySelection: "",
    projectExplanation: "",
  };
  const validationSchema = yep.object({
    firstName: yep
      .string()
      .required("First Name is required")
      .matches(/^[A-Za-z]+$/, "Only alphabets are allowed"),
    lastName: yep
      .string()
      .required("Last Name is required")
      .matches(/^[A-Za-z]+$/, "Only alphabets are allowed"),
    email: yep
      .string()
      .email("Please enter a valid Email")
      .required("Email is required"),
    phone: yep.string().required("Phone is required"),
    companyName: yep.string().required("Company Name is required"),
    countrySelection: yep.string().required("Country is required"),
    projectExplanation: yep
      .string()
      .required("Project Explanation is required"),
  });

  const dropdownData = [
    { value: "Country", label: "Country" },
    { value: "India", label: "India" },
    { value: "united State", label: "united State" },
    { value: "New York", label: "New York" },
  ];

  return (
    <Formik
      onSubmit={(values) => {
        console.log(values, "values");
      }}
      initialValues={formInitialSchema}
      initialStatus={{
        success: false,
        successMsg: "",
      }}
      validationSchema={validationSchema}
    >
      {({ errors, handleBlur, handleChange, touched, values }) => (
        <Form>
          <div className={styles.contactUsForm}>
            <p className={styles.formText}>
              Fill up few details to contact us for offering your services.
            </p>
            <div className={styles.contactFormArea}>
              <div className="row">
                <div className={`${styles.inputSpace} col-md-6 col-12`}>
                  <Input
                    label="First Name*"
                    placeholder="First Name*"
                    type="name"
                    id="firstName"
                    name="firstName"
                    error={Boolean(touched.firstName && errors.firstName)}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values.firstName}
                    errorStatus={touched.firstName && errors.firstName}
                  />
                  {touched.firstName && errors.firstName && (
                    <Error>{touched.firstName && errors.firstName}</Error>
                  )}
                </div>
                <div className={`${styles.inputSpace} col-md-6 col-12`}>
                  <Input
                    label="Last Name*"
                    placeholder="Last Name*"
                    type="name"
                    id="lastName"
                    name="lastName"
                    error={Boolean(touched.lastName && errors.lastName)}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values.lastName}
                    errorStatus={touched.lastName && errors.lastName}
                  />
                  {touched.lastName && errors.lastName && (
                    <Error>{errors.lastName}</Error>
                  )}
                </div>
                <div className={`${styles.inputSpace} col-md-6 col-12`}>
                  <Input
                    label="Email*"
                    placeholder="Email*"
                    type="email"
                    id="email"
                    name="email"
                    error={Boolean(touched.email && errors.email)}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values.email}
                    errorStatus={touched.email && errors.email}
                  />
                  {touched.email && errors.email && (
                    <Error>{errors.email}</Error>
                  )}
                </div>
                <div className={`${styles.inputSpace} col-md-6 col-12`}>
                  <CountryDropdown
                    id="phone"
                    name="phone"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values.phone}
                    errorStatus={touched.phone && errors.phone}
                  />
                  {touched.phone && errors.phone && (
                    <Error>{errors.phone}</Error>
                  )}
                </div>
                <div className={`${styles.inputSpace} col-md-6 col-12`}>
                  <Input
                    label="Company Name*"
                    placeholder="Company Name*"
                    type="name"
                    id="companyName"
                    name="companyName"
                    error={Boolean(touched.companyName && errors.companyName)}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values.companyName}
                    errorStatus={touched.companyName && errors.companyName}
                  />
                  {touched.companyName && errors.companyName && (
                    <Error>{errors.companyName}</Error>
                  )}
                </div>
                <div className={`${styles.inputSpace} col-md-6 col-12`}>
                  <CustomDropdown
                    title="Country"
                    name="countrySelection"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values.countrySelection}
                    options={dropdownData}
                    errorStatus={
                      touched.countrySelection && errors.countrySelection
                    }
                    className="custom-dropdown"
                  />
                  {touched.countrySelection && errors.countrySelection && (
                    <Error>{errors.countrySelection}</Error>
                  )}
                </div>
                <div className={`${styles.inputSpace} col-md-12 col-12`}>
                  <Textarea
                    label="Brief Explanation of your project**"
                    placeholder="Brief Explanation of your project**"
                    type="textarea"
                    rows="4"
                    id="projectExplanation"
                    name="projectExplanation"
                    error={Boolean(
                      touched.projectExplanation && errors.projectExplanation
                    )}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
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
              <ImageCustom
                src="/images/captcha.png"
                width={219}
                height={49}
                alt="captcha"
              />
            </div>
            <div className={styles.policyArea}>
              <div className={styles.policyText}>
                I understand and consent to my personal data being processed in
                accordance with TechChefz&apos;s
                <span className={styles.policyHighlight}>Privacy Policy</span>
              </div>
              <div className={`${styles.buttonGrid}`}>
                <Button variant={theme ? "blueBtnDark" : "blueBtn"} size="lg" type="submit">
                  Send a Message <Icons.ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default VendorForm;
