import React from 'react'
import AboutBanner from '@/components/about/aboutUsBanner'

import styles from "./style.module.scss";

function AboutPage() {
  return (
    <div>
        <AboutBanner/>
       <div className='container'>
        <div className='row d-flex justify-content-around'>
            <div className='col-md-6 col-lg-6'>
                <h3>Our guiding lights in the dynamic tech landscape, fueling our dedication to innovation, excellence, and a brighter technological tomorrow.</h3>
            </div>
            <div className='col-md-6 col-lg-5'>
                <h3>Our guiding lights in the dynamic tech landscape, fueling our dedication to innovation, excellence, and a brighter technological tomorrow.</h3>
            </div>
        </div>
       </div>
    </div>
  )
}

export default AboutPage