'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Star, Download, Share2, Clock, CheckCircle, Sparkles, Trophy, Zap, Heart } from 'lucide-react';

interface Voucher {
  id: string;
  code: string;
  type: 'discount' | 'service_credit' | 'premium_upgrade' | 'consultation_free';
  title: string;
  description: string;
  value: string;
  validUntil: Date;
  isRedeemed: boolean;
  category: string;
}

const LotteryVoucherPage: React.FC = () => {
  const [userVouchers, setUserVouchers] = useState<Voucher[]>([]);
  const [selectedVoucher, setSelectedVoucher] = useState<Voucher | null>(null);
  const [showRedeemModal, setShowRedeemModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user vouchers
    setTimeout(() => {
      const mockVouchers: Voucher[] = [
        {
          id: '1',
          code: 'LUCKY2025-VISA50',
          type: 'discount',
          title: '50% Off Visa Processing',
          description: 'Get 50% discount on any visa application processing fee. Valid for all countries.',
          value: '$250 OFF',
          validUntil: new Date('2025-12-31'),
          isRedeemed: false,
          category: 'visa'
        },
        {
          id: '2',
          code: 'WINNER-CONSULT2025',
          type: 'consultation_free',
          title: 'Free Premium Consultation',
          description: 'One-on-one consultation with our senior immigration expert. 90 minutes session.',
          value: '$150 VALUE',
          validUntil: new Date('2025-10-31'),
          isRedeemed: false,
          category: 'consultation'
        },
        {
          id: '3',
          code: 'PREMIUM-UP2025',
          type: 'premium_upgrade',
          title: 'Premium Service Upgrade',
          description: 'Upgrade any standard service to premium with priority processing and dedicated support.',
          value: '$200 UPGRADE',
          validUntil: new Date('2025-09-30'),
          isRedeemed: true,
          category: 'upgrade'
        },
        {
          id: '4',
          code: 'CREDIT-BOOST500',
          type: 'service_credit',
          title: 'Service Credit Bonus',
          description: 'Credit towards any future VANHSYA service. Can be combined with other offers.',
          value: '$500 CREDIT',
          validUntil: new Date('2025-11-30'),
          isRedeemed: false,
          category: 'credit'
        }
      ];
      setUserVouchers(mockVouchers);
      setIsLoading(false);
    }, 1500);
  }, []);

  const getVoucherIcon = (type: string) => {
    switch (type) {
      case 'discount': return <Zap className="w-8 h-8" />;
      case 'service_credit': return <Star className="w-8 h-8" />;
      case 'premium_upgrade': return <Trophy className="w-8 h-8" />;
      case 'consultation_free': return <Heart className="w-8 h-8" />;
      default: return <Gift className="w-8 h-8" />;
    }
  };

  const getVoucherColor = (type: string) => {
    switch (type) {
      case 'discount': return 'from-yellow-400 to-orange-500';
      case 'service_credit': return 'from-blue-400 to-purple-500';
      case 'premium_upgrade': return 'from-purple-400 to-pink-500';
      case 'consultation_free': return 'from-green-400 to-teal-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleRedeem = (voucher: Voucher) => {
    setSelectedVoucher(voucher);
    setShowRedeemModal(true);
  };

  const confirmRedeem = () => {
    if (selectedVoucher) {
      setUserVouchers(prev => 
        prev.map(v => 
          v.id === selectedVoucher.id 
            ? { ...v, isRedeemed: true }
            : v
        )
      );
      setShowRedeemModal(false);
      setSelectedVoucher(null);
    }
  };

  const copyVoucherCode = (code: string) => {
    navigator.clipboard.writeText(code);
    // You could add a toast notification here
  };

  const shareVoucher = (voucher: Voucher) => {
    if (navigator.share) {
      navigator.share({
        title: voucher.title,
        text: `Check out this amazing voucher from VANHSYA: ${voucher.description}`,
        url: window.location.href
      });
    } else {
      copyVoucherCode(window.location.href);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 flex items-center justify-center">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center relative z-10"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
            Loading Your Vouchers
          </h2>
          <p className="text-blue-100 text-lg">Retrieving your lucky vouchers...</p>
          <div className="flex justify-center space-x-2 mt-4">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse delay-100" />
            <Sparkles className="w-5 h-5 text-pink-400 animate-pulse delay-200" />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 py-8">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
          >
            <Gift className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            🎫 Your Lucky Vouchers
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Congratulations! Here are your exclusive vouchers won through our lottery system.
            Use them to save on our premium immigration services.
          </p>
          <div className="flex items-center justify-center space-x-2 mt-6">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-300 font-semibold text-lg">
              {userVouchers.filter(v => !v.isRedeemed).length} Active Vouchers
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </div>
        </motion.div>

        {/* Vouchers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {userVouchers.map((voucher, index) => (
            <motion.div
              key={voucher.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-lg border border-white/20 ${
                voucher.isRedeemed ? 'opacity-60' : 'hover:scale-105 transition-transform duration-300'
              }`}
            >
              <div className={`bg-gradient-to-br ${getVoucherColor(voucher.type)} p-6 text-white relative`}>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        {getVoucherIcon(voucher.type)}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{voucher.title}</h3>
                        <p className="text-sm opacity-90 bg-white/20 px-2 py-1 rounded-full">
                          {voucher.category.toUpperCase()}
                        </p>
                      </div>
                    </div>
                    {voucher.isRedeemed && (
                      <div className="p-1 bg-green-500/20 rounded-full">
                        <CheckCircle className="w-6 h-6 text-green-300" />
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4 border border-white/10">
                    <p className="text-sm mb-3 leading-relaxed">{voucher.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold bg-white/20 px-3 py-1 rounded-lg">
                        {voucher.value}
                      </span>
                      <div className="flex items-center text-sm bg-white/20 px-2 py-1 rounded-lg">
                        <Clock className="w-4 h-4 mr-1" />
                        {formatDate(voucher.validUntil)}
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 mb-4 border border-white/10">
                    <p className="text-xs opacity-75 mb-2 uppercase tracking-wider">Voucher Code</p>
                    <div className="flex items-center justify-between">
                      <code className="font-mono text-sm bg-white/20 px-2 py-1 rounded">{voucher.code}</code>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => copyVoucherCode(voucher.code)}
                        className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                        title="Copy Code"
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                  </div>
                </div>

                <div className="flex space-x-3">
                  {!voucher.isRedeemed ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleRedeem(voucher)}
                      className="flex-1 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold py-3 px-4 rounded-xl hover:bg-white transition-all duration-300 shadow-lg"
                    >
                      🎯 Redeem Now
                    </motion.button>
                  ) : (
                    <div className="flex-1 bg-green-500/20 backdrop-blur-sm text-green-300 font-semibold py-3 px-4 rounded-xl text-center border border-green-400/30">
                      ✓ Redeemed
                    </div>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => shareVoucher(voucher)}
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/10"
                    title="Share Voucher"
                  >
                    <Share2 className="w-5 h-5" />
                  </motion.button>
                </div>
                </div>
              </div>

              {voucher.isRedeemed && (
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center rounded-2xl">
                  <div className="bg-green-500 text-white px-6 py-3 rounded-full font-bold transform rotate-12 shadow-2xl">
                    🏆 REDEEMED
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* How to Use Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/10"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-8 text-center">
            ✨ How to Use Your Vouchers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Choose Service</h3>
              <p className="text-gray-600 text-sm">Select the immigration service you want to apply for</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Apply Voucher</h3>
              <p className="text-gray-600 text-sm">Enter your voucher code during checkout process</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Enjoy Savings</h3>
              <p className="text-gray-600 text-sm">Get instant discounts or premium upgrades</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Browse Our Services
          </motion.button>
        </motion.div>
      </div>

      {/* Redeem Modal */}
      <AnimatePresence>
        {showRedeemModal && selectedVoucher && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${getVoucherColor(selectedVoucher.type)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {getVoucherIcon(selectedVoucher.type)}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Redeem Voucher</h3>
                <p className="text-gray-600">{selectedVoucher.title}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 mb-2">You are about to redeem:</p>
                <p className="font-semibold text-lg">{selectedVoucher.value}</p>
                <p className="text-sm text-gray-500 mt-2">Code: {selectedVoucher.code}</p>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowRedeemModal(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={confirmRedeem}
                  className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Confirm Redeem
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LotteryVoucherPage;
