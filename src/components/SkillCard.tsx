import React, { useEffect, useRef, useState } from 'react';

interface SkillCardProps {
  title: string;
  level: string;
  progress: number;
<<<<<<< HEAD
}

const SkillCard: React.FC<SkillCardProps> = ({ title, level, progress }) => {
=======
  icon?: React.ReactNode; // Propiedad icon opcional
  img?: string; // Nueva propiedad para la imagen
  className?: string; // Clase adicional opcional
}

const SkillCard: React.FC<SkillCardProps> = ({ title, level, progress, icon, img, className }) => {
>>>>>>> master
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
<<<<<<< HEAD
    <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all group">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{level}</p>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden" ref={progressRef}>
        <div
          className="h-full bg-emerald-500 transition-all duration-1000 ease-out group-hover:bg-emerald-400"
=======
    <div className={`glass-card p-6 rounded-lg transition-all group hover:glass-card-hover ${className} hover-glow relative z-10`}>
      {/* Mostrar la imagen si existe */}
      {img && <img src={img} alt={title} className="w-16 h-16 mb-4 rounded-full object-cover" />} {/* Ajusta el tamaño y estilo según sea necesario */}
      {icon && <div className="mb-2">{icon}</div>} {/* Renderizamos el ícono si existe */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{level}</p>
      <div className="h-2 bg-gray-700/30 rounded-full overflow-hidden" ref={progressRef}>
        <div
          className="h-full bg-emerald-500/80 transition-all duration-1000 ease-out group-hover:bg-emerald-400"
>>>>>>> master
          style={{
            width: isVisible ? `${progress}%` : '0%',
            transition: 'width 1s ease-out',
          }}
        />
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default SkillCard;
=======
export default SkillCard;
>>>>>>> master
