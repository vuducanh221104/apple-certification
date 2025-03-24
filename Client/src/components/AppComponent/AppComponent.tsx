"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from "antd";
import styles from "@/styles/Search.module.scss";
import Image from "next/image";
import Link from "next/link";

const apps = [
  {
    name: "CamScanner",
    package: "com.intsig.camscanner",
    rating: 4.8555,
    icon: "",
  },
  {
    name: "CamScanner",
    package: "com.intsig.camscanner",
    rating: 4.8555,
    icon: "",
  },
  {
    name: "CamScanner",
    package: "com.intsig.camscanner",
    rating: 4.8555,
    icon: "",
  },
  {
    name: "CamScanner",
    package: "com.intsig.camscanner",
    rating: 4.8555,
    icon: "",
  },
  {
    name: "CamScanner",
    package: "com.intsig.camscanner",
    rating: 4.8555,
    icon: "",
  },
  {
    name: "CamScanner",
    package: "com.intsig.camscanner",
    rating: 4.8555,
    icon: "",
  },
  {
    name: "CamScanner",
    package: "com.intsig.camscanner",
    rating: 4.8555,
    icon: "",
  },
  {
    name: "CamScanner",
    package: "com.intsig.camscanner",
    rating: 4.8555,
    icon: "",
  },
  {
    name: "VivaVideo",
    package: "com.quvideo.xiaoying",
    rating: 4.7892,
    icon: "",
  },
  {
    name: "Video Star",
    package: "com.frontrow.videostar",
    rating: 4.6664,
    icon: "",
  },
  { name: "Photomath", package: "com.photomath", rating: 4.7712, icon: "" },
  { name: "TikTok", package: "com.musically.tiktok", rating: 4.7464, icon: "" },
  { name: "VSCO", package: "com.vsco", rating: 4.6195, icon: "" },
  {
    name: "Notability",
    package: "com.notability.app",
    rating: 4.7523,
    icon: "",
  },
  { name: "InShot", package: "com.inshot.video", rating: 4.8573, icon: "" },
  { name: "SnapEdit", package: "com.snapedit.app", rating: 4.6509, icon: "" },
  {
    name: "Lightroom",
    package: "com.adobe.lightroom",
    rating: 4.7745,
    icon: "",
  },
  {
    name: "Snapchat",
    package: "com.snapchat.android",
    rating: 4.6618,
    icon: "",
  },
  { name: "MADFUT 25", package: "com.madfut.fut", rating: 4.8842, icon: "" },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState(1);
  const pageSize = 27; // Số ứng dụng hiển thị trên mỗi trang

  // Tính toán các item cần hiển thị trên trang hiện tại
  const startIndex = (current - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedApps = apps.slice(startIndex, endIndex);
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Tìm kiếm ứng dụng"
      />
      <div className={styles.appGrid}>
        {displayedApps.map((app, index) => (
          <Link href={`/store/slug`} key={index} className={styles.appItem}>
            <Image
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a7/cd/d7/a7cdd771-fedc-1736-c538-93a7d980f1bf/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg"
              alt={app.name}
              width={120}
              height={120}
              className={styles.appIcon}
            />
            <h6 className={styles.appName}>{app.name}</h6>
            <p className={styles.appPackage}>{app.package}</p>
            <p className={styles.appRating}>⭐ {app.rating.toFixed(2)}</p>
          </Link>
        ))}
      </div>
      <Pagination
        total={apps.length}
        pageSize={pageSize}
        current={current}
        onChange={setCurrent}
        showSizeChanger={false}
        className={styles.pagination}
      />
    </div>
  );
};

export default App;
