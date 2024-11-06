import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react"; // Asegúrate de importar los iconos correctos

const estudios = [
  {
    degree: "Web Application Development (DAW)",
    school: "UNIR",
    year: "2023 - 2025",
    description: "Higher Vocational Training focused on web page development.",
  },
  {
    degree: "Multiplatform Application Development (DAM)",
    school: "ITT",
    year: "2018 - 2021",
    description: "Higher Vocational Training focused on the development of desktop or mobile applications.",
  },
  {
    degree: "Microcomputer Systems and Networks Technician (TSMR)",
    school: "Fundación Tomillo",
    year: "2015 - 2017",
    description: "Intermediate Vocational Training focused on working as a systems technician.",
  },
  
];

export default function Educa() {
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center mb-4">
            <GraduationCap className="w-8 h-8 text-emerald-500 mr-3" />
            <h2 className="text-4xl font-bold gradient-text">Education</h2>
          </div>
          <p className="text-xl text-gray-400">
            Academic journey and achievements
          </p>
        </motion.div>

        <div className="space-y-8">
          {estudios.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card rounded-xl p-6 md:p-8 hover-glow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-4 md:mb-0">
                  <GraduationCap className="w-6 h-6 text-emerald-500 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-emerald-500">{edu.school}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  {edu.year}
                </div>
              </div>

              <p className="text-gray-300 mb-4">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
