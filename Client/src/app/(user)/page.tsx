
import React from 'react'
import HeaderHomePage from '@/components/ComponentHomePage/HeaderHomePage/Header'
import FeatureOutStading from '@/components/ComponentHomePage/FeatureHomePage/Feature'
import Service from '@/components/ComponentHomePage/ServiceHomePage/Service'
import WhyUse from '@/components/ComponentHomePage/WhyUseHomePage/WhyUse'
import Cerfitication from '@/components/ComponentHomePage/CertificateHomePage/Certificate'
import Question from '@/components/ComponentHomePage/QuestionHomePage/Question'
import FooterSecond from '@/components/FooterSecond/FooterSecond'

const PageHome = () => {
  return (
    <div>
        <HeaderHomePage />
        <FeatureOutStading />
        <Service />
        <WhyUse />
        <Cerfitication />
        <Question />
        <FooterSecond />
    </div>
  )
}

export default PageHome
