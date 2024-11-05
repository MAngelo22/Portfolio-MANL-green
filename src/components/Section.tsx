import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  icon: ReactNode;
  title: ReactNode; // Cambiado a ReactNode para permitir elementos de React
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, icon, title, children }) => {
  return (
    <section id={id} className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <div className="text-emerald-500">
            {icon}
          </div>
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
