import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import "./header.scss"

const headerHomePage = () => {
  return (
    <div>
      <section>
        <Container style={{marginTop: "64px", padding: "0 16px", textAlign: "center"}}>    
          <h3>UnKeyAp</h3>
          <span>Kho ứng dụng bên thứ 3 dành cho iPhone/iPad</span>
          <p>
            Kho ứng dụng phong phú với hơn 10,000+ ứng dụng đa dạng, dễ dàng cài
            đặt và sử dụng.
          </p>
        </Container>
        <div>
          <Image
            src="https://www.unkeyapp.com/images/banner_2x.png"
            alt="logo"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </section>
    </div>
  );
};

export default headerHomePage;
