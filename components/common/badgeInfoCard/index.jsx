import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "./style.module.scss";

const BadgeInfoCard = (props) => {
  return (
    <Link href={props.href} className={styles.browserAcceleratorCard}>
      <div className={styles.cardHeader}>
        <div className={styles.cardSubTitle}>
          <div>{props.icons}</div>
          <p>{props.subHeading}</p>
        </div>
        <Icons.ArrowUpRight width={15} height={15} />
      </div>
      <h3 className={styles.cardTitle}>{props.heading}</h3>
      <p className={styles.cardContent}>{props.description}</p>
      <div className={styles.cardsTags}>
        {props.options.map((option) => (
          <Button key={option.value} variant="outline" size="xs">
            {option}
          </Button>
        ))}
      </div>
    </Link>
  );
};

export default BadgeInfoCard;
