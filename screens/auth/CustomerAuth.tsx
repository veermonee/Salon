import React, { useContext } from 'react';
import { NavContext } from '../../App';
import { MobileLayout } from '../../components/ui/Layout';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Inputs';

export const CustomerLogin: React.FC = () => {
  const { navigate } = useContext(NavContext);

  return (
    <MobileLayout showBack onBack={() => navigate('welcome')} className="p-6">
      <h2 className="text-2xl font-bold mb-8 mt-4 text-gray-900">Customer Login</h2>

      <Input label="📱 Phone Number" prefix="+91" placeholder="9876543210" type="tel" />

      <Button onClick={() => navigate('auth-otp')}>Get OTP</Button>

      <div className="relative my-8 text-center">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
        <div className="relative z-10 inline-block px-4 bg-white text-sm font-medium text-gray-400">OR</div>
      </div>

      <Button variant="outline" className="mb-8" icon={<span className="font-bold text-lg text-blue-500 mr-1">G</span>}>
         Continue with Google
      </Button>

      <div className="text-center">
        <span className="text-gray-500">New User? </span>
        <button onClick={() => navigate('auth-customer-signup')} className="text-blue-600 font-bold ml-1 hover:underline">
          Create Account
        </button>
      </div>
    </MobileLayout>
  );
};

export const CustomerSignup: React.FC = () => {
    const { navigate } = useContext(NavContext);
  
    return (
      <MobileLayout showBack onBack={() => navigate('auth-customer-login')} className="p-6">
        <h2 className="text-2xl font-bold mb-8 mt-4 text-gray-900">Create Customer Account</h2>
  
        <Input label="👤 Full Name" placeholder="e.g. Rahul Kumar" type="text" />
        <Input label="📱 Phone Number" prefix="+91" placeholder="9876543210" type="tel" />
  
        <Button onClick={() => navigate('auth-otp')} className="mt-4">Get OTP</Button>
      </MobileLayout>
    );
  };
