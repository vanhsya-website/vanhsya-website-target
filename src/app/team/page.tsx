'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, LinkedinIcon, Award, Globe, Users, MapPin } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  specializations: string[];
  experience: string;
  email: string;
  linkedin: string;
  languages: string[];
  certifications: string[];
}

const TeamPage: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Managing Director & Senior Immigration Consultant",
      bio: "With over 15 years of experience in immigration law and consulting, Sarah leads VANHSYA with a passion for helping people achieve their dreams of global mobility.",
      image: "/images/team/sarah-johnson.jpg",
      specializations: ["Express Entry", "Provincial Nominee Programs", "Family Sponsorship"],
      experience: "15+ years",
      email: "sarah.johnson@vanhsya.com",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      languages: ["English", "French", "Spanish"],
      certifications: ["RCIC", "ICCRC Member", "Canadian Immigration Law Certificate"]
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      position: "Senior Immigration Advisor",
      bio: "Dr. Chen specializes in skilled worker programs and business immigration, bringing extensive knowledge of Asia-Pacific immigration pathways.",
      image: "/images/team/michael-chen.jpg",
      specializations: ["Skilled Worker Programs", "Business Immigration", "Study Permits"],
      experience: "12+ years",
      email: "michael.chen@vanhsya.com",
      linkedin: "https://linkedin.com/in/michaelchen",
      languages: ["English", "Mandarin", "Cantonese"],
      certifications: ["PhD Immigration Studies", "RCIC", "Business Immigration Specialist"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Family Reunification Specialist",
      bio: "Emily is dedicated to reuniting families across borders, with specialized expertise in spousal sponsorship and dependent child applications.",
      image: "/images/team/emily-rodriguez.jpg",
      specializations: ["Family Sponsorship", "Spousal Applications", "Dependent Visas"],
      experience: "8+ years",
      email: "emily.rodriguez@vanhsya.com",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      languages: ["English", "Spanish", "Portuguese"],
      certifications: ["RCIC", "Family Law Certificate", "Humanitarian Applications"]
    },
    {
      id: 4,
      name: "James Wilson",
      position: "Student Visa Consultant",
      bio: "James helps students navigate the complex world of study permits and post-graduation work permits, ensuring smooth transitions to permanent residence.",
      image: "/images/team/james-wilson.jpg",
      specializations: ["Study Permits", "PGWP", "CEC Applications"],
      experience: "6+ years",
      email: "james.wilson@vanhsya.com",
      linkedin: "https://linkedin.com/in/jameswilson",
      languages: ["English", "French"],
      certifications: ["RCIC", "Education Consultant", "Post-Secondary Specialist"]
    },
    {
      id: 5,
      name: "Priya Sharma",
      position: "Documentation Specialist",
      bio: "Priya ensures all documentation meets the highest standards, with expertise in document authentication and preparation for various immigration programs.",
      image: "/images/team/priya-sharma.jpg",
      specializations: ["Document Preparation", "Authentication", "Translation Services"],
      experience: "10+ years",
      email: "priya.sharma@vanhsya.com",
      linkedin: "https://linkedin.com/in/priyasharma",
      languages: ["English", "Hindi", "Punjabi", "Gujarati"],
      certifications: ["Document Authentication Expert", "Translation Services", "Notary Public"]
    },
    {
      id: 6,
      name: "Robert Thompson",
      position: "Appeals & Complex Cases Specialist",
      bio: "Robert handles the most challenging immigration cases, including appeals, refusals, and complex situations requiring specialized legal expertise.",
      image: "/images/team/robert-thompson.jpg",
      specializations: ["Immigration Appeals", "Refusal Cases", "Legal Representation"],
      experience: "20+ years",
      email: "robert.thompson@vanhsya.com",
      linkedin: "https://linkedin.com/in/robertthompson",
      languages: ["English", "French"],
      certifications: ["Immigration Lawyer", "Appeals Specialist", "Federal Court Representative"]
    }
  ];

  const stats = [
    { label: "Happy Clients", value: "10,000+", icon: Users },
    { label: "Success Rate", value: "95%", icon: Award },
    { label: "Countries Served", value: "50+", icon: Globe },
    { label: "Years Experience", value: "15+", icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-5xl font-bold mb-4">Meet Our Expert Team</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Dedicated professionals committed to making your immigration journey successful
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Members */}
        <div className="space-y-12 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative h-96 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                  <div className="h-full bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <Users className="w-20 h-20 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Professional Photo</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4">{member.position}</p>
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>

                  {/* Specializations */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specializations.map((spec, specIndex) => (
                        <span
                          key={specIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Languages:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.languages.map((lang, langIndex) => (
                        <span
                          key={langIndex}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Certifications:</h4>
                    <ul className="space-y-1">
                      {member.certifications.map((cert, certIndex) => (
                        <li key={certIndex} className="flex items-center text-sm text-gray-600">
                          <Award className="w-4 h-4 text-yellow-500 mr-2" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600 font-medium">{member.experience} Experience</span>
                    <div className="flex space-x-3">
                      <motion.a
                        href={`mailto:${member.email}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                      >
                        <LinkedinIcon className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-center text-white mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Get personalized guidance from our expert team. Schedule a consultation today and take the first step towards your new life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Consultation
          </motion.button>
        </motion.div>

        {/* Why Choose Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Why Choose Our Team?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Certified Experts</h3>
              <p className="text-gray-600">All our consultants are RCIC certified and continuously update their knowledge with the latest immigration policies.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Personalized Service</h3>
              <p className="text-gray-600">Every client gets dedicated attention with customized strategies tailored to their unique circumstances.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Global Reach</h3>
              <p className="text-gray-600">With multilingual capabilities and international experience, we serve clients from all corners of the world.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;
