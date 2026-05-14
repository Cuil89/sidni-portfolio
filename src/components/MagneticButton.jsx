import { motion, useMotionValue, useSpring } from "framer-motion";
export default function MagneticButton({
  as = "a",
  href,
  download,
  icon: Icon,
  children,
  variant = "pink",
  className = "",
  ...props
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 16 });
  const springY = useSpring(y, { stiffness: 220, damping: 16 });
  const Component = as === "button" ? "button" : "a";
  const colors = {
    pink: "border-[var(--border-color)] text-[var(--fg)] hover:bg-magenta hover:text-white",
    green: "border-[var(--border-color)] text-[var(--fg)] hover:bg-toxicGreen hover:text-black",
    light: "border-[var(--border-color)] text-[var(--fg)] hover:bg-[var(--fg)] hover:text-[var(--bg)]",
    dark: "bg-ink text-white border-ink hover:bg-ink/90",
  };
  function handlePointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }
  return (
    <motion.div style={{ x: springX, y: springY }} className="inline-flex">
      {" "}
      <Component
        {...(Component === "a" ? { href, download } : {})}
        onPointerMove={handlePointerMove}
        onPointerLeave={reset}
        className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--card-bg)] text-[var(--fg)] border-2 px-6 py-3 font-display text-sm font-bold tracking-wide shadow-brutalSm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${colors[variant]} ${className}`}
        {...props}
      >
        {" "}
        {Icon ? (
          <Icon
            className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12"
            strokeWidth={2}
          />
        ) : null}{" "}
        <span>{children}</span>{" "}
      </Component>{" "}
    </motion.div>
  );
}
