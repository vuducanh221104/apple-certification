import React from 'react'
import HeaderHomePage from '@/components/ComponentHomePage/HeaderHomePage/Header'
import FeatureOutStading from '@/components/ComponentHomePage/FeatureHomePage/Feature'
import ServiceHome from '@/components/ComponentHomePage/ServiceHomePage/Service'
import WhyUseHome from '@/components/ComponentHomePage/WhyUseHomePage/WhyUse'
import CerfiticationHome from '@/components/ComponentHomePage/CertificateHomePage/Certificated'
import QuestionHome from '@/components/ComponentHomePage/QuestionHomePage/Question'
import FooterSecond from '@/components/FooterSecond/FooterSecond'

const PageHome = () => {
  return (
    <div>
        <HeaderHomePage />
        <FeatureOutStading />
        <ServiceHome />
        <WhyUseHome />
        <CerfiticationHome />
        <QuestionHome />
        <FooterSecond />
    </div>
  )
}

export default PageHome
