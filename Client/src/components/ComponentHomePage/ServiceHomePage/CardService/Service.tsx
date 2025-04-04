import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { serviceData } from "./serviceData";
import { ServicePlan } from "@/types/client";
import styles from "./ServiceCard.module.scss";
import Image from "next/image";
import {
  ClockCircleOutlined,
  HourglassOutlined,
  MobileOutlined,
  SafetyOutlined,
  GiftOutlined,
  CrownOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const ServiceCards: React.FC = () => {
  // Hàm trả về icon tương ứng
  const getFeatureIcon = (featureText: string) => {
    switch (featureText) {
      case "Kích hoạt gói":
        return <ClockCircleOutlined className={styles.featureIcon} />;
      case "Thời hạn sử dụng":
        return <HourglassOutlined className={styles.featureIcon} />;
      case "Tương thích mọi thiết bị":
        return <MobileOutlined className={styles.featureIcon} />;
      case "Hỗ trợ bảo hành":
        return <SafetyOutlined className={styles.featureIcon} />;
      case "Quà tặng":
        return <GiftOutlined className={styles.featureIcon} />;
      default:
        return null;
    }
  };

  return (
    <Container className={styles.container}>
      <Row>
        {serviceData.map((plan: ServicePlan, index: number) => (
          <Col key={index} xs={12} lg={6} className={styles.cardCol}>
            <div
              className={styles.card}
              style={{
                backgroundImage: `url(${plan.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className={styles.titleWrapper}>
                <CrownOutlined className={styles.crownIcon} />
                <h2 className={styles.title}>{plan.title}</h2>
              </div>
              <h3>{plan.price}</h3>
              <p>{plan.device}</p>

              {/* Danh sách 1 */}
              <ul className={styles.featureList}>
                {plan.features1.map((feature, idx) => (
                  <li key={idx}>
                    <span className={styles.featureItem}>
                      <span className={styles.featureIcon}>
                        {getFeatureIcon(feature.text)}
                      </span>
                      <span className={styles.featureText}>{feature.text}</span>
                    </span>
                    {feature.included !== undefined ? (
                      <Image
                        src={
                          feature.included
                            ? "https://www.unkeyapp.com/svg/ic_check_cricle.svg"
                            : "https://www.unkeyapp.com/svg/ic_close_cricle.svg"
                        }
                        alt={feature.included ? "Included" : "Not included"}
                        width={20}
                        height={20}
                      />
                    ) : (
                      <span className={styles.detailText}>
                        {feature.detail}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              {/* Đường kẻ phân chia */}
              <div className={styles.divider}></div>

              {/* Danh sách 2 */}
              <ul className={styles.featureList}>
                {plan.features2.map((feature, idx) => (
                  <li key={idx}>
                    <span>{feature.text}</span>
                    {feature.included !== undefined ? (
                      <Image
                        src={
                          feature.included
                            ? "https://www.unkeyapp.com/svg/ic_check_cricle.svg"
                            : "https://www.unkeyapp.com/svg/ic_close_cricle.svg"
                        }
                        alt={feature.included ? "Included" : "Not included"}
                        width={20}
                        height={20}
                      />
                    ) : (
                      <span className={styles.detailText}>
                        {feature.detail}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <Link href="/auth/login">
              <Button  className={styles.button}>Mua ngay</Button>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceCards;
