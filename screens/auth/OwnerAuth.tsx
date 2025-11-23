import React, { useContext } from 'react';
import { NavContext } from '../../App';
import { MobileLayout } from '../../components/ui/Layout';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Inputs';
import { MapPin, ImagePlus } from 'lucide-react';

export const OwnerLogin: React.FC = () => {
  const { navigate } = useContext(NavContext);

  return (
    <MobileLayout showBack onBack={() => navigate('welcome')} className="p-6">
      <h2 className="text-2xl font-bold mb-8 mt-4 text-gray-900">Salon Owner Login</h2>
      <Input label="📱 Phone Number" prefix="+91" placeholder="9876543210" type="tel" />
      <Button onClick={() => navigate('auth-otp')}>Get OTP</Button>
      <div className="mt-8 text-center">
        <button onClick={() => navigate('auth-owner-signup')} className="text-blue-600 font-bold hover:underline">
          New Salon? Register Your Salon
        </button>
      </div>
    </MobileLayout>
  );
};

export const OwnerSignup: React.FC = () => {
  const { navigate } = useContext(NavContext);

  return (
    <MobileLayout showBack onBack={() => navigate('auth-owner-login')} className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Register Your Salon</h2>

      <Input label="👤 Owner Name" placeholder="Owner Name" />
      <Input label="📱 Phone Number" prefix="+91" placeholder="Phone Number" type="tel" />
      <Input label="🏪 Salon Name" placeholder="Salon Name" />

      <label className="block text-sm font-semibold mb-2 text-gray-600">📍 Salon Location</label>
      <Button variant="outline" className="mb-6 py-3 border-dashed" icon={<MapPin className="w-4 h-4" />}>
        AUTO-DETECT LOCATION
      </Button>

      <label className="block text-sm font-semibold mb-2 text-gray-600">🖼️ Upload Store Photo</label>
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50 mb-6 cursor-pointer hover:bg-gray-100 transition-colors">
        <ImagePlus className="w-8 h-8 mx-auto text-gray-400 mb-2" />
        <span className="text-gray-500 text-sm font-medium">Tap to upload image</span>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl mb-6 text-center border border-blue-100">
        <div className="text-sm text-blue-800">
          💰 Registration Fee: <strong className="text-lg">₹20</strong>
          <div className="text-xs opacity-75 mt-1">(Pay to activate store after OTP)</div>
        </div>
      </div>

      <Button onClick={() => navigate('auth-otp')}>Proceed to OTP Verification</Button>
    </MobileLayout>
  );
};

export const OwnerPayment: React.FC = () => {
    const { navigate } = useContext(NavContext);

    return (
        <MobileLayout showBack onBack={() => navigate('auth-otp')} className="p-6 flex flex-col justify-center">
             <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Store Activation Fee</h2>
                <div className="text-5xl font-extrabold text-gray-900 my-8">₹20</div>
                
                <ul className="text-left bg-gray-50 p-6 rounded-xl space-y-3 mb-8 text-gray-600 text-sm border border-gray-100">
                    <li className="flex items-center"><span className="w-2 h-2 bg-black rounded-full mr-3"></span>One-time only at signup</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-black rounded-full mr-3"></span>Helps prevent fake stores listing</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-black rounded-full mr-3"></span>Lifetime validity</li>
                </ul>

                <Button variant="success" onClick={() => navigate('auth-success')} className="py-5 text-lg">
                    PAY ₹20 (UPI / Cards)
                </Button>
                <div className="mt-4 text-xs text-gray-400">Secure Payment via Razorpay/PhonePe</div>
            </div>
        </MobileLayout>
    );
}
