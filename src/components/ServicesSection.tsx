'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaHeart, FaPlane, FaHome, FaArrowRight, FaStar, FaCheckCircle, FaClock, FaDollarSign, FaPassport, FaCrown, FaGift, FaLock } from 'react-icons/fa';
import { MdBusiness, MdWork } from 'react-icons/md';
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ComponentType<{className?: string}>;
  title: string;
  description: string;
  features: string[];
  processingTime: string;
  priceRange: {
    usd: string;
    aed: string;
    eur: string;
    cad: string;
  };
  successRate: string;
  href: string;
  isPopular?: boolean;
  isPremium?: boolean;
  isComingSoon?: boolean;
  badge?: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  processingTime,
  priceRange,
  successRate,
  href,
  isPopular = false,
  isPremium = false,
  isComingSoon = false,
  badge = '',
  color
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<'usd' | 'aed' | 'eur' | 'cad'>('usd');
  
  const currencySymbols = {
    usd: '$',
    aed: 'AED ',
    eur: '€',
    cad: 'C$'
  };

  const currencyLabels = {
    usd: 'USD',
    aed: 'AED',
    eur: 'EUR',
    cad: 'CAD'
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className={`relative bg-white rounded-2xl p-5 shadow-md border hover:shadow-xl h-full flex flex-col ${color} group transition-all duration-300 ${isPremium ? 'border-2 border-yellow-300' : 'border-gray-100'}`}
    >
      {/* Badges */}
      {isPopular && (
        <div className="absolute z-10 -top-2 -right-2">
          <span className="px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-500">
            {badge || 'Popular'}
          </span>
        </div>
      )}
      
      {isPremium && (
        <div className="absolute z-10 -top-2 -left-2">
          <span className="flex items-center px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-yellow-500 to-orange-500">
            <FaCrown className="mr-1 text-xs" />
            Premium
          </span>
        </div>
      )}

      {isComingSoon && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-60 rounded-2xl">
          <div className="text-center">
            <FaGift className="mx-auto mb-2 text-4xl text-yellow-400" />
            <span className="text-lg font-bold text-white">Coming Soon</span>
            <p className="text-sm text-gray-300">Exclusive Programs</p>
          </div>
        </div>
      )}
      
      {/* Header - Compact */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-3 ${color || 'bg-blue-50'} ${isPremium ? 'bg-gradient-to-br from-yellow-100 to-orange-100' : ''}`}>
            <Icon className={`text-2xl ${isPremium ? 'text-yellow-600' : 'text-blue-600'}`} />
          </div>
          <div>
            <h3 className={`text-lg font-bold group-hover:text-blue-600 transition-colors ${isPremium ? 'text-yellow-700' : 'text-slate-800'}`}>
              {title}
            </h3>
            <div className="flex items-center mt-1">
              <FaStar className="mr-1 text-xs text-yellow-400" />
              <span className="text-xs text-gray-600">{successRate} Success</span>
            </div>
          </div>
        </div>
        {!isComingSoon && (
          <div className="text-right">
            <div className="flex gap-1 mb-1">
              {(Object.keys(currencyLabels) as Array<keyof typeof currencyLabels>).map((currency) => (
                <button
                  key={currency}
                  onClick={() => setSelectedCurrency(currency)}
                  className={`text-xs px-2 py-1 rounded transition-colors ${
                    selectedCurrency === currency
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {currencyLabels[currency]}
                </button>
              ))}
            </div>
            <div className={`text-sm font-bold ${isPremium ? 'text-yellow-700' : 'text-blue-600'}`}>
              {currencySymbols[selectedCurrency]}{priceRange[selectedCurrency]}
            </div>
          </div>
        )}
      </div>

      {/* Description - Compact */}
      <p className="flex-grow mb-4 text-sm leading-relaxed text-gray-600">
        {description}
      </p>

      {/* Information Table - Compact */}
      <div className="p-3 mb-4 rounded-lg bg-gray-50">
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="flex items-center">
            <FaClock className="mr-2 text-blue-500" />
            <div>
              <div className="font-medium text-gray-700">Processing</div>
              <div className="text-gray-600">{processingTime}</div>
            </div>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="mr-2 text-green-500" />
            <div>
              <div className="font-medium text-gray-700">Success Rate</div>
              <div className="font-medium text-green-600">{successRate}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features - Compact */}
      <div className="mb-4">
        <h4 className="mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase">Included Services</h4>
        <div className="grid grid-cols-1 gap-1">
          {features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center text-xs text-gray-600">
              <FaCheckCircle className="mr-2 text-xs text-green-500" />
              {feature}
            </div>
          ))}
          {features.length > 3 && (
            <div className="text-xs font-medium text-blue-600">
              +{features.length - 3} more services
            </div>
          )}
        </div>
      </div>

      {/* CTA Button - Compact */}
      <div className="mt-auto">
        {isComingSoon ? (
          <button
            disabled
            className="w-full px-4 py-2 font-medium text-gray-500 transition-all duration-300 bg-gray-300 cursor-not-allowed rounded-xl"
          >
            <FaLock className="inline mr-2" />
            Exclusive Access
          </button>
        ) : (
          <Link href={href}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full font-medium py-2 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group ${
                isPremium
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              Learn More
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      icon: MdWork,
      title: "Work Visa",
      description: "Secure employment-based visas for skilled professionals looking to advance their careers abroad.",
      features: [
        "Complete application review",
        "Document preparation",
        "Interview coaching",
        "Employer liaison",
        "Post-approval support",
        "LMIA assistance",
        "Work permit extension"
      ],
      processingTime: "4-8 weeks",
      priceRange: {
        usd: "1,999-3,999",
        aed: "7,500-15,000",
        eur: "1,799-3,599",
        cad: "2,799-5,599"
      },
      successRate: "98%",
      href: "/services/work-visa",
      isPopular: true,
      badge: "Most Popular",
      color: "bg-blue-50"
    },
    {
      icon: FaGraduationCap,
      title: "Study Visa",
      description: "Educational visa assistance for students pursuing academic excellence in top global institutions.",
      features: [
        "University selection guidance",
        "Scholarship assistance",
        "Student visa processing",
        "Accommodation support",
        "Pre-departure briefing",
        "IELTS preparation",
        "Financial planning"
      ],
      processingTime: "6-12 weeks",
      priceRange: {
        usd: "1,499-2,999",
        aed: "5,500-11,000",
        eur: "1,299-2,699",
        cad: "1,999-3,999"
      },
      successRate: "99%",
      href: "/services/study-visa",
      color: "bg-purple-50"
    },
    {
      icon: MdBusiness,
      title: "Business Visa",
      description: "Business and investor visa solutions for entrepreneurs and corporate executives.",
      features: [
        "Business plan review",
        "Investment documentation",
        "Market analysis support",
        "Legal compliance check",
        "Ongoing business support",
        "Banking assistance",
        "Tax planning"
      ],
      processingTime: "2-6 weeks",
      priceRange: {
        usd: "2,999-5,999",
        aed: "11,000-22,000",
        eur: "2,699-5,399",
        cad: "3,999-7,999"
      },
      successRate: "95%",
      href: "/services/business-visa",
      color: "bg-indigo-50"
    },
    {
      icon: FaHeart,
      title: "Family Visa",
      description: "Reunite with your loved ones through comprehensive family immigration services.",
      features: [
        "Relationship documentation",
        "Sponsorship guidance",
        "Financial requirement planning",
        "Interview preparation",
        "Family integration support",
        "Medical examinations",
        "Background checks"
      ],
      processingTime: "8-16 weeks",
      priceRange: {
        usd: "1,799-3,499",
        aed: "6,500-13,000",
        eur: "1,599-3,199",
        cad: "2,399-4,699"
      },
      successRate: "96%",
      href: "/services/family-visa",
      color: "bg-pink-50"
    },
    {
      icon: FaPlane,
      title: "Tourist Visa",
      description: "Hassle-free tourist visa processing for your vacation and travel needs.",
      features: [
        "Quick processing",
        "Travel itinerary planning",
        "Document verification",
        "Embassy coordination",
        "Travel insurance guidance",
        "Hotel bookings",
        "Flight assistance"
      ],
      processingTime: "7-14 days",
      priceRange: {
        usd: "499-999",
        aed: "1,800-3,700",
        eur: "449-899",
        cad: "699-1,399"
      },
      successRate: "97%",
      href: "/services/tourist-visa",
      color: "bg-green-50"
    },
    {
      icon: FaHome,
      title: "Permanent Residency",
      description: "Comprehensive PR services for those seeking to make a new country their permanent home.",
      features: [
        "Eligibility assessment",
        "Points calculation",
        "Document compilation",
        "Application tracking",
        "Settlement services",
        "Job search assistance",
        "Integration programs"
      ],
      processingTime: "12-24 months",
      priceRange: {
        usd: "3,999-7,999",
        aed: "15,000-30,000",
        eur: "3,599-7,199",
        cad: "5,299-10,599"
      },
      successRate: "94%",
      href: "/services/permanent-residence",
      color: "bg-orange-50"
    },
    {
      icon: FaPassport,
      title: "Second Passport",
      description: "Exclusive dual citizenship programs for global mobility and investment opportunities.",
      features: [
        "Citizenship by investment",
        "Due diligence process",
        "Government liaison",
        "Document apostille",
        "Passport collection",
        "Tax optimization",
        "Global mobility planning"
      ],
      processingTime: "6-18 months",
      priceRange: {
        usd: "25,000-100,000",
        aed: "92,000-368,000",
        eur: "22,500-90,000",
        cad: "33,500-134,000"
      },
      successRate: "92%",
      href: "/services/second-passport",
      isPremium: true,
      isComingSoon: true,
      color: "bg-yellow-50"
    },
    {
      icon: FaCrown,
      title: "Citizenship by Investment",
      description: "Premium citizenship programs for high-net-worth individuals seeking global freedom.",
      features: [
        "Investment portfolio review",
        "Government pre-approval",
        "Luxury real estate options",
        "Golden visa programs",
        "Family inclusion",
        "Wealth management",
        "Concierge services"
      ],
      processingTime: "12-36 months",
      priceRange: {
        usd: "50,000-500,000",
        aed: "184,000-1,840,000",
        eur: "45,000-450,000",
        cad: "67,000-670,000"
      },
      successRate: "89%",
      href: "/services/citizenship-investment",
      isPremium: true,
      isComingSoon: true,
      color: "bg-amber-50"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Professional <span className="text-gradient-red-blue">Immigration Services</span>
          </h2>
          <p className="max-w-3xl mx-auto mb-6 text-xl text-gray-600">
            Choose from our comprehensive range of immigration services with transparent pricing in multiple currencies
          </p>
          
          {/* Currency Notice */}
          <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
            <FaDollarSign className="mr-2" />
            Prices available in USD, AED, EUR & CAD
          </div>
        </motion.div>

        {/* Services Grid - Compact Layout */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        {/* Premium Services Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 text-center border border-yellow-200 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl"
        >
          <FaCrown className="mx-auto mb-4 text-4xl text-yellow-600" />
          <h3 className="mb-3 text-2xl font-bold text-gray-900">
            Premium Services Coming Soon
          </h3>
          <p className="max-w-2xl mx-auto mb-6 text-gray-700">
            Unlock exclusive access to second passport programs and citizenship by investment opportunities. 
            Join our VIP waitlist for early access to these premium services.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 font-bold text-white transition-all duration-300 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl hover:from-yellow-600 hover:to-orange-600"
          >
            Join VIP Waitlist
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 mt-12 text-center md:grid-cols-4"
        >
          <div className="p-4 bg-white shadow-sm rounded-xl">
            <div className="text-3xl font-bold text-blue-600">98%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="p-4 bg-white shadow-sm rounded-xl">
            <div className="text-3xl font-bold text-blue-600">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="p-4 bg-white shadow-sm rounded-xl">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
          <div className="p-4 bg-white shadow-sm rounded-xl">
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
