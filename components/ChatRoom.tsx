
import React, { useState } from 'react';

interface ChatRoomProps {
  onBack: () => void;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ onBack }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', sender: 'Brand', text: 'Hey, loved your portfolio. Can you do a 60s Reel?', timestamp: '10:30 AM' },
    { id: '2', sender: 'Me', text: 'Thank you! Yes, I can certainly help with that. What is the timeline?', timestamp: '10:35 AM' },
    { id: '3', sender: 'Brand', text: 'We are looking to launch by next Friday. Do you have a rate card?', timestamp: '10:40 AM' },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages([...messages, { id: Date.now().toString(), sender: 'Me', text: message, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setMessage('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col h-[80vh]">
      <div className="mb-6 flex items-center justify-between">
         <button onClick={onBack} className="text-slate-500 flex items-center text-sm hover:text-slate-900">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            Back to Workspace
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">T</div>
            <div>
              <h3 className="font-bold text-slate-900">TechFlow Brand Manager</h3>
              <p className="text-xs text-green-500 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                Online
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-bold text-sm hover:bg-blue-100 transition-colors">Request Meeting</button>
          </div>
      </div>

      <div className="bg-blue-50 p-3 rounded-lg text-center mb-6 text-xs text-blue-700 font-medium">
        Professional communication builds successful collaborations. Always keep conversations professional and transparent.
      </div>

      <div className="flex-grow bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="flex-grow p-6 overflow-y-auto space-y-4">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.sender === 'Me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] rounded-2xl p-4 ${m.sender === 'Me' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-100 text-slate-900 rounded-tl-none'}`}>
                <p className="text-sm leading-relaxed">{m.text}</p>
                <span className={`text-[10px] block mt-1 ${m.sender === 'Me' ? 'text-blue-100' : 'text-slate-400'}`}>{m.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <div className="flex gap-3">
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-grow px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" 
              placeholder="Write your message..." 
            />
            <button 
              onClick={sendMessage}
              className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-all shadow-md"
            >
              <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
            </button>
          </div>
          <div className="mt-3 flex gap-4 text-[10px] text-slate-400 font-medium">
            <button className="hover:text-slate-600">Attach Document</button>
            <button className="hover:text-slate-600">Send Offer</button>
            <button className="hover:text-red-500 ml-auto">Report Issue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
