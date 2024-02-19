"use client";

import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";

const DescriptionData = [
  {
    about: {
      bullet:
        "Your specific duties will be based upon your experience as a UI/UX Designer. In this role, you will be responsible for designing and delivering UI/UX for products in accordance with WonderBotz standards practices. You will work closely together with our enthusiastic team of both business and technical specialists. You will be part of a fast-growing and successful team that helps our clients get the maximum benefits.",
    },
    responsibility: {
      bullet: [
        "Building interactive consumer data from multiple systems and Restfully abstracting to the UI through a Node.js backend.",
        "Define code architecture decisions to support a high-performance and scalable product with a minimal footprint.",
        "Address and improve any technical issues.",
        "Collaborate well with engineers, researchers, and data implementation specialists to design and create advanced, elegant, and efficient systems.",
      ],
    },
    requirements: {
      bullet: [
        "In-depth knowledge of NodeJS, ExpressJS, or Restify.",
        "Experience implementing applications using React.",
        "Experience creating front-end applications using HTML5 LESS/SASS",
        "Hands-on experience with JavaScript Development on both client and server-side.",
        "Experience with modern frameworks and design patterns, minimum one-year experience with MERN Full stack paradigm.",
        "Knowledge of the following will be considered as an advantage.",
        "Consumer Web Development Experience for High-Traffic, Public Facing web applications.",
        "Experience with cloud technologies is also a plus.",
        "Creating secure RESTful-based web services in XML and JSON, JavaScript, jQuery.",
        "Continuous integration (Jenkins/Hudson) and version control (SVN, Git).",
      ],
    },
    techchefz: {
      bullet:
        "We're pragmatic adventurers and curious explorers. We strive for the new and thrive on the proven. We adapt to the requirements put for us and work with a never give up attitude to show relevant and excellent results. We believe in clean and clear communication to build a truthful and trustworthy relationship with our clients. We follow the proactive approach and take the initiative to anticipate, identify and revert to an expected occurrence. We are honest and committed to our work and we hustle with integrity!",
    },
  },
];
const PositionDescription = ({props}) => {
  console.log("cc",props);
  const { theme, setTheme } = useContext(MyContext);

  return (
    <div className={cn("primary-container")}>
     
        <div
          className={theme ? styles.jobDetailContainer : styles.lightMode}
          
        >
         <div className={styles.section}>
         <h2>{props[0]?.Title}</h2>
          <p>{props[0]?.FullDescription}</p>
         </div>
       
          <div className={styles.section}>
            <h2>{props[1]?.Title}</h2>
            <ul dangerouslySetInnerHTML={{ __html: `${props[1]?.FullDescription}`}}>
            </ul>
          </div>
          <div className={styles.section}>
            <h2>{props[2]?.Title}</h2>
            <ul dangerouslySetInnerHTML={{ __html: `${props[2]?.FullDescription}`}}>
              {/* {props[1]?.FullDescription?.split(",").map((point, idx) => (
                <li key={idx}>{point}</li>
              ))} */}
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.gradientHead}>
              {props[3]?.Title}
            </h2>
            <p>{props[3].FullDescription}</p>
          </div>
        </div>
    
    </div>
  );
};

export default PositionDescription;
