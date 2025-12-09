'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initializeAnalytics, trackPageView, hasAnalyticsConsent } from '@/lib/analytics';

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Initialize analytics on mount if consent exists
  useEffect(() => {
    if (hasAnalyticsConsent()) {
      initializeAnalytics();
    }

    // Listen for consent being granted
    const handleConsentGranted = () => {
      initializeAnalytics();
    };

    window.addEventListener('cookieConsentGranted', handleConsentGranted);
    return () => {
      window.removeEventListener('cookieConsentGranted', handleConsentGranted);
    };
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (hasAnalyticsConsent()) {
      trackPageView(pathname);
    }
  }, [pathname]);

  return <>{children}</>;
}
