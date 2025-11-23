import React, { useContext } from 'react';
import { NavContext } from '../App';
import { MobileLayout } from '../components/ui/Layout';
import { Button } from '../components/ui/Button';
import { UserRole } from '../types';
import { Scissors } from 'lucide-react';

export const WelcomeScreen: React.FC = () => {
  const { navigate, setRole } = useContext(NavContext);

  const handleCustomer = () => {
    setRole(UserRole.CUSTOMER);
    navigate('auth-customer-login');
  };

  const handleOwner = () => {
    setRole(UserRole.OWNER);
    navigate('auth-owner-login');
  };

  return (
    <MobileLayout className="p-8 flex flex-col items-center justify-center min-h-full">
      <div className="w-24 h-24 bg-gray-900 rounded-3xl flex items-center justify-center mb-8 shadow-2xl rotate-3 hover:rotate-6 transition-transform">
        <Scissors className="text-white w-12 h-12" />
      </div>
      
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2 text-center tracking-tight">
        Welcome to SmartSalon
      </h1>
      <p className="text-gray-500 text-center mb-12 text-lg font-medium">
        “Line me lagne ka jhanjhat khatam!”
      </p>
      
      <div className="w-full space-y-4">
        <Button onClick={handleCustomer}>I am a Customer</Button>
        <Button variant="secondary" onClick={handleOwner}>I am a Salon Owner</Button>
      </div>
      
      <div className="mt-12 text-xs text-gray-400 text-center">
        v1.0.0 • Made with ❤️ in India
      </div>
    </MobileLayout>
  );
};
