
import React, { useState } from 'react';

const TrustStrip: React.FC = () => {
  const [spend, setSpend] = useState(50000);
  
  // Logic: 
  // Avg CPL in Delhi NCR: ₹150 - ₹300 (Premium)
  // Conversion Rate (Site Visit to Deal): 2%
  // Avg Commission per Deal: ₹500,000 (Luxury/Mid-Segment)
  const leads = Math.floor(spend / 250);
  const deals = (leads * 0.02).toFixed(1);
  const revenue = Math.floor(parseFloat(deals) * 500000);

  const trustItems = [
    { label: "No Lock-in Contracts", color: "text-emerald-400" },
    { label: "48-Hour Launch", color: "text-cyan-400" },
    { label: "Real-time Tracking", color: "text-amber-400" },
    { label: "Lead Verification", color: "text-emerald-400" }
  ];

  return (
    <div className="py-12 border-y border-white/5 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 reveal">
          {trustItems.map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 group cursor-default transition-all duration-300 hover:-translate-y-1"
            >
              <div className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                <svg className={`w-5 h-5 ${item.color} group-hover:scale-125 transition-transform duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-slate-300 font-bold text-sm md:text-base group-hover:text-white transition-colors duration-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Interactive ROI Calculator */}
        <div className="reveal max-w-4xl mx-auto glass rounded-3xl p-6 md:p-10 border border-emerald-500/10 shadow-[0_0_40px_-15px_rgba(16,185,129,0.2)]" style={{ transitionDelay: '0.2s' }}>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex justify-between items-end mb-4">
                <h4 className="text-white font-black text-lg tracking-tight">NCR Revenue Estimator</h4>
                <p className="text-emerald-500 font-black text-xl">₹{spend.toLocaleString()}<span className="text-[10px] text-slate-500 ml-1">AD SPEND</span></p>
              </div>
              <input 
                type="range" 
                min="25000" 
                max="500000" 
                step="5000" 
                value={spend} 
                onChange={(e) => setSpend(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 mb-4"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <span>Start Small (₹25k)</span>
                <span>Scale High (₹5L)</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Leads</p>
                <p className="text-xl font-black text-white">{leads}</p>
              </div>
              <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Deals</p>
                <p className="text-xl font-black text-emerald-400">{deals}</p>
              </div>
              <div className="text-center p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-[10px] text-emerald-500/70 font-bold uppercase tracking-widest mb-1">Revenue</p>
                <p className="text-xl font-black text-white">₹{(revenue/100000).toFixed(1)}L</p>
              </div>
            </div>
          </div>
          <p className="text-[9px] text-slate-600 mt-6 text-center italic">
            *Estimates based on average Gurgaon Luxury segment metrics. Final ROI depends on inventory pricing & sales team follow-up speed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
