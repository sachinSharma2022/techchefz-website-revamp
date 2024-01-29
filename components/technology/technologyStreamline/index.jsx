"use client";
import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { Button } from "@/components/ui/button";

import styles from "./style.module.scss";

const Streamline = () => {
  const { theme, setTheme } = useContext(MyContext);
  const streamlineCard = [
    {
      icons: (
        <Icons.Market className={styles.cardIcon} width={120} height={120} />
      ),
      title: "Content Management ",
      content:
        " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
    },
    {
      icons: (
        <Icons.MarketPlace
          className={styles.cardIcon}
          width={120}
          height={120}
        />
      ),
      title: "E-commerce",
      content:
        " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
    },
    {
      icons: (
        <Icons.Transform className={styles.cardIcon} width={120} height={120} />
      ),
      title: "Micro services",
      content:
        " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
    },
    {
      icons: (
        <Icons.Transform className={styles.cardIcon} width={120} height={120} />
      ),
      title: "Cloud & DevSecOps",
      content:
        " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
    },
    {
      icons: (
        <Icons.Platforms className={styles.cardIcon} width={120} height={120} />
      ),
      title: "Data Intelligence",
      content:
        " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
    },
    {
      icons: (
        <Icons.Platforms className={styles.cardIcon} width={120} height={120} />
      ),
      title: "Analysis Automation",
      content:
        " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
    },
  ];
  return (
    <section
      className={`${styles.streamLineWrapper} ${
        theme ? styles.streamlineDark : ""
      }`}
    >
      <section className={styles.streamLineSection}>
        <div className={cn("primary-container", styles.flexContainer)}>
          <h3 className={styles.streamlineTitle}>
            Streamline your Business with our <span>Extensive Solution.</span>
          </h3>
          <p className={styles.streamlineContent}>
            We&apos;re a would wide presence, serving client on four continents.
            Our international expertise ensures innovative solutions tailored to
            diverse global needs
          </p>
        </div>
      </section>

      {/* Other sections */}
      <div className={styles.streamLineCards}>
        {streamlineCard.map((data, index) => (
          <section key={index}>
            <div className={styles.streamlineCard}>
              {data.icons}
              <h6 className={styles.cardTitle}>{data.title} </h6>
              <p className={styles.cardContent}>{data.content}</p>
              <Button variant="outline" size="lg">
                Learn More <Icons.ArrowRight size={18} />
              </Button>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Streamline;
