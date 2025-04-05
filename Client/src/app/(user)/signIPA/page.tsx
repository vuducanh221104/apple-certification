import React from "react";
import HeaderSign from "@/components/SignIPA/Header/HeaderIPA";
import BannerSign from "@/components/SignIPA/Banner/Banner";
import CertSign from "@/components/SignIPA/Cert/Cert";
import QuestionSign from "@/components/SignIPA/Question/Question";

const PageSingIPA = () => {
  return (
    <div
      style={{ backgroundColor: "#000000", padding: "0 16px", color: "#fff" }}
    >
      <HeaderSign />
      <BannerSign />
      <CertSign />
      <QuestionSign />
    </div>
  );
};

export default PageSingIPA;
