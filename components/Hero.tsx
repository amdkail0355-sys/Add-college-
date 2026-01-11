
import React from 'react';
import { UserRole } from '../types.ts';

interface HeroProps {
  onSelectRole: (role: UserRole) => void;
}

const Hero: React.FC<HeroProps> = ({ onSelectRole }) => {
  return (
    <section className="relative bg-white pt-20 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-100">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
          Trusted by 1000+ Brands & Creators
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8 leading-[1.1]">
          Where Creators & Brands <br />
          <span className="text-blue-600">Sync In Sync.</span>
        </h1>
        
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          Professionalize your collaborations. Post sponsorships, apply with pitches, and build lasting partnerships with verified profiles.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <button 
            onClick={() => onSelectRole(UserRole.BRAND)}
            className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all text-lg"
          >
            I’m a Brand
          </button>
          <button 
            onClick={() => onSelectRole(UserRole.CREATOR)}
            className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm text-lg"
          >
            I’m a Creator
          </button>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 grayscale contrast-125">
          <img src="https://picsum.photos/120/40?grayscale&1" alt="Partner" className="mx-auto" />
          <img src="https://picsum.photos/120/40?grayscale&2" alt="Partner" className="mx-auto" />
          <img src="https://picsum.photos/120/40?grayscale&3" alt="Partner" className="mx-auto" />
          <img src="https://picsum.photos/120/40?grayscale&4" alt="Partner" className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
