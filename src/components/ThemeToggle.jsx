import { AnimatePresence, motion } from "framer-motion";
import { Flame, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", light);
  }, [light]);

  return (
    <button
      type="button"
      aria-label="Toggle dark and light theme"
      onClick={() => setLight((v) => !v)}
      className="fixed right-4 top-5 z-[75] flex h-12 items-center gap-2 border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] px-4 text-[var(--fg)] shadow-brutal transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-brutalLg active:translate-x-0 active:translate-y-0 active:shadow-brutalSm"
    >
      <AnimatePresence mode="wait">
        {light ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            className="flex items-center gap-2 text-toxicGreen"
          >
            <Sparkles className="h-5 w-5 fill-current" strokeWidth={2.5} />
            <span className="font-display text-sm font-black tracking-widest uppercase">
              HERO MODE
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="villain"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            className="flex items-center gap-2 text-neoBlue"
          >
            <Flame className="h-5 w-5 fill-current" strokeWidth={2.5} />
            <span className="font-display text-sm font-black tracking-widest uppercase">
              VILLAIN MODE
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
