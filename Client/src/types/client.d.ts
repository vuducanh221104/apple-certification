export interface DashboardMenuItem {
  id: number;
  title: string;
  icon: string;
  path: string;
} 

export interface UserProfileType {
    name: string;
    email: string;
    balance: string;
    avatar: string;
  }
  
  export interface DeviceType {
    id: string;
    name: string;
    type: string;
    addedDate: string;
  }

export interface Update {
    id: number;
    img: string;
    icon: string;
    title: string;
    description: string;
    version: string;
    size: string;
}

// Feature

export interface Feature {
    text: string;
    detail?: string;
    included?: boolean;
  }
  
  export interface ServicePlan {
    title: string;
    price: string;
    device: string;
    features1: Feature[];
    features2: Feature[];
    image: string;
  }

  // Update
 export interface Update {
    id: number;
    img: string;
    icon: string;
    title: string;
    description: string;
    version: string;
    size: string;
  }

  // side featuresHomePage

  export interface SideFeatures {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: string;
  }
  

  // AppSingleList

interface AppSingleLists {
  id: number;
  name: string;
  package: string;
  version: string;
  size: string;
  icon: string;
}

// AppList
interface AppLists {
  id: number;
  name: string;
  package: string;
  version: string;
  size: string;
  icon: string;
}

// AppComponent

export interface AppComponents {
  name: string;
  package: string;
  rating: number;
  icon: string;
}

// PricingItem

export interface PricingItem {
  title: string;
  price: string;
  desc: string;
  features: { text: string; invalid?: boolean }[];
  buttonText: string;
  buttonStyle: string;
  disabled: boolean;
  priceColor: string;
  isFullWidth?: boolean; // << thêm dòng này
}

// Dashboard
export interface DashboardUser {
  icon: string;
  name: string;
  email: string;
  balance: string;
}

export interface UserInfo {
  id: number;
  children: {
    id: number;
    title: string;
    icon: string;
    path: string;
    objects?: {
      icon: string;
      title: string;
      content: string;
      name?: string;
      password?: string;
      passwordOld?: string;
      passwordNew?: string;
      passwordConfirm?: string;
      noteNo?: string;
      noteYes?: string;
      fix: string;
    };
  }[];
}