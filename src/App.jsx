import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import About from "./components/About.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import ExperienceTimeline from "./components/ExperienceTimeline.jsx";
import Footer from "./components/Footer.jsx";
import GitHubProjects from "./components/GitHubProjects.jsx";
import Hero from "./components/Hero.jsx";
import LanyardSection from "./components/LanyardSection.jsx";
import Marquee from "./components/Marquee.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Skills from "./components/Skills.jsx";
import StickyNav from "./components/StickyNav.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import ViralInteractive from "./components/ViralInteractive.jsx";
import Preloader from "./components/Preloader.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP dipakai ringan untuk parallax dekoratif antar-section.
    const context = gsap.context(() => {
      gsap.utils.toArray(".parallax-shape").forEach((shape, index) => {
        gsap.to(shape, {
          yPercent: index % 2 ? -35 : 35,
          rotate: index % 2 ? -14 : 14,
          ease: "none",
          scrollTrigger: {
            trigger: shape,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    });

    return () => context.revert();
  }, [loading]); // Re-run GSAP when loading finishes

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ScrollProgress />
            <CustomCursor />
            <StickyNav />
            <ThemeToggle />
            <main>
              <Hero />
              <Marquee />
              <LanyardSection />
              <About />
              <Skills />
              <ExperienceTimeline />
              <Certifications />
              <GitHubProjects />
              <ViralInteractive />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
