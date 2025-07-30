'use client';

import { motion } from 'framer-motion';
import { Clock, DollarSign, CheckCircle, AlertTriangle, Shield, Users, ArrowRight } from 'lucide-react';
import { MigrationCountryData } from '@/lib/data/migrationCountries';

interface CountryTeaserCardProps {
  country: MigrationCountryData;
  nationality: string;
  userGoal: string;
  onRequestConsultation: (country: MigrationCountryData, nationality: string, goal: string) => void;
  index: number;
}

export default function CountryTeaserCard({ 
  country, 
  nationality, 
  userGoal, 
  onRequestConsultation,
  index 
}: CountryTeaserCardProps) {
  const nationalityData = country.nationalityData[nationality];
  
  const getEmbassyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'Medium': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'Hard': return <Shield className="w-4 h-4 text-red-400" />;
      case 'No Interview': return <CheckCircle className="w-4 h-4 text-green-400" />;
      default: return <Users className="w-4 h-4 text-gray-400" />;
    }
  };

  const getEmbassyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'Hard': return 'text-red-400 bg-red-400/20';
      case 'No Interview': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full flex flex-col group hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      {/* Country Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{country.flag}</span>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
              {country.name}
            </h3>
            <p className="text-sm text-purple-300">{country.tagline}</p>
          </div>
        </div>
        
        {/* Service Status Badge */}
        {country.servicesAvailable ? (
          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
            Available Now
          </span>
        ) : (
          <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-medium">
            Coming Soon
          </span>
        )}
      </div>

      {/* Nationality-Specific Success Rate */}
      {nationalityData && (
        <div className="mb-4">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 px-4 py-2 rounded-lg text-sm font-medium inline-block">
            🎯 {nationalityData.successRate}
          </div>
        </div>
      )}

      {/* Quick Stats */}
      {nationalityData && (
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-gray-300">Processing</span>
            </div>
            <div className="text-sm font-semibold text-white">{nationalityData.processingTime}</div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span className="text-xs text-gray-300">Investment</span>
            </div>
            <div className="text-sm font-semibold text-white">{nationalityData.minInvestment}</div>
          </div>
        </div>
      )}

      {/* Embassy Difficulty */}
      {nationalityData && (
        <div className="mb-4">
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${getEmbassyColor(nationalityData.embassyDifficulty)}`}>
            {getEmbassyIcon(nationalityData.embassyDifficulty)}
            <span className="text-sm font-medium">
              Embassy: {nationalityData.embassyDifficulty}
            </span>
          </div>
        </div>
      )}

      {/* Available Programs */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-300 mb-2">Available Programs:</h4>
        <div className="flex flex-wrap gap-2">
          {country.availablePrograms.slice(0, 3).map((program) => (
            <span
              key={program}
              className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-medium"
            >
              {program}
            </span>
          ))}
          {country.availablePrograms.length > 3 && (
            <span className="text-xs text-gray-400">
              +{country.availablePrograms.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Marketing Highlights */}
      <div className="mb-6 flex-grow">
        <h4 className="text-sm font-medium text-gray-300 mb-2">Why Choose {country.name}?</h4>
        <ul className="space-y-1">
          {country.marketingHighlights.slice(0, 3).map((highlight, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-gray-200">
              <span className="text-green-400 text-xs">✓</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mt-auto">
        {country.servicesAvailable ? (
          <button
            onClick={() => onRequestConsultation(country, nationality, userGoal)}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 group-hover:shadow-lg flex items-center justify-center gap-2"
          >
            Request Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        ) : (
          <button
            onClick={() => onRequestConsultation(country, nationality, userGoal)}
            className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300"
          >
            Join Waitlist
          </button>
        )}
      </div>
    </motion.div>
  );
}
