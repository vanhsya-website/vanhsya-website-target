'use client';

import React from 'react';
import Link from 'next/link';
import { Target, Star, ArrowRight, Zap, Shield } from 'lucide-react';

interface MigrationReadinessCardProps {
  className?: string;
}

export default function MigrationReadinessCard({ className = '' }: MigrationReadinessCardProps) {
  const features = [
    { icon: Target, text: "AI-powered assessment" },
    { icon: Star, text: "Personalized recommendations" },
    { icon: Shield, text: "Instant results" }
  ];

  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20zM0 20.172a8 8 0 1 1 15.656 0H0z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Migration Readiness Score™</h3>
              <p className="text-sm text-emerald-600 font-medium">AI-Powered Assessment</p>
            </div>
          </div>
          
          <div className="bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-sm font-bold">
            FREE
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Get your personalized Migration Readiness Score in under 3 minutes. Our AI analyzes your profile and provides tailored recommendations for your immigration journey.
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-gray-700 font-medium">{feature.text}</span>
              </div>
            );
          })}
        </div>

        {/* Score Preview */}
        <div className="bg-white rounded-xl p-4 mb-6 border border-emerald-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Sample Score Range</p>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-emerald-600">75-95</div>
                <span className="text-gray-400">/100</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 mb-1">Success Rate</p>
              <p className="text-lg font-bold text-green-600">High</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/ai-tools/eligibility-calculator?source=programs&utm_campaign=mrs_teaser"
          className="w-full group/btn bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2"
        >
          Get Your MRS™ Now
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>

        {/* Trust Indicators */}
        <div className="mt-4 pt-4 border-t border-emerald-100">
          <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              100% Secure
            </span>
            <span>•</span>
            <span>No Personal Info Required</span>
            <span>•</span>
            <span>Instant Results</span>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-transparent to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
