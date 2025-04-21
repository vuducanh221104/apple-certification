"use client";

import { useRouter } from "next/navigation"; // Dùng 'next/navigation' thay vì 'next/router'
import styles from "@/styles/Store.module.scss";
import Image from "next/image";
import images from "@/assets/images";
import UpdatesSection from "@/components/Updated/Update";
import FooterSecond from "@/components/FooterSecond/FooterSecond";
import AppList from "@/components/AppList/AppList";
import AppSingleList from "@/components/AppSingleList/AppSingleList";

const Banner: React.FC = () => {
  const router = useRouter();

  // Xử lý khi nhấn vào ô Input
  const handleFocus = () => {
    router.push("/store/moreApp"); // Chuyển đến trang /search
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image src={images.appBlur} alt="App Blur" className={styles.image}/>
        <div className={styles.content}>
          <p className={styles.title}>
            Trải nghiệm kho ứng dụng đa dạng và tiện lợi ngay hôm nay!
          </p>
          <input className={styles.input} type="text" placeholder="Search on here" onClick={handleFocus}/>
        </div>
      </div>
      {/* Update in Store */}
      <UpdatesSection />
      {/* AppList-1 */}
      <AppList />
      {/* AppList-2 */}
      <AppSingleList />
      {/* Footer */}
      <FooterSecond />
    </div>
    //
  );
};

export default Banner;
