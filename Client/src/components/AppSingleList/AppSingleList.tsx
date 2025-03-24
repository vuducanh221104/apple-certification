"use client";

import Image from "next/image";
import styles from "./AppSingleList.module.scss";
import '@/styles/Global.module.scss'
import Link from "next/link";

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
    name: "Instagram",
    package: "com.burbn.instagrammmmmmmmmmmmmmm",
    version: "371.0.0",
    size: "181.3000000000000 MB",
    icon: "/iconAppSingleList/icontest.jpg",
  },
  {
    id: 2,
    name: "VivaVideo",
    package: "com.quvideo.XiaoYingggggggggggggg",
    version: "9.25.1",
    size: "111.93 MB",
    icon: "/vivavideo.png",
  },
  {
    id: 3,
    name: "Snapchat",
    package: "com.toyopagroup.picaboo",
    version: "13.31.0.47",
    size: "137.48 MB",
    icon: "/snapchat.png",
  },
  {
    id: 4,
    name: "WhatsApp",
    package: "com.whatsapp",
    version: "2.23.1.76",
    size: "102.30 MB",
    icon: "/whatsapp.png",
  },
  {
    id: 5,
    name: "Facebook",
    package: "com.facebook.katana",
    version: "412.0.0.0.23",
    size: "209.34 MB",
    icon: "/facebook.png",
  },
  {
    id: 6,
    name: "Facebook",
    package: "com.facebook.katana",
    version: "412.0.0.0.23",
    size: "209.34 MB",
    icon: "/facebook.png",
  },
  {
    id: 7,
    name: "Facebook",
    package: "com.facebook.katana",
    version: "412.0.0.0.23",
    size: "209.34 MB",
    icon: "/facebook.png",
  },
  {
    id: 8,
    name: "Facebook",
    package: "com.facebook.katana",
    version: "412.0.0.0.23",
    size: "209.34 MB",
    icon: "/facebook.png",
  },
  {
    id: 9,
    name: "Facebook",
    package: "com.facebook.katana",
    version: "412.0.0.0.23",
    size: "209.34 MB",
    icon: "/facebook.png",
  },
  {
    id: 10,
    name: "Facebook",
    package: "com.facebook.katana",
    version: "412.0.0.0.23",
    size: "209.34 MB",
    icon: "/facebook.png",
  }
];

export default function AppSingleList() {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Game</h3>
        <Link
         href={`/store/moreApp`}
          className={styles.viewMore}
        >
          Xem thêm &gt;
        </Link>
      </div>

      <div className={styles.listWrapper}>
        <div className={styles.list}>
          {apps.map((app) => (
            <Link href={`/store/slug`} key={app.id} className={styles.appItem}>
              <Image src='https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/07/f4/e9/07f4e95e-16e6-0ca6-fe57-2a71b3167079/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg' alt={app.name} width={120} height={120} />
              <div className={styles.appContent}>
                <div className={styles.info}>
                  <h4>{app.name}</h4>
                  <p className={styles.package}>{app.package}</p>
                </div>
                <div className={styles.details}>
                  <p className={styles.version}>{app.version}</p>
                  <p className={styles.size}>{app.size}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
