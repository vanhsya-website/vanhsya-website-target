'use client';

import { useState, useEffect } from 'react';

// Device detection hook
export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop' | 'tv'>('desktop');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Device type detection
      if (width < 768) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else if (width < 1920) {
        setDeviceType('desktop');
      } else {
        setDeviceType('tv');
      }

      // Touch device detection
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

      // Orientation detection
      setOrientation(width > height ? 'landscape' : 'portrait');
    };

    updateDeviceInfo();
    window.addEventListener('resize', updateDeviceInfo);
    window.addEventListener('orientationchange', updateDeviceInfo);

    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      window.removeEventListener('orientationchange', updateDeviceInfo);
    };
  }, []);

  return { deviceType, isTouchDevice, orientation };
};

// Viewport dimensions hook
export const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: 0,
    height: 0,
    isLandscape: false,
    isPortrait: true,
  });

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setViewport({
        width,
        height,
        isLandscape: width > height,
        isPortrait: height > width,
      });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    window.addEventListener('orientationchange', updateViewport);

    return () => {
      window.removeEventListener('resize', updateViewport);
      window.removeEventListener('orientationchange', updateViewport);
    };
  }, []);

  return viewport;
};

// Safe area detection for notched devices
export const useSafeArea = () => {
  const [safeArea, setSafeArea] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  useEffect(() => {
    const updateSafeArea = () => {
      const computedStyle = getComputedStyle(document.documentElement);
      setSafeArea({
        top: parseInt(computedStyle.getPropertyValue('env(safe-area-inset-top)') || '0'),
        bottom: parseInt(computedStyle.getPropertyValue('env(safe-area-inset-bottom)') || '0'),
        left: parseInt(computedStyle.getPropertyValue('env(safe-area-inset-left)') || '0'),
        right: parseInt(computedStyle.getPropertyValue('env(safe-area-inset-right)') || '0'),
      });
    };

    updateSafeArea();
    window.addEventListener('resize', updateSafeArea);

    return () => {
      window.removeEventListener('resize', updateSafeArea);
    };
  }, []);

  return safeArea;
};

// Cross-device container component
interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = '',
  maxWidth = 'xl',
  padding = 'md',
}) => {
  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-[1440px]',
    full: 'max-w-full',
  };

  const paddingClasses = {
    none: '',
    sm: 'px-4 sm:px-6',
    md: 'px-4 sm:px-6 md:px-8 lg:px-10',
    lg: 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16',
    xl: 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20',
  };

  return (
    <div className={`mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
};

// Responsive grid component
interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  className = '',
  cols = { default: 1, sm: 2, lg: 3 },
  gap = 'md',
}) => {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  };

  const gridCols = `grid-cols-${cols.default}`;
  const smCols = cols.sm ? `sm:grid-cols-${cols.sm}` : '';
  const mdCols = cols.md ? `md:grid-cols-${cols.md}` : '';
  const lgCols = cols.lg ? `lg:grid-cols-${cols.lg}` : '';
  const xlCols = cols.xl ? `xl:grid-cols-${cols.xl}` : '';

  return (
    <div className={`grid ${gridCols} ${smCols} ${mdCols} ${lgCols} ${xlCols} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

// Touch-friendly button component
interface TouchButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export const TouchButton: React.FC<TouchButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
}) => {
  const { isTouchDevice } = useDeviceType();

  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-accent-600 to-accent-500 text-white hover:opacity-90 focus:ring-accent-500',
    secondary: 'bg-black text-white hover:bg-neutral-800 focus:ring-neutral-500',
    ghost: 'text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-300',
  };

  const sizeClasses = {
    sm: isTouchDevice ? 'px-4 py-3 text-sm min-h-[44px]' : 'px-3 py-2 text-sm',
    md: isTouchDevice ? 'px-6 py-3 text-base min-h-[48px]' : 'px-4 py-2 text-base',
    lg: isTouchDevice ? 'px-8 py-4 text-lg min-h-[52px]' : 'px-6 py-3 text-lg',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

// Device-specific spacing component
export const DeviceSpacing: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { deviceType } = useDeviceType();
  const safeArea = useSafeArea();

  const spacingStyles = {
    paddingTop: `calc(1rem + ${safeArea.top}px)`,
    paddingBottom: `calc(1rem + ${safeArea.bottom}px)`,
    paddingLeft: `calc(1rem + ${safeArea.left}px)`,
    paddingRight: `calc(1rem + ${safeArea.right}px)`,
  };

  return (
    <div style={spacingStyles} className={`${deviceType === 'mobile' ? 'px-4' : deviceType === 'tablet' ? 'px-6' : 'px-8'}`}>
      {children}
    </div>
  );
};
