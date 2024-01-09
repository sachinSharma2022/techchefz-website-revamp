import React from "react";

import styles from "./style.module.scss";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const Streamline = () => {
  const streamlineCard = [
    {
      icons: (
        <Icons.Market className={styles.cardIcon} width={140} height={140} />
      ),
      title: "Content Management ",
      content:
        " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
    },
    {
      icons: (
        <Icons.MarketPlace
          className={styles.cardIcon}
          width={140}
          height={140}
        />
      ),
      title: "E-commerce",
      content:
        " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
    },
    {
      icons: (
        <Icons.Performance
          className={styles.cardIcon}
          width={140}
          height={140}
        />
      ),
      title: "Micro services",
      content:
        " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
    },
    {
      icons: (
        <Icons.Transform className={styles.cardIcon} width={140} height={140} />
      ),
      title: "Cloud & DevSecOps",
      content:
        " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
    },
    {
      icons: (
        <Icons.Platforms className={styles.cardIcon} width={140} height={140} />
      ),
      title: "Data Intelligence",
      content:
        " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
    },
    {
      icons: (
        <Icons.Platforms className={styles.cardIcon} width={140} height={140} />
      ),
      title: "Analysis Automation",
      content:
        " Our CMS services provide an intuitive and efficient way to manage your website content. With powerful features and a user-friendly interface, you can easily create, edit, and publish content.",
    },
  ];
  return (
    <div className={styles.streamlineWrapper}>
      <section className={styles.streamlineSection}>
        <h3 className={styles.streamlineTitle}>
          Streamline your Business with our <span>Extensive Solution.</span>
        </h3>
        <p className={styles.streamlineContent}>
          We&apos;re a wouldwide presence, serving client on four continents.
          Our internation expertise ensures innovaive solutions tailored to
          diverse global needs
        </p>
      </section>
      <section>
        {/* <div className={styles.streamlineCards}>
              {streamlineCard.map((data, index) =>(
                <div key={index} className={styles.streamlineCard}>
                  {data.icons}
                  <h6 className={styles.cardTitle}>{data.title} </h6>
                  <p className={styles.cardContent}>
                    {data.content}
                  </p>
                  <Button variant="outline" size="sm">
                     Learn More <Icons.ArrowRight size={18} />
                  </Button>
               </div>
              ))}
               
            </div> */}
      </section>
    </div>
  );
};

export default Streamline;
