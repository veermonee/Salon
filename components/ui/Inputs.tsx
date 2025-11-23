import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  prefix?: string;
}

export const Input: React.FC<InputProps> = ({ label, prefix, className = '', ...props }) => {
  return (
    <div className="mb-5">
      {label && <label className="block text-sm font-semibold mb-2 text-gray-600">{label}</label>}
      <div className={`flex items-center border border-gray-200 rounded-xl bg-gray-50 focus-within:ring-2 focus-within:ring-gray-900 focus-within:border-transparent transition-all overflow-hidden ${className}`}>
        {prefix && (
          <span className="pl-4 pr-3 text-gray-500 font-semibold border-r border-gray-200 select-none">
            {prefix}
          </span>
        )}
        <input 
          className="w-full px-4 py-3 bg-transparent outline-none text-gray-900 placeholder-gray-400 font-medium" 
          {...props} 
        />
      </div>
    </div>
  );
};

export const OtpInput: React.FC = () => {
  return (
    <div className="flex justify-between gap-2 mb-8">
      {[1, 2, 3, 4, 5, 6].map((_, i) => (
        <input
          key={i}
          type="tel"
          maxLength={1}
          className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:ring-0 outline-none transition-all bg-white"
        />
      ))}
    </div>
  );
};
