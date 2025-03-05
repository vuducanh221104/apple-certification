"use client"; 

import Image from "next/image";
import logo from "@/assets/img/logo.png";
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { Button } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
            <Image src={logo} alt="Logo" width={48} height={32} />
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <Link href="/affiliate">Affiliate</Link>
        <Link href="/checkoder">Kiểm tra đơn hàng</Link>
        <Link href="/store">Kho ứng dụng</Link>
      </nav>
      </div>

      

      <div className={styles.actions}>
        <span className={styles.language}>🇻🇳</span>
        <Button variant="outlined" className={styles.login}>Đăng nhập</Button>
        <Button variant="contained" className={styles.buy}>Mua ngay</Button>
      </div>
        <div className={styles.menu}>
      <MenuIcon className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)} />
        </div>
    </header>
  );
}
