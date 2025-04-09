'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './Header.module.scss';
import { usePathname } from 'next/navigation';
import { Button } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/" onClick={handleCloseMenu}>
                    <Image 
                        src="/img/logo.png" 
                        alt="Logo" 
                        width={60} 
                        height={40}
                        className={styles.logoImage}
                    />
                </Link>
            </div>

            {/* Menu toggle icon */}
            <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </div>

            {/* Navigation menu */}
            <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                <div className={styles.link}>
                    <Link href="/" className={pathname === '/' ? styles.active : ''} onClick={handleCloseMenu}>
                        <strong>Trang chủ</strong>
                    </Link>
                    <Link href="/affiliate" className={pathname === '/affiliate' ? styles.active : ''} onClick={handleCloseMenu}>
                        Affiliate
                    </Link>
                    <Link href="/checkoder" className={pathname === '/checkoder' ? styles.active : ''} onClick={handleCloseMenu}>
                        Kiểm tra đơn hàng
                    </Link>
                    <Link href="/history" className={pathname === '/history' ? styles.active : ''} onClick={handleCloseMenu}>
                        <strong>Lịch sử mua hàng</strong>
                    </Link>
                    <Link href="/store" className={pathname === '/store' ? styles.active : ''} onClick={handleCloseMenu}>
                        Kho ứng dụng
                    </Link>
                </div>

                <div className={styles.action}>
                    <span className={styles.language}>🇻🇳</span>
                    <Button variant="contained" className={styles.buy} onClick={() => { router.push('/auth/login'); handleCloseMenu(); }}>
                        MUA NGAY
                    </Button>
                    <Button variant="outlined" className={styles.login} onClick={() => { router.push('/auth/login'); handleCloseMenu(); }}>
                        ĐĂNG NHẬP
                    </Button>
                </div>
            </nav>
        </header>
    );
}
