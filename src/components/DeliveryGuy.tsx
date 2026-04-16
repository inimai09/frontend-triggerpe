
import React from 'react';

interface DeliveryGuyProps {
  weather?: 'SUNNY' | 'RAIN' | 'SNOW' | 'THUNDER';
  className?: string;
}

export function DeliveryGuy({ weather = 'SUNNY', className = "" }: DeliveryGuyProps) {
  return (
    <svg 
      viewBox="0 0 240 240" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* SHADOW BASE */}
      <ellipse cx="120" cy="210" rx="80" ry="12" fill="rgba(0,0,0,0.3)" />

      {/* SCOOTER - HIGH FIDELITY DESIGN */}
      <g id="scooter">
        {/* Wheels with Hubs */}
        <g id="rear-wheel">
          <circle cx="60" cy="190" r="22" fill="#121212" />
          <circle cx="60" cy="190" r="14" fill="#2C2C2C" />
          <circle cx="60" cy="190" r="8" fill="#00ACC1" opacity="0.8" />
        </g>
        <g id="front-wheel">
          <circle cx="180" cy="190" r="22" fill="#121212" />
          <circle cx="180" cy="190" r="14" fill="#2C2C2C" />
          <circle cx="180" cy="190" r="8" fill="#00ACC1" opacity="0.8" />
        </g>

        {/* Chassis & Bodywork */}
        <path d="M60 190H180" stroke="#00ACC1" strokeWidth="14" strokeLinecap="round" />
        <path d="M165 190L185 130H150" stroke="#006064" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M70 190L85 160H160L150 190H70Z" fill="#00ACC1" />
        
        {/* Seat */}
        <rect x="85" y="150" width="70" height="14" rx="6" fill="#1A1A1A" />
        
        {/* Steering Column */}
        <line x1="175" y1="135" x2="160" y2="105" stroke="#333" strokeWidth="6" strokeLinecap="round" />
        <rect x="150" y="100" width="20" height="6" rx="3" fill="#1A1A1A" /> {/* Handlebars */}

        {/* Delivery Box with TP Logo */}
        <g id="delivery-box">
          <rect x="35" y="105" width="60" height="60" rx="8" fill="#004D40" />
          <rect x="40" y="110" width="50" height="50" rx="4" fill="#006064" />
          <text x="47" y="145" fill="white" fontSize="24" fontWeight="900" fontFamily="Space Grotesk">TP</text>
        </g>
      </g>

      {/* CHARACTER - HIGH FIDELITY */}
      <g id="character">
        {/* Body & Jacket */}
        <path d="M120 160V110" stroke="#FF7043" strokeWidth="32" strokeLinecap="round" />
        <path d="M104 125H136" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.6" /> {/* Safety Stripe */}
        <path d="M104 140H136" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.6" />

        {/* Arms */}
        <path d="M120 120L160 115" stroke="#FF7043" strokeWidth="10" strokeLinecap="round" />

        {/* Head & Helmet */}
        <circle cx="120" cy="85" r="18" fill="#FFCCBC" /> {/* Face */}
        <g id="face-details">
          <circle cx="114" cy="82" r="2" fill="black" />
          <circle cx="126" cy="82" r="2" fill="black" />
          <path d="M115 92Q120 96 125 92" stroke="black" strokeWidth="1.5" fill="none" />
        </g>
        
        {/* Helmet with Visor */}
        <path d="M102 85C102 75 110 67 120 67C130 67 138 75 138 85H102Z" fill="#00ACC1" />
        <rect x="105" y="75" width="30" height="8" rx="2" fill="#E0F7FA" opacity="0.9" /> {/* Visor */}
      </g>

      {/* WEATHER OVERLAYS */}
      {weather === 'SUNNY' && (
        <g id="weather-sunny">
          <circle cx="210" cy="40" r="20" fill="#FFB74D">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
          </circle>
          {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
            <line 
              key={deg}
              x1={210 + 25 * Math.cos(deg * Math.PI / 180)} 
              y1={40 + 25 * Math.sin(deg * Math.PI / 180)}
              x2={210 + 35 * Math.cos(deg * Math.PI / 180)} 
              y2={40 + 35 * Math.sin(deg * Math.PI / 180)}
              stroke="#FFB74D" strokeWidth="4" strokeLinecap="round"
            />
          ))}
          <path d="M120 110Q110 85 108 75" stroke="#FFCCBC" strokeWidth="8" strokeLinecap="round" /> {/* Wiping forehead */}
        </g>
      )}

      {weather === 'RAIN' && (
        <g id="weather-rain">
          {/* Transparent Raincoat overlay */}
          <path d="M120 160V110" stroke="#FDD835" strokeWidth="36" strokeLinecap="round" opacity="0.4" />
          {/* Umbrella */}
          <path d="M90 70C90 40 120 20 150 70H90Z" fill="#EF5350" />
          <line x1="120" y1="30" x2="120" y2="75" stroke="#333" strokeWidth="4" />
          {/* Dynamic Rain */}
          {[1,2,3,4,5,6,7,8].map(i => (
            <line key={i} x1={30 + i*25} y1="10" x2={25 + i*25} y2="30" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="y1" values="10;240" dur="0.8s" repeatCount="indefinite" begin={`${i*0.1}s`} />
              <animate attributeName="y2" values="30;260" dur="0.8s" repeatCount="indefinite" begin={`${i*0.1}s`} />
            </line>
          ))}
        </g>
      )}

      {weather === 'SNOW' && (
        <g id="weather-snow">
          <path d="M120 160V110" stroke="#455A64" strokeWidth="40" strokeLinecap="round" /> {/* Puffy jacket */}
          {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
            <circle key={i} cx={20 + (i*21)%200} cy={10 + (i*17)%220} r="3" fill="white">
              <animate attributeName="cy" values="0;240" dur="3s" repeatCount="indefinite" begin={`${i*0.2}s`} />
              <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin={`${i*0.2}s`} />
            </circle>
          ))}
        </g>
      )}

      {weather === 'THUNDER' && (
        <g id="weather-thunder">
          <path d="M200 20L180 60L210 60L180 120" stroke="#FFB74D" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            <animate attributeName="opacity" values="0;1;0;1;0" dur="0.5s" repeatCount="indefinite" />
          </path>
          <path d="M40 20L20 60L50 60L20 120" stroke="#FFB74D" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            <animate attributeName="opacity" values="0;1;0;1;0" dur="0.7s" repeatCount="indefinite" />
          </path>
          {/* Shocked expression */}
          <circle cx="120" cy="93" r="4" fill="black" /> 
        </g>
      )}
    </svg>
  );
}
