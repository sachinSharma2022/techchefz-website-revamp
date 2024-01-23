"use client";
import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import CustomDropdown from "@/components/ui/customDropdown";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import Link from "next/link";

const ImageCaptionCard = () => {
  const { theme, setTheme } = useContext(MyContext);
  const imageCaptionData = [
    {
      description: " Nike’s Expansion and Global Outlook",
      imgSrc:
        "https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <section className="primary-container">
      <div
        className={`${styles.dropdownStyle} ${
          theme ? styles.dropdownDark : ""
        }`}
      >
        <div className={`${styles.inputDropPadding}`}>
          <CustomDropdown title="Services" options={dataServices} />
        </div>
        <div className={`${styles.inputDropPadding}`}>
          <CustomDropdown title="Industry" options={dataIndustry} />
        </div>
        <div className={`${styles.inputDropPadding}`}>
          <CustomDropdown title="Technology" options={dataTechnology} />
        </div>
      </div>

      <div
        className={cn(
          styles.captionCardStyle,
          theme ? styles.captionCardDark : "",
          "captionCardSection"
        )}
      >
        {imageCaptionData.map((data, index) => (
          <Link href="/case-study" key={index} className={`grid-${index}`}>
            <div className={`${styles.imageCard} card`}>
              <div className={styles.cardImg}>
                <ImageCustom
                  src={data.imgSrc}
                  width={1360}
                  height={450}
                  alt="captionImg"
                />

                <div className={styles.cardBadges}>
                  {data.badgeList.map((badgeItem) => (
                    <div key={badgeItem} className={styles.badges}>
                      {badgeItem}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.cardBody}>
                <h2 className={styles.cardText}>{data.description}</h2>
                <Icons.ArrowLongRight size={18} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ImageCaptionCard;
