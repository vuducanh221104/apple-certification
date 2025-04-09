'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import styles from "./HeaderHomePage.module.scss"

const HeaderHomePage = () => {
  const [imageSrc, setImageSrc] = useState("https://www.unkeyapp.com/images/banner_2x.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setImageSrc("https://www.unkeyapp.com/images/banner_4x.png");
      } else {
        setImageSrc("https://www.unkeyapp.com/images/banner_2x.png");
      }
    };

    // Set initial image based on screen size
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.header}>
      <section className={styles.header__content}>
        <Container className={styles.header__container}>    
          <p className={styles.header__title}>UnKeyApp</p>
          <h4 className={styles.header__subtitle}>
            Kho ứng dụng bên thứ 3 dành cho iPhone/iPad
          </h4>
          <p className={styles.header__description}>
            Kho ứng dụng phong phú với hơn 10,000+ ứng dụng đa dạng, dễ dàng cài
            đặt và sử dụng.
          </p>
        </Container>
        <div className={styles.header__imageWrapper}>
          <Image
            src={imageSrc}
            alt="logo"
            width={800}
            height={400}
            className={styles.header__image}
          />
        </div>
      </section>
    </div>
  );
};

export default HeaderHomePage;
