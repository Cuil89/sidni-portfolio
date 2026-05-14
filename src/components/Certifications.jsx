import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import { certifications } from "../data/profile.js";
import SectionTitle from "./SectionTitle.jsx";
export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-4 py-24 md:px-8"
    >
      {" "}
      <div className="mx-auto max-w-7xl">
        {" "}
        <SectionTitle
          eyebrow="Certifications"
          title="Continuous Learning & Professional Growth."
        />{" "}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {" "}
          {certifications.map((certification, index) => (
            <motion.div
              key={certification}
              initial={{ opacity: 0, y: 30, rotate: index % 2 ? 1 : -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -8, rotate: index % 2 ? -1.5 : 1.5 }}
              className="flex items-center gap-4 border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] p-5 shadow-brutalSm"
            >
              {" "}
              <span
                className={`grid h-16 w-16 shrink-0 place-items-center border-2 border-[var(--border-color)] rounded-lg shadow-brutalSm ${index % 2 === 0 ? "bg-acid text-black" : "bg-magenta text-white"}`}
              >
                {" "}
                {index === 0 ? (
                  <Award strokeWidth={3} />
                ) : (
                  <CheckCircle2 strokeWidth={3} />
                )}{" "}
              </span>{" "}
              <p className="font-display text-xl font-bold tracking-wide leading-tight">
                {certification}
              </p>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
