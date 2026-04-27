import React from 'react';
import { jsPDF } from 'jspdf';
import { ShoppingCart, Package } from 'lucide-react';

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
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 49);
    
    doc.line(20, 55, 190, 55);
    doc.text("Item: AI System License", 20, 65);
    doc.text("Price: $500.00", 150, 65);
    
    doc.save("Eissa_Aly_Receipt.pdf");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-yellow-500">Business Core</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-yellow-500/50 transition">
          <ShoppingCart className="mb-4 text-yellow-500" />
          <h3 className="text-xl font-bold">New Sale</h3>
          <button onClick={generateGoldReceipt} className="mt-4 w-full py-2 bg-yellow-600 rounded-lg font-bold">Issue Gold Receipt</button>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
          <Package className="mb-4 text-yellow-500" />
          <h3 className="text-xl font-bold">Inventory</h3>
          <p className="text-gray-400 mt-2">Manage your stock items here.</p>
        </div>
      </div>
    </div>
  );
}