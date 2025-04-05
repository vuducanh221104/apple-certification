import React from "react";
import "./HeaderIPA.scss";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";

const HeaderIPA = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__home">
          <Link href="/signIPA" className="header__home-link">
          <HomeOutlined className="header__icon"/>
          </Link>
        </div>
        <div className="header__button">
          <Link href="/signIPA/signCheck">
            <button className="button__receive">Nhận hàng</button>
          </Link>
          <Link href="/signIPA/signPrice">
            <button className="button__buyCert">Mua chứng chỉ</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderIPA;
