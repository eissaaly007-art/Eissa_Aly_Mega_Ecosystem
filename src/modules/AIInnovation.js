import React, { useState } from 'react';
import { BrainCircuit, Send, Sparkles } from 'lucide-react';

export default function AIInnovation() {
  const [input, setInput] = useState("");

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-3xl font-bold text-blue-400">AI Innovation Center</h1>
      <div className="max-w-3xl p-8 bg-blue-900/10 border border-blue-500/20 rounded-3xl backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="text-blue-400 animate-pulse" />
          <span className="text-lg font-medium">Business Intelligence Unit</span>
        </div>
        <div className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-5 bg-black/60 border border-white/10 rounded-2xl focus:border-blue-400 outline-none text-white transition"
            placeholder="Ask AI to analyze your sales data..."
          />
          <button className="absolute right-4 top-4 p-1 text-blue-400 hover:text-white transition">
            <Send size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}