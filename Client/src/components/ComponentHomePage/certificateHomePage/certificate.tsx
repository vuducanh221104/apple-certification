"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styles from "./cerfiticate.module.scss";
import { arrayCertificate } from "@/service/mockApi";

const SideCertificate: React.FC = () => {

  return (
    <div className={styles.certificateContainer}>
      <h2 className={styles.cerfiticateTitle}>Bảng giá chứng chỉ Apple P12</h2>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        freeMode={true}
        modules={[Pagination]}
        className={styles.mySwiper}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {arrayCertificate.map(({ id, title, price, device, features, note }) => (
          <SwiperSlide key={id} className={styles.slide}>
            <div className={styles.slideContent}>
              <h3 className={styles.planTitle}>{title}</h3>
              <p className={styles.planPrice}>{price}</p>
              <p className={styles.planDevice}>{device}</p>

              <div className={styles.certificateWrapList}>
                <ul className={styles.cerfiticateList}>
                    {features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                    ))}
                </ul>
              </div>

              <div className={styles.cerfiticateBrand}>
                <h4 >ⓘ Thay thế thiết bị</h4>
                <p>{note}</p>
              </div>

              <button className={styles.comingSoon}>Coming Soon</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SideCertificate;
