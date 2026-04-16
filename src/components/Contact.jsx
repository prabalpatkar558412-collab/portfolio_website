import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e2nibaf",   // 🔥 replace
        "template_2in816w",  // 🔥 replace
        form.current,
        "CFH14g9rqOKIRJHAv"    // 🔥 replace
      )
      .then(
        () => {
          alert("Message Sent Successfully 🚀");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full rounded-2xl border border-slate-700 bg-[#101b2d] px-4 py-3 text-sm text-slate-200"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full rounded-2xl border border-slate-700 bg-[#101b2d] px-4 py-3 text-sm text-slate-200"
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="w-full rounded-2xl border border-slate-700 bg-[#101b2d] px-4 py-3 text-sm text-slate-200"
      />

      <textarea
        name="message"
        rows="6"
        placeholder="Your Message"
        required
        className="w-full rounded-2xl border border-slate-700 bg-[#101b2d] px-4 py-3 text-sm text-slate-200"
      ></textarea>

      <button
        type="submit"
        className="w-full rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-400"
      >
        Send Message
      </button>
    </form>
  );
}