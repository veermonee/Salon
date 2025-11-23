import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
  fullWidth?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = true, 
  isLoading,
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "py-4 px-6 rounded-xl font-bold text-base transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gray-900 text-white shadow-lg shadow-gray-200 hover:bg-black",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200",
    outline: "bg-white border-2 border-gray-100 text-gray-600 hover:border-gray-300",
    danger: "bg-red-500 text-white shadow-red-100 hover:bg-red-600",
    success: "bg-emerald-500 text-white shadow-emerald-100 hover:bg-emerald-600"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
      {!isLoading && icon}
      {children}
    </button>
  );
};
