"use client";
import * as yep from "yup";
export const validationSchema = yep.object({
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
    phone: yep.number().max(10).min(10).required("Phone is required"),
    companyName: yep.string().required("Company Name is required"),
    countrySelection: yep.string().required("Country is required"),
    projectExplanation: yep
      .string()
      .required("Project Explanation is required"),
  });