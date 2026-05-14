export default function Marquee() {
  const text =
    "OPEN TO WORK • FLUTTER • FLASK • UNITY • AI • CYBERSECURITY • INVOFEST 2025 •";
  return (
    <div className="relative z-20 overflow-hidden border-y-[4px] text-blue-400 py-3 text-white shadow-[0_8px_0_#050007]">
      {" "}
      <div className="marquee-track flex w-max gap-8 font-display text-2xl font-bold tracking-wide md:text-4xl">
        {" "}
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} className="whitespace-nowrap">
            {" "}
            {text}{" "}
          </span>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
