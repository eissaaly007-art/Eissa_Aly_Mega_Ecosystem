import React from 'react';
import { LayoutDashboard, BrainCircuit, Phone, Shield } from 'lucide-react';

export default function Sidebar({ setActiveModule, activeModule }) {
  const menuItems = [
    { id: 'business', name: 'Business Core', icon: <LayoutDashboard size={22} /> },
    { id: 'ai', name: 'AI Innovation', icon: <BrainCircuit size={22} /> }
  ];

  return (
    <div className="w-72 bg-black/40 backdrop-blur-2xl border-r border-white/10 p-8 flex flex-col z-30">
      <div className="mb-12">
        <h2 className="font-black text-2xl tracking-tighter text-white">EISSA ALY <span className="text-yellow-500 text-xs block tracking-widest uppercase">Mega Ecosystem</span></h2>
      </div>
      <nav className="space-y-4 flex-1">
        {menuItems.map((item) => (
          <button key={item.id} onClick={() => setActiveModule(item.id)} className={`flex items-center gap-4 w-full p-4 rounded-2xl transition-all ${activeModule === item.id ? 'bg-yellow-600 text-black font-bold' : 'hover:bg-white/5 text-gray-400'}`}>
            {item.icon} <span>{item.name}</span>
          </button>
        ))}
      </nav>
      <div className="pt-8 border-t border-white/10 text-xs text-gray-500 space-y-2">
        <div className="flex items-center gap-2"><Phone size={14}/> 01287556215</div>
        <div className="text-yellow-600 font-bold tracking-widest uppercase">Encrypted Session</div>
      </div>
    </div>
  );
}