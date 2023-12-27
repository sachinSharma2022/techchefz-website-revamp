import React from "react";
import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";

const ImageCaptionCard = () => {
  return (
    <section className={`${styles.captionCardStyle}`}>
      <div class={styles.wrapper}>
        <div class={styles.gridOne}>
          <div className={`${styles.imageCard} card`}>
            <div className={styles.cardImg}>
              <ImageCustom
                src="/images/portfolio-nike.png"
                width={1360}
                height={450}
                alt="captionImg"
              />
            </div>

            <div className={styles.cardBody}>
              <h2 className={styles.cardText}>
                Nike’s Expansion and Global Outlook
              </h2>
              <Icons.ArrowLongRight size={18} />
            </div>
          </div>
        </div>
        <div class={styles.gridTwo}>
          <div className={`${styles.imageCard} card`}>
            <div className={styles.cardImg}>
              <ImageCustom
                src="/images/portfolio-nike.png"
                width={1360}
                height={450}
                alt="captionImg"
              />
            </div>

            <div className={styles.cardBody}>
              <h2 className={styles.cardText}>
                Nike’s Expansion and Global Outlook
              </h2>
              <Icons.ArrowLongRight size={18} />
            </div>
          </div>
        </div>
        <div class={styles.gridThree}>
          <div className={`${styles.imageCard} card`}>
            <div className={styles.cardImg}>
              <ImageCustom
                src="/images/portfolio-nike.png"
                width={1360}
                height={450}
                alt="captionImg"
              />
            </div>

            <div className={styles.cardBody}>
              <h2 className={styles.cardText}>
                Nike’s Expansion and Global Outlook
              </h2>
              <Icons.ArrowLongRight size={18} />
            </div>
          </div>
        </div>
        <div class={styles.gridFour}>
          <div className={`${styles.imageCard} card`}>
            <div className={styles.cardImg}>
              <ImageCustom
                src="/images/portfolio-nike.png"
                width={1360}
                height={450}
                alt="captionImg"
              />
            </div>

            <div className={styles.cardBody}>
              <h2 className={styles.cardText}>
                Nike’s Expansion and Global Outlook
              </h2>
              <Icons.ArrowLongRight size={18} />
            </div>
          </div>
        </div>
        <div class={styles.gridFive}>
          <div className={`${styles.imageCard} card`}>
            <div className={styles.cardImg}>
              <ImageCustom
                src="/images/portfolio-nike.png"
                width={1360}
                height={450}
                alt="captionImg"
              />
            </div>

            <div className={styles.cardBody}>
              <h2 className={styles.cardText}>
                Nike’s Expansion and Global Outlook
              </h2>
              <Icons.ArrowLongRight size={18} />
            </div>
          </div>
        </div>
        <div class={styles.gridSix}>
          <div className={`${styles.imageCard} card`}>
            <div className={styles.cardImg}>
              <ImageCustom
                src="/images/portfolio-nike.png"
                width={1360}
                height={450}
                alt="captionImg"
              />
            </div>

            <div className={styles.cardBody}>
              <h2 className={styles.cardText}>
                Nike’s Expansion and Global Outlook
              </h2>
              <Icons.ArrowLongRight size={18} />
            </div>
          </div>
        </div>
        <div class={styles.gridSeven}>
          <div className={`${styles.imageCard} card`}>
            <div className={styles.cardImg}>
              <ImageCustom
                src="/images/portfolio-nike.png"
                width={1360}
                height={450}
                alt="captionImg"
              />
            </div>

            <div className={styles.cardBody}>
              <h2 className={styles.cardText}>
                Nike’s Expansion and Global Outlook
              </h2>
              <Icons.ArrowLongRight size={18} />
            </div>
          </div>
        </div>
        <div class={styles.gridEight}>
          <div className={`${styles.imageCard} card`}>
            <div className={styles.cardImg}>
              <ImageCustom
                src="/images/portfolio-nike.png"
                width={1360}
                height={450}
                alt="captionImg"
              />
            </div>

            <div className={styles.cardBody}>
              <h2 className={styles.cardText}>
                Nike’s Expansion and Global Outlook
              </h2>
              <Icons.ArrowLongRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCaptionCard;
