'use client';

import React, { useState } from 'react';
import { FEATURED_PROJECTS, Project } from '@/data/resumeData';
import { 
  ExternalLink, 
  Apple, 
  Globe, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  Layout, 
  Bot, 
  Building2, 
  Truck, 
  Activity, 
  FileSpreadsheet, 
  GraduationCap, 
  ArrowUpRight 
} from 'lucide-react';

const iconComponents: Record<string, React.ElementType> = {
  Apple,
  Sparkles,
  Activity,
  FileSpreadsheet,
  GraduationCap,
  Bot,
  Building2,
  Truck,
  Globe,
  CheckCircle2: Globe,
};

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'mobile' | 'web'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.type === filter;
  });

  return (
    <section id="projects" className="py-24 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Featured Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Shipped <span className="text-gradient">Production Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A curated showcase of live App Store mobile applications and production web platforms delivered with end-to-end architecture.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({FEATURED_PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                filter === 'mobile'
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Mobile Apps (App Store)</span>
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                filter === 'web'
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layout className="w-4 h-4" />
              <span>Web & Cloud Platforms</span>
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => {
            const Icon = iconComponents[project.iconName] || Globe;
            const isAppStore = project.type === 'mobile';

            return (
              <div
                key={project.id}
                className="glass-panel glass-panel-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background Card Gradient Header */}
                <div className={`absolute top-0 left-0 right-0 h-28 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                <div className="relative z-10">
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center text-sky-400 shadow-md group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                      isAppStore 
                        ? 'bg-sky-500/10 text-sky-300 border-sky-500/30' 
                        : 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                    }`}>
                      {project.categoryBadge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mb-3">
                    {project.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Feature Highlights Bullet Points */}
                  <div className="space-y-1.5 mb-5 bg-slate-900/40 rounded-xl p-3 border border-white/5">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/5 space-y-4">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-pill text-[11px] py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Button */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-sky-600 border border-slate-700 hover:border-sky-500 transition-all duration-200 group/btn shadow-md"
                  >
                    <span>{project.buttonLabel}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

