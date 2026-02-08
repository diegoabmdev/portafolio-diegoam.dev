"use client";

import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase } from "lucide-react";

interface TimelineItem {
  id: number;
  type: "education" | "experience";
  title: string;
  subtitle: string;
  date: string;
  description: string;
  skills?: string[];
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    type: "education",
    title: "Técnico de Nivel Superior Analista Programador",
    subtitle: "INACAP",
    date: "Marzo 2020 - Junio 2022",
    description:
      "Formación especializada en desarrollo de software, POO, bases de datos relacionales, redes y arquitectura de aplicaciones. Proyectos integrales con frontend, UX/UI y metodologías ágiles.",
  },
  {
    id: 2,
    type: "education",
    title: "Ingeniería en Informática",
    subtitle: "INACAP",
    date: "Julio 2022 - En pausa",
    description:
      "Estudios de pregrado en programación, algoritmos, estructuras de datos y desarrollo de software. Pausa actual para priorizar experiencia práctica y bootcamp intensivo.",
  },
  {
    id: 3,
    type: "experience",
    title: "Full Stack Developer - Soporte TI (Práctica)",
    subtitle: "Latam Trade Capital Chile",
    date: "Junio 2024 - Agosto 2024",
    description:
      "Mi primera experiencia laboral formal fue en el sector financiero, donde tuve la oportunidad de trabajar simultáneamente en desarrollo web y soporte TI. Como desarrollador, me enfoqué en mejorar una plataforma interna basada en Angular 7: optimicé componentes existentes, corregí errores, implementé nuevas características con TypeScript y SCSS a partir de tickets reales, y aseguré su calidad mediante pruebas unitarias con Jasmine. Complementariamente, en el área de soporte resolví incidencias diarias usando Jira, realicé diagnósticos y mantenimientos de hardware/redes (tanto remoto con TeamViewer como presencial), y gestioné el inventario de equipos. Este rol dual me enseñó a conectar el código con el impacto real en los usuarios y la operación del negocio, sentando una base sólida para mi perfil full-stack híbrido.",
    skills: [
      "Angular",
      "Angular Material",
      "SCSS",
      "TypeScript",
      "BitBucket",
      "Jira",
    ],
  },
  {
    id: 4,
    type: "experience",
    title: "Desarrollador Web & Consultor TI",
    subtitle: "Freelance",
    date: "Septiembre 2024 - Diciembre 2025",
    description:
      "Desarrollo web personalizado (React, Next.js, WordPress). Armado, diagnóstico y mantenimiento de PCs. Gestión completa: infraestructura → despliegue.",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "MySQL",
      "WordPress",
      "PHP",
      "Soporte Técnico",
      "Hardware",
    ],
  },
  {
    id: 5,
    type: "education",
    title: "Bootcamp Full Stack JavaScript",
    subtitle: "Desafío Latam",
    date: "Junio 2025 - Actualmente",
    description:
      "Formación intensiva en React, Node.js, Express, MongoDB, Git y desarrollo full stack de aplicaciones web y móviles.",
  },
];

export function TimelineSection() {
  return (
    <section id="experiencia" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Educación & Experiencia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mi trayectoria profesional y formación académica en el mundo del
            desarrollo web.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div
                  className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-md ${
                    item.type === "education"
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground"
                  }`}
                >
                  {item.type === "education" ? (
                    <GraduationCap className="w-5 h-5" />
                  ) : (
                    <Briefcase className="w-5 h-5" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? "md:text-left" : "md:text-left"
                  }`}
                >
                  <div
                    className={`bg-card border border-border/50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <Badge
                        variant={
                          item.type === "education" ? "default" : "secondary"
                        }
                        className="text-xs"
                      >
                        {item.type === "education"
                          ? "Educación"
                          : "Experiencia"}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-1 mt-3">
                      {item.title}
                    </h3>

                    <p className="text-primary text-sm font-medium mb-2">
                      {item.subtitle}
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {item.skills && (
                      <div
                        className={`flex flex-wrap gap-2 ${
                          index % 2 === 0
                            ? "md:justify-start"
                            : "md:justify-start"
                        }`}
                      >
                        {item.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
