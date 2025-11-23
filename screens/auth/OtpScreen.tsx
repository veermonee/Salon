import React, { useContext, useEffect, useState } from 'react';
import { NavContext } from '../../App';
import { MobileLayout } from '../../components/ui/Layout';
import { Button } from '../../components/ui/Button';
import { OtpInput } from '../../components/ui/Inputs';
import { UserRole } from '../../types';

export const OtpScreen: React.FC = () => {
  const { navigate, role } = useContext(NavContext);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleVerify = () => {
    if (role === UserRole.OWNER) {
        // If owner, go to payment. Logic: Check if already paid (mocked here, assume new owner needs to pay)
        navigate('auth-payment'); 
    } else {
        navigate('auth-success');
    }
  };

  return (
    <MobileLayout showBack onBack={() => navigate('welcome')} className="p-6 text-center pt-12">
      <h2 className="text-2xl font-bold mb-2">Verify OTP</h2>
      <p className="text-gray-500 mb-8">We sent a 6-digit OTP to<br /><strong className="text-gray-900">+91 98XXX XX321</strong></p>

      <OtpInput />

      <Button onClick={handleVerify} className="mb-6">Verify OTP</Button>
      
      <div className="text-sm text-gray-500 font-medium">
        {timer > 0 ? (
          <span>Resend in 00:{timer < 10 ? `0${timer}` : timer} sec</span>
        ) : (
          <button className="text-blue-600 hover:underline">Resend OTP</button>
        )}
      </div>
    </MobileLayout>
  );
};
