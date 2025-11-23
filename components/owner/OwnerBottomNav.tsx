import React, { useContext } from 'react';
import { NavContext } from '../../App';
import { Home, Settings } from 'lucide-react';

export const OwnerBottomNav: React.FC = () => {
  const { currentScreen, navigate } = useContext(NavContext);

  const navItemClass = (screen: string) => 
    `flex flex-col items-center justify-center w-full py-3 transition-colors ${currentScreen === screen ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`;

  return (
    <div className="bg-white border-t border-gray-200 flex justify-around items-center absolute bottom-0 w-full pb-safe pt-2">
      <button 
        className={navItemClass('owner-dashboard')} 
        onClick={() => navigate('owner-dashboard')}
      >
        <Home className="w-6 h-6 mb-1" />
        <span className="text-[10px] font-bold tracking-wide">DASHBOARD</span>
      </button>
      <button 
        className={navItemClass('owner-management')} 
        onClick={() => navigate('owner-management')}
      >
        <Settings className="w-6 h-6 mb-1" />
        <span className="text-[10px] font-bold tracking-wide">MANAGE</span>
      </button>
    </div>
  );
};
