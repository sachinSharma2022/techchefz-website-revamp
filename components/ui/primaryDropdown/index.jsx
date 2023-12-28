import React from "react";
import styles from "./style.module.scss";

const PrimaryDropdown = () => {
  return (
    <div className={styles.dropdownContainerStyle}>
     <div class="form-floating">
  <select className={`${styles.selectMain} form-select`} id="floatingSelect" aria-label="Floating label select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label className={styles.customLabel} for="floatingSelect">Works with selects</label>
</div>
    </div>
  );
};

export default PrimaryDropdown;
