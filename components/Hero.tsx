
import React from 'react';
import FunnelVisual from './FunnelVisual';

const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/919211841593?text=Hi%20SR%20Digital!%20I%E2%80%99m%20a%20realtor%20in%20Delhi%20NCR.%20I%20want%20qualified%20leads.%20My%20area:%20____%20|%20Budget:%20____.%20Please%20share%20the%20free%20lead%20audit%20%2B%20plan.";

  return (
    <section className="relative px-4 py-16 md:py-28 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Dominating Real Estate Marketing in Delhi NCR
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.0] mb-8 stagger-text tracking-tighter">
            <span style={{ animationDelay: '0.1s' }}>Get</span>{' '}
            <span className="shine-text" style={{ animationDelay: '0.2s', display: 'inline-block' }}>Elite</span>{' '}
            <span style={{ animationDelay: '0.3s' }}>Real</span>{' '}
            <span style={{ animationDelay: '0.4s' }}>Estate</span>{' '}
            <br className="hidden md:block" />
            <span style={{ animationDelay: '0.5s' }}>Leads</span>{' '}
            <span style={{ animationDelay: '0.6s' }}>in</span>{' '}
            <span className="text-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]" style={{ animationDelay: '0.7s' }}>Delhi</span>{' '}
            <span className="text-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]" style={{ animationDelay: '0.8s' }}>NCR</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-xl leading-relaxed font-medium">
            Stop competing for stale databases. We deploy <span className="text-white font-extrabold border-b-2 border-emerald-500/50">Performance Systems</span> that drive live site visits and high-intent WhatsApp inquiries.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {[
              { icon: '📍', text: 'Hyper-Local Targeting', sub: 'Micro-Area Precision' },
              { icon: '🔒', text: 'Verified Leads', sub: 'OTP-Qualified Intent' },
              { icon: '📲', text: 'Direct WhatsApp', sub: 'Zero Friction Flow' },
              { icon: '🏢', text: 'Premium Assets', sub: 'High-Ticket Focus' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-300 transform group-hover:rotate-6">
                  {item.icon}
                </div>
                <div>
                  <p className="text-slate-100 text-base font-black leading-none mb-1 group-hover:text-emerald-400 transition-colors">{item.text}</p>
                  <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition-all emerald-glow text-center overflow-hidden active:scale-95 shadow-2xl"
            >
              <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                GET FREE LEAD AUDIT
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-slate-900/60 hover:bg-slate-800 text-white font-bold rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all text-center flex items-center justify-center gap-3 active:scale-95 backdrop-blur-md"
            >
              <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WHATSAPP NOW
            </a>
          </div>
          <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest pl-2">
            * Limited to 3 new project launches this month. <span className="text-emerald-500 underline decoration-emerald-500/30">Check Availability</span>
          </p>
        </div>

        <div className="reveal relative lg:mt-0 mt-12">
          <div className="absolute -inset-10 bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>
          <FunnelVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;
