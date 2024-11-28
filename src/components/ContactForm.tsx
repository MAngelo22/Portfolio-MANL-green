import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [messageSent, setMessageSent] = useState(false); // Nuevo estado para mostrar el banner
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_v8m6v0j', // ID del servicio
          'template_q8ui1xi', // ID de la plantilla
          form.current, // referencia al formulario
          'lM-NzLG78B_EqcyBz' // clave pública
        )
        .then(
          () => {
            console.log('SUCCESS!');
            setMessageSent(true); // Mostrar banner
            setFormData({ name: '', email: '', message: '' }); // Vaciar campos
            setTimeout(() => setMessageSent(false), 3000); // Ocultar banner después de 3 segundos
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    } else {
      console.log('Formulario no encontrado');
    }
  };

  return (
    <div className="max-w-lg mx-auto space-y-6">
      {messageSent && (
        <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-center">
          ¡Message sent successfully!
        </div>
      )}
      
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="group">
          <input
            type="text"
            required
            name="user_name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-gray-800/50 border-2 border-gray-700 rounded-lg px-4 py-3 text-gray-100 outline-none focus:border-emerald-500 transition-all"
            placeholder="Your Name"
          />
        </div>
        <div className="group">
          <input
            type="email"
            required
            name="user_email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-gray-800/50 border-2 border-gray-700 rounded-lg px-4 py-3 text-gray-100 outline-none focus:border-emerald-500 transition-all"
            placeholder="Your Email"
          />
        </div>
        <div className="group">
          <textarea
            required
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-gray-800/50 border-2 border-gray-700 rounded-lg px-4 py-3 text-gray-100 outline-none focus:border-emerald-500 transition-all h-32 resize-none"
            placeholder="Your Message"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
        >
          <Send size={20} />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

