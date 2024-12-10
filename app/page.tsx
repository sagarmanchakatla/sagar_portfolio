"use client";

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TerminalController from "@/components/TerminalController";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);

      return () => {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);
  return (
    <section
      ref={heroRef}
      style={{
        background: `
            radial-gradient(
              500px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(29, 78, 216, 0.20),
              transparent 90%
            ),
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.045) 0px,
              rgba(255, 255, 255, 0.045) 2px,
              transparent 2px,
              transparent 18px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.045) 0px,
              rgba(255, 255, 255, 0.045) 2px,
              transparent 2px,
              transparent 18px
            )
          `,
      }}
    >
      {/* <AnimatedBackground /> */}
      <Hero />
      <Skills />
      <Projects />
      <TerminalController />
      <Contact />
    </section>
  );
}
