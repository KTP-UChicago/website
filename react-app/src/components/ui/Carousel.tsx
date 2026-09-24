import React, { useCallback, useEffect, useRef, useState } from 'react';

type CarouselProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

const Carousel: React.FC<CarouselProps> = ({ label, children, className = '' }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    updateControls();
    const track = trackRef.current;
    if (!track) return undefined;

    track.addEventListener('scroll', updateControls, { passive: true });
    window.addEventListener('resize', updateControls);

    return () => {
      track.removeEventListener('scroll', updateControls);
      window.removeEventListener('resize', updateControls);
    };
  }, [updateControls, children]);

  const scrollByPage = (direction: 'prev' | 'next') => {
    const track = trackRef.current;
    if (!track) return;
    const firstSlide = track.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(window.getComputedStyle(track).gap) || 0;
    const distance = firstSlide ? firstSlide.offsetWidth + gap : track.clientWidth;
    track.scrollBy({
      left: direction === 'next' ? distance : -distance,
      behavior: 'smooth',
    });
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollByPage('prev');
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollByPage('next');
    }
  };

  return (
    <div className={`ktp-carousel ${className}`.trim()}>
      <button
        type="button"
        className="ktp-carousel__btn ktp-carousel__btn--prev"
        aria-label={`Previous ${label}`}
        disabled={!canPrev}
        onClick={() => scrollByPage('prev')}
      >
        ‹
      </button>

      <div
        ref={trackRef}
        className="ktp-carousel__track"
        role="region"
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {children}
      </div>

      <button
        type="button"
        className="ktp-carousel__btn ktp-carousel__btn--next"
        aria-label={`Next ${label}`}
        disabled={!canNext}
        onClick={() => scrollByPage('next')}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
