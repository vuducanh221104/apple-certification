"use client";

import React from "react";
import HeaderSign from "@/components/SignIPA/Header/HeaderIPA";
import styles from "@/styles/signIPA/SignPrice.module.scss";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { pricingData } from "@/service/mockApi";


function pageSignPrice() {
  return (
    <div
      style={{ backgroundColor: "#000000", padding: "0 16px", color: "#fff" }}
    >
      <HeaderSign />

      {/* head */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link href="/tele" className={styles.headerLink}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={styles.linkContent}
          >
            <Image
              src="https://www.unkeyapp.com/_next/image?url=%2Ficon%2Ftelegram.png&w=96&q=75"
              alt="Telegram"
              width={20}
              height={20}
              className={styles.headerImg}
            />
            Liên hệ với admin qua Telegram
          </motion.div>
        </Link>
        <h1>Apple Certificate</h1>
        <p>
          Cung cấp chứng chỉ hoàn tự động. Hướng dẫn, bảo hành, sử dụng đầy đủ.
        </p>
        <button className={styles.buttonHeader}>
          Chứng chỉ là gì ?
          <div className={styles.headerImgIconContainer}>
            <Image
              src="https://pub-347f55bb45354aa4b7fd847222ed02e7.r2.dev/aovhack.jpg"
              alt="icon"
              width={32}
              height={32}
              className={styles.headerImgIcon}
            />
          </div>
        </button>
      </motion.div>

      {/* Take UDID */}
      <div className={styles.udidSection}>
        <h2>
          Với <span>Chứng Chỉ</span> bạn có thể cài các app crack, game hack cực
          kì dễ dàng mà không cần phải Jailbreak.
        </h2>
        <p>
          Để xuất chứng chỉ chúng tôi cần UDID của bạn để thêm vào file chứng
          chỉ.
        </p>
        <p>
          Hãy tải cấu hình lấy udid dưới đây và cài đặt cấu hình bạn sẽ lấy được
          UDID của máy bạn.
        </p>
        <div>
          <button>Lấy UDID ngay !</button>
        </div>
      </div>

      {/* Pricing */}
      <div className={styles.pricingSection}>
        <p className={styles.subtitle}>
          Năm 2024 đã có <span className={styles.orderCount}>467</span> Đơn hàng
          được tạo bởi certvn.com
        </p>
        <h2 className={styles.title}>Pricing</h2>

        <div className={styles.cardContainer}>
          {pricingData.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p
                className={styles.cardPrice}
                style={{ color: item.priceColor }}
              >
                {item.price}
              </p>
              <p className={styles.cardDesc}>{item.desc}</p>
              <ul className={styles.cardFeatures}>
                {item.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`${styles.cardFeature} ${
                      feature.invalid ? styles.invalid : ""
                    }`}
                  >
                    {feature.text}
                  </li>
                ))}
              </ul>
              <button className={item.buttonStyle} disabled={item.disabled}>
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default pageSignPrice;
