import { motion } from "motion/react";
import { Github, Mail, Coffee, ExternalLink, X } from "lucide-react";
import { useState, useEffect } from "react";

export const LOGO_SRC = new URL("../../assets/images/Logo Trébol Asociados_sinFondo.png", import.meta.url).href;

const TEAM = [
  {
    name: "José Monzón",
    role: "Backend Developer",
    github: "0520Jose",
    image: "https://github.com/0520Jose.png"
  },
  {
    name: "Diego Vásquez",
    role: "Frontend Developer",
    github: "DiegVas",
    image: "https://github.com/DiegVas.png"
  },
  {
    name: "Carlos del Cid",
    role: "Backend Developer",
    github: "Carlosdelcid05",
    image: "https://github.com/Carlosdelcid05.png"
  },
  {
    name: "Ottoniel Vásquez",
    role: "Backend Developer",
    github: "Farot3",
    image: "https://github.com/Farot3.png"
  }
];

const SKILLS = [
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5", level: "medium", description: "We have a medium level of proficiency in HTML5. And we're currently learning more about it. We can create an organized structure for a website with HTML5." },
  { name: "CSS3", icon: "https://api.iconify.design/logos:css-3.svg", level: "medium", description: "We have a medium level of proficiency in CSS3. And we're currently learning more about it." },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript", level: "medium", description: "We have a medium level of proficiency in JavaScript. And we're currently learning more about it." },
  { name: "React", icon: "https://cdn.simpleicons.org/react", level: "basic", description: "We have a basic level of proficiency in React. And we're currently learning more about it." },
  { name: "Python", icon: "https://cdn.simpleicons.org/python", level: "medium", description: "We have a medium level of proficiency in Python. And we're currently learning more about it." },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white", level: "basic", description: "We have a basic level of proficiency in GitHub. And we're currently learning more about it." },
  { name: "Git", icon: "https://cdn.simpleicons.org/git", level: "basic", description: "We have a basic level of proficiency in Git. And we're currently learning more about it." },
  { name: "Java", icon: "https://api.iconify.design/logos:java.svg", level: "basic", description: "We have a basic level of proficiency in Java. And we're currently learning more about it." },
  { name: "Go", icon: "https://cdn.simpleicons.org/go", level: "basic", description: "We have a basic level of proficiency in Go. And we're currently learning more about it." },
  { name: "C", icon: "https://cdn.simpleicons.org/c", level: "basic", description: "We have a basic level of proficiency in C. And we're currently learning more about it." },
  { name: "C#", icon: "https://api.iconify.design/logos:c-sharp.svg", level: "basic", description: "We have a basic level of proficiency in C#. And we're currently learning more about it." },
  { name: "Dart", icon: "https://cdn.simpleicons.org/dart", level: "basic", description: "We have a basic level of proficiency in Dart. And we're currently learning more about it." },
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux", level: "basic", description: "We have a basic level of proficiency in Linux. And we're currently learning more about it." },
  { name: "IoT", icon: "https://cdn.simpleicons.org/arduino", level: "basic", description: "We have a basic level of proficiency in Internet of Things. And we're currently learning more about it." },
  { name: "AWS", icon: "https://api.iconify.design/logos:aws.svg", level: "basic", description: "We have a basic level of proficiency in AWS. And we're currently learning more about it." },
  { name: "Obsidian", icon: "https://cdn.simpleicons.org/obsidian", level: "basic", description: "We have a basic level of proficiency in Obsidian. And we're currently learning more about it." },
  { name: "ARM64", icon: "https://cdn.simpleicons.org/arm", level: "basic", description: "We have a basic level of proficiency in ARM64 architecture. And we're currently learning more about it." },
  { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify", level: "basic", description: "We have a basic level of proficiency in Netlify. And we're currently learning more about it." },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript", level: "basic", description: "We have a basic level of proficiency in TypeScript. And we're currently learning more about it." },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs", level: "basic", description: "We have a basic level of proficiency in Node.js. And we're currently learning more about it." },
  { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter", level: "basic", description: "We have a basic level of proficiency in Flutter. And we're currently learning more about it." },
  { name: "Vite", icon: "https://cdn.simpleicons.org/vite", level: "basic", description: "We have a basic level of proficiency in Vite. And we're currently learning more about it." },
  { name: "Django", icon: "https://cdn.simpleicons.org/django", level: "basic", description: "We have a basic level of proficiency in Django. And we're currently learning more about it." },
  { name: "Flask", icon: "https://cdn.simpleicons.org/flask/white", level: "basic", description: "We have a basic level of proficiency in Flask. And we're currently learning more about it." },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker", level: "basic", description: "We have a basic level of proficiency in Docker. And we're currently learning more about it." },
  { name: "Grafana", icon: "https://cdn.simpleicons.org/grafana", level: "basic", description: "We have a basic level of proficiency in Grafana. And we're currently learning more about it." },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb", level: "basic", description: "We have a basic level of proficiency in MongoDB. And we're currently learning more about it." }
];

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-24 h-24 bg-brand-bg/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-x">
          <img src={LOGO_SRC} alt="Trebol4Devop logo" className="h-10 w-10 object-contain" />
        </div>
        <div className="text-xl font-display font-bold tracking-tighter flex items-center gap-2">
          <span className="text-brand-primary">Trébol</span>
          <span className="text-neutral-400">4Devop</span>
        </div>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
        <a href="#about" className="hover:text-brand-primary transition-colors">Nosotros</a>
        <a href="#team" className="hover:text-brand-primary transition-colors">Equipo</a>
        <a href="#stack" className="hover:text-brand-primary transition-colors">Stack</a>
        <a href="#contact" className="hover:text-brand-primary transition-colors">Contacto</a>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/trebol4devop" target="_blank" className="hover:text-brand-primary">
          <Github size={20} />
        </a>
      </div>
    </motion.nav>
  );
}

export function Hero() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-start">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 block">
          Innovation & Code
        </span>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          Crafting <br />
          <span className="text-neutral-500">Digital Scalability.</span>
        </h1>
        <p className="max-w-xl text-neutral-400 text-lg md:text-xl leading-relaxed mb-12">
          Independent development group specializing in software architecture, 
          automation, and open-source solutions.
        </p>
        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="#contact" className="bg-brand-primary text-black px-8 py-4 rounded-sm font-bold hover:bg-neutral-200 transition-all">
            Start Collaboration
          </a>
          <a href="#team" className="border border-white/10 px-8 py-4 rounded-sm font-bold hover:bg-white/5 transition-all">
            Meet the Team
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Team() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {TEAM.map((member, i) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group relative bg-brand-surface p-8 border border-white/5 hover:border-brand-primary/30 transition-all rounded-sm"
        >
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-20 h-20 rounded-full mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
          <p className="text-neutral-500 text-sm mb-6 uppercase tracking-wider">{member.role}</p>
          <a 
            href={`https://github.com/${member.github}`}
            target="_blank"
            className="text-brand-primary flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
          >
            GitHub Profile <ExternalLink size={14} />
          </a>
        </motion.div>
      ))}
    </div>
  );
}

export function Stack() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div>
      <div 
        className="relative overflow-hidden rounded-2xl bg-brand-surface/30 border border-white/5 py-8 group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div
          className="flex gap-8 px-6"
          animate={{ x: isHovering ? 0 : [0, -100 * SKILLS.length] }}
          transition={{
            duration: isHovering ? 0 : SKILLS.length * 3,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          style={{ width: `calc(100% * ${(SKILLS.length * 2) / 8})` }}
        >
          {[...SKILLS, ...SKILLS].map((skill, idx) => (
            <motion.button
              key={`skill-${idx}-${skill.name}`}
              onClick={() => setActiveSkill(idx % SKILLS.length)}
              className="flex flex-col items-center gap-3 flex-shrink-0 w-20 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-16 h-16 rounded-xl bg-brand-surface/50 border border-white/10 flex items-center justify-center group-hover:border-brand-primary/50 transition-colors overflow-hidden">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-10 h-10 object-contain opacity-60 group-hover:opacity-100 transition-opacity" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <span className="text-xs uppercase font-bold tracking-widest text-center leading-tight text-neutral-400 group-hover:text-brand-primary transition-colors">
                {skill.name}
              </span>
            </motion.button>
          ))}
        </motion.div>
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-bg to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-bg to-transparent pointer-events-none" />
      </div>

      {activeSkill !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveSkill(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-brand-surface border border-white/10 rounded-2xl p-8 max-w-sm w-full relative"
          >
            <button
              onClick={() => setActiveSkill(null)}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center gap-6">
              <div className="w-24 h-24 rounded-2xl bg-brand-bg border border-white/10 flex items-center justify-center">
                <img 
                  src={SKILLS[activeSkill].icon} 
                  alt={SKILLS[activeSkill].name}
                  className="w-14 h-14 object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{SKILLS[activeSkill].name}</h3>
                <div className="inline-block px-3 py-1 rounded-full bg-brand-primary/20 border border-brand-primary/50 mb-4">
                  <span className="text-sm font-medium text-brand-primary uppercase">
                    {SKILLS[activeSkill].level}
                  </span>
                </div>
              </div>

              <p className="text-neutral-300 text-sm leading-relaxed text-center">
                {SKILLS[activeSkill].description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
      <div>
        <div className="inline-flex items-center gap-3 mb-6 rounded-full border border-white/10 bg-brand-surface px-4 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950/90 p-1">
            <img src={LOGO_SRC} alt="Trebol4Devop emblem" className="h-full w-full object-contain" />
          </div>
          <span className="text-xs uppercase tracking-widest text-neutral-400">Trebol4Devop</span>
        </div>
        <h2 className="text-4xl font-bold mb-8">Let's build<br />something great.</h2>
        <p className="text-neutral-400 mb-12 max-w-sm">
          We are open to collaborations on open-source projects, architecture reviews, and full-stack development.
        </p>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-neutral-900 flex justify-center items-center rounded-sm">
              <Mail size={20} className="text-brand-primary" />
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold tracking-wider">Email</span>
              <a href="mailto:trebol4devop@proton.me" className="text-lg">trebol4devop@proton.me</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-neutral-900 flex justify-center items-center rounded-sm">
              <Coffee size={20} className="text-brand-primary" />
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold tracking-wider">Support</span>
              <a href="https://buymeacoffee.com/trebol4devop" className="text-lg">Buy us a coffee</a>
            </div>
          </div>
        </div>
      </div>
      
      <form 
        action="https://formspree.io/f/xkoknvkg" 
        method="POST"
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase text-neutral-500 font-bold tracking-wider mb-2">Name</label>
            <input 
              name="name" 
              type="text" 
              placeholder="John Doe" 
              className="w-full bg-brand-surface border border-white/5 p-4 rounded-sm focus:border-brand-primary outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-xs uppercase text-neutral-500 font-bold tracking-wider mb-2">Email</label>
            <input 
              name="email" 
              type="email" 
              placeholder="contacto@trebol4devop.com" 
              className="w-full bg-brand-surface border border-white/5 p-4 rounded-sm focus:border-brand-primary outline-none transition-colors"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-xs uppercase text-neutral-500 font-bold tracking-wider mb-2">Message</label>
          <textarea 
            name="message" 
            placeholder="Your project vision..." 
            rows={5}
            className="w-full bg-brand-surface border border-white/5 p-4 rounded-sm focus:border-brand-primary outline-none transition-colors resize-none"
            required
          />
        </div>
        <button type="submit" className="w-full bg-brand-primary text-black font-bold py-4 rounded-sm hover:bg-neutral-200 transition-colors uppercase tracking-widest text-sm">
          Send Message
        </button>
      </form>
    </div>
  );
}
