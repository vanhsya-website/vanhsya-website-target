'use client';

import useSWR from 'swr';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin, Calendar, FileText } from 'lucide-react';
import Image from 'next/image';

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface Testimonial {
  id: number;
  text: string;
  clientName: string;
  country: string;
  visaType: string;
  rating: number;
  date: string;
  image: string;
}

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden'
    >
      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      {/* Quote icon */}
      <div className='relative z-10'>
        <Quote className='w-8 h-8 text-purple-400 mb-4' />

        {/* Rating stars */}
        <div className='flex gap-1 mb-4'>
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className='w-4 h-4 text-yellow-400 fill-current' />
          ))}
        </div>

        {/* Testimonial text */}
        <p className='text-slate-200 leading-relaxed mb-6 italic'>
          "{testimonial.text}"
        </p>

        {/* Client info */}
        <div className='flex items-start gap-4'>
          {/* Client image */}
          <div className='relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center'>
            <Image
              src={testimonial.image}
              alt={testimonial.clientName}
              width={48}
              height={48}
              className='object-cover'
              onError={e => {
                // Fallback to initials if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const initials = testimonial.clientName
                  .split(' ')
                  .map(n => n[0])
                  .join('');
                target.parentElement!.innerHTML = `<span class="text-white font-semibold">${initials}</span>`;
              }}
            />
          </div>

          {/* Client details */}
          <div className='flex-1'>
            <h4 className='text-white font-semibold'>
              {testimonial.clientName}
            </h4>

            <div className='flex items-center gap-2 mt-1 text-sm text-slate-400'>
              <MapPin className='w-3 h-3' />
              <span>{testimonial.country}</span>
            </div>

            <div className='flex items-center gap-4 mt-2 text-xs text-slate-500'>
              <div className='flex items-center gap-1'>
                <FileText className='w-3 h-3' />
                <span>{testimonial.visaType}</span>
              </div>

              <div className='flex items-center gap-1'>
                <Calendar className='w-3 h-3' />
                <span>{new Date(testimonial.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const LoadingSkeleton = () => (
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className='bg-white/5 border border-white/10 rounded-2xl p-8 animate-pulse'
      >
        <div className='w-8 h-8 bg-white/20 rounded mb-4' />
        <div className='flex gap-1 mb-4'>
          {[...Array(5)].map((_, j) => (
            <div key={j} className='w-4 h-4 bg-white/20 rounded' />
          ))}
        </div>
        <div className='space-y-2 mb-6'>
          <div className='h-4 bg-white/20 rounded w-full' />
          <div className='h-4 bg-white/20 rounded w-3/4' />
          <div className='h-4 bg-white/20 rounded w-1/2' />
        </div>
        <div className='flex items-start gap-4'>
          <div className='w-12 h-12 bg-white/20 rounded-full' />
          <div className='flex-1 space-y-2'>
            <div className='h-4 bg-white/20 rounded w-1/2' />
            <div className='h-3 bg-white/20 rounded w-3/4' />
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ErrorState = () => (
  <div className='text-center py-12'>
    <div className='bg-red-500/10 border border-red-500/20 rounded-xl p-8 max-w-md mx-auto'>
      <div className='w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
        <Quote className='w-8 h-8 text-red-400' />
      </div>
      <h3 className='text-white font-semibold mb-2'>
        Unable to Load Testimonials
      </h3>
      <p className='text-slate-400 text-sm'>
        We're having trouble loading client testimonials right now. Please try
        again later.
      </p>
    </div>
  </div>
);

const Testimonials = () => {
  const { data, error, isLoading } = useSWR<Testimonial[]>(
    '/api/testimonials',
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      refreshInterval: 0, // No auto-refresh for testimonials
    }
  );

  return (
    <section className='py-24 px-4 relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]' />

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6'>
            Client Success Stories
          </h2>
          <p className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'>
            Real experiences from real people who achieved their migration
            dreams with VANHSYA Global. Your success story could be next.
          </p>
        </motion.div>

        {/* Testimonials content */}
        {error ? (
          <ErrorState />
        ) : isLoading ? (
          <LoadingSkeleton />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {data?.map((testimonial: Testimonial, index: number) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        )}

        {/* Call to action */}
        {data && !error && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='text-center mt-16'
          >
            <p className='text-slate-300 mb-6'>
              Ready to start your own success story?
            </p>
            <button className='bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
              Get Your Free Consultation
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
