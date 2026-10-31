import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { MonogramCrest, FloralDivider } from './BotanicalOrnaments.tsx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#F3E3DF] bg-[#FAF0EE]/70 pt-12 pb-24 text-center">
      <div className="mx-auto max-w-4xl px-4">
        {/* Monogram Crest */}
        <div className="mb-4">
          <MonogramCrest size={95} />
        </div>

        <h3 className="font-serif-royal italic text-2xl sm:text-3xl text-[#5C3843]">
          Sofia &amp; Akhil
        </h3>

        <p className="mt-1 font-cinzel text-xs uppercase tracking-[0.25em] text-[#B87D89] font-medium">
          11 &bull; 12 November 2026 &bull; Kerala, India
        </p>

        <FloralDivider className="my-6 max-w-xs mx-auto" />

        <p className="font-serif italic text-sm text-[#5C3843]/85 max-w-md mx-auto leading-relaxed">
          &ldquo;Two lives, two hearts, joined together in friendship, united forever in love.&rdquo;
        </p>

        {/* Best regards note from original card */}
        <div className="mt-6 space-y-1">
          <span className="font-script text-xl text-[#B87D89]">With Best Regards</span>
          <p className="font-serif font-bold text-base text-[#5C3843]">
            Aju MS &amp; Sonia S Nair
          </p>
          <p className="font-serif italic text-xs text-[#5C3843]/70">
            Shylendran Nair &amp; Ajitha S Nair &bull; Rajan T &amp; Valsala
          </p>
        </div>

        {/* Back to top button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-full border border-[#F3E3DF] bg-[#FFFBF9] px-4 py-2 text-xs font-cinzel uppercase tracking-wider text-[#5C3843] shadow-xs transition-all hover:bg-white hover:border-[#B87D89]"
          >
            <ArrowUp className="h-3.5 w-3.5 text-[#B87D89]" />
            <span>Back to Top</span>
          </button>
        </div>

        <div className="mt-8 text-[11px] font-sans text-[#5C3843]/60 flex items-center justify-center gap-1">
          <span>Crafted with</span>
          <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
          <span>for the Wedding Celebration of Sofia &amp; Akhil</span>
        </div>
      </div>
    </footer>
  );
};
