'use client';

import Image from 'next/image';
import logo from '@/assets/img/logo.png';
import { useState, useEffect } from 'react';
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

    useEffect(() => {
        setIsOpen(false); // Đóng menu khi chuyển trang
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }, [isOpen]);

    return (
        <header className={styles.header}>
            {/* Logo luôn hiển thị */}
            <div className={styles.logo}>
                <Link href="/">
                    <Image src={logo} alt="Logo" width={48} height={32} />
                </Link>
            </div>

            {/* Icon mở menu */}
            <div className={styles.menuIcon} onClick={() => setIsOpen(true)}>
                <MenuIcon />
            </div>

            {/* Overlay menu */}
            <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(false)} />

            {/* Thanh nav trượt ra từ phải */}
            <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                {/* Nút đóng menu */}
                <div className={styles.closeIcon} onClick={() => setIsOpen(false)}>
                    <CloseIcon />
                </div>

                {/* Link menu */}
                <div className={styles.link}>
                    <Link href="/" className={pathname === '/' ? styles.active : ''}>
                        <strong>Trang chủ</strong>
                    </Link>
                    <Link href="/affiliate" className={pathname === '/affiliate' ? styles.active : ''}>
                        Affiliate
                    </Link>
                    <Link href="/checkoder" className={pathname === '/checkoder' ? styles.active : ''}>
                        Kiểm tra đơn hàng
                    </Link>
                    <Link href="/history" className={pathname === '/history' ? styles.active : ''}>
                        <strong>Lịch sử mua hàng</strong>
                    </Link>
                    <Link href="/store" className={pathname === '/store' ? styles.active : ''}>
                        Kho ứng dụng
                    </Link>
                </div>

                {/* Action button */}
                <div className={styles.action}>
                    <span className={styles.language}>🇻🇳</span>
                    <Button variant="contained" className={styles.buy} onClick={() => router.push('/login')}>
                        MUA NGAY
                    </Button>
                    <Button variant="outlined" className={styles.login} onClick={() => router.push('/login')}>
                        ĐĂNG NHẬP
                    </Button>
                </div>
            </nav>
        </header>
    );
}
