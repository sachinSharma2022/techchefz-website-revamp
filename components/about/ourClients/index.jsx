"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import styles from "./style.module.scss";
import { Button } from "@/components/ui/button";

const OurClients = () => {
  const { theme } = useContext(MyContext);

  return (
    <section
      className={cn(styles.ourClients, theme ? styles.ourClientsDark : "")}
    >
      <div className={cn("primary-container")}>
        <div className={cn(styles.flexContainer)}>
          <div className={styles.contentSec}>
            <h6 className={styles.subHeading}>Our Clients</h6>
            <h3 className={styles.heading}>
              From <span>Clients to Friends.</span>
            </h3>
            <p className={styles.description}>
              We’ve designed, developed, and optimized 100’s of Webflow projects
              and met some incredible people along the way.
            </p>
            <Link href="/contact-us">
              <Button
                variant={theme ? "lightBlueOutline" : "outline"}
                size="lg"
              >
                Go to Portfolio <Icons.ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          <div className={styles.clientSection}>
            <p className={styles.description}>
              Over the next 3 years, we developed into a full-service digital
              agency. We support our clients with web development, mobile app
              development, web design, branding UI/UX design and now getting
              into AR/VR.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
