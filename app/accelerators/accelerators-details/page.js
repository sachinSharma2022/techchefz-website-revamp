import AcceleratorBanner from '@/components/accelerators/acceleratorBanner'
import DetailBanner from '@/components/accelerators/acceleratorDetail/acceleratorDetailBanner'
import AcceleratorIndustry from '@/components/accelerators/acceleratorDetail/acceleratorIndustry'
import Impact from '@/components/accelerators/acceleratorDetail/impact'
import Challenges from '@/components/caseStudy/challenges'
import LetsWork from '@/components/home/letsWork'
import RelatedCase from '@/components/relatedCase'
import React from 'react'

const AcceleratorDetails = () => {
  return (
    <div>
        <DetailBanner/>
        <AcceleratorIndustry/>
        <Impact/>
        <Challenges className="pt-5" />
        <RelatedCase sliderClassName="mb-0"/>
        <LetsWork/>
    </div>
  )
}

export default AcceleratorDetails