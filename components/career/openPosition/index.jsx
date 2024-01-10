"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { Button } from "@/components/ui/button";

import styles from "./style.module.scss";
import { Icons } from "@/components/icons";

const OpenPosition = () => {
   const openPositionData = [
      {
         title: "Backend 4",
         openPositionContent: [
            {
               accordianTitle: "Developer - NodeJS",
               accordianLocalion: "Noida, Delhi",
               accordianContent: (
                  <div className={styles.accordianContent}>
                     <h6>About the Job</h6>
                     <p>
                        Your specific duties will be based upon your experience as a UI/UX Designer. In this role, you will be responsible for
                        designing and delivering UI/UX for products in accordance with WonderBotz standards practices. You will work closely together
                        with our enthusiastic team of both business and technical specialists. You will be part of a fast-growing and successful team
                        that helps our clients get the maximum benefits.
                     </p>
                     <h6>Required Skills</h6>
                     <ul>
                        <li>Design and update job descriptions.</li>
                        <li>Source potential candidates from various online channels (e.g. social media and professional platforms).</li>
                        <li>Craft recruiting emails to attract passive candidates.</li>
                        <li>Screen incoming resumes and application forms.</li>
                        <li>Interview candidates (via phone, video and in-person).</li>
                     </ul>
                     <h6>Qualifications</h6>
                     <ul>
                        <li>6+ Years of Experience in a Service based Company</li>
                     </ul>
                     <h6>Location</h6>
                     <ul>
                        <li>Remote</li>
                     </ul>
                     <hr />
                     <Button variant="blueBtn" className="me-4" size="sm">
                        Apply
                     </Button>
                     <Button variant="outline" size="sm">
                        Explore Now <Icons.ArrowRight size={18} />
                     </Button>
                  </div>
               ),
            },
            {
               accordianTitle: "Developer - NodeJS",
               accordianLocalion: "Noida, Delhi",
               accordianContent: "conten2",
            },
         ],
      },
      {
         title: "Business Development 4",
         openPositionContent: [
            {
               accordianTitle: "Developer - NodeJS",
               accordianLocalion: "Noida, Delhi",
               accordianContent: "conten1",
            },
            {
               accordianTitle: "Developer - NodeJS",
               accordianLocalion: "Noida, Delhi",
               accordianContent: "conten2",
            },
         ],
      },
      {
         title: "Design 4",
         openPositionContent: [
            {
               accordianTitle: "Developer - NodeJS",
               accordianLocalion: "Noida, Delhi",
               accordianContent: "conten1",
            },
            {
               accordianTitle: "Developer - NodeJS",
               accordianLocalion: "Noida, Delhi",
               accordianContent: "conten2",
            },
         ],
      },
   ];
   return (
      <section className={styles.openPosition}>
         <div className={styles.openPositionHeader}>
            <h4 className={styles.openPositionHeading}>
               <span>21 </span> Open Positions
            </h4>
         </div>
         <div className={styles.serviceBtn}>
            <Button variant="outline" size="xs">
               BackEnd
            </Button>
            <Button variant="outline" size="xs">
               Business Development
            </Button>
            <Button variant="outline" size="xs">
               DevOps
            </Button>
            <Button variant="outline" size="xs">
               Design
            </Button>
            <Button variant="outline" size="xs">
               Marketing
            </Button>
            <Button variant="outline" size="xs">
               HR
            </Button>
         </div>
         <hr />

         {openPositionData.map((item, index) => (
            <div key={index} className={styles.openPositionContent}>
               <div className="row justify-content-between">
                  <div className="col-md-3 col-lg-3">
                     <h4>{item.title}</h4>
                  </div>
                  <div className="col-md-7 col-lg-7">
                     <div className={styles.openPositionAccordian}>
                        {item.openPositionContent.map((subItem, index) => (
                           <Disclosure key={index}>
                              <div className={styles.accordianBody}>
                                 <Disclosure.Button className={styles.accordianButton}>
                                    <div className={styles.buttonTitle}>
                                       <h6>{subItem.accordianTitle} </h6>
                                       <p>{subItem.accordianLocalion} </p>
                                    </div>
                                    <div className={styles.buttonIcon}>
                                       <Icons.ArrowDown />
                                    </div>
                                 </Disclosure.Button>
                                 <Disclosure.Panel className={styles.accordianPanel}>
                                    <hr />
                                    {subItem.accordianContent}
                                 </Disclosure.Panel>
                              </div>
                           </Disclosure>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </section>
   );
};

export default OpenPosition;
