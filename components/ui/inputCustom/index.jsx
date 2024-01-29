"use client";

import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import styles from "./style.module.scss";

const InputCustom = ({ label, type, placeholder, disabled, as, rows }) => {
  const { theme } = useContext(MyContext);
  return (
    <div
      className={`${styles.inputContainerStyle} ${
        theme ? styles.inputContainerStyleDark : ""
      }`}
    >
      <div className="form-floating">
        <input
          type={type}
          className={`${styles.floatInput} form-control`}
          id="floatingInput"
          disabled={disabled}
          placeholder={placeholder}
          as={as}
          rows={rows}
        />
        <label className={styles.labelCustom} for="floatingInput">
          {label}
        </label>
      </div>
    </div>
  );
};

export default InputCustom;
