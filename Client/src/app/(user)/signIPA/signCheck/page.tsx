import React from "react";
import HeaderSign from "@/components/SignIPA/Header/HeaderIPA";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/signIPA/SignCheck.module.scss";
import {
  FacebookOutlined,
  InstagramOutlined,
  TikTokOutlined,
} from "@ant-design/icons";

const arrayQuestionContent = [
  {
    id: 1,
    title: "Tôi vừa mua chứng chỉ xong, phải làm gì tiếp theo để cài?",
    content:
      "Sau khi kiểm tra đơn hàng, bạn sẽ cần cài ứng dụng ESign, sau đó nhập file chứng chỉ vào ESign để ký và cài các ứng dụng khác theo nhu cầu. Đừng lo, tôi đã chuẩn bị sẵn video hướng dẫn ở đây. Hãy xem để hiểu rõ hơn nhé!",
  },
  {
    id: 2,
    title: "Thời gian sử dụng bao lâu ?",
    content: "Thời gian chứng chỉ của bạn sẽ từ 11 tháng đến 1 năm.",
  },
  {
    id: 3,
    title: "Chứng chỉ có thể dùng cho bao nhiêu máy vậy ?",
    content:
      "Mỗi máy sẽ có một mã UDID riêng biệt, vì vậy mỗi chứng chỉ bạn mua chỉ sử dụng duy nhất thiết bị mà bạn đã đăng kí UDID với chúng tôi. Nếu bạn đổi máy có thể bạn sẽ phải tạo chứng chỉ mới.",
  },
];
const pageCheckIPA = () => {
  return (
    <div
      style={{ backgroundColor: "#000000", padding: "0 16px", color: "#fff" }}
    >
      <HeaderSign />

      <div>
        {/* head */}
        <div>
          <div className={styles.header}>
            <Link href="/tele" className={styles.headerLink}>
              <Image
                src="https://www.unkeyapp.com/_next/image?url=%2Ficon%2Ftelegram.png&w=96&q=75"
                alt="Telegram"
                width={20}
                height={20}
                className={styles.headerImg}
              />
              Liên hệ với admin qua Telegram
            </Link>
            <h1>Apple Certificate</h1>
            <p>
              Cung cấp chứng chỉ hoàn tự động. Hướng dẫn, bảo hành, sử dụng đầy
              đủ.
            </p>
          </div>
        </div>
        {/* check */}
        <div style={{ textAlign: "center", margin: "50px 350px 0" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "bold" }}>
            Kiểm tra trạng thái đơn hàng
          </h2>
          <p>Nhập UDID của bạn vào ô bên dưới để kiểm tra thông tin đơn hàng</p>
          <div>
            <input
              className={styles.checkInput}
              type="text"
              placeholder="Nhập UDID của bạn để kiểm tra"
            />
            <div>
              <button className={styles.checkButton}>Kiểm tra</button>
            </div>
          </div>
        </div>
        {/* question */}
        <div className={styles.questionContainer}>
          <div className={styles.questionHeader}>
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
              Câu hỏi thường gặp
            </h3>
          </div>
          <div className={styles.questionContent}>
            {arrayQuestionContent.map((item) => (
              <div key={item.id} className={styles.questionItem}>
                <h4 style={{ fontSize: "18px" }}>{item.title}</h4>
                <p style={{ fontSize: "14px", color: "#ccc" }}>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.questionFooter}>
            <span>Tôi có thể cài những gì sau khi mua chứng chỉ ?</span>
            <p>
              Vô vàn game hack, app crack đang chờ bạn khám phá. một số nguồn
              mình hay sử dụng là
              <a href="https://ios.codevn.net/">ioscodevn</a>
              <a href="https://t.me/kamohacks">Kamohack</a>
              <a href="https://t.me/ipawind">ipaWind</a>
            </p>

            <div className={styles.questionIcon}>
              <Link href="/facebook" className={styles.questionIconLink}>
                <FacebookOutlined className={styles.questionIcon} />
              </Link>
              <Link href="/tiktok" className={styles.questionIconLink}>
                <TikTokOutlined className={styles.questionIcon} />
              </Link>
              <Link href="/instagram" className={styles.questionIconLink}>
                <InstagramOutlined className={styles.questionIcon} />
              </Link>
            </div>
            <div style={{ textAlign: "center"}}>
              <span style={{ color: "#9CA3AF" , fontSize: "16px"}}>
                © 2025{" "}
                <a style={{ color: "#fff" , fontSize: "16px"}} href="">
                  PhuocVu99er
                </a>
                .All Right Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pageCheckIPA;
