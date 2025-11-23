import React, { useContext } from 'react';
import { NavContext } from '../../App';
import { MobileLayout } from '../../components/ui/Layout';
import { Button } from '../../components/ui/Button';
import { UserRole } from '../../types';

export const SuccessScreen: React.FC = () => {
  const { navigate, role } = useContext(NavContext);

  const handleContinue = () => {
    if (role === UserRole.OWNER) {
        navigate('owner-dashboard');
    } else {
        navigate('customer-home');
    }
  };

  return (
    <MobileLayout className="p-6 flex flex-col items-center justify-center text-center">
      <div className="text-7xl mb-6 animate-bounce">🎉</div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Account Created!</h2>
      <p className="text-gray-500 text-lg mb-12">Welcome to SmartSalon</p>
      
      <Button onClick={handleContinue} className="animate-pulse">Go to Home</Button>
    </MobileLayout>
  );
};
