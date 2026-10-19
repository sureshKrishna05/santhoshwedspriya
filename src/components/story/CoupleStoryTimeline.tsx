import React, { useState } from 'react';
import { weddingConfig } from '../../data/weddingConfig';
import { OrnamentalDivider } from '../shared/OrnamentalDivider';
import { FloralReveal } from '../shared/FloralReveal';
import storySunset from '../../assets/decorations/story_sunset.png';
import { Sparkles, Calendar, MapPin } from 'lucide-react';

export const CoupleStoryTimeline: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);
  const [showFullStory, setShowFullStory] = useState<boolean>(false);

  return (
    <section
      id="story"
      className="relative py-20 sm:py-28 bg-[#F7F2E8] border-t border-[#B88A43]/15 overflow-hidden"
      aria-label="Our Story and Milestones"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <FloralReveal direction="up" delay={0.1}>
            <span className="text-[11px] uppercase tracking-[0.28em] font-medium text-[#B88A43]">
              {weddingConfig.story.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A3024] font-normal mt-1 mb-2">
              {weddingConfig.story.title}
            </h2>
          </FloralReveal>

          <FloralReveal direction="up" delay={0.2}>
            <OrnamentalDivider size="sm" variant="kolam" />
          </FloralReveal>

          <FloralReveal direction="up" delay={0.3}>
            <p className="font-sans text-sm sm:text-base text-[#756957] font-light leading-relaxed">
              {weddingConfig.story.summary}
            </p>
          </FloralReveal>
        </div>

        {/* Featured Story Vignette with Scalloped Sunset Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left: Intimate Narrative */}
          <div className="lg:col-span-6 space-y-4">
            <FloralReveal direction="right" delay={0.2}>
              <div className="p-6 sm:p-8 rounded-2xl bg-[#FFF9EF] border border-[#B88A43]/25 shadow-xs relative">
                <div className="w-8 h-8 rounded-full bg-[#B88A43]/10 flex items-center justify-center text-[#B88A43] mb-4">
                  <Sparkles size={16} />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#123F35] font-medium mb-2">
                  A Tapestry of Shared Dreams
                </h3>
                <p className="text-sm text-[#756957] leading-relaxed font-light mb-4">
                  Our lives crossed paths not with fanfare, but in the quiet, unhurried cadence of genuine understanding. From early evening teas listening to rain trickling off traditional tile roofs to endless discussions about philosophy, family traditions, and our favorite book corners, each day naturally wove into the next.
                </p>
                <p className="text-sm text-[#756957] leading-relaxed font-light">
                  Today, as we prepare to stand before the holy sacred flame surrounded by the aroma of fresh sandal and parijatha blossoms, we cherish each step that brought us here.
                </p>

                <div className="mt-6 pt-4 border-t border-[#B88A43]/15 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setShowFullStory(!showFullStory)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B88A43] font-medium hover:text-[#966f33] transition-colors focus-visible:ring-2 focus-visible:ring-[#B88A43] outline-none"
                  >
                    <span>{showFullStory ? 'Close Story Details' : 'Read Full Story'}</span>
                    <span aria-hidden="true">{showFullStory ? '↑' : '→'}</span>
                  </button>
                  <span className="font-script text-2xl text-[#B88A43]">S &amp; A</span>
                </div>
              </div>
            </FloralReveal>
          </div>

          {/* Right: Scalloped Backwater Sunset Visual */}
          <div className="lg:col-span-6 flex justify-center">
            <FloralReveal direction="left" delay={0.3} className="w-full max-w-md">
              <div className="relative p-2 rounded-3xl bg-[#FFF9EF] border border-[#B88A43]/30 shadow-md group">
                <div className="overflow-hidden rounded-2xl relative">
                  <img
                    src={storySunset}
                    alt="Kerala backwater sunset with coconut palms and tranquil traditional boat"
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123F35]/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-4 right-4 text-[#FFF9EF] text-xs font-serif italic drop-shadow-md">
                    "Two hearts, one peaceful horizon."
                  </div>
                </div>
              </div>
            </FloralReveal>
          </div>
        </div>

        {/* Milestone Timeline Tabs / Accordion */}
        {showFullStory && (
          <div className="pt-2 pb-8 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="text-center mb-8">
              <h4 className="font-serif text-2xl text-[#4A3024]">Key Milestones Along the Way</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {weddingConfig.story.milestones.map((item, idx) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setSelectedMilestone(idx)}
                  className={`p-5 rounded-xl text-left transition-all border ${
                    selectedMilestone === idx
                      ? 'bg-[#FFF9EF] border-[#B88A43] shadow-md ring-1 ring-[#B88A43]'
                      : 'bg-[#FFF9EF]/60 border-[#B88A43]/15 hover:bg-[#FFF9EF]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-serif font-bold text-[#B88A43] mb-1">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {item.year}
                    </span>
                    {item.location && (
                      <span className="flex items-center gap-1 font-sans text-[10px] font-normal text-[#756957]">
                        <MapPin size={11} />
                        {item.location}
                      </span>
                    )}
                  </div>
                  <div className="font-serif text-base font-medium text-[#123F35] mb-1">
                    {item.title}
                  </div>
                  <p className="font-sans text-xs text-[#756957] line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Expanded details view of the selected milestone */}
            <div className="mt-4 p-6 rounded-xl bg-[#FFF9EF] border border-[#B88A43]/30">
              <div className="text-xs uppercase tracking-widest text-[#B88A43] font-medium mb-1">
                Chapter {selectedMilestone + 1} • {weddingConfig.story.milestones[selectedMilestone].year}
              </div>
              <h5 className="font-serif text-xl sm:text-2xl text-[#123F35] mb-2 font-medium">
                {weddingConfig.story.milestones[selectedMilestone].title}
              </h5>
              <p className="font-sans text-sm text-[#756957] leading-relaxed">
                {weddingConfig.story.milestones[selectedMilestone].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
