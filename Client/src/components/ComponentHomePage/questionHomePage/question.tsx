"use client";

import React, { useState } from "react";
import styles from "./Question.module.scss";
import Image from "next/image";
import { arrayQuestion } from "@/service/mockApi";

const imgPlus = "https://www.unkeyapp.com/svg/plush.svg";
const imgMinus = "https://www.unkeyapp.com/svg/line.svg";

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
