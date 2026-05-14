import { Github } from "lucide-react";
import { profile } from "../data/profile.js";
const links = [
  ["Home", "#home"],
  ["Lanyard", "#lanyard"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];
export default function StickyNav() {
  return (
    <nav className="fixed left-1/2 top-5 z-[70] hidden -translate-x-1/2 items-center gap-1 border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] px-3 py-2 shadow-brutalSm md:flex">
      {" "}
      {links.map(([label, href]) => (
        <a
          key={label}
          href={href}
          className="px-3 py-2 font-display text-xs font-bold tracking-wide opacity-75 transition-all hover:scale-105 hover:opacity-100 hover:text-magenta"
        >
          {" "}
          {label}{" "}
        </a>
      ))}{" "}
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        aria-label="Open GitHub"
        className="ml-2 grid h-9 w-9 place-items-center border-2 border-[var(--border-color)] rounded-lg bg-[var(--fg)] text-[var(--bg)] transition-all hover:scale-110 hover:rotate-6"
      >
        {" "}
        <Github className="h-4 w-4" strokeWidth={3} />{" "}
      </a>{" "}
    </nav>
  );
}
