import { motion } from "motion/react";
import { Ghost, Menu, X, Cpu, Globe, Mail } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between">
      <div className="absolute inset-0 glass opacity-80" />
      
      <div className="relative z-10 flex items-center gap-2 group cursor-pointer">
        <div className="w-10 h-10 bg-cyber-blue flex items-center justify-center rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-[0_0_20px_rgba(0,242,255,0.5)]">
           <Ghost className="w-6 h-6 text-black -rotate-45 group-hover:-rotate-90 transition-transform duration-500" />
        </div>
        <span className="font-mono font-bold tracking-tighter text-xl">GHOST<span className="text-cyber-blue">DEV</span></span>
      </div>

      <nav className="hidden md:flex relative z-10 items-center gap-12 font-mono text-xs uppercase tracking-[0.3em]">
        {["Intel", "Expertise", "Units", "Uplink"].map((item, i) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="hover:text-cyber-blue transition-colors relative group"
          >
            <span className="opacity-40 mr-2">0{i+1}</span>
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-blue transition-all group-hover:w-full" />
          </a>
        ))}
      </nav>

      <div className="relative z-10 hidden md:flex items-center gap-4">
         <div className="flex flex-col items-end text-[10px] font-mono text-white/40">
           <span>SYSTEM_STABLE</span>
           <span className="text-cyber-green">99%_UPTIME</span>
         </div>
         <div className="w-[1px] h-8 bg-white/10" />
         <button className="px-4 py-2 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 transition-colors text-[10px] font-mono tracking-widest">
            UPLINK
         </button>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden relative z-10 p-2 text-cyber-blue">
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {["Intel", "Expertise", "Units", "Uplink"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-bold tracking-tighter hover:text-cyber-blue transition-colors"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
