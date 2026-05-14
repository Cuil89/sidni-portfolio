import { motion, useScroll, useSpring } from "framer-motion";
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <motion.div
      className="fixed left-0 top-0 z-[80] h-2 w-full origin-left border-b-[3px] text-cyan-400"
      style={{ scaleX }}
    />
  );
}
