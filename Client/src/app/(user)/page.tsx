
import React from 'react'
import HeaderHomePage from '@/components/ComponentHomePage/headerHomePage/header'
import FeatureOutStading from '@/components/ComponentHomePage/featureHomePage/feature'
import Service from '@/components/ComponentHomePage/serviceHomePage/service'
import Question from '@/components/ComponentHomePage/questionHomePage/question'
import Cerfiticate from '@/components/ComponentHomePage/certificateHomePage/certificate'

const PageHome = () => {
  return (
    <div>
        <HeaderHomePage />
        <FeatureOutStading />
        <Service />
        <Question />
        <Cerfiticate />
    </div>
  )
}

export default PageHome
