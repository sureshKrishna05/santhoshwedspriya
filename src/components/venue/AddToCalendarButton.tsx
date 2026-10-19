import React, { useState } from 'react';
import { Calendar, Download, ExternalLink } from 'lucide-react';

interface AddToCalendarButtonProps {
  title?: string;
  description?: string;
  location?: string;
  startDate?: string; // YYYY-MM-DDTHH:MM:SS
  endDate?: string;
  label?: string;
  className?: string;
}

export const AddToCalendarButton: React.FC<AddToCalendarButtonProps> = ({
  title = "Srinath & Ananya's Wedding Ceremony",
  description = "Join us in celebrating the sacred union of Srinath & Ananya in God's Own Country.",
  location = "Coconut Lagoon Resort, Kumarakom, Kerala, India",
  startDate = "2026-12-15T07:00:00",
  endDate = "2026-12-15T10:00:00",
  label = "Add to Calendar",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Format dates for Google Calendar and iCal
  const formatIsoForCalendar = (isoString: string) => {
    return isoString.replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const startIso = formatIsoForCalendar(startDate);
  const endIso = formatIsoForCalendar(endDate);

  // Google Calendar URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${startIso}/${endIso}&details=${encodeURIComponent(
    description
  )}&location=${encodeURIComponent(location)}`;

  // Generate .ics file download
  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Living South Indian Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${Date.now()}@wedding.srinathananya.com`,
      `DTSTAMP:${formatIsoForCalendar(new Date().toISOString())}`,
      `DTSTART:${startIso}`,
      `DTEND:${endIso}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description.replace(/\n/g, '\\n')}`,
      `LOCATION:${location}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${title.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#B88A43]/50 text-xs uppercase tracking-widest font-medium text-[#4A3024] hover:bg-[#B88A43] hover:text-[#FFF9EF] transition-colors focus-visible:ring-2 focus-visible:ring-[#B88A43] outline-none"
        aria-expanded={isOpen}
      >
        <Calendar size={13} className="text-[#B88A43] group-hover:text-inherit" />
        <span>{label}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 sm:left-0 sm:right-auto mt-2 w-52 rounded-xl bg-[#FFF9EF] border border-[#B88A43]/30 shadow-lg py-2 z-30 animate-in fade-in slide-in-from-top-1 duration-150">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between px-4 py-2 text-xs text-[#4A3024] hover:bg-[#F7F2E8] hover:text-[#B88A43] transition-colors"
          >
            <span>Google Calendar</span>
            <ExternalLink size={12} />
          </a>
          <button
            type="button"
            onClick={handleDownloadIcs}
            className="w-full text-left flex items-center justify-between px-4 py-2 text-xs text-[#4A3024] hover:bg-[#F7F2E8] hover:text-[#B88A43] transition-colors"
          >
            <span>Apple / Outlook (.ics)</span>
            <Download size={12} />
          </button>
        </div>
      )}
    </div>
  );
};
