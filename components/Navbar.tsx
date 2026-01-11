
import React from 'react';
import { UserRole } from '../types.ts';

interface NavbarProps {
  role: UserRole;
  onReset: () => void;
  onLoginClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ role, onReset, onLoginClick }) => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={onReset}
          >
            <div className="bg-blue-600 p-1.5 rounded-lg mr-2 group-hover:bg-blue-700 transition-colors shadow-sm shadow-blue-100">
              <span className="text-white font-bold text-xl leading-none">AC</span>
            </div>
            <span className="text-slate-900 font-bold text-xl tracking-tight">Ad College</span>
          </div>

          <div className="flex space-x-6 items-center">
            {role === UserRole.GUEST ? (
              <>
                <a href="#how-it-works" className="hidden md:block text-slate-600 hover:text-blue-600 font-semibold text-sm transition-colors">How it Works</a>
                <button 
                  onClick={onLoginClick}
                  className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-slate-100"
                >
                  Sign In
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex flex-col items-end mr-2">
                  <span className="text-[10px] font-black uppercase tracking-tighter text-slate-400">Current Role</span>
                  <span className="text-xs font-bold text-blue-600">
                    {role === UserRole.ADMIN ? 'Administrator' : role === UserRole.BRAND ? 'Brand Partner' : 'Creator Pro'}
                  </span>
                </div>
                <button 
                  onClick={onReset}
                  className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-rose-50 hover:text-rose-600 transition-all border border-slate-200"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
