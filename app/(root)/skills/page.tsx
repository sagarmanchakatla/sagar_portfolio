"use client";
import React, { useState, useEffect, useRef } from "react";
import { skillsData } from "@/constants/skillsData";
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
      <h1 className="text-5xl text-right font-bold">Skills</h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="h-1 w-full bg-white origin-left"
      />
    </motion.div>
  );
};

const AnimatedSkillCard = ({ skill, index }: { skill: any; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <ProjectCard project={skill} skills={true} />
    </motion.div>
  );
};

const SkillsPage = () => {
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
    <section
      ref={heroRef}
      className="text-3xl flex flex-col text-left text-white min-h-screen bg-[#111827] mt-20 px-4 py-16 relative overflow-hidden"
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
      <div
        ref={containerRef}
        className="max-w-6xl w-full mx-auto space-y-8 px-10 md:px-0"
      >
        <AnimatedHeader />

        <motion.div
          initial={{ opacity: 0 }}
          animate={containerInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {skillsData.map((skill, index) => (
            <AnimatedSkillCard key={index} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPage;
