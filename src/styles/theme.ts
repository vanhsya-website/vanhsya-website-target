// VANHSYA Premium Theme System - 2025 (Logo-Inspired)
export const VanhsyaTheme = {
  // Brand Colors from Logo - Purple & Gold Luxury
  colors: {
    // Primary Purple Palette (from logo)
    primary: {
      50: '#FAF5FF',
      100: '#F3E8FF',
      200: '#E9D5FF',
      300: '#D8B4FE',
      400: '#C084FC',
      500: '#A855F7', // Main primary purple
      600: '#9333EA',
      700: '#7C3AED',
      800: '#6B21A8',
      900: '#581C87',
      950: '#3B0764',
    },
    // Accent Gold Palette (from logo)
    accent: {
      50: '#FFFDF7',
      100: '#FEF9E8',
      200: '#FEF2C7',
      300: '#FDE68A',
      400: '#FCD34D',
      500: '#F59E0B', // Main accent gold
      600: '#D97706',
      700: '#B45309',
      800: '#92400E',
      900: '#78350F',
      950: '#451A03',
    },
    // Neutral Dark Palette
    neutral: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
      950: '#020617',
    },
  },

  // Premium Gradients
  gradients: {
    primary: 'from-purple-600 via-violet-600 to-indigo-700',
    accent: 'from-amber-500 via-orange-500 to-yellow-600',
    hero: 'from-slate-950 via-purple-950/50 to-indigo-950',
    cosmic: 'from-indigo-950 via-purple-950 to-violet-950',
    luxury: 'from-purple-900 via-violet-800 to-indigo-900',
    gold: 'from-yellow-600 via-amber-500 to-orange-600',
    royal: 'from-purple-800 via-indigo-700 to-blue-800',
    sunset: 'from-orange-400 via-red-500 to-pink-600',
    ocean: 'from-blue-600 via-cyan-500 to-teal-400',
    galaxy: 'from-purple-800 via-violet-700 to-indigo-600',
    neon: 'from-pink-500 via-purple-500 to-indigo-500',
  },

  // Background Gradients
  backgrounds: {
    main: 'bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950',
    hero: 'bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950',
    section: 'bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900',
    card: 'bg-gradient-to-br from-white/5 via-white/10 to-white/5',
    glass: 'bg-white/10 backdrop-blur-xl border border-white/20',
  },

  // Text Colors
  text: {
    primary: 'text-white',
    secondary: 'text-slate-300',
    accent: 'text-violet-400',
    gradient:
      'bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent',
    glow: 'text-white drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]',
  },

  // Animation Classes
  animations: {
    float: 'animate-[float_6s_ease-in-out_infinite]',
    pulse: 'animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]',
    spin: 'animate-[spin_3s_linear_infinite]',
    glow: 'animate-[glow_2s_ease-in-out_infinite_alternate]',
    bounce: 'animate-[bounce_1s_infinite]',
  },

  // Button Styles
  buttons: {
    primary:
      'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700',
    secondary:
      'bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700',
    accent:
      'bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700',
    ghost:
      'bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30',
  },

  // Effects
  effects: {
    glow: 'shadow-[0_0_50px_rgba(139,92,246,0.3)]',
    glowStrong: 'shadow-[0_0_100px_rgba(139,92,246,0.5)]',
    floatingParticle:
      'bg-gradient-to-r from-violet-400/30 to-purple-400/30 rounded-full blur-sm',
  },
};

// Custom CSS for animations
export const customAnimations = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes glow {
    from { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
    to { box-shadow: 0 0 40px rgba(139, 92, 246, 0.7); }
  }
  
  @keyframes aurora {
    0%, 100% { opacity: 0.3; transform: rotate(0deg) scale(1); }
    33% { opacity: 0.8; transform: rotate(120deg) scale(1.1); }
    66% { opacity: 0.6; transform: rotate(240deg) scale(0.9); }
  }
`;
