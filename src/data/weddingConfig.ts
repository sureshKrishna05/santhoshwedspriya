export interface WeddingConfig {
  couple: {
    groom: string;
    bride: string;
    namesJoined: string;
    initials: string;
    eyebrow: string;
    headline: string;
    subtitle: string;
  };
  event: {
    date: string; // YYYY-MM-DD
    displayDate: string;
    time: string;
    timezone: string;
    city: string;
    state: string;
    country: string;
    fullLocation: string;
  };
  invitation: {
    eyebrow: string;
    title: string;
    message: string;
    ctaText: string;
  };
  story: {
    eyebrow: string;
    title: string;
    summary: string;
    ctaText: string;
    milestones: {
      year: string;
      title: string;
      description: string;
      location?: string;
    }[];
  };
  venue: {
    name: string;
    subtitle: string;
    address: string;
    city: string;
    state: string;
    description: string;
    googleMapsUrl: string;
    checkInTime: string;
  };
  countdown: {
    targetDate: string; // ISO string with timezone
    eyebrow: string;
    title: string;
  };
  footer: {
    tagline: string;
    quote: string;
    closingNote: string;
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: "Srinath",
    bride: "Ananya",
    namesJoined: "Srinath & Ananya",
    initials: "S & A",
    eyebrow: "TOGETHER, ALWAYS",
    headline: "Two Souls, One Beautiful Journey",
    subtitle: "TWO FAMILIES • ONE JOURNEY • A LIFETIME TOGETHER",
  },
  event: {
    date: "2026-12-15",
    displayDate: "15th December 2026",
    time: "07:00 AM IST",
    timezone: "Asia/Kolkata",
    city: "Kochi",
    state: "Kerala",
    country: "India",
    fullLocation: "Kochi, Kerala",
  },
  invitation: {
    eyebrow: "A CELEBRATION OF LOVE",
    title: "You're Invited",
    message:
      "With the blessings of our parents and elders, we joyfully invite you to join us as we embark on this sacred journey of companionship, love, and tradition amidst the tranquil waters of God's Own Country.",
    ctaText: "Join Our Celebration",
  },
  story: {
    eyebrow: "OUR STORY",
    title: "Different Paths, Same Horizon",
    summary:
      "From chance conversations across city lanes to shared sunset walks along the Arabian shore, our journey has been an unfolding tapestry of laughter, shared values, and deep companionship.",
    ctaText: "Read Our Story",
    milestones: [
      {
        year: "2021",
        title: "The Serendipitous Meeting",
        description:
          "A quiet coffee shop in Bangalore on a monsoon afternoon, where a brief conversation turned into three hours of effortless laughter and shared love for carnatic melodies and South Indian filter coffee.",
        location: "Bangalore",
      },
      {
        year: "2023",
        title: "Backwater Reflections",
        description:
          "During a serene boat trip through the Vembanad Lake in Kumarakom, watching dusk settle upon the coconut groves, we realized that we had found home in each other.",
        location: "Kumarakom",
      },
      {
        year: "2025",
        title: "Two Families Unite",
        description:
          "Surrounded by the warm fragrance of fresh jasmine and the soft chiming of temple bells, our families came together to bless our union with traditional rituals and abundant joy.",
        location: "Chennai",
      },
      {
        year: "2026",
        title: "The Sacred Beginning",
        description:
          "Stepping into our forever with the blessings of the sacred agni, auspicious nadaswaram melodies, and your cherished presence.",
        location: "Kochi",
      },
    ],
  },
  venue: {
    name: "Coconut Lagoon Resort",
    subtitle: "Heritage Waterfront Sanctuary",
    address: "Kavanattinkara, Kumarakom, Kottayam",
    city: "Kumarakom",
    state: "Kerala 686563",
    description:
      "Set amidst serene backwaters, where centuries-old Kerala architecture and gentle ripples meet tranquil coconut groves. Accessible by traditional wooden ferry, this sanctuary reflects the timeless grace of God's Own Country.",
    googleMapsUrl: "https://maps.google.com/?q=Coconut+Lagoon+Kumarakom+Kerala",
    checkInTime: "12:00 PM IST",
  },
  countdown: {
    targetDate: "2026-12-15T07:00:00+05:30",
    eyebrow: "THE BIG DAY",
    title: "Counting Down",
  },
  footer: {
    tagline: "Two hearts, one home.",
    quote: "With love and gratitude, we eagerly await your presence as we take our sacred seven steps.",
    closingNote: "We can't wait to celebrate with you.",
  },
};
