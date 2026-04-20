import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Skills", href: "#skills" },
    // { name: "Achievements", href: "#achievement" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#081221]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="text-xl font-bold tracking-tight text-white sm:text-2xl"
        >
          <span className="text-sky-400">&lt;</span>
          Mohammad<span className="text-slate-400">/</span>Usman
          <span className="text-sky-400">&gt;</span>
        </a>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="group relative text-sm font-medium text-slate-300 transition hover:text-white lg:text-base"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-sky-400/40 hover:text-sky-400"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-sky-400/40 hover:text-sky-400"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-sky-400/40 hover:text-sky-400 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="md:hidden"
          >
            <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-[#0d1b2d]/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, delay: index * 0.04 }}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium text-slate-200 transition hover:bg-white/5 hover:text-sky-400"
                  >
                    <span>{link.name}</span>
                    <span className="text-slate-500">↗</span>
                  </motion.a>
                ))}
              </div>

              <div className="my-3 h-px bg-white/10" />

              <div className="flex items-center justify-between px-2">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Connect
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-sky-400/40 hover:text-sky-400"
                  >
                    <FaGithub size={18} />
                  </a>

                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-sky-400/40 hover:text-sky-400"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}