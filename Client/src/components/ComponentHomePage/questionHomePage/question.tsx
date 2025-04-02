"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';
import styles from "./question.module.scss";

const slides = [
  {
    image: "https://www.unkeyapp.com/svg/setting.svg",
    title: "Cài đặt ứng dụng VIP với một chạm",
    content: "Tận hưởng hàng ngàn ứng dụng modded, VIP mà không cần jailbreak, thao tác đơn giản chỉ với một lần chạm.",
  },
  {
    image: "https://www.unkeyapp.com/svg/api.svg",
    title: "Tích hợp API cho lập trình viên",
    content: "Tích hợp API cho phép lập trình viên truy cập và quản lý ứng dụng, giúp phát triển và quản lý các dự án dễ dàng hơn.",
  },
  {
    image: "https://www.unkeyapp.com/svg/security.svg",
    title: "Không cần jailbreak có thể giữ nguyên bảo hành",
    content: "Không can thiệp hệ thống, đảm bảo an toàn và vẫn được bảo hành chính hãng.",
  },
  {
    image: "https://www.unkeyapp.com/svg/security.svg",
    title: "Không cần jailbreak có thể giữ nguyên bảo hành",
    content: "Không can thiệp hệ thống, đảm bảo an toàn và vẫn được bảo hành chính hãng.",
  },
  {
    image: "https://www.unkeyapp.com/svg/security.svg",
    title: "Không cần jailbreak có thể giữ nguyên bảo hành",
    content: "Không can thiệp hệ thống, đảm bảo an toàn và vẫn được bảo hành chính hãng.",
  },
  {
    image: "https://www.unkeyapp.com/svg/security.svg",
    title: "Không cần jailbreak có thể giữ nguyên bảo hành",
    content: "Không can thiệp hệ thống, đảm bảo an toàn và vẫn được bảo hành chính hãng.",
  },
];

const QuestionApp: React.FC = () => {
  return (
    <div className={styles.questionContainer}> 
      <h2 className={styles.questionTitle}>Tại sao chọn UnKeyApp</h2>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={30} 
        loop={true} 
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={styles.mySwiper}
        breakpoints={{
            
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 }, 
        }}
      >
        {slides.map(({ image, title, content }, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.slideContent}>
              <Image src={image} alt={title} width={32} height={32} className={styles.slideImage} />
              
              <h2 className={styles.slideTitle}>{title}</h2>
              
              <p className={styles.slideText}>{content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default QuestionApp;
