import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface AiToolCardProps {
  tool: {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    badge?: "NEW" | "HOT" | "PREMIUM" | "FREE" | "LIVE" | "POPULAR" | "24/7";
    icon: string;
    href: string;
    features: string[];
    pricing?: string;
  };
  icon: LucideIcon;
}

export default function AiToolCard({ tool, icon: Icon }: AiToolCardProps) {
  return (
    <Link 
      href={tool.href} 
      className="group h-full flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Header with Icon and Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
        </div>
        {tool.badge && (
          <span className="text-xs px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 font-medium">
            {tool.badge}
          </span>
        )}
      </div>
      
      {/* Title and Tagline */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{tool.name}</h3>
        <p className="text-sm text-purple-600 font-medium">{tool.tagline}</p>
      </div>
      
      {/* Description */}
      <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{tool.description}</p>
      
      {/* Features List */}
      <div className="space-y-2 mb-4">
        {tool.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Pricing */}
      {tool.pricing && (
        <div className="text-sm text-gray-500 mb-4">
          <span className="font-medium">Pricing:</span> {tool.pricing}
        </div>
      )}
      
      {/* CTA - Pushed to bottom with mt-auto */}
      <div className="mt-auto pt-2">
        <span className="text-purple-600 font-medium inline-flex items-center group-hover:text-purple-700">
          Launch Tool
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
