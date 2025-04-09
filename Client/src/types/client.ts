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