"use client";

import React, { useState } from "react";
import "./Cert.scss";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

const apps = [
  { name: "Esign", image: "https://sign.certvn.com/css/esign-ico.png" },
  { name: "Scaret", image: "https://sign.certvn.com/css/scarlet-ico.png" },
  { name: "Gbox", image: "https://sign.certvn.com/css/gbox-ico.png" },
  {
    name: "Troll X",
    image: "https://sign.certvn.com/css/trollinstallerx-icon.png",
  },
  { name: "Youtube", image: "https://sign.certvn.com/css/youtube.png" },
  { name: "Spotify", image: "https://sign.certvn.com/css/spotify.png" },
];

const Cert = () => {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [showFileInput, setShowFileInput] = useState(false);

  const [fileName, setFileName] = useState("Không có tệp nào được chọn");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName("Không có tệp nào được chọn");
    }
  };

  return (
    <div className="cert">
      <div className="cert__choose">
        <div>
          <p>Lựa chọn App muốn cài</p>
        </div>
        <Row>
          {apps.map((app, index) => (
            <Col key={index} xs={4} sm={3} lg={2}>
              <button
                className={`cert__choose--button ${app.name
                  .toLowerCase()
                  .replace(" ", "")} ${activeApp === app.name ? "active" : ""}`}
                onClick={() => setActiveApp(app.name)}
              >
                {app.name}
                <Image
                  src={app.image}
                  width={24}
                  height={24}
                  alt="logo"
                  className="cert__choose--image"
                />
              </button>
            </Col>
          ))}
        </Row>
      </div>

      <div className="cert__floderFile">
        <p
          className="cert__floderFile--toggle"
          onClick={() => setShowFileInput(!showFileInput)}
        >
          Cần sign IPA khác?
        </p>

        {/* hide/show */}
        {showFileInput && (
          <div className="fileInputWrapper">
            <input
              type="file"
              id="fileUpload"
              className="fileInput"
              onChange={handleFileChange}
            />
            <label htmlFor="fileUpload" className="fileLabel">
              Chọn tệp
            </label>
            <span className="fileName">{fileName}</span>
          </div>
        )}
        {/*  */}
        <span>Chọn file ZIP chứa P12 và MobileProvision</span>

        <div className="fileInputWrapper">
          <input
            type="file"
            id="fileUpload"
            className="fileInput"
            onChange={handleFileChange}
          />
          <label htmlFor="fileUpload" className="fileLabel">
            Chọn tệp
          </label>
          <span className="fileName">{fileName}</span>
        </div>

        <input
          type="password"
          className="passwordInput"
          placeholder="Nhập mật khẩu của tệp P12"
        />

        <div>
          <p style={{ textDecoration: "none" }}>
            Tổng số lần ký: <span>1000</span>
          </p>
        </div>
        <button className="signButton">Sign Now !</button>
      </div>
    </div>
  );
};

export default Cert;
