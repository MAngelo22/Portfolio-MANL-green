import React from "react";
import Section from "./Section";
import { Mail } from "lucide-react"; // Asegúrate de importar el ícono correctamente
import { motion } from "framer-motion"; // Importa motion de framer-motion
import SocialLinks from "./SocialLinks"; // Asegúrate de que los componentes estén importados correctamente
import ContactForm from "./ContactForm";

export default function contacto() {
  return (
    <Section id="contact" icon={""} title="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center mb-4">
            <Mail className="w-8 h-8 text-emerald-500 mr-3" />
            <h2 className="text-4xl font-bold gradient-text">Get in Touch</h2>
          </div>
          <p className="text-xl text-gray-400">
            Feel free to reach out through any of the platforms below!
          </p>
        </motion.div>

        <SocialLinks />
        <ContactForm />
      </div>
    </Section>
  );
}
