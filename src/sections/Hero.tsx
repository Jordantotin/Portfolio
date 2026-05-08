import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";
import Terminal from "../components/Terminal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* HUD Elements */}
      <div className="absolute top-1/4 left-10 hidden xl:block animate-pulse">
        <div className="text-[10px] font-mono text-cyber-blue/40 border-l border-cyber-blue/40 pl-2">
          STATUS: ONLINE<br />
          LATENCY: 12ms<br />
          CORE: GHOST_DEV
        </div>
      </div>
      
      <div className="relative z-10 text-center space-y-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative inline-block"
        >
          <div className="absolute inset-0 bg-cyber-blue blur-3xl opacity-20 rounded-full animate-pulse" />
          <img 
             src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=300&h=300"
             alt="Jordan Avatar" 
             referrerPolicy="no-referrer"
             className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-cyber-blue p-2 bg-black relative z-10 object-cover shadow-[0_0_50px_rgba(0,242,255,0.3)]"
          />
          <div className="absolute -bottom-2 -right-2 bg-cyber-bg border border-cyber-blue px-3 py-1 text-[10px] font-mono font-bold text-cyber-blue shadow-lg animate-bounce">
            LVL 99
          </div>
        </motion.div>

        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter"
          >
            JORDAN <span className="text-cyber-blue glow-blue">GHOST</span> DEV
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Architecting <span className="text-white font-medium">immersive digital dimensions</span> through AI, advanced Game Engines, and secure neural architectures.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button className="px-8 py-3 bg-cyber-blue text-black font-bold uppercase tracking-widest hover:bg-white transition-colors relative group overflow-hidden">
            <span className="relative z-10 transition-transform group-hover:scale-105 inline-block">Initialize Protocol</span>
            <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
          </button>
          
          <button className="px-8 py-3 border border-cyber-blue text-cyber-blue font-bold uppercase tracking-widest hover:bg-cyber-blue/10 transition-colors">
            Decrypt Archives
          </button>
        </motion.div>

        <div className="pt-12 w-full">
           <Terminal />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-cyber-blue to-transparent rounded-full opacity-50" />
      </div>
    </section>
  );
}
