'use client'

import React from 'react'
import styles from '@/styles/dasboard/Tutorials.module.scss'
import { 
  UserGuidesIcon,
  TutorialIcon1,
  TutorialIcon2,
  TutorialIcon3,
  TutorialIcon4,
} from '@/assets/images/icon'
import { RightOutlined } from '@ant-design/icons'
import Link from 'next/link'

const TutorialsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <UserGuidesIcon className={styles.headerIcon} />
        <h1>Các hướng dẫn</h1>
        <p>Tham khảo các hướng dẫn sử dụng ở đây, nếu có gì không hiểu có thể liên hệ với Admin để hỏi thêm.</p>
      </div>

      <div className={styles.tutorialSection}>
        <h2>TUTORIALS</h2>
        
        <div className={styles.tutorialList}>
          <Link href="/settings/tutorial/buy" className={styles.tutorialItem}>
            <div className={styles.iconWrapper + ' ' + styles.iconWrapper1}>
              <TutorialIcon1/>
            </div>
            <span>Thêm thiết bị mua chứng chỉ</span>
            <span className={styles.iconRight}><RightOutlined /></span>
          </Link>

          <Link href="/settings/tutorial/devmode" className={styles.tutorialItem}>
            <div className={styles.iconWrapper + ' ' + styles.iconWrapper2}>
              <TutorialIcon2/> 
            </div>
            <span>Hướng dẫn bật chế độ nhà phát triển</span>
            <span className={styles.iconRight}><RightOutlined /></span>
          </Link>

          <Link href="/settings/tutorial/uuid" className={styles.tutorialItem}>
            <div className={styles.iconWrapper + ' ' + styles.iconWrapper3}>
              <TutorialIcon3/>
            </div>
            <span>Hướng dẫn lấy UUID để thêm thiết bị</span>
            <span className={styles.iconRight}><RightOutlined /></span>
          </Link>

          <Link href="/settings/tutorial/certs" className={styles.tutorialItem}>
            <div className={styles.iconWrapper + ' ' + styles.iconWrapper4}>
              <TutorialIcon4/>
            </div>
            <span>Hướng dẫn cài đặt chứng chỉ</span>
            <span className={styles.iconRight}><RightOutlined /></span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TutorialsPage