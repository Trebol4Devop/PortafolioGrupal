import { motion } from "motion/react";
import { Github, Mail, Coffee, ExternalLink, X, Moon, Sun, Languages, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const LOGO_SRC = new URL("../../assets/images/Logo Trébol Asociados_sinFondo.png", import.meta.url).href;

const TEAM = [
  {
    name: "José Monzón",
    roleKey: "backend",
    github: "0520Jose",
    image: "https://github.com/0520Jose.png"
  },
  {
    name: "Diego Vásquez",
    roleKey: "frontend",
    github: "DiegVas",
    image: "https://github.com/DiegVas.png"
  },
  {
    name: "Carlos del Cid",
    roleKey: "backend",
    github: "Carlosdelcid05",
    image: "https://github.com/Carlosdelcid05.png"
  },
  {
    name: "Ottoniel Vásquez",
    roleKey: "backend",
    github: "Farot3",
    image: "https://github.com/Farot3.png"
  }
];

const SKILLS = [
  { id: "html5", name: "HTML5", icon: "https://cdn.simpleicons.org/html5", levelKey: "medium" },
  { id: "css3", name: "CSS3", icon: "https://api.iconify.design/logos:css-3.svg", levelKey: "medium" },
  { id: "javascript", name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript", levelKey: "medium" },
  { id: "react", name: "React", icon: "https://cdn.simpleicons.org/react", levelKey: "basic" },
  { id: "python", name: "Python", icon: "https://cdn.simpleicons.org/python", levelKey: "medium" },
  { id: "github", name: "GitHub", icon: "https://cdn.simpleicons.org/github/white", levelKey: "basic" },
  { id: "git", name: "Git", icon: "https://cdn.simpleicons.org/git", levelKey: "basic" },
  { id: "java", name: "Java", icon: "https://api.iconify.design/logos:java.svg", levelKey: "basic" },
  { id: "go", name: "Go", icon: "https://cdn.simpleicons.org/go", levelKey: "basic" },
  { id: "c", name: "C", icon: "https://cdn.simpleicons.org/c", levelKey: "basic" },
  { id: "csharp", name: "C#", icon: "https://api.iconify.design/logos:c-sharp.svg", levelKey: "basic" },
  { id: "dart", name: "Dart", icon: "https://cdn.simpleicons.org/dart", levelKey: "basic" },
  { id: "linux", name: "Linux", icon: "https://cdn.simpleicons.org/linux", levelKey: "basic" },
  { id: "iot", name: "IoT", icon: "https://cdn.simpleicons.org/arduino", levelKey: "basic" },
  { id: "aws", name: "AWS", icon: "https://api.iconify.design/logos:aws.svg", levelKey: "basic" },
  { id: "obsidian", name: "Obsidian", icon: "https://cdn.simpleicons.org/obsidian", levelKey: "basic" },
  { id: "arm64", name: "ARM64", icon: "https://cdn.simpleicons.org/arm", levelKey: "basic" },
  { id: "netlify", name: "Netlify", icon: "https://cdn.simpleicons.org/netlify", levelKey: "basic" },
  { id: "typescript", name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript", levelKey: "basic" },
  { id: "nodejs", name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs", levelKey: "basic" },
  { id: "flutter", name: "Flutter", icon: "https://cdn.simpleicons.org/flutter", levelKey: "basic" },
  { id: "vite", name: "Vite", icon: "https://cdn.simpleicons.org/vite", levelKey: "basic" },
  { id: "django", name: "Django", icon: "https://cdn.simpleicons.org/django", levelKey: "basic" },
  { id: "flask", name: "Flask", icon: "https://cdn.simpleicons.org/flask/white", levelKey: "basic" },
  { id: "docker", name: "Docker", icon: "https://cdn.simpleicons.org/docker", levelKey: "basic" },
  { id: "grafana", name: "Grafana", icon: "https://cdn.simpleicons.org/grafana", levelKey: "basic" },
  { id: "mongodb", name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb", levelKey: "basic" }
];

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isSystemDark);
    if (isSystemDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-neutral-800 dark:text-neutral-200"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export function LangToggle() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const languages = ['en', 'es', 'fr', 'zh', 'ru', 'pt', 'de'];

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.lang-dropdown')) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return (
    <div className="relative lang-dropdown">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-sm font-bold uppercase text-neutral-800 dark:text-neutral-200"
      >
        <Languages size={20} />
        <span className="hidden sm:inline">{i18n.language.substring(0, 2)}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-20 bg-white dark:bg-[#171717] border border-black/10 dark:border-white/10 rounded-lg shadow-xl z-50 overflow-hidden flex flex-col">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                i18n.changeLanguage(lang);
                setIsOpen(false);
              }}
              className="w-full text-center px-4 py-3 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 uppercase font-bold transition-colors"
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 h-20 sm:h-24 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors"
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl">
          <img src={LOGO_SRC} alt="Trebol4Devop logo" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
        </div>
        <div className="text-lg sm:text-xl font-display font-bold tracking-tighter flex items-center gap-1 sm:gap-2">
          <span className="text-brand-primary">Trébol</span>
          <span className="text-neutral-600 dark:text-neutral-400">4Devop</span>
        </div>
      </div>
      <div className="hidden lg:flex gap-8 text-sm font-medium tracking-wide uppercase">
        <a href="#about" className="text-neutral-700 dark:text-neutral-200 hover:text-brand-primary dark:hover:text-brand-primary transition-colors">{t('nav.about')}</a>
        <a href="#team" className="text-neutral-700 dark:text-neutral-200 hover:text-brand-primary dark:hover:text-brand-primary transition-colors">{t('nav.team')}</a>
        <a href="#stack" className="text-neutral-700 dark:text-neutral-200 hover:text-brand-primary dark:hover:text-brand-primary transition-colors">{t('nav.stack')}</a>
        <a href="#contact" className="text-neutral-700 dark:text-neutral-200 hover:text-brand-primary dark:hover:text-brand-primary transition-colors">{t('nav.contact')}</a>
      </div>
      <div className="flex items-center gap-1 sm:gap-4">
        <LangToggle />
        <ThemeToggle />
        <a href="https://github.com/trebol4devop" target="_blank" className="hidden sm:block hover:text-brand-primary text-neutral-800 dark:text-neutral-200 transition-colors p-2">
          <Github size={20} />
        </a>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-neutral-800 dark:text-neutral-200"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 sm:top-24 left-0 right-0 bg-white dark:bg-[#0A0A0A] border-b border-black/5 dark:border-white/5 p-6 flex flex-col gap-6 lg:hidden shadow-xl z-40"
        >
          <a href="#about" onClick={() => setIsOpen(false)} className="text-base sm:text-lg font-bold text-neutral-700 dark:text-neutral-200 uppercase tracking-widest">{t('nav.about')}</a>
          <a href="#team" onClick={() => setIsOpen(false)} className="text-base sm:text-lg font-bold text-neutral-700 dark:text-neutral-200 uppercase tracking-widest">{t('nav.team')}</a>
          <a href="#stack" onClick={() => setIsOpen(false)} className="text-base sm:text-lg font-bold text-neutral-700 dark:text-neutral-200 uppercase tracking-widest">{t('nav.stack')}</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-base sm:text-lg font-bold text-neutral-700 dark:text-neutral-200 uppercase tracking-widest">{t('nav.contact')}</a>
          <a href="https://github.com/trebol4devop" target="_blank" className="text-base sm:text-lg font-bold flex items-center gap-3 text-neutral-700 dark:text-neutral-200 uppercase tracking-widest pt-4 border-t border-black/5 dark:border-white/5">
            <Github size={20} /> GitHub
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen flex flex-col justify-center items-start pt-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <span className="text-brand-primary font-mono text-xs sm:text-sm tracking-widest uppercase mb-4 block">
          {t('hero.subtitle')}
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
          {t('hero.title1')} <br />
          <span className="text-neutral-400 dark:text-neutral-500">{t('hero.title2')}</span>
        </h1>
        <p className="max-w-xl text-neutral-600 dark:text-neutral-400 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12">
          {t('hero.description')}
        </p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-max"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="#contact" className="bg-brand-primary text-black px-6 sm:px-8 py-4 rounded-sm font-bold hover:bg-brand-primary/80 transition-all text-center w-full sm:w-auto text-sm sm:text-base">
            {t('hero.btn1')}
          </a>
          <a href="#team" className="border border-black/10 dark:border-white/10 px-6 sm:px-8 py-4 rounded-sm font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-all text-center w-full sm:w-auto text-neutral-900 dark:text-white text-sm sm:text-base">
            {t('hero.btn2')}
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Team() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {TEAM.map((member, i) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group relative bg-neutral-100 dark:bg-[#171717] p-6 sm:p-8 border border-black/5 dark:border-white/5 hover:border-brand-primary/30 dark:hover:border-brand-primary/30 transition-all rounded-sm"
        >
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 sm:mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <h3 className="text-lg sm:text-xl font-bold mb-1 text-neutral-900 dark:text-white">{member.name}</h3>
          <p className="text-neutral-500 text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wider">{t(`team.roles.${member.roleKey}`)}</p>
          <a 
            href={`https://github.com/${member.github}`}
            target="_blank"
            className="text-brand-primary flex items-center gap-2 text-xs sm:text-sm font-medium opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity"
          >
            {t('team.github')} <ExternalLink size={14} />
          </a>
        </motion.div>
      ))}
    </div>
  );
}

export function Stack() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div 
        className="relative overflow-hidden rounded-2xl bg-neutral-100/50 dark:bg-[#171717]/30 border border-black/5 dark:border-white/5 py-6 sm:py-8 group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={() => setIsHovering(true)}
        onTouchEnd={() => setIsHovering(false)}
      >
        <motion.div
          className="flex gap-4 sm:gap-8 px-4 sm:px-6"
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
              className="flex flex-col items-center gap-2 sm:gap-3 flex-shrink-0 w-16 sm:w-20 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-white dark:bg-[#171717]/50 border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:border-brand-primary/50 transition-colors overflow-hidden">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-6 h-6 sm:w-10 sm:h-10 object-contain opacity-60 group-hover:opacity-100 transition-opacity dark:invert-0" 
                  style={{ filter: "drop-shadow(0 0 2px rgba(0,0,0,0.1))" }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-center leading-tight text-neutral-500 dark:text-neutral-400 group-hover:text-brand-primary transition-colors">
                {skill.name}
              </span>
            </motion.button>
          ))}
        </motion.div>
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-neutral-50 dark:from-[#0A0A0A] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-neutral-50 dark:from-[#0A0A0A] to-transparent pointer-events-none" />
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
            className="bg-white dark:bg-[#171717] border border-black/10 dark:border-white/10 rounded-2xl p-6 sm:p-8 max-w-sm w-full relative"
          >
            <button
              onClick={() => setActiveSkill(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition-colors text-neutral-900 dark:text-white"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-neutral-50 dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 flex items-center justify-center">
                <img 
                  src={SKILLS[activeSkill].icon} 
                  alt={SKILLS[activeSkill].name}
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-neutral-900 dark:text-white">{SKILLS[activeSkill].name}</h3>
                <div className="inline-block px-3 py-1 rounded-full bg-brand-primary/20 border border-brand-primary/50 mb-4">
                  <span className="text-xs sm:text-sm font-medium text-brand-primary uppercase">
                    {t(`stack.levels.${SKILLS[activeSkill].levelKey}`)}
                  </span>
                </div>
              </div>

              <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed text-center">
                {t(`stack.descriptions.${SKILLS[activeSkill].id}`)}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export function Contact() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
      <div>
        <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#171717] px-3 sm:px-4 py-2">
          <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-950/90 p-1">
            <img src={LOGO_SRC} alt="Trebol4Devop emblem" className="h-full w-full object-contain" />
          </div>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Trebol4Devop</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-neutral-900 dark:text-white">
          {t('contact.title1')}<br />{t('contact.title2')}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-12 max-w-sm text-sm sm:text-base">
          {t('contact.desc')}
        </p>
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-100 dark:bg-neutral-900 flex justify-center items-center rounded-sm flex-shrink-0">
              <Mail size={18} className="text-brand-primary sm:w-5 sm:h-5" />
            </div>
            <div className="overflow-hidden">
              <span className="block text-[10px] sm:text-xs uppercase text-neutral-500 font-bold tracking-wider">{t('contact.email_label')}</span>
              <a href="mailto:trebol4devop@proton.me" className="text-sm sm:text-lg text-neutral-900 dark:text-white truncate block">trebol4devop@proton.me</a>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-100 dark:bg-neutral-900 flex justify-center items-center rounded-sm flex-shrink-0">
              <Coffee size={18} className="text-brand-primary sm:w-5 sm:h-5" />
            </div>
            <div className="overflow-hidden">
              <span className="block text-[10px] sm:text-xs uppercase text-neutral-500 font-bold tracking-wider">{t('contact.support_label')}</span>
              <a href="https://buymeacoffee.com/trebol4devop" className="text-sm sm:text-lg text-neutral-900 dark:text-white truncate block">{t('contact.support_text')}</a>
            </div>
          </div>
        </div>
      </div>
      
      <form 
        action="https://formspree.io/f/xkoknvkg" 
        method="POST"
        className="space-y-4 sm:space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-[10px] sm:text-xs uppercase text-neutral-500 font-bold tracking-wider mb-2">{t('contact.form_name')}</label>
            <input 
              name="name" 
              type="text" 
              placeholder={t('contact.form_name_ph')}
              className="w-full bg-white dark:bg-[#171717] border border-black/5 dark:border-white/5 p-3 sm:p-4 rounded-sm focus:border-brand-primary outline-none transition-colors text-neutral-900 dark:text-white placeholder:text-neutral-400 text-sm sm:text-base"
              required
            />
          </div>
          <div>
            <label className="block text-[10px] sm:text-xs uppercase text-neutral-500 font-bold tracking-wider mb-2">{t('contact.form_email')}</label>
            <input 
              name="email" 
              type="email" 
              placeholder="contacto@trebol4devop.com" 
              className="w-full bg-white dark:bg-[#171717] border border-black/5 dark:border-white/5 p-3 sm:p-4 rounded-sm focus:border-brand-primary outline-none transition-colors text-neutral-900 dark:text-white placeholder:text-neutral-400 text-sm sm:text-base"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-[10px] sm:text-xs uppercase text-neutral-500 font-bold tracking-wider mb-2">{t('contact.form_msg')}</label>
          <textarea 
            name="message" 
            placeholder={t('contact.form_msg_ph')}
            rows={5}
            className="w-full bg-white dark:bg-[#171717] border border-black/5 dark:border-white/5 p-3 sm:p-4 rounded-sm focus:border-brand-primary outline-none transition-colors resize-none text-neutral-900 dark:text-white placeholder:text-neutral-400 text-sm sm:text-base"
            required
          />
        </div>
        <button type="submit" className="w-full bg-brand-primary text-black font-bold py-3 sm:py-4 rounded-sm hover:bg-brand-primary/80 transition-colors uppercase tracking-widest text-xs sm:text-sm">
          {t('contact.btn')}
        </button>
      </form>
    </div>
  );
}