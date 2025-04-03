"use client";

import React, { useState } from "react";
import styles from "./question.module.scss";
import Image from "next/image";

const imgPlus = "https://www.unkeyapp.com/svg/plush.svg";
const imgMinus = "https://www.unkeyapp.com/svg/line.svg";

const arrayQuestion = [
  {
    id: 1,
    title: "Tôi có thể sử dụng UnkeyApp trên nhiều thiết bị không?",
    content:
      "UnkeyApp được cấp quyền dựa trên UDID của từng thiết bị, vì vậy mỗi bản quyền chỉ áp dụng cho một thiết bị. Nếu bạn muốn sử dụng trên nhiều thiết bị, vui lòng mua thêm bản quyền cho mỗi thiết bị khác nhau.",
  },
  {
    id: 2,
    title: "Thời gian kích hoạt UnkeyApp là bao lâu?",
    content:
      "Thời gian kích hoạt sẽ được thực hiện ngay sau khi bạn hoàn tất thanh toán.",
  },
  {
    id: 3,
    title: "UnkeyApp có bảo mật không?",
    content:
      "UnkeyApp sử dụng các tiêu chuẩn bảo mật hàng đầu để đảm bảo dữ liệu của bạn luôn an toàn.",
  },
  {
    id: 4,
    title: "Tôi có thể đăng nhập tài khoản UnkeyApp từ thiết bị khác không?",
    content:
      "Bạn có thể đăng nhập tài khoản của mình trên thiết bị khác, nhưng cần đảm bảo bạn có bản quyền hợp lệ trên thiết bị mới.",
  },
];

const Question = () => {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestion = (id: number) => {
    setOpenQuestions((prev) =>
      prev.includes(id) ? prev.filter((qId) => qId !== id) : [...prev, id]
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Câu hỏi thường gặp</h1>
      <p className={styles.subtitle}>
        Hãy để chúng tôi giúp trả lời những câu hỏi phổ biến nhất mà bạn có thể
        có.
      </p>

      <div className={styles.faqList}>
        {arrayQuestion.map((item) => (
          <div key={item.id} className={styles.faqItem}>
            <div
              className={styles.question}
              onClick={() => toggleQuestion(item.id)}
            >
              <span className={styles.text}>{item.title}</span>
              <button className={styles.toggleBtn}>
                <Image
                  src={openQuestions.includes(item.id) ? imgMinus : imgPlus}
                  alt={
                    openQuestions.includes(item.id)
                      ? "Ẩn nội dung"
                      : "Hiện nội dung"
                  }
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <div
              className={`${styles.answer} ${
                openQuestions.includes(item.id) ? styles.show : ""
              }`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
