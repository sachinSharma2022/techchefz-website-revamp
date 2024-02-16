"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import styles from "./styles.module.scss";

const CircleLoader = (props) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <div className={styles.btnLoader}>
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

{
  /* <svg
width="20"
height="20"
viewBox="0 0 20 20"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M2.78158e-06 10C3.2644e-06 4.47715 4.47716 5.50298e-07 10 1.03312e-06C15.5228 1.51594e-06 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 2.29875e-06 15.5228 2.78158e-06 10ZM18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10Z"
  fill="white"
  fill-opacity="0.24"
/>
<path
  d="M2.78158e-06 10C2.60867e-06 11.9778 0.586493 13.9112 1.68531 15.5557C2.78412 17.2002 4.34591 18.4819 6.17317 19.2388C8.00043 19.9957 10.0111 20.1937 11.9509 19.8079C13.8907 19.422 15.6725 18.4696 17.0711 17.0711C18.4696 15.6725 19.422 13.8907 19.8079 11.9509C20.1937 10.0111 19.9957 8.00043 19.2388 6.17317C18.4819 4.34591 17.2002 2.78412 15.5557 1.6853C13.9112 0.58649 11.9778 1.20603e-06 10 1.03312e-06L10 2C11.5823 2 13.129 2.46919 14.4446 3.34824C15.7602 4.2273 16.7855 5.47672 17.391 6.93853C17.9965 8.40034 18.155 10.0089 17.8463 11.5607C17.5376 13.1126 16.7757 14.538 15.6569 15.6569C14.538 16.7757 13.1126 17.5376 11.5607 17.8463C10.0089 18.155 8.40034 17.9965 6.93853 17.391C5.47672 16.7855 4.2273 15.7602 3.34824 14.4446C2.46919 13.129 2 11.5822 2 10L2.78158e-06 10Z"
  fill="white"
/>
</svg> */
}
