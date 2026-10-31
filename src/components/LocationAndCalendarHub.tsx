import React, { useState } from 'react';
import { MapPin, Navigation, Car, Train, Plane, Calendar, Download, ExternalLink, Check } from 'lucide-react';
import { downloadIcsFile, getGoogleCalendarUrl, CalendarEventData } from '../utils/calendarHelper.ts';
import { FloralDivider } from './BotanicalOrnaments.tsx';

export const LocationAndCalendarHub: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const weddingCombinedCalendarData: CalendarEventData = {
    title: 'The Wedding Celebration of Sofia & Akhil',
    description: `Wedding Celebrations of Sofia S Nair and Akhil RV:\n\n- Reception Ceremony: 11 Nov 2026, 4:00 PM at Sreesailam, Mavila Anchal\n- Sacred Wedding Ceremony: 12 Nov 2026, 10:30 AM at Koyipuram Auditorium, Karavaloor, Punalur\n\nContact: Aju MS & Sonia S Nair.`,
    location: 'Koyipuram Auditorium, Karavaloor, Punalur, Kerala',
    startDate: '20261111T103000Z',
    endDate: '20261112T093000Z',
    startISO: '2026-11-11T16:00:00+05:30',
    endISO: '2026-11-12T15:00:00+05:30',
  };

  const locations = [
    {
      title: 'Reception Venue',
      subtitle: "Bride's Residence",
      name: 'Sreesailam, Mavila Anchal',
      fullAddress: 'Sreesailam, Mavila, Anchal, Kollam District, Kerala - 691306',
      date: 'Wednesday, 11 November 2026',
      time: '04:00 PM onwards',
      gmapsQuery: 'Mavila+Anchal+Kerala',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Mavila%20Anchal%20Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed',
      travelNotes: 'Located at Mavila, Anchal. Valet and roadside parking available.',
    },
    {
      title: 'Ceremony & Muhurtham Venue',
      subtitle: 'Main Wedding Auditorium',
      name: 'Koyipuram Auditorium',
      fullAddress: 'Karavaloor, Punalur, Kollam District, Kerala - 691333',
      date: 'Thursday, 12 November 2026',
      time: '10:30 AM (Muhurtham)',
      gmapsQuery: 'Koyipuram+Auditorium+Karavaloor+Punalur',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Koyipuram%20Auditorium%20Karavaloor%20Punalur&t=&z=14&ie=UTF8&iwloc=&output=embed',
      travelNotes: 'On the main Karavaloor road. Dedicated auditorium guest parking area.',
    },
  ];

  const travelTips = [
    {
      icon: Plane,
      title: 'Nearest Airport',
      detail: 'Trivandrum International Airport (TRV) — Approx. 65 km (1.5 - 2 hours drive via MC Road / NH)',
    },
    {
      icon: Train,
      title: 'Nearest Railway Stations',
      detail: 'Punalur Railway Station (PUU) — 8 km | Kollam Junction (QLN) — 45 km',
    },
    {
      icon: Car,
      title: 'By Road / Taxi',
      detail: 'Conveniently connected via State Highway & MC Road. Taxis & auto-rickshaws easily accessible.',
    },
  ];

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <section id="location" className="relative mx-auto max-w-5xl px-4 py-12">
      <div className="text-center">
        <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#B87D89] font-medium">
          Venues &amp; Directions
        </span>
        <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#5C3843]">
          Location &amp; Travel Hub
        </h2>
        <p className="mt-2 font-serif italic text-sm text-[#5C3843]/80 max-w-lg mx-auto">
          Find your way smoothly to celebrate the union of Sofia &amp; Akhil in scenic Kerala.
        </p>
      </div>

      <FloralDivider className="my-6" />

      {/* Comprehensive Calendar Add Bar */}
      <div className="mx-auto mb-10 max-w-xl rounded-2xl border border-[#C9A875]/70 bg-gradient-to-r from-[#FFFBF9] via-[#FAF0EE] to-[#FFFBF9] p-5 text-center shadow-[0_8px_30px_rgba(201,168,117,0.15)]">
        <div className="flex items-center justify-center gap-2 text-[#5C3843]">
          <Calendar className="h-5 w-5 text-[#C9A875]" />
          <h3 className="font-serif text-lg font-bold">Add Wedding to Your Calendar</h3>
        </div>
        <p className="mt-1 font-serif italic text-xs text-[#5C3843]/80">
          Save the date so you never miss a moment of the celebrations.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => downloadIcsFile(weddingCombinedCalendarData, 'Sofia-Akhil-Wedding.ics')}
            className="flex items-center gap-2 rounded-full border border-[#B87D89] bg-[#FFFBF9] px-5 py-2 text-xs font-semibold text-[#5C3843] shadow-sm transition-all hover:bg-[#B87D89] hover:text-white"
          >
            <Download className="h-4 w-4 text-[#C9A875]" />
            <span>Apple / Outlook (.ICS)</span>
          </button>
          <a
            href={getGoogleCalendarUrl(weddingCombinedCalendarData)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[#C9A875] bg-gradient-to-r from-[#C9A875] to-[#E6D3B3] px-5 py-2 text-xs font-semibold text-[#5C3843] shadow-sm transition-all hover:opacity-95"
          >
            <ExternalLink className="h-4 w-4 text-[#5C3843]" />
            <span>Google Calendar Web</span>
          </a>
        </div>
      </div>

      {/* Dual Google Maps Cards for Reception & Ceremony */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="flex flex-col overflow-hidden rounded-2xl border border-[#F3E3DF] bg-[#FFFBF9] shadow-[0_10px_30px_rgba(184,125,137,0.12)] transition-all hover:border-[#C9A875] hover:shadow-[0_14px_40px_rgba(201,168,117,0.2)]"
          >
            {/* Header */}
            <div className="border-b border-[#F3E3DF] bg-[#FAF0EE]/70 p-5">
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-[11px] uppercase tracking-wider text-[#B87D89] font-bold">
                  {loc.title}
                </span>
                <span className="rounded-full bg-white px-2.5 py-0.5 font-serif text-[11px] italic text-[#5C3843] border border-[#F3E3DF]">
                  {loc.date}
                </span>
              </div>
              <h3 className="mt-1 font-serif text-2xl font-bold text-[#5C3843]">{loc.name}</h3>
              <p className="font-serif italic text-xs text-[#B87D89]">{loc.subtitle}</p>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="relative h-48 sm:h-56 w-full bg-stone-100">
              <iframe
                title={loc.name}
                src={loc.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 contrast-95"
              />
            </div>

            {/* Location Details & Actions */}
            <div className="flex-1 p-5 space-y-4">
              <div className="flex items-start gap-2 text-xs text-[#5C3843]">
                <MapPin className="h-4 w-4 shrink-0 text-[#B87D89] mt-0.5" />
                <div>
                  <p className="font-medium">{loc.fullAddress}</p>
                  <p className="font-serif italic text-[11px] text-[#5C3843]/70 mt-1">{loc.travelNotes}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${loc.gmapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#B87D89] bg-[#FFFBF9] py-2 text-xs font-semibold text-[#5C3843] shadow-sm transition-all hover:bg-[#B87D89] hover:text-white"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  <span>Get GPS Directions</span>
                </a>

                <button
                  onClick={() => handleCopy(loc.fullAddress, idx)}
                  className="rounded-lg border border-[#F3E3DF] bg-[#FAF0EE] px-3 py-2 text-xs text-[#5C3843] transition-colors hover:bg-white"
                  title="Copy Address"
                >
                  {copiedIndex === idx ? (
                    <Check className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <span className="font-cinzel text-[10px] tracking-wider uppercase font-semibold">Copy</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Travel & Transit Guide Accordion / Cards */}
      <div className="mt-12 rounded-2xl border border-[#F3E3DF] bg-[#FFFBF9]/80 p-6 sm:p-8">
        <h3 className="text-center font-serif text-xl sm:text-2xl text-[#5C3843]">
          Guest Transit &amp; Travel Assistance
        </h3>
        <p className="text-center font-serif italic text-xs text-[#5C3843]/75 mt-1">
          For outstation family and guests traveling from across India and abroad
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {travelTips.map((tip, idx) => {
            const Icon = tip.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-[#F3E3DF] bg-white p-4 shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FAF0EE] text-[#B87D89]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#5C3843]">
                    {tip.title}
                  </h4>
                  <p className="mt-1 text-xs text-[#5C3843]/80 leading-relaxed font-sans">{tip.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
