import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(
        Math.round((currentStep / steps) * 100),
        100,
      );
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => onComplete(), 400);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -20,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      <div className="relative mb-8 h-24 w-24">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[var(--color-magenta)] opacity-80"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border-b-2 border-l-2 border-[var(--color-toxicGreen)] opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white font-display">
          S
        </div>
      </div>

      <div className="flex w-64 flex-col items-center gap-3">
        <div className="h-1 w-full overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-gradient-to-r from-[var(--color-magenta)] to-[var(--color-toxicGreen)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        <div className="flex w-full justify-between px-1 text-sm font-medium tracking-widest text-white/50">
          <span>LOADING</span>
          <span>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
