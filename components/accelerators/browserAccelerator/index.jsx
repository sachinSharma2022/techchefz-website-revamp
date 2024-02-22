"use client";
import CustomDropdown from "@/components/ui/customDropdown";
import SearchInput from "@/components/ui/searchInput";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import BadgeInfoCard from "@/components/common/badgeInfoCard";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import { base_Url } from "@/lib/constants";

const BrowserAccelerator = ({props}) => {
  console.log("aa",props);
  const { theme, setTheme } = useContext(MyContext);

 

  const dataServices = [
    { value: "Data", label: "Data" },
    { value: "It Development", label: "It Development" },
    { value: "Network Security", label: "Network Security" },
    { value: "Cloud Service", label: "Cloud Service" },
  ];
  const dataIndustry = [
    { value: "Hardware", label: "Hardware" },
    { value: "Software", label: "Software" },
    { value: "Systems Integrator", label: "Systems Integrator" },
  ];
  const dataTechnology = [
    { value: "Newest First", label: "Web Content" },
    { value: "It Development", label: "Frontend" },
  ];

  return (
    <section
      className={`${styles.browserAccelerator} ${
        theme ? styles.browserAcceleratorDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.topSection}>
          <SearchInput />

          <div className={styles.inputSection}>
            <CustomDropdown
              title="Industry"
              options={dataIndustry}
              className={styles.grayInput}
            />

            <CustomDropdown
              title="Technology"
              options={dataTechnology}
              className={styles.grayInput}
            />

            <CustomDropdown
              title="Sort By"
              options={dataServices}
              className={styles.grayInput}
            />
          </div>
        </div>
        <hr className={styles.breakLine} />
        <h5 className={cn(styles.browserAcceleratorHeading, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${props[0]?.Heading}`}}>
         
        </h5>
        <div className={styles.browserAcceleratorCards}>
          {props?.map((item, index) => (
            <BadgeInfoCard
              key={index}
              icons={item?.attributes?.BrowserAccelerator?.Image?.data?.attributes?.url?`${base_Url}${item?.attributes?.BrowserAccelerator?.Image?.data.attributes.url}`:`${base_Url}/`} 
              subHeading={item?.attributes?.BrowserAccelerator?.Title}
              heading={item?.attributes?.BrowserAccelerator?.Heading}
              description={item?.attributes?.BrowserAccelerator?.Description}
              href={`/accelerators/${item.id}`}
              options={item?.attributes?.BrowserAccelerator?.TitleWithLinks.map((x)=>x.Title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowserAccelerator;
