"use client";

import JobCard from "@/components/common/jobCard";
import { Icons } from "@/components/icons";
import TextRevel from "@/components/ui/sectionAnimation";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import styles from "./style.module.scss";

const MoreJobs = ({ props, params }) => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <>
      <div
        className={cn(
          styles.jobDetailContainer,
          theme ? styles.jobDetailDarkContainer : ""
        )}
      >
        <div className={cn("primary-container", styles.containerStyle)}>
          <div className={styles.headerStyle}>
            <TextRevel>
              <div className={styles.titleSection}>
                <div>
                  <h6>{props[0]?.attributes?.MoreDetail[0]?.Title}</h6>
                  <h3>{props[0]?.attributes?.MoreDetail[0]?.SubTitle}</h3>
                </div>
              </div>
            </TextRevel>
          </div>

          <div className={cn(styles.sliderSection)}>
            {props
              .filter((value) => {
                return params?.careersDetail != value.id;
              })
              .map((value, index) => (
                <JobCard
                  key={index}
                  title={value?.attributes?.DeveloperApply[0]?.Title}
                  content={value?.attributes?.Cards?.Description}
                  exp={
                    value?.attributes?.DeveloperApply[0]?.Developerinner[0]
                      ?.Title
                  }
                  location={
                    value?.attributes?.DeveloperApply[0]?.Developerinner[1]
                      ?.Title
                  }
                  link={value.id}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreJobs;
