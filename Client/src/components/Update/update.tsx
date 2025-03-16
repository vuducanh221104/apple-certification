'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './update.scss';

interface Update {
    id: number;
    img: string;
    icon: string;
    title: string;
    description: string;
}

const updates: Update[] = [
    {
        id: 1,
        img: '/img/image1.jpg',
        icon: '/img/icon1.png',
        title: 'Mob Control',
        description: 'com.vi... • 2.84.2 • 199.79 MB',
    },
    {
        id: 2,
        img: '/img/image2.jpg',
        icon: '/img/icon2.png',
        title: 'Zombie Tsunami',
        description: 'net.mo... • 4.6.3',
    },
    {
        id: 3,
        img: '/img/image3.jpg',
        icon: '/img/icon3.png',
        title: 'Subway Surfers',
        description: 'com.kilo... • 3.14.0',
    },
    {
        id: 4,
        img: '/img/image4.jpg',
        icon: '/img/icon4.png',
        title: 'Candy Crush Saga',
        description: 'com.king... • 1.250.2',
    },
];

const UpdatesSection: React.FC = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/store/moreUpdate');
    };

    return (
        <div className="updates-section">
            <div className="updates-header">
                <h2>Mới cập nhật</h2>
                <button className="see-more" onClick={handleClick}>
                    <span>Xem thêm &gt;</span>
                </button>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0} // Khoảng cách giữa các ảnh
                slidesPerView="auto" // Ảnh đầu tiên 70%, ảnh tiếp theo 30%
                centeredSlides={false} // Xoay ảnh trung tâm
                loop={true} // Trượt vòng lặp
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1.2, spaceBetween: 0 }, // Mobile
                    1024: { slidesPerView: 1.3, spaceBetween: 0 }, // Tablet & PC
                }}
                className="updates-list">
                {updates.map((update) => (
                    <SwiperSlide key={update.id} className="update-slide">
                        <div className="update-item">
                            <Image
                                src={update.img}
                                alt={update.title}
                                className="update-image"
                                width={450}
                                height={250}
                            />
                            <div className="update-info">
                                <Image src={update.icon} alt="icon" className="update-icon" width={40} height={40} />
                                <div className="update-text">
                                    <h3>{update.title}</h3>
                                    <p>{update.description}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default UpdatesSection;
