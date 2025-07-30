'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ImageExample: React.FC = () => {
  return (
    <div className='py-12 px-4 md:px-8 lg:px-16 bg-white'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-8 text-gray-900'>
          Next.js Image Component Examples
        </h2>

        {/* Single Image Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-12'
        >
          <h3 className='text-xl font-semibold mb-4 text-gray-800'>
            Single Service Image
          </h3>
          <div className='relative w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-lg'>
            <Image
              src='/images/service1.jpg'
              alt='Service'
              width={500}
              height={300}
              className='w-full h-auto object-cover hover:scale-105 transition-transform duration-300'
              priority // Load this image with high priority
            />
          </div>
        </motion.div>

        {/* Multiple Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className='text-xl font-semibold mb-6 text-gray-800'>
            Service Images Grid
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[1, 2, 3, 4, 5, 6].map(num => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className='relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'
              >
                <Image
                  src={`/images/service${num}.jpg`}
                  alt={`Service ${num}`}
                  width={500}
                  height={300}
                  className='w-full h-48 object-cover'
                  loading='lazy' // Lazy load these images
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end'>
                  <div className='p-4 text-white'>
                    <h4 className='font-semibold'>Service {num}</h4>
                    <p className='text-sm opacity-90'>
                      Professional service description
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image with Fallback Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-12'
        >
          <h3 className='text-xl font-semibold mb-4 text-gray-800'>
            Image with Error Handling
          </h3>
          <div className='relative w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-lg bg-gray-100'>
            <Image
              src='/images/service-placeholder.jpg'
              alt='Service with fallback'
              width={500}
              height={300}
              className='w-full h-auto object-cover'
              onError={e => {
                // Show fallback content if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            {/* Fallback content */}
            <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100'>
              <div className='text-center p-6'>
                <div className='w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3'>
                  <span className='text-white text-2xl'>🖼️</span>
                </div>
                <h4 className='font-semibold text-gray-700'>
                  Image Placeholder
                </h4>
                <p className='text-sm text-gray-600'>
                  Fallback content when image is not available
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Code Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='mt-12'
        >
          <h3 className='text-xl font-semibold mb-4 text-gray-800'>
            Code Examples
          </h3>
          <div className='bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto'>
            <div className='space-y-4'>
              <div>
                <div className='text-gray-400'>{`// Basic Image Usage`}</div>
                <div className='text-blue-300'>
                  import Image from 'next/image';
                </div>
                <div className='mt-2'>
                  <span className='text-purple-300'>&lt;Image</span>
                  <br />
                  <span className='ml-4 text-yellow-300'>src=</span>
                  <span className='text-green-300'>"/images/service1.jpg"</span>
                  <br />
                  <span className='ml-4 text-yellow-300'>alt=</span>
                  <span className='text-green-300'>"Service"</span>
                  <br />
                  <span className='ml-4 text-yellow-300'>width=</span>
                  <span className='text-orange-300'>{'{500}'}</span>
                  <br />
                  <span className='ml-4 text-yellow-300'>height=</span>
                  <span className='text-orange-300'>{'{300}'}</span>
                  <br />
                  <span className='text-purple-300'>/&gt;</span>
                </div>
              </div>

              <div className='border-t border-gray-700 pt-4'>
                <div className='text-gray-400'>{`// With Responsive Classes`}</div>
                <div className='mt-2'>
                  <span className='text-purple-300'>&lt;Image</span>
                  <br />
                  <span className='ml-4 text-yellow-300'>className=</span>
                  <span className='text-green-300'>
                    "w-full h-auto object-cover"
                  </span>
                  <br />
                  <span className='ml-4 text-yellow-300'>loading=</span>
                  <span className='text-green-300'>"lazy"</span>
                  <br />
                  <span className='text-purple-300'>/&gt;</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageExample;
