// "use client";

// import Contact from "@/components/Contact";
// import Hero from "@/components/Hero";
// import Projects from "@/components/Projects";
// import Skills from "@/components/Skills";
// import TerminalController from "@/components/TerminalController";
// import { useEffect, useRef, useState } from "react";

// export default function Home() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const heroRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (heroRef.current) {
//         const rect = heroRef.current.getBoundingClientRect();
//         setMousePosition({
//           x: e.clientX - rect.left,
//           y: e.clientY - rect.top,
//         });
//       }
//     };

//     const heroElement = heroRef.current;
//     if (heroElement) {
//       heroElement.addEventListener("mousemove", handleMouseMove);

//       return () => {
//         heroElement.removeEventListener("mousemove", handleMouseMove);
//       };
//     }
//   }, []);
//   return (
//     <section
//       ref={heroRef}
//       style={{
//         background: `
//             radial-gradient(
//               400px circle at ${mousePosition.x}px ${mousePosition.y}px,
//               rgba(29, 78, 216, 0.30),
//               transparent 80%
//             ),
//             repeating-linear-gradient(
//               0deg,
//               rgba(255, 255, 255, 0.06) 0px,
//               rgba(255, 255, 255, 0.06) 1px,
//               transparent 1px,
//               transparent 20px
//             ),
//             repeating-linear-gradient(
//               90deg,
//               rgba(255, 255, 255, 0.06) 0px,
//               rgba(255, 255, 255, 0.06) 1px,
//               transparent 1px,
//               transparent 20px
//             )
//           `,
//       }}
//     >
//       <Hero />
//       <Skills />
//       <Projects />
//       <TerminalController />
//       <Contact />
//     </section>
//   );
// }

"use client";

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TerminalController from "@/components/TerminalController";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";


export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / scrollHeight;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        heroElement.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  // Calculate scale based on scroll progress
  const scale = 1 + (scrollProgress * 0.9); // Adjust multiplier for more/less dramatic effect
  const scaleY = 1 - (scrollProgress * 0.4); // Compress vertically as we scroll

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{
          transform: `scale(${scale}) scaleY(${scaleY}) translateZ(0px)`,
          background: `
            radial-gradient(
              400px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(29, 78, 216, 0.30),
              transparent 80%
            ),
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.09) 0px,
              rgba(255, 255, 255, 0.09) 1px,
              transparent 1px,
              transparent 20px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.09) 0px,
              rgba(255, 255, 255, 0.09) 1px,
              transparent 1px,
              transparent 20px
            )
          `,
          transformOrigin: "center center",
        }}
      />

      <div className="relative z-10">
        <Button title="View All"/>
        <Hero />
        <Skills />
        <Projects />
        <TerminalController />
        <Contact />
      </div>
    </section>
  );
}

// 'use client';

// import React from 'react';
// import Contact from "@/components/Contact";
// import Hero from "@/components/Hero";
// import Projects from "@/components/Projects";
// import Skills from "@/components/Skills";
// import TerminalController from "@/components/TerminalController";
// import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
// import { cn } from "@/lib/utils";

// const Home = () => {
//   return (
//     // <main className="relative min-h-screen w-full overflow-hidden">
//     //   {/* Container for the grid pattern */}
//     //   <div className="fixed inset-0 w-full">
//     //     <InteractiveGridPattern
//     //       className={cn(
//     //         "absolute inset-0 w-full h-full",
//     //         "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
//     //       )}
//     //       width={20}
//     //       height={20}
//     //       squares={[80, 80]}
//     //       squaresClassName="hover:fill-blue-500 transition-colors duration-300"
//     //     />
//     //   </div>

//     //   {/* Content container */}
//     //   <div className="relative z-10 w-full">
//     //     <Hero />
//     //     <Skills />
//     //     <Projects />
//     //     <TerminalController />
//     //     <Contact />
//     //   </div>
//     // </main>

//     <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
//       {/* <div className="relative z-10 w-full"> */}
//         <Hero />
//         <Skills />
//         <Projects />
//         <TerminalController />
//         <Contact />
//       {/* </div> */}
//       <InteractiveGridPattern
//         className={cn(
//           "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
//         )}
//         width={20}
//         height={20}
//         squares={[80, 80]}
//         squaresClassName="hover:fill-blue-500"
//       />
//     </div>
//   );
// };

// export default Home;