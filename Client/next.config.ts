import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
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
  },
};

export default nextConfig;
