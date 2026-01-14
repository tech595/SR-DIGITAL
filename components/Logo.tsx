
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dimensions = {
    sm: 'h-10 w-auto',
    md: 'h-16 w-auto',
    lg: 'h-24 w-auto'
  };

  return (
    <div className={`flex items-center group cursor-pointer ${className}`}>
      <div className={`${dimensions[size]} flex items-center justify-center`}>
        <svg 
          viewBox="0 0 320 120" 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-full w-full drop-shadow-lg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="brandGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#fff7ed" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            
            <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>

            <filter id="premiumGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
              <feOffset dx="0" dy="0" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.5" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Animated Top Arc */}
          <path 
            d="M90 35 Q160 5 230 35" 
            stroke="url(#arcGrad)" 
            strokeWidth="8" 
            fill="none" 
            strokeLinecap="round"
            className="group-hover:stroke-white transition-all duration-500"
          >
             <animate attributeName="stroke-dasharray" from="0, 500" to="500, 0" dur="2s" fill="freeze" />
          </path>

          {/* SR DIGITAL Main Text */}
          <text 
            x="160" 
            y="85" 
            textAnchor="middle" 
            fill="white" 
            style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontWeight: 900, 
              fontSize: '48px',
              letterSpacing: '-1.5px'
            }}
            filter="url(#premiumGlow)"
          >
            SR DIGITAL
          </text>

          {/* DIGITAL MARKETING AGENCY Subtext */}
          <text 
            x="160" 
            y="110" 
            textAnchor="middle" 
            fill="#94a3b8" 
            style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontWeight: 700, 
              fontSize: '11px',
              letterSpacing: '6px',
              textTransform: 'uppercase'
            }}
          >
            Real Estate Conversion Experts
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Logo;
