import gallery1 from '../assets/gallery/gallery_1_sunset.png';
import gallery2 from '../assets/gallery/gallery_2_mehendi.png';
import gallery3 from '../assets/gallery/gallery_3_beach.png';
import gallery4 from '../assets/gallery/gallery_4_lamp.png';
import gallery5 from '../assets/gallery/gallery_5_boat.png';
import invitationArch from '../assets/decorations/invitation_arch.png';
import storySunset from '../assets/decorations/story_sunset.png';
import venuePhoto from '../assets/decorations/venue_photo.png';

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  caption: string;
  tilt: string; // Tailwind rotation class for asymmetrical polaroid look
  dateText?: string;
  alt: string;
}

export const galleryCategories = [
  "All Moments",
  "Couple Portraits",
  "Ceremonial Details",
  "Kerala Landscapes",
] as const;

export const galleryImages: GalleryItem[] = [
  {
    id: "g1",
    src: gallery1,
    title: "Twilight Silhouette",
    category: "Couple Portraits",
    caption: "Standing together against the warm glow of the Arabian sea horizon at dusk.",
    tilt: "-rotate-2",
    dateText: "Kochi, 2024",
    alt: "Silhouette of bride and groom holding hands during golden sunset",
  },
  {
    id: "g2",
    src: gallery2,
    title: "Sacred Henna & Jasmine",
    category: "Ceremonial Details",
    caption: "Intricate floral mehendi patterns adorned with fresh Madurai malli jasmine buds.",
    tilt: "rotate-1",
    dateText: "Chennai, 2025",
    alt: "Detailed mehendi design on hands surrounded by white jasmine flowers",
  },
  {
    id: "g3",
    src: gallery3,
    title: "Coastal Whispers",
    category: "Couple Portraits",
    caption: "Morning walk along the tranquil sands of Marari beach, listening to gentle tides.",
    tilt: "-rotate-1",
    dateText: "Marari, 2024",
    alt: "Couple walking peacefully along the Kerala coastline at sunrise",
  },
  {
    id: "g4",
    src: gallery4,
    title: "The Auspicious Flame",
    category: "Ceremonial Details",
    caption: "Traditional brass Kuthuvilakku lamp illuminated with coconut oil, blessing the family home.",
    tilt: "rotate-2",
    dateText: "Ancestral Home",
    alt: "Handcrafted brass oil lamp glowing with five sacred flames",
  },
  {
    id: "g5",
    src: gallery5,
    title: "Vembanad Drifting",
    category: "Kerala Landscapes",
    caption: "A traditional wooden canoe gliding silently under the shade of emerald coconut canopies.",
    tilt: "-rotate-2",
    dateText: "Kumarakom",
    alt: "Traditional Kerala canoe sailing along tranquil backwater canal",
  },
  {
    id: "g6",
    src: invitationArch,
    title: "The Union of Two Souls",
    category: "Couple Portraits",
    caption: "Exchanging traditional jasmine garlands in sacred devotion, surrounded by family blessings.",
    tilt: "rotate-1",
    dateText: "Sacred Vows",
    alt: "Bride and groom exchanging traditional South Indian floral garlands",
  },
  {
    id: "g7",
    src: storySunset,
    title: "Golden Hour on Vembanad",
    category: "Kerala Landscapes",
    caption: "Dusk painting the quiet ripples in rich shades of amber, gold, and deep emerald.",
    tilt: "-rotate-1",
    dateText: "Backwater Journey",
    alt: "Scenic backwater landscape with wooden houseboat against setting sun",
  },
  {
    id: "g8",
    src: venuePhoto,
    title: "Heritage Waterfront Sanctuary",
    category: "Kerala Landscapes",
    caption: "The timeless Kerala Tharavadu architecture of Coconut Lagoon Resort nestled in greenery.",
    tilt: "rotate-2",
    dateText: "Kumarakom Resort",
    alt: "Traditional wooden Kerala heritage mansion on the tranquil lakeside",
  },
];
