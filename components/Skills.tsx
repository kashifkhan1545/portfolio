'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '@/data/resumeData';
import { 
  Layout, 
  Smartphone, 
  Server, 
  Database, 
  Cloud, 
  Sparkles, 
  Check, 
  Search, 
  Filter 
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Smartphone,
  Server,
  Database,
  Cloud,
  Sparkles
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allSkills = SKILL_CATEGORIES.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, category: cat.title }))
  );

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (selectedCategory !== 'All' && cat.title !== selectedCategory) {
      return false;
    }
    return true;
  }).map((cat) => {
    return {
      ...cat,
      skills: cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    };
  }).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            Technical Stack & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools, Technologies & <span className="text-gradient">Frameworks</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A comprehensive suite of modern engineering tools mastered over 4+ years of building production-grade web, mobile, and cloud software.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60'
              }`}
            >
              All Skills ({allSkills.length})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.title
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, Agora, Stripe)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900/90 border border-slate-700/80 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.icon] || Layout;
            return (
              <div
                key={category.title}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/5 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/5">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          skill.highlight
                            ? 'bg-sky-950/70 border border-sky-500/40 text-sky-200 shadow-sm shadow-sky-500/10 hover:border-sky-400'
                            : 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-slate-100'
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{category.skills.length} core technologies</span>
                  <span className="text-emerald-400 font-mono flex items-center gap-1">
                    <Check className="w-3 h-3" /> Production Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-400 glass-panel rounded-2xl p-8">
            <p>No technologies matched "{searchTerm}". Try a different keyword!</p>
          </div>
        )}

      </div>
    </section>
  );
}

