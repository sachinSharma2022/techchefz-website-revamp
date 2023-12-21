import React from 'react';

import styles from "./style.module.scss"

const OurValues = () => {
  return (
    <section className={styles.ourValues}>
        <div className='container'>
            <div className='row mb-3'>
                <div className='col-md-6 col-lg-6'>
                 <h6 className={styles.ourValuesTitle}>Our Values</h6>
                 <h2 className={styles.ourValuesHeading}>Our values are part of everything we create at Instrument.</h2>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6 col-lg-6'></div>
                <div className='col-md-6 col-lg-6 p-3'>
                    <p>We believe in a customer-centric ethic without and people-centric paradigm within.  With a strong sense of community, ownership, and collaboration our people work in a spirit of co-creation, co-innovation, and co-development to engineer next-generation software products with the help of accelerators.</p>
                </div>
            </div>
        </div>
        

    </section>
  )
}

export default OurValues