"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./screenShot.module.scss";

const screenshots = [
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e5/b6/71/e5b671cd-35e9-ac95-1536-95662a7ed8da/86d98c10-0014-4bcb-89a5-39c7776e014e_1_GroupChat_Tile_EN_5-5.png/392x696bb.png",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e2/8e/85/e28e85fb-2b4c-a2d4-68ba-0b5104f6acc0/5cc22caa-9cad-409f-9de8-f852cabe5d08_2_Stream_Tile_EN_5-5.png/392x696bb.png",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8f/1a/f1/8f1af1e6-d572-5103-9b49-e2e23072d52f/4440dc86-9288-47c3-afe2-cd9b804c8700_3_SeeWhos_Tile_EN_5-5.png/392x696bb.png",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/54/f3/45/54f345da-331e-bf35-df45-4d3236d9fd88/ee397381-34db-4de9-a43f-d4ab27989e36_4_HopIn_Tile_EN_5-5.png/392x696bb.png",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d1/01/d9/d101d997-aa1e-1d56-76ea-a51e2d10d727/5e8db952-8709-48b5-abd9-c026ef82f629_5_ToDo_Tile_EN_5-5.png/392x696bb.png",
];

const ScreenshotCarousel = () => {
  return (
    <div className={styles["screenshot-carousel"]}>
      <h2>Ảnh chụp màn hình</h2>
      <div className={styles["swiper-wrapper"]}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
          }}
        >
          {screenshots.map((src, index) => (
            <SwiperSlide key={index} className={styles["swiper-slide"]}>
              <Image
                src={src}
                alt={`Screenshot ${index + 1}`}
                width={200}
                height={400}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles["custom-navigation"]}>
          <button className="custom-prev">←</button>
          <button className="custom-next">→</button>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotCarousel;
