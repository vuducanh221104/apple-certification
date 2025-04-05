import React from "react";

const arrayQuestion = [
  {
    title: "Làm thế nào để cài đặt ứng dụng từ website này?",
    context:
      "Để cài đặt ứng dụng bạn cần file zip chứa chúng chỉ ( file p12, mobileprovison). Bạn có thể thử sử dụng chứng chỉ free mình đặt ở trên Còn nếu muốn sử dụng lâu dài hãy liên hệ mình để mua chứng chỉ ( từ 69k/năm).",
  },
  {
    title: "Thời gian ký ứng dụng mất bao lâu?",
    context:
      "Quá trình ký ứng dụng thông thường chỉ mất vài phút. Sau khi ký xong, bạn sẽ nhận được một liên kết để cài đặt ứng dụng trên thiết bị của mình",
  },
  {
    title: "Tôi có thể ký ứng dụng nào?",
    context:
      "Bạn có thể ký bất kỳ ứng dụng nào miễn là bạn có file zip chứa chúng (file p12, mobileprovison).",
  },
  {
    title: "Tôi có thể sử dụng chứng chỉ này trên nhiều thiết bị không?",
    context:
      "Có, bạn có thể sử dụng chứng chỉ này trên nhiều thiết bị khác nhau miễn là bạn đã cài đặt ứng dụng trên thiết bị đó.",
  },
  {
    title: "Tôi có thể sử dụng chứng chỉ này trên nhiều thiết bị không?",
    context:
      "Có, bạn có thể sử dụng chứng chỉ này trên nhiều thiết bị khác nhau miễn là bạn đã cài đặt ứng dụng trên thiết bị đó.",
  },
];
const Question = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px 0" }}>
      <h2 style={{ fontSize: "24px", padding: "50px 0 0" }}>
        Câu hỏi thường gặp
      </h2>
      <p style={{ fontSize: "16px", color: "#9CA3AF", padding: "10px 0" }}>
        Dưới đây là một số câu hỏi thường gặp:
      </p>
      <div>
        {arrayQuestion.map((item, index) => (
          <div key={index} className="question__item">
            <h3 style={{ fontSize: "18px" }}>{item.title}</h3>
            <p style={{ fontSize: "16px", color: "#9CA3AF" }}>{item.context}</p>
          </div>
        ))}
      </div>
      <div style={{ padding: "50px 0 10px" }}>
        <span style={{ color: "#9CA3AF" }}>
          © 2025{" "}
          <a style={{ color: "#fff" }} href="">
            AnhVu99er
          </a>
          .All Right Reserved
        </span>
      </div>
    </div>
  );
};

export default Question;
