"use client";
import * as yep from "yup";
export const projectValidationSchema = yep.object({
  firstName: yep
    .string()
    .required("First Name is required")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed"),
  lastName: yep
    .string()
    .required("Last Name is required")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed"),
  email: yep
    .string()
    .email("Please enter a valid Email")
    .required("Email address is required"),
  phone: yep
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .min(10, "Minimum 10 digits are allowed")
    .max(12, "Maximum 12 digits are allowed"),
  companyName: yep
    .string()
    .required("Company Name is required")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed"),
  countrySelection: yep.string().required("Country is required"),
  projectExplanation: yep.string().required("Project Explanation is required"),
});

export const jobsValidationSchema = yep.object({
  firstName: yep
    .string()
    .required("First Name is required")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed"),
  lastName: yep
    .string()
    .required("Last Name is required")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed"),
  email: yep
    .string()
    .email("Please enter a valid Email")
    .required("Email address is required"),
  phone: yep
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .min(10, "Minimum 10 digits are allowed")
    .max(12, "Maximum 12 digits are allowed"),
  portfolioLink: yep.string().required("Portfolio link is required"),
  countyCode: yep.string().required("Country code is required"),
  projectExplanation: yep.string().required("Project Explanation is required"),
});

export const serviceValidationSchema = yep.object({
  firstName: yep
    .string()
    .required("First Name is required")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed"),
  lastName: yep
    .string()
    .required("Last Name is required")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed"),
  email: yep
    .string()
    .email("Please enter a valid Email")
    .required("Email address is required"),
  phone: yep
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .min(10, "Minimum 10 digits are allowed")
    .max(12, "Maximum 12 digits are allowed"),
  companyName: yep
    .string()
    .required("Company Name is required")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed"),
  serviceRequired: yep
    .string()
    .required("Service Required is required")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed"),
  projectExplanation: yep.string().required("Project Explanation is required"),
});

export const vendorValidationSchema = yep.object({
  firstName: yep
    .string()
    .required("First Name is required")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed"),
  lastName: yep
    .string()
    .required("Last Name is required")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed"),
  email: yep
    .string()
    .email("Please enter a valid Email")
    .required("Email address is required"),
  phone: yep
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .min(10, "Minimum 10 digits are allowed")
    .max(12, "Maximum 12 digits are allowed"),
  companyName: yep
    .string()
    .required("Company Name is required")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed"),
  serviceOffered: yep.string().required("Service Offered is required"),
  projectExplanation: yep.string().required("Project Explanation is required"),
});
export const commonValidationSchema = yep.object({
  firstName: yep
  .string()
  .required("First Name is required")
  .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed"),
lastName: yep
  .string()
  .required("Last Name is required")
  .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed"),
  email: yep
    .string()
    .email("Please enter a valid Email")
    .required("Email address is required"),
  phone: yep
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .min(10, "Minimum 10 digits are allowed")
    .max(12, "Maximum 12 digits are allowed"),
    
    selectPurpose: yep
    .string()
    .required("Purpose is required")
    ,
    
  companyName: yep
    .string()
    .required("Company Name is required")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed"),
  projectExplanation: yep.string().required("Project Explanation is required"),
});
export const footerValidationSchema = yep.object({
  email: yep
    .string()
    .email("Please enter a valid Email")
    .required("Email address is required"),
});
export const careerValidationSchema = yep.object({
  firstName: yep
    .string()
    .required("First Name is required")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed"),
  lastName: yep
    .string()
    .required("Last Name is required")
    .matches(/^[a-zA-Z !@#\$%\^\&*\)\(+=._-]+$/, "Only alphabets are allowed"),
  email: yep
    .string()
    .email("Please enter a valid Email")
    .required("Email address is required"),
  phone: yep
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .min(10, "Minimum 10 digits are allowed")
    .max(12, "Maximum 12 digits are allowed"),
  portfolioLink: yep.string().required("Portfolio link is required"),
  countyCode: yep.string().required("Country code is required"),
  projectExplanation: yep.string().required("Project Explanation is required"),
});
