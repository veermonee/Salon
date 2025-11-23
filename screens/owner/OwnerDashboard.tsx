import React, { useState } from 'react';
import { MobileLayout } from '../../components/ui/Layout';
import { OwnerBottomNav } from '../../components/owner/OwnerBottomNav';
import { Mic, UserMinus, UserPlus, Pause, Play } from 'lucide-react';

export const OwnerDashboard: React.FC = () => {
  const [queueCount, setQueueCount] = useState(3);
  const [tokenNumber, setTokenNumber] = useState(24);
  const [isOpen, setIsOpen] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const handleDone = () => {
    if (queueCount > 0) {
      setQueueCount(q => q - 1);
      setTokenNumber(t => t + 1);
    }
  };

  const handleWalkIn = () => {
    setQueueCount(q => q + 1);
  };

  return (
    <MobileLayout className="bg-gray-50 pb-20 relative h-full">
      {/* Header Card */}
      <div className="bg-white p-5 border-b border-gray-200 shadow-sm flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
           <div className="w-12 h-12 bg-gray-200 rounded-full border-2 border-white shadow-sm overflow-hidden">
                <img src="https://picsum.photos/100/100" className="w-full h-full object-cover" alt="Store" />
           </div>
           <div>
               <h1 className="font-bold text-lg text-gray-900 leading-none mb-1">Raju Salon</h1>
               <div className="text-xs text-gray-500 font-medium">Owner Dashboard</div>
           </div>
        </div>
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${isOpen ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-red-50 text-red-700 border-red-200'}`}
        >
            {isOpen ? '🟢 OPEN' : '🔴 CLOSED'}
        </button>
      </div>

      <div className="p-4 space-y-4">
        
        {/* Stats Row */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex divide-x divide-gray-100">
            <div className="flex-1 text-center">
                <div className="text-2xl font-extrabold text-gray-900">₹180</div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Today Earned</div>
            </div>
            <div className="flex-1 text-center">
                <div className="text-2xl font-extrabold text-gray-900">6</div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Customers</div>
            </div>
        </div>

        {/* Live Queue Hero */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Live Queue Status</h3>
            
            <div className="flex justify-around mb-8">
                <div>
                    <span className="block text-5xl font-black text-red-500 mb-1">{queueCount}</span>
                    <span className="text-sm font-semibold text-gray-600">Waiting</span>
                </div>
                <div className="w-px bg-gray-100"></div>
                <div>
                    <span className="block text-5xl font-black text-gray-900 mb-1">#{tokenNumber}</span>
                    <span className="text-sm font-semibold text-gray-600">Current Token</span>
                </div>
            </div>

            <button 
                onClick={handleDone}
                disabled={queueCount === 0}
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-gray-200 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:shadow-none"
            >
                <UserMinus className="w-6 h-6" /> Haircut Done (-1)
            </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 gap-3">
             <button 
                onClick={handleWalkIn}
                className="bg-blue-50 border border-blue-100 text-blue-800 py-3 rounded-xl font-bold text-sm hover:bg-blue-100 transition-colors flex items-center justify-center gap-2"
            >
                <UserPlus className="w-4 h-4" /> Add Walk-in Customer
            </button>
            <div className="grid grid-cols-2 gap-3">
                <button 
                    onClick={() => setIsPaused(true)}
                    className={`border py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors ${isPaused ? 'bg-red-100 border-red-200 text-red-800' : 'bg-white border-gray-200 text-gray-700'}`}
                >
                    <Pause className="w-4 h-4" /> Pause
                </button>
                <button 
                    onClick={() => setIsPaused(false)}
                    className={`border py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors ${!isPaused ? 'bg-emerald-100 border-emerald-200 text-emerald-800' : 'bg-white border-gray-200 text-gray-700'}`}
                >
                    <Play className="w-4 h-4" /> Resume
                </button>
            </div>
        </div>

        {/* Voice AI Banner */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-4 border border-indigo-100 flex items-start gap-3">
            <div className="bg-white p-2 rounded-full shadow-sm text-indigo-600 shrink-0">
                <Mic className="w-5 h-5" />
            </div>
            <div>
                <div className="text-sm font-bold text-indigo-900 mb-1">Voice Assistant Active</div>
                <div className="text-xs text-indigo-700 leading-relaxed">
                    Try saying: <span className="font-bold bg-white/50 px-1 rounded">"Next Customer"</span> or <span className="font-bold bg-white/50 px-1 rounded">"Add Walk-in"</span>
                </div>
            </div>
        </div>

      </div>
      <OwnerBottomNav />
    </MobileLayout>
  );
};
