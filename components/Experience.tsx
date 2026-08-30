'use client';

import React from 'react';
import { WORK_EXPERIENCES } from '@/data/resumeData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, ChevronRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Proven history of delivering high-impact web and mobile engineering across fast-moving startups and international tech firms.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-purple-500 before:to-slate-800">
          {WORK_EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative pl-12 sm:pl-20 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute left-2 sm:left-6 top-1.5 -translate-x-1/2 w-5 h-5 rounded-full bg-slate-900 border-2 border-sky-400 group-hover:bg-sky-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(56,189,248,0.6)] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>

              {/* Experience Card */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-white/10 relative">
                
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 mb-4 border-b border-white/5">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                      <span className="text-sky-400 font-semibold flex items-center gap-1">
                        <Building className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-rose-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start md:self-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-300 border border-sky-500/30">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Accomplishments Bullet Points */}
                <ul className="space-y-2.5 mb-6 text-sm text-slate-300 leading-relaxed">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack used */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                    Tech Stack:
                  </span>
                  {exp.skillsUsed.map((skill) => (
                    <span key={skill} className="tech-pill text-xs py-0.5">
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

