import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function StatusModal({ open, type, message, onClose }) {
  if (!open) return null;

  const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b1220] p-6 shadow-2xl">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${
              isSuccess
                ? "bg-emerald-500/15 text-emerald-400"
                : "bg-red-500/15 text-red-400"
            }`}
          >
            {isSuccess ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">
              {isSuccess ? "Message Sent" : "Message Not Sent"}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {message}
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const form = useRef(null);

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    open: false,
    type: "",
    message: "",
  });

  const closeModal = () => {
    setModal({ open: false, type: "", message: "" });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_e2nibaf",
        "template_2in816w",
        form.current,
        "CFH14g9rqOKIRJHAv"
      );

      setModal({
        open: true,
        type: "success",
        message:
          "Your message has been delivered successfully. Thank you for reaching out — I’ll get back to you as soon as possible.",
      });

      form.current.reset();
    } catch (error) {
      setModal({
        open: true,
        type: "error",
        message:
          "We couldn’t send your message at the moment. Please try again in a few minutes or contact us through an alternative method.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.08),transparent_25%),#020617]" />

        <div className="mx-auto max-w-5xl">
          <div className="grid overflow-hidden rounded-3xl border border-slate-800/80 bg-white/5 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl md:grid-cols-[1fr,1.2fr]">
            {/* Left Info Panel */}
            <div className="border-b border-slate-800/80 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:border-b-0 md:border-r">
              <span className="inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium tracking-wide text-sky-300">
                LET’S CONNECT
              </span>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let’s build something remarkable together
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                Whether you have a project idea, a business proposal, or simply
                want to start a conversation, I’m always open to meaningful and
                professional collaboration.
              </p>

              <div className="mt-10 space-y-5">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Response Time
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-200">
                    Usually within 24 hours
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Best For
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-200">
                    Freelance work, collaborations, consulting, and inquiries
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-[#0b1120]/95 p-8 sm:p-10">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project discussion"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    required
                    placeholder="Tell me a little about your project or inquiry..."
                    className="w-full resize-none rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                  />
                </div>

                <div className="flex flex-col items-start justify-between gap-4 border-t border-slate-800 pt-4 sm:flex-row sm:items-center">
                  <p className="text-xs leading-6 text-slate-500">
                    By submitting this form, you agree to be contacted regarding
                    your inquiry.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex min-w-[160px] items-center justify-center rounded-2xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Sending Message..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <StatusModal
        open={modal.open}
        type={modal.type}
        message={modal.message}
        onClose={closeModal}
      />
    </>
  );
}