import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <p className="text-gray-400">
            Designed & Built with <span className="text-red-500">❤️</span> using React
          </p>
        </div>
        <div className="flex justify-center gap-6 mb-6">
          <a 
            href="https://github.com/mmj05" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
            aria-label="Visit my GitHub profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/muhaimin-jobayer" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
            aria-label="Connect with me on LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:muhaimin.jobayer@gmail.com" 
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
            aria-label="Send me an email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-500">
            © 2024 Muhaimin Jobayer. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            <a 
              href="mailto:muhaimin.jobayer@gmail.com" 
              className="hover:text-cyan-400 transition-colors"
            >
              muhaimin.jobayer@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;