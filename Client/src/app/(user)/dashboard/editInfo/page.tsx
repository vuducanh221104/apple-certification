"use client";

import React, { useState } from "react";
import styles from "@/styles/dasboard/EditInfo.module.scss";

const EditInfo = () => {
  const [formData, setFormData] = useState({
    username: "p123p123p",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.editInfo}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.iconContainer}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="4" fill="#808080" />
              <path
                d="M7 8h10M7 12h10M7 16h10"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h1 className={styles.title}>Chỉnh sửa thông tin</h1>
          <p className={styles.subtitle}>
            Bạn có thể chỉnh sửa thông tin của mình tại đây.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={styles.input}
              placeholder=" "
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              placeholder="Mat Khau"
            />
          </div>
        </form>

        <div className={styles.submitButtonContainer}>
          <button type="submit" className={styles.submitButton}>
            Chỉnh sửa
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditInfo;
