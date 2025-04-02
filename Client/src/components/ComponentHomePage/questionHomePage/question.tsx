"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';
import styles from "./question.module.scss";
import {slides} from "@/service/mockApi"



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
              <Image src={image.trim()} alt={title} width={32} height={32} className={styles.slideImage} />
              
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
