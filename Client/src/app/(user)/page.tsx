
import React from 'react'
import HeaderHomePage from '@/components/ComponentHomePage/headerHomePage/header'
import FeatureOutStading from '@/components/ComponentHomePage/featureHomePage/feature'
import Service from '@/components/ComponentHomePage/serviceHomePage/service'

const PageHome = () => {
  return (
    <div>
        <HeaderHomePage />
        <FeatureOutStading />
        <Service />
    </div>
  )
}

export default PageHome
