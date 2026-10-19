import React, { useState, useRef } from 'react';
import { galleryImages, galleryCategories } from '../../data/galleryImages';
import { GalleryLightbox } from './GalleryLightbox';
import { OrnamentalDivider } from '../shared/OrnamentalDivider';
import { FloralReveal } from '../shared/FloralReveal';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const WeddingGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Moments');
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredItems = galleryImages.filter(
    (item) => selectedCategory === 'All Moments' || item.category === selectedCategory
  );

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-28 bg-[#FFF9EF] border-t border-[#B88A43]/15 overflow-hidden"
      aria-label="Wedding Moments Gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <FloralReveal direction="up" delay={0.1}>
            <span className="text-[11px] uppercase tracking-[0.28em] font-medium text-[#B88A43]">
              OUR MOMENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A3024] font-normal mt-1 mb-2">
              Gallery
            </h2>
          </FloralReveal>

          <FloralReveal direction="up" delay={0.2}>
            <OrnamentalDivider size="sm" variant="lotus" />
          </FloralReveal>

          <FloralReveal direction="up" delay={0.3}>
            <p className="font-sans text-sm sm:text-base text-[#756957] font-light leading-relaxed">
              A few glimpses from our journey so far, captured along calm waters, family homes, and timeless memories.
            </p>
          </FloralReveal>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#B88A43] outline-none ${
                selectedCategory === cat
                  ? 'bg-[#B88A43] text-[#FFF9EF] shadow-xs'
                  : 'bg-[#F7F2E8] text-[#756957] hover:bg-[#B88A43]/15 hover:text-[#4A3024] border border-[#B88A43]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel / Collage Container with Controls */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll('left')}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#FFF9EF] border border-[#B88A43]/40 shadow-md items-center justify-center text-[#B88A43] hover:bg-[#B88A43] hover:text-[#FFF9EF] transition-all focus-visible:ring-2 focus-visible:ring-[#B88A43] outline-none"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll('right')}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#FFF9EF] border border-[#B88A43]/40 shadow-md items-center justify-center text-[#B88A43] hover:bg-[#B88A43] hover:text-[#FFF9EF] transition-all focus-visible:ring-2 focus-visible:ring-[#B88A43] outline-none"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>

          {/* Horizontal Scrolling Gallery Strip */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-6 sm:gap-7 overflow-x-auto pb-6 pt-3 px-2 scroll-smooth no-scrollbar"
            tabIndex={0}
            role="region"
            aria-label="Photo carousel"
          >
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(idx)}
                className={`shrink-0 w-64 sm:w-72 bg-[#FFFFFF] p-3 rounded-xl shadow-md border border-[#B88A43]/20 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 group ${item.tilt}`}
              >
                <div className="relative aspect-4/3 rounded-lg overflow-hidden bg-[#F7F2E8]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Subtle hover icon overlay */}
                  <div className="absolute inset-0 bg-[#123F35]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[#FFF9EF]">
                    <div className="p-2.5 rounded-full bg-[#FFF9EF]/20 backdrop-blur-xs">
                      <Eye size={20} />
                    </div>
                  </div>
                </div>

                {/* Polaroid Bottom Caption */}
                <div className="pt-3 pb-1 text-center">
                  <div className="font-serif text-sm font-medium text-[#123F35] truncate">
                    {item.title}
                  </div>
                  {item.dateText && (
                    <div className="text-[10px] uppercase tracking-wider text-[#B88A43] font-medium mt-0.5">
                      {item.dateText}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {filteredItems.slice(0, 5).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({
                    left: i * 280,
                    behavior: 'smooth',
                  });
                }
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === 0 ? 'bg-[#B88A43] w-5' : 'bg-[#B88A43]/30 hover:bg-[#B88A43]'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};
