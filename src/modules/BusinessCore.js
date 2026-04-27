import React from 'react';
import { jsPDF } from 'jspdf';
import { Download, TrendingUp, ShieldCheck } from 'lucide-react';

export default function BusinessCore() {
  const generateReceipt = () => {
    const doc = new jsPDF();
    doc.setFillColor(2, 6, 23); doc.rect(0, 0, 210, 297, 'F');
    doc.setTextColor(212, 175, 55); doc.setFontSize(30);
    doc.text("EISSA ALY MEGA OS", 105, 50, { align: "center" });
    doc.setFontSize(14); doc.text("GOLDEN BUSINESS RECEIPT", 105, 70, { align: "center" });
    doc.setDrawColor(212, 175, 55); doc.line(20, 80, 190, 80);
    doc.setTextColor(255, 255, 255);
    doc.text("Developer: Eissa Aly | +201287556215", 20, 100);
    doc.text("System: Verified & Secured", 20, 115);
    doc.save("Eissa_Aly_Gold_Receipt.pdf");
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <h2 className="text-4xl font-black tracking-tighter text-yellow-500">BUSINESS CORE</h2>
      <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] backdrop-blur-xl hover:border-yellow-500/30 transition-all">
        <ShieldCheck size={50} className="text-yellow-600 mb-6" />
        <h3 className="text-2xl font-bold mb-4">Golden Transaction Manager</h3>
        <p className="text-gray-400 mb-8 max-w-md">Create premium encrypted receipts for your high-end business ecosystem.</p>
        <button onClick={generateReceipt} className="flex items-center gap-3 bg-yellow-600 hover:bg-yellow-500 text-black px-10 py-4 rounded-2xl font-black transition-transform hover:scale-105">
          <Download size={20} /> ISSUE GOLD RECEIPT
        </button>
      </div>
    </div>
  );
}