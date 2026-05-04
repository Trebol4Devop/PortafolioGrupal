import { Navbar, Hero, Team, Stack, Contact } from "./components/MainContent";
import Section from "./components/Section";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative overflow-x-hidden selection:bg-brand-primary selection:text-black">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <Section id="home">
        <Hero />
      </Section>
      
      <Section id="about">
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Independent focus on <span className="text-brand-primary italic">excellence</span>.
          </h2>
          <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
            <p>
              Born from the University of San Carlos de Guatemala (USAC), Trébol4Devop
              is a collective of engineers dedicated to the science of software delivery.
            </p>
            <p>
              We believe in <span className="text-white font-medium italic">clean code</span> as an asset and <span className="text-white font-medium">automation</span> as a force multiplier.
              Our focus spans from robust backend systems to intuitive, accessible frontend experiences.
            </p>
            <p>
              We prioritize Open Source contributions and tools that help developers
              scale their impact without increasing complexity.
            </p>
          </div>
        </div>

        <div className="relative w-screen left-1/2 -translate-x-1/2 h-32 overflow-hidden flex items-end">
          <motion.div
            animate={{ x: ["-20vw", "110vw"] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-6 flex items-end gap-3"
          >
            <div className="flex gap-2 mb-1">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    opacity: [0, 0.7, 0],
                    scale: [0.5, 1, 0.5],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut"
                  }}
                  className="w-1.5 h-1.5 bg-white rounded-full"
                />
              ))}
            </div>
            <motion.img
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
              src="/assets/images/dino.png"
              alt="Running dinosaur"
              className="h-8 w-8 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            />
          </motion.div>
        </div>
      </Section>

      <Section id="team">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-2 block">
              Profiles
            </span>
            <h2 className="text-5xl font-bold">The Core Team.</h2>
          </div>
          <p className="max-w-md text-neutral-500">
            A diverse group of developers sharing a uniform vision for quality and scalability.
          </p>
        </div>
        <Team />
      </Section>

      <Section id="stack" className="items-center">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Technology Stack.</h2>
          <p className="text-neutral-500 max-w-lg mx-auto">
            Leveraging modern tools to build architecture that withstands the test of time.
          </p>
        </div>
        <Stack />
      </Section>

      <Section id="projects">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-950 p-2 group shadow-[0_0_30px_rgba(92,207,175,0.1)]"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center border border-white/5">
              <div className="absolute inset-0 bg-brand-primary/10 blur-[80px] rounded-full transform scale-75 pointer-events-none" />
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-full flex items-center justify-center p-8 z-10"
              >
                <img
                  src="/assets/images-proyects/PublicacionLinekdin.png"
                  alt="SAMNU Project Showcase"
                  className="w-full h-full object-contain transition-all duration-300 drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-3 block">Completed Project</span>
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                SAMNU: <span className="text-brand-primary">Numerical Methods</span> Solution
              </h3>
              <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                A fully realized and successfully deployed software suite for engineering and science students. Built to overcome the limits of manual calculation, it features a didactic step-by-step approach to understand the logic behind the results. Developed utilizing Flutter, Dart, and LaTeX.
              </p>
              <ul className="space-y-3 text-neutral-300 text-base">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full" />
                  +30 Implemented Algorithms
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full" />
                  Automatic PDF Reports & Worksheet Generation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full" />
                  Advanced Natural Mathematical Parser
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <a
                href="https://samnu.netlify.app/"
                target="_blank"
                className="inline-flex items-center gap-2 bg-brand-primary text-black px-8 py-4 font-bold rounded-lg hover:bg-neutral-200 transition-all duration-300 text-lg group w-fit"
              >
                Visit SAMNU
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="contact">
        <Contact />
      </Section>

      <footer className="py-12 px-6 md:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-neutral-500 font-medium">
        <p>© 2026 Trebol4Devop. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="https://github.com/trebol4devop" className="hover:text-white transition-colors">Github</a>
          <a href="https://www.paypal.me/TrebolDevop" className="hover:text-white transition-colors">Support Development</a>
        </div>
      </footer>
    </main>
  );
}