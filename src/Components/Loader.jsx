import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Loader({ onComplete }) {
  const progressRef = useRef(0);
  const displayProgressRef = useRef(0);
  const loaderRef = useRef(null);
  const petalsRef = useRef([]);
  const progressBarRef = useRef(null);
  const animationRef = useRef(null);
  const progressTextRef = useRef(null);

  // Update progress display with animation
  const updateProgressDisplay = () => {
    if (displayProgressRef.current < progressRef.current) {
      displayProgressRef.current += 1;
      progressTextRef.current.textContent = `${displayProgressRef.current}%`;
      progressBarRef.current.style.width = `${displayProgressRef.current}%`;
      requestAnimationFrame(updateProgressDisplay);
    }
  };

  useEffect(() => {
    // Reset progress values
    progressRef.current = 0;
    displayProgressRef.current = 0;
    
    // Petal animation
    const petalAnimation = gsap.to(petalsRef.current, {
      rotation: 360,
      duration: 12,
      repeat: -1,
      ease: "none"
    });

    // Main progress animation
    animationRef.current = gsap.to(progressRef, {
      current: 100,
      duration: 3,
      ease: "power1.out",
      onUpdate: () => {
        // Update the visual progress display
        requestAnimationFrame(updateProgressDisplay);
      },
      onComplete: () => {
        // Ensure we reach exactly 100%
        progressRef.current = 100;
        updateProgressDisplay();
        
        // Fade out animation when complete
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.6,
          onComplete: onComplete
        });
      }
    });

    return () => {
      // Clean up animations
      petalAnimation.kill();
      if (animationRef.current) animationRef.current.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-indigo-50 z-[9999]"
    >
      {/* Perfume bottle silhouette - Responsive sizing */}
      <div className="relative w-[80px] h-[120px] sm:w-32 sm:h-48 mb-6 sm:mb-8">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-32 sm:w-16 sm:h-40 bg-gradient-to-t from-pink-300 to-pink-500 rounded-lg shadow-lg"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-pink-400 rounded-full"></div>
        
        {/* Floating petals */}
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            ref={el => petalsRef.current[i] = el}
            className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-pink-200 rounded-full opacity-80"
            style={{
              top: `${Math.random() * 30 + 10}%`,
              left: `${Math.random() * 60 + 20}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          ></div>
        ))}
      </div>

      {/* Progress bar - Responsive sizing */}
      <div className="w-[200px] sm:w-64 h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden mb-4 sm:mb-6 mx-4">
        <div 
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-pink-400 to-indigo-500"
          style={{ width: '0%' }}
        ></div>
      </div>

      {/* Percentage text - Responsive sizing */}
      <div className="relative">
        <span 
          ref={progressTextRef}
          className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600"
        >
          0%
        </span>
      </div>

      {/* Brand logo - Responsive positioning */}
      <div className="absolute bottom-4 sm:bottom-8 text-xs text-gray-400">
        Lancôme Paris
      </div>
    </div>
  );
}