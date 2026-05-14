import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, Crown, ExternalLink, Sparkles } from "lucide-react";
import { profile } from "../data/profile.js";
function FuturisticPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-40">
      {" "}
      <div className="absolute left-5 top-8 h-24 w-24 border-2 border-[var(--border-color)]/40 rounded-lg bg-[var(--card-bg)] text-[var(--fg)]" />{" "}
      <div className="absolute right-6 top-16 h-16 w-28 border-2 border-[var(--border-color)] rounded-lg bg-[var(--card-bg)] text-[var(--fg)] border-toxicGreen" />{" "}
      <div className="absolute bottom-8 left-8 h-20 w-20 rounded-full border-4 border-[var(--border-color)]/20" />{" "}
      <div className="absolute inset-x-8 top-1/2 h-[3px] bg-[var(--border-color)]/40" />{" "}
      <div className="absolute right-10 top-10 grid grid-cols-3 gap-1">
        {" "}
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} className="h-2 w-2 bg-[var(--border-color)]" />
        ))}{" "}
      </div>{" "}
    </div>
  );
}
export default function LanyardSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });
  const rotateY = useTransform(scrollYProgress, [0, 1], [-34, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.38], [0, 1]);
  return (
    <section
      id="lanyard"
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-24 md:px-8"
    >
      {" "}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,44,191,0.35),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(116,255,77,0.20),transparent_24%)]" />{" "}
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        {" "}
        <motion.div
          style={{ opacity, y, rotateX, rotateY }}
          className="relative mx-auto flex min-h-[650px] w-full max-w-[430px] justify-center perspective-1000"
        >
          {" "}
          <div className="absolute -top-24 left-1/2 h-[330px] w-24 -translate-x-1/2 border-x border-[var(--border-color)] bg-[linear-gradient(90deg,var(--color-magenta)_0_32%,var(--color-acid)_32%_40%,var(--color-neoBlue)_40%_70%,var(--color-toxicGreen)_70%_100%)] shadow-brutalSm" />{" "}
          <div className="absolute left-1/2 top-[205px] h-12 w-24 -translate-x-1/2 border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] shadow-brutalSm" />{" "}
          <motion.div
            animate={{ rotate: [-2.6, 2.8, -1.4, 2, -2.6] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[245px] w-full origin-top"
          >
            {" "}
            <div className="lanyard-card relative overflow-hidden border-2 rounded-2xl bg-[var(--card-bg)] text-[var(--fg)] p-5 shadow-brutal shadow-[var(--color-magenta)]/30">
              {" "}
              <FuturisticPattern />{" "}
              <div className="relative z-10">
                {" "}
                <div className="mb-5 flex items-start justify-between gap-4">
                  {" "}
                  <div>
                    {" "}
                    <p className="font-display text-sm font-bold tracking-wide text-toxicGreen">
                      HMPTI Presents
                    </p>{" "}
                    <h3 className="font-display text-5xl font-bold tracking-wide leading-none">
                      INVOFEST
                    </h3>{" "}
                    <p className="font-display text-2xl font-bold text-neonPink">
                      2025
                    </p>{" "}
                  </div>{" "}
                  <Sparkles
                    className="h-10 w-10 text-toxicGreen"
                    strokeWidth={3}
                  />{" "}
                </div>{" "}
                <div className="grid grid-cols-[0.82fr_1fr] gap-4">
                  {" "}
                  <img
                    src={profile.photo}
                    alt="Sidni Ilma"
                    className="aspect-[3/4] border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] object-cover"
                  />{" "}
                  <div className="space-y-3">
                    {" "}
                    <div className="border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] p-3 shadow-brutalSm">
                      {" "}
                      <p className="font-display text-xs font-bold tracking-wide">
                        Name
                      </p>{" "}
                      <p className="font-display text-2xl font-bold tracking-wide leading-none">
                        Sidni Ilma
                      </p>{" "}
                    </div>{" "}
                    <div className="border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] p-3 shadow-brutalSm">
                      {" "}
                      <p className="font-display text-xs font-bold tracking-wide">
                        Role
                      </p>{" "}
                      <p className="font-display text-3xl font-bold tracking-wide leading-none">
                        PANITIA
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="mt-5 border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] p-4 shadow-brutalSm">
                  {" "}
                  <p className="font-display text-sm font-bold tracking-wide">
                    Chairman of INVOFEST 2025 Committee
                  </p>{" "}
                </div>{" "}
                <div className="mt-5 flex items-center justify-between gap-4">
                  {" "}
                  <div className="grid h-20 w-20 grid-cols-4 gap-1 border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] p-2">
                    {" "}
                    {Array.from({ length: 16 }).map((_, index) => (
                      <span
                        key={index}
                        className={
                          index % 3 === 0 || index === 5 || index === 14
                            ? "bg-[var(--border-color)]"
                            : "bg-acid"
                        }
                      />
                    ))}{" "}
                  </div>{" "}
                  <div className="text-right font-display text-xs font-bold tracking-wide">
                    {" "}
                    <p>IT Talkshow</p> <p>Cyber Security</p>{" "}
                    <p>AI Automation</p> <p>Mobile Dev</p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>{" "}
        </motion.div>{" "}
        <div>
          {" "}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="mb-4 inline-flex border-2 border-[var(--border-color)] rounded-lg bg-neoBlue text-white px-3 py-1 font-display text-sm font-bold tracking-wide shadow-brutalSm"
          >
            {" "}
            Cyber Event Identity{" "}
          </motion.p>{" "}
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.08 }}
            className="font-display text-5xl font-bold tracking-wide leading-[0.9] text-[var(--headline)] md:text-7xl"
          >
            {" "}
            Lanyard that feels like a digital stage pass.{" "}
          </motion.h2>{" "}
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg font-bold text-[var(--headline)] opacity-[0.85]"
          >
            {" "}
            Identitas INVOFEST 2025 jadi pusat cerita: leadership, koordinasi,
            dan energi event teknologi yang kuat sejak pertama kali halaman
            dibuka.{" "}
          </motion.p>{" "}
          <motion.a
            href={profile.lanyardPdf}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5, rotate: -1 }}
            className="mt-8 inline-flex items-center gap-2 border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] px-5 py-3 font-display text-sm font-bold tracking-wide shadow-brutalSm transition hover:shadow-brutal shadow-black/40"
          >
            {" "}
            <BadgeCheck className="h-5 w-5" strokeWidth={3} /> Lanyard PDF
            Reference <ExternalLink className="h-4 w-4" strokeWidth={3} />{" "}
          </motion.a>{" "}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex max-w-xl items-center gap-4 border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] p-5 shadow-brutal"
          >
            {" "}
            <Crown
              className="h-12 w-12 shrink-0 text-toxicGreen"
              strokeWidth={3}
            />{" "}
            <p className="font-display text-xl font-bold tracking-wide leading-tight">
              {" "}
              Ketua pelaksana yang pegang timeline, koordinasi, keputusan, dan
              vibe event.{" "}
            </p>{" "}
          </motion.div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
