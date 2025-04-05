import React from "react";
import "./HeaderIPA.scss";
import Image from "next/image";
import Link from "next/link";

const HeaderIPA = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link href="/signIPA" className="header__logo-link">
            <Image
              src="https://pub-347f55bb45354aa4b7fd847222ed02e7.r2.dev/logo.png"
              alt="Logo"
              width={70}
              height={80}
              className="header__logo-image"
            />
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
