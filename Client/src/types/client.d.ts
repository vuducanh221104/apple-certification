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