import CareerBanner from '@/components/career/careerBanner'
import Testimonials from '@/components/home/testimonials'
import Innovation from '@/components/portfolio/innovation'
import TechnologyValues from '@/components/technology/technologyValues'
import React from 'react'

const Career = () => {
  return (
    <div>
        <CareerBanner />
        <Testimonials/>
        <TechnologyValues/>
        <Innovation/>
    </div>
  )
}

export default Career