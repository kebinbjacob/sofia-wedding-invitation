import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Navigation, Check, Download, Sparkles, Utensils, Music, Heart } from 'lucide-react';
import { downloadIcsFile, getGoogleCalendarUrl, CalendarEventData } from '../utils/calendarHelper.ts';
import { FloralDivider } from './BotanicalOrnaments.tsx';

interface WeddingEvent {
  id: string;
  name: string;
  subTitle: string;
  dateStr: string;
  dayOfWeek: string;
  timeStr: string;
  venueName: string;
  venueAddress: string;
  description: string;
  highlights: string[];
  dressCodeTitle: string;
  dressCodeColors: { name: string; hex: string }[];
  googleMapsUrl: string;
  calendarData: CalendarEventData;
  isMainCeremony?: boolean;
}

export const EventTimeline: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const events: WeddingEvent[] = [
    {
      id: 'reception',
      name: 'Reception Ceremony',
      subTitle: 'An Evening of Greetings & Celebration',
      dateStr: '11 November 2026',
      dayOfWeek: 'Wednesday',
      timeStr: '04:00 PM onwards',
      venueName: "Bride's Home — Sreesailam",
      venueAddress: 'Sreesailam, Mavila Anchal, Kerala',
      description:
        'Join the family for a cordial reception welcoming friends and well-wishers with heartfelt music, traditional delicacies, and joyous congratulations to the couple.',
      highlights: [
        'Welcoming of Family & Guests',
        'Acoustic Strings & Melodic Evening',
        'Festive Hi-Tea & Kerala Evening Refreshments',
        'Congratulations & Photo Moments with the Couple',
      ],
      dressCodeTitle: 'Festive Pastel & Rose Gold Elegance',
      dressCodeColors: [
        { name: 'Dusty Rose', hex: '#B87D89' },
        { name: 'Blush Pink', hex: '#E8C5CA' },
        { name: 'Champagne Gold', hex: '#C9A875' },
        { name: 'Ivory Cream', hex: '#FFFBF9' },
      ],
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mavila+Anchal+Kerala',
      calendarData: {
        title: "Sofia & Akhil's Wedding Reception",
        description: "Reception ceremony at Bride's Home (Sreesailam, Mavila Anchal, Kerala).",
        location: 'Sreesailam, Mavila Anchal, Kerala',
        startDate: '20261111T103000Z',
        endDate: '20261111T163000Z',
        startISO: '2026-11-11T16:00:00+05:30',
        endISO: '2026-11-11T22:00:00+05:30',
      },
    },
    {
      id: 'wedding',
      name: 'Wedding Ceremony',
      subTitle: 'The Auspicious Muhurtham & Union',
      dateStr: '12 November 2026',
      dayOfWeek: 'Thursday',
      timeStr: '10:30 AM (Muhurtham)',
      venueName: 'Koyipuram Auditorium',
      venueAddress: 'Karavaloor, Punalur, Kollam, Kerala',
      description:
        'The solemn marriage rituals uniting Sofia and Akhil in sacred matrimony under the blessings of elders, followed by traditional Kerala Sadya feast.',
      highlights: [
        'Auspicious Muhurtham & Welcoming of the Groom',
        'Kanyadaanam & Thalikettu (Sacred Mangalsutra)',
        'Exchange of Floral Garlands & Elders’ Blessings',
        'Grand Traditional Kerala Sadya Feast on Banana Leaves',
      ],
      dressCodeTitle: 'Traditional Kerala Kasavu & Rose Silks',
      dressCodeColors: [
        { name: 'Kasavu Gold', hex: '#C9A875' },
        { name: 'Pure Silk Cream', hex: '#FAF6EE' },
        { name: 'Vintage Plum', hex: '#5C3843' },
        { name: 'Gilded Amber', hex: '#B58C52' },
      ],
      isMainCeremony: true,
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Koyipuram+Auditorium+Karavaloor+Punalur',
      calendarData: {
        title: 'Wedding Ceremony of Sofia & Akhil',
        description: 'Sacred wedding ceremony and Muhurtham at Koyipuram Auditorium, Karavaloor, Punalur.',
        location: 'Koyipuram Auditorium, Karavaloor, Punalur, Kerala',
        startDate: '20261112T050000Z',
        endDate: '20261112T093000Z',
        startISO: '2026-11-12T10:30:00+05:30',
        endISO: '2026-11-12T15:00:00+05:30',
      },
    },
  ];

  const handleCopyAddress = (id: string, address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="itinerary" className="relative mx-auto max-w-4xl px-4 py-14">
      {/* Section Header */}
      <div className="text-center">
        <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#B87D89] font-medium">
          Wedding Itinerary &bull; Celebrations
        </span>
        <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#5C3843]">
          Events &amp; Festivities
        </h2>
        <p className="mt-2 font-serif italic text-sm text-[#5C3843]/80 max-w-md mx-auto">
          We eagerly look forward to sharing these cherished moments of grace, tradition, and happiness with you.
        </p>
      </div>

      <FloralDivider className="my-7" />

      {/* Timeline Cards Grid */}
      <div className="mt-8 space-y-10">
        {events.map((event) => (
          <div
            key={event.id}
            className={`relative overflow-hidden rounded-[28px] border transition-all duration-300 hover:shadow-2xl ${
              event.isMainCeremony
                ? 'border-[#C9A875] bg-[#FFFBF9] shadow-[0_16px_45px_rgba(201,168,117,0.2)] ring-1 ring-[#C9A875]/50'
                : 'border-[#F3E3DF] bg-[#FFFBF9]/95 shadow-[0_10px_35px_rgba(184,125,137,0.1)]'
            }`}
          >
            {/* Top Pressed-Flower Accent Bar */}
            <div className="h-2 w-full bg-gradient-to-r from-[#B87D89] via-[#C9A875] to-[#E8C5CA]" />

            {/* Main Ceremony Highlight Ribbon */}
            {event.isMainCeremony && (
              <div className="absolute top-5 right-5 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#C9A875] to-[#E6D3B3] px-3.5 py-1 text-[10.5px] font-cinzel font-bold uppercase tracking-wider text-[#5C3843] shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-[#5C3843]" />
                <span>Sacred Muhurtham</span>
              </div>
            )}

            <div className="p-6 sm:p-9">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                {/* Left: Date Badge, Description & Cultural Highlights */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-full bg-[#FAF0EE] px-3.5 py-1 font-cinzel text-xs font-semibold uppercase tracking-wider text-[#B87D89] border border-[#F3E3DF]">
                      {event.dayOfWeek}
                    </span>
                    <span className="font-serif text-base font-semibold text-[#5C3843]">
                      {event.dateStr}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#5C3843]">
                      {event.name}
                    </h3>
                    <p className="font-serif italic text-sm text-[#B87D89] mt-0.5">
                      {event.subTitle}
                    </p>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#5C3843]/85 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Cultural Program Highlights */}
                  <div className="pt-2">
                    <span className="font-cinzel text-[10px] uppercase tracking-wider text-[#B87D89] font-bold block mb-2">
                      Ceremony Highlights:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {event.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs text-[#5C3843]/85 font-serif italic">
                          <Heart className="h-3 w-3 text-[#C9A875] shrink-0 fill-[#C9A875]/40" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dress Code & Color Palette Swatches */}
                  <div className="pt-3 border-t border-[#F3E3DF]">
                    <div className="flex flex-wrap items-center gap-3">
                      <div>
                        <span className="font-cinzel text-[10px] uppercase tracking-wider text-[#B87D89] font-bold">
                          Dress Code:{' '}
                        </span>
                        <span className="font-serif italic text-xs text-[#5C3843]">{event.dressCodeTitle}</span>
                      </div>
                      <div className="flex items-center gap-1.5 ml-auto">
                        {event.dressCodeColors.map((col, cIdx) => (
                          <div
                            key={cIdx}
                            className="h-4 w-4 rounded-full border border-black/10 shadow-xs"
                            style={{ backgroundColor: col.hex }}
                            title={col.name}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Venue, Time & GPS Navigation Box */}
                <div className="w-full lg:w-72 rounded-2xl border border-[#F3E3DF] bg-[#FAF0EE]/70 p-5 space-y-4">
                  {/* Time Badge */}
                  <div className="flex items-center gap-2.5 text-xs font-medium text-[#5C3843]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#B87D89] shadow-xs">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-cinzel tracking-wider text-[#B87D89] font-semibold">Time</div>
                      <div className="font-bold text-sm text-[#5C3843]">{event.timeStr}</div>
                    </div>
                  </div>

                  {/* Venue Address */}
                  <div className="flex items-start gap-2.5 text-xs text-[#5C3843]">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#C9A875] shadow-xs mt-0.5">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-sm text-[#5C3843]">{event.venueName}</div>
                      <div className="text-[11px] text-[#5C3843]/75 leading-tight mt-1">
                        {event.venueAddress}
                      </div>
                    </div>
                  </div>

                  {/* Direct Action Buttons: Google Maps & Add to Calendar */}
                  <div className="pt-2 space-y-2.5">
                    <a
                      href={event.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gold-shimmer-btn flex w-full items-center justify-center gap-2 rounded-xl border border-[#B87D89] bg-[#FFFBF9] py-2.5 text-xs font-semibold text-[#5C3843] shadow-xs transition-all hover:bg-[#B87D89] hover:text-white"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      <span>Open in Google Maps</span>
                    </a>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => downloadIcsFile(event.calendarData, `${event.id}-invite.ics`)}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-[#F3E3DF] bg-white py-2 text-[11px] font-medium text-[#5C3843] transition-colors hover:bg-[#FAF0EE]"
                        title="Download .ICS file for Apple / Outlook Calendar"
                      >
                        <Download className="h-3 w-3 text-[#B87D89]" />
                        <span>Apple / .ICS</span>
                      </button>

                      <a
                        href={getGoogleCalendarUrl(event.calendarData)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-[#F3E3DF] bg-white py-2 text-[11px] font-medium text-[#5C3843] transition-colors hover:bg-[#FAF0EE]"
                        title="Add directly to Google Calendar"
                      >
                        <Calendar className="h-3 w-3 text-[#C9A875]" />
                        <span>Google Cal</span>
                      </a>
                    </div>

                    {/* Copy Address Button */}
                    <button
                      onClick={() => handleCopyAddress(event.id, `${event.venueName}, ${event.venueAddress}`)}
                      className="w-full text-center text-[10.5px] text-[#B87D89] hover:underline flex items-center justify-center gap-1 py-1"
                    >
                      {copiedId === event.id ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-medium">Address copied!</span>
                        </>
                      ) : (
                        <span>Copy venue address</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
