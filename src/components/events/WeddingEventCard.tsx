import React, { useState } from 'react';
import { WeddingEvent } from '../../data/weddingEvents';
import { MapPin, Clock, Calendar, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { AddToCalendarButton } from '../venue/AddToCalendarButton';

interface WeddingEventCardProps {
  event: WeddingEvent;
}

export const WeddingEventCard: React.FC<WeddingEventCardProps> = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative rounded-t-[140px] rounded-b-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
        event.isMainCeremony
          ? 'bg-[#FFF9EF] border-[#B88A43] shadow-md ring-1 ring-[#B88A43]/40'
          : 'bg-[#FFF9EF]/80 border-[#B88A43]/20 shadow-xs hover:border-[#B88A43]/60 hover:shadow-sm'
      }`}
    >
      {/* Visual highlight ribbon for the main sacred ceremony */}
      {event.isMainCeremony && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#B88A43] text-[#FFF9EF] text-[10px] uppercase tracking-widest font-medium shadow-xs">
          <Sparkles size={11} />
          <span>Muhurtham</span>
        </div>
      )}

      {/* Top arched visual illustration container */}
      <div className="pt-6 px-6 pb-2 flex flex-col items-center">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#B88A43]/25 p-2 bg-[#F7F2E8] flex items-center justify-center overflow-hidden mb-3 group-hover:border-[#B88A43] transition-colors">
          <img
            src={event.iconPath}
            alt={event.name}
            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Category tag */}
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#B88A43]">
          {event.category}
        </span>

        {/* Event Name */}
        <h3 className="font-serif text-2xl sm:text-2xl text-[#123F35] font-medium text-center mt-1 mb-2">
          {event.name}
        </h3>

        {/* Date */}
        <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-[#4A3024] tracking-wider mb-1">
          <Calendar size={13} className="text-[#B88A43]" />
          <span>{event.displayDate}</span>
        </div>

        {/* Time */}
        <div className="flex items-center gap-1.5 text-xs text-[#756957] mb-2 font-light">
          <Clock size={13} className="text-[#B88A43]" />
          <span>{event.timeRange}</span>
        </div>

        {/* Venue */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-[#123F35] mb-4">
          <MapPin size={13} className="text-[#B88A43]" />
          <span>{event.venue}</span>
        </div>
      </div>

      {/* Bottom Actions & Expandable Details */}
      <div className="p-4 bg-[#F7F2E8]/60 border-t border-[#B88A43]/15 flex flex-col gap-2">
        {isExpanded && (
          <div className="pt-1 pb-3 text-left space-y-2 text-xs text-[#756957] animate-in fade-in duration-200">
            <p className="leading-relaxed font-light">{event.description}</p>
            <div className="pt-2 border-t border-[#B88A43]/15 text-[11px]">
              <span className="font-medium text-[#4A3024]">Attire: </span>
              <span className="text-[#B88A43] font-medium">{event.attire}</span>
            </div>
            <div className="pt-1">
              <AddToCalendarButton
                title={`${event.name} - Srinath & Ananya Wedding`}
                description={event.description}
                location={`${event.venue}, Coconut Lagoon, Kumarakom, Kerala`}
                startDate={`${event.date}T${event.startTime}:00`}
                endDate={`${event.date}T${event.endTime}:00`}
                label="Add Event to Calendar"
              />
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-1.5 px-3 rounded-lg border border-[#B88A43]/30 hover:border-[#B88A43] text-xs font-medium text-[#4A3024] hover:text-[#B88A43] flex items-center justify-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-[#B88A43] outline-none"
        >
          <span>{isExpanded ? 'Less Details' : 'View Schedule & Attire'}</span>
          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>
    </div>
  );
};
