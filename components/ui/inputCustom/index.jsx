import React from "react";
import styles from "./style.module.scss";

const InputCustom = ({ label, type, placeholder, disabled, as, rows, isLabelShow }) => {
  return (
    <div className={styles.inputContainerStyle}>
      <div class="form-floating">
        <input
          type={type}
          class={`${styles.floatInput} form-control`}
          id="floatingInput"
          disabled={disabled}
          placeholder={placeholder}
          as={as}
          rows={rows}
        />
          <label className={styles.labelCustom} for="floatingInput">{label}</label>
      </div>
    </div>
  );
};

export default InputCustom;
