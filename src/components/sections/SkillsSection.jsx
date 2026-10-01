import {
  Braces,
  Code2,
  GitBranch,
  Link2,
  Monitor,
  ServerCog,
  Sparkles,
  Zap,
  Cloud,
  Database,
  Terminal,
} from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const skillGroups = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "JavaScript", icon: Braces },
      { name: "HTML", icon: Code2 },
      { name: "CSS", icon: Code2 },
      { name: "Tailwind CSS", icon: Zap },
      { name: "Vite", icon: Zap },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    skills: [
      { name: "Python", icon: ServerCog },
      { name: "FastAPI", icon: Zap },
      { name: "Java", icon: Code2 },
      { name: "REST APIs", icon: Link2 },
    ],
  },
  {
    id: "database",
    title: "Bases de datos & Cloud",
    skills: [
      { name: "Supabase", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "Oracle", icon: Database },
      { name: "Firebase", icon: Cloud },
      { name: "Google Cloud", icon: Cloud },
    ],
  },
  {
    id: "tools",
    title: "Herramientas",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "VS Code", icon: Terminal },
      { name: "Grafana", icon: Monitor },
      { name: "Android Studio", icon: Code2 },
    ],
  },
];

function SkillRow({ skill }) {
  const { icon: Icon, name } = skill;

  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:border-accent/40 hover:bg-accent/10">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>

      <p className="text-sm font-semibold text-white">
        {name}
      </p>
    </div>
  );
}

function SkillCard({ group, delayMs }) {
  return (
    <ScrollReveal delayMs={delayMs}>
      <div
        className=" rounded-2xl p-6 transition-all duration-300"
        style={{
          background: "rgba(20, 83, 45, 0.15)",
          border: "1px solid rgba(74,222,128,0.12)",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "rgba(20, 83, 45, 0.18)";
          e.currentTarget.style.borderColor = "rgba(74,222,128,0.19)";
        }}
       onMouseLeave={e => {
          e.currentTarget.style.background = "rgba(20, 83, 45, 0.15)";
          e.currentTarget.style.borderColor = "rgba(74,222,128,0.12)";
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span
            className="h-6 w-[3px] rounded-full shrink-0"
            style={{ background: "linear-gradient(to bottom, #4ade80, #16a34a)" }}
          />
          <h3 className="text-lg font-bold text-white">{group.title}</h3>
        </div>

        <div className="mb-5 h-px w-full bg-white/5" />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {group.skills.map((skill) => (
            <SkillRow key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-white/5 bg-black py-20 sm:py-28"
    >
      <RadialGradientBackground position="left" className="opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Tecnologías
            </div>
            <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl lg:text-[56px]">
              Skills &amp; Tecnologías
            </h2>
            <p className="mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
              Tecnologías y herramientas que he utilizado durante mi formación, experiencia y proyectos personales.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, idx) => (
            <SkillCard key={group.id} group={group} delayMs={idx * 100} />
          ))}
        </div>

      </div>
    </section>
  );
}