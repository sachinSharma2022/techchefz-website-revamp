import AcceleratorBanner from '@/components/accelerators/acceleratorBanner'
import BrowserAccelerator from '@/components/accelerators/browserAccelerator'
import LetsWork from '@/components/home/letsWork'
import Faq from '@/components/technology/cms/faq'
import React from 'react'

const Accelerators = () => {
  return (
    <div>
        <AcceleratorBanner/>
        <BrowserAccelerator/>
        <Faq/>
        <LetsWork/>
    </div>
  )
}

export default Accelerators