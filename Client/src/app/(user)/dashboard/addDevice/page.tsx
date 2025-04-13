import React from 'react'
import styles from '@/styles/dasboard/addDevice.module.scss'
import Link from 'next/link'

const packages = [
  {
    id: 1,
    name: 'iPhone 72 giờ',
    price: '50.000 VND',
    description: 'Gói này bạn phải cần chờ 3 đến 4 ngày',
    features: [
      'Certificate valid for 10 months',
      '300 days warranty',
      'Certificate for a single device only',
      'This package includes Certificate File and App Installation Link',
      'This package does not support hidden iCloud and bypassed devices',
      'Certificate for all iPhone, iPad, iPod, AppleTV'
    ]
  },
  {
    id: 2,
    name: 'iPhone 24 giờ',
    price: '100.000 VND',
    status: 'Hết hàng',
    features: [
      'Certificate valid for 11 months',
      '300 days warranty',
      'Certificate for a single device only',
      'This package includes Certificate File and App Installation Link',
      'This package does not support hidden iCloud and bypassed devices',
      'Certificate for all iPhone, iPad, iPod, AppleTV'
    ]
  },
  {
    id: 3,
    name: 'iPhone Tức thì',
    price: '150.000 VND',
    status: 'Hết hàng',
    features: [
      'Certificate valid for 12 months',
      '300 days warranty',
      'Certificate for a single device only',
      'This package includes Certificate File and App Installation Link',
      'This package does not support hidden iCloud and bypassed devices',
      'Certificate for all iPhone, iPad, iPod, AppleTV'
    ]
  },
  {
    id: 4,
    name: 'iPhone UNBAN tức thì',
    price: '180.000 VND',
    description: 'Gói này bạn có thể dùng cho các thiết bị BLACKLIST, có thể sử dụng ngay lập tức',
    features: [
      'Certificate valid for 12 months',
      '300 days warranty',
      'Certificate for a single device only',
      'This package includes Certificate File and App Installation Link',
      'This package does not support hidden iCloud and bypassed devices'
    ]
  },
  {
    id: 5,
    name: 'iPad Tức thì',
    price: '80.000 VND',
    description: 'Gói Này bạn Không Cần Chờ Sử Dụng luôn cho thiết bị iPad',
    features: [
      'Certificate valid for 12 months',
      '300 days warranty',
      'Certificate for a single device only',
      'This package includes Certificate File and App Installation Link',
      'This package does not support hidden iCloud and bypassed devices'
    ]
  }
]

function AddDevicePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.iconContainer}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#4F86FB"></rect><rect x="8" y="5" width="8" height="14" rx="2" stroke="white" stroke-width="1.5"></rect><line x1="10" y1="17" x2="14" y2="17" stroke="white" stroke-width="1.5" stroke-linecap="round"></line></svg>
        </div>
        <h1>Thêm thiết bị</h1>
        <p>Thêm thiết bị vào tài khoản của bạn, sau khi thêm và được Apple duyệt sẽ tự động cấp chứng chỉ trong phần cài đặt.</p>
      </div>

      <div className={styles.deviceInfo}>
        <h2>THÔNG TIN THIẾT BỊ</h2>
        <input
          type="text"
          placeholder="Đặt tên cho thiết bị của bạn"
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Nhập UUID"
          className={styles.input}
        />
      </div>

      <h2 className={styles.uuidTitle}>UUID</h2>
      <div className={styles.uuidSection}>
        <a href="#" className={styles.uuidLink + ' ' + styles.uuidLinkBorder}>Lấy UUID</a>
        <a href="#" className={styles.uuidLink}>Hướng dẫn lấy UUID</a>
      </div>

      <h2 className={styles.packageTitle}>CHỌN MỘT GÓI:</h2>
      <div className={styles.packagesGrid}>
        {packages.map((pkg) => (
          <div 
            key={pkg.id} 
            className={`${styles.package} ${pkg.status === 'Hết hàng' ? styles.expired : ''}`}
          >
            <h3>{pkg.name}</h3>
            <div className={styles.price}>{pkg.price}</div>
            {pkg.description && (
              <div className={styles.description}>{pkg.description}</div>
            )}
            {pkg.status && (
              <div className={styles.status}>{pkg.status}</div>
            )}
            <ul>
              {pkg.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <Link href="/dashboard/addDevice">
        <button className={styles.button}>Thêm thiết bị</button>
        </Link>
      </div>
    </div>
  )
}

export default AddDevicePage