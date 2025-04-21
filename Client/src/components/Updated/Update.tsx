"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Update.scss";
import Link from "next/link";
import '@/styles/Global.scss'
import {Update} from "@/types/client";

const updates: Update[] = [
  {
    id: 1,
    img: "img/update.png",
    icon: "/iconUpdate/pubg.jpg",
    title: "Mob Control",
    description: "description Options",
    version:'8714893497349723984798234',
    size:'646.871i34p9u12349u194792374892374893 MB',
  },
  {
    id: 2,
    img: "/img/image2.jpg",
    icon: "/img/icon2.png",
    title: "Zombie Tsunami",
    description: "net.mo... • 4.6.3",
    version:'87148',
    size:'646.871i3493 MB',
  },
  {
    id: 3,
    img: "/img/image3.jpg",
    icon: "/img/icon3.png",
    title: "Subway Surfers",
    description: "com.kilo... • 3.14.0",
    version:'87148',
    size:'646.871i3493 MB',
  },
  {
    id: 4,
    img: "/img/image4.jpg",
    icon: "/img/icon4.png",
    title: "Candy Crush Saga",
    description: "com.king... • 1.250.2",
    version:'87148',
    size:'646.871i3493 MB',
  },
  {
    id: 5,
    img: "/img/image4.jpg",
    icon: "/img/icon4.png",
    title: "Candy Crush Saga",
    description: "com.king... • 1.250.2",
    version:'87148',
    size:'646.871i3493 MB',
  },
  {
    id: 6,
    img: "/img/image4.jpg",
    icon: "/img/icon4.png",
    title: "Candy Crush Saga",
    description: "com.king... • 1.250.2",
    version:'87148',
    size:'646.871i3493 MB',
  },
];

const UpdatesSection: React.FC = () => {

  return (
    <div className="updates-section">
      <div className="updates-header">
        <h2>Mới cập nhật</h2>
        <Link className="see-more" href={`/store/moreApp`}>
          Xem thêm &gt;
        </Link>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0} // Khoảng cách giữa các ảnh
        slidesPerView="auto" // Ảnh đầu tiên 70%, ảnh tiếp theo 30%
        centeredSlides={false} // Xoay ảnh trung tâm
        loop={true} // Trượt vòng lặp
        navigation={{
          prevEl: null,
          nextEl: null,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 0 }, // Mobile
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: { slidesPerView: 3, spaceBetween: 0 },
        }}
        className="updates-list"
      >
        {updates.map((update) => (
          <SwiperSlide key={update.id} className="update-slide">
            <div className="update-item">
              <Image
                src="https://sgp1.vultrobjects.com/unkeyapp2/dev/1740930399020IMG_8387.jpeg"
                alt={update.title}
                className="update-image"
                width={450}
                height={250}
              />
              <div className="update-info">
                <Link href={`/store/slug`} className='update-content'>
                  <Image
                    src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/99/6c/fe/996cfeec-163a-bfd4-b8eb-2b01b6315c7c/AppIcon-0-1x_U007emarketing-0-7-0-85-220-0.png/512x512bb.jpg"
                    alt="icon"
                    className="update-icon"
                    width={50}
                    height={50}
                  />
                  <div className="update-text">
                    <h3>{update.title}</h3>
                    <div className="update-meta">
                        <p>{update.description}</p>
                        <p>{update.version}</p>
                        <p>{update.size}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UpdatesSection;
