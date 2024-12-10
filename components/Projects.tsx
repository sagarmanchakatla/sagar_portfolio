"use client";
import React from "react";
import { projectsData } from "@/constants/projectData";
import ProjectCard from "./ProjectCard";
import { useRouter } from "next/navigation";

const Projects = () => {
  const router = useRouter();
  return (
    <section className="w-full flex flex-col min-h-[80vh] ">
      <div className="w-full p-10 flex justify-center items-center">
        <div className="max-w-6xl w-full">
          <h1 className="text-4xl font-bold text-white mb-6">Projects</h1>
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {projectsData.slice(0, 4).map((project:any, index:any) => (
              <div key={index}>
                <ProjectCard project={project} skills={false} />
              </div>
            ))}
          </div>

          <button
            className="px-4 py-3 bg-gray-200 rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#0E78F9] transition-colors m-auto mt-10"
            onClick={() => router.push("/projects")}
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
