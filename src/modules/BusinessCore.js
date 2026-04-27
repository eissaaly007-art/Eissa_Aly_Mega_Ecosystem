import React from 'react';
import { jsPDF } from 'jspdf';
import { ShoppingCart, FileText } from 'lucide-react';

export default function BusinessCore() {
  const generateGoldReceipt = () => {
    const doc = new jsPDF();
    doc.setTextColor(212, 175, 55); 
    doc.setFontSize(50);
    doc.text("EISSA ALY MEGA-ECOSYSTEM", 10, 150, { angle: 45, opacity: 0.1 });
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(22);
    doc.text("OFFICIAL RECEIPT", 20, 20);
    doc.setFontSize(12);
    doc.text("Developer: Eissa Aly", 20, 35);
    doc.text("Phone: 01287556215", 20, 42);
    doc.line(20, 50, 190, 50);
    doc.text("Item: System License Activation", 20, 60);
    doc.text("Price: $500.00", 150, 60);
    doc.save("Eissa_Aly_Receipt.pdf");
  };

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-3xl font-bold text-yellow-500">Business Core</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-yellow-500/50 transition-all cursor-pointer group">
          <ShoppingCart className="text-yellow-500 mb-4 group-hover:scale-110 transition" size={40} />
          <h3 className="text-xl font-bold">New Sale & POS</h3>
          <button onClick={generateGoldReceipt} className="mt-4 w-full py-3 bg-yellow-600 hover:bg-yellow-500 rounded-xl font-bold transition">
            Generate Gold Receipt
          </button>
        </div>
      </div>
    </div>
  );
}