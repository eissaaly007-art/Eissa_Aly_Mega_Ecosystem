import React, { useState } from 'react';
import { BrainCircuit, Send } from 'lucide-react';

export default function AIInnovation() {
  const [input, setInput] = useState("");

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-blue-400">AI Innovation Center</h1>
      <div className="max-w-3xl p-6 bg-blue-900/10 border border-blue-500/20 rounded-3xl">
        <div className="flex items-center gap-3 mb-6">
          <BrainCircuit className="text-blue-400" />
          <span className="text-lg">Ask AI about your business insights...</span>
        </div>
        <div className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-4 bg-black/40 border border-white/10 rounded-xl focus:border-blue-400 outline-none transition text-white"
            placeholder="How were my sales this month?"
          />
          <button className="absolute right-3 top-3 p-1 text-blue-400 hover:text-white transition">
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}