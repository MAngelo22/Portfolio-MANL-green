import React, { useEffect, useRef, useState } from 'react';

interface SkillCardProps {
  title: string;
  level: string;
  progress: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, level, progress }) => {
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all group">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{level}</p>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden" ref={progressRef}>
        <div
          className="h-full bg-emerald-500 transition-all duration-1000 ease-out group-hover:bg-emerald-400"
          style={{
            width: isVisible ? `${progress}%` : '0%',
            transition: 'width 1s ease-out',
          }}
        />
      </div>
    </div>
  );
};

export default SkillCard;