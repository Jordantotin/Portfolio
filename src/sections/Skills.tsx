import { motion } from "motion/react";
import { SKILLS } from "../constants";
import { Cpu, Code, Shield, Brain } from "lucide-react";

const CATEGORY_ICONS = {
  Languages: <Code className="w-6 h-6" />,
  Frameworks: <Cpu className="w-6 h-6" />,
  Tools: <Cpu className="w-6 h-6" />,
  Concepts: <Shield className="w-6 h-6" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
        <div className="space-y-2">
          <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase tracking-[0.3em]">Module_02 // Expertise</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">TECHNICAL <span className="text-cyber-blue italic">AUGMENTATIONS</span></h2>
        </div>
        <p className="text-gray-400 max-w-md text-right font-light italic">
          Continuous integration of cutting-edge technologies and experimental frameworks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass p-6 group hover:border-cyber-blue/50 transition-colors relative h-48 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-2 text-[10px] font-mono opacity-20 group-hover:opacity-100 transition-opacity">
              ID_{index.toString().padStart(3, '0')}
            </div>
            
            <div className="space-y-4">
              <div className="text-cyber-blue group-hover:glow-blue transition-all">
                {CATEGORY_ICONS[skill.category as keyof typeof CATEGORY_ICONS] || <Code />}
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">{skill.name}</h3>
                <span className="text-[10px] uppercase tracking-widest text-gray-500">{skill.category}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-cyber-blue group-hover:bg-cyber-pink transition-colors"
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-cyber-blue">
                <span>SYNC_RATE</span>
                <span>{skill.level}%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
