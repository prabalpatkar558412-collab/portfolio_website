import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import hackathon1 from "../assets/hackathon1.jpeg";
import hackathon3 from "../assets/hackathon3.jpeg";
import hackathon4 from "../assets/hackathon4.jpeg";
import hackathon5 from "../assets/hackathon5.jpeg";
import hackathon6 from "../assets/hackathon6.jpeg";
import hackathon7 from "../assets/hackathon7.jpeg";
import hackathon8 from "../assets/hackathin8.jpeg";
import hackathon9 from "../assets/hackathon9.jpeg";

const sectionFade = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

const cardFade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function Achievements() {
  const hackathons = [
    {
      id: "itm-hackathon",
      title: "Syntax Survival Hackathon",
      organization: "ITM University",
      year: "2026",
      highlight: "Grand Finalist",
      badgeStyle:
        "border-yellow-400/20 bg-yellow-500/10 text-yellow-300",
      images: [hackathon1, hackathon4, hackathon3],
      description:
        "Built an IoT-based solution in a competitive environment and reached the final stage through strong teamwork, quick execution, and problem-solving.",
      tags: ["IoT", "Hackathon", "Teamwork"],
      hasDetailsPage: true,
    },
    {
      id: "gas-detection",
      title: "IoT Hackathon",
      organization: "Gyan Ganga College Of Technology",
      year: "2026",
      highlight: "3rd Rank",
      badgeStyle:
        "border-orange-400/20 bg-orange-500/10 text-orange-300",
      images: [hackathon8, hackathon9],
      description:
        "Developed a gas detection system using sensors and IoT concepts to improve safety monitoring, and secured 3rd rank in the competition.",
      tags: ["IoT", "Sensors", "Gas Detection"],
      hasDetailsPage: false,
    },
    {
      id: "wadla-hackathon",
      title: "WADLA Hackathon",
      organization: "IIITM Jabalpur",
      year: "2026",
      highlight: "Participant",
      badgeStyle:
        "border-sky-400/20 bg-sky-500/10 text-sky-300",
      images: [hackathon5, hackathon6, hackathon7],
      description:
        "Participated in a fast-paced hackathon focused on solving real-world problems through collaboration, innovation, and rapid development.",
      tags: ["Innovation", "Collaboration", "Problem Solving"],
      hasDetailsPage: true,
    },
  ];

  return (
    <section
      id="achievement"
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

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 inline-block rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
            Recognition
          </p>
          <h2 className="text-4xl font-extrabold tracking-wide text-white md:text-5xl">
            Achievements
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-sky-400" />
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">
            Highlights from hackathons and competitive events that reflect my
            technical growth, teamwork, and hands-on project experience.
          </p>
        </motion.div>

        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Hackathons
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Competitive events, prototypes, and innovation-driven builds.
              </p>
            </div>
            <div className="hidden rounded-full border border-sky-400/15 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300 sm:block">
              {hackathons.length} Events
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {hackathons.map((item, index) => (
              <motion.article
                key={item.id}
                custom={index}
                variants={cardFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1728]/95 shadow-[0_0_30px_rgba(56,189,248,0.06)] backdrop-blur-md transition"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_40%)]" />

                <div className="relative p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-semibold leading-tight text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm font-medium text-sky-400">
                        {item.organization}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm text-slate-400">
                      {item.year}
                    </span>
                  </div>

                  <span
                    className={`mt-4 inline-flex rounded-full border px-3 py-1 text-xs font-medium ${item.badgeStyle}`}
                  >
                    {item.highlight}
                  </span>

                  <div
                    className={`mt-5 grid gap-2 ${
                      item.images.length === 2 ? "grid-cols-2" : "grid-cols-3"
                    }`}
                  >
                    {item.images.map((img, i) => (
                      <div
                        key={i}
                        className="overflow-hidden rounded-xl border border-white/5"
                      >
                        <img
                          src={img}
                          alt={`${item.title} ${i + 1}`}
                          className="h-24 w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-sky-400/10 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {item.hasDetailsPage && (
                    <div className="mt-6">
                      <Link
                        to={`/achievements/${item.id}`}
                        className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-sky-400"
                      >
                        View Full Details
                      </Link>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}