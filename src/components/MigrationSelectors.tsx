'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { nationalities, migrationGoals } from '@/lib/data/migrationCountries';

interface SelectorsProps {
  selectedNationality: string;
  selectedGoal: string;
  onNationalityChange: (nationality: string) => void;
  onGoalChange: (goal: string) => void;
}

export default function MigrationSelectors({ 
  selectedNationality, 
  selectedGoal, 
  onNationalityChange, 
  onGoalChange 
}: SelectorsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Find Your Perfect Migration Path
          </h2>
          <p className="text-xl text-white/80">
            Tell us about yourself and we'll show you the best destinations for your profile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nationality Selector */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <label className="block text-lg font-medium text-white mb-4">
              🌍 Where are you from?
            </label>
            <div className="relative">
              <select
                value={selectedNationality}
                onChange={(e) => onNationalityChange(e.target.value)}
                className="w-full p-4 bg-white/10 border border-white/30 rounded-xl text-white text-lg appearance-none focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all"
              >
                <option value="" className="bg-gray-800 text-white">
                  Select Your Nationality
                </option>
                {nationalities.map((nationality) => (
                  <option
                    key={nationality.code}
                    value={nationality.code}
                    className="bg-gray-800 text-white"
                  >
                    {nationality.flag} {nationality.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60 pointer-events-none" />
            </div>
            {selectedNationality && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 text-sm text-green-300"
              >
                ✓ Great! We'll show you the best options for {nationalities.find(n => n.code === selectedNationality)?.name} citizens
              </motion.p>
            )}
          </div>

          {/* Migration Goal Selector */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <label className="block text-lg font-medium text-white mb-4">
              🎯 What's your migration goal?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {migrationGoals.map((goal) => (
                <button
                  key={goal.code}
                  onClick={() => onGoalChange(goal.code)}
                  className={`p-4 rounded-xl text-left transition-all ${
                    selectedGoal === goal.code
                      ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <div className="text-2xl mb-2">{goal.icon}</div>
                  <div className="font-medium text-sm">{goal.name}</div>
                  <div className="text-xs opacity-80 mt-1">{goal.description}</div>
                </button>
              ))}
            </div>
            {selectedGoal && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 text-sm text-green-300"
              >
                ✓ Perfect! We'll focus on {migrationGoals.find(g => g.code === selectedGoal)?.name.toLowerCase()} opportunities
              </motion.p>
            )}
          </div>
        </div>

        {/* Help Text */}
        {(!selectedNationality || !selectedGoal) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-6"
          >
            <p className="text-white/60">
              👆 Please select both your nationality and migration goal to see personalized recommendations
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
