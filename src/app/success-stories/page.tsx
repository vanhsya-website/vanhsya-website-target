'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaStar, 
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaClock,
  FaUser,
  FaCamera,
  FaUpload,
  FaPlus,
  FaCheck,
  FaHeart,
  FaShare,
  FaCalendar,
  FaGraduationCap,
  FaBriefcase,
  FaPassport
} from 'react-icons/fa';
import Footer from '@/components/Footer';
import BackNavigation from '@/components/BackNavigation';

interface SuccessStory {
  id: string;
  name: string;
  location: string;
  visaType: string;
  category: string;
  timeline: string;
  image?: string;
  story: string;
  outcome: string;
  rating: number;
  datePosted: string;
  verified: boolean;
  likes: number;
}

// Fresh start - no sample stories, ready for real user submissions
const initialStories: SuccessStory[] = [];

const categories = ['All', 'Work', 'Study', 'Family', 'Business', 'Tourism'];

export default function SuccessStoriesPage() {
  const [stories, setStories] = useState<SuccessStory[]>(initialStories);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    visaType: '',
    category: 'Work',
    timeline: '',
    story: '',
    outcome: '',
    rating: 5
  });
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const filteredStories = stories.filter(story => 
    activeCategory === 'All' || story.category === activeCategory
  );

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitStory = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newStory: SuccessStory = {
      id: Date.now().toString(),
      name: formData.name,
      location: formData.location,
      visaType: formData.visaType,
      category: formData.category,
      timeline: formData.timeline,
      story: formData.story,
      outcome: formData.outcome,
      rating: formData.rating,
      image: uploadedImage || undefined,
      datePosted: new Date().toISOString().split('T')[0],
      verified: false,
      likes: 0
    };

    setStories(prev => [newStory, ...prev]);
    setShowSubmissionForm(false);
    
    // Reset form
    setFormData({
      name: '',
      location: '',
      visaType: '',
      category: 'Work',
      timeline: '',
      story: '',
      outcome: '',
      rating: 5
    });
    setUploadedImage(null);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Work': return FaBriefcase;
      case 'Study': return FaGraduationCap;
      case 'Family': return FaHeart;
      case 'Business': return FaBriefcase;
      case 'Tourism': return FaPassport;
      default: return FaUser;
    }
  };

  const likeStory = (storyId: string) => {
    setStories(prev => prev.map(story => 
      story.id === storyId 
        ? { ...story, likes: story.likes + 1 }
        : story
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BackNavigation />
      
      {/* Compact Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Real Dreams. Real Visas. Real Success.
            </h1>
            <p className="max-w-3xl mx-auto mb-8 text-xl text-blue-100">
              From Application to Arrival—We Turn Journeys into Victories
            </p>
            
            {/* Quick Stats */}
            <div className="flex justify-center mb-8 space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{stories.length}</div>
                <div className="text-sm text-blue-100">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-blue-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-blue-100">Countries</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSubmissionForm(true)}
              className="inline-flex items-center gap-2 px-8 py-3 font-bold text-blue-600 transition-all duration-300 bg-white rounded-xl hover:bg-gray-100"
            >
              <FaPlus />
              Claim Your Spot on the Board
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = getCategoryIcon(category);
              return (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="text-sm" />
                  {category}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Grid - Compact */}
      <section className="py-12">
        <div className="max-w-6xl px-4 mx-auto">
          {filteredStories.length === 0 ? (
            /* Empty State - Fresh Start Hero */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                  Your story could be #1. Start it with VANHSYA.
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                  Authentic journeys from people who trusted AI precision and human care.
                  Ready to add yours?
                </p>
                
                {/* Hero Stats */}
                <div className="flex justify-center items-center gap-8 mb-10 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    98.7% Accuracy
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    50+ Countries
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    100% Transparency
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowSubmissionForm(true)}
                    className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                  >
                    <FaPlus />
                    Start Writing Story #1
                  </motion.button>
                  
                  <motion.a
                    href="/consultation"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-4 text-lg font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-all duration-300"
                  >
                    <FaPassport />
                    Unlock Your Approval Path
                  </motion.a>
                </div>

                {/* Trust Badge */}
                <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                  <p className="text-sm text-gray-600 mb-2">World's #1 AI Migration Platform</p>
                  <p className="text-lg font-semibold text-gray-800">Military-Grade Security. Human-Grade Empathy.</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden transition-all duration-300 bg-white shadow-md cursor-pointer rounded-xl hover:shadow-lg group"
                onClick={() => setSelectedStory(story)}
              >
                {/* Story Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {story.image ? (
                        <img
                          src={story.image}
                          alt={story.name}
                          className="object-cover w-12 h-12 rounded-full"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                          <FaUser className="text-white" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-gray-900">{story.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <FaMapMarkerAlt className="text-xs" />
                          {story.location}
                        </div>
                      </div>
                    </div>
                    {story.verified && (
                      <div className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-full">
                        <FaCheck className="text-xs" />
                        Verified
                      </div>
                    )}
                  </div>

                  {/* Visa Type Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-sm font-medium text-blue-700 rounded-full bg-blue-50">
                    {React.createElement(getCategoryIcon(story.category), { className: "text-xs" })}
                    {story.visaType}
                  </div>

                  {/* Story Preview */}
                  <div className="mb-4">
                    <FaQuoteLeft className="mb-2 text-lg text-blue-200" />
                    <p className="text-sm leading-relaxed text-gray-700 line-clamp-3">
                      {story.story}
                    </p>
                  </div>

                  {/* Story Info */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <FaClock className="text-xs" />
                      {story.timeline}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendar className="text-xs" />
                      {story.datePosted}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-sm ${
                            i < story.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({story.rating}/5)</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          likeStory(story.id);
                        }}
                        className="flex items-center gap-1 text-gray-600 transition-colors hover:text-red-500"
                      >
                        <FaHeart className="text-sm" />
                        <span className="text-sm">{story.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          )}
        </div>
      </section>

      {/* Submit Story Modal */}
      <AnimatePresence>
        {showSubmissionForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={() => setShowSubmissionForm(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Share Your Success Story</h2>
                  <button
                    onClick={() => setShowSubmissionForm(false)}
                    className="text-2xl text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmitStory} className="space-y-6">
                  {/* Photo Upload */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Your Photo (Optional)
                    </label>
                    <div className="flex items-center gap-4">
                      {uploadedImage ? (
                        <img
                          src={uploadedImage}
                          alt="Preview"
                          className="object-cover w-16 h-16 rounded-full"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
                          <FaCamera className="text-gray-400" />
                        </div>
                      )}
                      <label className="flex items-center gap-2 px-4 py-2 text-blue-600 transition-colors rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
                        <FaUpload />
                        Upload Photo
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="City, Country"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Visa Type *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.visaType}
                        onChange={(e) => setFormData({...formData, visaType: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., Work Visa, Study Visa"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Category *
                      </label>
                      <select
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {categories.filter(cat => cat !== 'All').map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Timeline *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.timeline}
                        onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., 3 months, 6 weeks"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Rating *
                      </label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            type="button"
                            onClick={() => setFormData({...formData, rating})}
                            className={`text-2xl ${
                              rating <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                            } hover:text-yellow-400 transition-colors`}
                          >
                            <FaStar />
                          </button>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">({formData.rating}/5)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Your Success Story *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.story}
                      onChange={(e) => setFormData({...formData, story: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Share your experience with VANHSYA. How did we help you achieve your immigration goals?"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Current Outcome *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.outcome}
                      onChange={(e) => setFormData({...formData, outcome: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Successfully working in Dubai as Software Engineer"
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setShowSubmissionForm(false)}
                      className="flex-1 px-6 py-3 text-gray-700 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex items-center justify-center flex-1 gap-2 px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                      <FaCheck />
                      Submit Story
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Story Detail Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {selectedStory.image ? (
                      <img
                        src={selectedStory.image}
                        alt={selectedStory.name}
                        className="object-cover w-16 h-16 rounded-full"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                        <FaUser className="text-xl text-white" />
                      </div>
                    )}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedStory.name}</h2>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt />
                        {selectedStory.location}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                          {selectedStory.visaType}
                        </div>
                        {selectedStory.verified && (
                          <div className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-full">
                            <FaCheck className="text-xs" />
                            Verified
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="text-2xl text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="p-6 rounded-lg bg-gray-50">
                    <FaQuoteLeft className="mb-3 text-2xl text-blue-300" />
                    <p className="text-lg leading-relaxed text-gray-700">
                      {selectedStory.story}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="mb-2 font-semibold text-gray-900">Timeline</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaClock />
                        {selectedStory.timeline}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="mb-2 font-semibold text-gray-900">Rating</h3>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`${
                              i < selectedStory.rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-gray-600">({selectedStory.rating}/5)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-gray-900">Current Status</h3>
                    <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                      <p className="font-medium text-green-800">{selectedStory.outcome}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-gray-500">
                      Posted on {selectedStory.datePosted}
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => likeStory(selectedStory.id)}
                        className="flex items-center gap-2 text-gray-600 transition-colors hover:text-red-500"
                      >
                        <FaHeart />
                        <span>{selectedStory.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-500">
                        <FaShare />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
