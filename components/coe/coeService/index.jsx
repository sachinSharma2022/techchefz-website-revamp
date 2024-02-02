"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";

import styles from "./style.module.scss";

const CoeService = ({props}) => {
  console.log("bb",props);
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.coeService}  ${theme ? styles.coeServiceDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.coeServiceImg}>
          <ImageCustom
            src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1000}
            height={600}
            alt="img"
          />
        </div>
        <div className={styles.contentSec}>
          <h3 className={styles.coeServiceTitle} dangerouslySetInnerHTML={{ __html: `${props[0]?.Title}`}}>
           
          </h3>
          <div>
            <p className={styles.coeServiceText}>
              {props[0]?.Description}
            </p>
            <Button variant="outline" size="lg">
            {props[0]?.Btn} <Icons.ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoeService;
