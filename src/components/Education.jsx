import { motion } from "framer-motion";
import { GraduationCap, School, CalendarDays, Award } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "Gyan Ganga College of Technology, Jabalpur",
    duration: "2024 - 2028 (Expected)",
    grade: "",
    status: "Currently Pursuing",
    description:
      "Pursuing a Bachelor's degree in Computer Engineering with a strong focus on software development, frontend engineering, web technologies, and problem solving.",
    highlights: [
      "Computer Engineering",
      "Web Development",
      "Problem Solving",
    ],
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Anamika Convent Higher Secondary School",
    duration: "2022 - 2023",
    grade: "86.4%",
    status: "Completed",
    description:
      "Completed higher secondary education in the science stream with strong academic performance and a solid foundation in mathematics, logical thinking, and computer science.",
    highlights: ["Science Stream", "86.4%", "Strong Foundation"],
    icon: School,
  },
];

function EducationCard({ edu, index }) {
  const Icon = edu.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl border border-white/10 bg-[#0b1728]/95 p-6 shadow-[0_0_28px_rgba(56,189,248,0.06)] backdrop-blur-md transition"
    >
      <div className="absolute inset-0 rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_42%)]" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/15 bg-sky-500/10 text-sky-400">
              <Icon size={22} />
            </div>

            <div>
              <div className="mb-2 inline-flex rounded-full border border-sky-400/15 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                {edu.status}
              </div>

              <h3 className="text-xl font-semibold leading-tight text-white sm:text-2xl">
                {edu.degree}
              </h3>

              <p className="mt-2 text-sm font-medium text-sky-400 sm:text-base">
                {edu.institution}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
            <CalendarDays size={15} className="text-sky-400" />
            <span>{edu.duration}</span>
          </div>

          {edu.grade && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <Award size={15} className="text-sky-400" />
              <span>Grade: {edu.grade}</span>
            </div>
          )}
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-[15px]">
          {edu.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {edu.highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-sky-400/10 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#06111f] px-5 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:42px_42px]" />

      <motion.div
        className="absolute left-0 top-12 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl"
        animate={{ x: [0, 18, 0], y: [0, -14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-8 right-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, 16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 inline-block rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
            Academic Background
          </p>

          <h2 className="text-4xl font-extrabold tracking-wide text-white md:text-5xl">
            Education
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-sky-400" />

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">
            My academic journey reflects consistent learning, strong technical
            foundations, and a growing focus on modern software and web
            development.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {educationData.map((edu, index) => (
            <EducationCard key={edu.degree} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}