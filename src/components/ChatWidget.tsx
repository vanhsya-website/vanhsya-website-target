'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaComments,
  FaTimes,
  FaPaperPlane,
  FaUser,
  FaCalendarAlt,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent' | 'bot';
  timestamp: Date;
  senderName?: string;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hello! Welcome to VANHSYA Global Migration. How can I help you with your immigration journey today? For direct calls, please use our scheduling system below.',
    sender: 'agent',
    timestamp: new Date(),
    senderName: 'Sarah - Immigration Advisor',
  },
];

const quickReplies = [
  'Check eligibility',
  'Service pricing',
  'Processing times',
  'Schedule consultation',
  'Speak to expert',
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      const response = generateResponse(text.trim());
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'agent',
        timestamp: new Date(),
        senderName: 'Sarah - Immigration Advisor',
      };

      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('eligibility') || input.includes('qualify')) {
      return "I'd be happy to help you check your eligibility! Our free eligibility calculator can give you an instant assessment. Would you like me to guide you through it, or would you prefer to speak with one of our licensed immigration consultants for a detailed evaluation?";
    }

    if (
      input.includes('price') ||
      input.includes('cost') ||
      input.includes('fee')
    ) {
      return 'Our service fees are transparent and vary based on the immigration program. Basic consultation is free, and comprehensive services range from $2,000-$8,000 CAD. Would you like me to connect you with an advisor for a detailed quote based on your specific case?';
    }

    if (
      input.includes('time') ||
      input.includes('long') ||
      input.includes('processing')
    ) {
      return 'Processing times vary by country and program:\n• Canada Express Entry: 6-8 months\n• Australia Skilled Visa: 8-12 months\n• UK Work Visa: 3-8 weeks\n• USA EB-5: 12-18 months\n\nWould you like specific information for your situation?';
    }

    if (
      input.includes('consultation') ||
      input.includes('book') ||
      input.includes('appointment') ||
      input.includes('schedule')
    ) {
      return "Perfect! I can help you book a free 30-minute consultation with one of our licensed immigration consultants. Click the 'Schedule Call' button below to select your preferred time slot. Would you prefer a video call or phone consultation?";
    }

    if (
      input.includes('hello') ||
      input.includes('hi') ||
      input.includes('hey')
    ) {
      return "Hello! Great to meet you. I'm here to help with all your immigration questions. What brings you to VANHSYA today - are you looking to move to a specific country or explore your options?";
    }

    return "That's a great question! For the most accurate and personalized answer, I'd recommend speaking with one of our licensed immigration consultants. They can provide detailed guidance based on your specific situation. Would you like me to arrange a free consultation for you?";
  };

  const handleQuickReply = (reply: string) => {
    sendMessage(reply);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all ${
          isOpen
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
        style={{ zIndex: 1000 }}
      >
        {isOpen ? (
          <FaTimes className='text-2xl text-white' />
        ) : (
          <>
            <FaComments className='text-2xl text-white' />
            {/* Online indicator */}
            {isOnline && (
              <div className='absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white' />
            )}
          </>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className='fixed bottom-24 left-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50'
            style={{ zIndex: 999 }}
          >
            {/* Header */}
            <div className='bg-blue-600 text-white p-4 rounded-t-lg'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3'>
                    <FaUser className='text-sm' />
                  </div>
                  <div>
                    <h3 className='font-semibold'>VANHSYA Support</h3>
                    <p className='text-xs opacity-90'>
                      {isOnline
                        ? 'Online - We typically reply instantly'
                        : "Offline - We'll reply soon"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className='text-white hover:text-gray-200'
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className='flex-1 overflow-y-auto p-4 space-y-4'>
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.sender !== 'user' && message.senderName && (
                      <p className='text-xs text-gray-500 mb-1'>
                        {message.senderName}
                      </p>
                    )}
                    <p className='text-sm whitespace-pre-line'>
                      {message.text}
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === 'user'
                          ? 'text-blue-100'
                          : 'text-gray-500'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className='flex justify-start'>
                  <div className='bg-gray-100 px-4 py-2 rounded-lg'>
                    <div className='flex items-center space-x-1'>
                      <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce' />
                      <div
                        className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                        style={{ animationDelay: '0.1s' }}
                      />
                      <div
                        className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                        style={{ animationDelay: '0.2s' }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && (
              <div className='p-4 border-t border-gray-200'>
                <p className='text-xs text-gray-500 mb-2'>Quick replies:</p>
                <div className='flex flex-wrap gap-2'>
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className='text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors'
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className='p-4 border-t border-gray-200'>
              <div className='flex space-x-2'>
                <input
                  type='text'
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && sendMessage(inputValue)}
                  placeholder='Type your message...'
                  className='flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <motion.button
                  onClick={() => sendMessage(inputValue)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!inputValue.trim()}
                  className='bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  <FaPaperPlane className='text-sm' />
                </motion.button>
              </div>

              {/* Alternative Contact Methods */}
              <div className='flex justify-center space-x-4 mt-3 pt-3 border-t border-gray-100'>
                <a
                  href='https://wa.me/18007826479'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-xs text-green-600 hover:text-green-700'
                >
                  <FaWhatsapp className='mr-1' />
                  WhatsApp
                </a>
                <button
                  onClick={() => {
                    // Open scheduling modal or redirect to scheduling page
                    window.open('/consultation', '_blank');
                  }}
                  className='flex items-center text-xs text-blue-600 hover:text-blue-700'
                >
                  <FaCalendarAlt className='mr-1' />
                  Schedule Call
                </button>
                <a
                  href='mailto:support@vanhsya.com'
                  className='flex items-center text-xs text-purple-600 hover:text-purple-700'
                >
                  <FaEnvelope className='mr-1' />
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
