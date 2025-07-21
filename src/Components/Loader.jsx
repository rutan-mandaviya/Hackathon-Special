import React, { useEffect, useState } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 10); // 100 * 10ms = ~1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Circle Spinner */}
        <div className="w-full h-full border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Percentage text inside the spinner */}
        <span className="absolute text-xl font-semibold text-indigo-900">
          {progress}%
        </span>
      </div>
    </div>
  );
}
