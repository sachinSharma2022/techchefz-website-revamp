import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import styles from "./style.module.scss";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CmsDifference = () => {
  const differenceCard = [
    {
      sbTitle: "Headless CMS",
      sbText:
        "Seamlessly manage content and presentation in one unified platform, providing stability and ease-of-use.",
      brandImg:
        "https://images.unsplash.com/photo-1600673736081-50451fd6e9eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      sbTitle: "Traditional CMS",
      sbText:
        "Seamlessly manage content and presentation in one unified platform, providing stability and ease-of-use.",
      brandImg:
        "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      sbTitle: "Advanced CMS",
      sbText:
        "Seamlessly manage content and presentation in one unified platform, providing stability and ease-of-use.",
      brandImg:
        "https://images.unsplash.com/photo-1518563077661-23ad56581d77?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className={`${styles.cmsDifferenceStyle}`}>
      <div className={cn("primary-container")}>
        <div className={styles.careerRow}>
          <div className="row">
            <div className="col-md-12 col-12">
              <p className={styles.ProjectHighlight}>Difference</p>
            </div>

            <div className="col-md-8 col-12">
              <h2 className={styles.datingText}>
                Discover the right CMS for your Business Requirements
              </h2>
            </div>
            <div className={`${styles.careerBtn} col-md-4 col-12`}>
              <Button variant="outline" size="md">
                Explore More <Icons.ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.gridNumberMain}>
          <div className={`${styles.differenceGridCards} `}>
            {differenceCard.map((data, index) => (
              <div key={index} className={styles.cardStyle}>
                <div className={styles.differenceCmsBox}>
                  <h2 className={styles.sbTitle}>{data.sbTitle}</h2>
                  <p className={styles.sbText}>{data.sbText}</p>
                  <div className={styles.backgroundImg}>
                    <ImageCustom
                      src={data.brandImg}
                      width={330}
                      height={162}
                      alt="image"
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

export default CmsDifference;
