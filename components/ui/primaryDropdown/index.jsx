import React from "react";
import styles from "./style.module.scss";

const PrimaryDropdown = ({ title, value, options, onChange }) => {
  return (
    <div className={styles.dropdownContainerStyle}>
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

export default PrimaryDropdown;
