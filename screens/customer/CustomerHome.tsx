import React, { useContext, useState } from 'react';
import { NavContext } from '../../App';
import { MobileLayout } from '../../components/ui/Layout';
import { MOCK_SALONS } from '../../constants';
import { MapPin, Search, Star, ChevronDown, Clock } from 'lucide-react';

export const CustomerHome: React.FC = () => {
  const { navigate, setSelectedSalon } = useContext(NavContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSalonSelect = (salon: any) => {
    setSelectedSalon(salon);
    navigate('customer-detail');
  };

  const filteredSalons = MOCK_SALONS.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MobileLayout className="pb-4">
      {/* Header */}
      <div className="px-6 pt-6 pb-2 bg-white sticky top-0 z-10">
        <div className="flex items-center text-gray-800 font-bold text-lg mb-4">
          <MapPin className="w-5 h-5 mr-2 text-gray-900 fill-current" />
          <span>Pilibhit</span>
          <ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
        </div>
        
        <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input 
                type="text" 
                placeholder="Search salon..." 
                className="w-full bg-gray-100 text-gray-900 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-gray-200 transition-all font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      </div>

      <div className="px-6 py-6 bg-gray-100 min-h-full">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Near You</h2>

        <div className="space-y-4">
            {filteredSalons.map(salon => (
                <div key={salon.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 active:scale-[0.99] transition-transform">
                    <div className="flex gap-4">
                        <img src={salon.photoUrl} alt={salon.name} className="w-20 h-20 rounded-xl object-cover bg-gray-200" />
                        
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-bold text-gray-900 line-clamp-1">{salon.name}</h3>
                                {salon.isOpen ? (
                                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 whitespace-nowrap">OPEN</span>
                                ) : (
                                    <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100 whitespace-nowrap">CLOSED</span>
                                )}
                            </div>
                            
                            <div className="flex items-center text-xs text-gray-500 mb-2 font-medium">
                                <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                                <span className="text-gray-700 mr-1">{salon.rating}</span>
                                <span>({salon.reviewCount})</span>
                            </div>

                            <div className="text-xs text-gray-500 mb-3 truncate">
                                {salon.services.slice(0, 2).map(s => `${s.name} ₹${s.price}`).join(' | ')}
                            </div>

                            {salon.isOpen ? (
                                <div className={`text-xs font-semibold flex items-center mb-3 ${salon.queueCount === 0 ? 'text-emerald-600' : 'text-orange-500'}`}>
                                    <Clock className="w-3 h-3 mr-1" />
                                    {salon.queueCount === 0 ? 'No Waiting' : `Queue: ${salon.queueCount} • ~${salon.estimatedWaitMinutes} min`}
                                </div>
                            ) : (
                                <div className="text-xs text-gray-400 mb-3 font-medium">Currently Closed</div>
                            )}

                            <div className="flex justify-between items-center mt-2">
                                <span className="text-xs text-gray-400 font-medium">{salon.distance}</span>
                                <button 
                                    onClick={() => handleSalonSelect(salon)}
                                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${salon.isOpen ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500'}`}
                                >
                                    {salon.isOpen ? 'Book Now →' : 'View Details'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </MobileLayout>
  );
};
