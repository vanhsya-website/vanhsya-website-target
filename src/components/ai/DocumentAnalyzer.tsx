'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DocumentTextIcon, 
  CheckCircleIcon, 
  ExclamationTriangleIcon,
  CloudArrowUpIcon,
  SparklesIcon,
  EyeIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';

interface DocumentAnalysis {
  isValid: boolean;
  score: number;
  issues: string[];
  suggestions: string[];
  documentType: string;
  completeness: number;
  readability: number;
  requirements: {
    met: string[];
    missing: string[];
  };
}

interface DocumentAnalyzerProps {
  onAnalysisComplete?: (analysis: DocumentAnalysis) => void;
  acceptedTypes?: string[];
  maxFileSize?: number;
}

export default function DocumentAnalyzer({ 
  onAnalysisComplete,
  acceptedTypes = ['.pdf', '.jpg', '.jpeg', '.png', '.doc', '.docx'],
  maxFileSize = 10 * 1024 * 1024 // 10MB
}: DocumentAnalyzerProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<DocumentAnalysis | null>(null);
  const [dragActive, setDragActive] = useState(false);

  // Simulate AI analysis (in real implementation, this would call your AI service)
  const analyzeDocument = useCallback(async (file: File): Promise<DocumentAnalysis> => {
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock analysis results based on file type and name
    const mockAnalysis: DocumentAnalysis = {
      isValid: Math.random() > 0.3,
      score: Math.floor(Math.random() * 40) + 60, // 60-100
      documentType: file.name.toLowerCase().includes('passport') ? 'Passport' : 
                   file.name.toLowerCase().includes('diploma') ? 'Educational Certificate' :
                   file.name.toLowerCase().includes('ielts') ? 'Language Test' : 'Identity Document',
      completeness: Math.floor(Math.random() * 30) + 70,
      readability: Math.floor(Math.random() * 25) + 75,
      issues: [
        'Image quality could be improved',
        'Some text appears blurred',
        'Document edges are slightly cut off'
      ].slice(0, Math.floor(Math.random() * 3)),
      suggestions: [
        'Scan at higher resolution (300 DPI minimum)',
        'Ensure all four corners are visible',
        'Use proper lighting to avoid shadows',
        'Save as PDF for better quality retention'
      ].slice(0, Math.floor(Math.random() * 3) + 1),
      requirements: {
        met: ['Valid document format', 'Readable text', 'Official document'],
        missing: Math.random() > 0.5 ? ['Notarization required', 'Translation needed'] : []
      }
    };

    return mockAnalysis;
  }, []);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      await processFile(files[0]);
    }
  }, []);

  const handleFileInput = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      await processFile(files[0]);
    }
  }, []);

  const processFile = async (file: File) => {
    if (file.size > maxFileSize) {
      alert('File size too large. Please upload a file smaller than 10MB.');
      return;
    }

    setUploadedFile(file);
    setIsAnalyzing(true);
    setAnalysis(null);

    try {
      const result = await analyzeDocument(file);
      setAnalysis(result);
      onAnalysisComplete?.(result);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <SparklesIcon className="w-8 h-8" />
            <h2 className="text-2xl font-bold">AI Document Analyzer</h2>
          </div>
          <p className="text-purple-100">
            Upload your immigration documents for instant AI-powered analysis and validation
          </p>
        </div>

        <div className="p-8">
          {/* Upload Area */}
          <motion.div
            className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
              dragActive 
                ? 'border-purple-500 bg-purple-50' 
                : uploadedFile 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              onChange={handleFileInput}
              accept={acceptedTypes.join(',')}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              disabled={isAnalyzing}
            />

            <AnimatePresence mode="wait">
              {isAnalyzing ? (
                <motion.div
                  key="analyzing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full"
                    />
                    <DocumentTextIcon className="w-8 h-8 text-purple-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800">Analyzing Document...</h3>
                    <p className="text-gray-600 mt-1">Our AI is examining your document for compliance and quality</p>
                  </div>
                </motion.div>
              ) : uploadedFile ? (
                <motion.div
                  key="uploaded"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4"
                >
                  <CheckCircleIcon className="w-16 h-16 text-green-600" />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800">{uploadedFile.name}</h3>
                    <p className="text-gray-600 mt-1">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-4"
                >
                  <CloudArrowUpIcon className="w-16 h-16 text-gray-400" />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800">Drop your document here</h3>
                    <p className="text-gray-600 mt-1">
                      or click to browse files
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Supports: {acceptedTypes.join(', ')} (Max 10MB)
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Analysis Results */}
          <AnimatePresence>
            {analysis && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-8 space-y-6"
              >
                {/* Overall Score */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">Analysis Results</h3>
                    <div className={`px-4 py-2 rounded-full ${getScoreBgColor(analysis.score)}`}>
                      <span className={`font-bold ${getScoreColor(analysis.score)}`}>
                        {analysis.score}/100
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <DocumentCheckIcon className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">Document Type</span>
                      </div>
                      <p className="text-gray-700">{analysis.documentType}</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-600" />
                        <span className="font-medium">Completeness</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${analysis.completeness}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600">{analysis.completeness}%</span>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <EyeIcon className="w-5 h-5 text-purple-600" />
                        <span className="font-medium">Readability</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${analysis.readability}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600">{analysis.readability}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirements Check */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5" />
                      Requirements Met
                    </h4>
                    <ul className="space-y-2">
                      {analysis.requirements.met.map((req, index) => (
                        <li key={index} className="text-green-700 flex items-center gap-2">
                          <CheckCircleIcon className="w-4 h-4" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {analysis.requirements.missing.length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                        <ExclamationTriangleIcon className="w-5 h-5" />
                        Missing Requirements
                      </h4>
                      <ul className="space-y-2">
                        {analysis.requirements.missing.map((req, index) => (
                          <li key={index} className="text-red-700 flex items-center gap-2">
                            <ExclamationTriangleIcon className="w-4 h-4" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Issues and Suggestions */}
                {(analysis.issues.length > 0 || analysis.suggestions.length > 0) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {analysis.issues.length > 0 && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                        <h4 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">
                          <ExclamationTriangleIcon className="w-5 h-5" />
                          Issues Found
                        </h4>
                        <ul className="space-y-2">
                          {analysis.issues.map((issue, index) => (
                            <li key={index} className="text-yellow-700 text-sm">
                              • {issue}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {analysis.suggestions.length > 0 && (
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                          <SparklesIcon className="w-5 h-5" />
                          Suggestions
                        </h4>
                        <ul className="space-y-2">
                          {analysis.suggestions.map((suggestion, index) => (
                            <li key={index} className="text-blue-700 text-sm">
                              • {suggestion}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => {
                      setUploadedFile(null);
                      setAnalysis(null);
                    }}
                    className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Analyze Another Document
                  </button>
                  <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Download Report
                  </button>
                  <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Get Professional Review
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
