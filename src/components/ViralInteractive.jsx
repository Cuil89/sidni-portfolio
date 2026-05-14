import { motion } from "framer-motion";
import { Flame, Sparkles, Zap } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
const stickers = [
  {
    label: "#OPENTOWORK",
    className: "bg-toxicGreen text-black left-[5%] top-[18%] rotate-[-8deg]",
  },
  {
    label: "PANITIA",
    className: "bg-magenta text-white right-[8%] top-[10%] rotate-[9deg]",
  },
  {
    label: "INVOFEST 2025",
    className: "bg-neoBlue text-white left-[12%] bottom-[16%] rotate-[5deg]",
  },
  {
    label: "BUILDING COOL STUFF",
    className: "bg-acid text-black right-[12%] bottom-[18%] rotate-[-6deg]",
  },
];
export default function ViralInteractive() {
  return (
    <section className="relative min-h-[620px] overflow-hidden px-4 py-24 md:px-8">
      {" "}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,44,191,0.35),transparent_26%),radial-gradient(circle_at_25%_80%,rgba(116,255,77,0.24),transparent_24%)]" />{" "}
      {stickers.map((sticker, index) => (
        <motion.div
          key={sticker.label}
          animate={{ y: [0, -18, 0], rotate: [0, index % 2 ? 4 : -4, 0] }}
          transition={{
            duration: 4 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute z-10 hidden border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] px-4 py-3 font-display text-sm font-bold tracking-wide shadow-brutalSm md:block ${sticker.className}`}
        >
          {" "}
          {sticker.label}{" "}
        </motion.div>
      ))}{" "}
      <div className="relative z-20 mx-auto max-w-7xl">
        {" "}
        <SectionTitle
          eyebrow="Viral Mode"
          title="Open-to-work signal, cyber leadership, developer aura."
          align="center"
        />{" "}
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {" "}
          {[
            {
              icon: Flame,
              label: "Open to Work",
              text: "Signal hijau yang langsung kebaca dari 5 detik pertama.",
            },
            {
              icon: Zap,
              label: "Cyber Event",
              text: "Visual magenta, ungu, dan hitam tebal ala stage pass teknologi.",
            },
            {
              icon: Sparkles,
              label: "Developer Energy",
              text: "Flutter, Flask, Unity, AI, dan leadership dikemas jadi satu vibe.",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 32, rotate: index % 2 ? 1 : -1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -10, rotate: index % 2 ? -2 : 2 }}
                className="border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] p-6 shadow-brutal shadow-black/40"
              >
                {" "}
                <span className="mb-5 grid h-16 w-16 place-items-center border-2 border-[var(--border-color)] rounded-xl bg-magenta text-white shadow-brutalSm">
                  {" "}
                  <Icon strokeWidth={3} />{" "}
                </span>{" "}
                <h3 className="font-display text-3xl font-bold tracking-wide leading-none">
                  {item.label}
                </h3>{" "}
                <p className="mt-4 font-bold leading-relaxed">
                  {item.text}
                </p>{" "}
              </motion.div>
            );
          })}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
