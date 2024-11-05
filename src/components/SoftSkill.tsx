import React from 'react';
import Section from './Section'; // Asegúrate de importar tu componente Section
import SkillCard from './SkillCard'; 
import { motion } from 'framer-motion'; 
import { Brain} from 'lucide-react'; // Asegúrate de importar los iconos correctos

export default function Idiomas() {
    return (
        <Section id="soft-skills" icon={""} title="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10  ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center items-center mb-4">
              <Brain className="w-8 h-8 text-emerald-500 mr-3" />
              <h2 className="text-4xl font-bold gradient-text">Soft Skills</h2>
            </div>
            <p className="text-xl text-gray-400">Proficiency levels in various soft skills</p>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard className="hover-glow" title="Leadership" level="Expert" progress={90} />
            <SkillCard className="hover-glow" title="Communication" level="Expert" progress={95} />
            <SkillCard className="hover-glow" title="Problem Solving" level="Expert" progress={95} />
            <SkillCard className="hover-glow" title="Team Work" level="Expert" progress={90} />
            <SkillCard className="hover-glow" title="Adaptability" level="Advanced" progress={85} />
            <SkillCard className="hover-glow" title="Time Management" level="Advanced" progress={85} />
          </div>
        </div>
      </Section>
    );
}