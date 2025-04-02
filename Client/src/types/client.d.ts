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