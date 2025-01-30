"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import TextRevel from "@/components/ui/sectionAnimation";
import { base_Uri } from "@/lib/constants";
import styles from "./style.module.scss";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

const AemServices = ({ props }) => {
  console.log("hi hena", props);
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={cn(
        styles.aemServicesStyle,
        theme ? styles.aemServicesDark : ""
      )}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={styles.careerRow}>
            <div>
              <h6 className={cn(styles.projectHighlight, "gradient-text")}>
                {props?.Title}
              </h6>
              <h2 className={cn(styles.datingText, "gradient-text")}>
                {props?.SubTitle}
              </h2>
            </div>

            <Link href="/technology">
              <Button
                variant={theme ? "lightBlueOutline" : "blueBtn"}
                className={styles.headerBtn}
                size="md"
              >
                {props?.Button}
                <Icons.ArrowRight size={20} className="ms-2" />
              </Button>
            </Link>
          </div>
        </TextRevel>

        <div className={styles.gridNumberMain}>
          <div className={cn(styles.differenceGridCards)}>
            {props?.TechnologyInner.map((data, index) => (
              <div key={index} className={styles.cardStyle}>
                <div className={styles.differenceCmsBox}>
                  <div>
                    <h3 className={styles.sbTitle}>{data.Title}</h3>
                    <p className={styles.sbText}>{data.Description}</p>
                  </div>
                  <div className={styles.backgroundImg}>
                    <ImageCustom
                      src={
                        data?.Image?.data?.attributes?.url
                          ? `${base_Uri}${data?.Image.data.attributes.url}`
                          : `${base_Uri}/`
                      }
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
