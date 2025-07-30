'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, Calculator, Clock, 
  CheckCircle, Star, Shield, Zap, Target,
  ArrowRight, PiggyBank, Wallet
} from 'lucide-react';
import BackNavigation from '@/components/BackNavigation';
import Footer from '@/components/Footer';
import { useCurrency } from '@/components/CurrencySelector';

interface EMIPlan {
  id: string;
  name: string;
  duration: number;
  monthlyAmount: number;
  totalAmount: number;
  processingFee: number;
  interest: number;
  popular?: boolean;
  benefits: string[];
}

interface Service {
  id: string;
  name: string;
  country: string;
  originalPrice: number;
  discountedPrice: number;
  emiPlans: EMIPlan[];
  description: string;
  successRate: string;
}

const services: Service[] = [
  {
    id: 'canada-express',
    name: 'Canada Express Entry',
    country: 'Canada',
    originalPrice: 0, // Hidden pricing
    discountedPrice: 0, // Hidden pricing
    description: 'Complete Express Entry service with document preparation and application',
    successRate: '87%',
    emiPlans: [
      {
        id: 'emi-3',
        name: '3 Month Plan',
        duration: 3,
        monthlyAmount: 0, // Hidden pricing
        totalAmount: 0, // Hidden pricing
        processingFee: 0, // Hidden pricing
        interest: 0,
        benefits: ['Free consultation required', 'Flexible payment terms', 'Guaranteed success rate']
      },
      {
        id: 'emi-6',
        name: '6 Month Plan',
        duration: 6,
        monthlyAmount: 0, // Hidden pricing
        totalAmount: 0, // Hidden pricing
        processingFee: 0, // Hidden pricing
        interest: 0,
        popular: true,
        benefits: ['Most popular choice', 'Contact for pricing', 'Premium support included']
      },
      {
        id: 'emi-12',
        name: '12 Month Plan',
        duration: 12,
        monthlyAmount: 0, // Hidden pricing
        totalAmount: 0, // Hidden pricing
        processingFee: 0, // Hidden pricing
        interest: 0,
        benefits: ['Extended payment term', 'Contact for details', 'Full service guarantee']
      }
    ]
  },
  {
    id: 'australia-skilled',
    name: 'Australia Skilled Migration',
    country: 'Australia',
    originalPrice: 0, // Hidden pricing
    discountedPrice: 0, // Hidden pricing
    description: 'Complete skilled visa service with skills assessment and application',
    successRate: '91%',
    emiPlans: [
      {
        id: 'emi-3-aus',
        name: '3 Month Plan',
        duration: 3,
        monthlyAmount: 0, // Hidden pricing
        totalAmount: 0, // Hidden pricing
        processingFee: 0, // Hidden pricing
        interest: 0,
        benefits: ['Free consultation required', 'Quick processing', 'Document review included']
      },
      {
        id: 'emi-6-aus',
        name: '6 Month Plan',
        duration: 6,
        monthlyAmount: 0, // Hidden pricing
        totalAmount: 0, // Hidden pricing
        processingFee: 0, // Hidden pricing
        interest: 0,
        popular: true,
        benefits: ['Contact for pricing', 'Flexible payment dates', 'Success guarantee']
      }
    ]
  }
];

export default function EMIPaymentPage() {
  const { formatPrice } = useCurrency();
  const [selectedService, setSelectedService] = useState<Service>(services[0]);
  const [selectedEMI, setSelectedEMI] = useState<EMIPlan>(services[0].emiPlans[1]);
  const [customAmount, setCustomAmount] = useState(2000);

  const calculateEMI = (principal: number, months: number, rate: number) => {
    const monthlyRate = rate / 100 / 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                 (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <BackNavigation 
        currentPage="EMI & Payment Options"
        customBackUrl="/services"
        customBackLabel="Services"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6">
              <CreditCard className="w-6 h-6 text-blue-400" />
              <span className="text-blue-300 font-medium">Flexible Payment Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Dream Migration,
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Affordable EMIs</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Don't let budget constraints stop your migration dreams. Choose from flexible EMI plans starting as low as {formatPrice(179)}/month with instant approval and no credit checks required.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white">No Credit Check</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-white">Instant Approval</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-white">Secure & Safe</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Migration Service</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedService.id === service.id 
                    ? 'ring-2 ring-blue-400 bg-white/15' 
                    : 'bg-white/10 hover:bg-white/15'
                } backdrop-blur-sm rounded-2xl p-6`}
                onClick={() => {
                  setSelectedService(service);
                  setSelectedEMI(service.emiPlans[1]);
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-2">{service.description}</p>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 font-medium">{service.successRate} Success Rate</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg text-gray-400">Contact for</div>
                    <div className="text-2xl font-bold text-green-400">Best Pricing</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-600">
                  <span className="text-sm text-gray-400">Flexible Plans Available</span>
                  <span className="text-lg font-bold text-blue-400">
                    Contact for Details
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Plans */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            EMI Plans for {selectedService.name}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {selectedService.emiPlans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`relative cursor-pointer transition-all duration-300 ${
                  selectedEMI.id === plan.id
                    ? 'ring-2 ring-purple-400 bg-white/15'
                    : 'bg-white/10 hover:bg-white/15'
                } backdrop-blur-sm rounded-2xl p-6`}
                onClick={() => setSelectedEMI(plan)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-purple-400 mb-1">
                    Contact Required
                  </div>
                  <div className="text-sm text-gray-400">for {plan.duration} months payment plan</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="text-center p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                    <span className="text-blue-300 font-medium">Free Consultation Required</span>
                  </div>
                  <div className="text-center p-3 bg-green-500/20 rounded-xl border border-green-500/30">
                    <span className="text-green-300 font-medium">Guaranteed Success Rate: {selectedService.successRate}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {plan.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-3 rounded-xl font-medium transition-all ${
                  selectedEMI.id === plan.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  {selectedEMI.id === plan.id ? 'Get Free Consultation' : 'Learn More'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">EMI Calculator</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Service Amount</label>
                  <input
                    type="range"
                    min="1000"
                    max="5000"
                    step="100"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>{formatPrice(1000)}</span>
                    <span className="text-xl font-bold text-white">{formatPrice(customAmount)}</span>
                    <span>{formatPrice(5000)}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {[3, 6, 12].map((months) => (
                    <div key={months} className="bg-black/30 rounded-xl p-4 text-center">
                      <div className="text-sm text-gray-400 mb-1">{months} Months</div>
                      <div className="text-lg font-bold text-white">
                        {formatPrice(calculateEMI(customAmount, months, 5))}
                      </div>
                      <div className="text-xs text-gray-400">per month</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-4">Why Choose EMI?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <PiggyBank className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Preserve your savings for other expenses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Start your process immediately</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Better cash flow management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wallet className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Use wallet credits and referral earnings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Security */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Secure & Trusted Payments</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Bank-Grade Security</h3>
              <p className="text-gray-300 text-sm">Your payment data is encrypted and protected with the highest security standards.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <CheckCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">No Hidden Charges</h3>
              <p className="text-gray-300 text-sm">Transparent pricing with all fees clearly mentioned upfront. No surprises.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Instant Approval</h3>
              <p className="text-gray-300 text-sm">Get approved for EMI instantly without credit checks or lengthy documentation.</p>
            </div>
          </div>
          
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all flex items-center gap-3 mx-auto">
            Start Your Application with EMI
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
