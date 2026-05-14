import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Gamepad2,
  Layers3,
  UsersRound,
} from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
const sentences = [
  "An Informatics Engineering student passionate about crafting seamless mobile applications, robust backend architectures, and engaging UI/UX experiences.",
  "Active leader in technology organizations, with a proven track record of orchestrating national-scale tech events and workshops.",
  "Dedicated to bridging the gap between technical innovation, team collaboration, and real-world execution to deliver impactful projects.",
];
const interests = [
  { icon: Code2, label: "Mobile & Backend" },
  { icon: Gamepad2, label: "Game Development" },
  { icon: Layers3, label: "UI/UX Systems" },
  { icon: BrainCircuit, label: "AI Technology" },
  { icon: UsersRound, label: "Tech Events" },
];
export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-24 md:px-8">
      {" "}
      <div className="absolute inset-x-0 top-16 h-28 rotate-2 border-y text-indigo-400 opacity-80" />{" "}
      <div className="relative z-10 mx-auto max-w-7xl">
        {" "}
        <SectionTitle
          eyebrow="About Me"
          title="Builder mindset. Leadership energy."
        />{" "}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {" "}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.18 } },
            }}
            className="brutal-card border-2 border-[var(--border-color)]"
          >
            {" "}
            {sentences.map((sentence, index) => (
              <motion.p
                key={sentence}
                variants={{
                  hidden: { opacity: 0, y: 24, rotate: index % 2 ? 1.5 : -1.5 },
                  show: { opacity: 1, y: 0, rotate: 0 },
                }}
                className="mb-5 font-display text-2xl font-bold leading-tight md:text-4xl"
              >
                {" "}
                {sentence}{" "}
              </motion.p>
            ))}{" "}
          </motion.div>{" "}
          <div className="grid gap-4">
            {" "}
            {interests.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ x: -8, rotate: index % 2 ? 1.5 : -1.5 }}
                  className="flex items-center gap-4 border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] p-4 shadow-brutalSm"
                >
                  {" "}
                  <span className="grid h-14 w-14 shrink-0 place-items-center border-2 border-[var(--border-color)] rounded-lg bg-toxicGreen text-black shadow-brutalSm">
                    {" "}
                    <Icon strokeWidth={3} />{" "}
                  </span>{" "}
                  <span className="font-display text-xl font-bold tracking-wide">
                    {item.label}
                  </span>{" "}
                </motion.div>
              );
            })}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
