import React from "react";
import styles from "@/styles/dasboard/history.module.scss";
import { InboxOutlined } from "@ant-design/icons";

const HistoryPage = () => {
  return (
    <div className={styles.history}>
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
              <circle
                cx="12"
                cy="12"
                r="7"
                stroke="white"
                stroke-width="1.5"
              ></circle>
              <path
                d="M12 8V12L15 14"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>

          <h1 className={styles.title}>Lịch sử giao dịch</h1>
          <p className={styles.subtitle}>
            Bạn có thể xem lịch sử giao dịch của mình tại đây.
            <br />
            Bấm vào mỗi giao dịch để xem chi tiết.
          </p>
        </div>

        <div className={styles.empty}>
          <InboxOutlined className={styles.icon} />
          <h2>Khong co giao dich nao</h2>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
