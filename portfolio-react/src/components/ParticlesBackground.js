import React, { useEffect } from 'react';

function ParticlesBackground() {
  useEffect(() => {
    const particleContainer = document.querySelector('.particles');
    const numParticles = 60;

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 4 + 2;
      const startX = Math.random() * 100;

      particle.classList.add('particle');
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.bottom = `-${size}px`;
      particle.style.left = `${startX}vw`;
      particle.style.animationDuration = `${Math.random() * 20 + 10}s`;

      particleContainer.appendChild(particle);
    }
  }, []);

  return <div className="particles"></div>;
}

export default ParticlesBackground;
