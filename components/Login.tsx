
import React from 'react';
import { UserRole } from '../types.ts';

interface LoginProps {
  onLogin: (role: UserRole) => void;
  onBack: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="inline-block bg-blue-600 p-3 rounded-2xl mb-4 shadow-xl shadow-blue-100">
            <span className="text-white font-black text-3xl">AC</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Welcome Back</h1>
          <p className="text-slate-500 font-medium mt-2 text-lg">Choose your portal to continue</p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={() => onLogin(UserRole.BRAND)}
            className="w-full bg-white border-2 border-slate-200 p-6 rounded-2xl flex items-center gap-4 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-50 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </div>
            <div className="text-left">
              <span className="block text-lg font-bold text-slate-900 leading-none mb-1">Brand Portal</span>
              <span className="text-sm text-slate-500 font-medium">I want to hire creators</span>
            </div>
            <svg className="w-5 h-5 ml-auto text-slate-300 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          <button 
            onClick={() => onLogin(UserRole.CREATOR)}
            className="w-full bg-white border-2 border-slate-200 p-6 rounded-2xl flex items-center gap-4 hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-50 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </div>
            <div className="text-left">
              <span className="block text-lg font-bold text-slate-900 leading-none mb-1">Creator Hub</span>
              <span className="text-sm text-slate-500 font-medium">I want to apply for ads</span>
            </div>
            <svg className="w-5 h-5 ml-auto text-slate-300 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>

        <button 
          onClick={onBack}
          className="w-full mt-8 text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default Login;
