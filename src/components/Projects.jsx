import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import resume from "../assets/resume.png"
import agency from "../assets/agency.png"
import weather from "../assets/weather.png"

export const allProjectsData = [
  {
    title: "Integrated E-Waste Circular Economy Marketplace",
    category: "Sustainability Platform",
    image: project1,
    description:
      "An AI-assisted platform to classify devices into repair, resale, or recycle with role-based workflows.",
    tech: ["React.js", "Tailwind CSS", "Firebase", "Firestore"],
    live: "https://frontend-chi-gules-46.vercel.app/",
    code: "https://github.com/prabalpatkar558412-collab/ReVastra",
  },
  {
    title: "Digital Agency Website",
    category: "Business Website",
    image: agency,
    description:
      "Modern responsive website with reusable UI components and smooth animations.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    live: "https://digital-marketing-website-7239.vercel.app/",
    code: "https://github.com/prabalpatkar558412-collab/Digital_Marketing_Website",
  },
  {
    title: "Multipage Grocery Website",
    category: "E-Commerce UI",
    image: project2,
    description:
      "React-based multipage app with routing, reusable components and responsive design.",
    tech: ["React.js", "React Router", "JavaScript", "CSS"],
    live: "https://grocery-website-eta-coral.vercel.app/",
    code: "https://github.com/prabalpatkar558412-collab/Grocery-Website",
  },
  {
    title: "Portfolio Website",
    category: "Personal Portfolio",
    image: resume,
    description:
      "A modern portfolio website with responsive design, animations, and professional section layouts.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    live: "#",
    code: "#",
  },
    {
    title: "Weather App",
    category: "API INTEGRATED PROJECT",
    image: weather,
    description:
      "A modern portfolio website with responsive design, animations, and professional section layouts.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    live: "https://weather-app-taupe-seven.vercel.app/",
    code: "https://github.com/prabalpatkar558412-collab/Weather-App",
  },
];

export default function Projects() {
  const featuredProjects = allProjectsData.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#06111f] px-6 py-20 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.06),transparent_26%)]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-sky-400">
            Portfolio Highlights
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">Featured Projects</h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-sky-400" />
          <p className="mx-auto mt-5 max-w-3xl text-slate-400">
            Projects that showcase real-world problem solving and modern UI development.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1728] shadow-[0_0_30px_rgba(0,0,0,0.4)] transition"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_40%)] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100" />
                <div className="absolute left-4 top-4 rounded-full bg-[#081221]/90 px-3 py-1 text-xs text-sky-300 backdrop-blur">
                  {project.category}
                </div>
              </div>

              <div className="relative p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-slate-400">
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

        <div className="mt-12 text-center">
          <Link
            to="/all-projects"
            className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-6 py-3 text-sm font-semibold text-sky-300 transition hover:border-sky-400 hover:bg-sky-500 hover:text-white"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  );
}