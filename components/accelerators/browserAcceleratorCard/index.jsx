import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "./style.module.scss";

const BrowserAcceleratorCard = (props) => {
  return (
    <Link href={props.href} className={styles.browserAcceleratorCard}>
      <div className={styles.cardHeader}>
        <div className={styles.cardSubTitle}>
          <span>{props.cardIcon}</span>
          <p>{props.subHeading}</p>
        </div>
        <Icons.ArrowUpRight width={15} height={15} />
      </div>
      <h3 className={styles.cardTitle}>{props.heading}</h3>
      <p className={styles.cardContent}>{props.text}</p>
      <div className={styles.cardsTags}>
        <Button variant="outline" size="xs">
          Featured
        </Button>
        <Button variant="outline" size="xs">
          New
        </Button>
        <Button variant="outline" size="xs">
          Trending
        </Button>
      </div>
    </Link>
  );
};

export default BrowserAcceleratorCard;
