'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Plane,
  GraduationCap,
  Briefcase,
  Heart,
  Home,
  Globe2,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Briefcase,
    title: 'Work Visa',
    description:
      'Professional work permits for skilled workers seeking employment opportunities abroad.',
    gradient: 'card-purple',
    features: [
      'Express Processing',
      'Job Placement Support',
      'Document Assistance',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Study Visa',
    description:
      'Student visas for pursuing higher education in top universities worldwide.',
    gradient: 'card-pink',
    features: [
      'University Selection',
      'Scholarship Guidance',
      'Accommodation Support',
    ],
  },
  {
    icon: Plane,
    title: 'Tourist Visa',
    description:
      'Travel visas for leisure, business trips, and exploring new destinations.',
    gradient: 'card-cyan',
    features: [
      'Fast Track Processing',
      'Group Applications',
      'Travel Insurance',
    ],
  },
  {
    icon: Heart,
    title: 'Family Visa',
    description:
      'Reunite with your loved ones through family sponsorship programs.',
    gradient: 'card-green',
    features: ['Spouse Visa', 'Parent Sponsorship', 'Child Immigration'],
  },
  {
    icon: Home,
    title: 'Permanent Residency',
    description:
      'Secure your future with permanent residence in your chosen country.',
    gradient: 'card-orange',
    features: ['PR Processing', 'Investment Programs', 'Citizenship Pathways'],
  },
  {
    icon: Globe2,
    title: 'Business Visa',
    description:
      'Expand your business globally with investor and entrepreneur visas.',
    gradient: 'card-purple',
    features: ['Investment Visa', 'Entrepreneur Programs', 'Business Setup'],
  },
];

export default function Services() {
  return (
    <section className='py-24 relative overflow-hidden'>
      {/* Enhanced Background */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 rounded-full blur-3xl'></div>
      </div>

      <div className='vanhsya-container relative z-10'>
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className='mb-6'
          >
            <span className='vanhsya-badge-success'>
              <Globe2 className='w-4 h-4' />
              Complete Migration Solutions
            </span>
          </motion.div>

          <h2 className='vanhsya-heading text-5xl md:text-6xl mb-6'>
            Our Premium Services
          </h2>
          <p className='vanhsya-subheading text-xl max-w-3xl mx-auto'>
            Comprehensive immigration services tailored to your unique journey.
            From visa applications to settlement support - we've got you
            covered.
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className='vanhsya-service-card group'
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow'>
                  <IconComponent className='w-8 h-8 text-white' />
                </div>

                <h3 className='text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors'>
                  {service.title}
                </h3>

                <p className='text-slate-600 mb-6 leading-relaxed'>
                  {service.description}
                </p>

                <ul className='space-y-3 mb-8'>
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className='flex items-center gap-3 text-slate-700 font-medium'
                    >
                      <div className='w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full' />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}
                  className='vanhsya-btn-primary w-full justify-center group'
                >
                  Learn More
                  <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className='text-center mt-20'
        >
          <div className='vanhsya-card max-w-2xl mx-auto text-center'>
            <h3 className='vanhsya-heading text-3xl mb-4'>
              Not Sure Which Service You Need?
            </h3>
            <p className='vanhsya-subheading text-lg mb-8'>
              Our expert consultants will assess your profile and recommend the
              best immigration pathway for your specific situation.
            </p>
            <Link href='/consultation' className='vanhsya-btn-primary group'>
              Get Free Consultation
              <ArrowRight className='w-5 h-5 transition-transform group-hover:translate-x-1' />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
