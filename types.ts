export type ScreenName = 
  | 'welcome' 
  | 'auth-customer-login' 
  | 'auth-customer-signup' 
  | 'auth-owner-login' 
  | 'auth-owner-signup' 
  | 'auth-otp' 
  | 'auth-payment' 
  | 'auth-success'
  | 'customer-home'
  | 'customer-detail'
  | 'owner-dashboard'
  | 'owner-management';

export enum UserRole {
  GUEST = 'GUEST',
  CUSTOMER = 'CUSTOMER',
  OWNER = 'OWNER'
}

export interface Service {
  id: string;
  name: string;
  price: number;
}

export interface Salon {
  id: string;
  name: string;
  ownerName: string;
  photoUrl: string;
  address: string;
  rating: number;
  reviewCount: number;
  distance: string;
  isOpen: boolean;
  queueCount: number;
  estimatedWaitMinutes: number;
  services: Service[];
  facilities: string[];
}

export interface User {
  name: string;
  phone: string;
  role: UserRole;
}

// Navigation Context Type
export interface NavContextType {
  currentScreen: ScreenName;
  navigate: (screen: ScreenName, params?: any) => void;
  goBack: () => void;
  role: UserRole;
  setRole: (role: UserRole) => void;
  selectedSalon: Salon | null;
  setSelectedSalon: (salon: Salon | null) => void;
}
