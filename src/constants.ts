export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "Languages" | "Tools" | "Frameworks" | "Concepts";
  icon?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Project Zero",
    description: "A futuristic AI-driven dashboard for real-time cyber-threat monitoring.",
    tags: ["React", "Three.js", "AI", "Cybersecurity"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    title: "Ghost Engine",
    description: "A custom 2D game engine built for high-performance pixel art games.",
    tags: ["TypeScript", "WebGL", "Game Dev"],
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    title: "NeuroLink Core",
    description: "Deep learning model visualization tool for complex neural networks.",
    tags: ["Python", "React", "D3.js", "AI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
];

export const SKILLS: Skill[] = [
  { name: "TypeScript", level: 95, category: "Languages" },
  { name: "React", level: 90, category: "Frameworks" },
  { name: "Three.js", level: 85, category: "Tools" },
  { name: "Node.js", level: 88, category: "Languages" },
  { name: "Python", level: 80, category: "Languages" },
  { name: "Cybersecurity", level: 82, category: "Concepts" },
  { name: "AI/ML", level: 75, category: "Concepts" },
  { name: "Game Dev", level: 85, category: "Concepts" },
];
