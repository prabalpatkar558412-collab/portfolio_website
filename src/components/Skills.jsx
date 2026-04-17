import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiFirebase,
  
  SiC,
  SiCplusplus,
  SiJavascript,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { motion } from "framer-motion";

const frontendSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-violet-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Material UI", icon: <SiMui className="text-blue-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-violet-500" /> },
];

const backendSkills = [
  
  { name: "Node JS", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
];

const languageSkills = [
  { name: "C", icon: <SiC className="text-blue-300" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
];

const toolSkills = [
  { name: "VS Code", icon: <TbBrandVscode className="text-sky-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "Netlify", icon: <SiNetlify className="text-cyan-400" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.35,
    },
  }),
};

function SkillPill({ icon, name, index }) {
  return (
    <motion.div
      custom={index}
      variants={pillVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -4, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group flex items-center gap-3 rounded-2xl border border-slate-700/80 bg-[#101b2d]/80 px-4 py-3 text-slate-200 backdrop-blur-sm transition duration-300 hover:border-sky-400/60 hover:bg-[#132238] hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]"
    >
      <span className="text-2xl transition duration-300 group-hover:scale-110">
        {icon}
      </span>
      <span className="text-sm font-medium sm:text-base">{name}</span>
    </motion.div>
  );
}

function SkillCard({ title, skills, delay = 0 }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1728]/95 p-6 shadow-[0_0_30px_rgba(14,165,233,0.08)] backdrop-blur-md"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_45%)]" />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            {title}
          </h3>
          <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300">
            {skills.length} Skills
          </span>
        </div>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <SkillPill
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#06111f] px-5 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:42px_42px]" />

      <motion.div
        className="absolute left-0 top-16 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 inline-block rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
            My Expertise
          </p>

          <h2 className="text-4xl font-extrabold tracking-wide text-white md:text-5xl">
            Skills & Tools
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-sky-400" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
            A strong set of frontend, backend, programming, and development
            tools that help me build modern, responsive, and scalable
            applications with clean user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <SkillCard title="Frontend" skills={frontendSkills} delay={0.1} />
          <SkillCard title="Backend" skills={backendSkills} delay={0.2} />
          <SkillCard title="Languages" skills={languageSkills} delay={0.3} />
          <SkillCard title="Tools" skills={toolSkills} delay={0.4} />
        </div>
      </div>
    </section>
  );
}