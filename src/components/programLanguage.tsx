import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { Code2 } from "lucide-react"; // Asegúrate de importar los iconos correctos

export default function Programming() {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center mb-4">
            <Code2 className="w-8 h-8 text-emerald-500 mr-3" />
            <h2 className="text-4xl font-bold gradient-text">Programming Languages</h2>
          </div>
          <p className="text-xl text-gray-400">Skills in various programming languages</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard className="hover-glow" title="JavaScript" level="Expert" progress={95} />
          <SkillCard className="hover-glow" title="TypeScript" level="Expert" progress={90} />
          <SkillCard className="hover-glow" title="Python" level="Advanced" progress={85} />
          <SkillCard className="hover-glow" title="React" level="Expert" progress={95} />
          <SkillCard className="hover-glow" title="Node.js" level="Advanced" progress={85} />
          <SkillCard className="hover-glow" title="SQL" level="Advanced" progress={80} />
        </div>
      </div>
    </section>
  );
}
