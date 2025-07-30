'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, MessageSquare, FileCheck, Calculator, Sparkles, ArrowRight, CheckCircle, Star, Globe, Users } from 'lucide-react';
import Footer from '@/components/Footer';

interface ChatMessage {
  id: number;
  type: 'user' | 'ai';
  message: string;
  timestamp: Date;
}

const MigrationAssistantPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      type: 'ai',
      message: "Hi! I'm VANHSYA's AI Migration Assistant. I can help you with visa requirements, eligibility assessment, document preparation, and migration planning. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: messages.length + 1,
      type: 'user',
      message: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: messages.length + 2,
        type: 'ai',
        message: getAIResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('canada') || input.includes('express entry')) {
      return "For Canada immigration, the Express Entry system is the fastest route for skilled workers. You'll need to meet minimum requirements for language proficiency, education, and work experience. The current CRS cutoff is around 480-490 points. Would you like me to assess your eligibility?";
    } else if (input.includes('australia') || input.includes('skillselect')) {
      return "Australia's SkillSelect system uses a points-based assessment. Popular visas include Subclass 189 (Skilled Independent) and 190 (Skilled Nominated). Your occupation must be on the skilled occupation list. Minimum requirements include IELTS 6.0 and skills assessment. Shall I check your occupation eligibility?";
    } else if (input.includes('usa') || input.includes('h1b')) {
      return "For the USA, H-1B is popular for skilled workers but has an annual cap. Other options include L-1 for intracompany transfers and O-1 for extraordinary ability. The process typically takes 6-12 months. What's your educational background and work experience?";
    } else if (input.includes('documents') || input.includes('paperwork')) {
      return "Essential documents typically include: passport, educational certificates, work experience letters, IELTS/TOEFL scores, police clearance, medical exam, and financial proof. Each country has specific requirements. Which country are you targeting?";
    } else if (input.includes('eligibility') || input.includes('qualify')) {
      return "I can assess your eligibility based on age, education, work experience, language skills, and other factors. Please share: your age, highest education, years of work experience, and IELTS scores (if taken). Which country interests you most?";
    } else {
      return "I understand you're looking for migration assistance. I can help with eligibility assessment, document requirements, visa pathways, and application strategies. Please tell me more about your background and target country, and I'll provide personalized guidance.";
    }
  };

  const quickActions = [
    { icon: Calculator, text: "Check Eligibility", color: "purple" },
    { icon: FileCheck, text: "Document Checklist", color: "blue" },
    { icon: Globe, text: "Country Comparison", color: "green" },
    { icon: Star, text: "Success Stories", color: "yellow" }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced algorithms analyze your profile and provide personalized recommendations"
    },
    {
      icon: Globe,
      title: "Multi-Country Expertise",
      description: "Expert knowledge of immigration policies for 20+ countries"
    },
    {
      icon: CheckCircle,
      title: "Real-Time Updates",
      description: "Stay informed about policy changes and new opportunities"
    },
    {
      icon: Users,
      title: "Success Tracking",
      description: "Monitor your application progress with intelligent insights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm mb-6">
              <Brain className="w-4 h-4" />
              AI-Powered Migration Assistant
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Your Personal
              </span>
              <br />
              <span className="text-white">Migration Expert</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Get instant, AI-powered guidance for your immigration journey. Our intelligent assistant provides 
              personalized advice, document requirements, and step-by-step planning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chat Interface */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Chat with AI Migration Assistant
              </h2>
              <p className="text-slate-300">
                Ask about visa requirements, eligibility, documents, or any migration-related questions
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {quickActions.map((action, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setInputMessage(`Tell me about ${action.text.toLowerCase()}`)}
                  className={`p-4 rounded-xl bg-${action.color}-600/20 border border-${action.color}-500/30 text-${action.color}-300 hover:bg-${action.color}-600/30 transition-all duration-300 flex flex-col items-center gap-2`}
                >
                  <action.icon className="w-6 h-6" />
                  <span className="text-sm font-medium">{action.text}</span>
                </motion.button>
              ))}
            </div>

            {/* Chat Messages */}
            <div className="bg-slate-900/50 rounded-2xl p-6 h-96 overflow-y-auto mb-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-slate-200 border border-white/20'
                    }`}
                  >
                    <p className="text-sm">{message.message}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-slate-200 border border-white/20 px-4 py-3 rounded-2xl">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="flex gap-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about visa requirements, eligibility, or anything migration-related..."
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSendMessage}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Send
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Migration Journey?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get personalized guidance from our AI assistant and take the first step towards your new life abroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                View Success Stories
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MigrationAssistantPage;
