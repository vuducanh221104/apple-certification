import styles from "./infoApp.module.scss"
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";

const AppInfo = () => {
  const appData = {
    name: "Discord - Talk, Play, Hang Out",
    version: "271.0",
    size: "95.81 MB",
    rating: "4.7077",
    lastUpdated: "22/03/2025",
    category: "Social Networking",
    ageLimit: "++",
    releaseDate: "21-03-2025",
    logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/cd/a5/d9/cda5d9b0-7207-baf0-8ede-91c53d67e809/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
  };

  return (
    <Container fluid className={styles["app-container"]}>
      {/* Breadcrumb */}
      <Row>
        <Col>
          <div className={styles.breadcrumb}>
            Trang chủ / <a href="#">Discord - Talk, Play, Hang Out</a>
          </div>
        </Col>
      </Row>

      {/* App Header */}
      <div className={styles["app-header"]}>
        <Image src={appData.logo} alt="App Logo" width={60} height={60} />
        <div style={{ padding: "0 24px" }}>
          <div className={styles["app-info"]}>
            <h1>{appData.name}</h1>
            <p>{appData.releaseDate} (1 ngày trước)</p>
          </div>
          <div className={styles.details}>
            <div className={styles.icon}>
              <span className={styles.version}>📱 {appData.version}</span>
            </div>
            <div className={styles.icon}>
              <span className={styles.size}>📂 {appData.size}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <Row className="mt-3">
        <Col xs="auto">
          <Button className={styles["install-btn"]}>Cài đặt</Button>
        </Col>
        <Col>
          <Button className={styles["share-btn"]}>
            <span className="icon">📤</span> Nhận bản ứng dụng
          </Button>
        </Col>
      </Row>

      {/* App Meta Info */}
      <Row className={styles["meta-info"]}>
        <Col xs={4} className={styles["meta-item"]}>
          <span>Đánh giá</span>
          <div className={styles.value}>
            <span className="star-icon">⭐</span> {appData.rating}
          </div>
        </Col>
        <Col xs={4} className={styles["meta-item"]}>
          <span>Phiên bản</span>
          <div className={styles.value}>{appData.version}</div>
        </Col>
        <Col xs={4} className={styles["meta-item"]}>
          <span>Size</span>
          <div className={styles.value}>{appData.size}</div>
        </Col>
        <Col xs={4} className={styles["meta-item"]}>
          <span>Ngày cập nhật</span>
          <div className={styles.value}>{appData.lastUpdated}</div>
        </Col>
        <Col xs={4} className={styles["meta-item"]}>
          <span>Danh mục</span>
          <div className={styles.value}>{appData.category}</div>
        </Col>
        <Col xs={4} className={styles["meta-item"]}>
          <span>Giới hạn tuổi</span>
          <div className={styles.value}>{appData.ageLimit}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default AppInfo;
