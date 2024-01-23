"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { cn } from "@/lib/utils";

import styles from "./style.module.scss";

const CustomDropdown = ({ title, value, options, onChange, className }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <div className={cn(styles.dropdownContainerStyle, className , theme ? styles.dropdownContainerDark : "")}>
      <div class="form-floating">
        <select
          className={`${styles.selectMain} form-select`}
          id="floatingSelect"
          value={value}
          onChange={onChange}
        >
          <option disabled value="">
            Select an option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option}
            </option>
          ))}
        </select>
        <label className={styles.customLabel} for="floatingSelect">
          {title}
        </label>
      </div>
    </div>
  );
};

export default CustomDropdown;
