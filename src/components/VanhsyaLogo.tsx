'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface VanhsyaLogoProps {
  size?: number;
  className?: string;
  animated?: boolean;
  width?: number;
  height?: number;
}

export default function VanhsyaLogo({
  size = 48,
  className = '',
  animated = true,
  width,
  height,
}: VanhsyaLogoProps) {
  const logoWidth = width || size * 4; // Default aspect ratio 4:1
  const logoHeight = height || size;

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: logoWidth, height: logoHeight }}
      initial={
        animated
          ? {
              scale: 1,
              filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.4))',
            }
          : undefined
      }
      whileHover={
        animated
          ? {
              scale: 1.05,
              filter: 'drop-shadow(0 0 30px rgba(147, 51, 234, 0.8))',
            }
          : undefined
      }
      animate={
        animated
          ? {
              filter: [
                'drop-shadow(0 0 15px rgba(147, 51, 234, 0.4))',
                'drop-shadow(0 0 30px rgba(147, 51, 234, 0.7))',
                'drop-shadow(0 0 15px rgba(147, 51, 234, 0.4))',
              ],
            }
          : undefined
      }
      transition={
        animated
          ? { duration: 3, repeat: Infinity, ease: 'easeInOut' }
          : undefined
      }
    >
      <Image
        src='/images/vanhsya-logo-main.png'
        alt='VANHSYA Global Migration'
        width={logoWidth}
        height={logoHeight}
        className='w-full h-full object-contain'
        priority
      />
    </motion.div>
  );
}
