'use client';

import Image from 'next/image';
import images from '@/assets/images/index';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Image src={images.logo} alt="Logo" width={92} height={64} />
            </div>

            <p className={styles.description}>
                A rich app store with over 10,000+ diverse applications, easy to install and use.
            </p>

            <div className={styles.supportLinks}>
                <Link href="https://facebook.com" target="_blank" className={styles.card}>
                    <Image src='https://www.unkeyapp.com/_next/image?url=%2Ficon%2Ffb.png&w=96&q=75' alt="Facebook" width={40} height={40} />
                    <p>UnKeyApp Facebook Support</p>
                </Link>

                <Link href="https://t.me" target="_blank" className={styles.card}>
                    <Image src='https://www.unkeyapp.com/_next/image?url=%2Ficon%2Ftelegram.png&w=96&q=75' alt="Telegram" width={40} height={40} />
                    <p>UnKeyApp Telegram Support</p>
                </Link>

                <Link href="https://x.com" target="_blank" className={styles.card}>
                    <Image src='https://www.unkeyapp.com/_next/image?url=%2Ficon%2Fx.png&w=96&q=75' alt="X" width={40} height={40} />
                    <p>UnKeyApp X Support</p>
                </Link>
            </div>

            <p className={styles.copyright}>© 2024 – UNKEYAPP.COM</p>
        </footer>
    );
}
