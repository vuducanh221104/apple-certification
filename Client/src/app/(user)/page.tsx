
import React from 'react'
import HeaderHomePage from '@/components/ComponentHomePage/headerHomePage/header'
import FeatureOutStading from '@/components/ComponentHomePage/featureHomePage/feature'
import Service from '@/components/ComponentHomePage/serviceHomePage/service'
import Question from '@/components/ComponentHomePage/questionHomePage/question'

const PageHome = () => {
  return (
    <div>
        <HeaderHomePage />
        <FeatureOutStading />
        <Service />
        <Question />
    </div>
  )
}

export default PageHome
