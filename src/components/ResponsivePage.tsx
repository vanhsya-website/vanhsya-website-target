'use client';

import React from 'react';
import { motion } from 'framer-motion';

import {
  ResponsiveContainer,
  useDeviceType,
  useSafeArea,
} from './ResponsiveUtils';

interface ResponsivePageProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  withAnimation?: boolean;
  backgroundVariant?: 'default' | 'gradient' | 'pattern';
}

const ResponsivePage: React.FC<ResponsivePageProps> = ({
  children,
  className = '',
  maxWidth = 'xl',
  padding = 'md',
  withAnimation = true,
  backgroundVariant = 'default',
}) => {
  const { deviceType, isTouchDevice } = useDeviceType();
  const safeArea = useSafeArea();

  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const backgroundClasses = {
    default: 'bg-slate-900',
    gradient: 'bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800',
    pattern:
      'bg-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900',
  };

  const deviceSpecificClasses = {
    mobile: 'text-sm',
    tablet: 'text-base',
    desktop: 'text-base',
    tv: 'text-lg',
  };

  const touchOptimizations = isTouchDevice ? 'touch-manipulation' : '';

  const pageStyle = {
    paddingTop: `calc(1rem + ${safeArea.top}px)`,
    paddingBottom: `calc(1rem + ${safeArea.bottom}px)`,
    minHeight: `calc(100vh - ${safeArea.top + safeArea.bottom}px)`,
  };

  const PageContent = (
    <div
      className={`
        ${backgroundClasses[backgroundVariant]} 
        ${deviceSpecificClasses[deviceType]} 
        ${touchOptimizations}
        ${className}
        min-h-screen
        relative
        overflow-x-hidden
      `}
      style={pageStyle}
    >
      <ResponsiveContainer maxWidth={maxWidth} padding={padding}>
        {children}
      </ResponsiveContainer>
    </div>
  );

  if (withAnimation) {
    return (
      <motion.div variants={pageVariants} initial='hidden' animate='visible'>
        {PageContent}
      </motion.div>
    );
  }

  return PageContent;
};

export default ResponsivePage;

// Section component for consistent spacing
interface ResponsiveSectionProps {
  children: React.ReactNode;
  className?: string;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'transparent' | 'white' | 'gray' | 'purple';
  centered?: boolean;
}

export const ResponsiveSection: React.FC<ResponsiveSectionProps> = ({
  children,
  className = '',
  spacing = 'md',
  background = 'transparent',
  centered = false,
}) => {
  const { deviceType } = useDeviceType();

  const spacingClasses = {
    sm: 'py-6 sm:py-8 md:py-12',
    md: 'py-8 sm:py-12 md:py-16 lg:py-20',
    lg: 'py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28',
    xl: 'py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32',
  };

  const backgroundClasses = {
    transparent: '',
    white: 'bg-white',
    gray: 'bg-gray-50',
    purple: 'bg-gradient-to-r from-purple-50 to-indigo-50',
  };

  const centerClasses = centered ? 'text-center' : '';

  const deviceAdjustments = {
    mobile: 'px-4',
    tablet: 'px-6',
    desktop: 'px-8',
    tv: 'px-12',
  };

  return (
    <section
      className={`
      ${spacingClasses[spacing]} 
      ${backgroundClasses[background]} 
      ${centerClasses}
      ${deviceAdjustments[deviceType]}
      ${className}
    `}
    >
      {children}
    </section>
  );
};

// Card component with responsive design
interface ResponsiveCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered' | 'glass';
  padding?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  href?: string;
}

export const ResponsiveCard: React.FC<ResponsiveCardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  interactive = false,
  href,
}) => {
  const { isTouchDevice } = useDeviceType();

  const variantClasses = {
    default: 'bg-white rounded-xl shadow-card',
    elevated: 'bg-white rounded-xl shadow-apple-lg',
    bordered: 'bg-white rounded-xl border border-gray-200',
    glass: 'bg-white/80 backdrop-blur-xl rounded-xl border border-white/20',
  };

  const paddingClasses = {
    sm: 'p-4 sm:p-5',
    md: 'p-5 sm:p-6 md:p-8',
    lg: 'p-6 sm:p-8 md:p-10',
  };

  const interactiveClasses = interactive
    ? isTouchDevice
      ? 'hover:shadow-hover active:scale-[0.98] transition-all duration-200 cursor-pointer'
      : 'hover:shadow-hover hover:-translate-y-1 transition-all duration-200 cursor-pointer'
    : '';

  const cardClasses = `
    ${variantClasses[variant]} 
    ${paddingClasses[padding]} 
    ${interactiveClasses}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={cardClasses}>
        {children}
      </a>
    );
  }

  return <div className={cardClasses}>{children}</div>;
};

// Typography component with responsive sizing
interface ResponsiveTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'muted' | 'white' | 'purple';
  className?: string;
  centered?: boolean;
}

export const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  as = 'p',
  size = 'base',
  weight = 'normal',
  color = 'primary',
  className = '',
  centered = false,
}) => {
  const Component = as;

  const sizeClasses = {
    xs: 'text-xs sm:text-sm',
    sm: 'text-sm sm:text-base',
    base: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl',
    xl: 'text-xl sm:text-2xl',
    '2xl': 'text-2xl sm:text-3xl',
    '3xl': 'text-3xl sm:text-4xl md:text-5xl',
    '4xl': 'text-4xl sm:text-5xl md:text-6xl',
    '5xl': 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const colorClasses = {
    primary: 'text-gray-900',
    secondary: 'text-gray-700',
    muted: 'text-gray-500',
    white: 'text-white',
    purple: 'text-purple-600',
  };

  const centerClasses = centered ? 'text-center' : '';

  return (
    <Component
      className={`
      ${sizeClasses[size]} 
      ${weightClasses[weight]} 
      ${colorClasses[color]} 
      ${centerClasses}
      ${className}
    `}
    >
      {children}
    </Component>
  );
};
