import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 420, damping: 34 });
  const smoothY = useSpring(y, { stiffness: 420, damping: 34 });
  useEffect(() => {
    const interactive = "a, button, input, textarea, .cursor-reactive";
    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setHovering(
        event.target instanceof Element &&
          Boolean(event.target.closest(interactive)),
      );
    };
    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
    };
  }, [x, y]);
  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white text-indigo-400 shadow-[0_0_28px_rgba(255,44,191,0.95)] mix-blend-difference md:block"
      style={{ x: smoothX, y: smoothY, scale: hovering ? 2.4 : 1 }}
    />
  );
}
