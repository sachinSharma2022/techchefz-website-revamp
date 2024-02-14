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

const ImageCaptionCard = ({props}) => {
  console.log("pp", props);
  const { theme, setTheme } = useContext(MyContext);
  const imageCaptionData = [
    {
      description: " Nike’s Expansion and Global Outlook",
      imgSrc:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badgeList: ["Web Design", "E-Commerce", "Retail"],
    },
    {
      description:
        " Revolutionizing Retail: A Digital Transition for Royal Enfield",
      imgSrc:
        "https://images.unsplash.com/photo-1575209426388-3f545c9a7490?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badgeList: ["Web Design", "E-Commerce", "Retail"],
    },
    {
      description: " Fitbit OS: A Digital Transforming Fitness Tracking",
      imgSrc:
        "https://images.unsplash.com/photo-1543164904-8ff92670a192?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badgeList: ["Web Design", "E-Commerce", "Retail"],
    },
    {
      description: " Mobile Stock Trading App Impact Analysis",
      imgSrc:
        "https://images.unsplash.com/photo-1579225663317-c0251b4369bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badgeList: ["Web Design", "E-Commerce", "Retail"],
    },
    {
      description: " Goldman Sachs' Trading Strategy Success",
      imgSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badgeList: ["Web Design", "E-Commerce", "Retail"],
    },
    {
      description: " Audi’s Global Reach and Dynamics",
      imgSrc:
        "https://images.unsplash.com/photo-1646405871744-2005e64f8e32?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badgeList: ["Web Design", "E-Commerce", "Retail"],
    },
    {
      description:
        " Sustainable Energy: A Success Story for EV Vehicles Sustainable Energy abcd...",
      imgSrc:
        "https://images.unsplash.com/photo-1700411882036-f20df01413ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badgeList: ["Web Design", "E-Commerce", "Retail"],
    },
    {
      description: "Goldman Sachs' Trading Strategy Success",
      imgSrc:
        "https://images.unsplash.com/photo-1666625519702-7270420bb4f9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badgeList: ["Web Design", "E-Commerce", "Retail"],
    },
  ];

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
          {props.map((data, index) => (
            <Link href="/case-study" key={index} className={`grid-${index}`}>
              <div className={`${styles.imageCard} card`}>
                <div className={styles.cardImg}>
                  <div className={`${styles.imgBox} imgBox`}>
                    <ImageCustom
                      src={data?.Image?.data?.attributes?.url?`${base_Uri}${data?.Image?.data?.attributes?.url}`:`${base_Uri}/`}
                      width={1500}
                      height={1500}
                      alt="captionImg"
                    />
                  </div>
                  <div className={styles.cardBadges}>
                    {data.Tag.map((items) => (
                      <div  className={styles.badges}>
                        {items.Title}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <h2 className={styles.cardText}>{data.Title}</h2>
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
