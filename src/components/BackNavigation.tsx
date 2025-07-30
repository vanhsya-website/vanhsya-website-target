'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Home, ChevronRight } from 'lucide-react';

interface BackNavigationProps {
  currentPage?: string;
  showBreadcrumb?: boolean;
  customBackUrl?: string;
  customBackLabel?: string;
}

export default function BackNavigation({ 
  currentPage = '',
  showBreadcrumb = true,
  customBackUrl = '/',
  customBackLabel = 'Home'
}: BackNavigationProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    ...(currentPage ? [{ label: currentPage, href: '#' }] : [])
  ];

  return (
    <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Back Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back</span>
            </button>

            <div className="h-6 w-px bg-slate-300" />

            <Link
              href={customBackUrl}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="font-medium">{customBackLabel}</span>
            </Link>
          </div>

          {/* Breadcrumb */}
          {showBreadcrumb && (
            <nav className="hidden sm:flex items-center gap-2 text-sm">
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={item.href}>
                  {index > 0 && <ChevronRight className="w-4 h-4 text-slate-400" />}
                  {index === breadcrumbItems.length - 1 ? (
                    <span className="text-slate-600 font-medium">{item.label}</span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-slate-500 hover:text-slate-700 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}
