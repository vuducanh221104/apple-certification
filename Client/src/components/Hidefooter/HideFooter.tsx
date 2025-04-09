'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer/Footer';

export default function HideFooter() {
    const pathname = usePathname();
    if (pathname === '/login') return null; // Ẩn footer nếu ở trang login
    if (pathname === '/signIPA') return null; // Ẩn footer nếu ở trang register
    if (pathname === '/signIPA/signCheck') return null; // Ẩn footer nếu ở trang register
    if (pathname === '/signIPA/signPrice') return null; // Ẩn footer nếu ở trang register
    if (pathname === '/dashboard') return null; // Ẩn footer nếu ở trang register
    return <Footer />;
}
