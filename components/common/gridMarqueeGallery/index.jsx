"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";
import { base_Url } from "@/lib/constants";
import { base_Uri } from "@/lib/constants";

const GridMarqueeGallery = ({ props }) => {
  console.log("nnn", props);
  const { theme, setTheme } = useContext(MyContext);
  const gridData = [1, 2, 3, 4, 5, 6];
  return (
    <section
      className={`${styles.gridMarqueeGallery} ${
        (theme ? styles.ourGalleryDark : "", "gridMarqueeGallery")
      }`}
    >
      <div className={styles.marquee}>
        <div className={styles.track}>
          <div className={styles.content}>
            {gridData.map((index) => (
              <div key={index}>
                <div className={cn(styles.galleryImages, "row")}>
                  <div className="col">
                    <div className={cn(styles.galleryImage)}>
                      <ImageCustom
                        src={
                          props[8]?.Image?.data?.attributes?.url
                            ? `${base_Uri}${props[8]?.Image?.data?.attributes?.url}`
                            : `${base_Uri}/`
                        }
                        width={800}
                        height={800}
                        alt="gallery-img"
                      />
                    </div>
                    <div className={cn(styles.galleryImage)}>
                      <ImageCustom
                        src={
                          props[9]?.Image?.data?.attributes?.url
                            ? `${base_Uri}${props[9]?.Image?.data?.attributes?.url}`
                            : `${base_Uri}/`
                        }
                        width={800}
                        height={800}
                        alt="gallery-img"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className={cn(styles.galleryImage, styles.gridFull)}>
                      <ImageCustom
                        src={
                          props[0]?.Image?.data?.attributes?.url
                            ? `${base_Uri}${props[0]?.Image?.data?.attributes?.url}`
                            : `${base_Uri}/`
                        }
                        width={800}
                        height={800}
                        alt="gallery-img"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className={cn(styles.galleryImage)}>
                      <ImageCustom
                        src={
                          props[1]?.Image?.data?.attributes?.url
                            ? `${base_Uri}${props[1]?.Image?.data?.attributes?.url}`
                            : `${base_Uri}/`
                        }
                        width={800}
                        height={800}
                        alt="gallery-img"
                      />
                    </div>
                    <div className={cn(styles.galleryImage)}>
                      <ImageCustom
                        src={
                          props[2]?.Image?.data?.attributes?.url
                            ? `${base_Uri}${props[2]?.Image?.data?.attributes?.url}`
                            : `${base_Uri}/`
                        }
                        width={800}
                        height={800}
                        alt="gallery-img"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className={cn(styles.galleryImage, styles.gridHalf)}>
                      <ImageCustom
                        src={
                          props[3]?.Image?.data?.attributes?.url
                            ? `${base_Uri}${props[3]?.Image?.data?.attributes?.url}`
                            : `${base_Uri}/`
                        }
                        width={800}
                        height={800}
                        alt="gallery-img"
                      />
                    </div>
                    <div className={cn(styles.smGrid, "row")}>
                      <div className="col-6">
                        <div className={cn(styles.galleryImage)}>
                          <ImageCustom
                            src={
                              props[4]?.Image?.data?.attributes?.url
                                ? `${base_Uri}${props[4]?.Image?.data?.attributes?.url}`
                                : `${base_Uri}/`
                            }
                            width={800}
                            height={300}
                            alt="gallery-img"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className={cn(styles.galleryImage)}>
                          <ImageCustom
                            src={
                              props[5]?.Image?.data?.attributes?.url
                                ? `${base_Uri}${props[5]?.Image?.data?.attributes?.url}`
                                : `${base_Uri}/`
                            }
                            width={800}
                            height={300}
                            alt="gallery-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className={cn(styles.galleryImage)}>
                      <ImageCustom
                        src={
                          props[6]?.Image?.data?.attributes?.url
                            ? `${base_Uri}${props[6]?.Image?.data?.attributes?.url}`
                            : `${base_Uri}/`
                        }
                        width={800}
                        height={800}
                        alt="gallery-img"
                      />
                    </div>
                    <div className={cn(styles.galleryImage)}>
                      <ImageCustom
                        src={
                          props[7]?.Image?.data?.attributes?.url
                            ? `${base_Uri}${props[7]?.Image?.data?.attributes?.url}`
                            : `${base_Uri}/`
                        }
                        width={800}
                        height={800}
                        alt="gallery-img"
                      />
                    </div>
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

export default GridMarqueeGallery;
