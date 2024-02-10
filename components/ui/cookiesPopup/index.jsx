"use client";
import { Icons } from "@/components/icons";
import { useEffect, useState } from "react";
import { Button } from "../button";

import styles from "./style.module.scss";
import { cn } from "@/lib/utils";

const Cookies = ({props}) => {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    // Set a timeout to update the state after 10 seconds
    const timeoutId = setTimeout(() => {
      setShowDiv(true);
    }, 10000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const cookieToggle = () => {
    setShowDiv(false);
  };
  return (
    <>
      {showDiv && (
        <div className={cn(styles.cookies)}>
          <div className={styles.cookiesContent}>
            <Icons.Cookie size={40} />
            <p dangerouslySetInnerHTML={{ __html: `${props?.Description}`}}>
              
            </p>
          </div>
          <div className={styles.cookiesButtons}>
            <Button
              variant="lightBlueOutline"
              className={styles.headerBtn}
              size="lg"
              onClick={() => cookieToggle(!showDiv)}
            >
              {props?.SubTitle}
            </Button>
            <Button
              variant="blueBtnDark"
              className={styles.headerBtn}
              size="lg"
              onClick={() => cookieToggle(!showDiv)}
            >
               {props?.Btn}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookies;
