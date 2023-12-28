import Goals from '@/components/caseStudy/Goals'
import CaseStudyBanner from '@/components/caseStudy/caseStudyBanner'
import Challenges from '@/components/caseStudy/challenges'
import Industry from '@/components/caseStudy/industry'
import Solutions from '@/components/caseStudy/solutions'
import LetsWork from '@/components/home/letsWork'
import React from 'react'

function CaseStudy() {
  return (
    <div>
      <CaseStudyBanner />
      <Industry/>
      <Goals/>
      <Challenges/>
      <Solutions/>
      <LetsWork />
    </div>
  )
}

export default CaseStudy