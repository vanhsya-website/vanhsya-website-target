'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Briefcase, 
  GraduationCap, 
  Building2, 
  MapPin, 
  Heart, 
  Plane,
  ArrowRight
} from 'lucide-react';

const EnhancedAppleServices: React.FC = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('enhanced-services-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const services = [
    {
      icon: Briefcase,
      title: 'Work Visa',
      description: 'Apply for work visas to global destinations with professional guidance.',
      href: '/services/work-visa',
      gradient: 'from-blue-500 to-blue-600',
      stats: '15,000+ visas processed',
      image: '/images/service1.jpg'
    },
    {
      icon: GraduationCap,
      title: 'Study Visa',
      description: 'Unlock global education opportunities with comprehensive assistance.',
      href: '/services/study-visa',
      gradient: 'from-purple-500 to-purple-600',
      stats: '8,500+ students placed',
      image: '/images/service2.jpg'
    },
    {
      icon: Building2,
      title: 'Business Visa',
      description: 'Expand your business globally with tailored investor solutions.',
      href: '/services/business-visa',
      gradient: 'from-green-500 to-green-600',
      stats: '2,200+ businesses helped',
      image: '/images/service3.jpg'
    },
    {
      icon: MapPin,
      title: 'Tourist Visa',
      description: 'Explore the world with hassle-free tourist visa services.',
      href: '/services/tourist-visa',
      gradient: 'from-orange-500 to-orange-600',
      stats: '25,000+ trips enabled',
      image: '/images/service4.jpg'
    },
    {
      icon: Heart,
      title: 'Family Visa',
      description: 'Reunite with loved ones through family sponsorship programs.',
      href: '/services/family-visa',
      gradient: 'from-pink-500 to-pink-600',
      stats: '12,000+ families reunited',
      image: '/images/service5.jpg'
    },
    {
      icon: Plane,
      title: 'Flight Booking',
      description: 'Complete travel solutions with competitive flight booking.',
      href: '/services/flight-booking',
      gradient: 'from-indigo-500 to-indigo-600',
      stats: '50,000+ flights booked',
      image: '/images/service6.jpg'
    }
  ];

  return (
    <section id="enhanced-services-section" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            className="text-lg font-medium text-gray-600 mb-4 tracking-wide"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Our Services
          </motion.p>
          
          <motion.h2
            className="text-5xl md:text-6xl font-thin text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Migration Made
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent font-light">
              Simple
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            From work permits to family reunions, we provide comprehensive visa and migration services 
            tailored to your unique journey.
          </motion.p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group"
              >
                <Link href={service.href}>
                  <div className="service-card bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden h-full">
                    {/* Service Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      {/* Next.js Image with fallback to gradient */}
                      <div className="relative w-full h-full">
                        <Image 
                          src={service.image} 
                          alt={service.title}
                          width={500}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            // Fallback to gradient background if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        {/* Gradient Overlay with Icon */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} bg-opacity-80 flex items-center justify-center`}>
                          <IconComponent className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300 z-10" />
                          {/* Decorative Pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
                            <div className="absolute top-8 right-8 w-4 h-4 bg-white rounded-full"></div>
                            <div className="absolute bottom-6 left-8 w-6 h-6 border border-white rounded-full"></div>
                            <div className="absolute bottom-4 right-4 w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="text-sm font-medium text-gray-500 mb-6">
                        {service.stats}
                      </div>
                      
                      {/* CTA Button */}
                      <motion.button
                        className="bg-purple-600 text-white py-2 px-4 rounded-full mt-4 w-full font-medium hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </motion.button>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link href="/services">
            <motion.button
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-200 inline-flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          
          <p className="text-gray-500 mt-4 text-sm">
            Free consultation available • 24/7 support • Expert guidance
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedAppleServices;
