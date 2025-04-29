'use client'

import React, { useState } from 'react'
import styles from "@/styles/dasboard/Setting.module.scss";
import { MoonIcon, ExperimentalIcon } from '@/assets/images/icon/index';

const Toggle = ({ active, onChange }: { active: boolean; onChange: () => void }) => (
  <div 
    className={`${styles.toggle} ${active ? styles.active : ''}`}
    onClick={onChange}
  >
    <div className={`${styles.slider} ${active ? styles.active : ''}`} />
  </div>
);

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [betaFeatures, setBetaFeatures] = useState(false);

  return (
    <div className={styles.settingsContainer}>
      <section className={styles.section}>
        <h2>Appearance</h2>
        <div className={styles.settingRow}>
          <div className={styles.settingInfo}>
            <MoonIcon className={styles.icon} />
            <span>Dark Mode</span>
          </div>
          <Toggle active={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Dev</h2>
        <div className={styles.settingRow}>
          <div className={styles.settingInfo}>
            <ExperimentalIcon className={styles.icon} />
            <span>Beta Features</span>
          </div>
          <Toggle active={betaFeatures} onChange={() => setBetaFeatures(!betaFeatures)} />
        </div>
        {betaFeatures && (
          <div className={styles.betaWarning}>
            Beta features are experimental and may not work correctly. Use at your own risk.
          </div>
        )}
      </section>

      <section className={styles.section}>
        <h2>About</h2>
        <div className={styles.settingRow}>
          <span>Version</span>
          <span className={styles.versionInfo}>2025.04.17-1</span>
        </div>
      </section>
    </div>
  )
}

export default SettingsPage