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
      "https://i.ytimg.com/vi/F06lrLMFiK0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEOGqr5ZlH0sMq2hxBkiKg_1u5cA",
    tags: ["React", "Three.js", "TypeScript", "Blender"],
    github: "", // Asegúrate de incluir este enlace si es necesario
    live: "https://manl3d.netlify.app",
  },
  {
    title: "HandGame",
    description:
      "Website designed so that you can interactively play classic games against the machine",
    image:
      "https://i.ytimg.com/vi/0iOtOFw-e7o/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAApIFigIMCAAQARgkIFkocjAP&rs=AOn4CLDiyF5PJ047Zs6ToXtm_wjdCfPGIQ",
    tags: ["HTML", "JS", "CSS"],
    github: "https://github.com/MAngelo22/HANDgame.git",
    live: "https://gamesclassic.netlify.app/piedra2",
  },
  {
    title: "Motenimiento",
    description:
      "Website designed to generate motorcycle maintenance data according to the model",
    image:
      "https://i.ytimg.com/vi/6ughobPjAeI/oar2.jpg?sqp=-oaymwEdCIUFENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCN7ZU0VZdvzXWC9qThUnw93sGzrQ",
    tags: ["HTML", "JS", "CSS"],
    github: "https://github.com/MAngelo22/Motenimiento.git",
    live: "https://www.youtube.com/shorts/6ughobPjAeI",
  },
  {
    title: "Redel",
    description:
      "Website designed to reserve paddle tennis courts in an urbanization",
    image:
      "https://i.ytimg.com/vi/BuNRfIk7z44/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAApIFigIMCAAQARhlIFIoRTAP&rs=AOn4CLAIiKg2cXpsqHhYQRaPmrDw8raJTA",
    tags: ["HTML", "JS", "CSS"],
    github: "https://github.com/MAngelo22/Redel.git", // Asegúrate de incluir este enlace si es necesario
    live: "https://www.youtube.com/watch?v=BuNRfIk7z44",
  },
  {
    title: "QRescato",
    description:
      "App on Android, through which your device was geolocated to find the protector",
    image:
      "https://i.ytimg.com/vi/6B9bn7RxE7k/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB3AGAAuADigIMCAAQARhyIFEoPTAP&rs=AOn4CLDQKb9-fPTZQVGkaesEc5S5FMihnw",
    tags: ["Android", "Java", "API Google Maps", "Android Studio"],
    github: "https://github.com/MAngelo22/QRastreo-TFG.git",
    live: "https://www.youtube.com/watch?v=6B9bn7RxE7k",
  },
  {
    title: "Juego 3D",
    description: "I play recreating the ITT where I studied, in first person",
    image:
      "https://i.ytimg.com/vi/E7xc8kuUAeQ/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBhAmAAtAFigIMCAAQARhlIFgoVjAP&rs=AOn4CLD_w1qmTyRsvBQofYgXX-gtHriREg",
    tags: ["Unity", "Java", "C#", "PhotoShop"],
    github: "", // Asegúrate de incluir este enlace si es necesario
    live: "https://www.youtube.com/watch?v=E7xc8kuUAeQ&t=34s",
  },
  {
    title: "Juego 2D",
    description:
      "Game based on 'The Avengers', rigging characters from static assets",
    image:
      "https://i.ytimg.com/vi/r-VIGDOk2UU/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAsoFigIMCAAQARh_IBMoFDAP&rs=AOn4CLBbT-sO1Pz3NP831sLdrKtyhtUhew",
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
