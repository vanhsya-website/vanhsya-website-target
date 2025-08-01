'use client'

import React, { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Visa node data with expanded categories
const visaNodes = [
  {
    id: 'profile',
    label: 'Your AI Profile',
    type: 'center',
    position: { x: 0, y: 0, z: 0 },
    color: '#3B82F6',
    description: 'AI analyzes your profile to recommend optimal visa pathways',
    details: 'Our advanced AI system evaluates your education, experience, skills, and preferences to create a personalized visa roadmap.',
    category: 'ai'
  },
  // Professional & Skilled Visas
  {
    id: 'tep',
    label: 'Tech.Pass',
    type: 'visa',
    position: { x: 350, y: 200, z: 0 },
    color: '#10B981',
    description: 'Tech.Pass - Singapore Tech Talent Visa',
    details: 'For established tech professionals and entrepreneurs. Renewable 2-year pass with fast-track PR pathway. Minimum S$25,000 salary.',
    category: 'professional'
  },
  {
    id: 'ep',
    label: 'Employment Pass',
    type: 'visa',
    position: { x: 250, y: 350, z: 0 },
    color: '#EC4899',
    description: 'Employment Pass - Professionals',
    details: 'For university graduates and professionals earning S$5,000+. Includes dependent and domestic helper privileges.',
    category: 'professional'
  },
  {
    id: 'spass',
    label: 'S Pass',
    type: 'visa',
    position: { x: -250, y: 350, z: 0 },
    color: '#8B5CF6',
    description: 'S Pass - Mid-skilled Work Visa',
    details: 'For mid-level skilled workers earning S$3,000+. Includes dependent privileges and PR eligibility after 2 years.',
    category: 'skilled'
  },
  // Education & Training
  {
    id: 'student',
    label: 'Student Pass',
    type: 'visa',
    position: { x: 0, y: 400, z: 0 },
    color: '#F59E0B',
    description: 'Student Pass - Education Pathway',
    details: 'Study at recognized institutions with work rights. Pathway to employment and permanent residency. Includes internship opportunities.',
    category: 'education'
  },
  {
    id: 'training',
    label: 'Training Pass',
    type: 'visa',
    position: { x: -350, y: 200, z: 0 },
    color: '#F97316',
    description: 'Training Employment Pass',
    details: 'For professionals on structured training programs. 3-month renewable passes for skill development.',
    category: 'education'
  },
  // Unskilled & Entry Level
  {
    id: 'wp',
    label: 'Work Permit',
    type: 'visa',
    position: { x: -350, y: -200, z: 0 },
    color: '#84CC16',
    description: 'Work Permit - Entry Level Jobs',
    details: 'For unskilled workers in construction, manufacturing, marine, and service sectors. Lower salary requirements.',
    category: 'unskilled'
  },
  {
    id: 'domestic',
    label: 'Domestic Worker',
    type: 'visa',
    position: { x: -250, y: -350, z: 0 },
    color: '#22D3EE',
    description: 'Foreign Domestic Worker Permit',
    details: 'For household helpers and caregivers. Includes medical insurance and regulated working conditions.',
    category: 'unskilled'
  },
  // Special Programs
  {
    id: 'pep',
    label: 'PEP',
    type: 'visa',
    position: { x: 350, y: -200, z: 0 },
    color: '#A855F7',
    description: 'Personalised Employment Pass',
    details: 'For high-achieving professionals. 3-year validity, job flexibility, and streamlined renewal process.',
    category: 'special'
  },
  {
    id: 'entrepreneur',
    label: 'EntrePass',
    type: 'visa',
    position: { x: 250, y: -350, z: 0 },
    color: '#F43F5E',
    description: 'Entrepreneur Pass',
    details: 'For innovative entrepreneurs and investors. Access to funding networks and startup ecosystem.',
    category: 'special'
  },
  // Long-term & Family
  {
    id: 'pr',
    label: 'Permanent Residency',
    type: 'visa',
    position: { x: 0, y: -400, z: 0 },
    color: '#EF4444',
    description: 'Singapore Permanent Residency',
    details: 'Long-term residency with full work rights and benefits. Access to subsidized healthcare and education.',
    category: 'permanent'
  },
  {
    id: 'visit',
    label: 'Visit Visa',
    type: 'visa',
    position: { x: -400, y: 0, z: 0 },
    color: '#06B6D4',
    description: 'Tourist/Business Visit Pass',
    details: 'Short-term visits for tourism, business meetings, or family visits. 30-90 day options available.',
    category: 'temporary'
  },
  {
    id: 'dependent',
    label: 'Dependent Pass',
    type: 'visa',
    position: { x: 400, y: 0, z: 0 },
    color: '#14B8A6',
    description: 'Dependent Pass - Family Members',
    details: 'For spouses and children of work pass holders. Includes Letter of Consent for employment.',
    category: 'family'
  }
]

// Floating particles background
const FloatingParticles: React.FC = () => {
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
      life: number
      maxLife: number
    }> = []

    // Create particles
    for (let i = 0; i < 100; i++) {
      const maxLife = Math.random() * 200 + 100
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        life: maxLife,
        maxLife
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(9, 9, 11, 0.02)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life--

        particle.opacity = (particle.life / particle.maxLife) * 0.7

        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.life = particle.maxLife
          particle.opacity = Math.random() * 0.5 + 0.2
        }

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = '#64748b'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
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

// Bezier curve SVG component
const ConnectionLines: React.FC<{ 
  centerNode: typeof visaNodes[0]
  visaNodes: typeof visaNodes[0][]
  scale: number
  containerSize: { width: number; height: number }
}> = ({ centerNode, visaNodes: nodes, scale, containerSize }) => {
  const centerX = containerSize.width / 2 + centerNode.position.x * scale
  const centerY = containerSize.height / 2 + centerNode.position.y * scale

  return (
    <svg
      className="absolute inset-0 pointer-events-none z-10"
      width={containerSize.width}
      height={containerSize.height}
    >
      {nodes.map((node) => {
        const nodeX = containerSize.width / 2 + node.position.x * scale
        const nodeY = containerSize.height / 2 + node.position.y * scale
        
        const controlX1 = centerX + (nodeX - centerX) * 0.3
        const controlY1 = centerY + (nodeY - centerY) * 0.3 - 100
        const controlX2 = centerX + (nodeX - centerX) * 0.7
        const controlY2 = centerY + (nodeY - centerY) * 0.7 + 50

        return (
          <motion.path
            key={node.id}
            d={`M ${centerX} ${centerY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${nodeX} ${nodeY}`}
            stroke={node.color}
            strokeWidth="2"
            fill="none"
            opacity={0.6}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            style={{
              filter: `drop-shadow(0 0 4px ${node.color})`
            }}
          />
        )
      })}
    </svg>
  )
}

// Individual visa node component with enhanced animations
const VisaNode: React.FC<{
  node: typeof visaNodes[0]
  onHover: (node: typeof visaNodes[0] | null) => void
  onClick: (node: typeof visaNodes[0]) => void
  scale: number
  containerSize: { width: number; height: number }
}> = ({ node, onHover, onClick, scale, containerSize }) => {
  const [isHovered, setIsHovered] = useState(false)

  const nodeSize = node.type === 'center' ? 90 : 55
  const scaledSize = nodeSize * scale
  
  const x = containerSize.width / 2 + node.position.x * scale - scaledSize / 2
  const y = containerSize.height / 2 + node.position.y * scale - scaledSize / 2

  // Category-based animations
  const getAnimationProps = () => {
    switch (node.category) {
      case 'ai':
        return {
          animate: {
            rotate: 360,
            scale: [1, 1.05, 1],
            boxShadow: [
              `0 0 20px ${node.color}40`,
              `0 0 40px ${node.color}80`,
              `0 0 20px ${node.color}40`
            ]
          },
          transition: {
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity },
            boxShadow: { duration: 3, repeat: Infinity }
          }
        }
      case 'professional':
        return {
          animate: {
            y: [0, -5, 0],
            boxShadow: [
              `0 0 15px ${node.color}40`,
              `0 0 25px ${node.color}60`,
              `0 0 15px ${node.color}40`
            ]
          },
          transition: { 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" as const
          }
        }
      case 'unskilled':
        return {
          animate: {
            scale: [1, 1.02, 1],
            rotate: [0, 2, -2, 0]
          },
          transition: { 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" as const
          }
        }
      case 'education':
        return {
          animate: {
            rotate: [0, 5, -5, 0],
            boxShadow: [
              `0 0 15px ${node.color}40`,
              `0 0 30px ${node.color}60`,
              `0 0 15px ${node.color}40`
            ]
          },
          transition: { 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" as const
          }
        }
      default:
        return {
          animate: {
            boxShadow: [
              `0 0 15px ${node.color}40`,
              `0 0 20px ${node.color}50`,
              `0 0 15px ${node.color}40`
            ]
          },
          transition: { duration: 4, repeat: Infinity }
        }
    }
  }

  const animationProps = getAnimationProps()

  return (
    <motion.div
      className="absolute cursor-pointer z-20"
      style={{
        left: x,
        top: y,
        width: scaledSize,
        height: scaledSize,
      }}
      initial={{ scale: 0, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ 
        delay: node.type === 'center' ? 0 : Math.random() * 1.5 + 0.5,
        duration: 1.2,
        type: "spring",
        stiffness: 120,
        damping: 12
      }}
      whileHover={{ 
        scale: 1.15, 
        y: -8,
        transition: { duration: 0.3 }
      }}
      onMouseEnter={() => {
        setIsHovered(true)
        onHover(node)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        onHover(null)
      }}
      onClick={() => onClick(node)}
    >
      {/* Main node with category-specific animations */}
      <motion.div
        className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl border-2"
        style={{
          backgroundColor: node.color + '20',
          borderColor: node.color,
          boxShadow: isHovered ? `0 0 30px ${node.color}60` : `0 0 20px ${node.color}40`
        }}
        {...animationProps}
        whileHover={{
          scale: 1.1,
          borderColor: '#ffffff',
          boxShadow: `0 0 40px ${node.color}80`
        }}
      >
        {/* Animated background gradient */}
        <motion.div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle at center, ${node.color}40 0%, ${node.color}20 50%, transparent 100%)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Category indicator ring */}
        <motion.div
          className="absolute inset-2 rounded-full border opacity-30"
          style={{ borderColor: node.color }}
          animate={{
            rotate: node.category === 'ai' ? 360 : 0,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 2.5, repeat: Infinity }
          }}
        />

        {/* Icon/Label with improved typography */}
        <div className="relative z-10 text-center text-white">
          {node.type === 'center' ? (
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-lg font-bold">AI</div>
              <div className="text-xs">Profile</div>
            </motion.div>
          ) : (
            <div className="text-xs font-bold px-2 text-center leading-tight">
              {node.label}
            </div>
          )}
        </div>

        {/* Enhanced pulse effect for center node */}
        {node.type === 'center' && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border-2"
              style={{ borderColor: node.color }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border"
              style={{ borderColor: '#ffffff' }}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1
              }}
            />
          </>
        )}

        {/* Floating particles around high-value visas */}
        {(node.category === 'professional' || node.category === 'special') && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: node.color,
                  left: '50%',
                  top: '10%',
                  transformOrigin: '0 250%',
                  transform: `rotate(${i * 120}deg)`
                }}
                animate={{
                  scale: [0.5, 1, 0.5],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.7
                }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Enhanced label with category badge */}
      {node.type !== 'center' && (
        <motion.div 
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="text-white text-xs font-semibold whitespace-nowrap mb-1">
            {node.label}
          </div>
          <div 
            className="text-xs px-2 py-1 rounded-full border opacity-80"
            style={{ 
              backgroundColor: node.color + '20',
              borderColor: node.color + '60',
              color: node.color
            }}
          >
            {node.category}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

// Tooltip component
const NodeTooltip: React.FC<{
  node: typeof visaNodes[0] | null
  position: { x: number; y: number }
}> = ({ node, position }) => {
  if (!node) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{ left: position.x + 20, top: position.y - 20 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-neutral-900/95 backdrop-blur-lg rounded-lg p-4 border border-neutral-700/50 shadow-xl max-w-xs">
        <h4 className="text-white font-bold text-sm mb-2">{node.label}</h4>
        <p className="text-neutral-300 text-xs leading-relaxed">{node.description}</p>
        <div className="mt-2 px-2 py-1 bg-neutral-800/50 rounded text-xs text-neutral-400">
          Click to learn more
        </div>
      </div>
    </motion.div>
  )
}

// Node details modal
const NodeModal: React.FC<{
  node: typeof visaNodes[0] | null
  isOpen: boolean
  onClose: () => void
}> = ({ node, isOpen, onClose }) => {
  if (!node) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 max-w-2xl w-full border border-neutral-700/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg border-2"
                style={{ backgroundColor: node.color + '20', borderColor: node.color }}
              >
                <div 
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: node.color }}
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{node.label}</h3>
              <p className="text-lg text-neutral-400">{node.description}</p>
            </div>

            <div className="bg-neutral-800/50 rounded-xl p-6 mb-6 border border-neutral-700/30">
              <h4 className="text-white font-bold mb-3">Details</h4>
              <p className="text-neutral-300 leading-relaxed mb-4">{node.details}</p>
              
              {/* Category-specific information */}
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="px-3 py-1 rounded-full text-xs font-semibold border"
                  style={{ 
                    backgroundColor: node.color + '20',
                    borderColor: node.color,
                    color: node.color
                  }}
                >
                  {node.category?.toUpperCase()} CATEGORY
                </div>
                {node.category === 'unskilled' && (
                  <div className="text-green-400 text-xs flex items-center gap-1">
                    <span>✓</span> Lower qualification requirements
                  </div>
                )}
                {node.category === 'professional' && (
                  <div className="text-blue-400 text-xs flex items-center gap-1">
                    <span>✓</span> High earning potential
                  </div>
                )}
                {node.category === 'education' && (
                  <div className="text-orange-400 text-xs flex items-center gap-1">
                    <span>✓</span> Pathway to employment
                  </div>
                )}
              </div>

              {/* Quick stats based on category */}
              {node.category === 'unskilled' && (
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="bg-green-500/10 p-3 rounded border border-green-500/20 text-center">
                    <div className="text-green-400 font-bold text-sm">No Degree</div>
                    <div className="text-green-300 text-xs">Required</div>
                  </div>
                  <div className="bg-blue-500/10 p-3 rounded border border-blue-500/20 text-center">
                    <div className="text-blue-400 font-bold text-sm">Fast</div>
                    <div className="text-blue-300 text-xs">Processing</div>
                  </div>
                  <div className="bg-purple-500/10 p-3 rounded border border-purple-500/20 text-center">
                    <div className="text-purple-400 font-bold text-sm">2-3 Weeks</div>
                    <div className="text-purple-300 text-xs">Timeline</div>
                  </div>
                </div>
              )}

              {node.category === 'professional' && (
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="bg-emerald-500/10 p-3 rounded border border-emerald-500/20 text-center">
                    <div className="text-emerald-400 font-bold text-sm">High Salary</div>
                    <div className="text-emerald-300 text-xs">S$5,000+</div>
                  </div>
                  <div className="bg-blue-500/10 p-3 rounded border border-blue-500/20 text-center">
                    <div className="text-blue-400 font-bold text-sm">Dependents</div>
                    <div className="text-blue-300 text-xs">Allowed</div>
                  </div>
                  <div className="bg-violet-500/10 p-3 rounded border border-violet-500/20 text-center">
                    <div className="text-violet-400 font-bold text-sm">PR Path</div>
                    <div className="text-violet-300 text-xs">Available</div>
                  </div>
                </div>
              )}

              {node.category === 'education' && (
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="bg-amber-500/10 p-3 rounded border border-amber-500/20 text-center">
                    <div className="text-amber-400 font-bold text-sm">Work Rights</div>
                    <div className="text-amber-300 text-xs">Part-time</div>
                  </div>
                  <div className="bg-rose-500/10 p-3 rounded border border-rose-500/20 text-center">
                    <div className="text-rose-400 font-bold text-sm">Job Path</div>
                    <div className="text-rose-300 text-xs">Post-study</div>
                  </div>
                  <div className="bg-teal-500/10 p-3 rounded border border-teal-500/20 text-center">
                    <div className="text-teal-400 font-bold text-sm">Internships</div>
                    <div className="text-teal-300 text-xs">Available</div>
                  </div>
                </div>
              )}
            </div>

            {node.type === 'center' && (
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20 text-center">
                  <div className="text-blue-400 font-bold text-lg">95%</div>
                  <div className="text-blue-300 text-sm">Success Rate</div>
                </div>
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20 text-center">
                  <div className="text-green-400 font-bold text-lg">24/7</div>
                  <div className="text-green-300 text-sm">AI Support</div>
                </div>
              </div>
            )}

            <div className="flex justify-center gap-4">
              <motion.button
                onClick={onClose}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Application
              </motion.button>
              <motion.button
                onClick={onClose}
                className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-neutral-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Main component
export default function VisaMatrixPage() {
  const [hoveredNode, setHoveredNode] = useState<typeof visaNodes[0] | null>(null)
  const [selectedNode, setSelectedNode] = useState<typeof visaNodes[0] | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  const handleScroll = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    setScrollProgress(prev => Math.max(0, Math.min(1, prev + e.deltaY * 0.001)))
  }, [])

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        })
      }
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const scale = 1 + scrollProgress * 0.8
  const centerNode = visaNodes.find(node => node.type === 'center')!
  const visaNodesList = visaNodes.filter(node => node.type === 'visa')

  return (
    <div 
      ref={containerRef}
      className="h-screen w-full bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onWheel={handleScroll}
    >
      {/* Floating particles background */}
      <FloatingParticles />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-40 p-6">
        <div className="container-section">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Visa <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Matrix</span>
            </h1>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-6">
              Explore 13+ interconnected visa pathways powered by AI. From professional to unskilled, education to entrepreneurship - discover your optimal route to Singapore.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-neutral-800/50 px-3 py-1 rounded-full border border-neutral-700/50">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-neutral-300">Professional Visas</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-800/50 px-3 py-1 rounded-full border border-neutral-700/50">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-neutral-300">Education Programs</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-800/50 px-3 py-1 rounded-full border border-neutral-700/50">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-neutral-300">Entry Level & Unskilled</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-800/50 px-3 py-1 rounded-full border border-neutral-700/50">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-neutral-300">Special Programs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Connection lines */}
      {containerSize.width > 0 && (
        <ConnectionLines
          centerNode={centerNode}
          visaNodes={visaNodesList}
          scale={scale}
          containerSize={containerSize}
        />
      )}

      {/* Visa nodes */}
      {containerSize.width > 0 && visaNodes.map((node) => (
        <VisaNode
          key={node.id}
          node={node}
          onHover={setHoveredNode}
          onClick={setSelectedNode}
          scale={scale}
          containerSize={containerSize}
        />
      ))}

      {/* Instructions */}
      <div className="absolute bottom-6 left-6 z-40">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="bg-neutral-900/80 backdrop-blur-lg rounded-lg p-4 border border-neutral-700/50"
        >
          <div className="text-white text-sm space-y-2">
            <div>🖱️ <span className="text-neutral-300">Hover nodes for info</span></div>
            <div>👆 <span className="text-neutral-300">Click for details</span></div>
            <div>📜 <span className="text-neutral-300">Scroll to expand</span></div>
          </div>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-6 right-6 z-40">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="bg-neutral-900/80 backdrop-blur-lg rounded-lg p-4 border border-neutral-700/50"
        >
          <div className="text-white text-sm mb-2">Expansion</div>
          <div className="w-24 h-2 bg-neutral-700 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </motion.div>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredNode && (
          <NodeTooltip node={hoveredNode} position={mousePosition} />
        )}
      </AnimatePresence>

      {/* Modal */}
      <NodeModal
        node={selectedNode}
        isOpen={!!selectedNode}
        onClose={() => setSelectedNode(null)}
      />
    </div>
  )
}
