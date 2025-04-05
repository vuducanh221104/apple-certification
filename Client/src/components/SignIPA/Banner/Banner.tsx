'use client'

import React from "react";
import "./Banner.scss";
import Link from "next/link";
import Image from "next/image";
import { DownloadOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";


const Banner = () => {
  return (
    <motion.div
      className="banner"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="banner__contact"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="banner__link"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/tele" className="link">
            <motion.div whileHover={{ scale: 1.05 }} className="link-content" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Image
                src="https://www.unkeyapp.com/_next/image?url=%2Ficon%2Ftelegram.png&w=96&q=75"
                alt="Telegram"
                width={20}
                height={20}
                className="banner-image"
              />
              <span>Liên hệ với admin qua Telegram</span>
            </motion.div>
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Ký Ipa Online
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Một sản phẩm của ducanh99er ! have fun
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="banner__certNew"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>Tải chứng chỉ Free mới nhất - Trạng thái: OK</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring" }}>
          <Link className="banner__link" href="/file">
            File: GAC_TOYOTA_MOTOR_CO_LTD.zip
          </Link>
        </motion.div>

        <motion.div
          className="banner__certNew--time"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <span> 27/03/2025 22:57 | Pass:</span>
          <motion.span
            style={{ color: "#ffffff", paddingLeft: "6px" }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring" }}
          >
            ducanh99er <DownloadOutlined />
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};


export default Banner;
