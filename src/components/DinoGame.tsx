import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function DinoGame() {
  const dinoRef = useRef<HTMLImageElement>(null);
  const cactusRef = useRef<HTMLDivElement>(null);
  const [isJumping, setIsJumping] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useTranslation();

  const jump = () => {
    if (!isPlaying && !isGameOver) {
      setIsPlaying(true);
    }
    if (isGameOver) {
      setIsGameOver(false);
      setScore(0);
      setIsPlaying(true);
    }
    if (!isJumping) {
      setIsJumping(true);
      setTimeout(() => {
        setIsJumping(false);
      }, 300);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        jump();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isJumping, isPlaying, isGameOver]);

  useEffect(() => {
    if (!isPlaying || isGameOver) return;

    const interval = setInterval(() => {
      setScore((s) => s + 1);
    }, 100);

    const collisionCheck = setInterval(() => {
      const dino = dinoRef.current;
      const cactus = cactusRef.current;

      if (dino && cactus) {
        const dinoRect = dino.getBoundingClientRect();
        const cactusRect = cactus.getBoundingClientRect();

        if (
          cactusRect.left < dinoRect.right - 10 &&
          cactusRect.right > dinoRect.left + 10 &&
          cactusRect.top < dinoRect.bottom - 10
        ) {
          setIsGameOver(true);
          setIsPlaying(false);
        }
      }
    }, 10);

    return () => {
      clearInterval(interval);
      clearInterval(collisionCheck);
    };
  }, [isPlaying, isGameOver]);

  return (
    <div 
      className="relative w-full max-w-2xl mx-auto h-24 md:h-28 border-b border-neutral-300 dark:border-neutral-800 overflow-hidden cursor-pointer mt-8 md:mt-12 group rounded-sm"
      onClick={jump}
    >
      <div className="absolute top-2 right-2 font-mono text-xs md:text-sm font-bold text-neutral-400 dark:text-neutral-500">
        {score.toString().padStart(5, '0')}
      </div>

      {isGameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-[#0A0A0A]/80 z-20">
          <div className="text-center">
            <span className="block font-bold text-lg md:text-xl text-neutral-900 dark:text-white uppercase tracking-widest mb-1">{t('dino.gameOver')}</span>
            <span className="text-[10px] md:text-xs text-neutral-500 uppercase font-bold">{t('dino.restart')}</span>
          </div>
        </div>
      )}

      {!isPlaying && !isGameOver && (
        <div className="absolute inset-0 flex items-center justify-center z-20 transition-opacity group-hover:opacity-100">
          <span className="font-bold text-[10px] md:text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-widest animate-pulse">
            {t('dino.play')}
          </span>
        </div>
      )}

      <div className="relative w-full h-full">
        <img
          ref={dinoRef}
          src="/assets/images/dino.png"
          alt="Dino"
          className={`absolute bottom-0 left-8 md:left-12 w-8 h-8 md:w-10 md:h-10 object-contain invert dark:invert-0 z-10 transition-transform duration-300 ease-out ${
            isJumping ? "-translate-y-12 md:-translate-y-16" : "translate-y-0"
          }`}
        />
        {isPlaying && (
          <div
            ref={cactusRef}
            className="absolute bottom-0 w-3 h-5 md:w-4 md:h-6 bg-brand-primary rounded-t-sm z-10"
            style={{ animation: 'moveCactus 1.2s linear infinite' }}
          />
        )}
        
        <div className="absolute bottom-1 left-0 w-full flex gap-4 opacity-20 dark:opacity-10">
            <div className="w-1 h-1 bg-neutral-900 dark:bg-white rounded-full"></div>
            <div className="w-2 h-1 bg-neutral-900 dark:bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-neutral-900 dark:bg-white rounded-full ml-8"></div>
            <div className="w-3 h-1 bg-neutral-900 dark:bg-white rounded-full ml-12"></div>
            <div className="w-1 h-1 bg-neutral-900 dark:bg-white rounded-full ml-24"></div>
        </div>
      </div>
    </div>
  );
}