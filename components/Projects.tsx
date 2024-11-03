// "use client";
// import React, { useState, useEffect } from "react";
// import { useMediaQuery } from "react-responsive";
// import { projectsData } from "@/constants/projectData";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const Projects = () => {
//   // Add state for content loading
//   const [isLoading, setIsLoading] = useState(true);
//   const [mounted, setMounted] = useState(false);

//   const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
//   const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

//   // Handle component mounting
//   useEffect(() => {
//     setMounted(true);
//     // Add a small delay to ensure styles are properly loaded
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   // Don't render carousel until component is mounted and initial loading is complete
//   if (!mounted || isLoading) {
//     return (
//       <section className="w-full h-screen flex flex-col bg-[#111827]">
//         <div className="h-[70%] w-full p-10 flex justify-center items-center">
//           <div className="max-w-6xl w-full h-full">
//             <h1 className="text-4xl font-bold text-white">Projects</h1>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="w-full h-screen flex flex-col bg-[#111827]">
//       <div className="h-[70%] w-full p-10 flex justify-center items-center">
//         <div className="max-w-6xl w-full h-full">
//           <h1 className="text-4xl font-bold text-white">Projects</h1>
//           <div className="h-auto w-full mt-20">
//             <Carousel
//               showArrows={false}
//               showStatus={false}
//               showThumbs={false}
//               infiniteLoop={true}
//               autoPlay={true}
//               interval={2000}
//               centerMode={!isMobile}
//               centerSlidePercentage={isMobile ? 100 : isTablet ? 50 : 33.33}
//               swipeable={true}
//               emulateTouch={true}
//               selectedItem={0}
//               preventMovementUntilAnimationFinishes={false}
//               className="custom-carousel"
//               style={{ minHeight: "320px" }} // Add minimum height
//             >
//               {projectsData.map((project, index) => (
//                 <div
//                   className="px-2 text-left"
//                   key={index}
//                   data-index={index}
//                   style={{ minHeight: "inherit" }} // Ensure consistent height
//                 >
//                   <div className="bg-[#5a72a0] p-6 rounded-lg h-64 mx-2 transform hover:scale-105 transition-transform duration-300">
//                     <h3 className="text-2xl font-semibold text-[#fdffe2] mb-2">
//                       {project.title}
//                     </h3>
//                     <p className="text-[#fdffe2] mb-4 text-[16px]">
//                       {project.description}
//                     </p>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tags.map((tag, tagIndex) => (
//                         <span
//                           key={tagIndex}
//                           className="px-2 py-1 text-xs font-semibold bg-[#fdffe2] text-[#111827] rounded-full"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                     <button className="px-4 py-2 mt-2 bg-[#111827] text-[#fdffe2] rounded-md font-semibold text-sm flex items-center gap-1 hover:bg-[#333c50] transition-colors">
//                       Read More &rarr;
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </Carousel>
//           </div>
//           <button className="px-4 py-3 bg-gray-200 rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-300 transition-colors m-auto mt-10">
//             View All
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

"use client";
import React from "react";
import { projectsData } from "@/constants/projectData"; // Adjust the import as necessary
import Loader from "./Loader"; // Ensure Loader is implemented correctly
import ProjectCard from "./ProjectCard";
import { useRouter } from "next/navigation";

const Projects = () => {
  const router = useRouter();
  return (
    <section
      className="w-full flex flex-col min-h-[80vh] bg-[#111827]"
      style={{
        background: `
        
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
      <div className="w-full p-10 flex justify-center items-center">
        <div className="max-w-6xl w-full">
          <h1 className="text-4xl font-bold text-white mb-6">Projects</h1>

          {/* Display Loader while fetching data if needed */}
          {/* <Loader /> Uncomment this if you need a loader */}

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {projectsData.slice(0, 4).map((project, index) => (
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

// Exporting Projects as a server-side component
export default Projects;
