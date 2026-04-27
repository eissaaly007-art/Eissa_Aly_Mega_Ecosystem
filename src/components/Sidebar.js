import React from 'react';
import { LayoutDashboard, BrainCircuit, Phone } from 'lucide-react';

export default function Sidebar({ setActiveModule, activeModule }) {
  return (
    <div className="w-64 bg-black/80 border-r border-white/10 p-6 flex flex-col z-20">
      <div className="mb-10 font-bold text-xl text-yellow-500">EISSA ALY OS</div>
      
      <nav className="space-y-4 flex-1">
        <button 
          onClick={() => setActiveModule('business')} 
          className={`flex items-center gap-3 w-full p-3 rounded-lg transition ${activeModule === 'business' ? 'bg-yellow-600/20 text-yellow-500' : 'hover:bg-white/10'}`}
        >
          <LayoutDashboard size={20} /> Business Core
        </button>
        <button 
          onClick={() => setActiveModule('ai')} 
          className={`flex items-center gap-3 w-full p-3 rounded-lg transition ${activeModule === 'ai' ? 'bg-blue-600/20 text-blue-400' : 'hover:bg-white/10'}`}
        >
          <BrainCircuit size={20} /> AI Innovation
        </button>
      </nav>

      <div className="pt-6 border-t border-white/10 space-y-2">
        <p className="text-xs text-gray-500 text-right">Developer Contact:</p>
        <div className="flex items-center justify-end gap-2 text-sm text-gray-300">
          <span>01287556215</span>
          <Phone size={14} />
        </div>
        <p className="text-xs text-center text-yellow-600 font-bold">Eissa Aly</p>
      </div>
    </div>
  );
}