'use client';

import { useRouter } from 'next/navigation'; // Dùng 'next/navigation' thay vì 'next/router'
import styles from '../../../styles/Store.module.scss';

import appBlur from '../../../assets/img/app_blur.png'; // Khai báo ảnh blur
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import { Input } from '@mui/material';
import UpdatesSection from '@/components/Update/update';

const Banner: React.FC = () => {
    const router = useRouter();

    // Xử lý khi nhấn vào ô Input
    const handleFocus = () => {
        router.push('/store/search'); // Chuyển đến trang /search
    };

    return (
        <Container fluid>
            <div className={styles.banner}>
                <Image src={appBlur} alt="App Blur" layout="responsive" />
                <div className={styles.content}>
                    <p className={styles.title}>Trải nghiệm kho ứng dụng đa dạng và tiện lợi ngay hôm nay!</p>
                    <Input
                        className={styles.input}
                        placeholder="Tìm kiếm"
                        onFocus={handleFocus} // Khi nhấn vào ô input, chuyển đến /searchh
                    />
                </div>
            </div>
            {/* Update in Store */}
            <UpdatesSection />
            {/* App-2 */}

            {/* App-3 */}
        </Container>
        //
    );
};

export default Banner;
