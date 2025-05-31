import React from "react";

const SkillGroup = ({ skillGroup, index, hoveredSkill, setHoveredSkill }) => {
  const IconComponent = skillGroup.icon;
  
  return (
    <div
      className="group relative"
      onMouseEnter={() => setHoveredSkill(skillGroup.category)}
      onMouseLeave={() => setHoveredSkill(null)}
      style={{
        animation: `fadeInUp 0.6s ease-out forwards`,
        animationDelay: `${index * 0.1}s`,
        opacity: 0
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl`}></div>
      
      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-white/30 transition-all duration-500 h-full">
        <div className={`inline-flex p-3 bg-gradient-to-br ${skillGroup.color} rounded-xl mb-4`}>
          <IconComponent className="w-6 h-6" />
        </div>
        
        <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
        
        <div className="space-y-3">
          {skillGroup.items.map((skill, idx) => (
            <div
              key={skill}
              className="flex items-center gap-3 group/item"
              style={{
                animation: hoveredSkill === skillGroup.category ? `slideIn 0.3s ease-out forwards` : '',
                animationDelay: `${idx * 0.05}s`,
                opacity: hoveredSkill === skillGroup.category ? 1 : 0.8
              }}
            >
              <div className={`w-2 h-2 bg-gradient-to-r ${skillGroup.color} rounded-full group-hover/item:scale-150 transition-transform`}></div>
              <span className="text-gray-300 group-hover/item:text-white transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillGroup;