import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import profileimage from "../assets/profile.jpeg";
import cv from "../assets/cv.pdf"

const roles = [
  "I am Developer",
  "I am Frontend Developer",
  "I build modern UI",
];

function TypingText() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text.length < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length + 1));
      }, 100);
    } else if (!isDeleting && text.length === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length - 1));
      }, 50);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="mt-3 h-8 sm:h-10">
      <p className="text-lg font-medium text-slate-300 sm:text-xl md:text-2xl">
        <span className="text-sky-400">{text}</span>
        <span className="ml-1 inline-block animate-pulse text-sky-300">|</span>
      </p>
    </div>
  );
}

function CountUp({ end, suffix = "", duration = 1800 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const stepTime = 20;
    const totalSteps = Math.floor(duration / stepTime);
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function StatCard({ value, suffix, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
    >
      <p className="text-2xl font-bold text-white sm:text-3xl">
        <CountUp end={value} suffix={suffix} />
      </p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </motion.div>
  );
}

export default function Hero() {
  const [clicked, setClicked] = useState(false);

  const handleImageClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
  };

  return (
    <section className="relative overflow-hidden bg-[#06111f] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.10),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:36px_36px]" />

      {/* Animated blur lights */}
      <motion.div
        className="absolute left-0 top-10 h-32 w-32 rounded-full bg-sky-500/20 blur-3xl sm:h-40 sm:w-40"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl sm:h-40 sm:w-40"
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 md:min-h-screen md:grid-cols-2 md:gap-10 lg:px-12">
        {/* Left Content */}
        <motion.div
          className="order-2 text-center md:order-1 md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <motion.p
            className="inline-block rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-sky-300 sm:text-xs"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Prabal Patkar
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <TypingText />
          </motion.div>

          <motion.p
            className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base md:mx-0 md:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            I build responsive, scalable, and user-friendly web applications
            with modern UI, clean code, and smooth digital experiences.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            <motion.a
              href={cv}
              download="Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 sm:w-auto"
            >
              Download CV
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400 sm:w-auto"
            >
              View Projects
            </motion.a>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-4 text-center sm:grid-cols-3 sm:gap-6 md:text-left">
            <StatCard value={1} suffix="+" label="Years Experience" delay={0.1} />
            <StatCard value={5} suffix="+" label="Projects Built" delay={0.2} />
            <StatCard value={100} suffix="%" label="Responsive Design" delay={0.3} />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="order-1 flex justify-center md:order-2 md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full bg-sky-500/20 blur-3xl"
              animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="relative flex h-52 w-52 items-center justify-center rounded-full border border-sky-400/30 bg-slate-900/80 shadow-2xl shadow-sky-900/20 backdrop-blur-sm sm:h-60 sm:w-60 md:h-80 md:w-80 lg:h-[380px] lg:w-[380px]"
              animate={{ y: [0, -10, 0], rotate: [0, 1, 0, -1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.03 }}
            >
              <div
                onClick={handleImageClick}
                className="relative flex h-[92%] w-[92%] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-slate-700 bg-slate-800"
              >
                {clicked && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-sky-400/20" />
                )}

                <motion.img
                  src={profileimage}
                  alt="Prabal Patkar"
                  className="h-full w-full rounded-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute left-2 top-4 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md sm:-left-6 sm:top-8 sm:rounded-2xl sm:px-4 sm:py-3"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-[10px] uppercase tracking-widest text-sky-300 sm:text-xs">
                Expertise
              </p>
              <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                React • Tailwind
              </p>
            </motion.div>

            <motion.div
              className="absolute bottom-4 right-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md sm:-right-6 sm:bottom-10 sm:rounded-2xl sm:px-4 sm:py-3"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-[10px] uppercase tracking-widest text-sky-300 sm:text-xs">
                Focus
              </p>
              <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                UI / UX
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}