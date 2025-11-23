import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  className?: string;
  showBack?: boolean;
  onBack?: () => void;
  title?: string;
}

export const MobileLayout: React.FC<LayoutProps> = ({ children, className = '', showBack, onBack, title }) => {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100 py-0 md:py-8">
      <div className="w-full max-w-[420px] bg-white md:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative h-screen md:h-[850px] border border-gray-200">
        
        {/* Header (Optional) */}
        {(showBack || title) && (
          <div className="bg-white px-4 py-3 flex items-center border-b border-gray-100 z-10 shrink-0">
            {showBack && (
              <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
            )}
            {title && <h1 className={`font-bold text-lg text-gray-900 ${showBack ? 'ml-2' : ''}`}>{title}</h1>}
          </div>
        )}

        {/* Scrollable Content */}
        <div className={`flex-1 overflow-y-auto no-scrollbar scroll-smooth ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
};
