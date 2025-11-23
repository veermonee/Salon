import React, { useContext, useState } from 'react';
import { NavContext } from '../../App';
import { MobileLayout } from '../../components/ui/Layout';
import { Star, Check, Clock, CheckCircle2, X } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const CustomerDetail: React.FC = () => {
  const { navigate, selectedSalon } = useContext(NavContext);
  const [selectedServices, setSelectedServices] = useState<string[]>(['s1', 's2']); // Pre-selected for demo

  if (!selectedSalon) return null;

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
        prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const totalPrice = selectedSalon.services
    .filter(s => selectedServices.includes(s.id))
    .reduce((sum, s) => sum + s.price, 0);

  return (
    <MobileLayout className="bg-gray-50 relative flex flex-col h-full">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24">
            {/* Hero Image */}
            <div className="relative h-56 bg-gray-300">
                <img src={selectedSalon.photoUrl} alt={selectedSalon.name} className="w-full h-full object-cover" />
                <button 
                    onClick={() => navigate('customer-home')}
                    className="absolute top-4 left-4 bg-white/90 p-2 rounded-full shadow-md backdrop-blur-sm"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
            </div>

            {/* Header Info */}
            <div className="bg-white p-5 border-b border-gray-100">
                <div className="flex justify-between items-start mb-2">
                    <h1 className="text-xl font-extrabold text-gray-900 leading-tight">{selectedSalon.name}</h1>
                    {selectedSalon.isOpen ? (
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">OPEN</span>
                    ) : (
                        <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-md border border-red-100">CLOSED</span>
                    )}
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-2 font-medium">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-gray-900 font-bold mr-1">{selectedSalon.rating}</span>
                    <span className="text-gray-400">({selectedSalon.reviewCount} ratings)</span>
                </div>
                <div className="text-sm text-gray-500">{selectedSalon.address} • {selectedSalon.distance}</div>
            </div>

            {/* Queue Card */}
            {selectedSalon.isOpen && (
                <div className="m-5 bg-orange-50 border border-orange-100 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 text-orange-600 font-bold mb-2">
                        <Clock className="w-5 h-5" />
                        <h3>Live Queue Status</h3>
                    </div>
                    <div className="text-gray-800 font-medium text-sm mb-1">Queue: {selectedSalon.queueCount} people waiting</div>
                    <div className="text-2xl font-extrabold text-gray-900">~{selectedSalon.estimatedWaitMinutes} minutes</div>
                </div>
            )}

            {/* Services */}
            <div className="bg-white p-5 mb-2">
                <h3 className="font-bold text-lg mb-4">Services (Tap to select)</h3>
                <div className="space-y-1">
                    {selectedSalon.services.map(service => {
                        const isSelected = selectedServices.includes(service.id);
                        return (
                            <div 
                                key={service.id}
                                onClick={() => toggleService(service.id)}
                                className={`flex justify-between items-center p-3 rounded-xl border transition-all cursor-pointer ${isSelected ? 'border-gray-900 bg-gray-50' : 'border-transparent hover:bg-gray-50'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isSelected ? 'bg-gray-900 border-gray-900' : 'border-gray-300'}`}>
                                        {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                                    </div>
                                    <span className={`font-medium ${isSelected ? 'text-gray-900' : 'text-gray-600'}`}>{service.name}</span>
                                </div>
                                <span className="font-bold">₹{service.price}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Facilities */}
            <div className="bg-white p-5 mb-2">
                <h3 className="font-bold text-lg mb-4">Facilities</h3>
                <div className="grid grid-cols-2 gap-3">
                    {selectedSalon.facilities.map(facility => (
                        <div key={facility} className="flex items-center text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                            {facility}
                        </div>
                    ))}
                    <div className="flex items-center text-sm text-gray-400 line-through">
                        <X className="w-4 h-4 mr-2" /> TV
                    </div>
                </div>
            </div>

             {/* About */}
             <div className="bg-white p-5">
                <h3 className="font-bold text-lg mb-4">About</h3>
                <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between border-b border-gray-50 pb-2">
                        <span>Owner</span>
                        <span className="font-medium text-gray-900">{selectedSalon.ownerName}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-50 pb-2">
                        <span>Experience</span>
                        <span className="font-medium text-gray-900">8 Years</span>
                    </div>
                    <div className="flex justify-between pt-1">
                        <span>Timings</span>
                        <span className="font-medium text-gray-900">10:00 AM - 9:00 PM</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Fixed Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 pb-8 md:pb-4 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-20 flex justify-between items-center">
            <div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Total</div>
                <div className="text-2xl font-extrabold text-gray-900">₹{totalPrice}</div>
            </div>
            <Button className="w-auto px-8 py-3 rounded-full text-sm" onClick={() => alert('Booking Confirmed! Demo ends here.')}>
                Book Now →
            </Button>
        </div>
    </MobileLayout>
  );
};
