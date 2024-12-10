"use client";
import React, { useEffect, useRef, useState } from "react";
import { projectsData } from "@/constants/projectData";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedHeader = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-8"
    >
      <h1 className="text-5xl text-right font-bold">Projects</h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="h-1 w-full bg-white origin-left"
      />
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <div
      ref={heroRef}
      className="text-3xl flex flex-col text-left text-white min-h-screen bg-[#111827] mt-20 px-4 py-16"
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
      <div className="max-w-6xl w-full mx-auto space-y-8 px-10 md:px-0">
        <AnimatedHeader />
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={containerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
