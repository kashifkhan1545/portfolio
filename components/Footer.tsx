import React from 'react';
import { PERSONAL_INFO } from '@/data/resumeData';
import { Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-md">
              KS
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-xs text-slate-400">
                Full-Stack Software Engineer • Web & Mobile
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <a
              href="#about"
              className="hover:text-sky-400 transition-colors"
            >
              About
            </a>
            <span>•</span>
            <a
              href="#skills"
              className="hover:text-sky-400 transition-colors"
            >
              Skills
            </a>
            <span>•</span>
            <a
              href="#projects"
              className="hover:text-sky-400 transition-colors"
            >
              Projects
            </a>
            <span>•</span>
            <a
              href="#experience"
              className="hover:text-sky-400 transition-colors"
            >
              Experience
            </a>
            <span>•</span>
            <a
              href="#contact"
              className="hover:text-sky-400 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500 transition-colors flex items-center gap-1 text-xs"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Next.js, TypeScript & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}

