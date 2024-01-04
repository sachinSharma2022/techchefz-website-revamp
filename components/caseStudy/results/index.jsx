import React from "react";

import styles from "./style.module.scss";

const Results = () => {
    const resultCard = [
        {
            number :"500+",
            title:"Technology Innovation"
        },
        {
            number :"200+",
            title:"AI solutions integrated."
        },
        {
            number :"200+",
            title:"Global Business Optimized"
        },
    ]
   return (
      <section className={styles.results}>
         <div className="container">
            <div className="row justify-content-between">
               <div className="col-md-3 col-lg-3">
                  <h6 className={styles.resultTitle}>Results</h6>
               </div>
               <div className="col-md-9 col-lg-9">
                  <h3 className={styles.resultHeading}>Riding into Tomorrow, Results that Rev Up Royal Enfield.</h3>
                  <p className={styles.resultText}>
                     The MVP model was rolled out in five months. Upon completion, it was unveiled for Royal Enfield enthusiasts. We&apos;re now
                     enhancing this offering to fully embody the spirit of Royal Enfield.
                  </p>
                  <div className={styles.resultCards}>
                    {resultCard.map((data,index)=>(
                        <div key={index} className={styles.resultCard}>
                        <h2>{data.number} </h2>
                        <h4>{data.title} </h4>
                     </div>
                    ))}
                     
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Results;
