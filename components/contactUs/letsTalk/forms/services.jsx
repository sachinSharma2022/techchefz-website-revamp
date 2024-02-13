"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import CountryDropdown from "@/components/ui/countryDropdown";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Input, Textarea, Error } from "@/components/ui/inputCustom";
import { MyContext } from "@/context/theme";
import { Form, Formik } from "formik";
import { useContext } from "react";
import { serviceValidationSchema } from "@/lib/FormSchema";
import { triggerMail } from "@/lib/triggerMail";

import CustomDropdown from "@/components/ui/customDropdown";

import styles from "./style.module.scss";

const ServicesForm = () => {
  const { theme } = useContext(MyContext);
  const formInitialSchema = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countyCode:"",
    companyName: "",
    serviceRequired: "",
    projectExplanation: "",
  };
  
  const dropdownData = [
    { value: "Country", label: "Country" },
    { value: "India", label: "India" },
    { value: "united State", label: "united State" },
    { value: "New York", label: "New York" },
  ];

  return (
    <Formik
      onSubmit={(values,action) => {
        triggerMail({content:JSON.stringify(values)})
      }}
      initialValues={formInitialSchema}
      initialStatus={{
        success: false,
        successMsg: "",
      }}
      validationSchema={serviceValidationSchema}
    >
      {({ errors, handleBlur, handleChange,setFieldValue, touched, values }) => (
        <Form>
          <div className={styles.contactUsForm}>
            <p className={styles.formText}>
              Fill up few details for your specific service requirement.
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
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    onChange={handleChange}
                    setFieldValue={setFieldValue}
                    onBlur={handleBlur}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.companyName}
                    errorStatus={touched.companyName && errors.companyName}
                  />
                  {touched.companyName && errors.companyName && (
                    <Error>{errors.companyName}</Error>
                  )}
                </div>
                <div className={`${styles.inputSpace} col-md-6 col-12`}>
                  <CustomDropdown 
                    label="Service Required*"
                    name="serviceRequired"
                    setFieldValue={setFieldValue}
                    onBlur={handleBlur}
                    values={values.serviceRequired}
                    options={dropdownData}
                    errorStatus={
                      touched.serviceRequired && errors.serviceRequired
                    }
                    className="custom-dropdown"
                    placeholder="Service Required*"
                  />
                  {touched.serviceRequired && errors.serviceRequired && (
                    <Error>{errors.serviceRequired}</Error>
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
                <Button
                  variant={theme ? "blueBtnDark" : "blueBtn"}
                  size="lg"
                  type="submit"
                >
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

export default ServicesForm;
