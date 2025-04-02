'use client';

import Image from 'next/image';
import styles from './AppList.module.scss';
import '@/styles/Global.scss'
import Link from 'next/link';
import { AppLists } from '@/types/client';



const apps: AppLists[] = [
    {
        id: 1,
        name: 'Instagrammmmmmmmmmmmmmmmmmmmmmmmmm',
        package: 'com.burbn.instagrammmmmmmmm,mm......,mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
        version: '371.0.00000.000000000.000000.0000000.00000',
        size: '181.300000000000000000000000000000 MB',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/44/26/b9/4426b92e-26df-658d-415c-01a0b48bdbc0/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg',
    },
    {
        id: 2,
        name: 'VivaVideo',
        package: 'com.quvideo.XiaoYing',
        version: '9.25.1',
        size: '111.93 MB',
        icon: '/iconAppList/icon1.jpg',
    },
    {
        id: 3,
        name: 'Snapchat',
        package: 'com.toyopagroup.picaboo',
        version: '13.31.0.47',
        size: '137.48 MB',
        icon: '/iconAppList/icon1.jpg',
    },
    {
        id: 4,
        name: 'WhatsApp',
        package: 'com.whatsapp',
        version: '2.23.1.76',
        size: '102.30 MB',
        icon: '/whatsapp.png',
    },
    {
        id: 5,
        name: 'Facebook',
        package: 'com.facebook.katana',
        version: '412.0.0.0.23',
        size: '209.34 MB',
        icon: '/facebook.png',
    },
    {
        id: 6,
        name: 'TikTok',
        package: 'com.zhiliaoapp.musically',
        version: '30.5.4',
        size: '178.52 MB',
        icon: '/tiktok.png',
    },
    {
        id: 7,
        name: 'Twitter',
        package: 'com.twitter.android',
        version: '3.1.2',
        size: '115.16 MB',
        icon: '/twitter.png',
    },
    {
        id: 8,
        name: 'YouTube',
        package: 'com.google.android.youtube',
        version: '14.28.35',
        size: '168.99 MB',
        icon: '/youtube.png',
    },
    {
        id: 9,
        name: 'Google Maps',
        package: 'com.google.android.apps.maps',
        version: '14.1.30.212318',
        size: '163.90 MB',
        icon: '/google-maps.png',
    },
    {
        id: 10,
        name: 'Google Play Music',
        package: 'com.google.android.music',
        version: '14.28.35',
        size: '152.18 MB',
        icon: '/google-play-music.png',
    },
    {
        id: 11,
        name: 'Google Photos',
        package: 'com.google.android.apps.photos',
        version: '24.1.10.212318',
        size: '155.71 MB',
        icon: '/google-photos.png',
    },
    {
        id: 12,
        name: 'Google Fit',
        package: 'com.google.android.apps.fitness',
        version: '14.28.35',
        size: '164.22 MB',
        icon: '/google-fit.png',
    },
    {
        id: 13,
        name: 'Google Calendar',
        package: 'com.google.android.calendar',
        version: '14.28.35',
        size: '170.55 MB',
        icon: '/google-calendar.png',
    },
    {
        id: 14,
        name: 'Google Hangouts',
        package: 'com.google.android.apps.hangouts',
        version: '14.28.35',
        size: '158.56 MB',
        icon: '/google-hangouts.png',
    },
];

export default function AppList() {

    // Chia danh sách thành từng nhóm 3 ứng dụng
    const chunkedApps: AppLists[][] = [];
    for (let i = 0; i < apps.length; i += 3) {
        chunkedApps.push(apps.slice(i, i + 3));
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Mạng xã hội</h3>
                <Link href={`/store/moreApp`} className={styles.viewMore}>
                    Xem thêm &gt;
                </Link>
            </div>

            <div className={styles.listWrapper}>
                <div className={styles.list}>
                    {chunkedApps.map((group, index) => (
                        <div key={index} className={styles.column}>
                            {group.map((app) => (
                                <Link href={`/store/slug`} key={app.id} className={styles.appItem}>
                                    <Image src='https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/35/d0/97/35d09708-4888-fa32-465b-43e428dbabda/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg' alt={app.name} width={64} height={64} />
                                    <div className={styles.info}>
                                        <h4>{app.name}</h4>
                                        <p className={styles.package}>{app.package}</p>
                                        <div className={styles.details}>
                                            <p>{app.version}</p>
                                            <p>{app.size}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
