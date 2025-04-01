import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import styles from "./headerHomePage.module.scss"

const HeaderHomePage = () => {
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
            src="https://www.unkeyapp.com/images/banner_2x.png"
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
