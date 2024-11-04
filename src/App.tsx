import React, { useEffect, useState } from 'react';
import { Download, Code2, Briefcase, GraduationCap, Languages, Brain, Boxes, ChevronUp, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import SkillCard from './components/SkillCard';
import ProjectCarousel from './components/ProjectCarousel';
import ContactForm from './components/ContactForm';
import SocialLinks from './components/SocialLinks';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration",
      image: "https://images.unsplash.com/photo-1673187735166-14296f5a5773",
      tags: ["Python", "TensorFlow", "WebSocket"]
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with 3D animations",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["React", "TypeScript", "Tailwind"]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management platform",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      tags: ["Vue.js", "Firebase", "Redux"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    setIsVisible(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 flex flex-col items-center text-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 relative">
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-emerald-500 animate-fadeIn"
            />
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slideUp">
              John <span className="text-emerald-500">Doe</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 mb-6 animate-slideUp animation-delay-200">Senior Software Engineer</h2>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full flex items-center gap-2 mx-auto transition-all hover:scale-105 animate-slideUp animation-delay-400">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Section id="experience" icon={<Briefcase />} title="Experience">
        <div className="space-y-8">
          {[
            {
              role: "Senior Software Engineer",
              company: "Tech Corp",
              period: "2020 - Present",
              description: "Led development of enterprise applications using React and Node.js"
            },
            {
              role: "Software Developer",
              company: "Digital Solutions",
              period: "2018 - 2020",
              description: "Developed and maintained multiple client projects"
            }
          ].map((exp, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-emerald-500">{exp.role}</h3>
              <p className="text-gray-400">{exp.company} | {exp.period}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" icon={<GraduationCap />} title="Education">
        <div className="space-y-8">
          {[
            {
              degree: "Master in Computer Science",
              school: "Tech University",
              year: "2018",
              description: "Specialized in Artificial Intelligence and Machine Learning"
            },
            {
              degree: "Bachelor in Software Engineering",
              school: "Engineering College",
              year: "2016",
              description: "Focus on Software Development and System Design"
            }
          ].map((edu, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-emerald-500">{edu.degree}</h3>
              <p className="text-gray-400">{edu.school} | {edu.year}</p>
              <p className="mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Languages Section */}
      <Section id="languages" icon={<Languages />} title="Languages">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="English" level="Native" progress={100} />
          <SkillCard title="Spanish" level="Fluent" progress={90} />
          <SkillCard title="French" level="Intermediate" progress={70} />
        </div>
      </Section>

      {/* Programming Languages Section */}
      <Section id="skills" icon={<Code2 />} title="Programming Languages">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="JavaScript" level="Expert" progress={95} />
          <SkillCard title="TypeScript" level="Expert" progress={90} />
          <SkillCard title="Python" level="Advanced" progress={85} />
          <SkillCard title="React" level="Expert" progress={95} />
          <SkillCard title="Node.js" level="Advanced" progress={85} />
          <SkillCard title="SQL" level="Advanced" progress={80} />
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" icon={<Boxes />} title="Projects">
        <div className="perspective-1000">
          <ProjectCarousel projects={projects} />
        </div>
      </Section>

      {/* Soft Skills Section */}
      <Section id="soft-skills" icon={<Brain />} title="Soft Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="Leadership" level="Expert" progress={90} />
          <SkillCard title="Communication" level="Expert" progress={95} />
          <SkillCard title="Problem Solving" level="Expert" progress={95} />
          <SkillCard title="Team Work" level="Expert" progress={90} />
          <SkillCard title="Adaptability" level="Advanced" progress={85} />
          <SkillCard title="Time Management" level="Advanced" progress={85} />
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" icon={<Mail />} title="Get in Touch">
        <SocialLinks />
        <ContactForm />
      </Section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-emerald-500 p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-emerald-600 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}

export default App;