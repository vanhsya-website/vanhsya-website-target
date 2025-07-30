'use client';
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaExclamationTriangle,
  FaRedo,
  FaHome,
  FaEnvelope,
} from 'react-icons/fa';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<
  {
    children: React.ReactNode;
    fallback?: React.ComponentType<{ error?: Error }>;
  },
  ErrorBoundaryState
> {
  constructor(props: {
    children: React.ReactNode;
    fallback?: React.ComponentType<{ error?: Error }>;
  }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);

    // Log error to monitoring service (replace with your actual service)
    if (typeof window !== 'undefined') {
      // Example: Send to error tracking service
      console.error('Error logged for monitoring:', {
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
      });
    }
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} />;
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  error?: Error;
  resetError?: () => void;
}

const DefaultErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetError,
}) => {
  const handleRetry = () => {
    if (resetError) {
      resetError();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center px-4'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className='max-w-md w-full text-center'
      >
        <div className='bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6'>
          <FaExclamationTriangle className='text-3xl text-red-600' />
        </div>

        <h1 className='text-2xl font-bold text-gray-800 mb-4'>
          Oops! Something went wrong
        </h1>

        <p className='text-gray-600 mb-6'>
          We apologize for the inconvenience. Our team has been notified and is
          working to fix this issue.
        </p>

        {process.env.NODE_ENV === 'development' && error && (
          <details className='mb-6 text-left bg-gray-100 p-4 rounded-lg'>
            <summary className='cursor-pointer font-medium text-gray-700 mb-2'>
              Error Details (Development)
            </summary>
            <pre className='text-xs text-red-600 overflow-auto'>
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <motion.button
            onClick={handleRetry}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='btn-primary flex items-center justify-center'
          >
            <FaRedo className='mr-2' />
            Try Again
          </motion.button>

          <motion.a
            href='/'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='btn-outline flex items-center justify-center'
          >
            <FaHome className='mr-2' />
            Go Home
          </motion.a>
        </div>

        <div className='mt-8 pt-6 border-t border-gray-200'>
          <p className='text-sm text-gray-500 mb-2'>
            Need immediate assistance?
          </p>
          <a
            href='mailto:support@vanhsya.com'
            className='text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center'
          >
            <FaEnvelope className='mr-2' />
            Contact Support
          </a>
        </div>
      </motion.div>
    </div>
  );
};

interface NotFoundPageProps {
  title?: string;
  message?: string;
  showHomeButton?: boolean;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({
  title = 'Page Not Found',
  message = "The page you're looking for doesn't exist or has been moved.",
  showHomeButton = true,
}) => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className='max-w-md w-full text-center'
      >
        <div className='text-8xl font-bold text-blue-600 mb-4'>404</div>

        <h1 className='text-2xl font-bold text-gray-800 mb-4'>{title}</h1>

        <p className='text-gray-600 mb-8'>{message}</p>

        {showHomeButton && (
          <motion.a
            href='/'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='btn-primary inline-flex items-center'
          >
            <FaHome className='mr-2' />
            Return Home
          </motion.a>
        )}
      </motion.div>
    </div>
  );
};

interface FormErrorProps {
  message: string;
  onRetry?: () => void;
}

const FormError: React.FC<FormErrorProps> = ({ message, onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className='bg-red-50 border border-red-200 rounded-lg p-4 mb-4'
    >
      <div className='flex items-start'>
        <FaExclamationTriangle className='text-red-500 mt-0.5 mr-3 flex-shrink-0' />
        <div className='flex-1'>
          <p className='text-red-700 text-sm'>{message}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className='text-red-600 hover:text-red-700 text-sm font-medium mt-2 underline'
            >
              Try again
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

interface NetworkErrorProps {
  onRetry?: () => void;
}

const NetworkError: React.FC<NetworkErrorProps> = ({ onRetry }) => {
  return (
    <div className='text-center py-12'>
      <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
        <FaExclamationTriangle className='text-2xl text-orange-600' />
      </div>

      <h3 className='text-lg font-semibold text-gray-800 mb-2'>
        Connection Problem
      </h3>

      <p className='text-gray-600 mb-6'>
        Please check your internet connection and try again.
      </p>

      {onRetry && (
        <motion.button
          onClick={onRetry}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='btn-primary'
        >
          <FaRedo className='mr-2' />
          Retry
        </motion.button>
      )}
    </div>
  );
};

export {
  ErrorBoundary,
  DefaultErrorFallback,
  NotFoundPage,
  FormError,
  NetworkError,
};
