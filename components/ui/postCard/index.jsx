import { Icons } from "@/components/icons";
import { ImageCustom } from "../imageCustom";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

const PostCard = (props) => {
  return (
    <div
      className={
        !props.theme
          ? cn(styles.postCard, props.className)
          : cn(styles.darkMode, props.className)
      }
    >
      <div className={cn(styles.cardImg, props.cardStyle)}>
        <ImageCustom
          src={props.imgSrc}
          width={1000}
          height={1000}
          alt="captionImg"
        />
      </div>
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{props.title}</h5>
        <div className="d-flex justify-content-between align-items-center">
          <p className={styles.cardDate}>{props.date} </p>
          <div className={styles.arrowIcon}>
            <Icons.ArrowLongRight size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
