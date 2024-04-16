"use client";
import * as yep from "yup";
let EMAIL_REGX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z]{2,5}){1,2}$/;
export const projectValidationSchema = yep.object({
  firstName: yep
    .string()
    .required("First Name is required.")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed."),
  lastName: yep
    .string()
    .required("Last Name is required.")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed."),
  email: yep
    .string()
    .email("Please enter a valid Email.")
    .matches(EMAIL_REGX, "Please enter a valid Email.")
    .required("Email address is required."),
  phone: yep
    .string()
    .required("Phone number is required.")
    .matches(/^[1-9][0-9]+$/, "Number is invalid.")
    .min(7, "Minimum 7 digits are allowed.")
    .max(15, "Maximum 15 digits are allowed."),
  countyCode: yep.string().required("Country code is required."),
  companyName: yep.string().required("Company Name is required."),
  countrySelection: yep.string().required("Country is required."),
  projectExplanation: yep
    .string()
    .min(5, "Please explain in more detail.")
    .required("Project Explanation is required."),
});

export const jobsValidationSchema = yep
  .object({
    firstName: yep
      .string()
      .required("First Name is required.")
      .matches(
        /^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/,
        "Only alphabets are allowed."
      ),
    lastName: yep
      .string()
      .required("Last Name is required.")
      .matches(
        /^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/,
        "Only alphabets are allowed."
      ),
    email: yep
      .string()
      .email("Please enter a valid Email.")
      .matches(EMAIL_REGX, "Please enter a valid Email.")
      .required("Email address is required."),
    phone: yep
      .string()
      .required("Phone number is required.")
      .matches(/^[1-9][0-9]+$/, "Number is invalid.")
      .min(7, "Minimum 10 digits are allowed.")
      .max(15, "Maximum 12 digits are allowed."),
    // portfolioLink: yep.string().required("Portfolio link is required."),
    countyCode: yep.string().required("Country code is required."),
    projectExplanation: yep
      .string()
      .min(5, "Please explain in more detail.")
      .required("Project explanation is required."),
  })
  .shape({
    uploadCV: yep
      .mixed()
      .required("Please attach a resume")
      .test("fileSize", "File size exceeded 5MB", (value) => {
        return value && value.size / 1024 / 1024 <= 5;
      })
      .test("type", "pdf, doc & docx accepted only", (value) => {
        return (
          value &&
          (value.type === "application/pdf" ||
            value.type === "application/msword" ||
            value.type ===
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
        );
      }),
  });

export const serviceValidationSchema = yep.object({
  firstName: yep
    .string()
    .required("First Name is required.")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed."),
  lastName: yep
    .string()
    .required("Last Name is required.")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed."),
  email: yep
    .string()
    .email("Please enter a valid Email.")
    .matches(EMAIL_REGX, "Please enter a valid Email.")
    .required("Email address is required."),
  phone: yep
    .string()
    .required("Phone number is required.")
    .matches(/^[1-9][0-9]+$/, "Number is invalid.")
    .min(7, "Minimum 10 digits are allowed.")
    .max(15, "Maximum 12 digits are allowed."),
  countyCode: yep.string().required("Country code is required."),
  companyName: yep.string().required("Company Name is required."),
  // serviceRequired: yep
  //   .string()
  //   .required("Service Required is required.")
  //   .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed."),
  projectExplanation: yep
    .string()
    .min(5, "Please explain in more detail.")
    .required("Your message is required."),
});

export const vendorValidationSchema = yep.object({
  firstName: yep
    .string()
    .required("First Name is required.")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed."),
  lastName: yep
    .string()
    .required("Last Name is required.")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed."),
  email: yep
    .string()
    .email("Please enter a valid Email.")
    .matches(EMAIL_REGX, "Please enter a valid Email.")
    .required("Email address is required."),
  phone: yep
    .string()
    .required("Phone number is required.")
    .matches(/^[1-9][0-9]+$/, "Number is invalid.")
    .min(7, "Minimum 10 digits are allowed.")
    .max(15, "Maximum 12 digits are allowed."),
  countyCode: yep.string().required("Country code is required."),
  companyName: yep.string().required("Company Name is required."),
  // serviceOffered: yep.string().required("Service Offered is required."),
  projectExplanation: yep
    .string()
    .min(5, "Please explain in more detail.")
    .required("Your message is required."),
});
export const commonValidationSchema = yep.object({
  firstName: yep
    .string()
    .required("First Name is required.")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed."),
  lastName: yep
    .string()
    .required("Last Name is required.")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed."),
  email: yep
    .string()
    .email("Please enter a valid Email.")
    .matches(EMAIL_REGX, "Please enter a valid Email.")
    .required("Email address is required."),
  phone: yep
    .string()
    .required("Phone number is required.")
    .matches(/^[1-9][0-9]+$/, "Number is invalid.")
    .min(7, "Minimum 10 digits are allowed.")
    .max(15, "Maximum 12 digits are allowed."),
  countyCode: yep.string().required("Country code is required."),

  selectPurpose: yep.string().required("Purpose is required."),
  companyName: yep.string().required("Company Name is required."),
  projectExplanation: yep
    .string()
    .min(5, "Please explain in more detail.")
    .required("Your Message is required."),
});
export const footerValidationSchema = yep.object({
  email: yep
    .string()
    .email("Please enter a valid Email.")
    .matches(EMAIL_REGX, "Please enter a valid Email.")
    .required("Email address is required."),
});
export const careerValidationSchema = yep.object({
  firstName: yep
    .string()
    .required("First Name is required.")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed."),
  lastName: yep
    .string()
    .required("Last Name is required.")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed."),
  email: yep
    .string()
    .email("Please enter a valid Email.")
    .matches(EMAIL_REGX, "Please enter a valid Email.")
    .required("Email address is required."),
  phone: yep
    .string()
    .required("Phone number is required.")
    .matches(/^[1-9][0-9]+$/, "Number is invalid.")
    .min(7, "Minimum 10 digits are allowed.")
    .max(15, "Maximum 12 digits are allowed."),
  countyCode: yep.string().required("Country code is required."),
  portfolioLink: yep.string().required("Portfolio link is required."),
  countyCode: yep.string().required("Country code is required."),
  projectExplanation: yep
    .string()
    .min(5, "Please explain in more detail.")
    .required("Project Explanation is required."),
});
