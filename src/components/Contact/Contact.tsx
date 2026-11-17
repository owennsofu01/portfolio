import { useState } from "react";
import type { ChangeEvent, FocusEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaClock,
  FaMobileAlt,
  FaLaptopCode,
  FaPalette,
  FaEllipsisH,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { PageHero, Section, Reveal, buttonPrimary } from "../ui/Section";

const WHATSAPP = "https://wa.me/260764670944";

const channels = [
  { icon: FaWhatsapp, label: "WhatsApp (fastest)", value: "+260 764 670 944", href: `${WHATSAPP}?text=${encodeURIComponent("Hi Owen, I'd like to talk about a project.")}` },
  { icon: FaEnvelope, label: "Email", value: "owennsofu01@gmail.com", href: "mailto:owennsofu01@gmail.com" },
  { icon: FaPhone, label: "Phone", value: "+260 764 670 944", href: "tel:+260764670944" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Lusaka, Zambia", href: "https://maps.google.com/?q=Lusaka%2C%20Zambia" },
];

const projectTypes: { label: string; icon: IconType }[] = [
  { label: "Mobile app", icon: FaMobileAlt },
  { label: "Website", icon: FaLaptopCode },
  { label: "Design", icon: FaPalette },
  { label: "Something else", icon: FaEllipsisH },
];

const budgets = ["Not sure yet", "Under $500", "$500 – $2,000", "$2,000 – $5,000", "$5,000+"];

type Fields = { username: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const validate = (f: Fields): Errors => {
  const e: Errors = {};
  if (!f.username.trim()) e.username = "Please tell me your name.";
  if (!f.email.trim()) e.email = "I need an email to reply to.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "That email doesn't look right.";
  if (f.message.trim().length < 10) e.message = "A few more words, please (at least 10 characters).";
  return e;
};

const inputBase =
  "w-full rounded-lg border bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition";
const inputClass = (error?: string) =>
  `${inputBase} ${error ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-teal-600"}`;

const FieldError = ({ id, error }: { id: string; error?: string }) => (
  <AnimatePresence>
    {error && (
      <motion.p
        id={id}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600"
      >
        <FaExclamationCircle size={12} aria-hidden="true" /> {error}
      </motion.p>
    )}
  </AnimatePresence>
);

export const Contact = () => {
  const [form, setForm] = useState<Fields>({ username: "", email: "", message: "" });
  const [type, setType] = useState<string>("");
  const [budget, setBudget] = useState(budgets[0]);
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState<string | null>(null);   // name of the sender after success
  const [sendError, setSendError] = useState(false);

  const errors = validate(form);
  const show = (k: keyof Fields) => (touched[k] ? errors[k] : undefined);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.id]: e.target.value });
  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched({ ...touched, [e.target.id]: true });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ username: true, email: true, message: true });
    if (Object.keys(errors).length) {
      const first = (["username", "email", "message"] as const).find((k) => errors[k]);
      if (first) document.getElementById(first)?.focus();
      return;
    }
    setIsLoading(true);
    setSendError(false);
    // Project type and budget go in the message so the existing EmailJS template shows them
    const details = [type && `Project type: ${type}`, `Budget: ${budget}`].filter(Boolean).join("\n");
    emailjs
      .send(
        "service_pdqpfw4",
        "template_svstl97",
        { from_name: form.username, from_email: form.email, message: `${details}\n\n${form.message}` },
        "PGcvCray1jm0A5kix"
      )
      .then(() => {
        setSent(form.username.trim().split(" ")[0]);
        setForm({ username: "", email: "", message: "" });
        setTouched({});
        setType("");
        setBudget(budgets[0]);
      })
      .catch(() => setSendError(true))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's work together"
        description="Tell me about your project, role or idea. I usually reply within 24 hours."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Direct channels */}
          <Reveal>
            <h2 className="text-xl font-semibold text-gray-900">Reach me directly</h2>
            <ul className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-4"
                  >
                    <span className="w-10 h-10 shrink-0 inline-flex items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wider text-gray-500">{label}</span>
                      <span className="block text-gray-900 group-hover:text-teal-700 transition-colors">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <FaClock aria-hidden="true" /> Replies within 24 hours · GMT+2 (CAT)
            </p>
          </Reveal>

          {/* Form / success */}
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-gray-200/80 bg-white/75 backdrop-blur-md p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {sent !== null ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-10 text-center"
                    role="status"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                      className="mx-auto w-16 h-16 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center"
                    >
                      <FaCheckCircle size={30} aria-hidden="true" />
                    </motion.span>
                    <h2 className="mt-6 text-2xl font-bold text-gray-900">
                      Thanks{sent ? `, ${sent}` : ""}! Message sent.
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-sm mx-auto">
                      I&apos;ll reply to your email within 24 hours. Need an answer sooner?
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
                        <FaWhatsapp size={15} aria-hidden="true" /> Chat on WhatsApp
                      </a>
                      <button
                        onClick={() => setSent(null)}
                        className="px-6 py-3 rounded-lg border border-gray-300 text-sm font-semibold text-gray-700 hover:border-gray-400"
                      >
                        Send another message
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} noValidate exit={{ opacity: 0 }} className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900">Send a message</h2>

                    {/* Project type */}
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-700 mb-3">What do you need?</legend>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {projectTypes.map(({ label, icon: Icon }) => {
                          const active = type === label;
                          return (
                            <button
                              key={label}
                              type="button"
                              aria-pressed={active}
                              onClick={() => setType(active ? "" : label)}
                              className={`flex flex-col items-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition-colors ${
                                active
                                  ? "border-teal-600 bg-teal-50 text-teal-800"
                                  : "border-gray-200 bg-white text-gray-600 hover:border-teal-300"
                              }`}
                            >
                              <Icon size={16} aria-hidden="true" />
                              {label}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input id="username" value={form.username} onChange={handleChange} onBlur={handleBlur}
                               autoComplete="name" placeholder="Your name"
                               aria-invalid={!!show("username")} aria-describedby="username-error"
                               className={inputClass(show("username"))} />
                        <FieldError id="username-error" error={show("username")} />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input id="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur}
                               autoComplete="email" placeholder="you@example.com"
                               aria-invalid={!!show("email")} aria-describedby="email-error"
                               className={inputClass(show("email"))} />
                        <FieldError id="email-error" error={show("email")} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget <span className="font-normal text-gray-400">(optional)</span>
                      </label>
                      <select id="budget" value={budget} onChange={(e) => setBudget(e.target.value)}
                              className={`${inputBase} border-gray-300 focus:ring-teal-600 appearance-none`}>
                        {budgets.map((b) => <option key={b}>{b}</option>)}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea id="message" rows={5} value={form.message} onChange={handleChange} onBlur={handleBlur}
                                placeholder="What would you like to build? A short description is enough."
                                aria-invalid={!!show("message")} aria-describedby="message-error"
                                className={`${inputClass(show("message"))} resize-none`} />
                      <FieldError id="message-error" error={show("message")} />
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <button type="submit" disabled={isLoading}
                              className={`${buttonPrimary} disabled:bg-gray-400 disabled:cursor-not-allowed`}>
                        {isLoading ? (
                          <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden="true" />
                        ) : (
                          <FaPaperPlane size={13} aria-hidden="true" />
                        )}
                        {isLoading ? "Sending…" : "Send message"}
                      </button>
                      <span className="text-sm text-gray-500">or <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-700 hover:underline">message me on WhatsApp</a></span>
                    </div>

                    {sendError && (
                      <p role="alert" className="flex items-center gap-2 text-sm font-medium text-red-600">
                        <FaExclamationCircle aria-hidden="true" />
                        Something went wrong sending your message. Please try again, or email me directly.
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
};
