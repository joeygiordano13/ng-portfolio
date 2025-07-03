"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Briefcase, Instagram, Film } from 'lucide-react';

export default function PortfolioSite() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "National Brand Campaign",
      description: "Led creative direction and production for a multi-million dollar brand awareness campaign. Increased brand recognition by 40% and drove $2.3M in direct sales.",
      tech: ["Creative Direction", "Video Production", "Social Media", "Analytics"],
      link: "#"
    },
    {
      title: "Television & Film Productions",
      description: "Starred in multiple television series and feature films, bringing diverse characters to life while collaborating with renowned directors and production teams.",
      tech: ["On-Camera Performance", "Character Development", "Script Analysis", "Set Collaboration"],
      link: "#"
    },
    {
      title: "Sales Training Program",
      description: "Developed and implemented a comprehensive sales training program that increased team performance by 35% and reduced onboarding time by 50%.",
      tech: ["Sales Strategy", "Training Development", "Performance Analytics", "Team Leadership"],
      link: "#"
    }
  ];

  const skills = [
    { category: "Creative", items: ["Brand Strategy", "Creative Direction", "Storytelling", "Video Production", "Acting", "Film Production"] },
    { category: "Sales", items: ["B2B Sales", "Client Relations", "Negotiation", "Pipeline Management", "CRM"] },
    { category: "Entertainment", items: ["On-Camera Performance", "Character Development", "Script Analysis", "Set Production", "Commercial Acting"] },
    { category: "Tools", items: ["Adobe Creative Suite", "Salesforce", "HubSpot", "Final Cut Pro", "Canva"] }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800/95 backdrop-blur-md z-50 border-b border-gray-700 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-bold text-xl text-white">Nicholas Giordano</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'entertainment', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-200 px-3 py-2 rounded-lg ${
                    activeSection === section 
                      ? 'text-blue-400 bg-blue-400/10' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                Sales Leader & Creative Producer
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                I create compelling campaigns and drive results through strategic storytelling. 
                From starring in TV shows and films to producing award-winning campaigns, I bring 
                authenticity and creative vision to every project.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5"
                >
                  View My Portfolio
                </button>
                <a href="/nicholas-giordano-sales-executive.pdf" className="border-2 border-blue-500 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5" target="_blank" rel="noopener noreferrer">
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl shadow-blue-500/30 border-4 border-black p-1 bg-black">
                  <Image 
                    src="/nicholas-giordano.jpeg" 
                    alt="Nicholas Giordano Profile" 
                    width={256}
                    height={256}
                    className="w-full h-full object-cover rounded-full"
                    onError={() => {
                      // Next.js Image component handles errors automatically
                    }}
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-2 rounded-full border-2 border-blue-400/30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700">
              <p className="text-lg text-gray-300 mb-6">
                With over 8 years of experience spanning creative production, sales, and entertainment, I specialize in 
                developing compelling brand narratives and driving revenue growth. My unique combination 
                of creative vision and business acumen allows me to bridge the gap between artistic 
                excellence and commercial success.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                From starring in television shows and feature films to producing award-winning commercials 
                and multi-million dollar campaigns, I bring authenticity and strategic thinking to every project. 
                My on-screen experience in TV shows, movies, and commercials gives me a deep understanding 
                of storytelling that creates meaningful connections between brands and their audiences.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/nicholas.giordano" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800" target="_blank" rel="noopener noreferrer">
                  <Instagram size={24} />
                </a>
                <a href="https://www.linkedin.com/in/nicholas-giordano-a7096174/"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.imdb.com/name/nm0320351/?ref_=nv_sr_srsg_0_tt_0_nm_8_in_0_q_nicholas%2520giordano" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800" title="IMDB Profile">
                  <Film size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Skills & Expertise</h3>
              {skills.map((skillGroup, index) => (
                <div key={index} className="mb-6">
                  <h4 className="font-medium text-gray-300 mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Featured Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase size={20} className="text-blue-400" />
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.link}
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Work
                    </a>
                    <a 
                      href={project.link}
                      className="flex items-center gap-1 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <Briefcase size={16} />
                      Case Study
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Entertainment & Acting Section */}
      <section id="entertainment" className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Entertainment & Acting</h2>
          <div className="text-center mb-8">
            <p className="text-lg text-gray-300 mb-6">
              Throughout my career, I&apos;ve had the privilege of working in front of and behind the camera 
              across television, film, and commercial productions.
            </p>
            <a 
              href="https://www.imdb.com/name/nm0320351/?ref_=nv_sr_srsg_0_tt_0_nm_8_in_0_q_nicholas%2520giordano" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Film size={20} />
              View IMDB Profile
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <Film size={20} className="text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">Television</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Featured in multiple television series, bringing characters to life with authenticity and depth.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Series Regular & Guest Star roles</li>
                <li>• Drama & Comedy productions</li>
                <li>• Network & Streaming platforms</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <Film size={20} className="text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">Film</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Starred in feature films across various genres, collaborating with talented directors and casts.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Lead & Supporting roles</li>
                <li>• Independent & Studio films</li>
                <li>• Multiple genre experience</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <Film size={20} className="text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">Commercials & Production</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Produced and starred in several commercial campaigns for major brands and agencies.
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• National brand campaigns</li>
                <li>• Producer & On-camera talent</li>
                <li>• Award-winning creative work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-white">Let&apos;s create something amazing</h3>
              <p className="text-gray-300 mb-8">
                I&apos;m always excited to discuss new projects, creative collaborations, 
                or sales opportunities. Whether you need a producer, performer, or sales leader, 
                let&apos;s explore how we can work together.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <span className="text-gray-300">nicholas.giordano@email.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Phone size={20} className="text-blue-400" />
                  </div>
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <MapPin size={20} className="text-blue-400" />
                  </div>
                  <span className="text-gray-300">Los Angeles, CA</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-700">
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">Connect with me</h4>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://instagram.com/nicholas.giordano"
                    className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 py-3 px-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    <Instagram size={20} className="text-gray-300" />
                    <span className="text-gray-300">Instagram</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/nicholas-giordano-a7096174/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 py-3 px-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    <Linkedin size={20} className="text-white" />
                    <span className="text-white">LinkedIn</span>
                  </a>
                </div>
                <a href="https://www.imdb.com/name/nm0320351/?ref_=nv_sr_srsg_0_tt_0_nm_8_in_0_q_nicholas%2520giordano" className="flex items-center justify-center gap-2 w-full bg-yellow-600 hover:bg-yellow-700 py-3 px-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl" target="_blank" rel="noopener noreferrer">
                  <Film size={20} className="text-white" />
                  <span className="text-white">View IMDB</span>
                </a>
                <a 
                  href="mailto:nicholas.giordano@email.com"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 py-3 px-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  <Mail size={20} className="text-white" />
                  <span className="text-white">Send Email</span>
                </a>
                <div className="text-center pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">
                    Available for freelance work and full-time opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">&copy; 2025 Nicholas Giordano. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/nicholas.giordano" className="hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nicholas-giordano-a7096174/" className="hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="https://www.imdb.com/name/nm0320351/?ref_=nv_sr_srsg_0_tt_0_nm_8_in_0_q_nicholas%2520giordano" className="hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-gray-800" title="IMDB Profile" target="_blank" rel="noopener noreferrer">
                <Film size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}