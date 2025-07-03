"use client";

import React, { useState } from 'react';
import { InstagramIcon, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Calendar, User, Code, Briefcase, BookOpen, Instagram } from 'lucide-react';

export default function PortfolioSite() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
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
      title: "Award-Winning Commercial Series",
      description: "Produced and starred in a series of commercials that won regional advertising awards. Managed talent, coordinated shoots, and ensured brand messaging alignment.",
      tech: ["Acting", "Production Management", "Brand Strategy", "Talent Coordination"],
      link: "#",
    },
    {
      title: "Sales Training Program",
      description: "Developed and implemented a comprehensive sales training program that increased team performance by 35% and reduced onboarding time by 50%.",
      tech: ["Sales Strategy", "Training Development", "Performance Analytics", "Team Leadership"],
      link: "#",
    }
  ];

  const blogPosts = [
    {
      title: "The Art of Authentic Brand Storytelling",
      date: "2024-06-15",
      excerpt: "How to create compelling narratives that resonate with audiences and drive meaningful engagement across all touchpoints.",
      readTime: "5 min read"
    },
    {
      title: "Building Trust in Sales Through Performance",
      date: "2024-06-01",
      excerpt: "Leveraging acting techniques and emotional intelligence to build genuine connections with clients and close more deals.",
      readTime: "7 min read"
    },
    {
      title: "From Script to Screen: Managing Creative Projects",
      date: "2024-05-20",
      excerpt: "Best practices for producing high-quality creative content on time and budget while maintaining artistic vision.",
      readTime: "6 min read"
    }
  ];

  const skills = [
    { category: "Creative", items: ["Brand Strategy", "Creative Direction", "Storytelling", "Video Production", "Acting"] },
    { category: "Sales", items: ["B2B Sales", "Client Relations", "Negotiation", "Pipeline Management", "CRM"] },
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
              {['home', 'about', 'projects', 'blog', 'contact'].map((section) => (
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
                Creative Producer & Sales Leader
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                I create compelling campaigns and drive results through strategic storytelling. 
                Passionate about building brands, connecting with audiences, and bringing creative visions to life.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5"
                >
                  View My Portfolio
                </button>
                <a 
                  href="/resume.pdf" 
                  className="border-2 border-blue-500 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl shadow-blue-500/30 border-4 border-black p-1 bg-black">
                  <img 
                    src="/nicholas-giordano.jpeg" 
                    alt="Nicholas Giordano Profile" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback gradient background with icon */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                    <User size={120} className="text-white" />
                  </div>
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
                With over 8 years of experience in creative production and sales, I specialize in 
                developing compelling brand narratives and driving revenue growth. My unique combination 
                of creative vision and business acumen allows me to bridge the gap between artistic 
                excellence and commercial success.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                From starring in award-winning commercials to producing multi-million dollar campaigns, 
                I bring authenticity and strategic thinking to every project. I believe in the power 
                of storytelling to create meaningful connections between brands and their audiences.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800">
                  <Linkedin size={24} />
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
                      href={project.github}
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

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Latest Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={20} className="text-purple-400" />
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{post.readTime}</span>
                  <a href="#" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-white">Let's create something amazing</h3>
              <p className="text-gray-300 mb-8">
                I'm always excited to discuss new projects, creative collaborations, 
                or sales opportunities. Whether you need a producer, performer, or sales leader, 
                let's explore how we can work together.
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
                    href="https://github.com"
                    className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 py-3 px-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    <Instagram size={20} className="text-gray-300" />
                    <span className="text-gray-300">Instagram</span>
                  </a>
                  <a 
                    href="https://linkedin.com"
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 py-3 px-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    <Linkedin size={20} className="text-white" />
                    <span className="text-white">LinkedIn</span>
                  </a>
                </div>
                <a 
                  href="mailto:alex.morgan@email.com"
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
              <a href="#" className="hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Linkedin size={20} />
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