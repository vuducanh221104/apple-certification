"use client";

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from "antd";
import styles from "@/styles/Search.module.scss";
import Image from "next/image";
import Link from "next/link";
import { fetchApps } from "@/service/mockApi"; 
import { AppComponents } from '@/types/client';

const AppComponent: React.FC = () => {
  const [apps, setApps] = useState<AppComponents[]>([]); 
  const [current, setCurrent] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const getApps = async () => {
      const data = await fetchApps();
      setApps(data);
    };

    getApps();
  }, []);

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

export default AppComponent;
