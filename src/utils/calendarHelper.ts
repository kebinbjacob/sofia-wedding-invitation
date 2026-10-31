// Calendar (.ICS) and Google Calendar helper for wedding events

export interface CalendarEventData {
  title: string;
  description: string;
  location: string;
  startDate: string; // YYYYMMDDTHHMMSSZ or local format
  endDate: string;
  startISO: string;
  endISO: string;
}

// Generate and trigger download of an .ICS file
export function downloadIcsFile(event: CalendarEventData, filename: string = 'wedding-invitation.ics') {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Sofia & Akhil Wedding//Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
    `LOCATION:${event.location}`,
    `DTSTART:${event.startDate}`,
    `DTEND:${event.endDate}`,
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-PT24H',
    'ACTION:DISPLAY',
    'DESCRIPTION:Reminder: Wedding Celebration of Sofia & Akhil',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Generate direct Google Calendar link
export function getGoogleCalendarUrl(event: CalendarEventData): string {
  const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
  const text = encodeURIComponent(event.title);
  const dates = `${event.startDate}/${event.endDate}`;
  const details = encodeURIComponent(event.description);
  const location = encodeURIComponent(event.location);

  return `${base}&text=${text}&dates=${dates}&details=${details}&location=${location}`;
}
