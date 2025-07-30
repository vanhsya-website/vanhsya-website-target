import { useEffect, useState } from 'react';
import React from 'react';

/**
 * Hook to prevent hydration mismatch for client-only components
 * Returns true only after the component has mounted on the client
 */
export function useClientOnly() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

/**
 * Component wrapper to prevent hydration mismatch
 * Renders children only on the client side
 */
export function ClientOnly({ children }: { children: React.ReactNode }) {
  const isClient = useClientOnly();
  
  if (!isClient) {
    return null;
  }
  
  return <>{children}</>;
}
