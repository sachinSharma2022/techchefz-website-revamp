import LetsWork from '@/components/home/letsWork'
import SitemapPages from '@/components/sitemap/sitemapPages'
import SitmapBanner from '@/components/sitemap/sitmapBanner'
import React from 'react'

const Sitemap = () => {
  return (
    <div>
        <SitmapBanner/>
        <SitemapPages/>
        <LetsWork />
    </div>
  )
}

export default Sitemap