'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, Globe, CheckCircle } from 'lucide-react';
import { MigrationCountryData, nationalities, migrationGoals } from '@/lib/data/migrationCountries';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  country: MigrationCountryData | null;
  nationality: string;
  userGoal: string;
}

export default function LeadCaptureModal({
  isOpen,
  onClose,
  country,
  nationality,
  userGoal
}: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    nationality: nationality,
    interestedCountry: country?.name || '',
    migrationGoal: userGoal,
    timeframe: '',
    experience: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Here you would send the lead to your CRM/Database
    console.log('Lead submitted:', formData);

    setIsSubmitting(false);
    setIsSuccess(true);

    // Close modal after 3 seconds
    setTimeout(() => {
      onClose();
      setIsSuccess(false);
    }, 3000);
  };

  const nationalityName = nationalities.find(n => n.code === nationality)?.name;
  const goalName = migrationGoals.find(g => g.code === userGoal)?.name;
  const isWaitlist = country && !country.servicesAvailable;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        >
          {isSuccess ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {isWaitlist ? 'You\'re on the Waitlist!' : 'Request Submitted Successfully!'}
              </h2>
              <p className="text-gray-600 mb-4">
                {isWaitlist 
                  ? `We'll notify you as soon as our ${country?.name} services are available.`
                  : 'Our migration expert will contact you within 24 hours to discuss your personalized migration plan.'
                }
              </p>
              <div className="text-sm text-gray-500">
                This window will close automatically...
              </div>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-t-2xl">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="flex items-center gap-3 mb-2">
                  {country && <span className="text-2xl">{country.flag}</span>}
                  <h2 className="text-xl font-bold">
                    {isWaitlist ? 'Join the Waitlist' : 'Get Your Free Consultation'}
                  </h2>
                </div>
                
                <p className="text-white/90 text-sm">
                  {isWaitlist 
                    ? `Be the first to know when our ${country?.name} migration services launch.`
                    : `Our expert will create a personalized ${country?.name} migration plan for you.`
                  }
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Profile Summary */}
                <div className="bg-gray-50 rounded-lg p-4 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-500">From:</span>
                      <div className="font-medium">{nationalityName || 'Not selected'}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Goal:</span>
                      <div className="font-medium">{goalName || 'Not selected'}</div>
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>

                {/* Migration Details */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    When do you plan to migrate? *
                  </label>
                  <select
                    value={formData.timeframe}
                    onChange={(e) => setFormData({...formData, timeframe: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    required
                  >
                    <option value="">Select timeframe</option>
                    <option value="3-6-months">Next 3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="1-2-years">1-2 years</option>
                    <option value="2-3-years">2-3 years</option>
                    <option value="just-exploring">Just exploring options</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Work Experience *
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    required
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1-years">0-1 years</option>
                    <option value="2-3-years">2-3 years</option>
                    <option value="4-5-years">4-5 years</option>
                    <option value="6-10-years">6-10 years</option>
                    <option value="10+-years">10+ years</option>
                    <option value="student">I'm a student</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Approximate Budget (USD)
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-20k">$10,000 - $20,000</option>
                    <option value="20k-50k">$20,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : isWaitlist
                      ? 'bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : isWaitlist ? (
                    'Join Waitlist'
                  ) : (
                    'Request Free Consultation'
                  )}
                </button>

                {/* Trust Elements */}
                <div className="text-center text-xs text-gray-500 mt-4">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      <span>24hr Response</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      <span>No Spam</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      <span>Global Experts</span>
                    </div>
                  </div>
                  <p>Your information is secure and will only be used to contact you about migration services.</p>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
