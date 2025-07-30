'use client';

import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface StaggerAnimationProps {
  children: ReactNode[];
  className?: string;
  triggerOnce?: boolean;
  threshold?: number;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
}

const StaggerAnimationComponent = ({
  children,
  className = '',
  triggerOnce = true,
  threshold = 0.1,
  staggerDelay = 100,
  direction = 'up',
  duration = 600,
}: StaggerAnimationProps) => {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });

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
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={getAnimationStyles()}
          style={{
            transitionDelay: inView ? `${index * staggerDelay}ms` : '0ms',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default StaggerAnimationComponent;
