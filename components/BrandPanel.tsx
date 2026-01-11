
import React, { useState } from 'react';
import ChatRoom from './ChatRoom.tsx';
import { GoogleGenAI } from "@google/genai";

const BrandPanel: React.FC = () => {
  const [view, setView] = useState<'dashboard' | 'applications' | 'messages' | 'post'>('dashboard');
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({ title: '', budget: '', description: '' });

  const generateWithAI = async () => {
    if (!formData.description && !formData.title) {
      alert("Please enter a brief product name or description first!");
      return;
    }

    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a professional marketing expert for "Ad College". Create a professional sponsorship campaign brief. 
        Product: ${formData.title || formData.description}
        Additional Info: ${formData.description}
        
        Return the result in JSON format with exactly these keys: "title", "budgetRecommendation", "description". 
        Keep the description persuasive for top-tier creators.`,
        config: { responseMimeType: "application/json" }
      });

      const data = JSON.parse(response.text);
      setFormData({
        title: data.title,
        budget: data.budgetRecommendation || '$500 - $1500',
        description: data.description
      });
    } catch (error) {
      console.error("AI Generation failed:", error);
      alert("AI generator is currently busy. Please try again or fill manually.");
    } finally {
      setIsGenerating(false);
    }
  };

  if (view === 'messages') {
    return <ChatRoom onBack={() => setView('dashboard')} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Brand Workspace</h2>
        <p className="text-slate-600 mt-2">Scale your brand with high-quality creator collaborations.</p>
      </header>

      {view === 'dashboard' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <button 
            onClick={() => setView('post')}
            className="p-6 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition-all text-left flex flex-col justify-between min-h-[160px]"
          >
            <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            </div>
            <div>
              <span className="block text-xl font-bold">Post Sponsorship</span>
              <span className="text-blue-100 text-sm">Create a new campaign</span>
            </div>
          </button>
          
          <button 
            onClick={() => setView('applications')}
            className="p-6 bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-sm hover:border-blue-600 transition-all text-left flex flex-col justify-between min-h-[160px]"
          >
            <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <div>
              <span className="block text-xl font-bold">Applicants</span>
              <span className="text-slate-500 text-sm">12 Active requests</span>
            </div>
          </button>

          <button 
            onClick={() => setView('messages')}
            className="p-6 bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-sm hover:border-blue-600 transition-all text-left flex flex-col justify-between min-h-[160px]"
          >
            <div className="bg-indigo-50 w-10 h-10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            </div>
            <div>
              <span className="block text-xl font-bold">Messages</span>
              <span className="text-slate-500 text-sm">4 Unread threads</span>
            </div>
          </button>
        </div>
      )}

      {view === 'dashboard' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Active Campaigns</h3>
            <button className="text-sm font-semibold text-blue-600 hover:underline">See all</button>
          </div>
          <div className="divide-y divide-slate-100">
            {[1, 2].map((i) => (
              <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Winter Collection Launch {i}</h4>
                    <p className="text-sm text-slate-500">Instagram & TikTok • $1.2k Budget</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-slate-900">14 Apps</p>
                    <p className="text-xs text-green-500">3 Accepted</p>
                  </div>
                  <button className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {view === 'post' && (
        <div className="max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
          <button onClick={() => setView('dashboard')} className="mb-8 flex items-center text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            Back to Dashboard
          </button>
          
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Post a Sponsorship</h3>
              <p className="text-slate-500">Fill in the details or let AI help you draft.</p>
            </div>
            <button 
              onClick={generateWithAI}
              disabled={isGenerating}
              className={`flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isGenerating ? (
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path></svg>
              )}
              {isGenerating ? 'Generating...' : 'AI Smart Draft'}
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Campaign Title</label>
              <input 
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="e.g. Minimalist Watch Launch - YouTube Tech Review" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Platform</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none appearance-none bg-white">
                  <option>Instagram</option>
                  <option>YouTube</option>
                  <option>TikTok</option>
                  <option>X / Twitter</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Estimated Budget</label>
                <input 
                  type="text" 
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  placeholder="e.g. $500 - $1500" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Campaign Description</label>
              <textarea 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none min-h-[150px] transition-all"
                placeholder="Briefly describe your product and what you expect from creators..."
              ></textarea>
            </div>

            <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">
              Launch Campaign
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandPanel;
