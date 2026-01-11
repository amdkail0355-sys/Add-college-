
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How it works</h2>
          <p className="text-slate-600">Simple and direct collaboration process.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* For Brands */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </span>
              For Brands
            </h3>
            <ul className="space-y-6">
              {[
                { step: 1, title: 'Create brand profile', desc: 'Set up your professional identity.' },
                { step: 2, title: 'Post sponsorships', desc: 'Define your campaign goals and budget.' },
                { step: 3, title: 'Review applications', desc: 'Check creator stats and pitches.' },
                { step: 4, title: 'Chat & collaborate', desc: 'Securely communicate and close deals.' },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* For Creators */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-indigo-100 text-indigo-600 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              </span>
              For Creators
            </h3>
            <ul className="space-y-6">
              {[
                { step: 1, title: 'Build creator profile', desc: 'Showcase your portfolio and metrics.' },
                { step: 2, title: 'Explore sponsorships', desc: 'Find deals that match your niche.' },
                { step: 3, title: 'Apply with confidence', desc: 'Send professional pitches to brands.' },
                { step: 4, title: 'Connect & grow', desc: 'Build long-term brand relationships.' },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
