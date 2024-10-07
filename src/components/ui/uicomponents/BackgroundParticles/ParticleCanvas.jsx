import React, { useState } from 'react'
import { useRef, useEffect } from 'react';

import Particle from './Particle';

const ParticleCanvas = ({ parentRef }) => {
    const canvasRef = useRef(null);
    const particlesList = useRef([]);

    const debounceResize = (callback, delay = 100) => {
        let timeout;
        return (event) => {
            if (timeout) {
                clearTimeout(timeout);
            }
            // Set a new timeout regardless
            timeout = setTimeout(() => {
                callback(event);
            }, delay);
        };
    };

    const handleResize = debounceResize(event => {
        const canvas = canvasRef.current;
        canvas.width = parentRef.current.offsetWidth;
        canvas.height = parentRef.current.offsetHeight;
        const context = canvas.getContext("2d");
        const animate = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < particlesList.current.length; i++) {
            particlesList.current[i].updatePosition({ width: canvas.width, height: canvas.height });
    
            for (let j = i; j < particlesList.current.length; j++) {
              const dx = particlesList.current[i].xCoord - particlesList.current[j].xCoord;
              const dy = particlesList.current[i].yCoord - particlesList.current[j].yCoord;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < 50) {
                context.beginPath();
                context.strokeStyle = particlesList.current[i].color;
                context.lineWidth = particlesList.current[i].size / 10;
                context.moveTo(particlesList.current[i].xCoord, particlesList.current[i].yCoord);
                context.lineTo(particlesList.current[j].xCoord, particlesList.current[j].yCoord);
                context.stroke();
              }
            }
          }
          requestAnimationFrame(animate);
        };
        animate()
    }, 100);

    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      canvas.width = parentRef.current.offsetWidth;
      canvas.height = parentRef.current.offsetHeight;
  
      
      const init = () => {
        for (let i = 0; i < 400; i++) {
          const particle = new Particle(10, 2, canvas, context);
          particlesList.current.push(particle);
        }
      };

  
      const animate = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesList.current.length; i++) {
          particlesList.current[i].drawParticle();
          particlesList.current[i].updatePosition();
  
          for (let j = i; j < particlesList.current.length; j++) {
            const dx = particlesList.current[i].xCoord - particlesList.current[j].xCoord;
            const dy = particlesList.current[i].yCoord - particlesList.current[j].yCoord;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 50) {
              context.beginPath();
              context.strokeStyle = particlesList.current[i].color;
              context.lineWidth = particlesList.current[i].size / 10;
              context.moveTo(particlesList.current[i].xCoord, particlesList.current[i].yCoord);
              context.lineTo(particlesList.current[j].xCoord, particlesList.current[j].yCoord);
              context.stroke();
            }
          }
        }
        requestAnimationFrame(animate);
      };
      
      init();
      animate();
  
      // Event listeners
      window.addEventListener("resize", handleResize);
  
      // Cleanup listeners on unmount
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty dependency array to run only once on component mount
  
    return (
      <canvas ref={canvasRef}  />
    );
}

export default ParticleCanvas