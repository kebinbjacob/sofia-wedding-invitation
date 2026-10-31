import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Heart } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const CountdownTicker: React.FC = () => {
  // Wedding ceremony: 12 November 2026, 10:30 AM IST (UTC+5:30)
  const targetDate = new Date('2026-11-12T10:30:00+05:30').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="relative mx-auto my-10 max-w-xl px-4 text-center">
      {/* Decorative subtitle */}
      <div className="mb-4 flex items-center justify-center gap-2">
        <Heart className="h-3.5 w-3.5 text-[#B87D89] fill-[#B87D89]/40" />
        <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#B87D89] font-medium">
          Counting Down The Moments
        </span>
        <Heart className="h-3.5 w-3.5 text-[#B87D89] fill-[#B87D89]/40" />
      </div>

      <h3 className="font-serif text-2xl sm:text-3xl text-[#5C3843] italic mb-6">
        Until We Say &ldquo;I Do&rdquo;
      </h3>

      {/* Circular Blush-Tinted Parchment Tiles with Champagne Gold Rings */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-5 justify-center">
        {timeUnits.map((unit, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* Circular Tile */}
            <div className="relative flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-full border-2 border-[#C9A875]/70 bg-[#FFFBF9] shadow-[0_6px_20px_rgba(184,125,137,0.14)] transition-transform hover:scale-105">
              {/* Inner Delicate Dash Ring */}
              <div className="absolute inset-1.5 rounded-full border border-dashed border-[#B87D89]/30 pointer-events-none" />

              {/* Number Value */}
              <span className="font-serif-royal text-xl sm:text-3xl font-bold text-[#5C3843]">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>

            {/* Label below */}
            <span className="mt-2 font-cinzel text-[10px] sm:text-xs uppercase tracking-widest text-[#B87D89] font-semibold">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      {/* Date badge */}
      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#F3E3DF] bg-[#FAF0EE]/70 px-4 py-1.5 text-xs text-[#5C3843]">
        <Calendar className="h-3.5 w-3.5 text-[#C9A875]" />
        <span className="font-serif italic tracking-wide">
          12 November 2026 &bull; 10:30 AM IST &bull; Koyipuram Auditorium
        </span>
      </div>
    </div>
  );
};
