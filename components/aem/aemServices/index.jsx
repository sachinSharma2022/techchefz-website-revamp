"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import TextRevel from "@/components/ui/sectionAnimation";

import styles from "./style.module.scss";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

const AemServices = () => {
  const { theme, setTheme } = useContext(MyContext);
  const cardData = [
    {
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "AEM Managed Services",
      description:
        "Comprehensive management for your Adobe Experience Manager platform, ensuring uptime and peak performance.",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Custom AEM Development",
      description:
        "Get AEM solutions tailored to your workflows, content needs, and user experience goals.",
    },
    {
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1681399975135-252eab5fd2db?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "AEM Migration Services",
      description:
        "Effortlessly migrate your existing CMS to Adobe Experience Manager with our expert team.",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1646172615914-d980737c59b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "AEM Optimization & Upgrades",
      description:
        "Stay ahead with AEM upgrades and custom enhancements for improved functionality.",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1646172615914-d980737c59b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "AEM Edge Delivery",
      description:
        "Leverage AEM's Edge Delivery to accelerate content delivery globally, ensuring fast, scalable, and secure experiences for your users, regardless of location.",
    },
  ];

  return (
    <section
      className={`${styles.aemServicesStyle} ${
        theme ? styles.aemServicesDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={styles.careerRow}>
            <div>
              <h6 className={cn(styles.projectHighlight, "gradient-text")}>
                Our AEM Services
              </h6>
              <h2 className={cn(styles.datingText, "gradient-text")}>
                Discover the right Service for your Business Requirements
              </h2>
            </div>

            <Link href="/">
              <Button
                variant={theme ? "lightBlueOutline" : "blueBtn"}
                className={styles.headerBtn}
                size="md"
              >
                Learn More
                <Icons.ArrowRight size={20} className="ms-2" />
              </Button>
            </Link>
          </div>
        </TextRevel>

        <div className={styles.gridNumberMain}>
          <div className={cn(styles.differenceGridCards)}>
            {cardData.map((data, index) => (
              <div key={index} className={styles.cardStyle}>
                <div className={styles.differenceCmsBox}>
                  <h3 className={styles.sbTitle}>{data.title}</h3>
                  <p className={styles.sbText}>{data.description}</p>
                  <div className={styles.backgroundImg}>
                    <ImageCustom
                      src={data.imgUrl}
                      width={330}
                      height={162}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AemServices;
