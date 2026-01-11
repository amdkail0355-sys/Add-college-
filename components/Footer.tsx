
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg mr-2">
                <span className="text-white font-bold text-xl leading-none">AC</span>
              </div>
              <span className="text-slate-900 font-bold text-xl">Ad College</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The professional bridge between brands and creators. Secure, transparent, and direct.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600">For Brands</a></li>
              <li><a href="#" className="hover:text-blue-600">For Creators</a></li>
              <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-600">Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600">Safety Center</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Dispute Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Ad College. All rights reserved. 
            <br className="md:hidden" /> 
            <span className="hidden md:inline"> | </span>
            Actively monitored to ensure authenticity and safety.
          </p>
          <div className="flex space-x-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            {/* Social Icons Placeholder */}
            <div className="w-5 h-5 bg-slate-400 rounded-sm"></div>
            <div className="w-5 h-5 bg-slate-400 rounded-sm"></div>
            <div className="w-5 h-5 bg-slate-400 rounded-sm"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
