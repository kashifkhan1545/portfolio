'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/resumeData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Sparkles,
  ExternalLink,
  MessageCircle
} from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Have a project in mind, need a mobile/web application developed, or looking to hire a Full-Stack Engineer? Connect directly through any of the channels below.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Email Card */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Direct Email
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-lg font-bold text-white hover:text-sky-400 transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Available for project inquiries, freelance contracts, and full-time engineering roles.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-sky-500/20 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email Now</span>
              </a>
            </div>
          </div>

          {/* Phone / WhatsApp Card */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
                  title="Copy phone number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Phone / WhatsApp
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-lg font-bold text-white hover:text-emerald-400 transition-colors font-mono"
              >
                {PERSONAL_INFO.phone}
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Direct phone and WhatsApp messaging for swift communication across time zones.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex gap-3">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Directly</span>
              </a>
              <a
                href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* LinkedIn Profile Card */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                  Professional Network
                </span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                LinkedIn Profile
              </div>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-white hover:text-indigo-400 transition-colors flex items-center gap-1.5"
              >
                <span>muhammad-kashif-shabeer</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Connect on LinkedIn for endorsements, full work history, and industry collaborations.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>Visit LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Location & Availability Card */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Ready to Start
                </span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Location & Relocation
              </div>
              <div className="text-lg font-bold text-white">
                {PERSONAL_INFO.location}
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Available for worldwide remote roles (EST, PST, GMT, PKT) and open to relocation opportunities.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-white/5">
                <span className="font-semibold text-slate-200">Work Preference:</span>
                <span className="text-emerald-400 font-medium">Remote • Hybrid • Onsite</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
