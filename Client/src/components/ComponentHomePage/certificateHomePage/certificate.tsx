"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styles from "./Cerfiticate.module.scss";
import { arrayCertificate } from "@/service/mockApi";
import Image from "next/image";

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
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 15 },
        }}
      >
        {arrayCertificate.map(
          ({ id, title, price, device, features, note }) => (
            <SwiperSlide key={id} className={styles.slide}>
              <div className={styles.slideContent}>
                <h3 className={styles.planTitle}>{title}</h3>
                <p className={styles.planPrice}>{price}</p>
                <p className={styles.planDevice}>{device}</p>

                <div className={styles.certificateWrapList}>
                  <ul className={styles.cerfiticateList}>
                    {features.map((feature, idx) => (
                      <li key={idx}>
                        <div className={styles.checkImage}>
                          <Image
                            src="https://www.unkeyapp.com/svg/check.svg"
                            alt="check"
                            width={24}
                            height={27}
                            className={styles.checkIcon}
                          />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cerfiticateBrand}>
                  <div className={styles.cerfiticateWarning}>
                    <Image
                      src="https://www.unkeyapp.com/svg/info.svg"
                      alt="check"
                      width={24}
                      height={27}
                      className={styles.checkIcon}
                    />
                    <div>
                      <h4>Thay thế thiết bị</h4>
                    </div>
                  </div>
                  <p>{note}</p>
                </div>

                <button className={styles.comingSoon}>Coming Soon</button>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default SideCertificate;
