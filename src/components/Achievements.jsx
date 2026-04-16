import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import hackathon1 from "../assets/hackathon1.jpeg";
import hackathon3 from "../assets/hackathon3.jpeg";
import hackathon4 from "../assets/hackathon4.jpeg";
import hackathon5 from "../assets/hackathon5.jpeg";
import hackathon6 from "../assets/hackathon6.jpeg";
import hackathon7 from "../assets/hackathon7.jpeg";
import hackathon8 from "../assets/hackathon8.jpeg"; // ✅ FIXED
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

      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-10">
          Achievements
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {hackathons.map((item, index) => (
            <motion.article
              key={item.id}
              custom={index}
              variants={cardFade}
              initial="hidden"
              whileInView="visible"
              className="rounded-3xl bg-[#0b1728] p-6"
            >
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-sky-400">{item.organization}</p>

              <div className="grid grid-cols-2 gap-2 mt-4">
                {item.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="hackathon"
                    className="h-24 w-full object-cover rounded"
                  />
                ))}
              </div>

              <p className="mt-4 text-sm text-slate-400">
                {item.description}
              </p>

              {item.hasDetailsPage && (
                <Link
                  to={`/achievements/${item.id}`}
                  className="inline-block mt-4 text-sky-400"
                >
                  View Details →
                </Link>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}