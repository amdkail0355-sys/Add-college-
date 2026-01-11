
import React, { useState } from 'react';
import { Sponsorship } from '../types.ts';
import ChatRoom from './ChatRoom.tsx';

const MOCK_SPONSORSHIPS: Sponsorship[] = [
  {
    id: '1',
    brandName: 'TechFlow',
    brandLogo: 'https://picsum.photos/40/40?1',
    title: 'Instagram Reel for Productivity App',
    description: 'Looking for tech/lifestyle creators to showcase our new focus timer app in a 60-second reel. Highlight ease of use.',
    budget: '$300 - $500',
    platform: 'Instagram',
    niche: 'Productivity',
    verified: true,
    postedAt: '2h ago'
  },
  {
    id: '2',
    brandName: 'GlowSkin',
    brandLogo: 'https://picsum.photos/40/40?2',
    title: 'YouTube Skincare Morning Routine',
    description: 'Seeking beauty creators for a long-form integration in a morning routine video. Genuine review needed.',
    budget: '$800 - $1,200',
    platform: 'YouTube',
    niche: 'Beauty',
    verified: true,
    postedAt: '5h ago'
  },
  {
    id: '3',
    brandName: 'FitFuel',
    brandLogo: 'https://picsum.photos/40/40?3',
    title: 'TikTok Energy Drink Review',
    description: 'Fun, energetic review of our new sugar-free energy boost drink. High energy creators preferred.',
    budget: '$200',
    platform: 'TikTok',
    niche: 'Fitness',
    verified: false,
    postedAt: '1d ago'
  }
];

const CreatorPanel: React.FC = () => {
  const [view, setView] = useState<'browse' | 'messages' | 'saved'>('browse');

  if (view === 'messages') {
    return <ChatRoom onBack={() => setView('browse')} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Creator Hub</h2>
          <p className="text-slate-600 mt-2">Find your next big partnership with trusted brands.</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
          <button 
            onClick={() => setView('browse')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${view === 'browse' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Explore
          </button>
          <button 
            onClick={() => setView('messages')}
            // Fix: cast 'view' to string to bypass narrowing that incorrectly suggests 'view === "messages"' is unreachable here.
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${(view as string) === 'messages' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Chats
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_SPONSORSHIPS.map((s) => (
          <div key={s.id} className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all overflow-hidden flex flex-col">
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img src={s.brandLogo} alt={s.brandName} className="w-10 h-10 rounded-full bg-slate-100" />
                    {s.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-0.5 border-2 border-white">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                      </div>
                    )}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">{s.brandName}</h5>
                    <p className="text-[10px] text-slate-400 font-medium uppercase">{s.niche}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="px-2 py-0.5 bg-slate-100 text-[10px] font-bold text-slate-500 rounded uppercase tracking-tighter">
                    {s.platform}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-1">{s.postedAt}</span>
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{s.title}</h4>
              <p className="text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">{s.description}</p>
              
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl font-extrabold text-blue-600">{s.budget}</span>
                <span className="text-xs text-slate-400 font-medium">Est. Payout</span>
              </div>
            </div>
            
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-2">
              <button className="flex-grow bg-slate-900 text-white py-2.5 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-sm">
                Apply Now
              </button>
              <button className="p-2.5 border border-slate-200 bg-white rounded-xl text-slate-400 hover:text-red-500 hover:border-red-500 transition-all group/btn">
                <svg className="w-5 h-5 group-hover/btn:fill-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorPanel;
