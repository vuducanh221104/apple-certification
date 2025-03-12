'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer/Footer';

export default function HideFooter() {
    const pathname = usePathname();
    if (pathname === '/login') return null; // Ẩn footer nếu ở trang login
    return <Footer />;
}
