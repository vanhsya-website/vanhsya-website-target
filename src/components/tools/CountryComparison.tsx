'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlusIcon, 
  XMarkIcon, 
  ChartBarIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  ClockIcon,
  UsersIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface CountryData {
  id: string;
  name: string;
  flag: string;
  capital: string;
  population: string;
  gdpPerCapita: number;
  costOfLiving: number;
  qualityOfLife: number;
  education: number;
  healthcare: number;
  safety: number;
  jobMarket: number;
  weatherScore: number;
  languageBarrier: number;
  processingTime: string;
  visaSuccess: number;
  averageSalary: number;
  currency: string;
  mainLanguages: string[];
  topCities: string[];
  popularVisaTypes: string[];
  keyBenefits: string[];
  challenges: string[];
}

const mockCountries: CountryData[] = [
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    capital: 'Canberra',
    population: '25.7M',
    gdpPerCapita: 55692,
    costOfLiving: 78,
    qualityOfLife: 92,
    education: 88,
    healthcare: 85,
    safety: 89,
    jobMarket: 82,
    weatherScore: 87,
    languageBarrier: 15,
    processingTime: '8-12 months',
    visaSuccess: 94,
    averageSalary: 65000,
    currency: 'AUD',
    mainLanguages: ['English'],
    topCities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'],
    popularVisaTypes: ['Skilled Independent', 'Employer Sponsored', 'Student Visa'],
    keyBenefits: ['High quality of life', 'Strong economy', 'Excellent education system', 'Multicultural society'],
    challenges: ['High cost of living in major cities', 'Distance from other countries', 'Strict immigration requirements']
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    capital: 'Ottawa',
    population: '38.2M',
    gdpPerCapita: 46327,
    costOfLiving: 72,
    qualityOfLife: 95,
    education: 91,
    healthcare: 88,
    safety: 93,
    jobMarket: 79,
    weatherScore: 65,
    languageBarrier: 25,
    processingTime: '6-18 months',
    visaSuccess: 89,
    averageSalary: 58000,
    currency: 'CAD',
    mainLanguages: ['English', 'French'],
    topCities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary'],
    popularVisaTypes: ['Express Entry', 'Provincial Nominee', 'Quebec Immigration'],
    keyBenefits: ['Universal healthcare', 'Excellent education', 'Friendly immigration policies', 'Natural beauty'],
    challenges: ['Cold winters', 'Higher taxes', 'French language requirement in Quebec']
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    capital: 'Berlin',
    population: '83.2M',
    gdpPerCapita: 46259,
    costOfLiving: 68,
    qualityOfLife: 87,
    education: 89,
    healthcare: 92,
    safety: 88,
    jobMarket: 85,
    weatherScore: 75,
    languageBarrier: 65,
    processingTime: '3-6 months',
    visaSuccess: 76,
    averageSalary: 52000,
    currency: 'EUR',
    mainLanguages: ['German'],
    topCities: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt'],
    popularVisaTypes: ['EU Blue Card', 'Work Permit', 'Student Visa'],
    keyBenefits: ['Strong economy', 'Excellent healthcare', 'Central European location', 'Rich culture'],
    challenges: ['Language barrier', 'Bureaucracy', 'Weather can be gloomy']
  },
  {
    id: 'newzealand',
    name: 'New Zealand',
    flag: '🇳🇿',
    capital: 'Wellington',
    population: '5.1M',
    gdpPerCapita: 42084,
    costOfLiving: 76,
    qualityOfLife: 94,
    education: 86,
    healthcare: 84,
    safety: 95,
    jobMarket: 77,
    weatherScore: 83,
    languageBarrier: 10,
    processingTime: '6-12 months',
    visaSuccess: 87,
    averageSalary: 55000,
    currency: 'NZD',
    mainLanguages: ['English', 'Māori'],
    topCities: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton'],
    popularVisaTypes: ['Skilled Migrant', 'Work to Residence', 'Entrepreneur'],
    keyBenefits: ['Beautiful natural environment', 'Safe and peaceful', 'Work-life balance', 'Adventure activities'],
    challenges: ['Distance from other countries', 'Limited job market', 'Higher cost of goods']
  }
];

export default function CountryComparison() {
  const [selectedCountries, setSelectedCountries] = useState<CountryData[]>([]);
  const [availableCountries, setAvailableCountries] = useState<CountryData[]>(mockCountries);
  const [showAddModal, setShowAddModal] = useState(false);

  const addCountry = (country: CountryData) => {
    if (selectedCountries.length < 4 && !selectedCountries.find(c => c.id === country.id)) {
      setSelectedCountries([...selectedCountries, country]);
      setAvailableCountries(availableCountries.filter(c => c.id !== country.id));
      setShowAddModal(false);
    }
  };

  const removeCountry = (countryId: string) => {
    const country = selectedCountries.find(c => c.id === countryId);
    if (country) {
      setSelectedCountries(selectedCountries.filter(c => c.id !== countryId));
      setAvailableCountries([...availableCountries, country].sort((a, b) => a.name.localeCompare(b.name)));
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600 bg-green-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    if (score >= 55) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const ComparisonMetric = ({ 
    label, 
    icon: Icon, 
    values, 
    unit = '', 
    isInverted = false 
  }: { 
    label: string; 
    icon: any; 
    values: (number | string)[]; 
    unit?: string; 
    isInverted?: boolean;
  }) => {
    const numericValues = values.map(v => typeof v === 'string' ? 0 : v).filter(v => v > 0);
    const maxValue = Math.max(...numericValues);
    
    return (
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="flex items-center gap-2 mb-3">
          <Icon className="w-5 h-5 text-purple-600" />
          <span className="font-medium text-gray-700">{label}</span>
        </div>
        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${selectedCountries.length}, 1fr)` }}>
          {values.map((value, index) => {
            const numValue = typeof value === 'number' ? value : 0;
            const percentage = numValue > 0 ? (numValue / maxValue) * 100 : 0;
            const scoreClass = typeof value === 'number' ? getScoreColor(isInverted ? 100 - value : value) : 'text-gray-600 bg-gray-100';
            
            return (
              <div key={index} className="text-center">
                <div className={`px-2 py-1 rounded text-sm font-medium ${scoreClass}`}>
                  {typeof value === 'string' ? value : `${value}${unit}`}
                </div>
                {typeof value === 'number' && (
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-purple-600 h-2 rounded-full"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <ChartBarIcon className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Country Comparison Tool</h2>
              </div>
              <p className="text-purple-100">
                Compare immigration destinations side by side to make informed decisions
              </p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              disabled={selectedCountries.length >= 4}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <PlusIcon className="w-5 h-5" />
              Add Country
            </button>
          </div>
        </div>

        <div className="p-8">
          {selectedCountries.length === 0 ? (
            <div className="text-center py-12">
              <ChartBarIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Start Your Comparison</h3>
              <p className="text-gray-600 mb-6">Select countries to compare their immigration opportunities and living conditions</p>
              <button
                onClick={() => setShowAddModal(true)}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Add Your First Country
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Country Headers */}
              <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${selectedCountries.length}, 1fr)` }}>
                {selectedCountries.map((country, index) => (
                  <motion.div
                    key={country.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 relative"
                  >
                    <button
                      onClick={() => removeCountry(country.id)}
                      className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                    
                    <div className="text-center">
                      <div className="text-4xl mb-2">{country.flag}</div>
                      <h3 className="font-bold text-gray-800 text-lg">{country.name}</h3>
                      <p className="text-gray-600 text-sm">{country.capital}</p>
                      <div className="mt-3 flex items-center justify-center gap-4 text-sm text-gray-600">
                        <span>{country.population}</span>
                        <span>{country.currency}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Comparison Metrics */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quality of Life Metrics</h3>
                
                <ComparisonMetric
                  label="Overall Quality of Life"
                  icon={StarIcon}
                  values={selectedCountries.map(c => c.qualityOfLife)}
                  unit="/100"
                />
                
                <ComparisonMetric
                  label="Cost of Living Index"
                  icon={CurrencyDollarIcon}
                  values={selectedCountries.map(c => c.costOfLiving)}
                  unit="/100"
                  isInverted={true}
                />
                
                <ComparisonMetric
                  label="Safety Score"
                  icon={CheckCircleIcon}
                  values={selectedCountries.map(c => c.safety)}
                  unit="/100"
                />
                
                <ComparisonMetric
                  label="Education Quality"
                  icon={AcademicCapIcon}
                  values={selectedCountries.map(c => c.education)}
                  unit="/100"
                />
                
                <ComparisonMetric
                  label="Healthcare Quality"
                  icon={UsersIcon}
                  values={selectedCountries.map(c => c.healthcare)}
                  unit="/100"
                />
              </div>

              {/* Immigration Metrics */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Immigration Metrics</h3>
                
                <ComparisonMetric
                  label="Visa Success Rate"
                  icon={CheckCircleIcon}
                  values={selectedCountries.map(c => c.visaSuccess)}
                  unit="%"
                />
                
                <ComparisonMetric
                  label="Processing Time"
                  icon={ClockIcon}
                  values={selectedCountries.map(c => c.processingTime)}
                />
                
                <ComparisonMetric
                  label="Average Salary"
                  icon={CurrencyDollarIcon}
                  values={selectedCountries.map(c => c.averageSalary)}
                  unit="k"
                />
                
                <ComparisonMetric
                  label="Language Barrier"
                  icon={AcademicCapIcon}
                  values={selectedCountries.map(c => c.languageBarrier)}
                  unit="/100"
                  isInverted={true}
                />
              </div>

              {/* Detailed Information */}
              <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${selectedCountries.length}, 1fr)` }}>
                {selectedCountries.map((country, index) => (
                  <motion.div
                    key={country.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 space-y-4"
                  >
                    <h4 className="font-bold text-gray-800">Key Benefits</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {country.keyBenefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="font-bold text-gray-800 pt-2">Top Cities</h4>
                    <div className="flex flex-wrap gap-1">
                      {country.topCities.map((city, i) => (
                        <span key={i} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                          {city}
                        </span>
                      ))}
                    </div>
                    
                    <h4 className="font-bold text-gray-800 pt-2">Popular Visa Types</h4>
                    <div className="space-y-1">
                      {country.popularVisaTypes.map((visa, i) => (
                        <div key={i} className="text-sm text-gray-600">• {visa}</div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Add Country Modal */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowAddModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Add Country</h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-3">
                {availableCountries.map((country) => (
                  <button
                    key={country.id}
                    onClick={() => addCountry(country)}
                    className="w-full p-4 text-left border border-gray-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{country.flag}</span>
                      <div>
                        <div className="font-medium text-gray-800">{country.name}</div>
                        <div className="text-sm text-gray-600">{country.capital}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
