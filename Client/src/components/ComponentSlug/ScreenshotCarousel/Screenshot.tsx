"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import styles from "./screenShot.module.scss";

const screenshots = [
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e5/b6/71/e5b671cd-35e9-ac95-1536-95662a7ed8da/86d98c10-0014-4bcb-89a5-39c7776e014e_1_GroupChat_Tile_EN_5-5.png/392x696bb.png",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e5/b6/71/e5b671cd-35e9-ac95-1536-95662a7ed8da/86d98c10-0014-4bcb-89a5-39c7776e014e_1_GroupChat_Tile_EN_5-5.png/392x696bb.png",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e5/b6/71/e5b671cd-35e9-ac95-1536-95662a7ed8da/86d98c10-0014-4bcb-89a5-39c7776e014e_1_GroupChat_Tile_EN_5-5.png/392x696bb.png",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e5/b6/71/e5b671cd-35e9-ac95-1536-95662a7ed8da/86d98c10-0014-4bcb-89a5-39c7776e014e_1_GroupChat_Tile_EN_5-5.png/392x696bb.png",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e5/b6/71/e5b671cd-35e9-ac95-1536-95662a7ed8da/86d98c10-0014-4bcb-89a5-39c7776e014e_1_GroupChat_Tile_EN_5-5.png/392x696bb.png",
];

const ScreenshotCarousel = () => {
  return (
    <div className={styles["screenshot-carousel"]}>
      <h2>Ảnh chụp màn hình</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={-20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: -20 },
          768: { slidesPerView: 3, spaceBetween: -20 },
          1024: { slidesPerView: 4, spaceBetween: -20 },
        }}
        className={styles["swiper-container"]}
      >
        {screenshots.map((src, index) => (
          <SwiperSlide key={index} className={styles["swiper-slide"]}>
            <div style={{padding: "0 10px"}}>
              <Image
                src={src}
                alt={`Screenshot ${index + 1}`}
                width={200}
                height={400}
                className={styles["screenshot-image"]}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ScreenshotCarousel;
