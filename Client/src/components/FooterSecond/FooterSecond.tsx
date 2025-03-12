'use client';

import Image from 'next/image';
import LogoMoblie from '@/assets/img/mobile.png';
import styles from './FooterSecond.module.scss';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const FooterSecond: React.FC = () => {
    const router = useRouter();
    return (
        <div className={styles.FooterSecond}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Trải nghiệm kho ứng dụng đa dạng <br /> và tiện lợi ngay hôm nay!
                </h2>
                <p className={styles.description}>
                    Nhanh chóng cài đặt và nhân bản ứng dụng không giới hạn trên iPhone/iPad của bạn mà không cần
                    jailbreak. Với hơn 10,000+ ứng dụng phong phú, an toàn và bảo mật, UnKeyApp giúp bạn khám phá và mở
                    rộng tối đa tiềm năng thiết bị của mình.
                </p>
                <div className={styles.buttonGroup}>
                    <Button variant="contained" className={styles.buyNow} onClick={() => router.push('/login')}>
                        Mua ngay
                    </Button>
                    <Button variant="outlined" className={styles.appStore} onClick={() => router.push('/store')}>
                        Kho ứng dụng
                    </Button>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src={LogoMoblie} alt="Mobile Logo" className={styles.image} />
            </div>
        </div>
    );
};

export default FooterSecond;
