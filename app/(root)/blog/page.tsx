"use client";
// import { useInView } from "react-intersection-observer";
// import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const page = () => {
  // const [containerRef, containerInView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const heroRef = useRef(null);

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     if (heroRef.current) {
  //       const rect = heroRef.current.getBoundingClientRect();
  //       setMousePosition({
  //         x: e.clientX - rect.left,
  //         y: e.clientY - rect.top,
  //       });
  //     }
  //   };

  //   const heroElement = heroRef.current;
  //   if (heroElement) {
  //     heroElement.addEventListener("mousemove", handleMouseMove);
  //     return () => {
  //       heroElement.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }
  // }, []);

  return (  
    <motion.div
      // ref={heroRef}
      className="text-3xl flex flex-col text-left text-white h-[100vh] bg-[#111827] mt-15 px-4 py-16 justify-center items-center"
      // style={{
      //   background: `
      //   radial-gradient(
      //     500px circle at ${mousePosition.x}px ${mousePosition.y}px,
      //     rgba(29, 78, 216, 0.20),
      //     transparent 90%
      //   ),
      //   repeating-linear-gradient(
      //     0deg,
      //     rgba(255, 255, 255, 0.045) 0px,
      //     rgba(255, 255, 255, 0.045) 2px,
      //     transparent 2px,
      //     transparent 18px
      //   ),
      //   repeating-linear-gradient(
      //     90deg,
      //     rgba(255, 255, 255, 0.045) 0px,
      //     rgba(255, 255, 255, 0.045) 2px,
      //     transparent 2px,
      //     transparent 18px
      //   )
      // `,
      // }}
    >
      <motion.h1
        className="text-4xl font-bold"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Coming Soon...
      </motion.h1>
    </motion.div>
  );
};

export default page;
