import { motion } from "framer-motion";
export default function SectionTitle({ eyebrow, title, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      {" "}
      <p className="mb-3 inline-flex border-2 border-[var(--border-color)] rounded-lg bg-magenta text-white px-3 py-1 font-display text-xs font-bold tracking-wide shadow-brutalSm">
        {" "}
        {eyebrow}{" "}
      </p>{" "}
      <h2 className="font-display text-4xl font-bold tracking-wide leading-[0.92] text-[var(--headline)] md:text-6xl">
        {" "}
        {title}{" "}
      </h2>{" "}
    </motion.div>
  );
}
