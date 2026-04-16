import { useParams, Link } from "react-router-dom";
import hackathon1 from "../assets/hackathon1.jpeg";
import hackathon2 from "../assets/hackathon2.jpeg";
import hackathon3 from "../assets/hackathon3.jpeg";
import hackathon4 from "../assets/hackathon4.jpeg";
import hackathon5 from "../assets/hackathon5.jpeg";
import hackathon6 from "../assets/hackathon6.jpeg";
import hackathon7 from "../assets/hackathon7.jpeg";

export default function HackathonDetails() {
  const { id } = useParams();

  const detailsData = {
    "itm-hackathon": {
      title: "Syntax Survival Hackathon",
      organization: "ITM University, Gwalior",
      year: "2026",
      result: "Grand Finalist",
      heroImage: hackathon1,
      gallery: [hackathon1, hackathon2, hackathon4],
      overview:
        "This hackathon focused on solving real-world challenges using IoT-based systems. Our team worked on building a practical and scalable prototype within the given time limit.",
      role: [
        "Contributed to frontend structure and user flow planning",
        "Collaborated with team members on idea refinement",
        "Helped in prototype implementation and final presentation",
      ],
      technologies: ["React", "IoT Concepts", "Firebase", "Team Collaboration"],
      learnings: [
        "Learned rapid prototyping under time pressure",
        "Improved teamwork and communication skills",
        "Understood how to present technical ideas effectively",
      ],
    },
    "wadla-hackathon": {
      title: "WADLA Hackathon",
      organization: "WADLA Event",
      year: "2026",
      result: "Active Participant",
      heroImage: hackathon5,
      gallery: [hackathon5, hackathon6, hackathon7],
      overview:
        "Participated in the WADLA Hackathon where the focus was on solving impactful problems through practical product thinking and fast execution.",
      role: [
        "Worked on idea validation and product structure",
        "Helped in designing usable flows for the solution",
        "Contributed during team discussions and implementation",
      ],
      technologies: ["React", "UI/UX", "Problem Solving", "Collaboration"],
      learnings: [
        "Improved product thinking and execution speed",
        "Learned how to work effectively in limited time",
        "Gained confidence in teamwork and public presentation",
      ],
    },
  };

  const hackathon = detailsData[id];

  if (!hackathon) {
    return (
      <section className="min-h-screen bg-[#06111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">Details not found</h2>
          <Link
            to="/"
            className="mt-6 inline-block rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-white"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#06111f] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="mb-8 inline-block rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-400 hover:text-sky-400"
        >
          ← Back to Portfolio
        </Link>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1728] shadow-[0_0_25px_rgba(56,189,248,0.08)]">
          <img
            src={hackathon.heroImage}
            alt={hackathon.title}
            className="h-72 w-full object-cover"
          />

          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold">{hackathon.title}</h1>
                <p className="mt-2 text-sky-400">{hackathon.organization}</p>
              </div>
              <div className="text-sm text-slate-400">
                {hackathon.year} • {hackathon.result}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="mt-3 leading-7 text-slate-400">
                {hackathon.overview}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold">My Contribution</h2>
              <ul className="mt-3 space-y-2 text-slate-400">
                {hackathon.role.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold">Technologies & Skills</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {hackathon.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-sky-500/10 px-3 py-1 text-sm text-sky-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold">Key Learnings</h2>
              <ul className="mt-3 space-y-2 text-slate-400">
                {hackathon.learnings.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold">Gallery</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {hackathon.gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Hackathon gallery"
                    className="h-40 w-full rounded-xl object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}