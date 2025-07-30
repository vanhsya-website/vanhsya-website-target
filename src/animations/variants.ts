// Framer Motion animation variants for consistent Apple-style animations

export const fadeIn = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] // Apple's signature easing
    }
  }
};

export const slideUp = {
  hidden: { 
    y: 30, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const slideDown = {
  hidden: { 
    y: -30, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const slideLeft = {
  hidden: { 
    x: 30, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const slideRight = {
  hidden: { 
    x: -30, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const scaleIn = {
  hidden: { 
    scale: 0.8, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const cardHover = {
  rest: { 
    scale: 1,
    transition: { 
      duration: 0.3, 
      ease: "easeOut"
    }
  },
  hover: { 
    scale: 1.02,
    y: -4,
    transition: { 
      duration: 0.3, 
      ease: "easeOut"
    }
  }
};

export const buttonHover = {
  rest: { 
    scale: 1,
    backgroundColor: '#6a1b9a',
    transition: { 
      duration: 0.2, 
      ease: "easeOut"
    }
  },
  hover: { 
    scale: 1.05,
    backgroundColor: '#9c27b0',
    transition: { 
      duration: 0.2, 
      ease: "easeOut"
    }
  },
  tap: { 
    scale: 0.95,
    transition: { 
      duration: 0.1, 
      ease: "easeOut"
    }
  }
};
