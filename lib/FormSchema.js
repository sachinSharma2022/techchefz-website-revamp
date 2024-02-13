"use client";
import * as yep from "yup";
export const projectValidationSchema = yep.object({
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
    phone: yep.string().length(10).required("Phone is required"),
    companyName: yep.string().required("Company Name is required"),
    countrySelection: yep.string().required("Country is required"),
    projectExplanation: yep
      .string()
      .required("Project Explanation is required"),
  });

  export const jobsValidationSchema = yep.object({
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
    phone: yep.string().length(10).required("Phone is required"),
    portfolioLink: yep.string().required("Company Name is required"),
    countyCode: yep.string().required("Country code is required"),
    projectExplanation: yep
      .string()
      .required("Project Explanation is required"),
  });

  export const serviceValidationSchema = yep.object({
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
    phone: yep.string().length(10).required("Phone is required"),
    companyName: yep.string().required("Company Name is required"),
    serviceRequired: yep.string().required("Service Required is required"),
    projectExplanation: yep
      .string()
      .required("Project Explanation is required"),
  });

  export const vendorValidationSchema = yep.object({
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
    phone: yep.string().length(10).required("Phone is required"),
    companyName: yep.string().required("Company Name is required"),
    serviceOffered: yep.string().required("Service Offered is required"),
    projectExplanation: yep
      .string()
      .required("Project Explanation is required"),
  });