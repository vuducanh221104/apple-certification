
import React from 'react'
import HeaderHomePage from '@/components/ComponentHomePage/headerHomePage/header'
import FeatureOutStading from '@/components/ComponentHomePage/featureHomePage/feature'
import Service from '@/components/ComponentHomePage/serviceHomePage/service'
import WhyUse from '@/components/ComponentHomePage/whyUseHomePage/whyUse'
import Cerfiticate from '@/components/ComponentHomePage/certificateHomePage/certificate'
import Question from '@/components/ComponentHomePage/questionHomePage/question'
import FooterSecond from '@/components/FooterSecond/FooterSecond'

const PageHome = () => {
  return (
    <div>
        <HeaderHomePage />
        <FeatureOutStading />
        <Service />
        <WhyUse />
        <Cerfiticate />
        <Question />
        <FooterSecond />
    </div>
  )
}

export default PageHome
