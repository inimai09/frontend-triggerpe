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
      {/* SCOOTER PARTS */}
      {/* Back Wheel */}
      <circle cx="50" cy="165" r="16" fill="#1A1A1A" />
      <circle cx="50" cy="165" r="8" fill="#BDBDBD" />
      
      {/* Front Wheel */}
      <circle cx="150" cy="165" r="16" fill="#1A1A1A" />
      <circle cx="150" cy="165" r="8" fill="#BDBDBD" />

      {/* Frame & Body */}
      <path d="M50 165H150" stroke="#00ACC1" strokeWidth="12" strokeLinecap="round" />
      <path d="M140 165L155 120H130" stroke="#00ACC1" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 165L70 145H130" fill="#00ACC1" />
      <rect x="70" y="140" width="60" height="12" rx="4" fill="#333" /> {/* Seat */}
      
      {/* Delivery Box */}
      <rect x="30" y="95" width="50" height="50" rx="4" fill="#006064" />
      <text x="40" y="128" fill="white" fontSize="22" fontWeight="bold" fontFamily="Space Grotesk">TP</text>

      {/* CHARACTER */}
      {/* Jacket & Body */}
      <path d="M100 145V105" stroke="#FF7043" strokeWidth="26" strokeLinecap="round" />
      <path d="M87 115H113M87 125H113" stroke="white" strokeWidth="3" opacity="0.8" /> {/* Reflective stripes */}
      
      {/* Head & Helmet */}
      <circle cx="100" cy="88" r="16" fill="#FFCCBC" /> {/* Face */}
      <circle cx="95" cy="85" r="2" fill="black" /> {/* Eyes */}
      <circle cx="105" cy="85" r="2" fill="black" />
      <path d="M96 95Q100 98 104 95" stroke="black" strokeWidth="1.5" fill="none" /> {/* Smile */}
      
      {/* Helmet */}
      <path d="M84 88C84 79.1634 91.1634 72 100 72C108.837 72 116 79.1634 116 88H84Z" fill="#00ACC1" />
      <rect x="84" y="80" width="32" height="6" rx="1" fill="#E0F7FA" opacity="0.9" /> {/* Visor */}

      {/* Arms to Handlebars */}
      <path d="M100 110L135 120" stroke="#FF7043" strokeWidth="8" strokeLinecap="round" />

      {/* WEATHER SPECIFIC DRAWINGS */}
      {weather === 'SUNNY' && (
        <g>
          {/* Sun background */}
          <circle cx="170" cy="30" r="15" fill="#FFB74D" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
            <line 
              key={deg}
              x1={170 + 20 * Math.cos(deg * Math.PI / 180)} 
              y1={30 + 20 * Math.sin(deg * Math.PI / 180)}
              x2={170 + 28 * Math.cos(deg * Math.PI / 180)} 
              y2={30 + 28 * Math.sin(deg * Math.PI / 180)}
              stroke="#FFB74D" strokeWidth="3" strokeLinecap="round"
            />
          ))}
          {/* Hand wiping forehead */}
          <path d="M100 110Q90 90 92 78" stroke="#FFCCBC" strokeWidth="7" strokeLinecap="round" />
          <path d="M96 86Q94 88 92 86" stroke="black" strokeWidth="1" /> {/* Squint eye */}
          <path d="M104 86Q106 88 108 86" stroke="black" strokeWidth="1" />
        </g>
      )}

      {weather === 'RAIN' && (
        <g>
          {/* Yellow Raincoat overlay */}
          <path d="M100 145V105" stroke="#FDD835" strokeWidth="28" strokeLinecap="round" />
          {/* Umbrella */}
          <path d="M70 65C70 45 100 25 130 65H70Z" fill="#EF5350" />
          <line x1="100" y1="35" x2="100" y2="70" stroke="#333" strokeWidth="3" />
          {/* Rain drops */}
          {[1,2,3,4,5,6,7].map(i => (
            <line key={i} x1={20 + i*25} y1="10" x2={15 + i*25} y2="30" stroke="#4FC3F7" strokeWidth="2.5" strokeLinecap="round" />
          ))}
          {[1,2,3,4,5,6,7].map(i => (
            <line key={i+10} x1={30 + i*25} y1="40" x2={25 + i*25} y2="60" stroke="#4FC3F7" strokeWidth="2.5" strokeLinecap="round" />
          ))}
        </g>
      )}

      {weather === 'SNOW' && (
        <g>
          {/* Heavy grey jacket */}
          <path d="M100 145V105" stroke="#455A64" strokeWidth="34" strokeLinecap="round" />
          {/* Shivering motion lines */}
          <path d="M80 110L75 112M80 125L75 127" stroke="#00838F" strokeWidth="1.5" />
          <path d="M120 110L125 112M120 125L125 127" stroke="#00838F" strokeWidth="1.5" />
          {/* Snowflakes */}
          {[1,2,3,4,5,6,7,8,9,10].map(i => (
            <circle key={i} cx={20 + (i*19)%160} cy={10 + (i*23)%120} r="3" fill="white" stroke="#E2E8F0" strokeWidth="0.5" />
          ))}
        </g>
      )}

      {weather === 'THUNDER' && (
        <g>
          {/* Lightning bolts */}
          <path d="M160 10L145 40L165 40L145 85" stroke="#FFB74D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M40 10L25 40L45 40L25 85" stroke="#FFB74D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Surprise expression */}
          <circle cx="100" cy="94" r="3" fill="black" /> {/* O-mouth */}
          {/* Arms raised */}
          <path d="M100 110L75 85" stroke="#FF7043" strokeWidth="9" strokeLinecap="round" />
          <path d="M100 110L125 85" stroke="#FF7043" strokeWidth="9" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}