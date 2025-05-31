import React from "react";
import SkillGroup from "./SkillGroup";

const SkillsSection = ({ skills, hoveredSkill, setHoveredSkill }) => {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-900/10 to-black"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-400">Mastering the tools that build tomorrow</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <SkillGroup
              key={skillGroup.category}
              skillGroup={skillGroup}
              index={index}
              hoveredSkill={hoveredSkill}
              setHoveredSkill={setHoveredSkill}
            />
          ))}
        </div>

        <div className="mt-16 relative h-64 overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-white/5">{'</>'}</div>
          </div>
          {['React', 'Java', 'PostgreSQL', 'Spring Boot', 'Docker', 'TypeScript', 'SQL', 'Git'].map((tech, index) => (
            <div
              key={tech}
              className="absolute px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm"
              style={{
                top: `${20 + Math.sin(index) * 30}%`,
                left: `${10 + (index * 12) % 80}%`,
                animation: `orbit ${15 + index * 2}s linear infinite`,
                animationDelay: `${index * 0.5}s`
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;