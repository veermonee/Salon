import React, { useState, useEffect } from 'react';
import { ScreenName, UserRole, NavContextType, Salon } from './types';
import { MobileLayout } from './components/ui/Layout';
import { WelcomeScreen } from './screens/Welcome';
import { CustomerLogin, CustomerSignup } from './screens/auth/CustomerAuth';
import { OwnerLogin, OwnerSignup, OwnerPayment } from './screens/auth/OwnerAuth';
import { OtpScreen } from './screens/auth/OtpScreen';
import { SuccessScreen } from './screens/auth/SuccessScreen';
import { CustomerHome } from './screens/customer/CustomerHome';
import { CustomerDetail } from './screens/customer/CustomerDetail';
import { OwnerDashboard } from './screens/owner/OwnerDashboard';
import { OwnerManagement } from './screens/owner/OwnerManagement';
import { MOCK_SALONS } from './constants';

// Create Navigation Context
export const NavContext = React.createContext<NavContextType>({
  currentScreen: 'welcome',
  navigate: () => {},
  goBack: () => {},
  role: UserRole.GUEST,
  setRole: () => {},
  selectedSalon: null,
  setSelectedSalon: () => {}
});

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('welcome');
  const [history, setHistory] = useState<ScreenName[]>(['welcome']);
  const [role, setRole] = useState<UserRole>(UserRole.GUEST);
  const [selectedSalon, setSelectedSalon] = useState<Salon | null>(null);

  const navigate = (screen: ScreenName) => {
    setHistory(prev => [...prev, screen]);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop(); // Remove current
      const prevScreen = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      setCurrentScreen(prevScreen);
    }
  };

  // Render specific screen based on state
  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen />;
      
      // Auth Flows
      case 'auth-customer-login':
        return <CustomerLogin />;
      case 'auth-customer-signup':
        return <CustomerSignup />;
      case 'auth-owner-login':
        return <OwnerLogin />;
      case 'auth-owner-signup':
        return <OwnerSignup />;
      case 'auth-otp':
        return <OtpScreen />;
      case 'auth-payment':
        return <OwnerPayment />;
      case 'auth-success':
        return <SuccessScreen />;

      // Customer Flows
      case 'customer-home':
        return <CustomerHome />;
      case 'customer-detail':
        return <CustomerDetail />;

      // Owner Flows
      case 'owner-dashboard':
        return <OwnerDashboard />;
      case 'owner-management':
        return <OwnerManagement />;

      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <NavContext.Provider value={{ currentScreen, navigate, goBack, role, setRole, selectedSalon, setSelectedSalon }}>
        {renderScreen()}
    </NavContext.Provider>
  );
};

export default App;
