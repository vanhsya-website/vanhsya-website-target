'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useAnimation, useMotionValue, useTransform } from 'framer-motion';

// Advanced intersection observer hook with multiple triggers
export const useAdvancedInView = (threshold = 0.1, triggerOnce = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once: triggerOnce });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [isInView, controls, triggerOnce]);

  return { ref, isInView, controls };
};

// Staggered children animation
export const useStaggeredAnimation = (delay = 0.1) => {
  const controls = useAnimation();
  
  const startStagger = () => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * delay,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }));
  };

  return { controls, startStagger };
};

// Parallax scroll effect
export const useParallax = (speed = 0.5) => {
  const y = useMotionValue(0);
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    const updateElementTop = () => {
      setElementTop(element.offsetTop);
    };

    updateElementTop();
    window.addEventListener('resize', updateElementTop);
    
    const updateY = () => {
      if (element) {
        const scrollY = window.scrollY;
        const rate = (scrollY - elementTop) * speed;
        y.set(rate);
      }
    };

    window.addEventListener('scroll', updateY);
    
    return () => {
      window.removeEventListener('scroll', updateY);
      window.removeEventListener('resize', updateElementTop);
    };
  }, [y, elementTop, speed]);

  return { ref, y };
};

// 3D tilt effect
export const use3DTilt = (maxTilt = 15) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = (event.clientX - centerX) / (rect.width / 2);
    const mouseY = (event.clientY - centerY) / (rect.height / 2);

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    ref,
    style: { rotateX, rotateY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  };
};

// Floating animation
export const useFloatingAnimation = (duration = 3, amplitude = 10) => {
  return {
    animate: {
      y: [-amplitude, amplitude, -amplitude],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
};

// Pulse glow effect
export const usePulseGlow = (duration = 2) => {
  return {
    animate: {
      boxShadow: [
        '0 0 20px rgba(99, 102, 241, 0.3)',
        '0 0 40px rgba(99, 102, 241, 0.6)',
        '0 0 20px rgba(99, 102, 241, 0.3)'
      ],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
};

// Text reveal animation
export const useTextReveal = () => {
  const controls = useAnimation();
  
  const startReveal = () => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    });
  };

  return { 
    controls, 
    startReveal,
    initial: { opacity: 0, y: 50 }
  };
};

// Magnetic hover effect
export const useMagneticHover = (strength = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (event.clientX - centerX) * strength;
    const deltaY = (event.clientY - centerY) * strength;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    ref,
    style: { x, y },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  };
};
