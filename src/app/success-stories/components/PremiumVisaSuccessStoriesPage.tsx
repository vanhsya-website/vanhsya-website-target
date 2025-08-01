'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Success pin data for the globe
const successPins = [
  { id: 1, country: 'UAE', lat: 24.4539, lng: 54.3773, count: 847, flag: '🇦🇪' },
  { id: 2, country: 'Canada', lat: 56.1304, lng: -106.3468, count: 1243, flag: '🇨🇦' },
  { id: 3, country: 'UK', lat: 55.3781, lng: -3.4360, count: 923, flag: '🇬🇧' },
  { id: 4, country: 'Australia', lat: -25.2744, lng: 133.7751, count: 756, flag: '🇦🇺' },
  { id: 5, country: 'Singapore', lat: 1.3521, lng: 103.8198, count: 432, flag: '🇸🇬' },
  { id: 6, country: 'USA', lat: 37.0902, lng: -95.7129, count: 1156, flag: '🇺🇸' },
]

// CSS 3D Globe Component
const Interactive3DGlobe: React.FC = () => {
  const [rotation, setRotation] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.5)
    }, 50)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-[500px] h-[500px] mx-auto perspective-1000">
      {/* Globe Container */}
      <motion.div
        className="relative w-full h-full preserve-3d"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        {/* Globe Sphere */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500/30 shadow-2xl">
          {/* Globe Grid Lines */}
          <div className="absolute inset-0 rounded-full opacity-20">
            {/* Latitude lines */}
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`lat-${i}`}
                className="absolute left-0 right-0 border-t border-blue-400/40"
                style={{ top: `${(i + 1) * 10}%` }}
              />
            ))}
            {/* Longitude lines */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`lng-${i}`}
                className="absolute top-0 bottom-0 border-l border-blue-400/40"
                style={{ 
                  left: `${(i + 1) * 8.33}%`,
                  transform: `rotateZ(${i * 15}deg)`,
                  transformOrigin: '0 50%'
                }}
              />
            ))}
          </div>
          
          {/* Success Pins */}
          {successPins.map((pin, index) => {
            const angle = (index * 60) + rotation * 0.5
            const x = 45 + Math.cos(angle * Math.PI / 180) * 35
            const y = 45 + Math.sin(angle * Math.PI / 180) * 20
            
            return (
              <motion.div
                key={pin.id}
                className="absolute group cursor-pointer"
                style={{ 
                  left: `${x}%`, 
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                whileHover={{ scale: 1.5, zIndex: 10 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2, type: "spring" }}
              >
                {/* Pin */}
                <div className="relative">
                  <motion.div
                    className="w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg"
                    animate={{ 
                      boxShadow: [
                        '0 0 10px rgba(59, 130, 246, 0.5)',
                        '0 0 20px rgba(147, 51, 234, 0.8)',
                        '0 0 10px rgba(59, 130, 246, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Pulse Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-400"
                    animate={{ 
                      scale: [1, 2, 1],
                      opacity: [0.8, 0, 0.8]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-black/90 backdrop-blur-lg rounded-lg px-3 py-2 whitespace-nowrap border border-blue-500/30">
                      <div className="text-white text-sm font-bold flex items-center">
                        <span className="mr-2">{pin.flag}</span>
                        {pin.country}
                      </div>
                      <div className="text-blue-400 text-xs">{pin.count} success stories</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* Globe Highlight */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-blue-400/10 to-transparent" />
      </motion.div>
      
      {/* Orbital Rings */}
      <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-spin-slow" style={{ animationDuration: '20s' }} />
      <div className="absolute inset-[-20px] rounded-full border border-blue-500/10 animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
    </div>
  )
}

// WebGL-style Particle System
const ParticleField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      life: number
    }> = []
    
    // Create particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        color: Math.random() > 0.5 ? '#3b82f6' : '#8b5cf6',
        life: Math.random() * 100 + 50
      })
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life--
        
        // Fade out over time
        particle.opacity *= 0.999
        
        // Reset particle if it dies
        if (particle.life <= 0 || particle.opacity < 0.01) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.life = Math.random() * 100 + 50
          particle.opacity = Math.random() * 0.6 + 0.2
        }
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
        
        // Draw particle with glow
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.shadowBlur = 20
        ctx.shadowColor = particle.color
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        
        // Connect nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            ctx.save()
            ctx.globalAlpha = (1 - distance / 100) * 0.1
            ctx.strokeStyle = particle.color
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })
      
      requestAnimationFrame(animate)
    }
    
    animate()
    
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    visa: "Canada PR",
    country: "India → Canada",
    flag: "🇮🇳 → 🇨🇦",
    quote: "VANHSYA transformed my impossible dream into reality. Their AI guidance was like having a personal immigration expert 24/7.",
    achievement: "Software Engineer at Shopify",
    timeline: "8 months"
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    visa: "UAE Golden Visa",
    country: "Egypt → UAE",
    flag: "🇪🇬 → 🇦🇪",
    quote: "The Golden Visa seemed impossible until VANHSYA's AI identified the perfect pathway. Now I'm building my dream company in Dubai.",
    achievement: "Tech Entrepreneur",
    timeline: "6 months"
  },
  {
    id: 3,
    name: "Sarah Williams",
    visa: "UK Skilled Worker",
    country: "Nigeria → UK",
    flag: "🇳🇬 → 🇬🇧",
    quote: "From rejection letters to London success story. VANHSYA's precision and care made all the difference in my journey.",
    achievement: "Data Scientist at DeepMind",
    timeline: "10 months"
  },
  {
    id: 4,
    name: "Marcus Chen",
    visa: "Australia 189",
    country: "Malaysia → Australia",
    flag: "🇲🇾 → 🇦🇺",
    quote: "The complexity of Australian immigration was overwhelming until VANHSYA's AI created my perfect strategy.",
    achievement: "Civil Engineer in Melbourne",
    timeline: "12 months"
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    visa: "Singapore EP",
    country: "Philippines → Singapore",
    flag: "🇵🇭 → 🇸🇬",
    quote: "Singapore felt like a distant dream. VANHSYA made it my new reality with their revolutionary approach.",
    achievement: "Financial Analyst at DBS",
    timeline: "7 months"
  },
  {
    id: 6,
    name: "David Kim",
    visa: "US Green Card",
    country: "South Korea → USA",
    flag: "🇰🇷 → 🇺🇸",
    quote: "After years of uncertainty, VANHSYA's AI found the path to my American dream. Incredible precision and support.",
    achievement: "Research Scientist at Google",
    timeline: "18 months"
  }
]

// 3D Flip Testimonial Card
const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0], index: number }> = ({ testimonial, index }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  
  return (
    <motion.div
      className="min-w-[600px] h-[450px] mx-4 cursor-pointer"
      initial={{ opacity: 0, x: 100, rotateY: -15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      whileHover={{ scale: 1.02, rotateY: 5 }}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        {/* Front of card */}
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-800/95 to-purple-900/95 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-8 flex flex-col justify-between shadow-2xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="text-5xl">{testimonial.flag}</div>
              <motion.div 
                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-3 rounded-full border border-blue-400/30"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-blue-300 font-bold">{testimonial.visa}</span>
              </motion.div>
            </div>
            
            <motion.div 
              className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-white text-4xl font-black">{testimonial.name.charAt(0)}</span>
            </motion.div>
            
            <h3 className="text-3xl font-bold text-white text-center mb-3">{testimonial.name}</h3>
            <p className="text-purple-300 text-center text-lg mb-6">{testimonial.country}</p>
          </div>
          
          <blockquote className="text-gray-200 text-center italic text-lg leading-relaxed mb-6">
            "{testimonial.quote}"
          </blockquote>
          
          <motion.div 
            className="text-center text-blue-400 font-semibold"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click to see full story →
          </motion.div>
        </div>
        
        {/* Back of card */}
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900/95 to-indigo-900/95 backdrop-blur-xl rounded-3xl border border-blue-500/30 p-8 flex flex-col justify-between shadow-2xl"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div>
            <h4 className="text-2xl font-bold text-white mb-8 text-center">Success Journey</h4>
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-gray-300 text-lg">Timeline:</span>
                <span className="text-green-400 font-bold text-xl">{testimonial.timeline}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-gray-300 text-lg">Visa Type:</span>
                <span className="text-blue-400 font-bold">{testimonial.visa}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-gray-300 text-lg">Achievement:</span>
                <span className="text-purple-400 font-bold text-right">{testimonial.achievement}</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <motion.div 
              className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-8 py-4 rounded-full mb-6 border border-green-400/30"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-green-300 font-bold text-lg">✓ VISA APPROVED</span>
            </motion.div>
            <p className="text-gray-300">
              Powered by VANHSYA AI Immigration Platform
            </p>
          </div>
          
          <div className="text-center text-blue-400 font-semibold">
            ← Click to return
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function VisaSuccessStoriesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 overflow-x-hidden">
      {/* Particle Background */}
      <ParticleField />
      
      {/* Aurora Background Effects */}
      <div className="fixed inset-0 opacity-40 z-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-indigo-600 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: 4
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center z-10">
        <motion.div 
          className="text-center px-6 max-w-7xl mx-auto"
          style={{ y: textY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          >
            <h1 className="text-8xl md:text-9xl font-black text-white mb-8 tracking-wider drop-shadow-2xl">
              DREAMS
            </h1>
            <motion.h2 
              className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-8"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              UNLOCKED
            </motion.h2>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Stories That Inspire. Lives That Transform. Futures That Begin.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <motion.button 
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-16 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Read More Stories</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
            
            <motion.button 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-16 py-5 rounded-full font-bold text-xl transition-all duration-300 border-2 border-white/30 hover:border-white/50"
              whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.8)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* 3D Globe Section */}
      <section className="relative py-32 z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <h2 className="text-6xl font-bold text-white mb-8">
              Global Success Network
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Over 4,500 visa approvals across 6 continents. Every pin represents a dream fulfilled through VANHSYA's revolutionary AI platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mb-16"
          >
            <Interactive3DGlobe />
          </motion.div>
          
          {/* Globe Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[
              { value: "4,500+", label: "Visas Approved", color: "blue" },
              { value: "95%", label: "Success Rate", color: "purple" },
              { value: "60+", label: "Countries", color: "green" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-black/50 backdrop-blur-lg rounded-2xl px-8 py-6 border border-white/20"
                whileHover={{ scale: 1.05, borderColor: `rgba(${stat.color === 'blue' ? '59, 130, 246' : stat.color === 'purple' ? '147, 51, 234' : '34, 197, 94'}, 0.8)` }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                <div className={`text-4xl font-bold mb-2 ${
                  stat.color === 'blue' ? 'text-blue-400' : 
                  stat.color === 'purple' ? 'text-purple-400' : 'text-green-400'
                }`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Horizontal Scroll Testimonials */}
      <section className="relative py-32 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <h2 className="text-6xl font-bold text-white mb-8">
            Success Stories
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real people. Real dreams. Real results. Experience the journeys that transformed lives through VANHSYA's AI-powered immigration platform.
          </p>
        </motion.div>

        <div className="overflow-x-auto scrollbar-hide pb-8">
          <div className="flex space-x-0 px-8" style={{ scrollSnapType: 'x mandatory', width: 'fit-content' }}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} style={{ scrollSnapAlign: 'center' }}>
                <TestimonialCard testimonial={testimonial} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 z-10">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-7xl font-bold text-white mb-12">
              Your Story Starts{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Here
              </span>
            </h2>
            <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Join thousands who've transformed their migration dreams into reality. Let VANHSYA's AI create your personalized pathway to success.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <motion.button 
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-16 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Start Your Journey Today</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
              
              <motion.button 
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-16 py-5 rounded-full font-bold text-xl transition-all duration-300 border-2 border-white/30 hover:border-white/50"
                whileHover={{ scale: 1.05, borderColor: "rgba(147, 51, 234, 0.8)" }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Free Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
