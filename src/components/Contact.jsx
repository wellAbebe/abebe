import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";

/* ── small inline status banner ─────────────────────────────────────── */
const StatusBanner = ({ status }) => {
  if (!status) return null;
  const isSuccess = status === "success";
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-[14px] font-medium
        ${isSuccess
          ? "bg-[#084e12]/40 border border-[#084e12] text-green-400"
          : "bg-red-900/30 border border-red-700 text-red-400"
        }`}
    >
      {isSuccess ? (
        <>
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor"
            strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Message sent! I'll get back to you as soon as possible.
        </>
      ) : (
        <>
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor"
            strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94
                 a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          </svg>
          Something went wrong. Please try again or email me directly.
        </>
      )}
    </motion.div>
  );
};

/* ── input / textarea shared styles ─────────────────────────────────── */
const fieldClass =
  "bg-tertiary py-4 px-6 placeholder:text-secondary/60 text-white rounded-xl " +
  "outline-none border border-white/5 focus:border-[#215eff]/60 " +
  "transition-colors duration-200 font-medium w-full";

/* ══════════════════════════════════════════════════════════════════════
   Contact
══════════════════════════════════════════════════════════════════════ */
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status) setStatus(null); // clear banner on new input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        "service_dyefsdj",
        "template_48o3625",
        {
          from_name: form.name,
          to_name: "Abebe",
          from_email: form.email,
          to_email: "gabebe096@gmail.com",
          message: form.message,
        },
        "OKPj420vGv6RQGF6Y"
      )
      .then(() => {
        setLoading(false);
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setStatus("error");
      });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">

      {/* ── Form card ── */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-200 p-8 rounded-2xl border border-white/[0.05]"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me.</h3>

        <p className="mt-3 text-secondary text-[15px] leading-[26px]">
          Have a project in mind, a question, or just want to say hello?
          Fill out the form and I'll respond promptly.
        </p>

        {/* Status banner */}
        <div className="mt-6">
          <StatusBanner status={status} />
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-6"
        >
          {/* Name */}
          <label className="flex flex-col gap-2">
            <span className="text-white text-[14px] font-semibold tracking-wide uppercase">
              Full Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className={fieldClass}
            />
          </label>

          {/* Email */}
          <label className="flex flex-col gap-2">
            <span className="text-white text-[14px] font-semibold tracking-wide uppercase">
              Email Address
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className={fieldClass}
            />
          </label>

          {/* Message */}
          <label className="flex flex-col gap-2">
            <span className="text-white text-[14px] font-semibold tracking-wide uppercase">
              Message
            </span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or idea..."
              required
              className={`${fieldClass} resize-none`}
            />
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="self-start inline-flex items-center gap-2 px-8 py-3
                       rounded-xl bg-[#215eff] text-white font-bold text-[15px]
                       shadow-[0_0_20px_#215eff44] hover:bg-[#1a4ecc]
                       hover:shadow-[0_0_28px_#215eff66]
                       disabled:opacity-60 disabled:cursor-not-allowed
                       transition-all duration-200"
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10"
                    stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                </svg>
                Sending…
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor"
                  strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* ── Earth canvas ── */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-200 rounded-2xl border border-white/[0.05]
                   min-h-[350px] xl:min-h-0"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");