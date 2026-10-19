import React from 'react';
import { ScrollProgressIndicator } from './components/shared/ScrollProgressIndicator';
import { WeddingNavbar } from './components/navigation/WeddingNavbar';
import { ParallaxWeddingHero } from './components/hero/ParallaxWeddingHero';
import { WeddingInvitation } from './components/invitation/WeddingInvitation';
import { CoupleStoryTimeline } from './components/story/CoupleStoryTimeline';
import { WeddingCountdown } from './components/countdown/WeddingCountdown';
import { WeddingEvents } from './components/events/WeddingEvents';
import { VenueSection } from './components/venue/VenueSection';
import { WeddingGallery } from './components/gallery/WeddingGallery';
import { WeddingFooter } from './components/footer/WeddingFooter';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F2E8] text-[#4A3024] selection:bg-[#B88A43]/20 selection:text-[#123F35] font-sans [overflow-x:clip]">
      {/* 1. Delicate Gold Thread Scroll Progress Indicator */}
      <ScrollProgressIndicator />

      {/* 2. Fixed Monogram Navigation Header */}
      <WeddingNavbar />

      <main>
        {/* 3. Cinematic 13-Layer Parallax Backwater Hero */}
        <ParallaxWeddingHero />

        {/* 4. Editorial Split Wedding Invitation */}
        <WeddingInvitation />

        {/* 5. Intimate Relationship Milestones & Story Timeline */}
        <CoupleStoryTimeline />

        {/* 6. Deep Emerald & Antique Gold Countdown */}
        <WeddingCountdown />

        {/* 7. Arched Wedding Celebrations Schedule */}
        <WeddingEvents />

        {/* 8. Heritage Venue with Directions & Calendar */}
        <VenueSection />

        {/* 9. Polaroid Collage Moments Gallery & Lightbox */}
        <WeddingGallery />
      </main>

      {/* 10. Closing Experience & Interactive RSVP Card */}
      <WeddingFooter />
    </div>
  );
};

export default App;
