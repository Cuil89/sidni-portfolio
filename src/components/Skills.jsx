import { motion } from "framer-motion";
import { extraSkills, skills } from "../data/profile.js";
import SectionTitle from "./SectionTitle.jsx";
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 py-24 md:px-8"
    >
      {" "}
      <div className="absolute left-0 top-20 h-20 w-full -skew-y-2 border-y text-cyan-400" />{" "}
      <div className="relative z-10 mx-auto max-w-7xl">
        {" "}
        <SectionTitle
          eyebrow="Skill Stack"
          title="Technologies I use to build scalable solutions."
        />{" "}
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {" "}
          {skills.map((group, index) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 38, rotate: index % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.07 }}
              className="border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] p-4 shadow-brutalSm"
            >
              {" "}
              <div
                className={`mb-5 h-4 w-20 border-2 border-[var(--border-color)] rounded-lg ${group.accent}`}
              />{" "}
              <h3 className="font-display text-2xl font-bold tracking-wide leading-none">
                {group.group}
              </h3>{" "}
              <div className="mt-5 flex flex-wrap gap-3">
                {" "}
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ y: -8, rotate: -4, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-reactive border-2 border-[var(--border-color)] rounded-lg bg-[var(--bg)] text-[var(--fg)] px-3 py-2 font-display text-sm font-bold tracking-wide shadow-brutalSm"
                  >
                    {" "}
                    {item}{" "}
                  </motion.span>
                ))}{" "}
              </div>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
        <div className="mt-10 flex flex-wrap gap-4">
          {" "}
          {extraSkills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{
                y: -8,
                rotate: index % 2 ? 5 : -5,
                boxShadow: "12px 12px 0 var(--color-toxicGreen)",
              }}
              className="cursor-reactive border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] px-4 py-3 font-display text-sm font-bold tracking-wide shadow-brutalSm"
            >
              {" "}
              {skill}{" "}
            </motion.span>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
