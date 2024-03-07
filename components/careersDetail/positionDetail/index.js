"use client";

import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";

const PositionDescription = ({ props }) => {
  console.log("cc", props);
  const { theme, setTheme } = useContext(MyContext);

  return (
    <div className={theme ? styles.jobDetailContainer : styles.lightMode}>
      <div className={cn("primary-container")}>
        <div className={styles.section}>
          <h2>{props[0]?.Title}</h2>
          <p>{props[0]?.FullDescription}</p>
        </div>

        <div className={styles.section}>
          <h2>{props[1]?.Title}</h2>
          <ul
            dangerouslySetInnerHTML={{ __html: `${props[1]?.FullDescription}` }}
          ></ul>
        </div>
        <div className={styles.section}>
          <h2>{props[2]?.Title}</h2>
          <ul
            dangerouslySetInnerHTML={{ __html: `${props[2]?.FullDescription}` }}
          >
            {/* {props[1]?.FullDescription?.split(",").map((point, idx) => (
                <li key={idx}>{point}</li>
              ))} */}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>{props[3]?.Title}</h2>
          <p>{props[3].FullDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default PositionDescription;
