'use client'

import React, { useState } from "react";
import styles from "@/styles/dasboard/topup.module.scss";
import Image from "next/image";

const TopupPage = () => {
  const [amount, setAmount] = useState("");
  const [selectedCardValue, setSelectedCardValue] = useState<number | null>(null);
  const [cardCode, setCardCode] = useState("");
  const [serialNumber, setSerialNumber] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleCardValueClick = (value: number) => {
    setSelectedCardValue(value);
    setCardCode("");
    setSerialNumber("");
  };

  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      cardValue: selectedCardValue,
      cardCode,
      serialNumber
    });
  };

  return (
    <div className={styles.changePassword}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.iconContainer}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="4" fill="#9CA3AF"></rect>
              <rect
                x="4"
                y="7"
                width="16"
                height="11"
                rx="2"
                stroke="white"
                strokeWidth="1.5"
              ></rect>
              <rect
                x="14"
                y="11"
                width="3"
                height="3"
                rx="1"
                fill="white"
              ></rect>
              <path d="M4 10H20" stroke="white" strokeWidth="1.5"></path>
            </svg>
          </div>

          <h1 className={styles.title}>Nạp tiền</h1>
          <p className={styles.balance}>Số dư hiện tại: 0 VND</p>
        </div>

        <div className={styles.contentWrapper}>
          {/* QR */}
          <div className={styles.qrContainer}>
            <h2>Quét mã QR</h2>
            <p>Nhập số tiền nạp vào</p>
            <div className={styles.inputWrapper}>
              <input 
                type="number" 
                placeholder="Nhập số tiền (VND)"
                value={amount}
                onChange={handleAmountChange}
                className={styles.amountInput}
              />
            </div>
            <button className={styles.qrButton}>
              <span className={styles.cartIcon}>🛒</span> Tạo mã QR
            </button>

            <div className={styles.bankAccounts}>
              <div style={{display: "flex", gap: "4rem", marginBottom: "15px"}}> 
                <div className={styles.accountSection}>
                  <div className={styles.amount}>100 Triệu</div>
                  <h3>Tài khoản ngân hàng</h3>
                  <div className={styles.banks}>
                    <Image src="https://payos.vn/wp-content/uploads/sites/13/2023/12/download-removebg-preview.png" alt="Bank 1" width={20} height={20} />
                    <Image src="https://payos.vn/wp-content/uploads/sites/13/2023/12/mbbank-removebg-preview.png" alt="Bank 1" width={20} height={20} />
                    <span>+50</span>
                  </div>
                </div>

                <div className={styles.accountSection}>
                  <div className={styles.amount}>47 Triệu</div>
                  <h3>Tài khoản Ví điện tử</h3>
                  <div className={styles.banks}>
                    <Image src="https://payos.vn/wp-content/uploads/sites/13/2023/12/download__1_-removebg-preview.png" alt="Bank 1" width={20} height={20} />
                    <Image src="https://payos.vn/wp-content/uploads/sites/13/2023/12/download__2_-removebg-preview.png" alt="Bank 1" width={20} height={20} />
                    <span>+5</span>
                  </div>
                </div>
              </div>

              <div className={styles.accountSection}>
                <div className={styles.amount}>4 Triệu</div>
                <h3>Tài khoản Tiền di động</h3>
                <div className={styles.banks}>
                  <Image src="https://payos.vn/wp-content/uploads/sites/13/2023/12/download.jpeg" alt="Bank 1" width={20} height={20} />
                  <Image src="https://payos.vn/wp-content/uploads/sites/13/2023/12/download-3.png" alt="Bank 1" width={20} height={20} />
                </div>
              </div>
            </div>
          </div>

          {/* The cao */}
          <div className={styles.cardContainer}>
            <h2>Thẻ cào</h2>
            <p className={styles.warning}>Lưu ý: chỉ nhận thẻ Viettel</p>
            <p>Chọn mệnh giá thẻ cào</p>
            <p className={styles.warning2}>Bạn sẽ bị thu phí 10-12%</p>

            {selectedCardValue && (
              <form onSubmit={handleCardSubmit} className={styles.cardForm}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    placeholder="Nhập mã thẻ"
                    value={cardCode}
                    onChange={(e) => setCardCode(e.target.value)}
                    className={styles.cardInput}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    placeholder="Nhập số serial"
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                    className={styles.cardInput}
                  />
                </div>
                <button type="submit" className={styles.submitButton}>
                  <span className={styles.cartIcon}>🛒</span> Nạp thẻ
                </button>
              </form>
            )}

            <div className={styles.cardOptions}>
              {[10000, 20000, 50000, 100000, 200000, 500000].map((value) => (
                <button
                  key={value}
                  className={`${styles.cardOption} ${selectedCardValue === value ? styles.selected : ''}`}
                  onClick={() => handleCardValueClick(value)}
                >
                  {value.toLocaleString()} VND
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopupPage;
