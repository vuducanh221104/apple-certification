'use client';

import Image from 'next/image';
import styles from './AppSingleList.module.scss';
import { useRouter } from 'next/navigation';

interface App {
    id: number;
    name: string;
    package: string;
    version: string;
    size: string;
    icon: string;
}

const apps: App[] = [
    {
        id: 1,
        name: 'Instagram',
        package: 'com.burbn.instagram',
        version: '371.0.0',
        size: '181.30 MB',
        icon: '/instagram.png',
    },
    {
        id: 2,
        name: 'VivaVideo',
        package: 'com.quvideo.XiaoYing',
        version: '9.25.1',
        size: '111.93 MB',
        icon: '/vivavideo.png',
    },
    {
        id: 3,
        name: 'Snapchat',
        package: 'com.toyopagroup.picaboo',
        version: '13.31.0.47',
        size: '137.48 MB',
        icon: '/snapchat.png',
    },
];

export default function AppSingleList() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Game</h3>
                <button onClick={() => router.push('/store/socialApp')} className={styles.viewMore}>
                    Xem thêm &gt;
                </button>
            </div>

            <div className={styles.listWrapper}>
                <div className={styles.list}>
                    {apps.map((app) => (
                        <div key={app.id} className={styles.appItem}>
                            <Image src={app.icon} alt={app.name} width={50} height={50} />
                            <div className={styles.info}>
                                <h4>{app.name}</h4>
                                <p className={styles.package}>{app.package}</p>
                            </div>
                            <div className={styles.details}>
                                <p>{app.version}</p>
                                <p>{app.size}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
