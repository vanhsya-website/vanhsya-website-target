'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Bell, User, LogOut, ChevronRight } from 'lucide-react';

interface EnhancedMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnhancedMobileMenu: React.FC<EnhancedMobileMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const menuItems = [
    {
      title: 'Services',
      icon: '🚀',
      submenu: [
        {
          name: 'AI Migration Assistant',
          href: '/ai-tools/migration-assistant',
          icon: '🤖',
        },
        {
          name: 'Document Wizard',
          href: '/ai-tools/document-wizard',
          icon: '📄',
        },
        { name: 'ScamShield AI', href: '/scam-detector', icon: '🛡️' },
        {
          name: 'Eligibility Calculator',
          href: '/ai-tools/eligibility-calculator',
          icon: '🧮',
        },
      ],
    },
    {
      title: 'Countries',
      icon: '🌍',
      submenu: [
        { name: 'Canada Immigration', href: '/countries/canada', icon: '🇨🇦' },
        { name: 'Australia Visa', href: '/countries/australia', icon: '🇦🇺' },
        { name: 'USA Green Card', href: '/countries/usa', icon: '🇺🇸' },
        { name: 'UK Opportunities', href: '/countries/uk', icon: '🇬🇧' },
      ],
    },
    {
      title: 'Resources',
      icon: '📚',
      submenu: [
        { name: 'Success Stories', href: '/success-stories', icon: '⭐' },
        { name: 'Blog & Guides', href: '/blog', icon: '📖' },
        { name: 'FAQ', href: '/faq', icon: '❓' },
        { name: 'Contact Support', href: '/contact', icon: '💬' },
      ],
    },
  ];

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40'
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            variants={menuVariants}
            initial='closed'
            animate='open'
            exit='closed'
            className='fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-slate-900 to-slate-950 border-l border-slate-700 z-50 overflow-y-auto'
          >
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className='p-6 border-b border-slate-700'
            >
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center'>
                    <span className='text-white font-bold'>V</span>
                  </div>
                  <div>
                    <h3 className='text-white font-bold'>VANHSYA</h3>
                    <p className='text-slate-400 text-xs'>
                      AI Migration Platform
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className='p-2 hover:bg-slate-800 rounded-lg transition-colors'
                >
                  <LogOut className='w-5 h-5 text-slate-400' />
                </button>
              </div>
            </motion.div>

            {/* Navigation Items */}
            <div className='p-6 space-y-2'>
              {menuItems.map(item => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className='space-y-2'
                >
                  <button
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === item.title ? null : item.title
                      )
                    }
                    className='flex items-center justify-between w-full p-3 text-left text-white hover:bg-slate-800 rounded-lg transition-colors'
                  >
                    <div className='flex items-center space-x-3'>
                      <span className='text-xl'>{item.icon}</span>
                      <span className='font-medium'>{item.title}</span>
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedSection === item.title ? 90 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className='w-4 h-4 text-slate-400' />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedSection === item.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='ml-6 space-y-1 overflow-hidden'
                      >
                        {item.submenu.map((subitem, subIndex) => (
                          <motion.a
                            key={subitem.name}
                            href={subitem.href}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: subIndex * 0.1 }}
                            className='flex items-center space-x-3 p-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors'
                            onClick={onClose}
                          >
                            <span className='text-sm'>{subitem.icon}</span>
                            <span className='text-sm'>{subitem.name}</span>
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div
              variants={itemVariants}
              className='p-6 border-t border-slate-700 mt-auto'
            >
              <div className='space-y-3'>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full flex items-center justify-center space-x-2 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium'
                >
                  <User className='w-4 h-4' />
                  <span>Get Started</span>
                </motion.button>

                <div className='flex space-x-2'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='flex-1 flex items-center justify-center p-2 bg-slate-800 text-slate-300 rounded-lg'
                  >
                    <Settings className='w-4 h-4' />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='flex-1 flex items-center justify-center p-2 bg-slate-800 text-slate-300 rounded-lg'
                  >
                    <Bell className='w-4 h-4' />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnhancedMobileMenu;
