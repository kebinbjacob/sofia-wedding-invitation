import React, { useState } from 'react';
import { Share2, MapPin, Calendar, Heart, FileText, Check, Sparkles, Maximize2, X } from 'lucide-react';
import {
  BotanicalCorner,
  FloralDivider,
  MonogramCrest,
  AuspiciousHeader,
} from './BotanicalOrnaments.tsx';

interface InvitationCardProps {
  onOpenOriginalCard: () => void;
  onScrollToRsvp: () => void;
  onScrollToEvents: () => void;
  onScrollToLocation: () => void;
}

export const InvitationCard: React.FC<InvitationCardProps> = ({
  onOpenOriginalCard,
  onScrollToRsvp,
  onScrollToEvents,
  onScrollToLocation,
}) => {
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);

  const handleShare = () => {
    const text = 'Together with their families, Sofia S Nair & Akhil RV cordially invite you to celebrate their wedding on 11 & 12 November 2026.';

    if (navigator.share) {
      navigator
        .share({
          title: 'Wedding of Sofia & Akhil',
          text,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <article aria-label="Wedding Invitation Card" className="relative mx-auto my-8 w-full max-w-3xl px-3 sm:px-6">
      {/* Outer Luxury Deckle Edge Card Surface */}
      <div className="relative overflow-hidden rounded-[36px] p-2.5 sm:p-5 deckle-card bg-[#FFFBF9] transition-all duration-700">
        {/* Archival Rag Paper Inner Surface with Beveled Matting */}
        <div
          className="relative rounded-[26px] border-2 border-[#F3E3DF] p-6 sm:p-12 text-center"
          style={{
            backgroundColor: '#FFFBF9',
            boxShadow: 'inset 0 0 50px rgba(250, 240, 238, 0.95)',
          }}
        >
          {/* Fine Victorian Botanical Corner Filigrees (#B87D89) */}
          <BotanicalCorner position="top-left" className="absolute top-2 left-2" size={105} />
          <BotanicalCorner position="top-right" className="absolute top-2 right-2" size={105} />
          <BotanicalCorner position="bottom-left" className="absolute bottom-2 left-2" size={105} />
          <BotanicalCorner position="bottom-right" className="absolute bottom-2 right-2" size={105} />

          {/* Traditional Auspicious Header & Shiva-Parvati Divine Medallion */}
          <AuspiciousHeader className="mb-4" />

          {/* Couple Monogram Wreath Crest with Gentle Breathing Floating Animation */}
          <div className="my-4 animate-float-gentle">
            <MonogramCrest size={135} />
          </div>

          {/* "Together with their families" in royal calligraphy script */}
          <div className="space-y-1.5 mt-3">
            <p className="font-cinzel text-xs sm:text-[13px] uppercase tracking-[0.3em] text-[#B87D89] font-semibold">
              Together With Their Families
            </p>
            <p className="font-script text-2xl sm:text-4xl text-[#5C3843]/95 pt-1">
              We cordially invite you to the wedding ceremony of
            </p>
          </div>

          <FloralDivider className="my-6" />

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* BRIDE & GROOM WITH PARENTS NAME (D/o. & S/o.) AND RESIDENCES */}
          {/* Matching the exact traditional Kerala wedding card structure */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          <div className="my-6">
            <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center max-w-2xl mx-auto">
              {/* Left Column: Bride & Parents */}
              <div className="md:col-span-5 text-center space-y-2 p-3">
                <h1 className="font-serif-royal italic text-3xl sm:text-4xl lg:text-5xl font-normal text-[#5C3843] tracking-wide drop-shadow-xs">
                  Sofia S Nair
                </h1>

                {/* Petite Leaf Sprig Ornament */}
                <div className="flex justify-center text-[#B87D89] opacity-75">
                  <span className="text-xs">❦</span>
                </div>

                {/* Daughter of (D/o.) Parents */}
                <div className="space-y-0.5">
                  <p className="font-cinzel text-xs sm:text-sm font-bold text-[#5C3843] tracking-wide">
                    D/o. Shylendran Nair
                  </p>
                  <p className="font-cinzel text-xs sm:text-sm font-bold text-[#5C3843] tracking-wide">
                    &amp; Ajitha S Nair
                  </p>
                </div>

                {/* Petite Leaf Sprig Ornament */}
                <div className="flex justify-center text-[#B87D89] opacity-75">
                  <span className="text-xs">❦</span>
                </div>

                {/* Bride's Residence */}
                <p className="font-serif italic text-xs sm:text-sm text-[#5C3843]/85 leading-snug">
                  Sreesailam,<br />Mavila Anchal
                </p>
              </div>

              {/* Center Column: Calligraphy "and" with Gilded Flourish */}
              <div className="md:col-span-1 flex flex-col items-center justify-center py-2 select-none">
                <span className="hidden md:block h-10 w-px bg-gradient-to-b from-transparent via-[#C9A875]/70 to-transparent" />
                <span className="font-script text-2xl sm:text-3xl text-[#C9A875] px-2 my-1">
                  and
                </span>
                <span className="hidden md:block h-10 w-px bg-gradient-to-b from-transparent via-[#C9A875]/70 to-transparent" />
              </div>

              {/* Right Column: Groom & Parents */}
              <div className="md:col-span-5 text-center space-y-2 p-3">
                <h2 className="font-serif-royal italic text-3xl sm:text-4xl lg:text-5xl font-normal text-[#5C3843] tracking-wide drop-shadow-xs">
                  Akhil RV
                </h2>

                {/* Petite Leaf Sprig Ornament */}
                <div className="flex justify-center text-[#B87D89] opacity-75">
                  <span className="text-xs">❦</span>
                </div>

                {/* Son of (S/o.) Parents */}
                <div className="space-y-0.5">
                  <p className="font-cinzel text-xs sm:text-sm font-bold text-[#5C3843] tracking-wide">
                    S/o. Rajan T
                  </p>
                  <p className="font-cinzel text-xs sm:text-sm font-bold text-[#5C3843] tracking-wide">
                    &amp; Valsala
                  </p>
                </div>

                {/* Petite Leaf Sprig Ornament */}
                <div className="flex justify-center text-[#B87D89] opacity-75">
                  <span className="text-xs">❦</span>
                </div>

                {/* Groom's Residence */}
                <p className="font-serif italic text-xs sm:text-sm text-[#5C3843]/85 leading-snug">
                  ARV land,<br />Vayakkal, Valakam.
                </p>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════ */}
          {/* THE COUPLE PORTRAIT CUTOUT EMBEDDED DIRECTLY IN THE CARD */}
          {/* ══════════════════════════════════════════════════════════ */}
          <div id="couple-portrait" className="my-8 mx-auto max-w-md">
            {/* Victorian Botanical Arch Window for Couple Portrait */}
            <div className="relative overflow-hidden rounded-[36px] border-2 border-[#C9A875]/80 bg-gradient-to-b from-[#FFFBF9] via-[#FAF0EE] to-[#FFFBF9] p-3.5 shadow-[0_14px_40px_rgba(184,125,137,0.18)]">
              {/* Soft Golden Light Aura behind Couple */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-tr from-[#E6D3B3]/45 via-[#F7D8DC]/45 to-transparent blur-xl pointer-events-none" />

              {/* Decorative Corner Filigree Highlights */}
              <div className="absolute top-2.5 left-2.5 w-5 h-5 border-t-2 border-l-2 border-[#C9A875]/70 rounded-tl pointer-events-none" />
              <div className="absolute top-2.5 right-2.5 w-5 h-5 border-t-2 border-r-2 border-[#C9A875]/70 rounded-tr pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 w-5 h-5 border-b-2 border-l-2 border-[#C9A875]/70 rounded-bl pointer-events-none" />
              <div className="absolute bottom-2.5 right-2.5 w-5 h-5 border-b-2 border-r-2 border-[#C9A875]/70 rounded-br pointer-events-none" />

              {/* Pure Cutout Image without background */}
              <div
                onClick={() => setIsZoomOpen(true)}
                className="relative cursor-pointer group flex items-center justify-center min-h-[390px] sm:min-h-[470px]"
                title="Tap to enlarge portrait"
              >
                <img
                  src="/couple_nobg.png"
                  alt="Sofia S Nair & Akhil RV"
                  className="max-h-[390px] sm:max-h-[470px] w-auto object-contain filter drop-shadow-[0_14px_24px_rgba(92,56,67,0.22)] transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Hover Zoom Indicator */}
                <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFFBF9]/90 text-[#5C3843] shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="h-3.5 w-3.5" />
                </div>
              </div>

              {/* Romantic Ribbon Plaque at Bottom of Portrait */}
              <div className="relative z-10 mx-auto mt-2 max-w-xs rounded-xl border border-[#C9A875]/50 bg-[#FFFBF9]/95 py-2 px-4 shadow-xs backdrop-blur-md">
                <span className="font-serif italic text-xs text-[#5C3843]">
                  &ldquo;In your eyes, I found my home&rdquo;
                </span>
                <p className="font-cinzel text-[9.5px] uppercase tracking-[0.22em] text-[#B87D89] font-bold mt-0.5">
                  Sofia &amp; Akhil &bull; 2026
                </p>
              </div>
            </div>
          </div>

          {/* Poetic Message directly under portrait */}
          <div className="my-6">
            <p className="font-script text-2xl sm:text-3xl text-[#B87D89] max-w-lg mx-auto leading-relaxed">
              &ldquo;Your presence will add joy and blessings to our special day.&rdquo;
            </p>
          </div>

          <FloralDivider className="my-6" />

          {/* Quick Dates & Venues Summary Cards with Gold Accents */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto my-7 text-left">
            {/* Reception Summary */}
            <div className="rounded-2xl border border-[#F3E3DF] bg-[#FFFBF9] p-5 shadow-xs transition-all hover:border-[#B87D89]">
              <div className="flex items-center gap-1.5 text-[#B87D89] font-cinzel text-[11px] uppercase font-bold tracking-wider">
                <Calendar className="h-4 w-4" />
                <span>Reception Ceremony</span>
              </div>
              <p className="font-serif font-bold text-lg text-[#5C3843] mt-1.5">11 November 2026</p>
              <p className="text-xs text-[#5C3843]/85 font-medium">04:00 PM onwards</p>
              <div className="mt-3 flex items-start gap-1.5 text-xs text-[#B87D89] font-serif italic">
                <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                <span>Bride&apos;s Home, Sreesailam, Mavila Anchal</span>
              </div>
            </div>

            {/* Wedding Ceremony Summary */}
            <div className="rounded-2xl border border-[#C9A875]/80 bg-[#FAF0EE]/70 p-5 shadow-xs ring-1 ring-[#C9A875]/40 transition-all hover:shadow-md">
              <div className="flex items-center gap-1.5 text-[#C9A875] font-cinzel text-[11px] uppercase font-bold tracking-wider">
                <Sparkles className="h-4 w-4" />
                <span>Wedding Ceremony</span>
              </div>
              <p className="font-serif font-bold text-lg text-[#5C3843] mt-1.5">12 November 2026</p>
              <p className="text-xs text-[#5C3843]/85 font-medium">10:30 AM (Muhurtham)</p>
              <div className="mt-3 flex items-start gap-1.5 text-xs text-[#5C3843] font-serif italic">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-[#B87D89] mt-0.5" />
                <span>Koyipuram Auditorium, Karavaloor, Punalur</span>
              </div>
            </div>
          </div>

          {/* Kerala Cultural Traditions Pill */}
          <div className="mx-auto my-4 max-w-md rounded-full border border-[#F3E3DF] bg-[#FFFBF9] px-4 py-1.5 text-center shadow-xs">
            <span className="font-serif italic text-xs text-[#5C3843]/85">
              Featuring sacred Kanyadaanam, Thalikettu, and Grand Traditional Kerala Sadya Feast
            </span>
          </div>

          {/* Best Regards from Card */}
          <div className="mt-6 text-center space-y-0.5">
            <span className="font-script text-2xl text-[#B87D89]">With best regards</span>
            <p className="font-serif font-bold text-lg text-[#5C3843] tracking-wide">
              Aju MS &amp; Sonia S Nair
            </p>
          </div>

          {/* Interactive Navigation Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onScrollToRsvp}
              className="gold-shimmer-btn flex items-center gap-2 rounded-full border border-[#C9A875] bg-gradient-to-r from-[#C9A875] to-[#E6D3B3] px-7 py-3 text-xs font-cinzel uppercase tracking-[0.22em] text-[#5C3843] font-bold shadow-[0_6px_20px_rgba(201,168,117,0.35)] transition-all hover:scale-105 active:scale-95"
            >
              <Heart className="h-3.5 w-3.5 fill-current" />
              <span>RSVP Now</span>
            </button>

            <button
              onClick={onScrollToEvents}
              className="flex items-center gap-2 rounded-full border border-[#B87D89] bg-[#FFFBF9] px-6 py-3 text-xs font-cinzel uppercase tracking-[0.2em] text-[#5C3843] font-semibold transition-all hover:bg-[#FAF0EE] hover:border-[#5C3843]"
            >
              <Calendar className="h-3.5 w-3.5 text-[#B87D89]" />
              <span>Full Schedule</span>
            </button>

            <button
              onClick={onOpenOriginalCard}
              className="flex items-center gap-1.5 rounded-full border border-[#F3E3DF] bg-[#FAF0EE] px-4 py-2.5 text-xs font-medium text-[#5C3843] transition-all hover:border-[#B87D89] hover:bg-white"
              title="View Printed Card Scan"
            >
              <FileText className="h-3.5 w-3.5 text-[#B87D89]" />
              <span>Original Card</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 rounded-full border border-[#F3E3DF] bg-white px-4 py-2.5 text-xs text-[#5C3843] transition-colors hover:bg-[#FAF0EE]"
              title="Share Invitation Link"
            >
              {copiedLink ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="h-3.5 w-3.5 text-[#C9A875]" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal for Couple Portrait */}
      {isZoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B222A]/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative max-h-[92vh] max-w-lg overflow-hidden rounded-3xl border border-[#C9A875] bg-[#FFFBF9] p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomOpen(false)}
              className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFFBF9]/90 text-[#5C3843] shadow-md hover:bg-rose-100"
              aria-label="Close portrait view"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src="/couple_nobg.png"
              alt="Sofia & Akhil"
              className="max-h-[82vh] w-auto rounded-2xl object-contain mx-auto filter drop-shadow-[0_15px_30px_rgba(92,56,67,0.25)]"
            />
          </div>
        </div>
      )}
    </article>
  );
};
