'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';
import logo from '@/assets/img/logo.png';
import fb from '@/assets/img/fb.png';
import telegram from '@/assets/img/telegram.png';
import x from '@/assets/img/x.png';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Image src={logo} alt="Logo" width={92} height={64} />
            </div>

            <p className={styles.description}>
                A rich app store with over 10,000+ diverse applications, easy to install and use.
            </p>

            <div className={styles.supportLinks}>
                <Link href="https://facebook.com" target="_blank" className={styles.card}>
                    <Image src={fb} alt="Facebook" width={40} height={40} />
                    <span>UnKeyApp Facebook Support</span>
                </Link>

                <Link href="https://t.me" target="_blank" className={styles.card}>
                    <Image src={telegram} alt="Telegram" width={40} height={40} />
                    <span>UnKeyApp Telegram Support</span>
                </Link>

                <Link href="https://x.com" target="_blank" className={styles.card}>
                    <Image src={x} alt="X" width={40} height={40} />
                    <span>UnKeyApp X Support</span>
                </Link>
            </div>

            <p className={styles.copyright}>© 2024 – UNKEYAPP.COM</p>
        </footer>
    );
}
