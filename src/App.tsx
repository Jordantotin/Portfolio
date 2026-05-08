/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ThreeBackground from "./components/ThreeBackground";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import { motion, useScroll, useSpring } from "motion/react";
import { Mail, Globe } from "lucide-react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative text-white selection:bg-cyber-blue/30 overflow-x-hidden">
      {/* Visual background layers */}
      <ThreeBackground />
      <div className="fixed inset-0 cyberpunk-overlay pointer-events-none opacity-20 mix-blend-overlay" />
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-30" />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyber-blue z-[100] origin-left shadow-[0_0_15px_rgba(0,242,255,0.8)]"
        style={{ scaleX }}
      />

      <Header />
      
      <div className="relative z-10">
        <Hero />
        
        <div className="relative">
          {/* Transition Element */}
          <div className="h-40 bg-gradient-to-b from-transparent to-black/80" />
          
          <Skills />
          <Projects />
          
          <section id="uplink" className="py-24 px-4 max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Module_04 // Contact</span>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">ESTABLISH <span className="text-cyber-blue italic">UPLINK</span></h2>
              <p className="text-gray-400 font-light text-xl">Ready for next-gen collaborations and architectural challenges.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="mailto:jordantotin17@gmail.com" className="glass p-8 group hover:border-cyber-blue transition-all space-y-4">
                 <div className="w-12 h-12 bg-cyber-blue/10 flex items-center justify-center mx-auto rounded-full group-hover:scale-110 transition-transform">
                   <Mail className="w-6 h-6 text-cyber-blue" />
                 </div>
                 <h3 className="font-bold text-xl uppercase tracking-widest">Neural Link</h3>
                 <p className="text-cyber-blue font-mono text-sm">jordantotin17@gmail.com</p>
              </a>
              <div className="glass p-8 group hover:border-cyber-pink transition-all space-y-4 cursor-pointer">
                 <div className="w-12 h-12 bg-cyber-pink/10 flex items-center justify-center mx-auto rounded-full group-hover:scale-110 transition-transform">
                   <Globe className="w-6 h-6 text-cyber-pink" />
                 </div>
                 <h3 className="font-bold text-xl uppercase tracking-widest">Global Relay</h3>
                 <p className="text-cyber-pink font-mono text-sm">@ghostdev_node</p>
              </div>
            </div>
          </section>
        </div>

        <footer className="py-12 border-t border-white/5 text-center text-[10px] font-mono tracking-widest text-white/30 uppercase">
           <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <span>© 2026 GHOST_DEV // SECURE_ACCESS_GRANTED</span>
              <div className="flex gap-8">
                <span className="hover:text-cyber-blue cursor-pointer">System_Log</span>
                <span className="hover:text-cyber-blue cursor-pointer">Privacy_Core</span>
                <span className="hover:text-cyber-blue cursor-pointer">Node_Status</span>
              </div>
              <span>EST_03:14:15_UTC</span>
           </div>
        </footer>
      </div>
    </main>
  );
}

