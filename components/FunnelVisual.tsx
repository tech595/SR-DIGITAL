
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const FunnelVisual: React.FC = () => {
  const [funnelImg, setFunnelImg] = useState<string | null>(null);

  useEffect(() => {
    const generateFunnelBg = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: [{ parts: [{ text: "Abstract architectural blueprint of a luxury skyscraper, cyan and emerald glowing lines on dark background, high-tech property aesthetic, 8k." }] }],
          config: {
            imageConfig: {
              aspectRatio: "1:1"
            }
          }
        });
        const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
        if (part?.inlineData?.data) {
          setFunnelImg(`data:image/png;base64,${part.inlineData.data}`);
        }
      } catch (e) {
        console.error("Funnel BG Generation failed", e);
      }
    };
    generateFunnelBg();
  }, []);

  return (
    <div className="relative glass rounded-[40px] p-6 md:p-10 border border-white/10 shadow-[0_0_60px_-15px_rgba(16,185,129,0.4)] overflow-hidden group">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="text-white font-black text-xl tracking-tight">Lead Velocity Engine</h3>
            <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em]">Optimized for Delhi NCR</p>
          </div>
          <div className="flex gap-2">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Flow</span>
          </div>
        </div>

        <div className="relative perspective-1000">
          <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
            <defs>
              <pattern id="realEstatePattern" patternUnits="userSpaceOnUse" width="400" height="600">
                {funnelImg ? (
                  <image href={funnelImg} x="0" y="0" width="400" height="600" preserveAspectRatio="xMidYMid slice" opacity="0.4" />
                ) : (
                  <rect width="400" height="600" fill="#064e3b" opacity="0.5" />
                )}
              </pattern>

              <linearGradient id="funnelOverlay" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#020617" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#020617" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#020617" stopOpacity="0.85" />
              </linearGradient>
              
              <linearGradient id="goldShimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#ffffff" >
                   <animate attributeName="offset" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>

              <filter id="strongGlow">
                <feGaussianBlur stdDeviation="4" result="blur"/>
                <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Stage 1: Ads */}
            <g className="transition-all duration-500 transform-gpu hover:translate-y-[-3px]">
              <path d="M40 20 H360 L335 95 H65 Z" fill="url(#realEstatePattern)" />
              <path d="M40 20 H360 L335 95 H65 Z" fill="url(#funnelOverlay)" />
              <path d="M40 20 H360 L335 95 H65 Z" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
              <g transform="translate(160, 30)">
                 <path d="M12 12H21.5C21.8 12.8 22 13.8 22 15C22 20.5 18 23 14 23C9.5 23 6 19.5 6 15C6 10.5 9.5 7 14 7C16.5 7 18.5 8 20 9.5L17.5 12C16.5 11.5 15.5 11 14 11C11.5 11 9.5 13 9.5 15.5C9.5 18 11.5 20 14 20C16 20 17.5 19 18.5 17.5H14V14.5H21.5" fill="white" />
                 <path d="M38 12C38 14.2 36.2 16 34 16C31.8 16 30 14.2 30 12C30 9.8 31.8 8 34 8C35.5 8 36.5 9.5 38 12C39.5 14.5 40.5 16 42 16C44.2 16 46 14.2 46 12C46 9.8 44.2 8 42 8C39.8 8 38 9.8 38 12Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <text x="200" y="82" textAnchor="middle" fill="white" fontSize="9" fontWeight="900" className="uppercase tracking-[0.2em]">Omni-Channel Ads</text>
              <circle cx="200" cy="95" r="4" fill="#10b981" filter="url(#strongGlow)" className="animate-pulse" />
            </g>

            {/* Flow Line 1 */}
            <path d="M200 95 V125" stroke="#10b981" strokeWidth="2.5" strokeDasharray="4 4" className="animate-flow" />

            {/* Stage 2: Intent Filtering */}
            <g transform="translate(0, 120)">
              <path d="M80 20 H320 L295 95 H105 Z" fill="url(#realEstatePattern)" />
              <path d="M80 20 H320 L295 95 H105 Z" fill="url(#funnelOverlay)" />
              <path d="M80 20 H320 L295 95 H105 Z" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
              <g transform="translate(180, 28)">
                 <rect x="0" y="4" width="40" height="28" rx="4" stroke="white" strokeWidth="2.5" />
                 <line x1="10" y1="16" x2="30" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                 <line x1="10" y1="24" x2="20" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </g>
              <text x="200" y="82" textAnchor="middle" fill="white" fontSize="9" fontWeight="900" className="uppercase tracking-[0.2em]">Verified Intent</text>
              <circle cx="200" cy="95" r="4" fill="#10b981" filter="url(#strongGlow)" />
            </g>

            {/* Flow Line 2 */}
            <path d="M200 215 V245" stroke="#10b981" strokeWidth="2.5" strokeDasharray="4 4" className="animate-flow" />

            {/* Stage 3: Live Connection */}
            <g transform="translate(0, 240)">
              <path d="M120 20 H280 L260 95 H140 Z" fill="url(#realEstatePattern)" />
              <path d="M120 20 H280 L260 95 H140 Z" fill="url(#funnelOverlay)" />
              <path d="M120 20 H280 L260 95 H140 Z" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
              <g transform="translate(182, 28)">
                 <path d="M4 14C4 18.5 7.5 22 12 22L12 26L16 22C20.5 22 24 18.5 24 14C24 9.5 20.5 6 16 6C11.5 6 8 9.5 8 14" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
                 <circle cx="28" cy="10" r="4" fill="#10b981" filter="url(#strongGlow)" />
              </g>
              <text x="200" y="82" textAnchor="middle" fill="white" fontSize="9" fontWeight="900" className="uppercase tracking-[0.2em]">Instant WhatsApp</text>
              <circle cx="200" cy="95" r="4" fill="#10b981" filter="url(#strongGlow)" />
            </g>

            {/* Flow Line 3 */}
            <path d="M200 335 V365" stroke="#10b981" strokeWidth="2.5" strokeDasharray="4 4" className="animate-flow" />

            {/* Stage 4: High Value Site Visits */}
            <g transform="translate(0, 360)">
              <path d="M150 20 H250 L235 95 H165 Z" fill="url(#realEstatePattern)" />
              <path d="M150 20 H250 L235 95 H165 Z" fill="url(#funnelOverlay)" />
              <path d="M150 20 H250 L235 95 H165 Z" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
              <g transform="translate(184, 28)">
                 <path d="M2 30V10L16 2L30 10V30H2Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
                 <path d="M12 18H20V26H12V18Z" fill="#fbbf24" className="animate-pulse" />
              </g>
              <text x="200" y="82" textAnchor="middle" fill="white" fontSize="9" fontWeight="900" className="uppercase tracking-[0.2em]">Site Visit Bookings</text>
              <circle cx="200" cy="95" r="4" fill="#10b981" filter="url(#strongGlow)" />
            </g>

            {/* Final Conversion Node: DEAL CLOSED */}
            <g transform="translate(0, 485)">
              <circle cx="200" cy="35" r="50" fill="#fbbf24" opacity="0.05" className="animate-pulse-node" />
              <circle cx="200" cy="35" r="40" fill="url(#goldShimmer)" filter="url(#strongGlow)" className="hover:scale-110 transition-transform duration-500 cursor-pointer" />
              <g transform="translate(185, 20)">
                <circle cx="6" cy="6" r="5" stroke="black" strokeWidth="3"/>
                <path d="M11 11L25 25" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                <path d="M20 20L23 17" stroke="black" strokeWidth="4" strokeLinecap="round"/>
              </g>
              <text x="200" y="95" textAnchor="middle" fill="#fbbf24" fontSize="24" fontWeight="900" className="tracking-[0.25em] uppercase" style={{ filter: 'drop-shadow(0 0 12px rgba(251,191,36,0.6))' }}>DEAL CLOSED</text>
            </g>

            {/* Flow Particles */}
            <g opacity="0.6">
                <circle r="1.5" fill="white">
                    <animateMotion path="M100 50 Q150 250 200 500" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r="1.5" fill="#10b981">
                    <animateMotion path="M300 50 Q250 250 200 500" dur="4s" repeatCount="indefinite" />
                </circle>
            </g>
          </svg>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all group/stat">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1 group-hover/stat:text-emerald-400">Total Leads</p>
            <p className="text-3xl font-black text-white tracking-tighter">18.4k+</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all group/stat">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1 group-hover/stat:text-amber-400">Avg. ROI</p>
            <p className="text-3xl font-black text-white tracking-tighter">12.4x</p>
          </div>
        </div>
      </div>
      
      {/* Top Shine */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50 shimmer-effect"></div>
    </div>
  );
};

export default FunnelVisual;
