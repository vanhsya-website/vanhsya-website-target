'use client';

import React from 'react';
import Link from 'next/link';
import { Check, X, Crown, Star, Zap } from 'lucide-react';

interface Feature {
  name: string;
  free: boolean | string;
  vip: boolean | string;
  highlight?: boolean;
}

export default function VIPComparison() {
  const features: Feature[] = [
    { name: "Free consultation", free: true, vip: true },
    { name: "Basic eligibility assessment", free: true, vip: true },
    { name: "Standard support", free: true, vip: true },
    { name: "Priority support (24h response)", free: false, vip: true, highlight: true },
    { name: "Dedicated account manager", free: false, vip: true, highlight: true },
    { name: "Document review service", free: "Limited", vip: "Unlimited", highlight: true },
    { name: "Application tracking", free: "Basic", vip: "Advanced" },
    { name: "Referral rewards", free: "100 points", vip: "500 points", highlight: true },
    { name: "Lucky draw entries", free: "1x", vip: "3x" },
    { name: "Exclusive webinars", free: false, vip: true },
    { name: "Direct lawyer consultation", free: false, vip: true, highlight: true },
    { name: "Express processing", free: false, vip: true },
    { name: "Premium resources access", free: false, vip: true },
    { name: "Points validity", free: "12 months", vip: "24 months" }
  ];

  const renderFeatureValue = (value: boolean | string, isVip = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className={`w-5 h-5 ${isVip ? 'text-purple-600' : 'text-green-600'}`} />
      ) : (
        <X className="w-5 h-5 text-gray-400" />
      );
    }
    return (
      <span className={`text-sm font-medium ${isVip ? 'text-purple-700' : 'text-gray-700'}`}>
        {value}
      </span>
    );
  };

  return (
    <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Compare our Free and VIP membership benefits to find the perfect plan for your immigration journey.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-6 font-medium text-gray-500 w-1/2">Features</th>
              <th className="text-center p-6 w-1/4">
                <div className="inline-flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Free</div>
                    <div className="text-sm text-gray-500">$0/month</div>
                  </div>
                </div>
              </th>
              <th className="text-center p-6 w-1/4">
                <div className="inline-flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Crown className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-bold text-purple-900">VIP</div>
                    <div className="text-sm text-purple-600">$99/month</div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr 
                key={index} 
                className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                  feature.highlight ? 'bg-purple-50/30' : ''
                }`}
              >
                <td className="p-6">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">{feature.name}</span>
                    {feature.highlight && <Zap className="w-4 h-4 text-purple-500" />}
                  </div>
                </td>
                <td className="p-6 text-center">
                  {renderFeatureValue(feature.free, false)}
                </td>
                <td className="p-6 text-center">
                  {renderFeatureValue(feature.vip, true)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 p-8">
        <div className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto">
          {/* Free Plan CTA */}
          <div className="text-center">
            <h3 className="font-bold text-gray-900 mb-2">Start Free</h3>
            <p className="text-sm text-gray-600 mb-4">Perfect for exploring your options</p>
            <Link
              href="/consultation"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-colors inline-block"
            >
              Get Started Free
            </Link>
          </div>

          {/* VIP Plan CTA */}
          <div className="text-center">
            <h3 className="font-bold text-purple-900 mb-2">Upgrade to VIP</h3>
            <p className="text-sm text-purple-600 mb-4">For serious immigration candidates</p>
            <Link
              href="/portal?upgrade=vip"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-xl transition-all inline-block hover:shadow-lg"
            >
              Upgrade to VIP
            </Link>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500 mb-4">🎁 Limited Time: First month 50% off for new VIP members</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-700 font-medium">
              💰 Money-back guarantee
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-100 text-green-700 font-medium">
              🔒 Cancel anytime
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700 font-medium">
              📞 24/7 VIP support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
