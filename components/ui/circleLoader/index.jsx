"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { cn } from "@/lib/utils";

import styles from "./styles.module.scss";

const CircleLoader = (props) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <div className={cn(styles.btnLoader,"btn-loading")}>
      <svg
        version="1.1"
        id="circle"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 20 20"
      >
        <path
          d="M2.78158e-06 10C3.2644e-06 4.47715 4.47716 5.50298e-07 10 1.03312e-06C15.5228 1.51594e-06 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 2.29875e-06 15.5228 2.78158e-06 10ZM18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10Z"
          fill="white"
          fill-opacity="0.24"
        />
        <circle
          fill="none"
          stroke="white"
          stroke-width="8"
          cx="50"
          cy="50"
          r="45"
          strokeDasharray="360"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="360;0"
            dur={props.dur || "5s"}
            repeatCount={props.repeatCount || "indefinite"}
          ></animate>
        </circle>
      </svg>
    </div>
  );
};

export default CircleLoader;
