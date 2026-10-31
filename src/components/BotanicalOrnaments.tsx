import React from 'react';

// Victorian Botanical Corner Ornament (Wild rose, bud, & eucalyptus sprig line art)
export const BotanicalCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
}> = ({ position, className = '', size = 115 }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-left':
        return '';
      case 'top-right':
        return 'scaleX(-1)';
      case 'bottom-left':
        return 'scaleY(-1)';
      case 'bottom-right':
        return 'scale(-1, -1)';
      default:
        return '';
    }
  };

  return (
    <div
      style={{
        width: size,
        height: size,
        transform: getTransform(),
      }}
      className={`pointer-events-none select-none ${className}`}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Victorian Frame Accent */}
        <path
          d="M 6 6 L 108 6 C 85 10 50 22 34 38 C 22 50 10 85 6 108 Z"
          stroke="#B87D89"
          strokeWidth="0.9"
          strokeOpacity="0.45"
          fill="none"
        />
        <path
          d="M 12 12 L 85 12 C 65 16 38 28 26 46 C 16 62 12 85 12 85"
          stroke="#C9A875"
          strokeWidth="0.7"
          strokeOpacity="0.75"
          strokeDasharray="2.5 3"
        />

        {/* Wild Rose Blossom in the corner */}
        <g transform="translate(34, 34)">
          {/* Rose Petals */}
          <path
            d="M 0 -13 C 6 -20 14 -13 11 -5 C 18 -8 22 0 16 7 C 20 14 12 20 4 15 C 2 22 -7 21 -9 14 C -17 17 -20 9 -13 3 C -20 -3 -13 -12 -5 -10 C -8 -18 1 -20 0 -13 Z"
            fill="#FFFBF9"
            stroke="#B87D89"
            strokeWidth="1.15"
          />
          {/* Inner Petal Layers */}
          <path
            d="M 0 -8 C 5 -11 9 -7 7 -2 C 10 -3 12 1 9 6 C 11 9 7 12 2 10 C 1 13 -5 12 -6 9 C -10 10 -12 5 -8 1 C -11 -2 -8 -8 -3 -6 Z"
            fill="#FAF0EE"
            stroke="#B87D89"
            strokeWidth="0.9"
          />
          {/* Center Stamen in Gilded Champagne */}
          <circle cx="0" cy="0" r="3.2" fill="#C9A875" />
          <circle cx="0" cy="0" r="1.4" fill="#5C3843" />
        </g>

        {/* Stem 1: Arching Wild Rose Stem with Leaves */}
        <path
          d="M 40 36 C 58 44 78 42 102 26"
          stroke="#B87D89"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        {/* Leaf pairs */}
        <path
          d="M 60 40 C 66 36 74 39 72 47 C 66 47 61 44 60 40 Z"
          fill="#FAF0EE"
          stroke="#B87D89"
          strokeWidth="0.85"
        />
        <path
          d="M 78 36 C 84 30 92 33 89 40 C 83 41 79 39 78 36 Z"
          fill="#FAF0EE"
          stroke="#B87D89"
          strokeWidth="0.85"
        />
        {/* Rose bud at tip */}
        <path
          d="M 102 26 C 107 22 112 27 108 31 C 104 32 101 29 102 26 Z"
          fill="#E8C5CA"
          stroke="#B87D89"
          strokeWidth="0.9"
        />

        {/* Stem 2: Downward Eucalyptus Branch */}
        <path
          d="M 36 40 C 44 58 42 78 26 102"
          stroke="#B87D89"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        {/* Round Eucalyptus Leaves */}
        <circle cx="42" cy="60" r="7" fill="#FAF0EE" stroke="#B87D89" strokeWidth="0.85" />
        <circle cx="38" cy="76" r="6" fill="#FAF0EE" stroke="#B87D89" strokeWidth="0.85" />
        <circle cx="29" cy="90" r="5" fill="#FAF0EE" stroke="#B87D89" strokeWidth="0.85" />
        {/* Leaf veins */}
        <line x1="40" y1="60" x2="46" y2="60" stroke="#B87D89" strokeWidth="0.6" strokeOpacity="0.7" />
        <line x1="36" y1="76" x2="41" y2="76" stroke="#B87D89" strokeWidth="0.6" strokeOpacity="0.7" />

        {/* Little Champagne Gold berry sprig */}
        <path d="M 46 28 C 54 22 64 22 70 17" stroke="#C9A875" strokeWidth="0.85" />
        <circle cx="56" cy="24" r="2.2" fill="#C9A875" />
        <circle cx="66" cy="20" r="2" fill="#C9A875" />
        <circle cx="71" cy="16" r="2.4" fill="#C9A875" />
      </svg>
    </div>
  );
};

// Elegant Rosebud & Vine Horizontal Divider with Gold Leaves
export const FloralDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center my-7 text-[#B87D89] select-none ${className}`}>
      {/* Left Vine */}
      <div className="flex-1 max-w-[150px] h-px bg-gradient-to-r from-transparent via-[#C9A875]/80 to-[#B87D89]" />

      {/* Center Floral Crest Motif */}
      <div className="mx-4 flex items-center gap-2">
        {/* Left Leaflet */}
        <svg width="24" height="15" viewBox="0 0 24 15" fill="none" className="text-[#B87D89]">
          <path
            d="M 2 7.5 C 9 2 18 3 22 7.5 C 15 9.5 8 9.5 2 7.5 Z"
            fill="#FAF0EE"
            stroke="currentColor"
            strokeWidth="0.95"
          />
          <path d="M 3 7.5 L 20 7.5" stroke="#C9A875" strokeWidth="0.7" />
        </svg>

        {/* Center Blooming Rosebud in Beaded Ring */}
        <div className="relative flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="12" stroke="#C9A875" strokeWidth="0.9" strokeDasharray="1.8 2.2" />
            <circle cx="14" cy="14" r="9" fill="#FFFBF9" stroke="#B87D89" strokeWidth="0.95" />
            <path
              d="M 14 9 C 16 11 17 14 15 17 C 13 18 11 16 12 14 C 13 12 15 13 14 15"
              stroke="#B87D89"
              strokeWidth="1.15"
              strokeLinecap="round"
            />
            <circle cx="14" cy="14" r="1.8" fill="#C9A875" />
          </svg>
        </div>

        {/* Right Leaflet */}
        <svg width="24" height="15" viewBox="0 0 24 15" fill="none" className="text-[#B87D89] transform scale-x-[-1]">
          <path
            d="M 2 7.5 C 9 2 18 3 22 7.5 C 15 9.5 8 9.5 2 7.5 Z"
            fill="#FAF0EE"
            stroke="currentColor"
            strokeWidth="0.95"
          />
          <path d="M 3 7.5 L 20 7.5" stroke="#C9A875" strokeWidth="0.7" />
        </svg>
      </div>

      {/* Right Vine */}
      <div className="flex-1 max-w-[150px] h-px bg-gradient-to-l from-transparent via-[#C9A875]/80 to-[#B87D89]" />
    </div>
  );
};

// Royal Monogram Crest / Beaded Medallion ("S & A" Sofia & Akhil)
export const MonogramCrest: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 145,
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative mx-auto flex items-center justify-center ${className}`}
    >
      <svg viewBox="0 0 160 160" className="w-full h-full filter drop-shadow-[0_6px_16px_rgba(184,125,137,0.22)]">
        {/* Outer Beaded Ring */}
        <circle
          cx="80"
          cy="80"
          r="75"
          fill="#FFFBF9"
          stroke="#C9A875"
          strokeWidth="1.4"
        />
        <circle
          cx="80"
          cy="80"
          r="71.5"
          fill="none"
          stroke="#B87D89"
          strokeWidth="0.7"
          strokeDasharray="2 3"
        />

        {/* Inner Parchment Layer */}
        <circle
          cx="80"
          cy="80"
          r="66"
          fill="#FAF0EE"
          stroke="#F3E3DF"
          strokeWidth="1.6"
        />

        {/* Victorian Botanical Wreath Encircling the Monogram */}
        <path
          d="M 28 80 C 28 46 50 28 80 28 C 110 28 132 46 132 80 C 132 114 110 132 80 132 C 50 132 28 114 28 80 Z"
          fill="none"
          stroke="#C9A875"
          strokeWidth="0.85"
        />

        {/* Petite Botanical Leaves along wreath */}
        <g stroke="#B87D89" strokeWidth="0.75" fill="#FFFBF9">
          <circle cx="34" cy="62" r="3.2" />
          <circle cx="48" cy="42" r="3.2" />
          <circle cx="70" cy="32" r="3.2" />
          <circle cx="90" cy="32" r="3.2" />
          <circle cx="112" cy="42" r="3.2" />
          <circle cx="126" cy="62" r="3.2" />
          <circle cx="126" cy="98" r="3.2" />
          <circle cx="112" cy="118" r="3.2" />
          <circle cx="90" cy="128" r="3.2" />
          <circle cx="70" cy="128" r="3.2" />
          <circle cx="48" cy="118" r="3.2" />
          <circle cx="34" cy="98" r="3.2" />
        </g>

        {/* Rosebud finials at top and bottom of medallion */}
        <g transform="translate(80, 22)">
          <circle cx="0" cy="0" r="4" fill="#B87D89" />
          <circle cx="0" cy="0" r="1.8" fill="#E6D3B3" />
        </g>
        <g transform="translate(80, 138)">
          <circle cx="0" cy="0" r="4" fill="#B87D89" />
          <circle cx="0" cy="0" r="1.8" fill="#E6D3B3" />
        </g>
      </svg>

      {/* Monogram Letters */}
      <div className="absolute inset-0 flex flex-col items-center justify-center select-none pt-0.5">
        <div className="flex items-center justify-center gap-1 font-serif-royal font-semibold text-[#5C3843]">
          <span className="text-4xl tracking-tight text-[#5C3843] drop-shadow-xs">S</span>
          <span className="font-script text-3xl text-[#C9A875] -mt-1">&amp;</span>
          <span className="text-4xl tracking-tight text-[#5C3843] drop-shadow-xs">A</span>
        </div>
        <span className="font-cinzel text-[9px] uppercase tracking-[0.28em] text-[#B87D89] font-semibold -mt-1">
          Sofia &bull; Akhil
        </span>
      </div>
    </div>
  );
};

// Traditional Auspicious Invocation Header with Lord Shiva & Goddess Parvati Sacred Medallion
export const AuspiciousHeader: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`text-center space-y-2 select-none ${className}`}>
      {/* Sacred Om Symbol in Gilded Frame */}
      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-[#C9A875]/60 bg-gradient-to-b from-[#FFFBF9] to-[#FAF0EE] shadow-xs">
        <span className="font-serif text-2xl text-[#C9A875] leading-none">ॐ</span>
      </div>

      <p className="font-serif italic text-sm tracking-widest text-[#5C3843]">
        Om Ganapataye Namah
      </p>

      {/* Sacred Shiva & Parvati Artistic Medallion (from authentic card) */}
      <div className="relative mx-auto my-3 flex flex-col items-center justify-center">
        <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border-2 border-[#C9A875]/70 bg-[#FFFBF9] p-1.5 shadow-[0_6px_20px_rgba(201,168,117,0.2)]">
          {/* Decorative wreath framing */}
          <div className="absolute -inset-2 rounded-full border border-dashed border-[#B87D89]/40 pointer-events-none" />

          {/* Shiva & Parvati Divine Motif SVG Illustration */}
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#5C3843]">
            {/* Background divine halo */}
            <circle cx="50" cy="50" r="44" fill="#FAF0EE" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#C9A875" strokeWidth="0.8" strokeDasharray="2 2" />

            {/* Sacred Trishul & Crescent Moon */}
            <path d="M 38 18 L 38 48" stroke="#C9A875" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 34 22 C 34 26 42 26 42 22" stroke="#C9A875" strokeWidth="1" fill="none" />
            <path d="M 38 14 L 38 18" stroke="#C9A875" strokeWidth="1.4" />
            <path d="M 46 16 C 49 19 49 25 45 27 C 49 26 51 22 49 17 Z" fill="#C9A875" />

            {/* Shiva & Parvati Silhouette & Garland */}
            {/* Shiva Head & Crown */}
            <circle cx="43" cy="38" r="9" fill="#FFFBF9" stroke="#5C3843" strokeWidth="1.2" />
            <path d="M 39 31 C 41 26 47 26 48 31" fill="#5C3843" />
            <circle cx="43.5" cy="34" r="1" fill="#C9A875" />

            {/* Parvati Head & Traditional Ornaments */}
            <circle cx="57" cy="44" r="8" fill="#FFFBF9" stroke="#B87D89" strokeWidth="1.2" />
            <path d="M 54 38 C 58 35 63 38 64 42" fill="#5C3843" />
            <circle cx="57" cy="40" r="1" fill="#B87D89" />

            {/* Sacred Garland uniting the Divine Couple */}
            <path
              d="M 35 56 C 42 66 58 66 65 56 C 58 60 42 60 35 56 Z"
              fill="#FAF0EE"
              stroke="#C9A875"
              strokeWidth="1"
            />
            {/* Tiny floral dots on garland */}
            <circle cx="41" cy="59" r="1.5" fill="#B87D89" />
            <circle cx="50" cy="62" r="1.8" fill="#C9A875" />
            <circle cx="59" cy="59" r="1.5" fill="#B87D89" />

            {/* Greenish floral leaves base */}
            <path d="M 32 68 C 40 64 45 70 50 68 C 55 70 60 64 68 68 C 60 74 40 74 32 68 Z" fill="#D8A4AB" opacity="0.45" />
          </svg>
        </div>

        <div className="mt-2 text-center">
          <span className="font-serif italic text-xs tracking-wide text-[#B87D89]">
            With the Divine Grace &amp; Blessings of Lord Shiva &amp; Goddess Parvati
          </span>
        </div>
      </div>
    </div>
  );
};
