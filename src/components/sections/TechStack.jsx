import {
  SiJavascript,
  SiPython,
  SiReact,
  SiSupabase,
} from "react-icons/si";

import { Braces, ServerCog } from "lucide-react";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import ScrollReveal from "../animations/ScrollReveal";

const items = [
  { label: "React", Icon: SiReact },
  { label: "JavaScript", Icon: SiJavascript },
  { label: "Python", Icon: SiPython },
  { label: "FastAPI", Icon: ServerCog },
  { label: "Supabase", Icon: SiSupabase },
  { label: "Java", Icon: Braces },
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 py-16 sm:py-20">
      <RadialGradientBackground className="opacity-25" />

    
      <div
        className="pointer-events-none absolute"
        style={{
          width: 560,
          height: 560,
          right: -280,
          top: -280,
          borderRadius: "50%",
          border: "110px solid rgba(74, 16, 36, 0.01)",
          background: "transparent",
          opacity: 0.5,
        }}
      />

      <div className="relative  z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Stack tecnológico
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            Principales tecnologías que utilizo en el desarrollo de mis proyectos.
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          delayMs={80}
        >
          {items.map(({ label, Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-surface/80 px-4 py-6 text-center transition hover:scale-[1.02] hover:border-accent/30 hover:shadow-glow"
            >
              <Icon className="h-10 w-10 text-accent-muted " aria-hidden />
              <p className="mt-3 text-xs font-medium text-white sm:text-sm">
                {label}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}