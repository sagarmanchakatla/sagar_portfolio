"use client";
import React from "react";
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
import { useRouter } from "next/navigation";

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-[#0E78F9]" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const getIcon = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case "react":
      return <FaReact className="text-4xl" />;
    case "express":
      return <SiExpress className="text-4xl" />;
    case "node":
      return <SiNodedotjs className="text-4xl" />;
    case "mongodb":
      return <SiMongodb className="text-4xl" />;
    case "html":
      return <SiHtml5 className="text-4xl" />;
    case "css":
      return <SiCss3 className="text-4xl" />;
    case "javascript":
      return <SiJavascript className="text-4xl" />;
    case "tailwind":
      return <SiTailwindcss className="text-4xl" />;
    case "git":
      return <SiGit className="text-4xl" />;
    case "next":
      return <SiNextdotjs className="text-4xl" />;
    case "python":
      return <FaPython className="text-4xl" />;
    case "bootstrap":
      return <FaBootstrap className="text-4xl" />;
    case "postgresql":
      return <SiPostgresql className="text-4xl" />;
    case "sql":
      return <SiSqlite className="text-4xl" />;
    default:
      return null;
  }
};

const ProjectCard = ({ project, skills = false }: any) => {
  const router = useRouter();
  if (skills) {
    return (
      <div className="px-2 text-left">
        <div className="bg-[#1e293b] p-6 rounded-lg h-72 mx-2 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-[#fdffe2]">{getIcon(project.icon)}</div>
            <h3 className="text-2xl font-semibold text-[#fdffe2]">
              {project.title}
            </h3>
          </div>
          <p className="text-[#AEAAAA] mb-4 text-[16px]">
            {project.description}
          </p>
          <StarRating rating={project.rating} />
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-[#1e293b] p-6 rounded-lg h-80 transform hover:scale-105 transition-transform duration-300"
      onClick={() => router.push(`/projects/${project.title}`)}
    >
      <h3 className="text-2xl font-semibold text-[#fdffe2] mb-2">
        {project.title}
      </h3>
      <p className="text-[#AEAAAA] mb-8 text-[16px]">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags &&
          project.tags.map((tag: any, index: any) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-semibold bg-[#fdffe2] text-[#111827] rounded-full"
            >
              {tag}
            </span>
          ))}
      </div>
      <button className="px-4 py-2 mt-2 text-[#fdffe2] rounded-md font-semibold text-sm flex items-center gap-1 hover:bg-[#4c6399] transition-colors bg-[#0E78F9]">
        Read More &rarr;
      </button>
    </div>
  );
};

export default ProjectCard;
