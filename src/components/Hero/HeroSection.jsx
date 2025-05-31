import React from 'react';
import { Github, Linkedin, Download, ArrowRight, Code2, Sparkles, Terminal, Database } from 'lucide-react';
import workFromHomePng from '../../assets/work-from-home.png';
import resumePDF from '../../assets/resume.pdf';

const HeroSection = ({ heroRef }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-4 pt-16 relative overflow-hidden" ref={heroRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-blue-900/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-cyan-600/20 rounded-full filter blur-3xl animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-600/10 rounded-full filter blur-2xl animate-float"></div>
      
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          
          <div className="text-center lg:text-left order-2 lg:order-1 space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-full border border-emerald-400/30 shadow-lg shadow-emerald-500/10">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-sm text-emerald-300 font-medium tracking-wide">AVAILABLE FOR OPPORTUNITIES</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1] tracking-tight">
                <span className="text-white">
                  Hi, I'm{' '}
                </span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Muhaimin Jobayer
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Full-Stack Software Engineer
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-2xl">
                  I transform{' '}
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-semibold">complex challenges</span>{' '}
                  into{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">elegant, scalable solutions</span>{' '}
                  using modern technologies and best practices.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/mmj05"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhaimin-jobayer"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={resumePDF}
                download="Muhaimin_Jobayer_Resume.pdf"
                className="group p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-cyan-400/20 to-purple-500/20 blur-3xl"></div>
              
              <div className="relative w-full max-w-[400px] group">
                <img
                  src={workFromHomePng}
                  alt="Muhaimin working on laptop"
                  className="w-full h-auto object-contain filter drop-shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-110"
                />
                
                <div className="absolute -top-6 left-20 p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-xl border border-blue-400/20 animate-float">
                  <Code2 className="w-6 h-6 text-blue-400" />
                </div>
                <div className="absolute top-24 -right-8 p-3 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-md rounded-xl border border-cyan-400/20 animate-float animation-delay-500">
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="absolute bottom-20 -left-6 p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-md rounded-xl border border-purple-400/20 animate-float animation-delay-1000">
                  <span className="text-lg font-mono text-purple-400">{`</>`}</span>
                </div>
                <div className="absolute bottom-1/3 -right-4 p-3 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-md rounded-xl border border-emerald-400/20 animate-float animation-delay-700">
                  <Database className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="absolute top-1/3 -left-8 p-3 bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-md rounded-xl border border-orange-400/20 animate-float animation-delay-300">
                  <Terminal className="w-5 h-5 text-orange-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-6 font-semibold tracking-[0.2em] uppercase">Technologies I Work With</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'React', gradient: 'from-blue-400 to-blue-600', shadow: 'shadow-blue-500/20' },
              { name: 'TypeScript', gradient: 'from-blue-400 to-cyan-500', shadow: 'shadow-cyan-500/20' },
              { name: 'Spring Boot', gradient: 'from-green-400 to-green-600', shadow: 'shadow-green-500/20' },
              { name: 'Java', gradient: 'from-orange-400 to-red-500', shadow: 'shadow-orange-500/20' },
              { name: 'PostgreSQL', gradient: 'from-blue-500 to-indigo-600', shadow: 'shadow-indigo-500/20' }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className={`group px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-default ${tech.shadow} shadow-lg`}
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${1.2 + index * 0.15}s`
                }}
              >
                <span className={`font-medium bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;