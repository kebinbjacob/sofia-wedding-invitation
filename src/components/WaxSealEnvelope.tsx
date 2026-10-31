import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
import { musicSynth } from '../utils/audioSynth.ts';

interface WaxSealEnvelopeProps {
  onOpenInvitation: () => void;
  isOpen: boolean;
}

export const WaxSealEnvelope: React.FC<WaxSealEnvelopeProps> = ({ onOpenInvitation, isOpen }) => {
  const [isOpeningAnim, setIsOpeningAnim] = useState<boolean>(false);

  const handleBreakSeal = () => {
    if (isOpeningAnim || isOpen) return;
    setIsOpeningAnim(true);

    // 1. Play tactile wax crack & paper rustle sound immediately
    try {
      musicSynth.playWaxSealCrackSound();
    } catch (e) {
      // ignore
    }

    // 2. Trigger romantic acoustic harp melody
    setTimeout(() => {
      try {
        musicSynth.play();
      } catch (e) {
        console.warn('Audio play initiated:', e);
      }
    }, 280);

    // 3. Celebratory romantic confetti in blush and gold
    try {
      confetti({
        particleCount: 75,
        spread: 90,
        origin: { y: 0.58 },
        colors: ['#C9A875', '#E6D3B3', '#B87D89', '#F7D8DC', '#5C3843', '#FFFBF9'],
        shapes: ['circle'],
        ticks: 220,
        gravity: 0.75,
      });
    } catch (e) {
      // ignore
    }

    // 4. Animate opening sequence
    setTimeout(() => {
      onOpenInvitation();
      setIsOpeningAnim(false);
    }, 1150);
  };

  return (
    <div className="relative mx-auto flex w-full max-w-xl flex-col items-center justify-center px-4 perspective-1200 select-none">
      {/* Introduction text over envelope */}
      <div className="mb-7 text-center space-y-1">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A875]/40 bg-[#FFFBF9]/80 px-3.5 py-1 text-[11px] font-cinzel uppercase tracking-[0.22em] text-[#B87D89] shadow-xs">
          <Sparkles className="h-3 w-3 text-[#C9A875]" />
          <span>Exclusive Wedding Invitation</span>
          <Sparkles className="h-3 w-3 text-[#C9A875]" />
        </div>

        <h1 className="font-serif-royal italic text-3xl sm:text-5xl text-[#5C3843] pt-1">
          Sofia &amp; Akhil
        </h1>

        <p className="font-serif italic text-sm text-[#B87D89] max-w-xs mx-auto">
          Request the honour of your esteemed presence
        </p>
      </div>

      {/* 3D Envelope Container with Heavy Fine Rag Stationery Texture */}
      <div
        className={`relative w-full max-w-[420px] h-[270px] sm:h-[300px] rounded-2xl shadow-[0_25px_60px_-10px_rgba(184,125,137,0.25)] transition-all duration-700 ${
          isOpeningAnim ? 'scale-105' : 'hover:scale-[1.015]'
        }`}
        style={{
          backgroundColor: '#EAD5D7', // Textured blush rose
          border: '1.5px solid #D8A4AB',
          boxShadow: '0 25px 50px -12px rgba(92, 56, 67, 0.22), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
        }}
      >
        {/* Deep Rose Paper Lining with Subtle Botanical Pattern (#C9929B) */}
        <div
          className="absolute inset-1.5 rounded-xl overflow-hidden flex items-center justify-center"
          style={{
            backgroundColor: '#C9929B',
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 0)',
            backgroundSize: '16px 16px',
          }}
        >
          {/* Subtle watermarked couple monogram in interior lining */}
          <div className="text-center opacity-30 pointer-events-none">
            <span className="font-serif-royal text-7xl text-[#FFFBF9] font-normal tracking-wide">
              S &amp; A
            </span>
            <p className="font-cinzel text-[10px] tracking-[0.35em] uppercase text-[#FFFBF9] mt-2 font-medium">
              11 &bull; 12 November 2026
            </p>
          </div>
        </div>

        {/* Peeking Invitation Parchment Card Surface (slides up smoothly during opening) */}
        <div
          className={`absolute inset-x-5 h-[94%] rounded-t-xl bg-[#FFFBF9] border-t-2 border-x-2 border-[#F3E3DF] shadow-lg transition-all duration-1000 ease-out z-10 p-5 text-center ${
            isOpeningAnim || isOpen ? '-translate-y-28 opacity-100' : 'translate-y-2 opacity-95'
          }`}
          style={{
            boxShadow: '0 10px 25px rgba(184, 125, 137, 0.15)',
          }}
        >
          <div className="h-full border border-dashed border-[#C9A875]/50 rounded-lg p-3 flex flex-col items-center justify-center space-y-1">
            <span className="font-serif text-lg text-[#C9A875] leading-none">ॐ</span>
            <span className="font-serif italic text-xs text-[#B87D89]">Om Ganapataye Namah</span>
            <h4 className="font-serif-royal italic text-xl font-bold text-[#5C3843] pt-1">
              Sofia &amp; Akhil
            </h4>
            <span className="text-[9.5px] uppercase tracking-[0.25em] text-[#C9A875] font-cinzel font-semibold">
              Save The Date
            </span>
          </div>
        </div>

        {/* Envelope Left & Right Fold Flaps with realistic shadow bevels */}
        <div
          className="absolute inset-0 pointer-events-none z-15"
          style={{
            clipPath: 'polygon(0 0, 50% 50%, 0 100%)',
            backgroundColor: '#E4CBD0',
            boxShadow: 'inset 0 0 18px rgba(184, 125, 137, 0.28)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-15"
          style={{
            clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)',
            backgroundColor: '#DFBFC5',
            boxShadow: 'inset 0 0 18px rgba(184, 125, 137, 0.32)',
          }}
        />

        {/* Envelope Bottom Flap */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            clipPath: 'polygon(0 100%, 50% 48%, 100% 100%)',
            backgroundColor: '#EAD5D7',
            borderBottom: '1.5px solid #D8A4AB',
            boxShadow: '0 -4px 18px rgba(184, 125, 137, 0.2)',
          }}
        />

        {/* Envelope Top Triangular Flap with 3D Flip */}
        <div
          className={`absolute top-0 inset-x-0 h-[65%] origin-top transition-transform duration-1000 ease-in-out z-25 ${
            isOpeningAnim || isOpen ? '-rotate-x-180 z-5' : 'rotate-x-0'
          }`}
          style={{
            transformStyle: 'preserve-3d',
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            backgroundColor: '#EAD5D7',
            borderTop: '1.5px solid #D8A4AB',
            boxShadow: '0 10px 22px rgba(92, 56, 67, 0.2)',
          }}
        >
          {/* Subtle gold foil accent line along the triangular flap edge */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              clipPath: 'polygon(0 0, 50% 98%, 100% 0, 98% 0, 50% 95%, 2% 0)',
              backgroundColor: '#C9A875',
            }}
          />
        </div>

        {/* 3D Hand-Stamped Rose Gold Wax Seal (#C9A875) */}
        {!isOpen && (
          <button
            type="button"
            onClick={handleBreakSeal}
            aria-label="Break Wax Seal & Open Wedding Invitation"
            className={`group absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer rounded-full transition-all duration-500 active:scale-95 ${
              isOpeningAnim ? 'scale-125 opacity-0 blur-sm' : 'hover:scale-108'
            }`}
            style={{
              width: 82,
              height: 82,
              background: 'radial-gradient(circle at 35% 35%, #F4E4C6 0%, #C9A875 42%, #9E7B44 85%, #7A5826 100%)',
              boxShadow:
                '0 12px 28px rgba(122, 88, 38, 0.45), 0 3px 8px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.75), inset 0 -3px 6px rgba(80, 50, 15, 0.6)',
              border: '2px solid rgba(244, 228, 198, 0.85)',
            }}
          >
            {/* Hand-poured organic wax ripples rim */}
            <div className="absolute -inset-1 rounded-full opacity-70 border border-[#F4E4C6]/80 pointer-events-none" />

            {/* Embossed Couple Monogram & Victorian Wild Rose */}
            <div className="relative flex h-full w-full flex-col items-center justify-center text-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#5C3843]/85 drop-shadow-sm">
                <path
                  d="M12 4C9 4 7 6 7 9C7 12 10 14 12 16C14 14 17 12 17 9C17 6 15 4 12 4Z"
                  fill="#694617"
                  opacity="0.85"
                />
                <circle cx="12" cy="9" r="2.8" fill="#F4E4C6" />
              </svg>
              <span className="font-serif font-black text-xs tracking-wider text-[#4A2D10] drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
                S &bull; A
              </span>
            </div>

            {/* Pulsing Hint Glow */}
            <span className="absolute -inset-2 rounded-full border-2 border-[#C9A875]/70 animate-ping opacity-25 pointer-events-none" />
          </button>
        )}
      </div>

      {/* Interactive Helper CTA */}
      {!isOpen && (
        <div className="mt-9 flex flex-col items-center gap-2.5">
          <button
            onClick={handleBreakSeal}
            disabled={isOpeningAnim}
            className="gold-shimmer-btn group flex items-center gap-2.5 rounded-full border border-[#C9A875] bg-[#FFFBF9] px-7 py-3 text-xs font-cinzel uppercase tracking-[0.22em] text-[#5C3843] shadow-[0_8px_25px_rgba(184,125,137,0.2)] transition-all hover:border-[#B87D89] hover:shadow-[0_10px_30px_rgba(201,168,117,0.35)] active:scale-95 font-bold"
          >
            <Sparkles className="h-4 w-4 text-[#C9A875] transition-transform group-hover:rotate-45" />
            <span>Break Seal &amp; Open Invitation</span>
            <Heart className="h-3.5 w-3.5 text-[#B87D89] fill-[#B87D89]" />
          </button>
          <span className="text-xs font-serif italic text-[#B87D89] tracking-wide">
            Tap the wax seal to enter &bull; Romantic acoustic serenade awaits
          </span>
        </div>
      )}
    </div>
  );
};
