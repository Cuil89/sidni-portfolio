import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { profile } from "../data/profile.js";
import MagneticButton from "./MagneticButton.jsx";
import SectionTitle from "./SectionTitle.jsx";
export default function Contact() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-24 md:px-8"
    >
      {" "}
      <div className="absolute inset-x-0 bottom-0 h-1/2 border-t-[6px] text-indigo-400" />{" "}
      <div className="relative z-10 mx-auto max-w-7xl">
        {" "}
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something cool together."
        />{" "}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="brutal-card border-2 border-[var(--border-color)]"
          >
            {" "}
            <h3 className="font-display text-4xl font-bold tracking-wide leading-none">
              Sidni Ilma
            </h3>{" "}
            <p className="mt-4 font-bold">{profile.headline}</p>{" "}
            <div className="mt-8 grid gap-4">
              {" "}
              <a className="contact-link" href={`mailto:${profile.email}`}>
                {" "}
                <Mail strokeWidth={3} /> {profile.email}{" "}
              </a>{" "}
              <a
                className="contact-link"
                href={profile.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <Linkedin strokeWidth={3} /> LinkedIn{" "}
              </a>{" "}
              <a
                className="contact-link"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <Github strokeWidth={3} /> GitHub{" "}
              </a>{" "}
              <span className="contact-link">
                {" "}
                <MapPin strokeWidth={3} /> {profile.location}{" "}
              </span>{" "}
            </div>{" "}
          </motion.div>{" "}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="border-2 border-[var(--border-color)] rounded-2xl bg-[var(--card-bg)] text-[var(--fg)] p-5 shadow-brutal md:p-8"
          >
            {" "}
            <div className="grid gap-5 md:grid-cols-2">
              {" "}
              <label className="form-field">
                {" "}
                <span>Name</span>{" "}
                <input type="text" placeholder="Your name" required />{" "}
              </label>{" "}
              <label className="form-field">
                {" "}
                <span>Email</span>{" "}
                <input type="email" placeholder="you@email.com" required />{" "}
              </label>{" "}
            </div>{" "}
            <label className="form-field mt-5">
              {" "}
              <span>Message</span>{" "}
              <textarea
                placeholder="Tell me about your idea..."
                rows="6"
                required
              />{" "}
            </label>{" "}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {" "}
              <MagneticButton
                as="button"
                icon={Send}
                variant="green"
                type="submit"
              >
                {" "}
                Send Message{" "}
              </MagneticButton>{" "}
              {sent ? (
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-2 border-[var(--border-color)] rounded-lg bg-[var(--card-bg)] text-[var(--fg)] px-3 py-2 font-display text-xs font-bold tracking-wide shadow-brutalSm"
                >
                  {" "}
                  Message sent successfully!{" "}
                </motion.span>
              ) : null}{" "}
            </div>{" "}
          </motion.form>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
