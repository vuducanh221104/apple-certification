import AppInfo from '@/components/ComponentSlug/InfoAppConponent/InfApp'
import Screenshot from '@/components/ComponentSlug/ScreenshotCarousel/Screenshot'
import InfoText from '@/components/ComponentSlug/InfoTextComponent/InfText'
import React from 'react'
import AppSingleList from '@/components/AppSingleList/AppSingleList'
import styles from '@/styles/Slug.module.scss'

function pageSlug() {
  return (
    <div>
      <div>pageSlug</div>
      <AppInfo />
      <Screenshot />
      <InfoText />
      <AppSingleList className={styles.customContainer}/>
    </div>
  )
}

export default pageSlug