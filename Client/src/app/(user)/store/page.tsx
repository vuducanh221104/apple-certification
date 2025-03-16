'use client';

import { useRouter } from 'next/navigation'; // Dùng 'next/navigation' thay vì 'next/router'
import styles from '../../../styles/Store.module.scss';

import appBlur from '../../../assets/img/app_blur.png'; // Khai báo ảnh blur
import Image from 'next/image';
import { Input } from '@mui/material';
import UpdatesSection from '@/components/Update/update';
import FooterSecond from '@/components/FooterSecond/FooterSecond';
import AppList from '@/components/AppList/AppList';
import AppSingleList from '@/components/AppSingleList/AppSingleList';

const Banner: React.FC = () => {
    const router = useRouter();

    // Xử lý khi nhấn vào ô Input
    const handleFocus = () => {
        router.push('/store/search'); // Chuyển đến trang /search
    };

    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <Image src={appBlur} alt="App Blur" layout="responsive" />
                <div className={styles.content}>
                    <p className={styles.title}>Trải nghiệm kho ứng dụng đa dạng và tiện lợi ngay hôm nay!</p>
                    <Input
                        className={styles.input}
                        placeholder="Tìm kiếm"
                        onClick={handleFocus} // Khi nhấn vào ô input, chuyển đến /searchh
                    />
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
