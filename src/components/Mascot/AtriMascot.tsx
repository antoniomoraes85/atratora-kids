import React from 'react';

interface AtriMascotProps {
  size?: number | string;
  expression?: 'happy' | 'excited' | 'thinking' | 'star';
  className?: string;
}

export const AtriMascot: React.FC<AtriMascotProps> = ({
  size = 120,
  expression = 'happy',
  className = ''
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`atri-mascot ${className}`}
      style={{ display: 'inline-block', filter: 'drop-shadow(0 10px 20px rgba(99, 102, 241, 0.4))' }}
      aria-label="Atri Mascote Estrela"
    >
      <defs>
        <linearGradient id="atriGrad" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="cheekGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FB7185" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Main Star Body */}
      <path
        d="M100 12 L124 68 L185 76 L141 119 L151 180 L100 151 L49 180 L59 119 L15 76 L76 68 Z"
        fill="url(#atriGrad)"
        stroke="#FBBF24"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Cheeks */}
      <ellipse cx="62" cy="115" rx="14" ry="10" fill="url(#cheekGrad)" />
      <ellipse cx="138" cy="115" rx="14" ry="10" fill="url(#cheekGrad)" />

      {/* Eyes */}
      {expression === 'excited' ? (
        <>
          <path d="M68 92 Q78 80 88 92" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
          <path d="M112 92 Q122 80 132 92" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
        </>
      ) : expression === 'thinking' ? (
        <>
          <circle cx="78" cy="88" r="7" fill="#1E293B" />
          <circle cx="122" cy="80" r="9" fill="#1E293B" />
          <circle cx="125" cy="78" r="3" fill="#FFFFFF" />
        </>
      ) : (
        <>
          <circle cx="78" cy="88" r="8" fill="#1E293B" />
          <circle cx="81" cy="85" r="3" fill="#FFFFFF" />
          <circle cx="122" cy="88" r="8" fill="#1E293B" />
          <circle cx="125" cy="85" r="3" fill="#FFFFFF" />
        </>
      )}

      {/* Mouth */}
      {expression === 'excited' ? (
        <path d="M80 125 Q100 150 120 125 Z" fill="#E11D48" stroke="#1E293B" strokeWidth="4" />
      ) : (
        <path d="M82 122 Q100 138 118 122" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" fill="none" />
      )}

      {/* Sparkles */}
      <circle cx="160" cy="40" r="5" fill="#FDE047" />
      <circle cx="35" cy="45" r="4" fill="#38BDF8" />
    </svg>
  );
};
