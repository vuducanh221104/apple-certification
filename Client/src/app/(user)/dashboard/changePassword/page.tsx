import React from "react";
import styles from "@/styles/dasboard/changePassword.module.scss";

const ChangePassword = () => {
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
              <path
                d="M8 11V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V11"
                stroke="white"
                stroke-width="1.5"
              ></path>
              <rect
                x="7"
                y="11"
                width="10"
                height="7"
                rx="1"
                fill="white"
              ></rect>
              <circle cx="12" cy="14.5" r="1.5" fill="#9CA3AF"></circle>
            </svg>
          </div>

          <h1 className={styles.title}>Doi mat khau</h1>
          <p className={styles.subtitle}>
            Bạn có thể đổi mật khẩu của mình tại đây.
          </p>
        </div>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="password-old"
              value=""
              className={styles.input}
              placeholder="Mat khau cu"
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              name="password-new"
              value=""
              className={styles.input}
              placeholder="Mat Khau moi"
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="password-confirm"
              value=""
              className={styles.input}
              placeholder="Nhap lai mat khau moi"
            />
          </div>
        </form>

        <div className={styles.submitButtonContainer}>
          <button type="submit" className={styles.submitButton}>
            Doi mat khau
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
