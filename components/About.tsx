import React from 'react';
import { PERSONAL_INFO } from '@/data/resumeData';
import { 
  Laptop, 
  Smartphone, 
  Server, 
  Cpu, 
  CreditCard, 
  GraduationCap, 
  CheckCircle2, 
  Bot, 
  Zap, 
  Code 
} from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Smartphone,
      title: "Cross-Platform Mobile Apps",
      description: "Proven track record designing, building, and deploying production iOS and Android apps with React Native, Flutter, Expo CLI, and EAS Build directly to the App Store and Google Play.",
      gradient: "from-sky-500/20 to-blue-500/10",
      borderColor: "group-hover:border-sky-500/40"
    },
    {
      icon: Laptop,
      title: "Modern Web & Desktop Apps",
      description: "Architecting responsive, high-performance web dashboards and platforms using Next.js, React.js, TypeScript, Tailwind CSS, and Electron desktop wrappers with native OS releases.",
      gradient: "from-indigo-500/20 to-purple-500/10",
      borderColor: "group-hover:border-indigo-500/40"
    },
    {
      icon: Server,
      title: "Scalable Backends & APIs",
      description: "Engineering low-latency REST and GraphQL APIs using Node.js, Express.js, and Python/FastAPI backed by MongoDB, PostgreSQL, Supabase, and AWS Amplify infrastructure.",
      gradient: "from-purple-500/20 to-pink-500/10",
      borderColor: "group-hover:border-purple-500/40"
    },
    {
      icon: CreditCard,
      title: "Real-Time & Monetization",
      description: "Hands-on integration of live audio/video streaming with Agora SDK, WebSocket/Socket.io live data channels, Stripe payment checkouts, and RevenueCat subscription paywalls.",
      gradient: "from-emerald-500/20 to-teal-500/10",
      borderColor: "group-hover:border-emerald-500/40"
    },
    {
      icon: Bot,
      title: "AI & LLM Integration",
      description: "Building intelligent workflows and contextual chatbots using LangChain, Vector search databases (Pinecone), and LLM prompt engineering to deliver personalized user experiences.",
      gradient: "from-amber-500/20 to-orange-500/10",
      borderColor: "group-hover:border-amber-500/40"
    },
    {
      icon: Zap,
      title: "AI-Assisted Velocity",
      description: "Leveraging cutting-edge AI engineering workflows — Cursor, GitHub Copilot, and Claude Code — to accelerate rapid prototyping, unit testing, refactoring, and clean code delivery.",
      gradient: "from-cyan-500/20 to-sky-500/10",
      borderColor: "group-hover:border-cyan-500/40"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            About Me & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building Full-Stack Solutions Across <span className="text-gradient">Web, Mobile & Cloud</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            From architecture to production deployment, I engineer complete digital products that combine intuitive client interfaces with robust, scalable backends.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`glass-panel glass-panel-hover rounded-2xl p-6 border border-white/5 relative group overflow-hidden transition-all duration-300 ${pillar.borderColor}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} border border-white/10 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Education & Background Highlight */}
        <div className="glass-panel rounded-2xl p-8 border border-white/10 relative overflow-hidden bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {PERSONAL_INFO.education.degree}
                  </h4>
                  <p className="text-sm text-sky-400 font-medium">
                    {PERSONAL_INFO.education.institution} • {PERSONAL_INFO.education.period}
                  </p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed pl-2">
                Focused on Computer Science fundamentals, Software Engineering methodologies, Relational & NoSQL Database Systems, Object-Oriented Programming, Data Structures & Algorithms, and Distributed Cloud Computing.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col justify-center space-y-2 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>BS in IT (4-Year Degree)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>4+ Years Production Experience</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Multi-App Store Release Ownership</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

