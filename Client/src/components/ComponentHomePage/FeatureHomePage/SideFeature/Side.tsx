"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import "./SideFeature.scss";
import Link from "next/link";
import {features} from "@/service/mockApi";

// Màu sắc
const colors = ["black", "white", "blue", "white2", "purple"];

const SideFeature = () => {
  // logic hiện nội dung
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };
  return (
    <div className="screenshot-carousel">
      <h2
        style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }}
      >
        Tính năng nổi bật
      </h2>
      <p style={{ fontSize: "16px", padding: "1rem 3rem" }}>
        Apple cho phép UNKEYAPP.COM cài đặt ứng dụng thứ 3 lên thiết bị
        iPhone/iPad với chi phí thấp nhất
      </p>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={20}
        loop={false}
        className="mySwiper"
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 15 },
        }}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={feature.id} className="swiper-slide">
            <div
              className={`feature-item feature-${
                colors[index % colors.length]
              }`}
            >
              <div
                className={`feature-content-wrapper ${
                  feature.id % 2 === 0 ? "content-first" : "image-first"
                }`}
              >
                {/* Nội dung */}
                <div className="side-content">
                  <div className="side-header">
                    {feature.icon && (
                      <Image
                        src={feature.icon}
                        width={24}
                        height={24}
                        alt="icon"
                        className="sideIcon"
                      />
                    )}
                    <h3 style={{ fontSize: "18px" }}>{feature.title}</h3>
                  </div>
                  {/* thẻ p khi bấm vào sẽ hiện thêm nội dung */}
                  <p
                    style={{ maxWidth: "220px", marginBottom: "1.5rem" }}
                    className={expanded === feature.id ? "expanded" : ""}
                    onClick={() => toggleExpand(feature.id)}
                  >
                    {feature.description}
                  </p>
                  <Link href="/auth/login">
                    <button className="content-button">Mua Ngay</button>
                  </Link>
                </div>

                {/* Ảnh */}
                <div className="side-image">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={200}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Nút điều hướng */}
      <div className="custom-navigation">
        <button className="custom-prev">←</button>
        <button className="custom-next">→</button>
      </div>
    </div>
  );
};

export default SideFeature;
