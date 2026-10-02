import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Globe,
  Layers,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Movilidad Urbana",
    subtitle: "APLICACIÓN FULL STACK",
    displayCategory: "Full Stack",
    description:
      "Aplicación web para generar itinerarios urbanos personalizados y visualizar datos de aforo por zonas. Integra rutas, horarios, mapas interactivos, autenticación y gestión de datos.",
    image: "/images/projects/movilidad-urbana.png",
    category: "Full Stack",
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "Supabase",
      "Firebase",
    ],
    metric: "",
    demoUrl: "https://movilidad-urbana-front.vercel.app/",
    githubUrl: "https://github.com/carmen-bs/movilidad-urbana-front",
  },
  {
    id: 2,
    title: "Yumplace",
    subtitle: "APLICACIÓN ANDROID",
    displayCategory: "Desarrollo móvil",
    description:
      "Aplicación Android desarrollada como proyecto final de DAM. Red social centrada en recetas donde los usuarios pueden publicar fotografías asociadas a recetas y compartirlas con sus seguidores.",
    image: "/images/projects/yumplace.png",
    category: "Desarrollo móvil",
    technologies: [
      "Java",
      "Android Studio",
    ],
    metric: "",
    demoUrl: "",
    githubUrl: "https://github.com/trifuerza-Yumplace/Yumplace",
  },
];

const filterTags = [
  { id: "all", label: "Todos", icon: Layers },
  { id: "Full Stack", label: "Full Stack", icon: Globe },
  { id: "Desarrollo móvil", label: "Desarrollo móvil", icon: Zap },
];

const GAP = 24;

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(3);
  const trackRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const visible = useMemo(
    () => filter === "all" ? projects : projects.filter((p) => p.category === filter),
    [filter]
  );

 
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const containerW = trackRef.current.offsetWidth;
      const w = window.innerWidth;
      const pv = w < 640 ? 1 : w < 1024 ? 2 : 3;
      setPerView(pv);
   
      setCardWidth((containerW - GAP * (pv - 1)) / pv);
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => { setPage(0); }, [filter]);

  const totalPages = Math.max(1, visible.length - perView + 1);
  const goTo = (p) => setPage(Math.min(Math.max(0, p), totalPages - 1));

  const slideAmount = cardWidth + GAP;

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b border-white/5 bg-black py-20 sm:py-28"
    >
      <RadialGradientBackground />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

     
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              <Briefcase className="h-3.5 w-3.5" />
              Mis proyectos
            </div>

            <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl lg:text-[56px]">
              Proyectos destacados
            </h2>

            <p className="mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
              Proyectos desarrollados durante mi formación y como parte de mi aprendizaje y experiencia en desarrollo de software.
            </p>
          </div>
        </ScrollReveal>

     
        <ScrollReveal delayMs={80}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {filterTags.map(({ id, label, icon: Icon }) => {
              const active = filter === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setFilter(id)}
                  className="relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200"
                  style={{
                    background: active ? "rgba(74, 16, 36, 0.95)" : "rgba(255,255,255,0.06)",
                    color: active ? "#ffffff" : "#a1a1aa",
                    border: active ? "1px solid rgba(190,18,60,0.4)" : "1px solid rgba(255,255,255,0.1)",
                    boxShadow: active ? "0 0 32px 10px rgba(190,18,60,0.3)" : "none",
                    fontWeight: active ? "600" : "500",
                  }}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

       
        <div className="relative mt-14">

          <button
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            className="absolute -left-6 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-zinc-300 backdrop-blur transition enabled:hover:border-accent/50 enabled:hover:text-accent disabled:opacity-30 lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

   
          <button
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={page >= totalPages - 1}
            className="absolute -right-6 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-zinc-300 backdrop-blur transition enabled:hover:border-accent/50 enabled:hover:text-accent disabled:opacity-30 lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

     
          <div className="overflow-hidden" ref={trackRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: GAP,
         
                transform: `translateX(-${page * slideAmount}px)`,
              }}
            >
              {visible.map((project, i) => (
                <div
                  key={project.id}
                  className="shrink-0"
                  style={{ width: cardWidth > 0 ? cardWidth : `calc(${100 / perView}% - ${GAP * (perView - 1) / perView}px)` }}
                >
                  <ScrollReveal delayMs={i % perView * 100}>
                  <ProjectCard project={project} />
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>

        
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === page ? 32 : 8,
                  height: 8,
                  background: i === page ? "#be123c" : "#3f3f46",
                }}
                aria-label={`Ir a la diapositiva ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}