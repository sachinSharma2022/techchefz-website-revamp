import React from "react";
import SearchInput from "@/components/ui/searchInput";
import CustomDropdown from "@/components/ui/customDropdown";

import styles from "./style.module.scss";
import BrowserAcceleratorCard from "../browserAcceleratorCard";

const BrowserAccelerator = () => {
   return (
      <section className={styles.browserAccelerator}>
         <div className={styles.topSection}>
            <SearchInput />
            <CustomDropdown title="Industry" options={["Automobile", "It Development", "Network Security", "Cloud Service"]} />
            <CustomDropdown title="Technology" options={["AEM", "It Development", "Network Security", "Cloud Service"]} />
            <CustomDropdown title="Sort By" options={["Newest First", "It Development", "Network Security", "Cloud Service"]} />
         </div>
         <hr className={styles.breakLine} />
         <h5 className={styles.browserAcceleratorHeading}>Browser Accelerator</h5>
         <div className={styles.browserAcceleratorCards}>
            <BrowserAcceleratorCard />
         </div>
      </section>
   );
};

export default BrowserAccelerator;
