import React from 'react';

interface DeliveryGuyProps {
  weather?: 'SUNNY' | 'RAIN' | 'SNOW' | 'THUNDER';
  className?: string;
}

export function DeliveryGuy({ weather = 'SUNNY', className = "" }: DeliveryGuyProps) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* SCOOTER BASE */}
      {/* Back Wheel */}
      <circle cx="50" cy="160" r="15" fill="#333" />
      <circle cx="50" cy="160" r="8" fill="#999" />
      
      {/* Front Wheel */}
      <circle cx="150" cy="160" r="15" fill="#333" />
      <circle cx="150" cy="160" r="8" fill="#999" />

      {/* Frame */}
      <path d="M50 160 L70 160 L140 160 L150 160" stroke="#00ACC1" strokeWidth="10" strokeLinecap="round" />
      <path d="M140 160 L155 120" stroke="#00ACC1" strokeWidth="8" strokeLinecap="round" />
      <path d="M155 120 L135 120" stroke="#333" strokeWidth="5" strokeLinecap="round" /> {/* Handlebars */}
      
      {/* Body / Seat */}
      <rect x="65" y="145" width="60" height="15" rx="5" fill="#333" />
      
      {/* DELIVERY BOX */}
      <rect x="35" y="100" width="45" height="45" rx="4" fill="#006064" />
      <text x="45" y="130" fill="white" fontSize="18" fontWeight="bold" fontFamily="Space Grotesk">TP</text>

      {/* DELIVERY PERSON */}
      {/* Body */}
      <path d="M100 145 L100 100" stroke="#FF7043" strokeWidth="25" strokeLinecap="round" /> {/* Jacket */}
      <path d="M100 115 L100 105" stroke="white" strokeWidth="2" strokeDasharray="4 2" /> {/* Reflective stripes */}
      
      {/* Arms */}
      <path d="M100 110 L135 120" stroke="#FF7043" strokeWidth="8" strokeLinecap="round" />
      
      {/* Legs */}
      <path d="M90 145 L110 160" stroke="#333" strokeWidth="10" strokeLinecap="round" />
      
      {/* Head & Helmet */}
      <circle cx="100" cy="85" r="15" fill="#FFCCBC" /> {/* Face */}
      {/* Face features */}
      <circle cx="95" cy="85" r="1.5" fill="black" />
      <circle cx="105" cy="85" r="1.5" fill="black" />
      <path d="M97 92 Q100 95 103 92" stroke="black" strokeWidth="1" fill="none" /> {/* Smile */}
      
      {/* Helmet */}
      <path d="M85 85 A15 15 0 0 1 115 85" fill="#00ACC1" />
      <rect x="85" y="75" width="30" height="10" rx="2" fill="#00ACC1" />
      <rect x="90" y="80" width="20" height="6" fill="#E0F7FA" opacity="0.6" /> {/* Visor */}

      {/* WEATHER VARIATIONS */}
      {weather === 'SUNNY' && (
        <g>
          <circle cx="170" cy="30" r="15" fill="#FFB74D" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
            <line 
              key={deg}
              x1={170 + 20 * Math.cos(deg * Math.PI / 180)} 
              y1={30 + 20 * Math.sin(deg * Math.PI / 180)}
              x2={170 + 28 * Math.cos(deg * Math.PI / 180)} 
              y2={30 + 28 * Math.sin(deg * Math.PI / 180)}
              stroke="#FFB74D" strokeWidth="2"
            />
          ))}
          {/* Hand wiping forehead */}
          <path d="M100 110 Q90 90 95 75" stroke="#FFCCBC" strokeWidth="6" strokeLinecap="round" />
        </g>
      )}

      {weather === 'RAIN' && (
        <g>
          {/* Raincoat overlay */}
          <path d="M100 145 L100 100" stroke="#FDD835" strokeWidth="28" strokeLinecap="round" opacity="0.9" />
          {/* Umbrella */}
          <path d="M70 60 Q100 20 130 60" fill="#EF5350" />
          <line x1="100" y1="30" x2="100" y2="70" stroke="#333" strokeWidth="2" />
          {/* Raindrops */}
          {[1,2,3,4,5].map(i => (
            <line key={i} x1={30 + i*30} y1="20" x2={25 + i*30} y2="40" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" />
          ))}
          {[1,2,3,4,5].map(i => (
            <line key={i+5} x1={40 + i*30} y1="50" x2={35 + i*30} y2="70" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" />
          ))}
        </g>
      )}

      {weather === 'SNOW' && (
        <g>
          {/* Thick jacket */}
          <path d="M100 145 L100 100" stroke="#546E7A" strokeWidth="32" strokeLinecap="round" />
          {/* Shivering lines */}
          <path d="M80 110 L82 115" stroke="#333" strokeWidth="1" />
          <path d="M120 110 L122 115" stroke="#333" strokeWidth="1" />
          {/* Snowflakes */}
          {[1,2,3,4,5,6,7,8].map(i => (
            <circle key={i} cx={20 + (i*22) % 160} cy={10 + (i*25) % 100} r="2.5" fill="white" />
          ))}
        </g>
      )}

      {weather === 'THUNDER' && (
        <g>
          {/* Lightning */}
          <path d="M160 10 L140 40 L160 40 L140 80" stroke="#FDD835" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Surprised expression */}
          <circle cx="100" cy="91" r="2" fill="black" /> {/* Mouth open */}
          {/* Arms raised */}
          <path d="M100 110 L80 90" stroke="#FF7043" strokeWidth="8" strokeLinecap="round" />
          <path d="M100 110 L120 90" stroke="#FF7043" strokeWidth="8" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}
