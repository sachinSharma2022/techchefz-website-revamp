import React from "react";

import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";

const OurTeam = () => {
   const teamData = [
      {
         mebName: "Mayank Maggon",
         role: "CEO & CTO",
         image: "/images/img/team/team1.png",
      },
      {
         mebName: "Akshit Maggon",
         role: "Director",
         image: "/images/img/team/team2.png",
      },
      {
         mebName: "Anita Ahlawat",
         role: "Co-Founder",
         image: "/images/img/team/team3.png",
      },
   ];
   return (
      <section className={styles.ourTeam}>
         <div className="container">
            <div className="row justify-content-between">
               <div className="col-md-6 col-lg-3">
                  <h6 className={styles.ourTeamTitle}>Our Team</h6>
                  <h3  className={styles.ourTeamHeading} >Meet the Founder behind the Vision.</h3>
               </div>
               <div className="col-md-6 col-lg-4">
                  <div className={styles.buttonWrapper}>
                     <button className={styles.teamButton1}>Directors</button>
                     <button className={styles.teamButton2}>Executive Team</button>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className={styles.teamCards}>
                  {teamData.map((data, index) => (
                     <div key={index} className={styles.teamCardBg}>
                        <div className={styles.teamCardContent}>
                           <div className={styles.cardHead}>
                              <div>
                                 <h6>{data.mebName} </h6>
                                 <p>{data.role}</p>
                              </div>
                              <Icons.ArrowRight width={26} height={24} />
                           </div>
                           <Icons.Linkdin width={34} height={34} className={styles.linkdinIcon} />
                           <ImageCustom src={data.image} width={240} height={320} alt="team-member" />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default OurTeam;
