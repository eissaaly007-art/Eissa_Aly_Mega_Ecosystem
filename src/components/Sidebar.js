import React from 'react';
import { LayoutDashboard, BrainCircuit, Phone, Shield } from 'lucide-react';

export default function Sidebar({ setActiveModule, activeModule }) {
  const menuItems = [
    { id: 'business', name: 'Business Core', icon: <LayoutDashboard size={20} /> },
    { id: 'ai', name: 'AI Innovation', icon: <BrainCircuit size={20} /> }
  ];

  return (
    <div className="w-72 bg-black/90 border-r border-white/10 p-8 flex flex-col z-30">
      <div className="mb-12 flex items-center gap-3">
        <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center font-bold text-black">EA</div>
        <h2 className="font-black text-xl tracking-tighter text-white">EISSA ALY <span className="text-yellow-500 text-xs block">MEGA OS</span></h2>
      </div>
      
      <nav className="space-y-3 flex-1">
        {menuItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => setActiveModule(item.id)} 
            className={`flex items-center gap-4 w-full p-4 rounded-2xl transition-all ${activeModule === item.id ? 'bg-yellow-600/20 text-yellow-500 border border-yellow-500/30' : 'hover:bg-white/5 text-gray-400'}`}
          >
            {item.icon} <span className="font-semibold">{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="pt-8 border-t border-white/10 space-y-4">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <Phone size={14} /> <span>01287556215</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-yellow-600 font-bold uppercase tracking-widest">
          <Shield size={12} /> Encrypted Session
        </div>
      </div>
    </div>
  );
}