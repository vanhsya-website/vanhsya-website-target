'use client';

import { Star, Zap, Shield, Globe, Users, Award } from 'lucide-react';

import ScrollAnimationComponent from './ScrollAnimationComponent';
import StaggerAnimationComponent from './StaggerAnimationComponent';

const ScrollAnimationDemo = () => {
  const features = [
    {
      icon: <Star className='w-8 h-8 text-purple-600' />,
      title: 'Premium Service',
      description: 'World-class immigration services tailored to your needs',
    },
    {
      icon: <Zap className='w-8 h-8 text-purple-600' />,
      title: 'Fast Processing',
      description: 'Quick turnaround times with efficient document handling',
    },
    {
      icon: <Shield className='w-8 h-8 text-purple-600' />,
      title: 'Secure & Reliable',
      description:
        'Your sensitive information is protected with industry standards',
    },
    {
      icon: <Globe className='w-8 h-8 text-purple-600' />,
      title: 'Global Reach',
      description: 'Supporting immigration to multiple countries worldwide',
    },
    {
      icon: <Users className='w-8 h-8 text-purple-600' />,
      title: 'Expert Team',
      description: 'Experienced professionals guiding you every step',
    },
    {
      icon: <Award className='w-8 h-8 text-purple-600' />,
      title: 'Proven Results',
      description: 'High success rate with thousands of satisfied clients',
    },
  ];

  return (
    <div className='py-20 bg-gradient-to-b from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Single Element Animation */}
        <ScrollAnimationComponent
          direction='up'
          threshold={0.2}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Scroll Animation Examples
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Experience smooth, engaging animations as you scroll through our
            content. Each section comes to life at the perfect moment.
          </p>
        </ScrollAnimationComponent>

        {/* Fade Animation */}
        <ScrollAnimationComponent direction='fade' className='mb-16'>
          <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-100'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Fade Animation
            </h3>
            <p className='text-gray-600'>
              This content fades in smoothly when it enters the viewport.
              Perfect for subtle, elegant animations that don't distract from
              the content.
            </p>
          </div>
        </ScrollAnimationComponent>

        {/* Left to Right Animation */}
        <ScrollAnimationComponent direction='left' className='mb-16'>
          <div className='bg-purple-50 rounded-2xl shadow-xl p-8 border border-purple-100'>
            <h3 className='text-2xl font-bold text-purple-900 mb-4'>
              Slide from Left
            </h3>
            <p className='text-purple-700'>
              This content slides in from the left, creating a dynamic entrance
              effect that draws attention to important information.
            </p>
          </div>
        </ScrollAnimationComponent>

        {/* Right to Left Animation */}
        <ScrollAnimationComponent direction='right' className='mb-16'>
          <div className='bg-blue-50 rounded-2xl shadow-xl p-8 border border-blue-100'>
            <h3 className='text-2xl font-bold text-blue-900 mb-4'>
              Slide from Right
            </h3>
            <p className='text-blue-700'>
              Content can also slide in from the right, providing variety in
              your animation patterns and keeping users engaged.
            </p>
          </div>
        </ScrollAnimationComponent>

        {/* Stagger Animation Grid */}
        <ScrollAnimationComponent direction='up' className='mb-8'>
          <h3 className='text-3xl font-bold text-center text-gray-900 mb-12'>
            Staggered Grid Animation
          </h3>
        </ScrollAnimationComponent>

        <StaggerAnimationComponent
          staggerDelay={150}
          direction='up'
          threshold={0.1}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100'
            >
              <div className='flex items-center justify-center w-16 h-16 bg-purple-100 rounded-lg mb-4'>
                {feature.icon}
              </div>
              <h4 className='text-xl font-semibold text-gray-900 mb-3'>
                {feature.title}
              </h4>
              <p className='text-gray-600'>{feature.description}</p>
            </div>
          ))}
        </StaggerAnimationComponent>

        {/* Configuration Examples */}
        <ScrollAnimationComponent direction='up' className='mt-20'>
          <div className='bg-gray-900 rounded-2xl shadow-2xl p-8 text-white'>
            <h3 className='text-2xl font-bold mb-6'>
              Component Usage Examples
            </h3>

            <div className='space-y-6'>
              <div className='bg-gray-800 rounded-lg p-4'>
                <h4 className='font-semibold text-purple-400 mb-2'>
                  Basic Fade Animation:
                </h4>
                <code className='text-sm text-gray-300'>
                  {`<ScrollAnimationComponent direction="fade">
  <YourContent />
</ScrollAnimationComponent>`}
                </code>
              </div>

              <div className='bg-gray-800 rounded-lg p-4'>
                <h4 className='font-semibold text-purple-400 mb-2'>
                  Custom Configuration:
                </h4>
                <code className='text-sm text-gray-300'>
                  {`<ScrollAnimationComponent 
  direction="up"
  threshold={0.3}
  triggerOnce={false}
  duration={800}
>
  <YourContent />
</ScrollAnimationComponent>`}
                </code>
              </div>

              <div className='bg-gray-800 rounded-lg p-4'>
                <h4 className='font-semibold text-purple-400 mb-2'>
                  Staggered Animation:
                </h4>
                <code className='text-sm text-gray-300'>
                  {`<StaggerAnimationComponent
  staggerDelay={100}
  direction="up"
  className="grid grid-cols-3 gap-4"
>
  {items.map(item => <Item key={item.id} />)}
</StaggerAnimationComponent>`}
                </code>
              </div>
            </div>
          </div>
        </ScrollAnimationComponent>
      </div>
    </div>
  );
};

export default ScrollAnimationDemo;
