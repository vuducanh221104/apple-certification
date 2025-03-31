import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { serviceData, ServicePlan } from "./serviceData";
import styles from "./styleService/serviceCard.module.scss";
import Image from "next/image";

const ServiceCards: React.FC = () => {
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
              <h2>{plan.title}</h2>
              <h3>{plan.price}</h3>
              <p>{plan.device}</p>

              {/* Danh sách 1 */}
              <ul className={styles.featureList}>
                {plan.features1.map((feature, idx) => (
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
                      <span className={styles.detailText}>{feature.detail}</span>
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
                      <span className={styles.detailText}>{feature.detail}</span>
                    )}
                  </li>
                ))}
              </ul>

              <Button className={styles.button}>Mua ngay</Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceCards;
