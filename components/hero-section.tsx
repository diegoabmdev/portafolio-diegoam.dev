"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Phone,
  Copy,
  Check,
} from "lucide-react";
import Image from "next/image";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
];

const contactInfo = {
  email: "diegoabm.dev@gmail.com",
  phone: "+56 9 7689 6260",
  github: "https://github.com/diegoabmdev",
  linkedin: "https://www.linkedin.com/in/diegoabmendoza/",
  cv: "https://drive.google.com/file/d/1Vxpw2UGRLClQwPHgxabM3tbmUcKmjh-_/view",
};

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="min-h-[60vh] flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="shrink-0">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
              <Image
                src="me.webp"
                alt="Foto de perfil"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Diego Abanto Mendoza
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-4">
              Analista y Desarrollador Web Full Stack
            </p>

            {/* Technologies */}
            <div className="max-w-2xl flex flex-wrap justify-center md:justify-start gap-2 mb-6">
              {technologies.map((tech) => (
                <Badge
                  key={tech.name}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm font-medium"
                >
                  <span className="mr-1.5">{tech.icon}</span>
                  {tech.name}
                </Badge>
              ))}
            </div>

            {/* Bio */}
            <p className="text-muted-foreground leading-relaxed mb-2 max-w-2xl">
              ¡Hola! Soy Diego, tengo 27 años y soy Técnico Analista Programador
              apasionado por construir aplicaciones web modernas y funcionales.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2 max-w-2xl">
              Me formé en INACAP (Técnico Analista Programador) y luego hice el
              Bootcamp Full Stack JavaScript en Desafío Latam para profundizar
              mis conocimientos en el mundo del desarrollo web usando el stack
              MERN. También tengo experiencia real en Angular, TypeScript y
              soporte TI (Jira, redes, hardware). Me motiva aprender rápido, y
              me divierte resolver problemas de logica y entregar soluciones que
              realmente sirvan.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              ¡Bienvenido a mi portafolio! Aquí puedes ver mis proyectos,
              experiencia y cómo puedo ayudarte a llevar tus ideas al siguiente
              nivel.
            </p>

            {/* Contact Actions */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-6">
              <Button asChild>
                <a
                  href={contactInfo.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Ver CV
                </a>
              </Button>

              <Button variant="outline" asChild>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>

              <Button variant="outline" asChild>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>

              <Button
                variant="outline"
                size="default"
                onClick={copyEmail}
                className="relative cursor-pointer"
                title="Copiar email"
                aria-label="Copiar a portapapeles"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    "¡Copiado a portapapeles!"
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" /> {contactInfo.email}
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                size="default"
                className="relative cursor-pointer"
                title="Telefono"
                aria-label="Numero de Telefono"
              >
                <Phone className="w-4 h-4" /> {contactInfo.phone}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
