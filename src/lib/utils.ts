import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Currency, Language } from '@/types';

// Utility function to merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Currency utilities
export const currencySymbols: Record<Currency, string> = {
  INR: '₹',
  USD: '$',
  EUR: '€',
  GBP: '£',
  AED: 'د.إ',
  CAD: 'C$',
  AUD: 'A$',
  SGD: 'S$',
};

export function formatCurrency(
  amount: number,
  currency: Currency,
  locale?: string
): string {
  const symbol = currencySymbols[currency];
  const formattedAmount = new Intl.NumberFormat(locale || 'en-IN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

  return `${symbol}${formattedAmount}`;
}

export function convertCurrency(
  amount: number,
  fromCurrency: Currency,
  toCurrency: Currency,
  exchangeRates: Record<Currency, number>
): number {
  if (fromCurrency === toCurrency) return amount;

  // Convert to INR first (base currency), then to target currency
  const inrAmount =
    fromCurrency === 'INR' ? amount : amount / exchangeRates[fromCurrency];
  const convertedAmount =
    toCurrency === 'INR' ? inrAmount : inrAmount * exchangeRates[toCurrency];

  return Math.round(convertedAmount);
}

// Language utilities
export const languageNames: Record<Language, string> = {
  en: 'English',
  hi: 'हिन्दी',
  ml: 'മലയാളം',
  ar: 'العربية',
  es: 'Español',
  zh: '中文',
  fr: 'Français',
  ur: 'اردو',
  de: 'Deutsch',
};

export function getLanguageDirection(language: Language): 'ltr' | 'rtl' {
  return language === 'ar' ? 'rtl' : 'ltr';
}

// Validation utilities
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
}

export function validatePassport(passport: string): boolean {
  // Basic passport number validation (alphanumeric, 6-9 characters)
  const passportRegex = /^[A-Z0-9]{6,9}$/;
  return passportRegex.test(passport.toUpperCase());
}

// File utilities
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function getFileExtension(filename: string): string {
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
}

export function isValidFileType(
  filename: string,
  allowedTypes: string[]
): boolean {
  const extension = getFileExtension(filename).toLowerCase();
  return allowedTypes.includes(extension);
}

// Date utilities
export function formatDate(date: Date, locale?: string): string {
  return new Intl.DateTimeFormat(locale || 'en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatDateTime(date: Date, locale?: string): string {
  return new Intl.DateTimeFormat(locale || 'en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function getRelativeTime(date: Date, locale?: string): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 2592000)
    return `${Math.floor(diffInSeconds / 86400)} days ago`;

  return formatDate(date, locale);
}

// Scoring and calculation utilities
export function calculateEligibilityScore(
  answers: Record<string, unknown>
): number {
  let score = 0;
  let maxScore = 0;

  // Age scoring (max 25 points)
  const age = Number(answers.age) || 0;
  maxScore += 25;
  if (age >= 18 && age <= 35) score += 25;
  else if (age >= 36 && age <= 45) score += 20;
  else if (age >= 46 && age <= 55) score += 15;
  else if (age > 55) score += 10;

  // Education scoring (max 25 points)
  const education = String(answers.education || '');
  maxScore += 25;
  if (education.includes('PhD') || education.includes('Doctorate')) score += 25;
  else if (education.includes('Masters') || education.includes('Postgraduate'))
    score += 22;
  else if (
    education.includes('Bachelors') ||
    education.includes('Undergraduate')
  )
    score += 18;
  else if (education.includes('Diploma')) score += 15;
  else if (education.includes('High School')) score += 10;

  // Work experience scoring (max 25 points)
  const experience = Number(answers.workExperience) || 0;
  maxScore += 25;
  if (experience >= 5) score += 25;
  else if (experience >= 3) score += 20;
  else if (experience >= 1) score += 15;
  else score += 5;

  // Language proficiency scoring (max 25 points)
  const englishLevel = String(answers.englishProficiency || '');
  maxScore += 25;
  if (englishLevel.includes('Native') || englishLevel.includes('Fluent'))
    score += 25;
  else if (englishLevel.includes('Advanced')) score += 22;
  else if (englishLevel.includes('Intermediate')) score += 18;
  else if (englishLevel.includes('Basic')) score += 12;
  else score += 5;

  return Math.round((score / maxScore) * 100);
}

export function generateReferralCode(name: string, email: string): string {
  const namepart = name.replace(/\s+/g, '').slice(0, 3).toUpperCase();
  const emailpart = email.split('@')[0].slice(0, 2).toUpperCase();
  const randomNumber = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');

  return `VAN${namepart}${emailpart}${randomNumber}`;
}

// URL and slug utilities
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// Number utilities
export function formatNumber(num: number, locale?: string): string {
  return new Intl.NumberFormat(locale || 'en-IN').format(num);
}

export function formatPercentage(num: number, decimals: number = 1): string {
  return `${num.toFixed(decimals)}%`;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// Object utilities
export function omit<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj };
  keys.forEach(key => delete result[key]);
  return result;
}

export function pick<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}

// Animation and UI utilities
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Local storage utilities with error handling
export function setStorageItem(key: string, value: unknown): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
}

export function getStorageItem<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
}

export function removeStorageItem(key: string): boolean {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing from localStorage:', error);
    return false;
  }
}
