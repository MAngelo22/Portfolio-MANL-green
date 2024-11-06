import React from 'react';
import { Cat, Monitor } from 'lucide-react'; // Importing icons from lucide-react

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string; // Optional
  live: string;    // Live demo link is required
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  github,
  live,
}) => {
  return (
    <div className="glass-card rounded-lg overflow-hidden transition-all group hover:glass-card-hover relative z-10">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-emerald-500">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 glass-tag text-sm rounded-full text-emerald-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <Cat size={20} className="mr-1" /> {/* GitHub icon */}
              GitHub
            </a>
          )}
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-500 hover:underline"
          >
            <Monitor size={20} className="mr-1" /> {/* Live Demo icon */}
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
