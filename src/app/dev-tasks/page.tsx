'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  Circle,
  Filter,
  Search,
  RotateCcw,
  Calendar,
  Code,
  Mail,
  TrendingUp,
  Shield,
  FileText,
  Globe,
  Database,
  Zap,
  Target,
  AlertTriangle,
  Flame,
  X,
} from 'lucide-react';

// Toast notification component
function Toast({ message, isVisible, onClose }: { message: string; isVisible: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="fixed top-8 right-8 z-50 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-2xl shadow-[0_8px_32px_rgba(34,197,94,0.4)] border border-green-400/20 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <CheckCircle className="h-6 w-6" />
            </div>
            <span className="font-medium">{message}</span>
            <button
              onClick={onClose}
              className="flex-shrink-0 ml-2 hover:bg-white/20 rounded-lg p-1 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Animated Counter Component
function AnimatedCounter({ value, duration = 1000 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setDisplayValue(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <span>{displayValue}</span>;
}

// Animated Percentage Component
function AnimatedPercentage({ value, duration = 1200 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Use easeOut curve for smoother animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(easeOut * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <span>{displayValue}%</span>;
}

interface DevTask {
  id: string;
  title: string;
  description: string;
  category: 'UI' | 'Email' | 'SEO' | 'Analytics' | 'Compliance' | 'Performance' | 'Content' | 'Integration';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  estimatedHours: number;
  page?: string;
  completed: boolean;
  completedAt?: Date;
}

const categoryIcons = {
  UI: Code,
  Email: Mail,
  SEO: TrendingUp,
  Analytics: TrendingUp,
  Compliance: Shield,
  Performance: Zap,
  Content: FileText,
  Integration: Database,
};

const priorityIcons = {
  Low: Circle,
  Medium: Target,
  High: AlertTriangle,
  Critical: Flame,
};

// Twinkling Stars Component
const TwinklingStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star properties
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
      twinkleOffset: number;
    }> = [];

    // Create stars
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    // Animation
    let animationFrame: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016; // ~60fps

      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const currentOpacity = star.opacity * (0.3 + 0.7 * (twinkle + 1) / 2);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.6})`;
        ctx.fill();

        // Add a subtle glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${currentOpacity * 0.3})`;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

const devTasks: DevTask[] = [
  // UI Tasks
  {
    id: 'ui-001',
    title: 'Add complete team member profiles with photos and bios',
    description: 'Create detailed team profiles for the about page with professional photos and comprehensive bios',
    category: 'UI',
    priority: 'High',
    estimatedHours: 8,
    page: '/about',
    completed: false,
  },
  {
    id: 'ui-002',
    title: 'Implement client testimonials with verified reviews',
    description: 'Add testimonial section with client photos, reviews, and verification badges',
    category: 'UI',
    priority: 'Medium',
    estimatedHours: 6,
    page: '/about',
    completed: false,
  },
  {
    id: 'ui-003',
    title: 'Add company timeline with major milestones',
    description: 'Create interactive timeline showing company growth and achievements',
    category: 'UI',
    priority: 'Medium',
    estimatedHours: 4,
    page: '/about',
    completed: false,
  },
  {
    id: 'ui-004',
    title: 'Include awards and certifications section',
    description: 'Showcase company certifications, awards, and professional recognitions',
    category: 'UI',
    priority: 'Medium',
    estimatedHours: 3,
    page: '/about',
    completed: false,
  },
  {
    id: 'ui-005',
    title: 'Add interactive company growth statistics',
    description: 'Implement animated counters and charts showing company statistics',
    category: 'UI',
    priority: 'Low',
    estimatedHours: 5,
    page: '/about',
    completed: false,
  },
  {
    id: 'ui-006',
    title: 'Fix image optimization warnings',
    description: 'Replace <img> tags with Next.js Image component in ModernLoader and other components',
    category: 'Performance',
    priority: 'Medium',
    estimatedHours: 2,
    page: 'Multiple',
    completed: false,
  },
  {
    id: 'ui-007',
    title: 'Clean up unused imports and variables',
    description: 'Remove remaining unused imports across all components and pages',
    category: 'UI',
    priority: 'Low',
    estimatedHours: 4,
    page: 'Multiple',
    completed: false,
  },
  {
    id: 'ui-008',
    title: 'Replace any types with proper TypeScript types',
    description: 'Fix all remaining any types with proper TypeScript interfaces',
    category: 'UI',
    priority: 'Medium',
    estimatedHours: 6,
    page: 'Multiple',
    completed: false,
  },

  // Email Tasks
  {
    id: 'email-001',
    title: 'Set up consultation booking confirmation emails',
    description: 'Implement automated email confirmation for consultation bookings',
    category: 'Email',
    priority: 'High',
    estimatedHours: 4,
    page: '/consultation',
    completed: false,
  },
  {
    id: 'email-002',
    title: 'Create email templates for different services',
    description: 'Design and implement email templates for various immigration services',
    category: 'Email',
    priority: 'Medium',
    estimatedHours: 8,
    page: 'Multiple',
    completed: false,
  },
  {
    id: 'email-003',
    title: 'Implement newsletter subscription system',
    description: 'Add newsletter signup with automated welcome emails',
    category: 'Email',
    priority: 'Medium',
    estimatedHours: 6,
    page: 'Multiple',
    completed: false,
  },
  {
    id: 'email-004',
    title: 'Set up document submission confirmations',
    description: 'Send confirmation emails when documents are submitted',
    category: 'Email',
    priority: 'High',
    estimatedHours: 3,
    page: '/ai-tools',
    completed: false,
  },

  // SEO Tasks
  {
    id: 'seo-001',
    title: 'Optimize about page for "best immigration consultants" keywords',
    description: 'Implement SEO optimization targeting immigration consultant keywords',
    category: 'SEO',
    priority: 'High',
    estimatedHours: 4,
    page: '/about',
    completed: false,
  },
  {
    id: 'seo-002',
    title: 'Add structured data markup for services',
    description: 'Implement JSON-LD schema markup for all immigration services',
    category: 'SEO',
    priority: 'Medium',
    estimatedHours: 6,
    page: '/services',
    completed: false,
  },
  {
    id: 'seo-003',
    title: 'Optimize meta descriptions for all pages',
    description: 'Write compelling meta descriptions for better click-through rates',
    category: 'SEO',
    priority: 'Medium',
    estimatedHours: 4,
    page: 'Multiple',
    completed: false,
  },
  {
    id: 'seo-004',
    title: 'Create XML sitemap',
    description: 'Generate and submit XML sitemap to search engines',
    category: 'SEO',
    priority: 'Medium',
    estimatedHours: 2,
    page: 'Site-wide',
    completed: false,
  },
  {
    id: 'seo-005',
    title: 'Add Open Graph and Twitter Card meta tags',
    description: 'Implement social media preview optimization',
    category: 'SEO',
    priority: 'Low',
    estimatedHours: 3,
    page: 'Multiple',
    completed: false,
  },

  // Analytics Tasks
  {
    id: 'analytics-001',
    title: 'Set up Google Analytics 4',
    description: 'Implement GA4 tracking with custom events for conversions',
    category: 'Analytics',
    priority: 'High',
    estimatedHours: 3,
    page: 'Site-wide',
    completed: false,
  },
  {
    id: 'analytics-002',
    title: 'Implement conversion tracking',
    description: 'Track consultation bookings, document uploads, and form submissions',
    category: 'Analytics',
    priority: 'High',
    estimatedHours: 4,
    page: 'Multiple',
    completed: false,
  },
  {
    id: 'analytics-003',
    title: 'Set up heatmap tracking',
    description: 'Implement Hotjar or similar for user behavior analysis',
    category: 'Analytics',
    priority: 'Medium',
    estimatedHours: 2,
    page: 'Site-wide',
    completed: false,
  },
  {
    id: 'analytics-004',
    title: 'Create analytics dashboard',
    description: 'Build internal dashboard for tracking key metrics',
    category: 'Analytics',
    priority: 'Low',
    estimatedHours: 12,
    page: '/analytics',
    completed: false,
  },

  // Compliance Tasks
  {
    id: 'compliance-001',
    title: 'Add GDPR compliance features',
    description: 'Implement cookie consent and data protection features',
    category: 'Compliance',
    priority: 'Critical',
    estimatedHours: 8,
    page: 'Site-wide',
    completed: false,
  },
  {
    id: 'compliance-002',
    title: 'Create privacy policy page',
    description: 'Write comprehensive privacy policy compliant with GDPR/CCPA',
    category: 'Compliance',
    priority: 'High',
    estimatedHours: 4,
    page: '/privacy',
    completed: false,
  },
  {
    id: 'compliance-003',
    title: 'Add terms of service page',
    description: 'Create detailed terms of service for website usage',
    category: 'Compliance',
    priority: 'High',
    estimatedHours: 3,
    page: '/terms',
    completed: false,
  },
  {
    id: 'compliance-004',
    title: 'Implement accessibility features',
    description: 'Add WCAG 2.1 AA compliance features (alt tags, keyboard navigation, etc.)',
    category: 'Compliance',
    priority: 'Medium',
    estimatedHours: 10,
    page: 'Site-wide',
    completed: false,
  },

  // Performance Tasks
  {
    id: 'performance-001',
    title: 'Optimize bundle size',
    description: 'Reduce JavaScript bundle size through code splitting and tree shaking',
    category: 'Performance',
    priority: 'Medium',
    estimatedHours: 6,
    page: 'Site-wide',
    completed: false,
  },
  {
    id: 'performance-002',
    title: 'Implement lazy loading for components',
    description: 'Add lazy loading for heavy components and images',
    category: 'Performance',
    priority: 'Medium',
    estimatedHours: 4,
    page: 'Multiple',
    completed: false,
  },
  {
    id: 'performance-003',
    title: 'Add service worker for caching',
    description: 'Implement PWA features with offline support',
    category: 'Performance',
    priority: 'Low',
    estimatedHours: 8,
    page: 'Site-wide',
    completed: false,
  },

  // Content Tasks
  {
    id: 'content-001',
    title: 'Write compelling founder story and company mission',
    description: 'Create engaging content about company founding and mission',
    category: 'Content',
    priority: 'Medium',
    estimatedHours: 3,
    page: '/about',
    completed: false,
  },
  {
    id: 'content-002',
    title: 'Create detailed service descriptions',
    description: 'Write comprehensive descriptions for all immigration services',
    category: 'Content',
    priority: 'High',
    estimatedHours: 8,
    page: '/services',
    completed: false,
  },
  {
    id: 'content-003',
    title: 'Add FAQ section',
    description: 'Create comprehensive FAQ covering common immigration questions',
    category: 'Content',
    priority: 'Medium',
    estimatedHours: 6,
    page: '/faq',
    completed: false,
  },
  {
    id: 'content-004',
    title: 'Write blog posts for SEO',
    description: 'Create immigration-related blog content for SEO',
    category: 'Content',
    priority: 'Low',
    estimatedHours: 20,
    page: '/blog',
    completed: false,
  },

  // Integration Tasks
  {
    id: 'integration-001',
    title: 'Set up payment processing',
    description: 'Integrate Stripe for consultation and service payments',
    category: 'Integration',
    priority: 'High',
    estimatedHours: 8,
    page: '/consultation',
    completed: false,
  },
  {
    id: 'integration-002',
    title: 'Implement calendar scheduling',
    description: 'Integrate Calendly or similar for appointment booking',
    category: 'Integration',
    priority: 'High',
    estimatedHours: 6,
    page: '/consultation',
    completed: false,
  },
  {
    id: 'integration-003',
    title: 'Add CRM integration',
    description: 'Connect with HubSpot or similar CRM for lead management',
    category: 'Integration',
    priority: 'Medium',
    estimatedHours: 10,
    page: 'Multiple',
    completed: false,
  },
  {
    id: 'integration-004',
    title: 'Set up document storage',
    description: 'Implement secure document storage with AWS S3 or similar',
    category: 'Integration',
    priority: 'High',
    estimatedHours: 8,
    page: '/ai-tools',
    completed: false,
  },
];

const DevTasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<DevTask[]>(devTasks);
  const [filteredTasks, setFilteredTasks] = useState<DevTask[]>(devTasks);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [completingTaskId, setCompletingTaskId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [syncStatus, setSyncStatus] = useState<'synced' | 'syncing' | 'error'>('synced');

  // Load saved progress from localStorage with enhanced error handling
  useEffect(() => {
    const loadProgress = async () => {
      setSyncStatus('syncing');
      setIsLoading(true);
      
      try {
        const savedProgress = localStorage.getItem('dev-tasks-progress');
        
        if (savedProgress) {
          const data = JSON.parse(savedProgress);
          
          // Handle both old and new data formats
          let progress;
          if (data.progress && data.metadata) {
            // New format with metadata
            progress = data.progress;
            const { completedCount, lastSaved } = data.metadata;
            
            // Show sync status with metadata
            setToastMessage(`✅ Loaded ${completedCount} completed tasks (Last saved: ${new Date(lastSaved).toLocaleString()})`);
          } else {
            // Old format - direct progress object
            progress = data;
          }
          
          // Validate progress data structure
          if (typeof progress === 'object' && progress !== null) {
            const updatedTasks = devTasks.map(task => {
              const taskProgress = progress[task.id];
              return {
                ...task,
                completed: taskProgress?.completed || false,
                completedAt: taskProgress?.completedAt ? new Date(taskProgress.completedAt) : undefined,
              };
            });
            
            setTasks(updatedTasks);
            setSyncStatus('synced');
            
            // Show sync status toast only if there are completed tasks
            const completedCount = updatedTasks.filter(t => t.completed).length;
            if (completedCount > 0) {
              setShowToast(true);
            }
          } else {
            throw new Error('Invalid progress data format');
          }
        }
      } catch {
        setSyncStatus('error');
        setToastMessage('⚠️ Error loading saved progress. Starting fresh.');
        setShowToast(true);
        
        // Clear corrupted data
        localStorage.removeItem('dev-tasks-progress');
      } finally {
        setIsLoading(false);
      }
    };

    loadProgress();
  }, []);

  // Save progress to localStorage with enhanced error handling
  const saveProgress = (updatedTasks: DevTask[]) => {
    try {
      setSyncStatus('syncing');
      
      const progress = updatedTasks.reduce((acc, task) => {
        acc[task.id] = {
          completed: task.completed,
          completedAt: task.completedAt?.toISOString(),
          lastModified: new Date().toISOString(),
        };
        return acc;
      }, {} as Record<string, { completed: boolean; completedAt?: string; lastModified: string }>);
      
      // Add metadata for validation
      const dataToSave = {
        progress,
        metadata: {
          version: '1.0',
          totalTasks: updatedTasks.length,
          lastSaved: new Date().toISOString(),
          completedCount: updatedTasks.filter(t => t.completed).length,
        }
      };
      
      localStorage.setItem('dev-tasks-progress', JSON.stringify(dataToSave));
      setSyncStatus('synced');
      
    } catch {
      setSyncStatus('error');
      setToastMessage('⚠️ Error saving progress. Your changes may not be saved.');
      setShowToast(true);
    }
  };

  // Toggle task completion with animations and toast
  const toggleTask = (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    const isCompleting = !task.completed;
    
    // Set completing state for animations
    if (isCompleting) {
      setCompletingTaskId(taskId);
    }

    // Update tasks with delay for completion animation
    setTimeout(() => {
      const updatedTasks = tasks.map(t => {
        if (t.id === taskId) {
          return {
            ...t,
            completed: isCompleting,
            completedAt: isCompleting ? new Date() : undefined,
          };
        }
        return t;
      });
      
      setTasks(updatedTasks);
      saveProgress(updatedTasks);
      
      // Show success toast
      if (isCompleting) {
        setToastMessage(`Task Completed ✅`);
        setShowToast(true);
      } else {
        setToastMessage(`Task Reopened 🔄`);
        setShowToast(true);
      }
      
      // Reset completing state
      setCompletingTaskId(null);
    }, isCompleting ? 300 : 0); // Delay for completion animation
  };

  // Filter tasks
  useEffect(() => {
    let filtered = tasks;

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(task => selectedCategories.includes(task.category));
    }

    // Priority filter
    if (selectedPriorities.length > 0) {
      filtered = filtered.filter(task => selectedPriorities.includes(task.priority));
    }

    // Completion filter
    if (!showCompleted) {
      filtered = filtered.filter(task => !task.completed);
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.page?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredTasks(filtered);
  }, [tasks, selectedCategories, selectedPriorities, showCompleted, searchTerm]);

  // Toggle category filter
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Toggle priority filter
  const togglePriority = (priority: string) => {
    setSelectedPriorities(prev =>
      prev.includes(priority)
        ? prev.filter(p => p !== priority)
        : [...prev, priority]
    );
  };

  // Close toast
  const closeToast = () => {
    setShowToast(false);
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedPriorities([]);
    setSearchTerm('');
    setShowCompleted(true);
  };

  // Calculate statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const completionPercentage = Math.round((completedTasks / totalTasks) * 100);
  const totalEstimatedHours = tasks.reduce((sum, task) => sum + task.estimatedHours, 0);
  const completedHours = tasks.filter(task => task.completed).reduce((sum, task) => sum + task.estimatedHours, 0);

  const categories = [...new Set(tasks.map(task => task.category))];
  const priorities = ['Critical', 'High', 'Medium', 'Low'];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0a23 0%, #1c1c4b 100%)'
    }}>
      {/* Twinkling Stars Background */}
      <TwinklingStars />
      
      {/* Loading Overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-zinc-900/90 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="h-16 w-16 mx-auto mb-4 border-4 border-blue-500 border-t-transparent rounded-full"
            />
            <h2 className="text-2xl font-bold text-white mb-2">Loading Tasks</h2>
            <p className="text-white/70">Syncing your progress...</p>
          </div>
        </motion.div>
      )}
      
      {/* Content */}
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white"
              >
                Development Tasks Dashboard
              </motion.h1>
              
              {/* Sync Status Indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className={`flex items-center px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 ${
                  syncStatus === 'synced' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                  syncStatus === 'syncing' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30 animate-pulse' :
                  'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}
              >
                {syncStatus === 'synced' && (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Synced</span>
                  </>
                )}
                {syncStatus === 'syncing' && (
                  <>
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-4 w-4 mr-2 border-2 border-blue-300 border-t-transparent rounded-full"
                    />
                    <span>Syncing...</span>
                  </>
                )}
                {syncStatus === 'error' && (
                  <>
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    <span>Sync Error</span>
                  </>
                )}
              </motion.div>
            </div>
            
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative overflow-hidden bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-600/20 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-600/10 opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-4xl">📄</div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/80 mb-2">Total Tasks</p>
                    <p className="text-3xl font-bold text-white drop-shadow-lg">
                      <AnimatedCounter value={totalTasks} />
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative overflow-hidden bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-600/20 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-600/10 opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-4xl">✅</div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/80 mb-2">Completed Tasks</p>
                    <p className="text-3xl font-bold text-white drop-shadow-lg">
                      <AnimatedCounter value={completedTasks} duration={1200} />
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative overflow-hidden bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-600/20 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-4xl">📈</div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/80 mb-2">Progress</p>
                    <p className="text-3xl font-bold text-white drop-shadow-lg">
                      <AnimatedPercentage value={completionPercentage} />
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative overflow-hidden bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-rose-600/20 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-600/10 opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-4xl">⏳</div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/80 mb-2">Estimated Hours</p>
                    <p className="text-3xl font-bold text-white drop-shadow-lg">
                      <AnimatedCounter value={completedHours} duration={800} />/<AnimatedCounter value={totalEstimatedHours} duration={1000} />
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Progress Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 mb-8"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Overall Progress</h3>
                <span className="text-lg font-bold text-white bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  <AnimatedPercentage value={completionPercentage} duration={1500} /> Complete
                </span>
              </div>
              <div className="relative w-full bg-white/20 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 h-full rounded-full shadow-[0_0_20px_rgba(16,185,129,0.6)] glow-pulse"
                  animate={{ width: `${completionPercentage}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent h-full rounded-full animate-pulse" />
              </div>
              <style jsx>{`
                .glow-pulse {
                  animation: glow 2s ease-in-out infinite alternate;
                }
                @keyframes glow {
                  from {
                    box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
                  }
                  to {
                    box-shadow: 0 0 30px rgba(16, 185, 129, 0.8), 0 0 40px rgba(6, 182, 212, 0.4);
                  }
                }
              `}</style>
            </motion.div>
          </div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative overflow-hidden bg-gradient-to-br from-slate-900/40 via-gray-900/40 to-zinc-900/40 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50"></div>
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg mr-4">
                    <Filter className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Filter Tasks</h3>
                    <p className="text-sm text-white/60">Find exactly what you're looking for</p>
                  </div>
                </div>
                <button
                  onClick={resetFilters}
                  className="flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-2xl hover:scale-105 hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] transition-all duration-300 group"
                >
                  <RotateCcw className="h-4 w-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                  Reset All Filters
                </button>
              </div>

              {/* Filters Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Search - Takes full width on mobile, 4 columns on large screens */}
                <div className="lg:col-span-4">
                  <label className="block text-sm font-semibold text-white/80 mb-3">
                    🔍 Search Tasks
                  </label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                    <input
                      type="text"
                      placeholder="Type to search tasks..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 pr-4 py-4 w-full bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400/50 text-white placeholder-white/40 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Categories - 4 columns */}
                <div className="lg:col-span-4">
                  <label className="block text-sm font-semibold text-white/80 mb-3">
                    🏷️ Categories
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => {
                      const Icon = categoryIcons[category];
                      const isSelected = selectedCategories.includes(category);
                      return (
                        <button
                          key={category}
                          onClick={() => toggleCategory(category)}
                          className={`group flex items-center px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 hover:scale-105 border ${
                            isSelected
                              ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white border-transparent shadow-[0_0_20px_rgba(59,130,246,0.4)] scale-105'
                              : 'bg-white/8 text-white/70 border-white/15 hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5 mr-1.5 group-hover:rotate-12 transition-transform duration-200" />
                          {category}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Priority and Toggle - 4 columns */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Priority filters */}
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-3">
                      ⚡ Priority Level
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {priorities.map(priority => {
                        const isSelected = selectedPriorities.includes(priority);
                        const PriorityIcon = priorityIcons[priority as keyof typeof priorityIcons];
                        return (
                          <button
                            key={priority}
                            onClick={() => togglePriority(priority)}
                            className={`group flex items-center px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 hover:scale-105 border ${
                              isSelected
                                ? 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white border-transparent shadow-[0_0_20px_rgba(239,68,68,0.4)] scale-105'
                                : 'bg-white/8 text-white/70 border-white/15 hover:bg-gradient-to-r hover:from-orange-500/20 hover:via-red-500/20 hover:to-pink-500/20 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                            }`}
                          >
                            <PriorityIcon className="h-3.5 w-3.5 mr-1.5 group-hover:rotate-12 transition-transform duration-200" />
                            {priority}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Show completed toggle */}
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-3">
                      ✅ Display Options
                    </label>
                    <div className="flex items-center p-4 bg-white/8 border border-white/15 rounded-xl hover:bg-white/12 transition-all duration-300">
                      <input
                        type="checkbox"
                        id="showCompleted"
                        checked={showCompleted}
                        onChange={(e) => setShowCompleted(e.target.checked)}
                        className="h-5 w-5 text-green-500 focus:ring-green-400 focus:ring-offset-0 bg-white/10 border-white/30 rounded-md transition-all duration-200"
                      />
                      <label htmlFor="showCompleted" className="ml-3 text-sm font-medium text-white/80 cursor-pointer">
                        Show completed tasks
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tasks List */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-h-[800px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent pr-2"
          >
            <div className="space-y-6">
              <AnimatePresence>
                {filteredTasks.map((task, index) => {
                  const Icon = categoryIcons[task.category];
                  return (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, x: -20, scale: 0.95 }}
                      animate={{ 
                        opacity: completingTaskId === task.id ? 0.7 : 1, 
                        x: 0, 
                        scale: completingTaskId === task.id ? 0.98 : 1,
                      }}
                      exit={{ opacity: 0, x: 20, scale: 0.95 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className={`group relative overflow-hidden backdrop-blur-sm rounded-3xl border transition-all duration-500 hover:scale-[1.02] ${
                        task.completed 
                          ? 'bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-teal-900/20 border-green-400/30 shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]' 
                          : 'bg-gradient-to-br from-slate-900/40 via-gray-900/40 to-zinc-900/40 border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] hover:border-white/30'
                      } ${completingTaskId === task.id ? 'animate-pulse' : ''}`}
                    >
                      {/* Animated gradient overlay */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        task.completed 
                          ? 'bg-gradient-to-br from-green-500/10 to-emerald-500/10' 
                          : 'bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5'
                      }`}></div>
                      
                      {/* Glowing border effect */}
                      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        task.completed 
                          ? 'shadow-[inset_0_0_20px_rgba(34,197,94,0.2)]' 
                          : 'shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]'
                      }`}></div>

                      <div className="relative z-10 p-8">
                        <div className="flex items-start gap-6">
                          {/* Enhanced Checkbox */}
                          <motion.button
                            onClick={() => toggleTask(task.id)}
                            className={`flex-shrink-0 mt-1 relative group/checkbox ${
                              task.completed ? 'scale-110' : ''
                            } transition-all duration-300`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {task.completed ? (
                              <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                className="relative"
                              >
                                <CheckCircle className="h-8 w-8 text-green-400 drop-shadow-lg" />
                                <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
                              </motion.div>
                            ) : (
                              <Circle className="h-8 w-8 text-white/40 hover:text-white/70 hover:scale-110 transition-all duration-200 group-hover/checkbox:text-blue-400" />
                            )}
                          </motion.button>

                          {/* Task Content */}
                          <div className="flex-1 min-w-0">
                            {/* Header with title and badges */}
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                              <div className="flex-1 min-w-0">
                                <h3 className={`text-xl font-bold mb-2 transition-all duration-300 ${
                                  task.completed 
                                    ? 'text-white/60 line-through' 
                                    : 'text-white group-hover:text-white/90'
                                }`}>
                                  {task.title}
                                </h3>
                              </div>
                              
                              {/* Status indicator */}
                              <div className="flex-shrink-0">
                                <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                                  task.completed 
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-[0_4px_12px_rgba(34,197,94,0.4)]' 
                                    : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_4px_12px_rgba(245,158,11,0.4)]'
                                }`}>
                                  {task.completed ? '✅ Complete' : '⏳ Pending'}
                                </span>
                              </div>
                            </div>

                            {/* Category and Priority Badges */}
                            <div className="flex flex-wrap gap-3 mb-4">
                              <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r shadow-lg ${
                                task.category === 'UI' ? 'from-blue-500 via-purple-500 to-pink-500 shadow-blue-500/30' :
                                task.category === 'Email' ? 'from-green-500 via-emerald-500 to-teal-500 shadow-green-500/30' :
                                task.category === 'SEO' ? 'from-yellow-500 via-orange-500 to-red-500 shadow-orange-500/30' :
                                task.category === 'Analytics' ? 'from-purple-500 via-violet-500 to-indigo-500 shadow-purple-500/30' :
                                task.category === 'Compliance' ? 'from-gray-500 via-slate-500 to-zinc-500 shadow-gray-500/30' :
                                'from-blue-500 via-purple-500 to-pink-500 shadow-blue-500/30'
                              } text-white hover:scale-105 transition-transform duration-200`}>
                                <Icon className="h-4 w-4 mr-2" />
                                {task.category}
                              </span>
                              
                              <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                                task.priority === 'Critical' ? 'bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white shadow-red-500/40' :
                                task.priority === 'High' ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white shadow-orange-500/40' :
                                task.priority === 'Medium' ? 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white shadow-blue-500/40' :
                                'bg-gradient-to-r from-gray-500 via-slate-500 to-zinc-500 text-white shadow-gray-500/40'
                              } hover:scale-105 transition-transform duration-200`}>
                                {(() => {
                                  const PriorityIcon = priorityIcons[task.priority as keyof typeof priorityIcons];
                                  return <PriorityIcon className="h-4 w-4 mr-2" />;
                                })()}
                                {task.priority}
                              </span>
                            </div>

                            {/* Description */}
                            <p className={`text-white/80 mb-6 leading-relaxed ${
                              task.completed ? 'line-through text-white/50' : ''
                            }`}>
                              {task.description}
                            </p>

                            {/* Footer with metadata */}
                            <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
                              {task.page && (
                                <div className="flex items-center bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                                  <Globe className="h-4 w-4 mr-2 text-blue-400" />
                                  <span className="font-medium">{task.page}</span>
                                </div>
                              )}
                              
                              <div className="flex items-center bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                                <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                                <span className="font-medium">{task.estimatedHours}h estimated</span>
                              </div>
                              
                              {task.completedAt && (
                                <div className="flex items-center bg-green-500/10 px-3 py-2 rounded-lg border border-green-500/20">
                                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                                  <span className="text-green-300 font-medium">
                                    Completed {task.completedAt.toLocaleDateString()}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {filteredTasks.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
                >
                  <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl inline-block mb-6">
                    <FileText className="h-16 w-16 text-white/40 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">No tasks found</h3>
                  <p className="text-white/70 text-lg">Try adjusting your filters to see more tasks.</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={closeToast}
      />
    </div>
  );
};

export default DevTasksPage;
