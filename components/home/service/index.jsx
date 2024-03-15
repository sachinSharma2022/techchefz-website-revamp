"use client";

import MobileSlider from "@/components/common/mobileSlider";
import ServiceCard from "@/components/common/serviceCard";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";

import { base_Uri } from "@/lib/constants";
import styles from "./style.module.scss";

const Service = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1025px)" });
  const isTabletScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <section
      className={cn(
        styles.serviceDetailsMain,
        theme ? styles.serviceDetailsMainDark : ""
      )}
    >
      <div className={cn("primary-container")}>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceHeading}>
            <p
              className={cn(styles.serviceText, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props[0]?.Title}` }}
            ></p>
            <h3
              className={cn(styles.serviceTitle, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props[0]?.Description}` }}
            ></h3>
            <Link href={props[0]?.BtnLink}>
              <Button
                variant={theme ? "lightBlueOutline" : "outline"}
                size="md"
              >
                {props[0]?.Btn} <Icons.ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          {isBigScreen && (
            <div className={cn(styles.desktopCards)}>
              {props[0]?.Service?.map((data, index) => (
                <ServiceCard
                  key={index}
                  icon={
                    data?.Image?.data?.attributes?.url
                      ? `${base_Uri}${data?.Image?.data.attributes.url}`
                      : `${base_Uri}/`
                  }
                  subTitle={data.Title}
                  subText={data.Description}
                />
              ))}
            </div>
          )}
        </div>

        <div className={cn(styles.mobileCards)}>
          <MobileSlider slidesToShow={isTabletScreen ? 2.1 : 1.3}>
            {props[0]?.Service.map((data, index) => (
              <ServiceCard
                key={index}
                icon={
                  data?.Image?.data?.attributes?.url
                    ? `${base_Uri}${data?.Image?.data.attributes.url}`
                    : `${base_Uri}/`
                }
                subTitle={data.Title}
                subText={data.Description}
              />
            ))}
          </MobileSlider>
        </div>
      </div>
    </section>
  );
};
export default Service;
