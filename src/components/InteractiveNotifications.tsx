'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Users, Clock, Sparkles } from 'lucide-react';

interface NotificationData {
  id: string;
  type: 'success' | 'info' | 'celebration';
  message: string;
  subtitle?: string;
  icon: React.ElementType;
  duration?: number;
}

const notifications: NotificationData[] = [
  {
    id: '1',
    type: 'success',
    message: 'Sarah from India just got approved!',
    subtitle: 'Express Entry - Canada PR',
    icon: CheckCircle,
    duration: 5000,
  },
  {
    id: '2',
    type: 'info',
    message: '127 people are currently using AI tools',
    subtitle: 'Live activity on platform',
    icon: Users,
    duration: 4000,
  },
  {
    id: '3',
    type: 'celebration',
    message: 'Michael achieved his dream!',
    subtitle: 'Skilled Migration - Australia',
    icon: Sparkles,
    duration: 5000,
  },
  {
    id: '4',
    type: 'info',
    message: 'Next visa batch processing in 2 hours',
    subtitle: 'Stay tuned for updates',
    icon: Clock,
    duration: 6000,
  },
];

interface NotificationProps {
  notification: NotificationData;
  onClose: (id: string) => void;
  index: number;
}

const Notification: React.FC<NotificationProps> = ({
  notification,
  onClose,
  index,
}) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const duration = notification.duration || 5000;
    const interval = 50;
    const decrement = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev <= 0) {
          onClose(notification.id);
          return 0;
        }
        return prev - decrement;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [notification.id, notification.duration, onClose]);

  const getColors = () => {
    switch (notification.type) {
      case 'success':
        return {
          bg: 'from-emerald-500/20 to-green-500/20',
          border: 'border-emerald-500/30',
          icon: 'text-emerald-400',
          progress: 'bg-emerald-500',
        };
      case 'celebration':
        return {
          bg: 'from-gold-500/20 to-yellow-500/20',
          border: 'border-gold-500/30',
          icon: 'text-gold-400',
          progress: 'bg-gold-500',
        };
      default:
        return {
          bg: 'from-blue-500/20 to-indigo-500/20',
          border: 'border-blue-500/30',
          icon: 'text-blue-400',
          progress: 'bg-blue-500',
        };
    }
  };

  const colors = getColors();
  const Icon = notification.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.8 }}
      transition={{
        type: 'spring',
        bounce: 0.3,
        delay: index * 0.1,
      }}
      style={{ zIndex: 1000 - index }}
      className={`relative bg-gradient-to-r ${colors.bg} backdrop-blur-xl border ${colors.border} rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 max-w-sm`}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      {/* Progress bar */}
      <div className='absolute top-0 left-0 h-1 bg-slate-700/50 rounded-t-xl overflow-hidden w-full'>
        <motion.div
          className={`h-full ${colors.progress}`}
          style={{ width: `${progress}%` }}
          transition={{ ease: 'linear' }}
        />
      </div>

      <div className='flex items-start space-x-3'>
        {/* Icon */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: notification.type === 'celebration' ? [0, 10, -10, 0] : 0,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className={`${colors.icon} flex-shrink-0 mt-1`}
        >
          <Icon className='w-5 h-5' />
        </motion.div>

        {/* Content */}
        <div className='flex-1 min-w-0'>
          <p className='text-white font-semibold text-sm leading-tight'>
            {notification.message}
          </p>
          {notification.subtitle && (
            <p className='text-slate-300 text-xs mt-1'>
              {notification.subtitle}
            </p>
          )}
        </div>

        {/* Close button */}
        <button
          onClick={() => onClose(notification.id)}
          className='text-slate-400 hover:text-white transition-colors flex-shrink-0'
        >
          <X className='w-4 h-4' />
        </button>
      </div>

      {/* Floating particles for celebration type */}
      {notification.type === 'celebration' && (
        <div className='absolute inset-0 pointer-events-none'>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gold-400 rounded-full'
              animate={{
                y: [0, -20, -40],
                x: [0, Math.random() * 20 - 10, Math.random() * 40 - 20],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeOut',
              }}
              style={{
                left: `${30 + i * 20}%`,
                top: '20%',
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

const InteractiveNotifications: React.FC = () => {
  const [activeNotifications, setActiveNotifications] = useState<
    NotificationData[]
  >([]);
  const [notificationIndex, setNotificationIndex] = useState(0);

  useEffect(() => {
    const showNotification = () => {
      if (notifications.length === 0) return;

      const notification =
        notifications[notificationIndex % notifications.length];
      setActiveNotifications(prev => [...prev, notification]);
      setNotificationIndex(prev => prev + 1);
    };

    // Show first notification after 3 seconds
    const initialTimer = setTimeout(showNotification, 3000);

    // Then show notifications every 8-12 seconds
    const interval = setInterval(
      () => {
        showNotification();
      },
      Math.random() * 4000 + 8000
    ); // 8-12 seconds

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [notificationIndex]);

  const handleCloseNotification = (id: string) => {
    setActiveNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  return (
    <div className='fixed top-24 right-6 z-50 space-y-3 max-w-sm'>
      <AnimatePresence mode='popLayout'>
        {activeNotifications.map((notification, index) => (
          <Notification
            key={`${notification.id}-${Date.now()}`}
            notification={notification}
            onClose={handleCloseNotification}
            index={index}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveNotifications;
