import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full py-12">
      <div className="overflow-hidden">
        <div className="relative h-[500px] mx-auto max-w-4xl">
          {projects.map((project, index) => {
            const position = (index - currentIndex + projects.length) % projects.length;
            const isActive = position === 0;
            const isPrev = position === projects.length - 1;
            const isNext = position === 1;

            let translateX = '100%';
            let translateZ = '-200px';
            let opacity = '0';
            let scale = '0.8';

            if (isActive) {
              translateX = '0';
              translateZ = '0';
              opacity = '1';
              scale = '1';
            } else if (isPrev) {
              translateX = '-100%';
              translateZ = '-200px';
              opacity = '0.5';
            } else if (isNext) {
              translateX = '100%';
              translateZ = '-200px';
              opacity = '0.5';
            }

            return (
              <div
                key={index}
                className="absolute w-full transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateX(${translateX}) translateZ(${translateZ}) scale(${scale})`,
                  opacity,
                }}
              >
                <ProjectCard {...project} />
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={prevProject}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-emerald-500 p-3 rounded-full text-white shadow-lg transition-all hover:bg-emerald-600 hover:scale-110 z-10"
        aria-label="Previous project"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextProject}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-emerald-500 p-3 rounded-full text-white shadow-lg transition-all hover:bg-emerald-600 hover:scale-110 z-10"
        aria-label="Next project"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-emerald-500 w-4' : 'bg-gray-600'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;