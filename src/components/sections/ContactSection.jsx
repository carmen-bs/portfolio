import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState, useRef } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import ScrollReveal from "../animations/ScrollReveal";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const NAME_MAX = 20;
const EMAIL_MAX = 30;
const MESSAGE_MAX = 250;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const socials = [
  { Icon: SiGithub, href: "https://github.com/carmen-bs", label: "GitHub" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/carmen-baeza-sirvent-9a82411b2/", label: "LinkedIn" },
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const timerRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    const limits = { name: NAME_MAX, email: EMAIL_MAX, message: MESSAGE_MAX };
    if (value.length > limits[name]) return;
    setFields(prev => ({ ...prev, [name]: value }));
  }

  const isFormFilled =
    fields.name.trim().length > 0 &&
    fields.email.trim().length > 0 &&
    fields.message.trim().length > 0;

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const { name, email, message } = fields;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError("Por favor, introduce una dirección de email válida.");
      return;
    }

    setSent(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSent(false);
      setFields({ name: "", email: "", message: "" });
    }, 4000);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-24">
      <RadialGradientBackground position="center" className="opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-accent/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <MessageCircle className="h-3.5 w-3.5" />
            Contacto
          </div>
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            ¿Hablamos?
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            Si quieres contactar conmigo por una oportunidad profesional o conocer más sobre mi trabajo, puedes escribirme.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">

         
          <ScrollReveal
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/90 p-6 sm:p-8"
            delayMs={80}
          >
      
            <div
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                background:
                  "radial-gradient(ellipse at top right, rgba(190,18,60,0.18) 0%, rgba(190,18,60,0.06) 35%, transparent 70%)",
              }}
              aria-hidden
            />

            <form id="contact-form" onSubmit={handleSubmit} noValidate className="relative z-10">
              <div className="space-y-5">
               
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium uppercase tracking-wide text-zinc-500"
                    >
                      Nombre
                    </label>
                    <span className="text-xs text-zinc-600">
                      {fields.name.length}/{NAME_MAX}
                    </span>
                  </div>
                  <input
                    id="name"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    maxLength={NAME_MAX}
                    placeholder="Tu nombre"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none ring-accent/0 transition placeholder:text-zinc-600 focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium uppercase tracking-wide text-zinc-500"
                    >
                      Email
                    </label>
                    <span className="text-xs text-zinc-600">
                      {fields.email.length}/{EMAIL_MAX}
                    </span>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={fields.email}
                    onChange={handleChange}
                    maxLength={EMAIL_MAX}
                    placeholder="tu.email@ejemplo.com"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>

          
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="text-xs font-medium uppercase tracking-wide text-zinc-500"
                    >
                      mensaje
                    </label>
                    <span className="text-xs text-zinc-600">
                      {fields.message.length}/{MESSAGE_MAX}
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    maxLength={MESSAGE_MAX}
                    rows={5}
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!isFormFilled}
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-muted via-emerald-70 to-accent px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Enviar mensaje
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              {sent && (
                <p className="mt-4 rounded-xl border border-accent/40 bg-accent/5 px-4 py-3 text-center text-sm text-accent">
                  ¡Mensaje enviado con éxito! Te contactaré pronto.
                </p>
              )}
              {error && !sent && (
                <p className="mt-4 rounded-xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-center text-sm text-rose-200">
                  {error}
                </p>
              )}
            </form>
          </ScrollReveal>

        
          <ScrollReveal delayMs={140}>
            <h3 className="text-2xl font-bold text-white">Contactemos</h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Estoy abierta a nuevas oportunidades profesionales y a seguir creciendo como desarrolladora.
              Si quieres conocer más sobre mi perfil o mi trabajo, no dudes en contactar conmigo.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/80 px-4 py-4 hover:border-accent/50 transition cursor-pointer">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Email</p>
                  <p className="text-sm font-medium text-white">carmenbs027@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/80 px-4 py-4 hover:border-accent/50 transition cursor-pointer">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Ubicación</p>
                  <p className="text-sm font-medium text-white">España</p>
                </div>
              </div>
            </div>

            <p className="mt-10 text-xs font-medium uppercase tracking-wide text-zinc-500">
              Contactame
            </p>
            <div className="mt-3 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}     
                  aria-label={label}
                  target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-surface text-zinc-200 transition hover:scale-[1.04] hover:border-accent/50 hover:text-accent"
                >
              <Icon className="h-5 w-5" />
            </a>
              ))}
        </div>
      </ScrollReveal>

    </div>
      </div >
    </section >
  );
}