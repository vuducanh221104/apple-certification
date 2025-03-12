'use client';

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from 'antd';
import styles from '@/styles/Search.module.scss';
import Image from 'next/image';

const apps = [
    { name: 'CamScanner', package: 'com.intsig.camscanner', rating: 4.8555, icon: 'cs.jpg' },
    { name: 'CamScanner', package: 'com.intsig.camscanner', rating: 4.8555, icon: 'cs.jpg' },
    { name: 'CamScanner', package: 'com.intsig.camscanner', rating: 4.8555, icon: 'cs.jpg' },
    { name: 'CamScanner', package: 'com.intsig.camscanner', rating: 4.8555, icon: 'cs.jpg' },
    { name: 'CamScanner', package: 'com.intsig.camscanner', rating: 4.8555, icon: 'cs.jpg' },
    { name: 'CamScanner', package: 'com.intsig.camscanner', rating: 4.8555, icon: 'cs.jpg' },
    { name: 'CamScanner', package: 'com.intsig.camscanner', rating: 4.8555, icon: 'cs.jpg' },
    { name: 'CamScanner', package: 'com.intsig.camscanner', rating: 4.8555, icon: 'cs.jpg' },
    { name: 'VivaVideo', package: 'com.quvideo.xiaoying', rating: 4.7892, icon: '' },
    { name: 'Video Star', package: 'com.frontrow.videostar', rating: 4.6664, icon: '' },
    { name: 'Photomath', package: 'com.photomath', rating: 4.7712, icon: '' },
    { name: 'TikTok', package: 'com.musically.tiktok', rating: 4.7464, icon: '' },
    { name: 'VSCO', package: 'com.vsco', rating: 4.6195, icon: '' },
    { name: 'Notability', package: 'com.notability.app', rating: 4.7523, icon: '' },
    { name: 'InShot', package: 'com.inshot.video', rating: 4.8573, icon: '' },
    { name: 'SnapEdit', package: 'com.snapedit.app', rating: 4.6509, icon: '' },
    { name: 'Lightroom', package: 'com.adobe.lightroom', rating: 4.7745, icon: '' },
    { name: 'Snapchat', package: 'com.snapchat.android', rating: 4.6618, icon: '' },
    { name: 'MADFUT 25', package: 'com.madfut.fut', rating: 4.8842, icon: '' },
];

const App: React.FC = () => {
    const [current, setCurrent] = useState(1);
    const pageSize = 5; // Số ứng dụng hiển thị trên mỗi trang

    // Tính toán các item cần hiển thị trên trang hiện tại
    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayedApps = apps.slice(startIndex, endIndex);
    return (
        <div className={styles.container}>
            <input type="text" className={styles.searchBar} placeholder="Tìm kiếm ứng dụng" />
            <div className={styles.appGrid}>
                {displayedApps.map((app, index) => (
                    <div key={index} className={styles.appItem}>
                        {app.icon ? (
                            <Image
                                src={`/imgApp/${app.icon}`}
                                alt={app.name}
                                width={50}
                                height={50}
                                className={styles.appIcon}
                            />
                        ) : (
                            <div className={styles.appPlaceholder}>No Image</div>
                        )}
                        <h6 className={styles.appName}>{app.name}</h6>
                        <p className={styles.appPackage}>{app.package}</p>
                        <p className={styles.appRating}>⭐ {app.rating.toFixed(2)}</p>
                    </div>
                ))}
            </div>
            <Pagination
                total={apps.length}
                pageSize={pageSize}
                current={current}
                onChange={setCurrent}
                showSizeChanger={false}
                showQuickJumper
                className={styles.pagination}
            />
        </div>
    );
};

export default App;
