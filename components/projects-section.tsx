"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Github,
  ExternalLink,
  Server,
  Monitor,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    frontend?: string;
    backend?: string;
    demo?: string;
  };
}

const projects: Project[] = [
  {
    title: "Api E-commerce Nest.js",
    id: 1,
    description:
      "API RESTful robusta y modular para un sistema Ecommerce construida con Nest.js y PostgreSQL. Sigue Patrones de Diseño (Service, Repository, Provider).",
    image: "/projects-img/api.webp",
    technologies: [
      "Nest.js",
      "PostgreSQL",
      "TypeScript",
      "Docker",
      "TypeORM",
      "MercadoPago",
      "Nodemailer",
      "Scalar",
    ],
    links: {
      backend: "https://github.com/diegoabmdev/ecommerce-backend",
      demo: "https://diegoabmdev-ecommerce.onrender.com/",
    },
  },
  {
    title: "E-commerce Next.js",
    id: 2,
    description:
      "Ecommerce desarrollado con Next.js; se usó la API DummyJSON para obtener los productos y verificar el login. Se pueden gestionar direcciones y ver los pedidos hechos anteriormente.",
    image: "/projects-img/ecommerce-frontend.webp",
    technologies: [
      "Next.js",
      "TailwindCss",
      "TypeScript",
      "Zustand",
      "ShadCn",
      "vitest",
    ],
    links: {
      frontend: "https://github.com/diegoabmdev/ecommerce-frontend",
      demo: "https://ecommerce-frontend-orcin-two.vercel.app/",
    },
  },
  {
    title: "Dashboard Financiero Personal",
    id: 3,
    description:
      "Dashboard financiero personal desarrollado para ayudarte a controlar y visualizar tus finanzas de manera sencilla e intuitiva. Permite a los usuarios registrar ingresos y gastos, resúmenes y gráficos.",
    image: "/projects-img/fd-ui.webp",
    technologies: [
      "React",
      "Typescript",
      "Tailwind",
      "Recharts",
      "Radix UI",
      "Vitest",
    ],
    links: {
      frontend: "https://github.com/diegoabmdev/financial-dashboard",
      demo: "https://financial-dashboard-swart-one.vercel.app/",
    },
  },
  {
    title: "Sistema Gestion Matrona",
    id: 4,
    description:
      "Solución full-stack para digitalizar la gestión de consultorios médicos, abordando las ineficiencias de los procesos manuales. Optimización de la administración de pacientes, citas y, especialmente, en la creación de una robusta Historia Clínica Electrónica (HCE).",
    image: "/projects-img/smedico_login_1.webp",
    technologies: ["React", "Typescript", "NodeJS", "ExpressJS", "Tailwind"],
    links: {
      frontend: "https://github.com/diegoabmdev/lafleur-sistemamedico-ui",
      backend: "https://github.com/diegoabmdev/lafleur-sistemamedico-api",
      demo: "https://lafleur-sistemamedico-ui.vercel.app/",
    },
  },
  {
    title: "Inmobiliaria ADL",
    id: 5,
    description:
      "Proyecto de práctica desarrollado para el módulo de Programación Dinámica con JavaScript. Consiste en un sitio web de bienes raíces que renderiza propiedades de forma dinámica, permitiendo filtrar por disponibilidad de mascotas, tipo de operación (venta o alquiler) y búsqueda por nombre.",
    image: "/projects-img/inmobiliaria-ui.webp",
    technologies: ["Html5", "Css3", "Javascript", "Bootstrap", "FontAwesome"],
    links: {
      frontend: "https://github.com/R3dgrave/inmobiliaria-adl",
      demo: "https://r3dgrave.github.io/inmobiliaria-adl",
    },
  },
  {
    title: "Donut Club",
    id: 6,
    description:
      "Donut Club es una aplicación web de alto rendimiento diseñada para la venta de donas artesanales en Santiago. El proyecto se enfoca en una experiencia de usuario fluida, visualmente atractiva y optimizada técnica mente para obtener los mejores puntajes en Core Web Vitals.",
    image: "/projects-img/donutclub.webp",
    technologies: ["React", "Html5", "Css3", "Javascript", "Bootstrap"],
    links: {
      frontend: "https://github.com/R3dgrave/donut-club",
      demo: "https://r3dgrave.github.io/donut-club/",
    },
  },
  {
    title: "TechStore",
    id: 7,
    description:
      "Tienda online de smartphones construida con Bootstrap 5 y JavaScript vanilla.",
    image: "/projects-img/tech-store.webp",
    technologies: ["Html5", "Css3", "Javascript", "Bootstrap", "FontAwesome"],
    links: {
      frontend: "https://github.com/R3dgrave/tienda-celulares",
      demo: "https://r3dgrave.github.io/tienda-celulares/",
    },
  },
];

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 6;
  const projectsToShow = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMoreProjects = projects.length > INITIAL_COUNT;

  return (
    <section id="proyectos" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades en
            desarrollo full stack, desde el diseño hasta el despliegue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsToShow.map((project) => (
            <Card
              key={project.id}
              className="py-0 group overflow-hidden border-border/50 bg-card hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-muted/40">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs px-2 py-0.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-4 flex-1">
                  {project.description}
                </p>
              </CardContent>

              <CardFooter className="px-6 pb-6 pt-2 flex flex-wrap gap-2">
                {project.links.frontend && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.links.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Monitor className="w-3.5 h-3.5 mr-1.5" />
                      Frontend
                    </a>
                  </Button>
                )}

                {project.links.backend && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.links.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Server className="w-3.5 h-3.5 mr-1.5" />
                      Backend
                    </a>
                  </Button>
                )}

                {project.links.demo && (
                  <Button size="sm" asChild>
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex flex-col items-end">
          {hasMoreProjects && (
            <Button
              onClick={() => setShowAll(!showAll)}
              className="mt-6 group flex items-center border-none text-white dark:text-black cursor-pointer"
            >
              {showAll ? (
                <>
                  Ver Menos{" "}
                  <ChevronUp
                    size={20}
                    className="text-white dark:text-black h-4 w-4 transition-custom"
                  />
                </>
              ) : (
                <>
                  Ver Más Proyectos{" "}
                  <ChevronDown
                    size={20}
                    className="text-white dark:text-black h-4 w-4 transition-custom"
                  />
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
