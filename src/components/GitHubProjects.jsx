import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitFork, Github, Loader2, Star } from "lucide-react";
import { fallbackProjects, profile } from "../data/profile.js";
import SectionTitle from "./SectionTitle.jsx";
function repoTags(repo) {
  if (repo.tags?.length) return repo.tags;
  return [repo.language, ...(repo.topics || [])].filter(Boolean).slice(0, 3);
}
function normalizeRepo(repo) {
  return {
    name: repo.name?.replaceAll("-", "") || "Untitled Project",
    description:
      repo.description ||
      "Project by Sidni Ilma. Detail repo bisa dilihat langsung di GitHub.",
    tags: repoTags(repo),
    html_url: repo.html_url || profile.github,
    stargazers_count: repo.stargazers_count || 0,
    forks_count: repo.forks_count || 0,
    language: repo.language,
    updated_at: repo.updated_at,
  };
}
export default function GitHubProjects() {
  const [repos, setRepos] = useState(fallbackProjects);
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("loading");
  useEffect(() => {
    let active = true;
    async function loadRepos() {
      try {
        const [repoResponse, userResponse] = await Promise.all([
          fetch(
            `https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=9`,
          ),
          fetch(`https://api.github.com/users/${profile.githubUser}`),
        ]);
        if (!repoResponse.ok) throw new Error("GitHub repo request failed");
        const repoData = await repoResponse.json();
        const userData = userResponse.ok ? await userResponse.json() : null;
        const publicRepos = repoData
          .filter((repo) => !repo.fork)
          .map(normalizeRepo);
        if (active) {
          setRepos(publicRepos.length ? publicRepos : fallbackProjects);
          setUser(userData);
          setStatus("live");
        }
      } catch (error) {
        if (active) {
          setRepos(fallbackProjects);
          setStatus("fallback");
        }
      }
    }
    loadRepos();
    return () => {
      active = false;
    };
  }, []);
  const stats = useMemo(() => {
    const stars = repos.reduce(
      (total, repo) => total + (repo.stargazers_count || 0),
      0,
    );
    const forks = repos.reduce(
      (total, repo) => total + (repo.forks_count || 0),
      0,
    );
    const languages = [
      ...new Set(repos.map((repo) => repo.language).filter(Boolean)),
    ];
    return [
      { label: "Public Repos", value: user?.public_repos || repos.length },
      { label: "Stars", value: stars },
      { label: "Forks", value: forks },
      { label: "Languages", value: languages.length || "Mix" },
    ];
  }, [repos, user]);
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-24 md:px-8"
    >
      {" "}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,44,191,0.14),transparent_32%),radial-gradient(circle_at_88%_16%,rgba(234,255,0,0.18),transparent_28%)]" />{" "}
      <div className="relative z-10 mx-auto max-w-7xl">
        {" "}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {" "}
          <SectionTitle
            eyebrow="GitHub Projects"
            title="Repos, experiments, and build receipts."
          />{" "}
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5, rotate: 1 }}
            className="inline-flex items-center gap-2 self-start border-2 border-[var(--border-color)] rounded-xl bg-magenta text-white px-5 py-3 font-display text-sm font-bold tracking-wide shadow-brutalSm"
          >
            {" "}
            <Github className="h-5 w-5" strokeWidth={3} /> Visit GitHub{" "}
            <ExternalLink className="h-4 w-4" strokeWidth={3} />{" "}
          </motion.a>{" "}
        </div>{" "}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {" "}
          <span className="inline-flex items-center gap-2 border-2 border-[var(--border-color)] rounded-lg bg-[var(--card-bg)] text-[var(--fg)] px-3 py-2 font-display text-xs font-bold tracking-wide shadow-brutalSm">
            {" "}
            {status === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin" strokeWidth={3} />
            ) : (
              <Github className="h-4 w-4" strokeWidth={3} />
            )}{" "}
            {status === "live"
              ? "Live from GitHub API"
              : status === "fallback"
                ? "Fallback Project Cards"
                : "Loading GitHub"}{" "}
          </span>{" "}
          <span className="border-2 border-[var(--border-color)] rounded-lg bg-acid text-black px-3 py-2 font-display text-xs font-bold tracking-wide shadow-brutalSm">
            {" "}
            @{profile.githubUser}{" "}
          </span>{" "}
        </div>{" "}
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {" "}
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] p-5 shadow-brutalSm"
            >
              {" "}
              <p className="font-display text-4xl font-bold">
                {stat.value}
              </p>{" "}
              <p className="font-display text-xs font-bold uppercase tracking-widest opacity-80">
                {stat.label}
              </p>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {" "}
          {repos.map((repo, index) => (
            <motion.article
              key={`${repo.name}-${index}`}
              initial={{ opacity: 0, y: 36, rotate: index % 2 ? 1.5 : -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                y: -10,
                rotate: index % 2 ? -1 : 1,
                boxShadow: "14px 14px 0 var(--color-magenta)",
              }}
              className="flex min-h-[320px] flex-col border-2 border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--fg)] p-5 shadow-brutalSm"
            >
              {" "}
              <div className="mb-5 flex items-start justify-between gap-4">
                {" "}
                <h3 className="font-display text-3xl font-bold tracking-wide leading-none">
                  {repo.name}
                </h3>{" "}
                <Github className="h-8 w-8 shrink-0" strokeWidth={3} />{" "}
              </div>{" "}
              <p className="font-bold leading-relaxed">{repo.description}</p>{" "}
              <div className="mt-5 flex flex-wrap gap-2">
                {" "}
                {repoTags(repo).map((tag) => (
                  <span
                    key={tag}
                    className="border-2 border-[var(--border-color)] rounded-lg bg-[var(--bg)] text-[var(--fg)] px-2 py-1 font-display text-xs font-bold tracking-wide"
                  >
                    {" "}
                    {tag}{" "}
                  </span>
                ))}{" "}
              </div>{" "}
              <div className="mt-auto flex items-center justify-between pt-6">
                {" "}
                <div className="flex gap-3 font-display text-xs font-bold tracking-wide">
                  {" "}
                  <span className="inline-flex items-center gap-1">
                    {" "}
                    <Star className="h-4 w-4" strokeWidth={3} />{" "}
                    {repo.stargazers_count || 0}{" "}
                  </span>{" "}
                  <span className="inline-flex items-center gap-1">
                    {" "}
                    <GitFork className="h-4 w-4" strokeWidth={3} />{" "}
                    {repo.forks_count || 0}{" "}
                  </span>{" "}
                </div>{" "}
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[var(--border-color)] rounded-lg bg-[var(--fg)] text-[var(--bg)] px-3 py-2 font-display text-xs font-bold tracking-wide transition hover:scale-105"
                >
                  {" "}
                  View Repo{" "}
                  <ExternalLink className="h-3.5 w-3.5" strokeWidth={3} />{" "}
                </a>{" "}
              </div>{" "}
            </motion.article>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
