'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  UserIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  GlobeAmericasIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  XMarkIcon,
  MicrophoneIcon,
  PhotoIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  metadata?: {
    suggestions?: string[];
    documents?: string[];
    links?: { text: string; url: string }[];
    quickActions?: { text: string; action: string }[];
  };
}

interface ConversationContext {
  userProfile: {
    name?: string;
    targetCountry?: string;
    currentStage?: string;
    priorities?: string[];
  };
  conversationStage:
    | 'greeting'
    | 'assessment'
    | 'planning'
    | 'documents'
    | 'application'
    | 'followup';
  detectedIntents: string[];
}

const quickStartTopics = [
  {
    icon: GlobeAmericasIcon,
    text: 'Which country is best for me?',
    category: 'assessment',
  },
  {
    icon: DocumentTextIcon,
    text: 'What documents do I need?',
    category: 'documents',
  },
  {
    icon: ClockIcon,
    text: 'How long will the process take?',
    category: 'timeline',
  },
  {
    icon: AcademicCapIcon,
    text: 'Education credential assessment',
    category: 'credentials',
  },
  {
    icon: BriefcaseIcon,
    text: 'Job market and opportunities',
    category: 'employment',
  },
  {
    icon: CheckCircleIcon,
    text: 'Check my eligibility',
    category: 'eligibility',
  },
];

const predefinedResponses = {
  greeting: {
    triggers: ['hello', 'hi', 'hey', 'start', 'help'],
    response:
      "Hello! I'm VanHologram, your AI immigration consultant. I'm here to guide you through every step of your immigration journey. What would you like to explore today?",
    suggestions: [
      'Assess my eligibility',
      'Compare countries',
      'Document requirements',
      'Application timeline',
    ],
  },
  assessment: {
    triggers: ['eligibility', 'qualify', 'assess', 'evaluate', 'score'],
    response:
      "I'd be happy to assess your immigration prospects! Let me ask you a few quick questions to provide personalized guidance. What's your highest level of education?",
    suggestions: [
      'High School',
      "Bachelor's Degree",
      "Master's Degree",
      'PhD/Doctorate',
    ],
  },
  countries: {
    triggers: ['country', 'destination', 'where', 'best', 'recommend'],
    response:
      'Great question! The best destination depends on your profile, goals, and preferences. Based on current trends, here are some top options:',
    suggestions: ['Canada 🇨🇦', 'Australia 🇦🇺', 'New Zealand 🇳🇿', 'Germany 🇩🇪'],
  },
  documents: {
    triggers: ['document', 'paper', 'certificate', 'requirement'],
    response:
      "Document preparation is crucial for a successful application. Here's what you'll typically need:",
    suggestions: [
      'Educational documents',
      'Language test results',
      'Work experience letters',
      'Financial statements',
    ],
  },
  timeline: {
    triggers: ['time', 'long', 'duration', 'process', 'wait'],
    response:
      "Immigration timelines vary by country and visa type. Here's a general overview:",
    suggestions: [
      'Express Entry (6-8 months)',
      'Skilled Migration (8-12 months)',
      'Family Sponsorship (12-24 months)',
    ],
  },
};

export default function AIConsultationBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState<ConversationContext>({
    userProfile: {},
    conversationStage: 'greeting',
    detectedIntents: [],
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initialize conversation
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content:
          "👋 Hello! I'm VanHologram, your AI-powered immigration consultant. I'm here to provide personalized guidance for your immigration journey.",
        timestamp: new Date(),
        metadata: {
          suggestions: [
            'Get started with assessment',
            'Compare immigration destinations',
            'Check document requirements',
            'Ask about timelines',
          ],
          quickActions: [
            { text: '🎯 Quick Eligibility Check', action: 'eligibility' },
            { text: '🌍 Country Comparison', action: 'countries' },
            { text: '📋 Document Checklist', action: 'documents' },
          ],
        },
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const detectIntent = (message: string): string[] => {
    const lowercaseMessage = message.toLowerCase();
    const intents: string[] = [];

    Object.entries(predefinedResponses).forEach(([intent, data]) => {
      if (data.triggers.some(trigger => lowercaseMessage.includes(trigger))) {
        intents.push(intent);
      }
    });

    // Additional intent detection
    if (
      lowercaseMessage.includes('family') ||
      lowercaseMessage.includes('spouse')
    ) {
      intents.push('family');
    }
    if (
      lowercaseMessage.includes('cost') ||
      lowercaseMessage.includes('fee') ||
      lowercaseMessage.includes('price')
    ) {
      intents.push('cost');
    }
    if (
      lowercaseMessage.includes('job') ||
      lowercaseMessage.includes('work') ||
      lowercaseMessage.includes('employment')
    ) {
      intents.push('employment');
    }

    return intents;
  };

  const generateResponse = (
    userMessage: string,
    detectedIntents: string[]
  ): Message => {
    // Check for specific intents and generate appropriate responses
    if (detectedIntents.includes('greeting') || detectedIntents.length === 0) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: predefinedResponses.greeting.response,
        timestamp: new Date(),
        metadata: {
          suggestions: predefinedResponses.greeting.suggestions,
          quickActions: [
            { text: '📊 Calculate Immigration Score', action: 'calculator' },
            { text: '🔍 Find Best Country Match', action: 'match' },
            { text: '📞 Book Expert Consultation', action: 'book' },
          ],
        },
      };
    }

    if (
      detectedIntents.includes('assessment') ||
      detectedIntents.includes('eligibility')
    ) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content:
          "I'll help you assess your immigration eligibility! Based on factors like age, education, work experience, and language skills, I can provide a comprehensive evaluation. Would you like to start with a quick assessment?",
        timestamp: new Date(),
        metadata: {
          suggestions: [
            'Start quick assessment',
            'Use detailed calculator',
            'Compare my options',
            'Get expert review',
          ],
          links: [
            {
              text: 'Immigration Calculator',
              url: '/ai-tools/immigration-calculator',
            },
            { text: 'Eligibility Checker', url: '/ai-tools/eligibility-bot' },
          ],
          quickActions: [
            { text: '🧮 Use Points Calculator', action: 'calculator' },
            { text: '📋 Complete Assessment', action: 'assessment' },
          ],
        },
      };
    }

    if (detectedIntents.includes('countries')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content:
          'Let me help you find the perfect destination! Each country has unique advantages:\n\n🇨🇦 **Canada**: Express Entry system, high success rates\n🇦🇺 **Australia**: Points-based system, excellent quality of life\n🇳🇿 **New Zealand**: Beautiful landscapes, work-life balance\n🇩🇪 **Germany**: Strong economy, EU access\n\nWhat factors are most important to you?',
        timestamp: new Date(),
        metadata: {
          suggestions: [
            'Job opportunities',
            'Quality of life',
            'Education system',
            'Climate and lifestyle',
          ],
          links: [
            {
              text: 'Country Comparison Tool',
              url: '/ai-tools/country-comparison',
            },
            { text: 'Detailed Country Guides', url: '/countries' },
          ],
        },
      };
    }

    if (detectedIntents.includes('documents')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content:
          "Document preparation is crucial! Here's what you'll typically need:\n\n📜 **Educational Documents**\n- Degree certificates\n- Transcripts\n- Credential assessments\n\n🗣️ **Language Proficiency**\n- IELTS/CELPIP/TEF results\n\n💼 **Work Experience**\n- Employment letters\n- Job descriptions\n- Reference letters\n\n💰 **Financial Documents**\n- Bank statements\n- Proof of funds\n\nWhich category would you like to explore first?",
        timestamp: new Date(),
        metadata: {
          suggestions: [
            'Educational documents',
            'Language tests',
            'Work experience proof',
            'Financial requirements',
          ],
          links: [
            { text: 'Document Analyzer', url: '/ai-tools/document-wizard' },
            { text: 'Complete Document Guide', url: '/resources/documents' },
          ],
        },
      };
    }

    if (detectedIntents.includes('timeline')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content:
          'Immigration timelines vary by program:\n\n⚡ **Express Programs**: 6-8 months\n📋 **Skilled Migration**: 8-12 months\n👨‍👩‍👧‍👦 **Family Sponsorship**: 12-24 months\n💼 **Investment Visas**: 4-8 months\n\nTimelines can be affected by:\n- Application completeness\n- Country processing capacity\n- Additional documentation requests\n- Background checks\n\nWould you like a personalized timeline estimate?',
        timestamp: new Date(),
        metadata: {
          suggestions: [
            'Get my timeline estimate',
            'Factors affecting processing',
            'How to speed up application',
            'Track application status',
          ],
          quickActions: [
            { text: '⏱️ Timeline Calculator', action: 'timeline' },
            { text: '📊 Processing Statistics', action: 'stats' },
          ],
        },
      };
    }

    // Default AI response for unmatched queries
    return {
      id: Date.now().toString(),
      type: 'bot',
      content: `I understand you're asking about "${userMessage}". Let me provide you with some helpful information. Based on my analysis, I'd recommend exploring our comprehensive tools and resources to get the most accurate guidance for your specific situation.`,
      timestamp: new Date(),
      metadata: {
        suggestions: [
          'Get personalized assessment',
          'Explore country options',
          'Check document requirements',
          'Book expert consultation',
        ],
        quickActions: [
          { text: '🎯 Get Personalized Help', action: 'personalized' },
          { text: '📞 Talk to Expert', action: 'expert' },
        ],
      },
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Detect intents
    const intents = detectIntent(inputValue);
    setContext(prev => ({
      ...prev,
      detectedIntents: intents,
    }));

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));

    const botResponse = generateResponse(inputValue, intents);

    setIsTyping(false);
    setMessages(prev => [...prev, botResponse]);
  };

  const handleQuickAction = (action: string) => {
    const quickMessages = {
      eligibility: "I'd like to check my immigration eligibility",
      countries: 'Which country would be best for me?',
      documents: 'What documents do I need for immigration?',
      calculator: 'Can you help me calculate my immigration score?',
      timeline: 'How long will my immigration process take?',
      expert: "I'd like to speak with an immigration expert",
    };

    const message =
      quickMessages[action as keyof typeof quickMessages] || action;
    setInputValue(message);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg flex items-center justify-center ${isOpen ? 'hidden' : 'block'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <ChatBubbleLeftRightIcon className='w-8 h-8' />

        {/* Notification Dot */}
        <motion.div
          className='absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center'
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <SparklesIcon className='w-3 h-3 text-white' />
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden'
          >
            {/* Header */}
            <div className='bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center'>
                  <SparklesIcon className='w-6 h-6' />
                </div>
                <div>
                  <h3 className='font-semibold'>VanHologram AI</h3>
                  <p className='text-xs opacity-90'>Immigration Consultant</p>
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                <button
                  onClick={() => setIsOpen(false)}
                  className='p-1 hover:bg-white/20 rounded-full transition-colors'
                >
                  <XMarkIcon className='w-5 h-5' />
                </button>
              </div>
            </div>

            {/* Quick Start Topics */}
            <div className='p-4 border-b border-gray-100 bg-gray-50'>
              <p className='text-sm text-gray-600 mb-2'>Quick start topics:</p>
              <div className='flex flex-wrap gap-2'>
                {quickStartTopics.slice(0, 3).map((topic, index) => {
                  const Icon = topic.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(topic.category)}
                      className='flex items-center gap-1 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs hover:bg-purple-50 hover:border-purple-200 transition-colors'
                    >
                      <Icon className='w-3 h-3' />
                      {topic.text}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Messages */}
            <div className='flex-1 overflow-y-auto p-4 space-y-4'>
              <AnimatePresence>
                {messages.map(message => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] ${
                        message.type === 'user'
                          ? 'bg-purple-600 text-white rounded-l-2xl rounded-tr-2xl'
                          : 'bg-gray-100 text-gray-800 rounded-r-2xl rounded-tl-2xl'
                      } p-3`}
                    >
                      <p className='text-sm whitespace-pre-line'>
                        {message.content}
                      </p>

                      {/* Message metadata */}
                      {message.metadata && (
                        <div className='mt-3 space-y-2'>
                          {/* Quick Actions */}
                          {message.metadata.quickActions && (
                            <div className='flex flex-wrap gap-1'>
                              {message.metadata.quickActions.map(
                                (action, index) => (
                                  <button
                                    key={index}
                                    onClick={() =>
                                      handleQuickAction(action.action)
                                    }
                                    className='px-2 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs hover:bg-purple-200 transition-colors'
                                  >
                                    {action.text}
                                  </button>
                                )
                              )}
                            </div>
                          )}

                          {/* Suggestions */}
                          {message.metadata.suggestions && (
                            <div className='space-y-1'>
                              {message.metadata.suggestions.map(
                                (suggestion, index) => (
                                  <button
                                    key={index}
                                    onClick={() =>
                                      handleSuggestionClick(suggestion)
                                    }
                                    className='block w-full text-left px-2 py-1 bg-white/50 hover:bg-white/80 rounded text-xs transition-colors'
                                  >
                                    {suggestion}
                                  </button>
                                )
                              )}
                            </div>
                          )}

                          {/* Links */}
                          {message.metadata.links && (
                            <div className='space-y-1'>
                              {message.metadata.links.map((link, index) => (
                                <a
                                  key={index}
                                  href={link.url}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800'
                                >
                                  <LinkIcon className='w-3 h-3' />
                                  {link.text}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      <p className='text-xs opacity-60 mt-2'>
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className='flex justify-start'
                  >
                    <div className='bg-gray-100 rounded-r-2xl rounded-tl-2xl p-3'>
                      <div className='flex items-center gap-1'>
                        <div
                          className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                          style={{ animationDelay: '0ms' }}
                        ></div>
                        <div
                          className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                          style={{ animationDelay: '150ms' }}
                        ></div>
                        <div
                          className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                          style={{ animationDelay: '300ms' }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className='p-4 border-t border-gray-100 bg-white'>
              <div className='flex items-center gap-2'>
                <div className='flex-1 relative'>
                  <input
                    ref={inputRef}
                    type='text'
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
                    placeholder='Ask about immigration...'
                    className='w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm'
                  />
                </div>

                <div className='flex items-center gap-1'>
                  <button className='p-2 text-gray-400 hover:text-gray-600 transition-colors'>
                    <PhotoIcon className='w-5 h-5' />
                  </button>
                  <button className='p-2 text-gray-400 hover:text-gray-600 transition-colors'>
                    <MicrophoneIcon className='w-5 h-5' />
                  </button>
                  <motion.button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className='p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PaperAirplaneIcon className='w-5 h-5' />
                  </motion.button>
                </div>
              </div>

              <p className='text-xs text-gray-500 mt-2 text-center'>
                AI-powered • Instant responses • 24/7 available
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
