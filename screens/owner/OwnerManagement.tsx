import React, { useContext } from 'react';
import { NavContext } from '../../App';
import { MobileLayout } from '../../components/ui/Layout';
import { Button } from '../../components/ui/Button';
import { OwnerBottomNav } from '../../components/owner/OwnerBottomNav';
import { ChevronRight, Settings, FileText, Scissors, Wifi, LogOut, Download } from 'lucide-react';

export const OwnerManagement: React.FC = () => {
  const { navigate, setRole } = useContext(NavContext);

  const handleLogout = () => {
      setRole(1); // Reset to Guest (simplified logic)
      navigate('welcome');
  }

  const MenuCard = ({ title, icon, children, action }: any) => (
      <div className="bg-white p-4 mb-3 border-b border-gray-100 last:border-b-0">
          <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2 font-bold text-gray-800">
                  {icon} {title}
              </div>
              {action}
          </div>
          {children}
      </div>
  );

  return (
    <MobileLayout className="bg-gray-100 pb-20 relative h-full">
      
      {/* Notification Card */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 m-4 rounded-r-lg shadow-sm">
          <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-2">
              <span className="animate-pulse">🔔</span> New Booking Request!
          </h3>
          <div className="bg-white/60 p-3 rounded text-sm mb-3">
              <div className="flex justify-between mb-1"><span>Customer:</span> <strong>Veer</strong></div>
              <div className="flex justify-between mb-1"><span>Service:</span> <span>Haircut + Shaving</span></div>
              <div className="flex justify-between"><span>Token:</span> <strong>#25</strong></div>
          </div>
          <div className="flex gap-2">
              <button className="flex-1 bg-gray-900 text-white py-2 rounded font-bold text-xs">Accept</button>
              <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded font-bold text-xs">Reject</button>
          </div>
      </div>

      <div className="space-y-px">
        {/* Earnings */}
        <MenuCard title="Earnings Report" icon={<FileText className="w-5 h-5 text-blue-500"/>} action={<button className="text-xs bg-gray-100 px-2 py-1 rounded">Download PDF</button>}>
            <div className="flex justify-between bg-gray-50 p-3 rounded-lg mb-3">
                <div className="text-center">
                    <span className="text-xs text-gray-500">Today</span>
                    <div className="font-bold">₹180</div>
                </div>
                <div className="text-center border-l border-gray-200 pl-4">
                    <span className="text-xs text-gray-500">Week</span>
                    <div className="font-bold">₹980</div>
                </div>
                <div className="text-center border-l border-gray-200 pl-4">
                    <span className="text-xs text-gray-500">Month</span>
                    <div className="font-bold">₹4,250</div>
                </div>
            </div>
            {/* Simple Bar Chart Visualization */}
            <div className="space-y-2">
                <div className="flex items-center text-xs">
                    <span className="w-8 text-gray-400">Mon</span>
                    <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden ml-2">
                        <div className="h-full bg-gray-800 w-[40%]"></div>
                    </div>
                </div>
                <div className="flex items-center text-xs">
                    <span className="w-8 text-gray-400">Tue</span>
                    <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden ml-2">
                        <div className="h-full bg-gray-800 w-[80%]"></div>
                    </div>
                </div>
            </div>
        </MenuCard>

        {/* Services */}
        <MenuCard title="Services & Prices" icon={<Scissors className="w-5 h-5 text-pink-500"/>}>
            <div className="space-y-2 mb-3">
                <div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                    <span>Haircut</span>
                    <div className="flex items-center gap-2">
                        <span className="font-bold">₹30</span>
                        <span className="text-xs text-blue-600 bg-blue-50 px-1 rounded">Edit</span>
                    </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span>Shaving</span>
                    <div className="flex items-center gap-2">
                        <span className="font-bold">₹20</span>
                        <span className="text-xs text-blue-600 bg-blue-50 px-1 rounded">Edit</span>
                    </div>
                </div>
            </div>
            <Button variant="outline" className="py-2 text-xs h-8">+ Add New Service</Button>
        </MenuCard>

        {/* Facilities */}
        <MenuCard title="Facilities" icon={<Wifi className="w-5 h-5 text-emerald-500"/>}>
            <div className="grid grid-cols-2 gap-2 mb-3">
                <label className="flex items-center text-sm"><input type="checkbox" checked className="mr-2 accent-black" readOnly/> AC</label>
                <label className="flex items-center text-sm"><input type="checkbox" checked className="mr-2 accent-black" readOnly/> WiFi</label>
                <label className="flex items-center text-sm"><input type="checkbox" checked className="mr-2 accent-black" readOnly/> Water</label>
                <label className="flex items-center text-sm"><input type="checkbox" className="mr-2 accent-black" readOnly/> TV</label>
            </div>
            <Button className="py-2 text-xs h-8">Save Changes</Button>
        </MenuCard>

        {/* Settings Links */}
        <div className="bg-white p-4">
            <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2"><Settings className="w-5 h-5 text-gray-500"/> Store Settings</h3>
            <div className="space-y-3 text-sm font-medium text-gray-600">
                <div className="flex justify-between items-center py-2 border-b border-gray-50">Edit Store Photo <ChevronRight className="w-4 h-4 text-gray-300"/></div>
                <div className="flex justify-between items-center py-2 border-b border-gray-50">Update Location (GPS) <ChevronRight className="w-4 h-4 text-gray-300"/></div>
                <div className="flex justify-between items-center py-2">Subscription Plan <span className="text-blue-600">Basic</span></div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
                <button onClick={handleLogout} className="w-full text-red-500 font-bold text-sm flex items-center justify-center gap-2 py-2">
                    <LogOut className="w-4 h-4"/> Logout
                </button>
            </div>
        </div>
      </div>
      <div className="h-8"></div>
      <OwnerBottomNav />
    </MobileLayout>
  );
};
