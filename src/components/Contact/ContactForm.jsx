import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import { User, Mail, MessageSquare, Send, ArrowRight, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mvowwkry");

  if (state.succeeded) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 p-6 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300">
          <CheckCircle className="w-6 h-6 flex-shrink-0" />
          <div>
            <p className="font-medium text-lg">Message sent successfully!</p>
            <p className="text-sm opacity-90">Thanks for reaching out. I'll get back to you soon.</p>
          </div>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Your Name"
          className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
          className="flex items-center gap-2 mt-2 text-red-400 text-sm"
        />
      </div>
      
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Your Email"
          className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="flex items-center gap-2 mt-2 text-red-400 text-sm"
        />
      </div>
      
      <div className="relative">
        <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
        <textarea
          name="message"
          id="message"
          required
          rows={6}
          placeholder="Your Message"
          className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors resize-none"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="flex items-center gap-2 mt-2 text-red-400 text-sm"
        />
      </div>
      
      <button
        type="submit"
        disabled={state.submitting}
        className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {state.submitting ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <Send className="w-5 h-5" />
        )}
        <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
        {!state.submitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
      </button>
      
      {state.errors && state.errors.length > 0 && !state.errors.some(error => error.field) && (
        <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300">
          <p className="font-medium">Oops! Something went wrong.</p>
          <p className="text-sm opacity-90">Please try again or contact me directly via email.</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;