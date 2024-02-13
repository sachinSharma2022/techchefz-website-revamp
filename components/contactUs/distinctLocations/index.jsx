"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";

const DistinctLocations = ({props}) => {
  console.log("us",props);
  const { theme, setTheme } = useContext(MyContext);
  const differenceCard = [
    {
      brandImg:
        "https://images.unsplash.com/photo-1548013146-72479768bada?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWF8ZW58MHx8MHx8fDA%3D",
      sbTitle: "India",
      countryFlagImg: "/images/country-contact-flag.png",
      sbText: "New Delhi",
      address:
        "FIEE Complex, A - 53 First Floor, Phase 2, Okhla Industrial Estate, New Delhi, Delhi 110020",
      phoneNumber: "+91 9824349812",
    },
    {
      brandImg:
        "https://plus.unsplash.com/premium_photo-1675118548262-60f7e4e77483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VW5pdGVkJTIwU3RhdGVzfGVufDB8fDB8fHww",
      sbTitle: "United States",
      countryFlagImg: "/images/united-state-flag.png",
      sbText: "San Francisco",
      address:
        "FIEE Complex, A - 53 First Floor, Phase 2, Okhla Industrial Estate, New Delhi, Delhi 110020",
      phoneNumber: "+91 9824349812",
    },
    {
      brandImg:
        "https://images.unsplash.com/photo-1665649968710-2917b5128171?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW91ciUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
      sbTitle: "United States",
      countryFlagImg: "/images/united-state-flag.png",
      sbText: "New York",
      address:
        "FIEE Complex, A - 53 First Floor, Phase 2, Okhla Industrial Estate, New Delhi, Delhi 110020",
      phoneNumber: "+91 9824349812",
    },
  ];
  return (
    <section
      className={`${styles.distinctLocationsStyle} ${
        theme ? styles.distinctLocationsBannerDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.careerRow}>
          <p className={styles.projectHighlight} dangerouslySetInnerHTML={{ __html: `${props?.Title}`}}></p>
          <h2 className={styles.datingText} dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}`}}></h2>
          <p className={styles.descriptionText} dangerouslySetInnerHTML={{ __html: `${props?.Description}`}}>
           
          </p>
        </div>

        <div className={styles.gridNumberMain}>
          <div className={`${styles.locationGridCards} `}>
            {props?.slider?.map((data, index) => (
              <div key={index} className={styles.cardStyle}>
                <div className={styles.locationBox}>
                  <div className={styles.backgroundImg}>
                    <ImageCustom
                      src={data?.brandImg?.data?.attributes?.url?`${base_Uri}${data?.brandImg?.data?.attributes?.url}`:`${base_Uri}/`}
                      width={330}
                      height={162}
                      alt="image"
                    />
                  </div>
                  <div className={styles.countryFlag}>
                    <h2 className={styles.sbTitle}>{data.Title}</h2>
                    <div className={styles.flag}>
                      <ImageCustom
                        src={data?.countryFlagImg?.data?.attributes?.url?`${base_Uri}${data?.countryFlagImg?.data?.attributes?.url}`:`${base_Uri}/`}
                        width={100}
                        height={24}
                        alt="flag"
                      />
                    </div>
                  </div>
                  <p className={styles.sbText}>{data.SubTitle}</p>
                  <div className={styles.addressArea}>
                    <Icons.ContactLocation width={40} height={40} />
                    <p className={styles.addressText}>{data.location}</p>
                  </div>

                  <div className={styles.addressArea}>
                    <Icons.ContactPhone width={20} height={20} />
                    <p className={styles.addressText}>{data.phoneNumber}</p>
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

export default DistinctLocations;
