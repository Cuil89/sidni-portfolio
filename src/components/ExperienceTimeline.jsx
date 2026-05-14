import { motion } from "framer-motion";
import {
  Bot,
  CalendarDays,
  Mic2,
  Presentation,
  ShieldCheck,
  Smartphone,
  UsersRound,
} from "lucide-react";
import { eventExperiences } from "../data/profile.js";
import SectionTitle from "./SectionTitle.jsx";
const eventIcons = [Mic2, Presentation, ShieldCheck, Bot, Smartphone];
export default function ExperienceTimeline() {
  const experience = eventExperiences[0];
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-4 py-24 md:px-8"
    >
      {" "}
      <div className="parallax-shape absolute -right-16 top-28 h-52 w-52 rotate-12 border-2 rounded-2xl bg-[var(--card-bg)] text-[var(--fg)] text-blue-400 shadow-brutal shadow-black/40" />{" "}
      <div className="mx-auto max-w-7xl">
        {" "}
        <SectionTitle
          eyebrow="Experience"
          title="Driving Impact Through Tech Leadership."
        />{" "}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.42fr_1fr]">
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="relative border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] p-6 shadow-brutal"
          >
            {" "}
            <div className="absolute -right-5 -top-5 grid h-16 w-16 place-items-center border-2 border-[var(--border-color)] rounded-xl bg-acid text-black shadow-brutalSm">
              {" "}
              <CalendarDays strokeWidth={3} />{" "}
            </div>{" "}
            <p className="font-display text-sm font-bold tracking-wide">
              {experience.date}
            </p>{" "}
            <h3 className="mt-3 font-display text-4xl font-bold tracking-wide leading-none">
              {experience.title}
            </h3>{" "}
            <p className="mt-4 font-bold">{experience.org}</p>{" "}
            <p className="mt-6 text-lg font-bold leading-snug">
              {experience.copy}
            </p>{" "}
          </motion.div>{" "}
          <div className="relative">
            {" "}
            <div className="absolute left-5 top-0 hidden h-full w-[6px] bg-[var(--border-color)] md:block" />{" "}
            <div className="grid gap-5">
              {" "}
              {experience.features.map((feature, index) => {
                const Icon = eventIcons[index] || UsersRound;
                return (
                  <motion.div
                    key={feature}
                    initial={{
                      opacity: 0,
                      x: 42,
                      rotate: index % 2 ? 1.5 : -1.5,
                    }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 8, rotate: index % 2 ? -1 : 1 }}
                    className="relative ml-0 flex items-center gap-4 border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] p-4 shadow-brutalSm md:ml-14"
                  >
                    {" "}
                    <span className="absolute -left-[74px] hidden h-11 w-11 place-items-center border-2 border-[var(--border-color)] rounded-xl bg-neoBlue text-white shadow-brutalSm md:grid">
                      {" "}
                      <Icon strokeWidth={3} />{" "}
                    </span>{" "}
                    <span className="grid h-14 w-14 shrink-0 place-items-center border-2 border-[var(--border-color)] rounded-lg bg-neoBlue text-white shadow-brutalSm md:hidden">
                      {" "}
                      <Icon strokeWidth={3} />{" "}
                    </span>{" "}
                    <div>
                      {" "}
                      <p className="font-display text-xs font-bold tracking-wide text-magenta">
                        INVOFEST 2025 Agenda
                      </p>{" "}
                      <h4 className="font-display text-xl font-bold tracking-wide leading-tight">
                        {feature}
                      </h4>{" "}
                    </div>{" "}
                  </motion.div>
                );
              })}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
