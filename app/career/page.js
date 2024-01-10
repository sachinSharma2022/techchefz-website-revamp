import CareerBanner from '@/components/career/careerBanner'
import OpenPosition from '@/components/career/openPosition'
import TczLife from '@/components/career/tczLife'
import Testimonials from '@/components/home/testimonials'
import Innovation from '@/components/portfolio/innovation'
import TechnologyValues from '@/components/technology/technologyValues'
import React from 'react'

const Career = () => {
  return (
    <div>
        <CareerBanner />
        <TczLife />
        <OpenPosition />
        <Testimonials/>
        <TechnologyValues/>
        <Innovation/>
    </div>
  )
}

export default Career