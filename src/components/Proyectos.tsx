import Section from "./Section"; // Asegúrate de importar tu componente Section
import ProjectCarousel from "./ProjectCarousel"; // Asegúrate de importar el carrusel de proyectos
import { Boxes } from "lucide-react"; // Icono de Lucide
import { motion } from "framer-motion";

const projects = [
  {
    title: "3D Portfolio",
    description:
      "Interactive 3D portfolio showing projects in a virtual gallery using Three.js and React Three Fiber",
    image:
      "https://static.wixstatic.com/media/c6eee4_68edbd0187ae496da8a16ce561bcb1ca~mv2.webp",
    tags: ["React", "Three.js", "TypeScript", "Blender"],
    github: "", // Asegúrate de incluir este enlace si es necesario
    live: "https://manl3d.netlify.app",
  },
  {
    title: "HandGame",
    description:
      "Website designed so that you can interactively play classic games against the machine",
    image:
      "https://static.wixstatic.com/media/c6eee4_e12c4b309eef48a093129e3328ef6e9f~mv2.webp",
    tags: ["HTML", "JS", "CSS"],
    github: "https://github.com/MAngelo22/HANDgame.git",
    live: "https://gamesclassic.netlify.app/piedra2",
  },
  {
    title: "Motenimiento",
    description:
      "Website designed to generate motorcycle maintenance data according to the model",
    image:
      "https://static.wixstatic.com/media/c6eee4_97da5bfb6c3c43bd9936b427b4eb1211~mv2.png",
    tags: ["HTML", "JS", "CSS"],
    github: "https://github.com/MAngelo22/Motenimiento.git",
    live: "https://www.youtube.com/shorts/6ughobPjAeI",
  },
  {
    title: "Redel",
    description:
      "Website designed to reserve paddle tennis courts in an urbanization",
    image:
      "https://static.wixstatic.com/media/c6eee4_852cc341de164daf8dfd9f7eabaac264~mv2.webp",
    tags: ["HTML", "JS", "CSS"],
    github: "https://github.com/MAngelo22/Redel.git", // Asegúrate de incluir este enlace si es necesario
    live: "https://www.youtube.com/watch?v=BuNRfIk7z44",
  },
  {
    title: "QRescato",
    description:
      "App on Android, through which your device was geolocated to find the protector",
    image:
      "https://static.wixstatic.com/media/c6eee4_f2e8d28d94084b39b27261e2dad1f293~mv2.webp",
    tags: ["Android", "Java", "API Google Maps", "Android Studio"],
    github: "https://github.com/MAngelo22/QRastreo-TFG.git",
    live: "https://www.youtube.com/watch?v=6B9bn7RxE7k",
  },
  {
    title: "Juego 3D",
    description: "I play recreating the ITT where I studied, in first person",
    image:
      "https://static.wixstatic.com/media/c6eee4_d9e84b3abbf344faa343a7d7d897d419~mv2.png",
    tags: ["Unity", "Java", "C#", "PhotoShop"],
    github: "", // Asegúrate de incluir este enlace si es necesario
    live: "https://www.youtube.com/watch?v=E7xc8kuUAeQ&t=34s",
  },
  {
    title: "Juego 2D",
    description:
      "Game based on 'The Avengers', rigging characters from static assets",
    image:
      "https://static.wixstatic.com/media/c6eee4_0328f5b5909f435fbedeeb28ecdd952a~mv2.png",
    tags: ["Unity", "Java", "C#", "PhotoShop"],
    github: "", // Asegúrate de incluir este enlace si es necesario
    live: "https://www.youtube.com/watch?v=r-VIGDOk2UU&t=2s",
  },
  {
    title: "Cronómetro Tabata",
    description: "Website to train calisthenics with a free tabata stopwatch",
    image:
      "https://static.wixstatic.com/media/c6eee4_e41584d954fb4aff93e9ecf1c5f17b18~mv2.jpg",
    tags: ["HTML", "JS", "CSS"],
    github: "https://github.com/MAngelo22/Proyecto-Tamers.git",
    live: "https://proyectotamer.netlify.app/",
  },
];

export default function Proyectos() {
  return (
    <Section id="projects" icon={""} title="">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex justify-center items-center mb-4">
          <Boxes className="w-8 h-8 text-emerald-500 mr-3" /> {/* Utiliza el icono aquí */}
          <h2 className="text-4xl font-bold gradient-text">Projects</h2>
        </div>
        <p className="text-xl text-gray-400">Showcasing my work and contributions</p>
      </motion.div>
      <div className="perspective-1000">
        <ProjectCarousel projects={projects} />
      </div>
    </div>
  </Section>
  );
}
