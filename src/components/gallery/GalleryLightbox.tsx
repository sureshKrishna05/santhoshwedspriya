import React, { useEffect, useCallback } from 'react';
import { GalleryItem } from '../../data/galleryImages';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#123F35]/90 backdrop-blur-md p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-[#FFF9EF]/10 text-[#FFF9EF] hover:bg-[#FFF9EF]/25 hover:text-[#D9B875] transition-colors focus-visible:ring-2 focus-visible:ring-[#D9B875] outline-none z-10"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      {/* Prev button */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#FFF9EF]/10 text-[#FFF9EF] hover:bg-[#FFF9EF]/25 hover:text-[#D9B875] transition-colors focus-visible:ring-2 focus-visible:ring-[#D9B875] outline-none z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#FFF9EF]/10 text-[#FFF9EF] hover:bg-[#FFF9EF]/25 hover:text-[#D9B875] transition-colors focus-visible:ring-2 focus-visible:ring-[#D9B875] outline-none z-10"
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </button>

      {/* Main Content Modal Card */}
      <div className="relative max-w-4xl max-h-[90vh] bg-[#FFF9EF] border border-[#B88A43]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">
        <div className="relative flex items-center justify-center bg-[#0d2820] max-h-[70vh] overflow-hidden">
          <img
            src={currentItem.src}
            alt={currentItem.alt}
            className="w-auto h-auto max-h-[70vh] max-w-full object-contain"
          />
        </div>

        {/* Caption bar */}
        <div className="p-4 sm:p-6 bg-[#FFF9EF] border-t border-[#B88A43]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-[#B88A43] font-medium">
                {currentItem.category}
              </span>
              {currentItem.dateText && (
                <>
                  <span className="text-[#B88A43]">•</span>
                  <span className="text-xs text-[#756957]">{currentItem.dateText}</span>
                </>
              )}
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#123F35] font-medium mt-0.5">
              {currentItem.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#756957] mt-1 font-light leading-relaxed">
              {currentItem.caption}
            </p>
          </div>

          <div className="shrink-0 text-xs font-serif text-[#B88A43] self-end sm:self-center">
            {currentIndex + 1} of {items.length}
          </div>
        </div>
      </div>
    </div>
  );
};
