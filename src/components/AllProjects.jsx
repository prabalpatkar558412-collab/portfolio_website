import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { allProjectsData } from "./Projects";

export default function AllProjects() {
  return (
    <section className="min-h-screen bg-[#06111f] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-sky-400">
              Portfolio Archive
            </p>
            <h1 className="text-4xl font-bold md:text-5xl">All Projects</h1>
            <p className="mt-4 max-w-2xl text-slate-400">
              A complete collection of my work, including featured builds, UI projects, and development experiments.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {allProjectsData.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b1728] shadow-[0_0_30px_rgba(0,0,0,0.4)] transition"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#081221]/90 px-3 py-1 text-xs text-sky-300 backdrop-blur">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:scale-105 hover:bg-sky-400"
                  >
                    Live
                    <FaArrowUpRightFromSquare size={12} />
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200 transition hover:scale-105 hover:border-sky-400 hover:text-sky-400"
                  >
                    Code
                    <FaGithub size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}