import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 hover:border-white/30 transition-all duration-500">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Greetings! I am Muhaimin, a <span className="text-blue-400 font-semibold">full-stack software engineer</span> with a focus on 
              <span className="text-cyan-400 font-semibold"> React, TypeScript, Java, Spring Boot,</span> and proficient database management using
              <span className="text-cyan-400 font-semibold"> PostgreSQL</span>. My passion lies in crafting seamless user interfaces and architecting 
              robust backend systems, addressing the complexities of modern web development.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              As a <span className="text-blue-400 font-semibold">software engineering undergraduate</span> graduating in 10 months, I bring a unique 
              blend of academic knowledge and <span className="text-cyan-400 font-semibold">hands-on experience from personal projects and bootcamp training</span>. 
              Over the course of my career, I have continuously honed my skills in various aspects of web development and design.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently, I am harnessing the capabilities of <span className="text-blue-400 font-semibold">React and Spring Boot</span>, all while expanding 
              my proficiency with the integration of new tools and technologies. I'm not just looking for a job—I'm seeking a place where I can 
              <span className="text-cyan-400 font-semibold"> make a real impact</span>, where complex challenges are the norm, innovation is celebrated, 
              and the code we write today shapes the technology of tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { label: 'Projects Built', value: '10+', gradient: 'from-blue-400 to-cyan-400' },
              { label: 'Technologies', value: '20+', gradient: 'from-cyan-400 to-blue-400' },
              { label: 'Graduating In', value: '10 mo', gradient: 'from-emerald-400 to-teal-400' },
              { label: 'Coffee Consumed', value: '∞', gradient: 'from-orange-400 to-red-400' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;