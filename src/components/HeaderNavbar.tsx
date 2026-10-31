import React, { useState, useEffect } from 'react';
import { Mail, Calendar, MapPin, Heart, FileText, Menu, X } from 'lucide-react';

interface HeaderNavbarProps {
  onToggleEnvelope: () => void;
  isEnvelopeOpen: boolean;
  onOpenOriginalCard: () => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
  onToggleEnvelope,
  isEnvelopeOpen,
  onOpenOriginalCard,
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled && isEnvelopeOpen
          ? 'bg-[#FFFBF9]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(184,125,137,0.12)] border-b border-[#F3E3DF]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:py-3.5">
        {/* Left: Brand Monogram */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex cursor-pointer items-center gap-2 select-none group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A875] bg-[#FFFBF9] shadow-xs group-hover:border-[#B87D89] transition-colors">
            <span className="font-serif-royal font-bold text-sm text-[#5C3843]">S&amp;A</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif italic text-base text-[#5C3843] leading-none">
              Sofia &amp; Akhil
            </span>
            <span className="font-cinzel text-[8.5px] uppercase tracking-widest text-[#B87D89]">
              12 Nov 2026
            </span>
          </div>
        </div>

        {/* Center: Desktop Nav Links (Only displayed once envelope is opened) */}
        {isEnvelopeOpen ? (
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 text-xs font-cinzel uppercase tracking-[0.16em] text-[#5C3843]">
            <button onClick={() => scrollTo('couple-portrait')} className="transition-colors hover:text-[#B87D89]">
              The Couple
            </button>
            <button onClick={() => scrollTo('itinerary')} className="transition-colors hover:text-[#B87D89]">
              Itinerary
            </button>
            <button onClick={() => scrollTo('location')} className="transition-colors hover:text-[#B87D89]">
              Location Hub
            </button>
            <button onClick={() => scrollTo('rsvp')} className="transition-colors hover:text-[#B87D89]">
              RSVP
            </button>
            <button
              onClick={onOpenOriginalCard}
              className="flex items-center gap-1 text-[#B87D89] transition-colors hover:text-[#5C3843]"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Original Card</span>
            </button>
          </nav>
        ) : (
          <div className="hidden sm:block text-xs font-serif italic text-[#B87D89] tracking-wider">
            Wedding Celebration Invitation
          </div>
        )}

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Re-open / Close Envelope Toggle */}
          {isEnvelopeOpen && (
            <>
              <button
                onClick={onToggleEnvelope}
                className="hidden sm:flex items-center gap-1.5 rounded-full border border-[#F3E3DF] bg-[#FAF0EE] px-3.5 py-1.5 text-xs text-[#5C3843] transition-all hover:border-[#B87D89] hover:bg-white"
                title="Fold envelope"
              >
                <Mail className="h-3.5 w-3.5 text-[#B87D89]" />
                <span className="font-serif italic text-[11px]">Envelope View</span>
              </button>

              <button
                onClick={() => scrollTo('rsvp')}
                className="flex items-center gap-1.5 rounded-full border border-[#C9A875] bg-gradient-to-r from-[#C9A875] to-[#E6D3B3] px-4 py-1.5 text-xs font-cinzel uppercase tracking-wider text-[#5C3843] font-bold shadow-xs transition-all hover:scale-105 active:scale-95"
              >
                <Heart className="h-3 w-3 fill-current" />
                <span>RSVP</span>
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex h-8 w-8 items-center justify-center rounded-lg text-[#5C3843]"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && isEnvelopeOpen && (
        <div className="md:hidden border-b border-[#F3E3DF] bg-[#FFFBF9]/98 px-5 py-4 shadow-lg backdrop-blur-md animate-fadeIn">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-3 font-cinzel text-xs uppercase tracking-widest text-[#5C3843]">
            <button
              onClick={() => scrollTo('couple-portrait')}
              className="flex items-center gap-2 py-1 text-left hover:text-[#B87D89]"
            >
              <Heart className="h-4 w-4 text-[#C9A875]" />
              <span>The Couple</span>
            </button>
            <button
              onClick={() => scrollTo('itinerary')}
              className="flex items-center gap-2 py-1 text-left hover:text-[#B87D89]"
            >
              <Calendar className="h-4 w-4 text-[#B87D89]" />
              <span>Wedding Itinerary</span>
            </button>
            <button
              onClick={() => scrollTo('location')}
              className="flex items-center gap-2 py-1 text-left hover:text-[#B87D89]"
            >
              <MapPin className="h-4 w-4 text-[#B87D89]" />
              <span>Location &amp; Directions</span>
            </button>
            <button
              onClick={() => scrollTo('rsvp')}
              className="flex items-center gap-2 py-1 text-left hover:text-[#B87D89]"
            >
              <Heart className="h-4 w-4 text-[#B87D89]" />
              <span>RSVP</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOriginalCard();
              }}
              className="flex items-center gap-2 py-1 text-left text-[#B87D89] hover:text-[#5C3843]"
            >
              <FileText className="h-4 w-4" />
              <span>View Traditional Printed Card</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onToggleEnvelope();
              }}
              className="flex items-center gap-2 py-1 text-left text-[#5C3843]/80 hover:text-[#B87D89]"
            >
              <Mail className="h-4 w-4" />
              <span>Close Envelope</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
