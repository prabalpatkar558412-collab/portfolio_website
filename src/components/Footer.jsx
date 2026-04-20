import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/10 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Logo / Name */}
          <h2 className="text-lg font-semibold text-white">
            <span className="text-sky-400">&lt;</span>
            Mohammad<span className="text-slate-400">/</span>Usman
            <span className="text-sky-400">&gt;</span>
          </h2>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="mailto:yourmail@example.com"
              className="transition hover:text-sky-400"
            >
              <FaEnvelope size={18} />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-sky-400"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-sky-400"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Prabal Patkar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}