import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:miguelangel.developer@gmail.com?subject=Contact from Portfolio - ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
      <div className="group">
        <input
          type="text"
          required
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
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-gray-800/50 border-2 border-gray-700 rounded-lg px-4 py-3 text-gray-100 outline-none focus:border-emerald-500 transition-all"
          placeholder="Your Email"
        />
      </div>
      <div className="group">
        <textarea
          required
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
  );
};

export default ContactForm;