'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plane, Briefcase, Heart, GraduationCap, Home, Users, Globe, Star, ChevronRight } from 'lucide-react';

export default function VisaMatrix() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const [selectedVisa, setSelectedVisa] = useState<number | null>(null);
  const [centerPosition, setCenterPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCenterPosition = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCenterPosition({
          x: rect.width / 2,
          y: rect.height / 2,
        });
      }
    };

    updateCenterPosition();
    window.addEventListener('resize', updateCenterPosition);
    return () => window.removeEventListener('resize', updateCenterPosition);
  }, []);

  const visaTypes = [
    {
      id: 1,
      icon: Briefcase,
      title: "Work Visa",
      subtitle: "Employment Based",
      description: "For skilled professionals and workers",
      features: ["H-1B", "L-1", "O-1", "EB Series"],
      color: "from-blue-500 to-cyan-500",
      glow: "shadow-blue-500/50",
      position: { angle: 0, radius: 200 },
      stats: { success: "92%", time: "6-18 months" }
    },
    {
      id: 2,
      icon: GraduationCap,
      title: "Student Visa",
      subtitle: "Education Focused",
      description: "For international students and scholars",
      features: ["F-1", "J-1", "M-1", "Optional OPT"],
      color: "from-purple-500 to-pink-500",
      glow: "shadow-purple-500/50",
      position: { angle: 60, radius: 200 },
      stats: { success: "89%", time: "3-6 months" }
    },
    {
      id: 3,
      icon: Heart,
      title: "Family Visa",
      subtitle: "Relationship Based",
      description: "For family reunification and marriage",
      features: ["K-1", "CR-1", "IR-1", "Family Preference"],
      color: "from-pink-500 to-rose-500",
      glow: "shadow-pink-500/50",
      position: { angle: 120, radius: 200 },
      stats: { success: "94%", time: "8-24 months" }
    },
    {
      id: 4,
      icon: Home,
      title: "Investment Visa",
      subtitle: "Business Investment",
      description: "For entrepreneurs and investors",
      features: ["EB-5", "E-2", "L-1A", "Start-up"],
      color: "from-green-500 to-emerald-500",
      glow: "shadow-green-500/50",
      position: { angle: 180, radius: 200 },
      stats: { success: "87%", time: "12-36 months" }
    },
    {
      id: 5,
      icon: Plane,
      title: "Tourist Visa",
      subtitle: "Temporary Visit",
      description: "For tourism and short-term visits",
      features: ["B-1/B-2", "ESTA", "Transit", "Medical"],
      color: "from-orange-500 to-yellow-500",
      glow: "shadow-orange-500/50",
      position: { angle: 240, radius: 200 },
      stats: { success: "96%", time: "1-4 weeks" }
    },
    {
      id: 6,
      icon: Users,
      title: "Refugee/Asylum",
      subtitle: "Protection Based",
      description: "For those seeking protection",
      features: ["Asylum", "Refugee", "TPS", "Humanitarian"],
      color: "from-indigo-500 to-purple-500",
      glow: "shadow-indigo-500/50",
      position: { angle: 300, radius: 200 },
      stats: { success: "78%", time: "6-24 months" }
    }
  ];

  const getPosition = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: centerPosition.x + Math.cos(radian) * radius - 80, // Adjust for card width
      y: centerPosition.y + Math.sin(radian) * radius - 60, // Adjust for card height
    };
  };

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Orbital Rings */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className="absolute border border-purple-500/10 rounded-full"
            style={{
              width: `${ring * 200}px`,
              height: `${ring * 200}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              rotate: ring % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 30 + ring * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-8"
          >
            <Globe className="w-6 h-6 text-purple-400" />
            <span className="text-purple-300 font-medium">Interactive Visa Explorer</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Explore Your{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Visa Universe
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Navigate through different visa categories with our interactive 3D matrix.{" "}
            <span className="text-purple-400 font-semibold">Click any visa type</span>{" "}
            to discover detailed pathways and requirements.
          </p>
        </motion.div>

        {/* Interactive Visa Matrix */}
        <div className="relative w-full h-[800px] flex items-center justify-center">
          {/* Central AI Orb */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute z-20"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="relative">
              {/* Pulse Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-purple-400/30"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                  }}
                  style={{
                    width: `${120 + i * 40}px`,
                    height: `${120 + i * 40}px`,
                    left: `${-20 - i * 20}px`,
                    top: `${-20 - i * 20}px`,
                  }}
                />
              ))}

              {/* Main Orb */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 p-1 shadow-2xl"
              >
                <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  <Globe className="w-16 h-16 text-white relative z-10" />
                  
                  {/* Scanning Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: [-150, 150],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Visa Type Cards */}
          {visaTypes.map((visa, index) => {
            const position = getPosition(visa.position.angle, visa.position.radius);
            const isSelected = selectedVisa === visa.id;

            return (
              <motion.div
                key={visa.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: isSelected ? 1.1 : 1,
                  x: position.x,
                  y: position.y,
                } : { opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ 
                  scale: 1.15, 
                  z: 50,
                  rotateY: 10,
                }}
                onClick={() => setSelectedVisa(isSelected ? null : visa.id)}
                className="absolute cursor-pointer group"
                style={{
                  width: '160px',
                  height: '120px',
                }}
              >
                {/* Connection Line to Center */}
                <motion.div
                  className="absolute bg-gradient-to-r from-purple-400/20 via-purple-400/40 to-transparent h-0.5"
                  style={{
                    width: `${visa.position.radius}px`,
                    left: visa.position.angle > 90 && visa.position.angle < 270 ? 'auto' : '80px',
                    right: visa.position.angle > 90 && visa.position.angle < 270 ? '80px' : 'auto',
                    top: '60px',
                    transformOrigin: visa.position.angle > 90 && visa.position.angle < 270 ? 'right center' : 'left center',
                    transform: `rotate(${visa.position.angle > 90 && visa.position.angle < 270 ? visa.position.angle + 180 : visa.position.angle}deg)`,
                  }}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                />

                {/* Card */}
                <div className={`relative w-full h-full p-4 bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-xl rounded-2xl border border-white/30 hover:border-white/60 transition-all duration-500 overflow-hidden ${visa.glow} shadow-2xl`}>
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${visa.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
                    whileHover={{ scale: 1.1 }}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${visa.color} shadow-lg mb-2`}
                  >
                    <visa.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-sm font-bold text-white mb-1">
                      {visa.title}
                    </h3>
                    <p className="text-xs text-purple-300 mb-2">
                      {visa.subtitle}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex justify-between text-xs">
                      <span className="text-green-400">{visa.stats.success}</span>
                      <span className="text-blue-400">{visa.stats.time}</span>
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <motion.div
                    className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.2 }}
                  >
                    <ChevronRight className="w-4 h-4 text-purple-400" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Visa Details */}
        {selectedVisa && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            {(() => {
              const visa = visaTypes.find(v => v.id === selectedVisa);
              return visa ? (
                <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-xl rounded-3xl border border-white/30 overflow-hidden">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${visa.color} opacity-10 rounded-3xl`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${visa.color} shadow-2xl`}>
                        <visa.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{visa.title}</h3>
                        <p className="text-lg text-purple-300">{visa.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {visa.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Features */}
                      <div>
                        <h4 className="text-white font-bold mb-4">Available Options:</h4>
                        <div className="space-y-2">
                          {visa.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                            >
                              <Star className="w-4 h-4 text-purple-400" />
                              <span className="text-white">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div>
                        <h4 className="text-white font-bold mb-4">Success Metrics:</h4>
                        <div className="space-y-4">
                          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-gray-300">Success Rate</span>
                              <span className="text-green-400 font-bold">{visa.stats.success}</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: visa.stats.success }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full"
                              />
                            </div>
                          </div>
                          
                          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">Processing Time</span>
                              <span className="text-blue-400 font-bold">{visa.stats.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedVisa(null)}
                      className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 flex items-center gap-2 mx-auto"
                    >
                      <Globe className="w-5 h-5" />
                      Explore Other Options
                    </motion.button>
                  </div>
                </div>
              ) : null;
            })()}
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 69, 197, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-2xl transition-all duration-300 flex items-center gap-3 text-lg shadow-2xl mx-auto"
          >
            <Globe className="w-6 h-6 group-hover:animate-spin" />
            <span>Get Personalized Assessment</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
