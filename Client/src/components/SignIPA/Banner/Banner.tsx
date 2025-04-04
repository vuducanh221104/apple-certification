import React from "react";
import "./Banner.scss";
import Link from "next/link";
import Image from "next/image";
import { DownloadOutlined } from "@ant-design/icons";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__contact">
        <div className="banner__link">
          <Link href="/tele" className="link">
            <Image
              src="https://www.unkeyapp.com/_next/image?url=%2Ficon%2Ftelegram.png&w=96&q=75"
              alt="Telegram"
              width={20}
              height={20}
              className="banner-image"
            />
            Liên hệ với admin qua Telegram
          </Link>
          <h1>Ký Ipa Online</h1>
          <p>Một sản phẩm của ducanh99er ! have fun</p>
        </div>
      </div>
      <div className="banner__certNew">
        <div>
        <p>Tải chứng chỉ Free mới nhất - Trạng thái: OK</p>
        </div>
        <Link className="banner__link" href="/file">File: GAC_TOYOTA_MOTOR_CO_LTD.zip</Link>
        <div className="banner__certNew--time"> 
          <span> 27/03/2025 22:57 | Pass:</span>
          <span style={{ color: "#ffffff" , paddingLeft: "6px" }}>
            ducanh99er <DownloadOutlined />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
