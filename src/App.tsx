import React, { useState } from 'react';
import { RosePetalsCanvas } from './components/RosePetalsCanvas.tsx';
import { MusicPlayer } from './components/MusicPlayer.tsx';
import { HeaderNavbar } from './components/HeaderNavbar.tsx';
import { WaxSealEnvelope } from './components/WaxSealEnvelope.tsx';
import { InvitationCard } from './components/InvitationCard.tsx';
import { CountdownTicker } from './components/CountdownTicker.tsx';
import { EventTimeline } from './components/EventTimeline.tsx';
import { LocationAndCalendarHub } from './components/LocationAndCalendarHub.tsx';
import { RsvpSection } from './components/RsvpSection.tsx';
import { OriginalCardModal } from './components/OriginalCardModal.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState<boolean>(false);
  const [isOriginalCardModalOpen, setIsOriginalCardModalOpen] = useState<boolean>(false);
  const [musicAutoTrigger, setMusicAutoTrigger] = useState<boolean>(false);

  const handleOpenInvitation = () => {
    setIsEnvelopeOpen(true);
    setMusicAutoTrigger(true);

    // Smoothly scroll down to the revealed invitation card after the envelope flap opens
    setTimeout(() => {
      const cardEl = document.getElementById('invitation-card-section');
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 900);
  };

  const scrollToSection = (id: string) => {
    if (!isEnvelopeOpen) {
      setIsEnvelopeOpen(true);
    }
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#FDF8F7] text-[#5C3843] paper-texture selection:bg-[#E8C5CA] selection:text-[#5C3843] overflow-x-hidden">
      {/* Falling Blush Rose Petals HTML5 Canvas */}
      <RosePetalsCanvas />

      {/* Floating Background Music Player with Rose Gold Waveform Bars */}
      <MusicPlayer autoPlayTrigger={musicAutoTrigger} />

      {/* Luxury Navigation Header */}
      <HeaderNavbar
        onToggleEnvelope={() => setIsEnvelopeOpen(!isEnvelopeOpen)}
        isEnvelopeOpen={isEnvelopeOpen}
        onOpenOriginalCard={() => setIsOriginalCardModalOpen(true)}
      />

      <main className="relative z-10">
        {/* Entrance Gate: 3D Wax Seal Envelope Screen */}
        <section
          className={`transition-all duration-700 flex flex-col items-center justify-center ${
            !isEnvelopeOpen
              ? 'min-h-screen py-16 px-4'
              : 'pt-20 sm:pt-24 pb-6 px-4'
          }`}
        >
          <WaxSealEnvelope
            isOpen={isEnvelopeOpen}
            onOpenInvitation={handleOpenInvitation}
          />
        </section>

        {/* Revealed Content: ONLY RENDERED AND DISPLAYED AFTER ENVELOPE IS OPENED */}
        {isEnvelopeOpen && (
          <div className="animate-fadeIn transition-all duration-1000">
            {/* Main Royal Invitation Card Surface with Couple Portrait Centerpiece */}
            <div id="invitation-card-section">
              <InvitationCard
                onOpenOriginalCard={() => setIsOriginalCardModalOpen(true)}
                onScrollToRsvp={() => scrollToSection('rsvp')}
                onScrollToEvents={() => scrollToSection('itinerary')}
                onScrollToLocation={() => scrollToSection('location')}
              />
            </div>

            {/* Live Countdown Ticker */}
            <CountdownTicker />

            {/* Event Timeline & Itinerary Cards */}
            <EventTimeline />

            {/* Location & Calendar Hub with Dual Google Maps */}
            <LocationAndCalendarHub />

            {/* Interactive RSVP System */}
            <RsvpSection />

            {/* Footer */}
            <Footer />
          </div>
        )}
      </main>

      {/* Original Printed Wedding Invitation High-Res Modal */}
      <OriginalCardModal
        isOpen={isOriginalCardModalOpen}
        onClose={() => setIsOriginalCardModalOpen(false)}
      />
    </div>
  );
}
