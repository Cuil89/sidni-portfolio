import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowDownRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
} from "lucide-react";
import MagneticButton from "./MagneticButton.jsx";
import { highlightBadges, profile, typewriterRoles } from "../data/profile.js";
function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const currentRole = typewriterRoles[roleIndex];
    const delay =
      !deleting && letterCount === currentRole.length
        ? 850
        : deleting
          ? 36
          : 72;
    const timer = window.setTimeout(() => {
      if (!deleting && letterCount === currentRole.length) {
        setDeleting(true);
        return;
      }
      if (deleting && letterCount === 0) {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % typewriterRoles.length);
        return;
      }
      setLetterCount((count) => count + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, letterCount, roleIndex]);
  return (
    <span className="inline-flex min-h-[1.25em] items-center border-2 border-[var(--border-color)] rounded-lg bg-[var(--card-bg)] text-[var(--fg)] px-3 shadow-brutalSm">
      {" "}
      {typewriterRoles[roleIndex].slice(0, letterCount)}{" "}
      <span className="ml-1 h-6 w-[3px] animate-pulse bg-magenta" />{" "}
    </span>
  );
}
export default function Hero() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 160, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 160, damping: 18 });
  function handleTilt(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 20);
    rotateX.set(py * -18);
  }
  function resetTilt() {
    rotateX.set(0);
    rotateY.set(0);
  }
  return (
    <section
      id="home"
      className="hero-grid relative min-h-screen overflow-hidden px-4 pt-24 md:px-8"
    >
      {" "}
      <div className="neon-blob left-[6%] top-[12%] text-indigo-400" />{" "}
      <div className="neon-blob right-[4%] top-[20%] text-cyan-400 animation-delay-2" />{" "}
      <div className="neon-blob bottom-[10%] left-[34%] text-blue-400 animation-delay-4" />{" "}
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 pb-14 lg:grid-cols-[1.08fr_0.92fr]">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="min-w-0 max-w-[360px] md:max-w-none"
        >
          {" "}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {" "}
            <span className="border-2 border-[var(--border-color)] rounded-lg bg-toxicGreen text-black px-3 py-2 font-display text-sm font-bold tracking-wide shadow-brutalSm">
              {" "}
              #OpenToWork{" "}
            </span>{" "}
            <span className="border-2 border-[var(--border-color)] rounded-lg bg-[var(--card-bg)] text-[var(--fg)] px-3 py-2 font-display text-sm font-bold tracking-wide shadow-brutalSm">
              {" "}
              Tech Event Leader{" "}
            </span>{" "}
          </div>{" "}
          <h1 className="glitch-title font-display text-[clamp(3rem,13vw,3.65rem)] font-bold tracking-wide leading-[0.86] text-[var(--headline)] md:text-8xl xl:text-9xl">
            {" "}
            Hi, I'm <span className="text-magenta">Sidni</span> Ilma{" "}
          </h1>{" "}
          <p className="mt-7 max-w-3xl break-words border-l-4 border-cyan-500 pl-4 text-lg font-bold text-[var(--headline)] md:text-2xl">
            {" "}
            <span className="block">Informatics Engineering Student</span>{" "}
            <span className="block">
              Software Developer | Tech Enthusiast
            </span>{" "}
          </p>{" "}
          <div className="mt-6 font-display text-2xl font-bold tracking-wide text-[var(--headline)] md:text-4xl">
            {" "}
            <Typewriter />{" "}
          </div>{" "}
          <div className="mt-8 flex max-w-[360px] flex-wrap gap-3 md:max-w-none md:gap-4">
            {" "}
            <MagneticButton href="#projects" icon={Rocket} variant="pink">
              {" "}
              View My Projects{" "}
            </MagneticButton>{" "}
            <MagneticButton href="#contact" icon={Mail} variant="green">
              {" "}
              Contact Me{" "}
            </MagneticButton>{" "}
            <MagneticButton
              href={profile.cv}
              icon={Download}
              variant="light"
              download
            >
              {" "}
              Download CV{" "}
            </MagneticButton>{" "}
          </div>{" "}
          <div className="mt-8 flex flex-wrap gap-3">
            {" "}
            {highlightBadges.map((badge) => (
              <motion.span
                key={badge}
                whileHover={{ rotate: -3, y: -5, scale: 1.04 }}
                className="border-2 border-[var(--border-color)] rounded-lg bg-[var(--card-bg)] text-[var(--fg)] px-3 py-2 font-display text-xs font-bold tracking-wide shadow-brutalSm"
              >
                {" "}
                {badge}{" "}
              </motion.span>
            ))}{" "}
          </div>{" "}
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0, rotate: 4, scale: 0.92 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full min-w-0 max-w-[480px] perspective-1000"
        >
          {" "}
          <motion.div
            onPointerMove={handleTilt}
            onPointerLeave={resetTilt}
            style={{
              rotateX: springX,
              rotateY: springY,
              transformStyle: "preserve-3d",
            }}
            className="cursor-reactive relative border-2 border-[var(--border-color)] rounded-2xl bg-[var(--card-bg)] text-[var(--fg)] p-3 shadow-brutalLg"
          >
            {" "}
            <div className="absolute left-4 top-2 z-20 rotate-6 border-2 border-[var(--border-color)] rounded-xl bg-acid text-black px-3 py-2 font-display text-xs font-bold tracking-wide shadow-brutalSm md:-right-5 md:-top-5 md:left-auto md:px-4 md:text-sm">
              {" "}
              Developer Profile{" "}
            </div>{" "}
            <img
              src={profile.photo}
              alt="Foto profil Sidni Ilma"
              className="aspect-square w-full border-2 border-[var(--border-color)] rounded-xl object-cover"
            />{" "}
            <div className="absolute bottom-8 left-0 right-0 mx-auto w-[86%] -rotate-2 border-2 border-[var(--border-color)] rounded-xl bg-magenta text-white px-4 py-3 text-center font-display text-2xl font-bold tracking-wide shadow-brutalSm md:text-3xl">
              {" "}
              #OpenToWork{" "}
            </div>{" "}
          </motion.div>{" "}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [-4, 2, -4] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-7 top-16 hidden border-2 border-[var(--border-color)] rounded-xl bg-magenta p-3 text-white shadow-brutalSm md:block"
          >
            {" "}
            <ArrowDownRight strokeWidth={3} />{" "}
          </motion.div>{" "}
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {" "}
            <a
              className="mini-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <Github className="h-4 w-4" strokeWidth={3} /> GitHub{" "}
            </a>{" "}
            <a
              className="mini-link"
              href={profile.linkedIn}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <Linkedin className="h-4 w-4" strokeWidth={3} /> LinkedIn{" "}
            </a>{" "}
            <span className="mini-link">
              {" "}
              <MapPin className="h-4 w-4" strokeWidth={3} /> Tegal{" "}
            </span>{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
