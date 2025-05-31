import React from 'react';
import ContactForm from './ContactForm';
import { Linkedin, Github, Mail, Terminal, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-900/10 to-black"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400">Have a question or want to work together?</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-white/30 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 text-center">Send Me a Message</h3>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-white/30 transition-all duration-500">
              <p className="text-lg text-gray-300 mb-8">
                I'm actively seeking opportunities to join a forward-thinking team where I can contribute my skills 
                and passion for creating exceptional software. Whether you have a position available or just want to 
                chat about technology, I'd love to hear from you!
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="https://www.linkedin.com/in/muhaimin-jobayer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Connect on LinkedIn</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-auto" />
                </a>
                <a
                  href="https://github.com/mmj05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>View My Code</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-auto" />
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 text-center">
                <Github className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform mx-auto" />
                <h3 className="font-semibold mb-1">GitHub</h3>
                <p className="text-sm text-gray-400">Check out my code</p>
              </div>
              <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 text-center">
                <Mail className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform mx-auto" />
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-gray-400">Drop me a line</p>
              </div>
              <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 text-center">
                <Terminal className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform mx-auto" />
                <h3 className="font-semibold mb-1">Projects</h3>
                <p className="text-sm text-gray-400">See my work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;