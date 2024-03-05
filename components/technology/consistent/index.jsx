"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { base_Uri } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import TextRevel from "@/components/ui/sectionAnimation";

const Consistent = ({ props }) => {
   const { theme, setTheme } = useContext(MyContext);
   return (
      <section className={`${styles.consistent}  ${theme ? styles.consistentDark : ""}`}>
         <div className={styles.primaryContainer}>
            <div className={cn("primary-container")}>
               <div className={styles.consistentImgContainer}>
                  <div className={styles.consistentImg}>
                     <ImageCustom
                        src={props?.Image?.data?.attributes?.url ? `${base_Uri}${props?.Image?.data?.attributes?.url}` : `${base_Uri}/`}
                        width={1000}
                        height={600}
                        alt="img"
                     />
                  </div>
               </div>

               <TextRevel>
                  <div className={styles.contentSec}>
                     <h3 className={cn(styles.consistentTitle, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}></h3>
                     <div>
                        <p className={cn(styles.consistentText, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}></p>
                        <Link href={props.BtnLink}>
                           <Button variant={theme ? "lightBlueOutline" : "outline"} size="md">
                              {props?.Btn} <Icons.ArrowRight size={18} />
                           </Button>
                        </Link>
                     </div>
                  </div>
               </TextRevel>
            </div>
         </div>
      </section>
   );
};

export default Consistent;
