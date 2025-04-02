// AppComponent
import { AppComponents } from '@/types/client';

  
  export const fetchApps = async (): Promise<AppComponents[]> => {
    // Giả lập việc lấy dữ liệu từ API
    return new Promise<AppComponents[]>((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: "CamScanner",
            package: "com.intsig.camscanner",
            rating: 4.8555,
            icon: "",
          },
          {
            name: "VivaVideo",
            package: "com.quvideo.xiaoying",
            rating: 4.7892,
            icon: "",
          },
          {
            name: "Photomath",
            package: "com.photomath",
            rating: 4.7712,
            icon: "",
          },
          {
            name: "TikTok",
            package: "com.musically.tiktok",
            rating: 4.7464,
            icon: "",
          },
          {
            name: "VSCO",
            package: "com.vsco",
            rating: 4.6195,
            icon: "",
          },
          {
            name: "Notability",
            package: "com.notability.app",
            rating: 4.7523,
            icon: "",
          },
          {
            name: "InShot",
            package: "com.inshot.video",
            rating: 4.8573,
            icon: "",
          },
          {
            name: "SnapEdit",
            package: "com.snapedit.app",
            rating: 4.6509,
            icon: "",
          },
          {
            name: "Lightroom",
            package: "com.adobe.lightroom",
            rating: 4.7745,
            icon: "",
          },
          {
            name: "Lightroom",
            package: "com.adobe.lightroom",
            rating: 4.7745,
            icon: "",
          },
          {
            name: "Lightroom",
            package: "com.adobe.lightroom",
            rating: 4.7745,
            icon: "",
          },
          {
            name: "Lightroom",
            package: "com.adobe.lightroom",
            rating: 4.7745,
            icon: "",
          },
          {
            name: "Lightroom",
            package: "com.adobe.lightroom",
            rating: 4.7745,
            icon: "",
          },
          {
            name: "Lightroom",
            package: "com.adobe.lightroom",
            rating: 4.7745,
            icon: "",
          },
          {
            name: "Lightroom",
            package: "com.adobe.lightroom",
            rating: 4.7745,
            icon: "",
          },
          {
            name: "Lightroom",
            package: "com.adobe.lightroom",
            rating: 4.7745,
            icon: "",
          },
          {
            name: "Lightroom",
            package: "com.adobe.lightroom",
            rating: 4.7745,
            icon: "",
          },
          {
            name: "Lightroom",
            package: "com.adobe.lightroom",
            rating: 4.7745,
            icon: "",
          },
          {
            name: "Snapchat",
            package: "com.snapchat.android",
            rating: 4.6618,
            icon: "",
          },
          { name: "MADFUT 25", package: "com.madfut.fut", rating: 4.8842, icon: "" },
        ]);
      }, 1000); // Giả lập thời gian chờ 1s
    });
  };
  

// AppList


// AppSingleList