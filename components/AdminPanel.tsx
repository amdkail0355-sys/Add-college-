
import React, { useState, useEffect } from 'react';
import { UserProfile, Sponsorship } from '../types.ts';
import { app } from '../firebase.ts';

const MOCK_USERS: UserProfile[] = [
  { id: 'u1', name: 'Zeeshan Khan', email: 'zeeshan@brand.com', role: 'BRAND', status: 'pending', joinedAt: '2023-10-01' },
  { id: 'u2', name: 'Sarah Creator', email: 'sarah@creators.com', role: 'CREATOR', status: 'verified', joinedAt: '2023-09-15' },
  { id: 'u3', name: 'TechFlow Inc', email: 'info@techflow.com', role: 'BRAND', status: 'verified', joinedAt: '2023-10-05' },
  { id: 'u4', name: 'Rahul Vlogs', email: 'rahul@youtube.com', role: 'CREATOR', status: 'pending', joinedAt: '2023-10-10' },
];

const MOCK_CAMPAIGNS: Sponsorship[] = [
  { id: 'c1', brandName: 'TechFlow', brandLogo: '', title: 'Focus App Reel', description: 'Testing description', budget: '$500', platform: 'Instagram', niche: 'Productivity', verified: true, postedAt: '1d ago', status: 'pending' },
  { id: 'c2', brandName: 'GlowSkin', brandLogo: '', title: 'Moisturizer Review', description: 'Testing description', budget: '$1200', platform: 'YouTube', niche: 'Beauty', verified: true, postedAt: '2d ago', status: 'approved' },
];

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'campaigns' | 'reports'>('overview');
  const [users, setUsers] = useState(MOCK_USERS);
  const [campaigns, setCampaigns] = useState(MOCK_CAMPAIGNS);
  const [firebaseStatus, setFirebaseStatus] = useState<'connecting' | 'connected' | 'error'>('connecting');

  useEffect(() => {
    // Simulate checking Firebase connectivity
    if (app) {
      setTimeout(() => setFirebaseStatus('connected'), 1000);
    } else {
      setFirebaseStatus('error');
    }
  }, []);

  const toggleUserVerification = (id: string) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === 'verified' ? 'pending' : 'verified' } : u));
  };

  const updateCampaignStatus = (id: string, status: 'approved' | 'rejected') => {
    setCampaigns(campaigns.map(c => c.id === id ? { ...c, status } : c));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row gap-8">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-900/50">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-3.04l.53-.81a9 9 0 000-9.438l-.53-.81m12.96 9.438a9 9 0 01-12.154 0m12.154 0a9 9 0 000-9.438M14.75 4h5.25v5.25m-14.75 0V4h5.25m0 0V3m0 0a2 2 0 114 0v1m-4 0h4m-4 0a2 2 0 104 0v-1"></path></svg>
            </div>
            <span className="font-black text-xl tracking-tight">Ad Admin</span>
          </div>

          <nav className="space-y-2">
            {[
              { id: 'overview', label: 'Dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
              { id: 'users', label: 'User Control', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
              { id: 'campaigns', label: 'Campaigns', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
              { id: 'reports', label: 'Reports', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === tab.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tab.icon}></path></svg>
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="mt-20 pt-10 border-t border-slate-800">
            <div className="flex items-center gap-2 px-2">
              <div className={`w-2 h-2 rounded-full ${firebaseStatus === 'connected' ? 'bg-green-500 animate-pulse' : 'bg-amber-500'}`}></div>
              <span className="text-[10px] uppercase font-black tracking-widest text-slate-500">
                Firebase {firebaseStatus}
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <header className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tight">Command Center</h1>
                <p className="text-slate-500 font-medium mt-1">Real-time platform activity metrics.</p>
              </div>
              <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                Refresh Stats
              </button>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Total Users', value: '1,248', change: '+12%', color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'Active Ads', value: '342', change: '+5%', color: 'text-indigo-600', bg: 'bg-indigo-50' },
                { label: 'Total Volume', value: '$45.2k', change: '+23%', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { label: 'Alerts', value: '2', change: '-40%', color: 'text-rose-600', bg: 'bg-rose-50' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm transition-transform hover:-translate-y-1">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className={`text-4xl font-black ${stat.color}`}>{stat.value}</span>
                    <span className="text-xs font-bold text-slate-400">{stat.change}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2 tracking-tight uppercase tracking-tighter">
                    <span className="w-2 h-6 bg-indigo-600 rounded-full"></span>
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center font-bold text-slate-400">#</div>
                        <div>
                          <p className="text-sm font-bold text-slate-800 leading-tight">Brand "TechFlow" posted a new campaign.</p>
                          <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">2 Minutes Ago</span>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                  <div className="w-20 h-20 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-indigo-600/30">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight">AI Platform Audit</h3>
                  <p className="text-slate-400 text-sm mb-8 max-w-xs font-medium">Use Gemini AI to scan current campaigns for suspicious behavior and compliance.</p>
                  <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 uppercase tracking-widest text-xs">
                    Execute Smart Audit
                  </button>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="space-y-6">
            <header className="flex justify-between items-end">
              <div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tight">User Control</h1>
                <p className="text-slate-500 font-medium">Manage verification and permissions.</p>
              </div>
              <div className="flex gap-2">
                <input type="text" placeholder="Filter by email..." className="px-5 py-3 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-100 transition-all text-sm w-64 shadow-sm" />
              </div>
            </header>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Account Info</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Role</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Verification Status</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {users.map(user => (
                    <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black text-lg shadow-md">{user.name[0]}</div>
                          <div>
                            <p className="text-base font-black text-slate-900">{user.name}</p>
                            <p className="text-xs text-slate-400 font-medium">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter ${user.role === 'BRAND' ? 'bg-blue-100 text-blue-700' : 'bg-indigo-100 text-indigo-700'}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex justify-center">
                          {user.status === 'verified' ? (
                            <span className="flex items-center gap-1.5 px-4 py-1.5 bg-green-50 text-green-700 rounded-full border border-green-200 text-[10px] font-black uppercase tracking-widest shadow-sm">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                              Verified
                            </span>
                          ) : (
                            <span className="flex items-center gap-1.5 px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full border border-amber-200 text-[10px] font-black uppercase tracking-widest shadow-sm">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                              </span>
                              Needs Action
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button 
                          onClick={() => toggleUserVerification(user.id)}
                          className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${user.status === 'verified' ? 'text-rose-600 border border-rose-100 hover:bg-rose-50' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100'}`}
                        >
                          {user.status === 'verified' ? 'Revoke' : 'Approve'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'campaigns' && (
          <div className="space-y-6">
             <header>
                <h1 className="text-4xl font-black text-slate-900 tracking-tight">Active Ads</h1>
                <p className="text-slate-500 font-medium">Public sponsorship moderation queue.</p>
              </header>
              <div className="grid gap-6">
                {campaigns.map(camp => (
                  <div key={camp.id} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="flex items-start gap-6 flex-grow">
                      <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 shadow-inner">
                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <h4 className="text-xl font-black text-slate-900 leading-none">{camp.title}</h4>
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-lg uppercase tracking-widest ${camp.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                            {camp.status}
                          </span>
                        </div>
                        <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{camp.brandName} • {camp.postedAt}</p>
                        <p className="text-sm text-slate-500 max-w-2xl font-medium leading-relaxed mt-2">{camp.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-4 min-w-[200px]">
                      <div className="text-right">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Proposed Budget</span>
                        <span className="text-3xl font-black text-slate-900 tracking-tighter">{camp.budget}</span>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => updateCampaignStatus(camp.id, 'approved')} className="px-6 py-2 bg-green-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg shadow-green-100">Publish</button>
                        <button onClick={() => updateCampaignStatus(camp.id, 'rejected')} className="px-6 py-2 bg-slate-100 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-50 hover:text-rose-600 transition-all">Reject</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        )}

        {activeTab === 'reports' && (
           <div className="bg-white p-24 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mb-8 rotate-3 shadow-lg shadow-emerald-50">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-2">Zero Reports Pending</h3>
              <p className="text-slate-500 max-w-sm font-medium">The platform community guidelines are being followed. No active disputes reported by users in the last 48 hours.</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
