import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal as TerminalIcon, ChevronRight } from "lucide-react";

const COMMANDS: Record<string, string> = {
  about: "Jordan / GhostDev. Passions: AI, GameDev, CyberSec. Location: Digital Space.",
  skills: "TypeScript, React, Three.js, Node.js, Python, Cybersecurity, AI/ML.",
  contact: "Email: jordantotin17@gmail.com | Portfolio: ghostdev.net",
  clear: "CLEAR",
  help: "Available commands: about, skills, contact, clear, help",
};

export default function Terminal() {
  const [history, setHistory] = useState<string[]>(["Welcome to GhostOS v1.0.4", "Type 'help' to see available commands."]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    
    if (cmd === "clear") {
      setHistory([]);
    } else if (cmd in COMMANDS) {
      setHistory((prev) => [...prev, `> ${input}`, COMMANDS[cmd]]);
    } else if (cmd !== "") {
      setHistory((prev) => [...prev, `> ${input}`, `Command not found: ${cmd}. Type 'help' for assistance.`]);
    }

    setInput("");
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto glass rounded-lg overflow-hidden flex flex-col shadow-2xl shadow-cyber-blue/10 border-cyber-blue/20"
      id="terminal"
    >
      <div className="bg-white/10 px-4 py-2 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-cyber-blue" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase">GHOST_OS_TERMINAL</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="p-4 h-64 overflow-y-auto font-mono text-sm space-y-1.5 custom-scrollbar bg-black/40"
      >
        <AnimatePresence>
          {history.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={line.startsWith(">") ? "text-cyber-blue" : "text-gray-400"}
            >
              {line}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-black/60 border-t border-white/5 flex items-center gap-2">
        <ChevronRight className="w-4 h-4 text-cyber-blue" />
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-none outline-none flex-1 font-mono text-sm text-white"
          autoFocus
        />
      </form>
    </motion.div>
  );
}
