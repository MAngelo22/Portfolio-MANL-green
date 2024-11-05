import React from "react";
import { motion } from "framer-motion";
import { Car, Award, Cross, Calendar, Plus } from "lucide-react";

const additionalData = [
  {
    icon: <Award size={24} className="w-6 h-6 text-emerald-500" />,
    title: "Firefighter Exam Attempt, Madrid",
    year: "2018",
    description: "Attempted firefighter exam for the Community of Madrid",
  },
  {
    icon: <Cross size={24} className="text-emerald-500" />,
    title: "Lifeguard",
    year: "2020",
    description: "Certified in lifeguarding and water rescue",
  },
  {
    icon: <Cross size={24} className="icon-size text-emerald-500" />,
    title: "First Aid",
    year: "2020",
    description: "First aid assistance",
  },
  {
    icon: <Award size={24} className="icon-size text-emerald-500" />,
    title: "Private Security Training",
    year: "2018",
    description: "Training in positive reinforcement-based education",
  },
  {
    icon: <Car size={24} className="icon-size text-emerald-500" />,
    title: "Driver’s License (B)",
    year: "2017",
    description: "Valid driver’s license and own vehicle",
  },
];

export default function AdditionalData() {
  return (
    <section id="additional-data" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center mb-4">
            <Plus className="w-8 h-8 text-emerald-500 mr-3" />
            <h2 className="text-4xl font-bold gradient-text">
              Datos Adicionales
            </h2>
          </div>
          <p className="text-xl text-gray-400 mt-2">
            Experiencia y habilidades adicionales
          </p>
        </motion.div>

        {/* Grid de tarjetas en columnas de 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalData.map((item, index) => (
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
                  {item.icon}
                  <div className="ml-3">
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-emerald-500">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  {item.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
