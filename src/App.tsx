import { Navbar, Hero, Team, Stack, Contact } from "./components/MainContent";
import Section from "./components/Section";
import DinoGame from "./components/DinoGame";
import { motion, useScroll, useSpring } from "motion/react";
import { useTranslation } from "react-i18next";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const { t } = useTranslation();

  return (
    <main className="relative overflow-x-hidden selection:bg-brand-primary selection:text-black transition-colors duration-300">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <Section id="home">
        <Hero />
      </Section>
      
      <Section id="about">
        <div className="max-w-3xl mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-12 text-neutral-900 dark:text-white">
            {t('about.title1')} <span className="text-brand-primary italic">{t('about.title2')}</span>.
          </h2>
          <div className="space-y-4 md:space-y-6 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              {t('about.p1')}
            </p>
            <p>
              {t('about.p2_1')} <span className="text-black dark:text-white font-medium italic">{t('about.p2_2')}</span> {t('about.p2_3')} <span className="text-black dark:text-white font-medium">{t('about.p2_4')}</span> {t('about.p2_5')}
            </p>
            <p>
              {t('about.p3')}
            </p>
          </div>
        </div>

        <DinoGame />
      </Section>

      <Section id="team">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-4 md:gap-8">
          <div>
            <span className="text-brand-primary font-mono text-xs md:text-sm tracking-widest uppercase mb-2 block">
              {t('team.subtitle')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">{t('team.title')}</h2>
          </div>
          <p className="max-w-md text-neutral-600 dark:text-neutral-500 text-sm md:text-base">
            {t('team.desc')}
          </p>
        </div>
        <Team />
      </Section>

      <Section id="stack" className="items-center">
        <div className="text-center mb-10 md:mb-24 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter text-neutral-900 dark:text-white">{t('stack.title')}</h2>
          <p className="text-neutral-600 dark:text-neutral-500 max-w-lg mx-auto text-sm md:text-base px-4">
            {t('stack.desc')}
          </p>
        </div>
        <Stack />
      </Section>

      <Section id="projects">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-950 p-2 group shadow-[0_0_30px_rgba(92,207,175,0.1)] w-full max-w-sm sm:max-w-md mx-auto lg:max-w-full"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-tr from-white via-neutral-100 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 flex items-center justify-center border border-black/5 dark:border-white/5">
              <div className="absolute inset-0 bg-brand-primary/10 blur-[80px] rounded-full transform scale-75 pointer-events-none" />
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 z-10"
              >
                <img
                  src="/assets/images-proyects/PublicacionLinekdin.png"
                  alt="SAMNU Project Showcase"
                  className="w-full h-full object-contain transition-all duration-300 drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
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
            className="space-y-4 sm:space-y-6 md:space-y-8 mt-4 lg:mt-0"
          >
            <div>
              <span className="text-brand-primary font-mono text-[10px] sm:text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-3 block">{t('projects.subtitle')}</span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight text-neutral-900 dark:text-white">
                {t('projects.title1')} <span className="text-brand-primary block xl:inline">{t('projects.title2')}</span> {t('projects.title3')}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                {t('projects.desc')}
              </p>
              <ul className="space-y-2 md:space-y-3 text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm md:text-base">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-primary rounded-full flex-shrink-0" />
                  <span>{t('projects.feat1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-primary rounded-full flex-shrink-0" />
                  <span>{t('projects.feat2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-primary rounded-full flex-shrink-0" />
                  <span>{t('projects.feat3')}</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <a
                href="https://samnu.netlify.app/"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-brand-primary text-black px-6 py-3 md:px-8 md:py-4 font-bold rounded-lg hover:bg-brand-primary/80 transition-all duration-300 text-sm sm:text-base md:text-lg group w-full sm:w-fit"
              >
                {t('projects.btn')}
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="contact">
        <Contact />
      </Section>

      <footer className="py-8 md:py-12 px-4 sm:px-8 md:px-16 lg:px-24 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8 text-xs md:text-sm text-neutral-600 dark:text-neutral-500 font-medium bg-white dark:bg-[#0A0A0A] transition-colors">
        <p className="text-center md:text-left">{t('footer.rights')}</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          <a href="https://github.com/trebol4devop" className="hover:text-brand-primary transition-colors">{t('footer.github')}</a>
          <a href="https://www.paypal.me/TrebolDevop" className="hover:text-brand-primary transition-colors">{t('footer.support')}</a>
        </div>
      </footer>
    </main>
  );
}