import React from 'react';
import { Github, Linkedin, Download, ArrowRight, Code2, Sparkles, Terminal, Database } from 'lucide-react';

const HeroSection = ({ heroRef }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden" ref={heroRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-blue-900/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-cyan-600/20 rounded-full filter blur-3xl animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-600/10 rounded-full filter blur-2xl animate-float"></div>
      
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
          
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/5 via-cyan-400/5 to-purple-500/5 rounded-full blur-2xl"></div>
              
              <div className="relative w-96 h-96 lg:w-[420px] lg:h-[420px] group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-full p-0.5 transition-all duration-700">
                  <div className="w-full h-full bg-gradient-to-br from-slate-900/80 via-black/60 to-slate-800/80 rounded-full backdrop-blur-sm"></div>
                </div>
                
                <div className="absolute inset-1 rounded-full overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                  <img
                    src="/profile-picture.jpg"
                    alt="Muhaimin Jobayer - Full-Stack Software Engineer"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10"></div>
                </div>
                
                <div className="absolute -top-6 left-20 p-3 bg-black/20 backdrop-blur-md rounded-xl border border-white/10 animate-float opacity-80">
                  <Code2 className="w-5 h-5 text-blue-300" />
                </div>
                <div className="absolute top-24 -right-8 p-3 bg-black/20 backdrop-blur-md rounded-xl border border-white/10 animate-float animation-delay-500 opacity-80">
                  <Sparkles className="w-5 h-5 text-cyan-300" />
                </div>
                <div className="absolute bottom-20 -left-6 p-3 bg-black/20 backdrop-blur-md rounded-xl border border-white/10 animate-float animation-delay-1000 opacity-80">
                  <span className="text-base font-mono text-purple-300">{`</>`}</span>
                </div>
                <div className="absolute bottom-1/3 -right-4 p-2 bg-black/20 backdrop-blur-md rounded-lg border border-white/10 animate-float animation-delay-700 opacity-80">
                  <Database className="w-4 h-4 text-emerald-300" />
                </div>
                <div className="absolute top-1/3 -left-8 p-2 bg-black/20 backdrop-blur-md rounded-lg border border-white/10 animate-float animation-delay-300 opacity-80">
                  <Terminal className="w-4 h-4 text-orange-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left order-2 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-full border border-emerald-400/30 shadow-lg shadow-emerald-500/10">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-sm text-emerald-300 font-medium">Available for opportunities</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-gradient mb-3">
                  Hi, I'm Muhaimin Jobayer
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                A Full-Stack Software Engineer who transforms{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                  complex challenges
                </span>{' '}
                into{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  elegant, scalable solutions.
                </span>
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Code2 className="w-5 h-5 relative z-10" />
                <span className="relative z-10 font-medium">View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <span className="font-medium">Get In Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/mmj05"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 hover:shadow-lg transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhaimin-jobayer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 hover:shadow-lg transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                download="Muhaimin_Jobayer_Resume.pdf"
                className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 hover:shadow-lg transition-all duration-300 hover:scale-110 group"
              >
                <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 mb-6 font-medium tracking-wider uppercase">Technologies I Work With</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'React', color: 'from-blue-400 to-blue-600' },
              { name: 'TypeScript', color: 'from-blue-400 to-cyan-500' },
              { name: 'Spring Boot', color: 'from-green-400 to-green-600' },
              { name: 'Java', color: 'from-orange-400 to-red-500' },
              { name: 'PostgreSQL', color: 'from-blue-500 to-indigo-600' }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="group relative px-6 py-3 backdrop-blur-sm rounded-full border border-white/20 text-sm hover:border-white/40 transition-all duration-300 hover:scale-110 cursor-default shadow-lg overflow-hidden"
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${1.2 + index * 0.15}s`,
                  background: tech.color.includes('blue-400 to-blue-600') ? 'linear-gradient(to right, #60a5fa, #2563eb)' :
                             tech.color.includes('blue-400 to-cyan-500') ? 'linear-gradient(to right, #60a5fa, #06b6d4)' :
                             tech.color.includes('green-400 to-green-600') ? 'linear-gradient(to right, #4ade80, #16a34a)' :
                             tech.color.includes('orange-400 to-red-500') ? 'linear-gradient(to right, #fb923c, #ef4444)' :
                             tech.color.includes('blue-500 to-indigo-600') ? 'linear-gradient(to right, #3b82f6, #4338ca)' : ''
                }}
              >
                <span className="relative z-10 font-medium text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;