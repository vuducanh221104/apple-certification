"use client"

import React, { useState } from 'react' 
import styles from "@/styles/dasboard/SignApp.module.scss"
import Image from 'next/image'
import { AppOptionApi } from "@/service/mockApi"
import { AppOption } from "@/types/client"
import { SingApp } from "@/assets/images/icon"

const SignAppPage = () => {
  const apps: AppOption[] = AppOptionApi

  const [selectedAppId, setSelectedAppId] = useState<string | null>(null)

  const handleSelectApp = (appId: string) => {
    setSelectedAppId(appId)
  }

  return (
    <div className={styles.container}>
      <div className={styles.signCard}>
        <div className={styles.header}>
          <SingApp className={styles.headerIcon}/>
          <h1>Ký ứng dụng</h1>
          <p>Ký ứng dụng là cách để bạn tải về các ứng dụng dùng để ký ipa, sử dụng thiết bị mà bạn đã đăng kí</p>
        </div>

        <div className={styles.appSelection}>
          <h2>CHỌN MỘT ỨNG DỤNG ĐỂ CÀI</h2>
          <div className={styles.appList}>
            {apps.map((app) => (
              <div 
                key={app.id} 
                className={styles.appOption}
                onClick={() => handleSelectApp(app.id)}
              >
                <Image 
                  src={app.icon}
                  alt={`${app.name} icon`}
                  width={40}
                  height={40}
                />
                <span>{app.name}</span>
                <div 
                  className={`${styles.radioButton} ${selectedAppId === app.id ? styles.selected : ''}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.deviceSection}>
          <h2>CHỌN MỘT THIẾT BỊ ĐỂ CÀI</h2>
          <p>Bạn chưa đăng ký thiết bị nào cả.</p>
        </div>

        <button className={styles.installButton} disabled={selectedAppId === null}>
          Ký và tải App
        </button>
      </div>
    </div>
  )
}

export default SignAppPage
