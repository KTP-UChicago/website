import { useEffect, useState } from 'react';

type ScrollNavState = {
  isHidden: boolean;
  isAtTop: boolean;
  scrollY: number;
};

const TOP_THRESHOLD = 20;
const SCROLL_THRESHOLD = 80;

export function useScrollNav(): ScrollNavState {
  const [state, setState] = useState<ScrollNavState>({
    isHidden: false,
    isAtTop: true,
    scrollY: 0,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      const isAtTop = currentY < TOP_THRESHOLD;
      const prefersReducedMotion =
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      let isHidden = false;
      if (!prefersReducedMotion && !isAtTop) {
        if (currentY > lastScrollY && currentY > SCROLL_THRESHOLD) {
          isHidden = true;
        } else if (currentY < lastScrollY) {
          isHidden = false;
        }
      }

      setState({ isHidden, isAtTop, scrollY: currentY });
      lastScrollY = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return state;
}
