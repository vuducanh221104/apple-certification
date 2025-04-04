// AppComponent
import { AppComponents } from "@/types/client";

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
        {
          name: "MADFUT 25",
          package: "com.madfut.fut",
          rating: 4.8842,
          icon: "",
        },
      ]);
    }, 1000); // Giả lập thời gian chờ 1s
  });
};

// AppList

// AppSingleList

// WhyUseHomePage
export const slides = [
  {
    image: "https://www.unkeyapp.com/svg/setting.svg",
    title: "Cài đặt ứng dụng VIP với một chạm",
    content:
      "Tận hưởng hàng ngàn ứng dụng modded, VIP mà không cần jailbreak, thao tác đơn giản chỉ với một lần chạm.",
  },
  {
    image: "https://www.unkeyapp.com/svg/api.svg",
    title: "Tích hợp API cho lập trình viên",
    content:
      "Tích hợp API cho phép lập trình viên truy cập và quản lý ứng dụng, giúp phát triển và quản lý các dự án dễ dàng hơn.",
  },
  {
    image: "https://www.unkeyapp.com/svg/b_check.svg",
    title: "Không cần jailbreak có thể giữ nguyên bảo hành",
    content:
      "Không can thiệp hệ thống, đảm bảo an toàn và vẫn được bảo hành chính hãng.",
  },
  {
    image: "https://www.unkeyapp.com/svg/coppy.svg",
    title: "Nhân bản ứng dụng không giới hạn",
    content:
      "Khả năng nhân bản không giới hạn các ứng dụng yêu thích trên iPhone hoặc iPad, sử dụng nhiều tài khoản cùng lúc mà không gặp bất kỳ trở ngại nào.",
  },
  {
    image: "https://www.unkeyapp.com/svg/apple.svg",
    title: "Hỗ trợ trên tất cả các phiên bản iOS",
    content:
      "Tương thích hoàn hảo với tất cả các phiên bản iOS, từ iOS cũ cho đến iOS mới nhất, đảm bảo không giới hạn trong việc sử dụng ứng dụng.",
  },
  {
    image: "https://www.unkeyapp.com/svg/applicate.svg",
    title: "Truy cập kho ứng dụng không giới hạn",
    content:
      "Tự do truy cập và sử dụng một thư viện ứng dụng phong phú, phù hợp với mọi nhu cầu sử dụng của bạn.",
  },
  {
    image: "https://www.unkeyapp.com/svg/security.svg",
    title: "Bảo mật cao, vượt trội so với Jailbreak",
    content:
      "Bảo mật vượt trội hơn việc jailbreak thiết bị, không can thiệp vào hệ thống và hoàn toàn an toàn cho dữ liệu của bạn.",
  },
  {
    image: "https://www.unkeyapp.com/svg/fast.svg",
    title: "Thời gian kích hoạt nhanh chóng",
    content:
      "Đăng ký và sử dụng ứng dụng ngay lập tức sau khi thanh toán, giúp bạn tiết kiệm thời gian và tận hưởng trải nghiệm liền mạch.",
  },
  {
    image: "	https://www.unkeyapp.com/svg/note.svg",
    title: "Gói dịch vụ đa dạng, phù hợp với mọi nhu cầu",
    content:
      "Các gói dịch vụ linh hoạt từ cơ bản đến cao cấp, phù hợp với mọi nhu cầu của cá nhân đến doanh nghiệp.",
  },
];

// sideFeatureHomePage
import { SideFeatures } from "@/types/client";

export const features: SideFeatures[] = [
  {
    id: 1,
    title: "Sign IPA",
    description:
      "Cho phép người dùng tự tải lên và ký file IPA của riêng họ để cài đặt trên iPhone/iPad mà không cần jailbreak.",
    image: "https://www.unkeyapp.com/images/screenshot1_2x.png",
    icon: "https://www.unkeyapp.com/svg/application_w.svg",
  },
  {
    id: 2,
    title: "Báo cáo tình trạng IPA",
    description:
      "Báo cáo về các IPA đã được ký, giúp người dùng quản lý và theo dõi quá trình ký IPA hiểu quả và tiện lợi.",
    image: "https://www.unkeyapp.com/images/screenshot2_2x.png",
    icon: "https://www.unkeyapp.com/svg/source.svg",
  },
  {
    id: 3,
    title: "API hỗ trợ ký IPA",
    description:
      "Cho phép các lập trình viên và cộng tác viên sử dụng API để ký file IPA tự động thông qua hệ thống của UnkeyApp.",
    image: "https://www.unkeyapp.com/images/screenshot3_2x.png",
    icon: "https://www.unkeyapp.com/svg/sign.svg",
  },
  {
    id: 4,
    title: "Báo cáo tình trạng IPA",
    description:
      "Báo cáo về các IPA đã được ký, giúp người dùng quản lý và theo dõi quá trình ký IPA hiểu quả và tiện lợi.",
    image: "https://www.unkeyapp.com/images/screenshot4_2x.png",
    icon: "https://www.unkeyapp.com/svg/re_note.svg",
  },
  {
    id: 5,
    title: "Bảo mật và tối ưu",
    description:
      "Đảm bảo an toàn tuyệt đối cho các file IPA của người dùng khi tải lên và ký trên hệ thống nhanh chóng và mượt mà.",
    image: "https://www.unkeyapp.com/images/screenshot5_2x.png",
    icon: "https://www.unkeyapp.com/svg/secure_w.svg",
  },
];

// certificateHomePage
export const arrayCertificate = [
  {
    id: 1,
    title: "Ultimate",
    price: "30.000 VND/ năm",
    device: "Cho 1 thiết bị",
    features: [
      "Truy cập kho 10000+ ứng dụng",
      "Tương thích iOS, iPadOS, Android",
      "An toàn và bảo mật cao",
      "Cài đặt và nhân bản không giới hạn",
      "Thao tác nhanh chóng",
    ],
    note: "Chỉ một lần, trong vòng 180 ngày kể từ khi mua, do mất cắp thiết bị hoặc thay thế thiết bị thông qua Apple Care+, bạn có thể nhận chứng chỉ cho thiết bị mới của mình miễn phí. Sau khi thay thế, đơn hàng cũ sẽ hết hiệu lực và thiết bị mới sẽ được xem là gói Standard Plan.",
  },
  {
    id: 1,
    title: "Ultimate",
    price: "30.000 VND/ năm",
    device: "Cho 1 thiết bị",
    features: [
      "Truy cập kho 10000+ ứng dụng",
      "Tương thích iOS, iPadOS, Android",
      "An toàn và bảo mật cao",
      "Cài đặt và nhân bản không giới hạn",
      "Thao tác nhanh chóng",
    ],
    note: "Chỉ một lần, trong vòng 180 ngày kể từ khi mua, do mất cắp thiết bị hoặc thay thế thiết bị thông qua Apple Care+, bạn có thể nhận chứng chỉ cho thiết bị mới của mình miễn phí. Sau khi thay thế, đơn hàng cũ sẽ hết hiệu lực và thiết bị mới sẽ được xem là gói Standard Plan.",
  },
  {
    id: 1,
    title: "Ultimate",
    price: "30.000 VND/ năm",
    device: "Cho 1 thiết bị",
    features: [
      "Truy cập kho 10000+ ứng dụng",
      "Tương thích iOS, iPadOS, Android",
      "An toàn và bảo mật cao",
      "Cài đặt và nhân bản không giới hạn",
      "Thao tác nhanh chóng",
    ],
    note: "Chỉ một lần, trong vòng 180 ngày kể từ khi mua, do mất cắp thiết bị hoặc thay thế thiết bị thông qua Apple Care+, bạn có thể nhận chứng chỉ cho thiết bị mới của mình miễn phí. Sau khi thay thế, đơn hàng cũ sẽ hết hiệu lực và thiết bị mới sẽ được xem là gói Standard Plan.",
  },
];

// QuestionHomePage
export const arrayQuestion = [
  {
    id: 1,
    title: "Tôi có thể sử dụng UnkeyApp trên nhiều thiết bị không?",
    content:
      "UnkeyApp được cấp quyền dựa trên UDID của từng thiết bị, vì vậy mỗi bản quyền chỉ áp dụng cho một thiết bị. Nếu bạn muốn sử dụng trên nhiều thiết bị, vui lòng mua thêm bản quyền cho mỗi thiết bị khác nhau.",
  },
  {
    id: 2,
    title: "Thời gian kích hoạt UnkeyApp là bao lâu?",
    content:
      "Thời gian kích hoạt sẽ được thực hiện ngay sau khi bạn hoàn tất thanh toán.",
  },
  {
    id: 3,
    title: "UnkeyApp có bảo mật không?",
    content:
      "UnkeyApp sử dụng các tiêu chuẩn bảo mật hàng đầu để đảm bảo dữ liệu của bạn luôn an toàn.",
  },
  {
    id: 4,
    title: "Tôi có thể đăng nhập tài khoản UnkeyApp từ thiết bị khác không?",
    content:
      "Bạn có thể đăng nhập tài khoản của mình trên thiết bị khác, nhưng cần đảm bảo bạn có bản quyền hợp lệ trên thiết bị mới.",
  },
];