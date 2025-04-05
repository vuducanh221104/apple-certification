"use client";

import React from "react";
import HeaderSign from "@/components/SignIPA/Header/HeaderIPA";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/signIPA/SignCheck.module.scss";
import {
  FacebookOutlined,
  InstagramOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
import { arrayQuestionContent } from "@/service/mockApi";
import { motion } from "framer-motion";

const pageCheckIPA = () => {
  return (
    <div style={{ backgroundColor: "#000000", padding: "0 16px", color: "#fff" }}>
      <HeaderSign />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* head */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/tele" className={styles.headerLink}>
            <motion.div whileHover={{ scale: 1.05 }} className={styles.linkContent}>
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
        </motion.div>

        {/* check */}
        <motion.div
          className={styles.check}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 style={{ fontSize: "36px", fontWeight: "bold" }}>
            Kiểm tra trạng thái đơn hàng
          </h2>
          <p>Nhập UDID của bạn vào ô bên dưới để kiểm tra thông tin đơn hàng</p>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <input
              className={styles.checkInput}
              type="text"
              placeholder="Nhập UDID của bạn để kiểm tra"
            />
            <div>
              <motion.button
                className={styles.checkButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Kiểm tra
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* question */}
        <motion.div
          className={styles.questionContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className={styles.questionHeader}>
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
              Câu hỏi thường gặp
            </h3>
          </div>

          <motion.div className={styles.questionContent}>
            {arrayQuestionContent.map((item, index) => (
              <motion.div
                key={item.id}
                className={styles.questionItem}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <h4 style={{ fontSize: "18px" }}>{item.title}</h4>
                <p style={{ fontSize: "14px", color: "#ccc" }}>
                  {item.content}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.questionFooter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <span>Tôi có thể cài những gì sau khi mua chứng chỉ ?</span>
            <p>
              Vô vàn game hack, app crack đang chờ bạn khám phá. một số nguồn
              mình hay sử dụng là
              <a href="https://ios.codevn.net/">ioscodevn</a>
              <a href="https://t.me/kamohacks">Kamohack</a>
              <a href="https://t.me/ipawind">ipaWind</a>
            </p>

            <div className={styles.questionIcon}>
              <Link href="/facebook" className={styles.questionIconLink}>
                <FacebookOutlined className={styles.questionIcon} />
              </Link>
              <Link href="/tiktok" className={styles.questionIconLink}>
                <TikTokOutlined className={styles.questionIcon} />
              </Link>
              <Link href="/instagram" className={styles.questionIconLink}>
                <InstagramOutlined className={styles.questionIcon} />
              </Link>
            </div>

            <div style={{ textAlign: "center" }}>
              <span style={{ color: "#9CA3AF", fontSize: "16px" }}>
                © 2025{" "}
                <a style={{ color: "#fff", fontSize: "16px" }} href="">
                  PhuocVu99er
                </a>
                .All Right Reserved
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default pageCheckIPA;
