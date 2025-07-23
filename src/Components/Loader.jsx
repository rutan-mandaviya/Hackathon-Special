import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Loader({ onComplete }) {
  const progressRef = useRef(0);
  const displayProgressRef = useRef(0);
  const loaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);
  const logoRef = useRef(null);

  const updateProgressDisplay = () => {
    if (displayProgressRef.current < progressRef.current) {
      displayProgressRef.current += 1;
      progressTextRef.current.textContent = `${displayProgressRef.current}%`;
      progressBarRef.current.style.width = `${displayProgressRef.current}%`;
      requestAnimationFrame(updateProgressDisplay);
    }
  };

  useEffect(() => {
    // Debugging: Check if image path is correct
    console.log('Image path:', '/loaderimg.png'); // Verify this path in your console
    
    progressRef.current = 0;
    displayProgressRef.current = 0;

    // Logo animation
    gsap.from(logoRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)"
    });

    // Progress animation
    const tl = gsap.timeline();
    tl.to(progressRef, {
      current: 100,
      duration: 3,
      ease: "power1.out",
      onUpdate: updateProgressDisplay,
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.8,
          onComplete: onComplete
        });
      }
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]"
    >
      {/* Logo Container with Debugging */}
      <div className="relative mb-8">
        <img
          ref={logoRef}
          src="/loaderimg.png" 
          alt="Lancôme Logo"
          className="w-42 h-32 object-contain"
          onError={(e) => {
            console.error('Image failed to load', e);
            e.target.style.border = '2px solid red'; // Visual debug
          }}
        />
      </div>

      {/* Progress Percentage */}
      <div 
        ref={progressTextRef}
        className="text-4xl font-thin text-pink-600 mb-4"
      >
        0%
      </div>

      {/* Progress Bar */}
      <div className="w-48 h-0.5 bg-gray-100 overflow-hidden mb-12">
        <div 
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-pink-400 to-pink-600"
          style={{ width: '0%' }}
        />
      </div>

      {/* Brand Text */}
      <div className="text-xs tracking-widest text-gray-400">
        LANCÔME • PARIS
      </div>
    </div>
  );
}