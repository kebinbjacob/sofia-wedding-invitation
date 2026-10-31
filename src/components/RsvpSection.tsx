import React, { useState } from 'react';
import { ExternalLink, MessageCircle, Heart, CheckCircle2, ShieldCheck, Sparkles, Loader2 } from 'lucide-react';
import { FloralDivider, MonogramCrest } from './BotanicalOrnaments.tsx';

const GOOGLE_FORM_VIEW_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc5vvylqcfD3Vc-6AYNMtx6wLS6yo6YSnrDH2a3OzL8oBkEhw/viewform?usp=dialog';
const GOOGLE_FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc5vvylqcfD3Vc-6AYNMtx6wLS6yo6YSnrDH2a3OzL8oBkEhw/viewform?embedded=true';

export const RsvpSection: React.FC = () => {
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);

  const generateWhatsAppMessage = () => {
    const text = `*WEDDING RSVP — SOFIA & AKHIL* 🌸%0A%0A` +
      `Dearest Sofia & Akhil,%0A` +
      `We received your wedding invitation with great joy!%0A` +
      `We are pleased to confirm our attendance for the celebrations.%0A%0A` +
      `*Guest Name(s):* %0A` +
      `*Attending:* [Both Reception & Wedding / Reception Only / Wedding Only]%0A` +
      `*Number of Guests:* %0A%0A` +
      `Wishing both of you eternal love, happiness, and prosperity! ✨`;

    return `https://api.whatsapp.com/send?text=${text}`;
  };

  return (
    <section id="rsvp" className="relative mx-auto max-w-4xl px-4 py-16">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex justify-center">
          <MonogramCrest className="h-10 text-[#C9A875]" />
        </div>
        <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#B87D89] font-medium block">
          R.S.V.P &bull; Respond With Love
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#5C3843] font-normal tracking-wide">
          Kindly Respond
        </h2>
        <p className="font-serif italic text-sm text-[#5C3843]/85 max-w-lg mx-auto leading-relaxed">
          Your presence will add warmth and grace to our auspicious celebration. Kindly confirm your attendance to help us prepare a memorable experience.
        </p>
      </div>

      <FloralDivider className="my-8" />

      {/* Main Luxury Container for Google Form */}
      <div className="mx-auto rounded-3xl border border-[#F3E3DF] bg-[#FFFBF9] p-4 sm:p-8 shadow-[0_16px_50px_rgba(184,125,137,0.14)] relative overflow-hidden">
        {/* Subtle decorative gold corner flourishes */}
        <div className="absolute top-2 left-2 text-[#C9A875]/30 pointer-events-none select-none text-xl font-serif">❧</div>
        <div className="absolute top-2 right-2 text-[#C9A875]/30 pointer-events-none select-none text-xl font-serif">☙</div>

        {/* Quick Action Top Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#F3E3DF] pb-4 px-2">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FAF0EE] text-[#B87D89]">
              <Heart className="h-4 w-4 fill-current text-[#B87D89]" />
            </span>
            <span className="font-cinzel text-xs tracking-wider text-[#5C3843] font-semibold">
              Official Guest RSVP Form
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={GOOGLE_FORM_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A875] bg-[#FAF0EE] px-4 py-1.5 text-xs font-cinzel font-medium text-[#5C3843] transition-all hover:bg-[#C9A875] hover:text-white shadow-sm"
              title="Open Google Form in a new tab"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="h-3 w-3" />
            </a>

            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500 bg-emerald-50 px-4 py-1.5 text-xs font-sans font-medium text-emerald-800 transition-all hover:bg-emerald-600 hover:text-white shadow-sm"
              title="Quick RSVP via WhatsApp"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-600 group-hover:text-white" />
              <span>WhatsApp RSVP</span>
            </a>
          </div>
        </div>

        {/* Embedded Google Form Container */}
        <div className="relative w-full rounded-2xl border border-[#F3E3DF] bg-white overflow-hidden shadow-inner min-h-[680px] sm:min-h-[750px]">
          {/* Loading Indicator */}
          {!iframeLoaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#FFFBF9]/90 backdrop-blur-[2px] space-y-3">
              <Loader2 className="h-8 w-8 animate-spin text-[#B87D89]" />
              <p className="font-serif italic text-xs text-[#5C3843]">
                Loading the RSVP form...
              </p>
            </div>
          )}

          <iframe
            src={GOOGLE_FORM_EMBED_URL}
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Wedding RSVP Google Form"
            className="w-full h-[720px] sm:h-[820px] border-0"
            onLoad={() => setIframeLoaded(true)}
          >
            Loading form...
          </iframe>
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-2 pt-2 text-xs text-[#5C3843]/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#C9A875]" />
            <span className="font-serif italic">
              Responses are securely stored directly in the official wedding registry.
            </span>
          </div>

          <a
            href={GOOGLE_FORM_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-cinzel tracking-wider text-[#B87D89] underline hover:text-[#5C3843] flex items-center gap-1"
          >
            <span>Having issues viewing? Tap here to open directly</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Host Contacts footnote */}
        <div className="mt-8 pt-4 border-t border-[#F3E3DF] text-xs text-center font-serif italic text-[#5C3843]/80">
          With Best Regards: Aju MS &amp; Sonia S Nair &bull; Ph: +91 97455 24151
        </div>
      </div>
    </section>
  );
};
