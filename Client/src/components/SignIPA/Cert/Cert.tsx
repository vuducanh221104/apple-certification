"use client";

import React, { useState } from "react";
import "./Cert.scss";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.div
      className="cert"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="cert__choose"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.p
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Lựa chọn App muốn cài
        </motion.p>
        <Row>
          {apps.map((app, index) => (
            <Col key={index} xs={4} sm={3} lg={2}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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
              </motion.button>
            </Col>
          ))}
        </Row>
      </motion.div>

      <motion.div
        className="cert__floderFile"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.p
          className="cert__floderFile--toggle"
          whileHover={{ scale: 1.02 }}
          onClick={() => setShowFileInput(!showFileInput)}
        >
          Cần sign IPA khác?
        </motion.p>

        <AnimatePresence>
          {showFileInput && (
            <motion.div
              className="fileInputWrapper"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
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
            </motion.div>
          )}
        </AnimatePresence>

        <span>Chọn file ZIP chứa P12 và MobileProvision</span>

        <motion.div
          className="fileInputWrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
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
        </motion.div>

        <motion.input
          type="password"
          className="passwordInput"
          placeholder="Nhập mật khẩu của tệp P12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p style={{ textDecoration: "none" }}>
            Tổng số lần ký: <span>1000</span>
          </p>
        </motion.div>

        <motion.button
          className="signButton"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          Sign Now !
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Cert;
