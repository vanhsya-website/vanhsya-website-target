'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Gift, Trophy, Star, Sparkles, Crown, Zap, Target, Check, ArrowRight,
  Coins, Award, DollarSign, Plane, Home, Car, Gem, Brain, Bot, Network,
  Calendar, Users, Clock, Shield, Heart, Mail, Phone, ChevronDown,
  RefreshCw, Play, Pause, X, ExternalLink, Download, Share2,
} from 'lucide-react';

// Lucky draw prizes with AI enhancement
const prizes = [
  {
    id: 'grand-prize',
    title: 'Free Immigration Consultation',
    value: '$500',
    description: 'Complete AI-powered immigration assessment with expert consultation',
    icon: Crown,
    color: 'from-yellow-400 to-yellow-600',
    rarity: 'legendary',
    probability: '5%',
    image: '🏆',
    features: [
      'One-on-one expert consultation',
      'AI eligibility assessment',
      'Personalized roadmap',
      'Document checklist',
      'Priority support',
    ],
  },
  {
    id: 'premium-service',
    title: 'Premium Document Prep',
    value: '$300',
    description: 'Professional document preparation and review service',
    icon: Award,
    color: 'from-purple-400 to-purple-600',
    rarity: 'epic',
    probability: '10%',
    image: '📋',
    features: [
      'Professional document review',
      'Error detection & correction',
      'Format optimization',
      'Compliance verification',
      'Express processing',
    ],
  },
  {
    id: 'visa-credit',
    title: 'Visa Application Credit',
    value: '$200',
    description: 'Credit toward any visa application processing fee',
    icon: DollarSign,
    color: 'from-emerald-400 to-emerald-600',
    rarity: 'rare',
    probability: '15%',
    image: '💳',
    features: [
      'Apply to any visa type',
      'No expiration date',
      'Transferable credit',
      'Stackable with offers',
      'Instant redemption',
    ],
  },
  {
    id: 'language-course',
    title: 'IELTS Prep Course',
    value: '$150',
    description: 'Complete IELTS preparation course with AI tutor',
    icon: Brain,
    color: 'from-blue-400 to-blue-600',
    rarity: 'rare',
    probability: '20%',
    image: '📚',
    features: [
      'AI-powered learning',
      '40-hour course content',
      'Practice tests included',
      'Score prediction',
      'Certificate of completion',
    ],
  },
  {
    id: 'fast-track',
    title: 'Fast-Track Processing',
    value: '$100',
    description: 'Priority processing for any immigration service',
    icon: Zap,
    color: 'from-orange-400 to-orange-600',
    rarity: 'uncommon',
    probability: '25%',
    image: '⚡',
    features: [
      'Priority queue access',
      '50% faster processing',
      'Dedicated case manager',
      'Real-time updates',
      'Phone support included',
    ],
  },
  {
    id: 'consultation-call',
    title: '30-Min Expert Call',
    value: '$75',
    description: 'Direct consultation call with immigration expert',
    icon: Phone,
    color: 'from-cyan-400 to-cyan-600',
    rarity: 'common',
    probability: '25%',
    image: '📞',
    features: [
      'Expert immigration advice',
      'Q&A session',
      'Personalized tips',
      'Follow-up email summary',
      'Resource recommendations',
    ],
  },
];

// Lucky draw statistics
const drawStats = {
  participants: '0',
  totalPrizes: '1,500+',
  valueAwarded: '$75,000+',
  weeklyDraws: '3',
  winRate: '68%',
  satisfaction: '96.8%',
};

// Winner testimonials
const winners = [
  {
    name: 'Sarah Chen',
    country: '🇨🇦 Canada',
    prize: 'Free Immigration Consultation',
    testimonial: 'Won the grand prize consultation and got my Express Entry strategy! Now I have my PR!',
    avatar: '👩‍💼',
    date: '2 days ago',
  },
  {
    name: 'Miguel Rodriguez',
    country: '🇪🇸 Spain',
    prize: 'Premium Document Prep',
    testimonial: 'The document review service was incredible. They caught issues I never would have noticed.',
    avatar: '👨‍💻',
    date: '5 days ago',
  },
  {
    name: 'Priya Sharma',
    country: '🇮🇳 India',
    prize: 'Visa Application Credit',
    testimonial: 'Used my credit for Australia skilled migration. The AI matching was spot-on!',
    avatar: '👩‍🎓',
    date: '1 week ago',
  },
];

export default function LuckyDrawPage() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState<typeof prizes[0] | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [hasParticipated, setHasParticipated] = useState(false);
  const [timeLeft, setTimeLeft] = useState(72 * 60 * 60); // 72 hours in seconds

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const winnersRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const wheelInView = useInView(wheelRef, { once: true, amount: 0.2 });
  const winnersInView = useInView(winnersRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { hours, minutes, seconds: secs };
  };

  const handleSpin = () => {
    if (hasParticipated || !userEmail) return;
    
    setIsSpinning(true);
    
    // Simulate spinning for 3 seconds
    setTimeout(() => {
      const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
      setSelectedPrize(randomPrize);
      setIsSpinning(false);
      setShowResult(true);
      setHasParticipated(true);
    }, 3000);
  };

  const time = formatTime(timeLeft);

  return (
    <div ref={containerRef} className='min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white overflow-hidden'>
      {/* AI Neural Network Background */}
      <motion.div style={{ y: backgroundY }} className='fixed inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-purple-900/30' />
        <div className='absolute inset-0'>
          {Array.from({ length: 150 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-yellow-400/40 to-purple-400/40 rounded-full'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 2, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        {/* Lucky symbols floating */}
        <div className='absolute inset-0'>
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={`symbol-${i}`}
              className='absolute text-6xl opacity-10'
              style={{
                left: `${5 + (i * 4.5)}%`,
                top: `${10 + (i * 3.5)}%`,
              }}
              animate={{
                y: [-30, 30, -30],
                rotate: [0, 360],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              {i % 5 === 0 ? '🎰' : i % 5 === 1 ? '🎁' : i % 5 === 2 ? '⭐' : i % 5 === 3 ? '💎' : '🍀'}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-yellow-500/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-gradient-to-r from-yellow-500 to-purple-500 rounded-lg flex items-center justify-center'>
                <Gift className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent'>
                VANHSYA
              </span>
            </Link>
            
            <div className='hidden md:flex items-center gap-6'>
              <Link href='/' className='text-white/80 hover:text-white transition-colors'>Home</Link>
              <Link href='/services' className='text-white/80 hover:text-white transition-colors'>Services</Link>
              <Link href='/programs' className='text-white/80 hover:text-white transition-colors'>Programs</Link>
              <Link href='/contact' className='text-white/80 hover:text-white transition-colors'>Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className='relative z-10'>
        {/* Hero Section */}
        <section ref={heroRef} className='min-h-screen flex items-center justify-center relative pt-16'>
          <motion.div style={{ y: heroY }} className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center max-w-6xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, type: 'spring' }}
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-purple-500/20 border border-yellow-500/30 backdrop-blur-xl mb-8'
              >
                <Sparkles className='w-6 h-6 text-yellow-400' />
                <span className='text-yellow-300 font-medium'>Lucky Immigration Draw</span>
                <span className='text-4xl'>🎰</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-yellow-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Win
                </span>
                <br />
                <span className='text-white'>Big Prizes</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Spin the AI-powered lucky wheel and win amazing immigration prizes! 
                Free consultations, document prep, visa credits and much more await.
              </motion.p>

              {/* Countdown Timer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='bg-gradient-to-r from-yellow-500/20 to-purple-500/20 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-6 mb-12 max-w-2xl mx-auto'
              >
                <h3 className='text-2xl font-bold text-yellow-400 mb-4'>Next Draw Ends In:</h3>
                <div className='flex justify-center gap-4'>
                  <div className='text-center'>
                    <div className='text-4xl font-bold text-white'>{time.hours.toString().padStart(2, '0')}</div>
                    <div className='text-yellow-400 text-sm'>Hours</div>
                  </div>
                  <div className='text-4xl text-yellow-400'>:</div>
                  <div className='text-center'>
                    <div className='text-4xl font-bold text-white'>{time.minutes.toString().padStart(2, '0')}</div>
                    <div className='text-yellow-400 text-sm'>Minutes</div>
                  </div>
                  <div className='text-4xl text-yellow-400'>:</div>
                  <div className='text-center'>
                    <div className='text-4xl font-bold text-white'>{time.seconds.toString().padStart(2, '0')}</div>
                    <div className='text-yellow-400 text-sm'>Seconds</div>
                  </div>
                </div>
              </motion.div>

              {/* Draw Stats */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className='grid grid-cols-2 md:grid-cols-3 gap-8 mb-12'
              >
                {Object.entries(drawStats).map(([key, value], index) => (
                  <div key={key} className='text-center'>
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                      index % 3 === 0 ? 'text-yellow-400' : 
                      index % 3 === 1 ? 'text-purple-400' : 'text-cyan-400'
                    }`}>
                      {value}
                    </div>
                    <div className='text-white/60 text-sm capitalize'>{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(234, 179, 8, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className='px-12 py-5 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-full text-black font-bold text-xl shadow-2xl border border-yellow-400/50'
              >
                <span className='flex items-center gap-3'>
                  <Gift className='w-7 h-7' />
                  Spin the Lucky Wheel
                  <ArrowRight className='w-7 h-7' />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Lucky Wheel Section */}
        <section ref={wheelRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={wheelInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Test Your </span>
                <span className='bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent'>
                  Luck
                </span>
              </h2>
            </motion.div>

            <div className='grid lg:grid-cols-2 gap-16 items-center'>
              {/* Lucky Wheel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={wheelInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-center'
              >
                <div className='relative w-80 h-80 mx-auto mb-8'>
                  {/* Wheel Background */}
                  <motion.div
                    animate={isSpinning ? { rotate: 1800 } : { rotate: 0 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className='w-full h-full rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-500 p-4 shadow-2xl'
                  >
                    <div className='w-full h-full rounded-full bg-gradient-to-br from-black/90 to-neutral-900/90 flex items-center justify-center'>
                      <div className='text-8xl animate-pulse'>
                        {isSpinning ? '🎰' : '🎁'}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Wheel Pointer */}
                  <div className='absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-2'>
                    <div className='w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-lg'></div>
                  </div>
                </div>

                {/* Entry Form */}
                <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-md mx-auto'>
                  <h3 className='text-2xl font-bold text-white mb-6'>Enter to Win</h3>
                  
                  <div className='space-y-4 mb-6'>
                    <input
                      type='email'
                      placeholder='Enter your email address'
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow-500'
                      disabled={hasParticipated}
                    />
                  </div>

                  <motion.button
                    onClick={handleSpin}
                    disabled={!userEmail || hasParticipated || isSpinning}
                    whileHover={!hasParticipated && userEmail ? { scale: 1.05 } : {}}
                    whileTap={!hasParticipated && userEmail ? { scale: 0.95 } : {}}
                    className={`w-full px-6 py-4 rounded-xl font-bold text-lg transition-all ${
                      hasParticipated
                        ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                        : !userEmail
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : isSpinning
                        ? 'bg-orange-500 text-white'
                        : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:shadow-xl'
                    }`}
                  >
                    {hasParticipated ? 'Already Participated' : 
                     isSpinning ? 'Spinning...' : 
                     !userEmail ? 'Enter Email First' : 'Spin the Wheel!'}
                  </motion.button>

                  <p className='text-white/60 text-sm mt-4'>
                    One entry per email address. Draw results announced every Monday!
                  </p>
                </div>
              </motion.div>

              {/* Prizes Grid */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={wheelInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='space-y-4'
              >
                <h3 className='text-3xl font-bold text-white mb-8'>Available Prizes</h3>
                
                {prizes.map((prize, index) => (
                  <motion.div
                    key={prize.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={wheelInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className='bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:border-yellow-500/30 transition-all'
                  >
                    <div className='flex items-center gap-4'>
                      <div className={`w-12 h-12 bg-gradient-to-r ${prize.color} rounded-xl flex items-center justify-center text-2xl`}>
                        {prize.image}
                      </div>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-1'>
                          <h4 className='font-bold text-white'>{prize.title}</h4>
                          <span className='px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs'>
                            {prize.value}
                          </span>
                        </div>
                        <p className='text-white/70 text-sm'>{prize.description}</p>
                        <div className='flex items-center gap-2 mt-2'>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            prize.rarity === 'legendary' ? 'bg-yellow-500/20 text-yellow-400' :
                            prize.rarity === 'epic' ? 'bg-purple-500/20 text-purple-400' :
                            prize.rarity === 'rare' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {prize.rarity}
                          </span>
                          <span className='text-white/60 text-xs'>{prize.probability} chance</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recent Winners */}
        <section ref={winnersRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={winnersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Recent </span>
                <span className='bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent'>
                  Winners
                </span>
              </h2>
              <p className='text-xl text-white/70 max-w-3xl mx-auto'>
                See what our lucky participants have won and how it helped their immigration journey
              </p>
            </motion.div>

            <div className='grid md:grid-cols-3 gap-8'>
              {winners.map((winner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={winnersInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-yellow-500/30 transition-all'
                >
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl'>
                      {winner.avatar}
                    </div>
                    <div>
                      <h4 className='font-bold text-white'>{winner.name}</h4>
                      <p className='text-yellow-400 text-sm'>{winner.country}</p>
                    </div>
                  </div>
                  
                  <div className='mb-4'>
                    <span className='px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium'>
                      Won: {winner.prize}
                    </span>
                  </div>
                  
                  <p className='text-white/70 mb-4 italic'>"{winner.testimonial}"</p>
                  
                  <div className='flex items-center gap-2 text-white/50 text-sm'>
                    <Clock className='w-4 h-4' />
                    {winner.date}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16'>
                <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                  <span className='text-white'>Ready to </span>
                  <span className='bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent'>
                    Test Your Luck
                  </span>
                  <span className='text-white'>?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Join thousands of participants who have won amazing immigration prizes. 
                  Your dream visa could be just one spin away!
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(234, 179, 8, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-full text-black font-bold text-xl shadow-2xl'
                  >
                    <span className='flex items-center gap-3'>
                      <Gift className='w-6 h-6' />
                      Spin Now
                      <ArrowRight className='w-6 h-6' />
                    </span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-xl hover:bg-white/20 transition-all'
                  >
                    <span className='flex items-center gap-3'>
                      <Trophy className='w-6 h-6' />
                      View All Prizes
                    </span>
                  </motion.button>
                </div>

                <div className='flex flex-wrap justify-center gap-8 text-white/60'>
                  <div className='flex items-center gap-2'>
                    <Users className='w-5 h-5' />
                    <span>0 Participants</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Sparkles className='w-5 h-5' />
                    <span>Weekly Draws</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Check className='w-5 h-5' />
                    <span>68% Win Rate</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Prize Result Modal */}
      <AnimatePresence>
        {showResult && selectedPrize && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className='bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-md w-full text-center'
            >
              <button
                onClick={() => setShowResult(false)}
                className='absolute top-4 right-4 text-white/60 hover:text-white'
                aria-label='Close prize result modal'
              >
                <X className='w-6 h-6' />
              </button>
              
              <div className='text-6xl mb-4'>{selectedPrize.image}</div>
              <h3 className='text-3xl font-bold text-white mb-2'>Congratulations!</h3>
              <p className='text-xl text-yellow-400 mb-4'>You won: {selectedPrize.title}</p>
              <p className='text-white/70 mb-6'>{selectedPrize.description}</p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-black font-bold'
              >
                Claim Prize
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
