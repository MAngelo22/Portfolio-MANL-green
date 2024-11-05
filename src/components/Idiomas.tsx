import React from "react";
import Section from "./Section"; // Asegúrate de importar tu componente Section
import SkillCard from "./SkillCard";
import { Languages, CheckCircle, Sparkles, Award } from "lucide-react"; // Asegúrate de importar los iconos correctos
import { motion } from "framer-motion";
import espa from "../media/img/espa.png";
import inglesa from "../media/img/inglesa.png";
import portugal from "../media/img/portugal.png";

export default function Idiomas() {
  return (
    <section id="languages" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center mb-4">
            <Languages className="w-8 h-8 text-emerald-500 mr-3" />
            <h2 className="text-4xl font-bold gradient-text">Languages</h2>
          </div>
          <p className="text-xl text-gray-400">
            Proficiency levels in various languages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            className="hover-glow"
            img={espa} 
            title="Spanish"
            level="Native"
            progress={100}
          />
          <SkillCard
            className="hover-glow"
            img={inglesa} 
            title="English"
            level="Professional"
            progress={70}
          />
          <SkillCard
            className="hover-glow"
            img={portugal} 
            title="Portuguese"
            level="Basic"
            progress={70}
          />
        </div>
      </div>
    </section>
  );
}
