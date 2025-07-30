/**
 * Deterministic random number generator for SSR compatibility
 * This ensures the same random values are generated on both server and client
 */

// Simple seeded random number generator (Linear Congruential Generator)
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed % 2147483647;
    if (this.seed <= 0) this.seed += 2147483646;
  }

  next(): number {
    this.seed = (this.seed * 16807) % 2147483647;
    return (this.seed - 1) / 2147483646;
  }
}

// Cache for consistent values per component instance
const randomCache = new Map<string, SeededRandom>();

export function getDeterministicRandom(
  key: string,
  seed: number = 12345
): SeededRandom {
  if (!randomCache.has(key)) {
    randomCache.set(key, new SeededRandom(seed));
  }
  return randomCache.get(key)!;
}

export function generateFloatingElements(count: number, componentKey: string) {
  const rng = getDeterministicRandom(componentKey);

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: rng.next() * 100,
    top: rng.next() * 100,
    duration: 3 + rng.next() * 2,
    delay: rng.next() * 2,
    opacity: 0.3,
  }));
}

export function generateAnimationVariations(
  componentKey: string,
  index: number
) {
  const rng = getDeterministicRandom(`${componentKey}-${index}`);

  return {
    x: [0, (rng.next() - 0.5) * 60, 0],
    y: [0, -30, 0],
    opacity: [0.3, 0.8, 0.3],
    scale: [1, 1.2, 1],
  };
}

// Clear cache on component unmount or page change
export function clearRandomCache() {
  randomCache.clear();
}
