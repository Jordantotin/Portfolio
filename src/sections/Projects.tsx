import { motion } from "motion/react";
import { PROJECTS } from "../constants";
import { ExternalLink, Github, ZoomIn } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-cyber-pink font-mono text-sm tracking-widest uppercase tracking-[0.3em]">Module_03 // Deployments</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-2">EXPERIMENTAL <span className="text-cyber-pink italic">UNITS</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group glass flex flex-col overflow-hidden hover:scale-[1.02] transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <div className="absolute top-4 right-4 flex gap-2">
                   <button className="p-2 glass rounded-full hover:bg-cyber-pink transition-colors">
                      <Github className="w-4 h-4" />
                   </button>
                   <button className="p-2 glass rounded-full hover:bg-cyber-blue transition-colors">
                      <ExternalLink className="w-4 h-4" />
                   </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono bg-black/80 px-2 py-0.5 border border-white/10 text-white/70">
                        {tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-cyber-pink transition-colors">{project.title}</h3>
                <p className="text-gray-400 font-light text-sm line-clamp-3">
                  {project.description}
                </p>
                <button className="w-full py-2 border border-white/5 bg-white/5 hover:bg-cyber-pink/20 hover:border-cyber-pink/50 transition-all text-[10px] font-mono tracking-widest uppercase">
                   ACCESS_DATA_CORE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
