import iconMehendi from '../assets/events/event_mehendi.png';
import iconSangeet from '../assets/events/event_sangeet.png';
import iconCeremony from '../assets/events/event_ceremony.png';
import iconReception from '../assets/events/event_reception.png';

export interface WeddingEvent {
  id: string;
  name: string;
  category: string;
  date: string;
  displayDate: string;
  startTime: string;
  endTime: string;
  timeRange: string;
  venue: string;
  description: string;
  attire: string;
  isMainCeremony?: boolean;
  iconPath: string;
}

export const weddingEvents: WeddingEvent[] = [
  {
    id: "mehendi",
    name: "Mehendi",
    category: "Intimate Gathering",
    date: "2026-12-13",
    displayDate: "13 DEC 2026",
    startTime: "16:00",
    endTime: "19:00",
    timeRange: "4:00 PM – 7:00 PM",
    venue: "The Courtyard",
    description:
      "An afternoon of delicate henna patterns, fragrant marigolds, sweet payasam, and soulful acoustic melodies amidst the courtyard arches.",
    attire: "Traditional Floral & Pastels",
    iconPath: iconMehendi,
  },
  {
    id: "sangeet",
    name: "Sangeet",
    category: "Musical Evening",
    date: "2026-12-14",
    displayDate: "14 DEC 2026",
    startTime: "18:00",
    endTime: "22:00",
    timeRange: "6:00 PM – 10:00 PM",
    venue: "Lotus Hall",
    description:
      "A joyful evening of lively music, heartfelt family performances, Chenda Melam rhythms, and celebratory laughter by the waterfront.",
    attire: "Vibrant Festive Indian / Silk Kurtas",
    iconPath: iconSangeet,
  },
  {
    id: "wedding",
    name: "Wedding Ceremony",
    category: "Sacred Muhurtham",
    date: "2026-12-15",
    displayDate: "15 DEC 2026",
    startTime: "07:00",
    endTime: "10:00",
    timeRange: "7:00 AM – 10:00 AM",
    venue: "Temple Grounds",
    description:
      "The sacred South Indian Vedic wedding rites under the carved floral mandapam, auspicious Nadaswaram, exchange of garlands, and the sacred Mangalsutra binding.",
    attire: "Traditional Silk Sarees (Kanjivaram) & Veshti / Pattu",
    isMainCeremony: true,
    iconPath: iconCeremony,
  },
  {
    id: "reception",
    name: "Reception",
    category: "Celebratory Dinner",
    date: "2026-12-15",
    displayDate: "15 DEC 2026",
    startTime: "19:00",
    endTime: "22:00",
    timeRange: "7:00 PM – 10:00 PM",
    venue: "Grand Ballroom",
    description:
      "An elegant banquet celebration under golden chandeliers, featuring an authentic Kerala Sadhya feast, live instrumental ensemble, and heartfelt toasts.",
    attire: "Formal Indian / Evening Elegance",
    iconPath: iconReception,
  },
];
