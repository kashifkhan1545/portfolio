'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PERSONAL_INFO } from '@/data/resumeData';
import { 
  ArrowRight, 
  Linkedin, 
  Mail, 
  MapPin, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Smartphone, 
  Layers 
} from 'lucide-react';

const ROLES = [
  "Full-Stack Software Engineer (MEAN & MERN)",
  "React Native & Flutter Mobile Specialist",
  "Next.js & Vue.js Frontend Architect",
  "Node.js & Python/FastAPI Backend Developer",
  "AI & LLM Integration Specialist"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText !== currentFullText) {
      timeout = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
      }, 60);
    } else if (!isDeleting && displayedText === currentFullText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayedText !== '') {
      timeout = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-slate-300 text-xs font-medium self-center lg:self-start shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Stack & Mobile Opportunities</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Hi, I'm <span className="text-gradient">Muhammad Kashif Shabeer</span>
              </h1>
              
              {/* Dynamic Typewriter Title */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <p className="text-lg sm:text-2xl font-semibold text-sky-400 font-mono flex items-center">
                  <span>{displayedText}</span>
                  <span className="w-0.5 h-6 ml-1 bg-sky-400 animate-pulse inline-block" />
                </p>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PERSONAL_INFO.bio}
            </p>

            {/* Quick Skills highlights tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              {['React Native', 'Flutter', 'Next.js', 'Vue.js', 'MEAN Stack', 'Node.js', 'Python/FastAPI', 'Agora SDK', 'Stripe', 'LangChain'].map((tech) => (
                <span key={tech} className="tech-pill">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5"
              >
                <span>View Shipped Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/50 transition-all duration-200 hover:text-sky-300 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/50 transition-all duration-200 hover:text-sky-300 hover:-translate-y-0.5"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>

            {/* Location & Quick Meta */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                BS in Information Technology (2023)
              </span>
            </div>
          </div>

          {/* Right Hero Visual Column (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Glow Gradient Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-60 animate-pulse-glow"></div>
              
              {/* Main Card Frame with Image Placeholder */}
              <div className="relative glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 shadow-2xl">
                
                {/* Image Placeholder Container */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-700/60 shadow-inner group">
                  <Image
                    src="/avatar-placeholder.svg"
                    alt="Muhammad Kashif Shabeer - Developer Profile"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle overlay badge inside image */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-xl p-2.5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></div>
                      <span className="font-semibold text-slate-200">Muhammad Kashif Shabeer</span>
                    </div>
                    <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider bg-sky-500/10 px-2 py-0.5 rounded-md border border-sky-500/30">
                      4+ Yrs EXP
                    </span>
                  </div>
                </div>

                {/* Floating Micro Highlights around card */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">5+ Mobile Apps</div>
                      <div className="text-[11px] text-slate-400">App Store & Play Store</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">5+ Web Platforms</div>
                      <div className="text-[11px] text-slate-400">Next.js & Electron</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Highlight Stats Strip */}
        <div id="stats-section" className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-5 text-center border border-white/5 relative overflow-hidden group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:text-sky-400 transition-colors">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                {stat.label}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

