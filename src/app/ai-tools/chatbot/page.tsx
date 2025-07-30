'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Send,
  User,
  Bot,
  Sparkles,
  Brain,
  FileText,
  Calculator,
  Globe,
  ArrowRight,
} from 'lucide-react';

import Footer from '@/components/Footer';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content:
        "Hello! I'm VANHSYA's AI Immigration Assistant. I'm here to help you with visa requirements, eligibility questions, document preparation, and more. How can I assist you today?",
      timestamp: new Date(),
      suggestions: [
        'Check visa requirements for Canada',
        'Calculate my eligibility score',
        'Help with document preparation',
        'Compare immigration programs',
      ],
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [selectedCountry, setSelectedCountry] = useState('');

  const countries = [
    { code: 'CA', name: 'Canada', flag: '🇨🇦' },
    { code: 'AU', name: 'Australia', flag: '🇦🇺' },
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'UK', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'NZ', name: 'New Zealand', flag: '🇳🇿' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    let content = '';
    let suggestions: string[] = [];

    if (input.includes('canada') || input.includes('express entry')) {
      content =
        '🇨🇦 **Canada Immigration**\n\nCanada offers several immigration pathways:\n\n**Express Entry System:**\n• Federal Skilled Worker Program\n• Canadian Experience Class\n• Federal Skilled Trades Program\n\n**Key Requirements:**\n• Language proficiency (IELTS/CELPIP)\n• Educational credentials assessment\n• Work experience in NOC skill levels\n• Minimum CRS score (currently 480-490)\n\n**Processing Time:** 6-8 months\n**Investment Required:** CAD $13,000+ for family of 2\n\nWould you like me to assess your eligibility or explain any specific program?';
      suggestions = [
        'Assess my Express Entry eligibility',
        'Explain Provincial Nominee Programs',
        'What documents do I need?',
        'Compare with Australia immigration',
      ];
    } else if (input.includes('australia') || input.includes('skillselect')) {
      content =
        '🇦🇺 **Australia Immigration**\n\n**Popular Visa Options:**\n• Subclass 189 (Skilled Independent)\n• Subclass 190 (Skilled Nominated)\n• Subclass 491 (Regional Skilled)\n\n**Key Requirements:**\n• Occupation on skilled occupation list\n• Skills assessment from relevant authority\n• English proficiency (IELTS 6.0+)\n• Under 45 years of age\n• Pass points test (65+ points)\n\n**Processing Time:** 8-12 months\n**Investment Required:** AUD $8,000+\n\nShall I check if your occupation is eligible?';
      suggestions = [
        'Check my occupation eligibility',
        'Calculate points for Australia',
        'State nomination programs',
        'Compare with Canada PR',
      ];
    } else if (
      input.includes('usa') ||
      input.includes('green card') ||
      input.includes('h1b')
    ) {
      content =
        "🇺🇸 **USA Immigration**\n\n**Work-Based Options:**\n• H-1B Specialty Occupation (lottery)\n• L-1 Intracompany Transfer\n• O-1 Extraordinary Ability\n• EB-1/EB-2/EB-3 Green Cards\n\n**Investment Options:**\n• EB-5 Investor Program ($800K+)\n• E-2 Treaty Investor\n\n**Family-Based:**\n• Immediate relatives of US citizens\n• Family preference categories\n\n**Key Challenges:**\n• Annual caps and lotteries\n• Long processing times\n• Complex requirements\n\nWhat's your educational background and work experience?";
      suggestions = [
        'H-1B lottery process',
        'EB-5 investment requirements',
        'Family-based immigration',
        'Alternative work visas',
      ];
    } else if (input.includes('document') || input.includes('paperwork')) {
      content =
        '📄 **Document Preparation Guide**\n\n**Essential Documents (Common):**\n\n**Personal:**\n• Passport (valid 2+ years)\n• Birth certificate\n• Marriage certificate (if applicable)\n• Police clearance certificates\n• Medical examination results\n\n**Educational:**\n• Degree certificates\n• Transcripts\n• Educational credential assessment\n\n**Professional:**\n• Work experience letters\n• Skills assessment (if required)\n• Professional licenses\n\n**Financial:**\n• Bank statements\n• Proof of funds\n• Tax returns\n\n**Language:**\n• IELTS/TOEFL/PTE scores\n\nWhich country are you targeting? I can provide specific requirements.';
      suggestions = [
        'Canada document requirements',
        'Australia skills assessment',
        'USA employment documents',
        'Get document checklist',
      ];
    } else if (
      input.includes('eligibility') ||
      input.includes('qualify') ||
      input.includes('score')
    ) {
      content =
        "🎯 **Eligibility Assessment**\n\nI can help assess your eligibility for various immigration programs. I'll need some information:\n\n**Personal Details:**\n• Age\n• Marital status\n• Number of dependents\n\n**Education:**\n• Highest qualification\n• Field of study\n\n**Work Experience:**\n• Years of experience\n• Occupation/NOC code\n• Current job details\n\n**Language:**\n• Test taken (IELTS/TOEFL/PTE)\n• Scores in each skill\n\n**Other:**\n• Target country\n• Available funds\n• Job offer (if any)\n\nShall we start with a quick assessment?";
      suggestions = [
        'Start eligibility assessment',
        'Use eligibility calculator',
        'Compare multiple countries',
        'Improve my profile',
      ];
    } else if (
      input.includes('cost') ||
      input.includes('fee') ||
      input.includes('price')
    ) {
      content =
        '💰 **Immigration Costs Breakdown**\n\n**Government Fees:**\n🇨🇦 Canada: CAD $1,365 (PR application)\n🇦🇺 Australia: AUD $4,240 (Subclass 189)\n🇺🇸 USA: $1,760 (EB Green Card)\n🇬🇧 UK: £1,523 (Skilled Worker)\n\n**Additional Costs:**\n• Language tests: $200-300\n• Educational assessment: $200-500\n• Medical exams: $300-500\n• Document translation: $20-50/page\n• Legal/consultant fees: $2,000-5,000\n\n**Settlement Funds Required:**\n🇨🇦 CAD $13,310 (couple)\n🇦🇺 AUD $8,000+\n🇺🇸 No specific requirement\n🇬🇧 £1,270 (90 days)\n\nWould you like a detailed cost estimate for your specific case?';
      suggestions = [
        'Get personalized cost estimate',
        'Compare costs by country',
        'Payment plans available',
        'Hidden costs to consider',
      ];
    } else if (
      input.includes('timeline') ||
      input.includes('how long') ||
      input.includes('processing')
    ) {
      content =
        '⏱️ **Processing Timelines**\n\n**Current Processing Times:**\n\n🇨🇦 **Canada:**\n• Express Entry: 6-8 months\n• PNP: 15-19 months\n• Family Class: 12-20 months\n\n🇦🇺 **Australia:**\n• Skilled Independent: 8-12 months\n• Skilled Nominated: 8-15 months\n• Partner Visa: 12-24 months\n\n🇺🇸 **USA:**\n• H-1B: 3-8 months\n• Green Card (EB-1): 8-15 months\n• Family-based: 8-24 months\n\n🇬🇧 **UK:**\n• Skilled Worker: 3-8 weeks\n• Global Talent: 3-8 weeks\n\n**Note:** Times vary based on country of residence, completeness of application, and current processing volumes.\n\nPlanning to apply soon?';
      suggestions = [
        'Expedite my application',
        'Track application status',
        'Factors affecting timeline',
        'Best time to apply',
      ];
    } else {
      content =
        "I'd be happy to help you with your immigration questions! I can assist with:\n\n🌍 **Country-specific requirements**\n📋 **Eligibility assessments**\n📄 **Document preparation**\n💰 **Cost calculations**\n⏱️ **Processing timelines**\n🎯 **Profile improvement tips**\n\nWhat specific information are you looking for? Feel free to ask about any country's immigration process, visa requirements, or next steps for your migration journey.";
      suggestions = [
        'Compare immigration countries',
        'Check my eligibility',
        'Document requirements',
        'Processing timelines',
      ];
    }

    return {
      id: Math.random().toString(36).substr(2, 9),
      type: 'bot',
      content,
      timestamp: new Date(),
      suggestions,
    };
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    await new Promise(resolve =>
      setTimeout(resolve, 1000 + Math.random() * 1000)
    );

    const botResponse = generateBotResponse(inputMessage);
    setMessages(prev => [...prev, botResponse]);
    setIsTyping(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    {
      icon: Calculator,
      title: 'Eligibility Calculator',
      description: 'Check your immigration score',
      action: () => setInputMessage('Check my eligibility score'),
    },
    {
      icon: FileText,
      title: 'Document Checklist',
      description: 'Get required documents list',
      action: () => setInputMessage('What documents do I need?'),
    },
    {
      icon: Globe,
      title: 'Country Comparison',
      description: 'Compare immigration options',
      action: () => setInputMessage('Compare immigration countries'),
    },
    {
      icon: Brain,
      title: 'AI Assessment',
      description: 'Get personalized advice',
      action: () => setInputMessage('Assess my immigration profile'),
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950'>
      {/* Hero Section */}
      <section className='pt-32 pb-8 px-4'>
        <div className='container mx-auto max-w-4xl text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-8'
          >
            <div className='inline-flex items-center gap-2 bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm mb-6'>
              <MessageSquare className='w-4 h-4' />
              AI Immigration Chatbot
            </div>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                24/7 AI Immigration
              </span>
              <br />
              <span className='text-white'>Assistant</span>
            </h1>
            <p className='text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto'>
              Get instant answers to your immigration questions. Our AI
              assistant is trained on the latest immigration policies and can
              help with eligibility, documents, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className='pb-8 px-4'>
        <div className='container mx-auto max-w-6xl'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={action.action}
                className='p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 text-left'
              >
                <action.icon className='w-8 h-8 text-purple-400 mb-3' />
                <h3 className='text-white font-semibold mb-1'>
                  {action.title}
                </h3>
                <p className='text-slate-400 text-sm'>{action.description}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className='pb-20 px-4'>
        <div className='container mx-auto max-w-4xl'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden'
          >
            {/* Chat Header */}
            <div className='bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-white/10 p-6'>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center'>
                  <Bot className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h3 className='text-white font-semibold'>
                    VANHSYA AI Assistant
                  </h3>
                  <div className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                    <span className='text-green-400 text-sm'>
                      Online & Ready to Help
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className='h-96 overflow-y-auto p-6 space-y-4'>
              <AnimatePresence>
                {messages.map(message => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-2xl ${message.type === 'user' ? 'order-2' : 'order-1'}`}
                    >
                      <div
                        className={`flex items-start gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.type === 'user'
                              ? 'bg-gradient-to-r from-purple-600 to-blue-600'
                              : 'bg-gradient-to-r from-green-600 to-blue-600'
                          }`}
                        >
                          {message.type === 'user' ? (
                            <User className='w-4 h-4 text-white' />
                          ) : (
                            <Bot className='w-4 h-4 text-white' />
                          )}
                        </div>
                        <div
                          className={`px-4 py-3 rounded-2xl ${
                            message.type === 'user'
                              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                              : 'bg-white/10 text-slate-200 border border-white/20'
                          }`}
                        >
                          <div className='whitespace-pre-wrap text-sm leading-relaxed'>
                            {message.content}
                          </div>
                          <div className='text-xs opacity-70 mt-2'>
                            {message.timestamp.toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Suggestions */}
                      {message.type === 'bot' && message.suggestions && (
                        <div className='mt-3 ml-11 space-y-2'>
                          {message.suggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className='block text-left px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-slate-300 hover:text-white transition-all duration-200'
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex justify-start'
                >
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center'>
                      <Bot className='w-4 h-4 text-white' />
                    </div>
                    <div className='bg-white/10 border border-white/20 px-4 py-3 rounded-2xl'>
                      <div className='flex gap-1'>
                        <div className='w-2 h-2 bg-blue-400 rounded-full animate-bounce'></div>
                        <div
                          className='w-2 h-2 bg-blue-400 rounded-full animate-bounce'
                          style={{ animationDelay: '0.1s' }}
                        ></div>
                        <div
                          className='w-2 h-2 bg-blue-400 rounded-full animate-bounce'
                          style={{ animationDelay: '0.2s' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className='border-t border-white/10 p-6'>
              <div className='flex gap-4'>
                <textarea
                  value={inputMessage}
                  onChange={e => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder='Ask about visa requirements, eligibility, documents, or any immigration question...'
                  className='flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none'
                  rows={2}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className='px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed self-end'
                >
                  <Send className='w-4 h-4' />
                  Send
                </motion.button>
              </div>
              <div className='flex flex-wrap gap-2 mt-4'>
                {countries.map(country => (
                  <button
                    key={country.code}
                    onClick={() =>
                      handleSuggestionClick(
                        `Tell me about ${country.name} immigration`
                      )
                    }
                    className='px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-slate-300 hover:text-white transition-all duration-200 flex items-center gap-1'
                  >
                    <span>{country.flag}</span>
                    <span>{country.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4'>
        <div className='container mx-auto max-w-4xl text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-3xl p-12'
          >
            <h2 className='text-3xl font-bold text-white mb-4'>
              Need Human Expert Assistance?
            </h2>
            <p className='text-xl text-slate-300 mb-8'>
              While our AI assistant provides instant help, sometimes you need
              expert human guidance for complex cases.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2'
              >
                Book Expert Consultation
                <ArrowRight className='w-5 h-5' />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300'
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

export default ChatbotPage;
