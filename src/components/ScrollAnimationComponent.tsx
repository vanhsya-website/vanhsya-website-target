'use client';

import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  triggerOnce?: boolean;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
}

const ScrollAnimationComponent = ({
  children,
  className = '',
  triggerOnce = true,
  threshold = 0.1,
  delay = 0,
  direction = 'fade',
  duration = 600,
}: ScrollAnimationProps) => {
  const { ref, inView } = useInView({
    triggerOnce, // Trigger animation only once
    threshold, // Trigger when % of element is in view
    delay, // Delay before triggering
  });

  // Animation styles based on direction
  const getAnimationStyles = () => {
    const baseStyles = `transition-all duration-${duration} ease-out`;

    if (!inView) {
      switch (direction) {
        case 'up':
          return `${baseStyles} opacity-0 translate-y-8`;
        case 'down':
          return `${baseStyles} opacity-0 -translate-y-8`;
        case 'left':
          return `${baseStyles} opacity-0 translate-x-8`;
        case 'right':
          return `${baseStyles} opacity-0 -translate-x-8`;
        case 'fade':
        default:
          return `${baseStyles} opacity-0`;
      }
    }

    return `${baseStyles} opacity-100 translate-y-0 translate-x-0`;
  };

  return (
    <div ref={ref} className={`${getAnimationStyles()} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimationComponent;
