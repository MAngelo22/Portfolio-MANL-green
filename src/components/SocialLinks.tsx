import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const SocialLinks = () => {
  const links = [
    {
      icon: Mail,
      href: 'mailto:miguelangel.developer@gmail.com',
      label: 'Email',
      color: 'hover:bg-red-500'
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Github,
      href: '#',
      label: 'GitHub',
      color: 'hover:bg-gray-600'
    }
  ];

  return (
    <div className="flex justify-center gap-6 mb-12">
      {links.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-full bg-gray-800/50 ${link.color} transform hover:scale-110 transition-all duration-300`}
            aria-label={link.label}
          >
            <Icon size={24} className="text-white" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;