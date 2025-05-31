import React from 'react';

const BackgroundParticles = ({ particles }) => {
  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.id * 0.1}s`
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;