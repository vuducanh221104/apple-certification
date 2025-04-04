import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sign.certvn.com",
        pathname: "/css/**",
      },
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com", // ✅ Thêm domain của ảnh
      },
      {
        protocol: "https",
        hostname: "www.unkeyapp.com", // ✅ Thêm domain của ảnh
      },  
      {
        protocol: "https",
        hostname: "sgp1.vultrobjects.com"
      }
    ],
    domains: ['pub-347f55bb45354aa4b7fd847222ed02e7.r2.dev'],
  },
};

export default nextConfig;
