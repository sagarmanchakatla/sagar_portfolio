"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/constants/skillsData";
import { FaReact, FaBootstrap, FaPython } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiNextdotjs,
  SiSqlite,
} from "react-icons/si";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

// Define interfaces for type safety
interface Skill {
  title: string;
  description: string;
  icon: string;
  rating: number;
}

interface IconMap {
  [key: string]: IconType;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    className="flex gap-1"
  >
    {[...Array(5)].map((_, index: number) => (
      <motion.svg
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.1 }}
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-[#1e88e5]" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </motion.svg>
    ))}
  </motion.div>
);

const Skills: React.FC = () => {
  const [slidePercentage, setSlidePercentage] = useState<number>(33.3);

  const router = useRouter();
  const updateSlidePercentage = () => {
    if (window.innerWidth >= 768) {
      setSlidePercentage(33.33);
    } else {
      setSlidePercentage(100);
    }
  };

  useEffect(() => {
    updateSlidePercentage();
    window.addEventListener("resize", updateSlidePercentage);
    return () => {
      window.removeEventListener("resize", updateSlidePercentage);
    };
  }, []);

  const getIcon = (iconName: string): React.ReactNode => {
    const icons: IconMap = {
      react: FaReact,
      express: SiExpress,
      node: SiNodedotjs,
      mongodb: SiMongodb,
      html: SiHtml5,
      css: SiCss3,
      javascript: SiJavascript,
      tailwind: SiTailwindcss,
      git: SiGit,
      next: SiNextdotjs,
      python: FaPython,
      bootstrap: FaBootstrap,
      postgresql: SiPostgresql,
      sql: SiSqlite,
    };

    const IconComponent = icons[iconName.toLowerCase()];
    return IconComponent ? <IconComponent className="text-4xl" /> : null;
  };

  return (
    <section className="w-full min-h-[80vh] flex flex-col">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="h-[70%] w-full p-10 flex justify-center items-center"
      >
        <div className="max-w-6xl w-full h-full">
          <h1 className="text-4xl font-bold text-white">Skills</h1>
          <div className="h-full w-full mt-20">
            <Carousel
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={1000}
              centerMode={true}
              centerSlidePercentage={slidePercentage}
              swipeable={true}
              emulateTouch={true}
              selectedItem={0}
              // preventMovementUntilAnimationFinishes={false}
              className="custom-carousel"
              // style={{ minHeight: "320px" }}
            >
              {skillsData.map((skill: Skill, index: number) => (
                <div className="px-2 text-left" key={index}>
                  <div className="bg-[#1e293b] p-6 rounded-lg h-72 mx-2 transition-transform duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-[#fdffe2]">
                        {getIcon(skill.icon)}
                      </div>
                      <h3 className="text-2xl font-semibold text-[#fdffe2]">
                        {skill.title}
                      </h3>
                    </div>
                    <p className="text-[#AEAAAA] mb-4 text-[16px]">
                      {skill.description}
                    </p>
                    <StarRating rating={skill.rating} />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <button
            className="px-4 py-3 bg-gray-200 rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#0E78F9] transition-colors m-auto mt-10"
            onClick={() => router.push("/skills")}
          >
            View All
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
