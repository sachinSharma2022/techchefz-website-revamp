import React from "react";
import styles from "./style.module.scss";
import { ImageCustom } from "../imageCustom";

const DropdownCustom = () => {
  return (
    <div className={styles.dropdownContainerStyle}>
      <div className="form-floating">
        <div class="input-group">
          <div class="input-group-prepend"></div>

          <input
            type="text"
            className={`${styles.floatInput} form-control`}
            id="username"
            placeholder="Phone Number*"
            required=""
          />
        </div>
      </div>
    </div>
  );
};

export default DropdownCustom;
