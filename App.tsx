
import React, { useState } from 'react';
import { UserRole } from './types.ts';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import BrandPanel from './components/BrandPanel.tsx';
import CreatorPanel from './components/CreatorPanel.tsx';
import AdminPanel from './components/AdminPanel.tsx';
import Footer from './components/Footer.tsx';
import Login from './components/Login.tsx';
import { app } from './firebase.ts';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.GUEST);
  const [showLogin, setShowLogin] = useState(false);

  const handleRoleSelect = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setShowLogin(false);
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    setRole(UserRole.GUEST);
    setShowLogin(false);
  };

  if (showLogin) {
    return <Login onLogin={handleRoleSelect} onBack={() => setShowLogin(false)} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar role={role} onReset={handleLogout} onLoginClick={() => setShowLogin(true)} />
      
      <main className="flex-grow">
        {role === UserRole.GUEST && (
          <>
            <Hero onSelectRole={(r) => {
              if (r === UserRole.GUEST) setShowLogin(true);
              else handleRoleSelect(r);
            }} />
            <HowItWorks />
            <div className="max-w-7xl mx-auto px-4 py-20 text-center border-t border-slate-200">
               <p className="text-slate-400 text-sm mb-4">Platform Administrator?</p>
               <button 
                onClick={() => handleRoleSelect(UserRole.ADMIN)}
                className="px-6 py-2 border border-slate-300 rounded-full text-xs font-bold text-slate-500 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all uppercase tracking-widest"
               >
                 Internal Admin Access
               </button>
            </div>
          </>
        )}

        {role === UserRole.BRAND && (
          <div className="bg-white min-h-screen">
            <BrandPanel />
          </div>
        )}

        {role === UserRole.CREATOR && (
          <div className="bg-white min-h-screen">
            <CreatorPanel />
          </div>
        )}

        {role === UserRole.ADMIN && (
          <div className="bg-slate-50 min-h-screen">
            <AdminPanel />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
