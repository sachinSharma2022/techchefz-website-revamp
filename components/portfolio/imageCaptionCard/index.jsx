"use client";
import { Icons } from "@/components/icons";
import CustomDropdown from "@/components/ui/customDropdown";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";
import { base_Uri } from "@/lib/constants";

import styles from "./style.module.scss";

const ImageCaptionCard = ({case_study}) => {
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
    { value: "Web Content", label: "Web Content" },
    { value: "Frontend", label: "Frontend" },
    { value: "Backend", label: "Backend" },
    { value: "Mobile Development", label: "Mobile Development" },
    { value: "Artificial Intelligence", label: "Artificial Intelligence" },
    { value: "DevOps & Cloud", label: "DevOps & Cloud" },
  ];

  return (
    <section className={cn(theme ? styles.darkStyle : "")}>
      <div className={cn("primary-container")}>
        <div
          className={cn(styles.dropdownStyle, theme ? styles.dropdownDark : "")}
        >
          <div className={`${styles.inputDropPadding}`}>
            <CustomDropdown
              title="Services"
              options={dataServices}
              className="custom-dropdown"
              placeholder="Select Services"
            />
          </div>
          <div className={`${styles.inputDropPadding}`}>
            <CustomDropdown
              title="Industry"
              options={dataIndustry}
              className="custom-dropdown"
              placeholder="Select Industry"
            />
          </div>
          <div className={`${styles.inputDropPadding}`}>
            <CustomDropdown
              title="Technology"
              options={dataTechnology}
              className="custom-dropdown"
              placeholder="Select Technology"
            />
          </div>
        </div>
        <div
          className={cn(
            styles.captionCardStyle,
            theme ? styles.captionCardDark : "",
            "captionCardSection"
          )}
        >
          {case_study.map((data, index) => (
            <Link href={`/portfolio/${data.id}`} key={index} className={`grid-${index}`}>
              <div className={`${styles.imageCard} card`}>
                <div className={styles.cardImg}>
                  <div className={`${styles.imgBox} imgBox`}>
                    <ImageCustom
                      src={data?.attributes?.Banner?.PortfolioImage?.data?.attributes?.url?`${base_Uri}${data?.attributes?.Banner?.PortfolioImage?.data?.attributes?.url}`:`${base_Uri}/`}
                      width={1500}
                      height={1500}
                      alt="captionImg"
                    />
                  </div>
                  <div className={styles.cardBadges}>
                    {data?.attributes?.Industryinner[0]?.techStacktags?.map((badgeItem) => (
                      <div key={badgeItem} className={styles.badges}>
                        {badgeItem.Title}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <h2 className={styles.cardText}>{data?.attributes?.Banner?.PortfolioTitle}</h2>
                  <Icons.ArrowLongRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCaptionCard;
