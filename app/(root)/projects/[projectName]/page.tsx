// "use client";

// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useRouter } from "next/navigation";
// import { useParams } from "next/navigation";
// import { projectsData } from "@/constants/projectData";
// import { Github, ExternalLink, ArrowLeft } from "lucide-react";
// import { useState, useEffect, useRef } from "react";

// // Container Variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2,
//     },
//   },
// };

// // Item Variants for staggered animations
// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// const ProjectDetailsPage = () => {
//   const { projectName } = useParams();
//   const router = useRouter();

//   let currentProject;
//   projectsData.forEach((project) => {
//     if (project.title === projectName) {
//       currentProject = project;
//     }
//   });

//   if (!currentProject) {
//     return (
//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="min-h-screen bg-[#1a1b26] text-white p-8"
//       >
//         <div className="max-w-5xl mx-auto">
//           <h1 className="text-4xl font-bold mb-8">Project Not Found</h1>
//           <p>Project not found. URL parameter: {projectName}</p>
//         </div>
//       </motion.section>
//     );
//   }

//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
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
//     <motion.section
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       className="min-h-screen bg-[#111827] text-white p-8 mt-20"
//       ref={heroRef}
//       style={{
//         background: `
//           radial-gradient(
//             500px circle at ${mousePosition.x}px ${mousePosition.y}px,
//             rgba(29, 78, 216, 0.20),
//             transparent 90%
//           ),
//           repeating-linear-gradient(
//             0deg,
//             rgba(255, 255, 255, 0.045) 0px,
//             rgba(255, 255, 255, 0.045) 2px,
//             transparent 2px,
//             transparent 18px
//           ),
//           repeating-linear-gradient(
//             90deg,
//             rgba(255, 255, 255, 0.045) 0px,
//             rgba(255, 255, 255, 0.045) 2px,
//             transparent 2px,
//             transparent 18px
//           )
//         `,
//       }}
//     >
//       <div className="max-w-5xl mx-auto">
//         {/* Back Button with Hover Animation */}
//         <motion.div variants={itemVariants} className="mb-8">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center gap-2 hover:opacity-80 transition-opacity"
//             onClick={() => router.push("/projects")}
//           >
//             <ArrowLeft size={20} />
//             <p className="text-gray-300">Back to Projects</p>
//           </motion.button>
//         </motion.div>

//         {/* Header with Title and Underline */}
//         <motion.div
//           variants={itemVariants}
//           className="flex justify-between items-center mb-6"
//         >
//           <div className="w-full">
//             <h1 className="text-4xl font-bold">{currentProject.title}</h1>
//           </div>
//           <motion.div
//             className="flex gap-4 ml-4"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <motion.a
//               href="#"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               className="hover:opacity-80 transition-opacity"
//             >
//               <ExternalLink size={24} />
//             </motion.a>
//             <motion.a
//               href="#"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               className="hover:opacity-80 transition-opacity"
//             >
//               <Github size={24} />
//             </motion.a>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
//           className="h-1 w-full bg-white origin-left "
//         />

//         <motion.div variants={itemVariants} className="mb-12 mt-12">
//           <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
//           <div className="flex flex-wrap gap-2 px-5 mt-5">
//             {currentProject.tags.map((tag, index) => (
//               <motion.span
//                 key={index}
//                 variants={itemVariants}
//                 className="px-4 py-1 bg-[#0E78F9] rounded-full text-sm"
//               >
//                 {tag}
//               </motion.span>
//             ))}
//           </div>
//         </motion.div>
//         {/* Rest of the existing code remains the same... */}
//         <motion.div variants={itemVariants} className="mb-12">
//           <h2 className="text-2xl font-semibold mb-4">Project Summary</h2>
//           <div className="space-y-4 text-gray-300 px-6">
//             <motion.p variants={itemVariants}>
//               {currentProject.description}
//             </motion.p>
//             {currentProject.summary && (
//               <motion.p variants={itemVariants}>
//                 {currentProject.summary}
//               </motion.p>
//             )}
//           </div>
//         </motion.div>

//         {/* Images Section with InView Trigger */}
//         {currentProject.images.map((image, index) => {
//           const [ref, inView] = useInView({
//             triggerOnce: true,
//             threshold: 0.1,
//           });

//           return (
//             <motion.div
//               key={index}
//               ref={ref}
//               variants={itemVariants}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//             >
//               <h2 className="text-2xl font-semibold mb-4">{image.header}</h2>
//               <div className="flex items-start p-5">
//                 <span className="mr-2">•</span>
//                 <p className="text-gray-300">{image.description}</p>
//               </div>
//               <motion.div
//                 className="rounded-lg overflow-hidden mb-20"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <motion.img
//                   src={image.url}
//                   alt=""
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={
//                     inView
//                       ? { opacity: 1, scale: 1 }
//                       : { opacity: 0, scale: 0.95 }
//                   }
//                   transition={{ duration: 0.5 }}
//                   className="w-full object-cover px-5"
//                 />
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </motion.section>
//   );
// };

// export default ProjectDetailsPage;

// "use client";

// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useRouter } from "next/navigation";
// import { useParams } from "next/navigation";
// import { projectsData } from "@/constants/projectData";
// import { Github, ExternalLink, ArrowLeft } from "lucide-react";
// import { useState, useEffect, useRef } from "react";

// // Container Variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2,
//     },
//   },
// };

// // Item Variants for staggered animations
// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// const ProjectDetailsPage = () => {
//   const { projectName } = useParams();
//   const router = useRouter();
//   const heroRef = useRef<HTMLDivElement>(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Find current project before rendering
//   let currentProject;
//   projectsData.forEach((project) => {
//     if (project.title === projectName) {
//       currentProject = project;
//     }
//   });
//   // Add mouse move effect
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

//   // Handle project not found
//   if (!currentProject) {
//     return (
//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="min-h-screen bg-[#1a1b26] text-white p-8"
//       >
//         <div className="max-w-5xl mx-auto">
//           <h1 className="text-4xl font-bold mb-8">Project Not Found</h1>
//           <p>Project not found. URL parameter: {projectName}</p>
//         </div>
//       </motion.section>
//     );
//   }

//   return (
//     <motion.section
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       className="min-h-screen bg-[#111827] text-white p-8 mt-20"
//       ref={heroRef}
//       style={{
//         background: `
//           radial-gradient(
//             500px circle at ${mousePosition.x}px ${mousePosition.y}px,
//             rgba(29, 78, 216, 0.20),
//             transparent 90%
//           ),
//           repeating-linear-gradient(
//             0deg,
//             rgba(255, 255, 255, 0.045) 0px,
//             rgba(255, 255, 255, 0.045) 2px,
//             transparent 2px,
//             transparent 18px
//           ),
//           repeating-linear-gradient(
//             90deg,
//             rgba(255, 255, 255, 0.045) 0px,
//             rgba(255, 255, 255, 0.045) 2px,
//             transparent 2px,
//             transparent 18px
//           )
//         `,
//       }}
//     >
//       <div className="max-w-5xl mx-auto">
//         {/* Back Button with Hover Animation */}
//         <motion.div variants={itemVariants} className="mb-8">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center gap-2 hover:opacity-80 transition-opacity"
//             onClick={() => router.push("/projects")}
//           >
//             <ArrowLeft size={20} />
//             <p className="text-gray-300">Back to Projects</p>
//           </motion.button>
//         </motion.div>

//         {/* Header with Title and Underline */}
//         <motion.div
//           variants={itemVariants}
//           className="flex justify-between items-center mb-6"
//         >
//           <div className="w-full">
//             <h1 className="text-4xl font-bold">{currentProject.title}</h1>
//           </div>
//           <motion.div
//             className="flex gap-4 ml-4"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <motion.a
//               href={currentProject.liveLink || "#"}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               className="hover:opacity-80 transition-opacity"
//             >
//               <ExternalLink size={24} />
//             </motion.a>
//             <motion.a
//               href={currentProject.githubLink || "#"}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               className="hover:opacity-80 transition-opacity"
//             >
//               <Github size={24} />
//             </motion.a>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
//           className="h-1 w-full bg-white origin-left "
//         />

//         <motion.div variants={itemVariants} className="mb-12 mt-12">
//           <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
//           <div className="flex flex-wrap gap-2 px-5 mt-5">
//             {currentProject.tags.map((tag, index) => (
//               <motion.span
//                 key={index}
//                 variants={itemVariants}
//                 className="px-4 py-1 bg-[#0E78F9] rounded-full text-sm"
//               >
//                 {tag}
//               </motion.span>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div variants={itemVariants} className="mb-12">
//           <h2 className="text-2xl font-semibold mb-4">Project Summary</h2>
//           <div className="space-y-4 text-gray-300 px-6">
//             <motion.p variants={itemVariants}>
//               {currentProject.description}
//             </motion.p>
//             {currentProject.summary && (
//               <motion.p variants={itemVariants}>
//                 {currentProject.summary}
//               </motion.p>
//             )}
//           </div>
//         </motion.div>

//         {/* Images Section with InView Trigger */}
//         {currentProject.images.map((image, index) => {
//           const [ref, inView] = useInView({
//             triggerOnce: true,
//             threshold: 0.1,
//           });

//           return (
//             <motion.div
//               key={index}
//               ref={ref}
//               variants={itemVariants}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//             >
//               <h2 className="text-2xl font-semibold mb-4">{image.header}</h2>
//               <div className="flex items-start p-5">
//                 <span className="mr-2">•</span>
//                 <p className="text-gray-300">{image.description}</p>
//               </div>
//               <motion.div
//                 className="rounded-lg overflow-hidden mb-20"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <motion.img
//                   src={image.url}
//                   alt={image.header || "Project image"}
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={
//                     inView
//                       ? { opacity: 1, scale: 1 }
//                       : { opacity: 0, scale: 0.95 }
//                   }
//                   transition={{ duration: 0.5 }}
//                   className="w-full object-cover px-5"
//                 />
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </motion.section>
//   );
// };

// export default ProjectDetailsPage;

// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { projectsData } from "@/constants/projectData";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Container Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

// Item Variants for staggered animations
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectDetailsPage = () => {
  const { projectName } = useParams();
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  let currentProject;
  projectsData.forEach((project) => {
    if (project?.title === projectName) {
      currentProject = project;
    }
  });

  // const currentProject = projectsData.find(
  //   (project) => project.title === projectName
  // );

  // Add mouse move effect
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

  // Handle project not found
  if (!currentProject) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-[#1a1b26] text-white p-8"
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Project Not Found</h1>
          <p>Project not found. URL parameter: {projectName}</p>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-[#111827] text-white p-8 mt-20"
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
      <div className="max-w-5xl mx-auto">
        {/* Back Button with Hover Animation */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            onClick={() => router.push("/projects")}
          >
            <ArrowLeft size={20} />
            <p className="text-gray-300">Back to Projects</p>
          </motion.button>
        </motion.div>

        {/* Header with Title and Underline */}
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center mb-6"
        >
          <div className="w-full">
            <h1 className="text-4xl font-bold">{currentProject?.title}</h1>
          </div>
          <motion.div
            className="flex gap-4 ml-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href={currentProject?.liveLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="hover:opacity-80 transition-opacity"
            >
              <ExternalLink size={24} />
            </motion.a>
            <motion.a
              href={currentProject?.githubLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="hover:opacity-80 transition-opacity"
            >
              <Github size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="h-1 w-full bg-white origin-left "
        />

        <motion.div variants={itemVariants} className="mb-12 mt-12">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2 px-5 mt-5">
            {currentProject?.tags?.map((tag, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className="px-4 py-1 bg-[#0E78F9] rounded-full text-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Summary</h2>
          <div className="space-y-4 text-gray-300 px-6">
            <motion.p variants={itemVariants}>
              {currentProject?.description}
            </motion.p>
            {currentProject?.summary && (
              <motion.p variants={itemVariants}>
                {currentProject?.summary}
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Images Section with Scroll-Based Animations */}
        {currentProject?.images?.map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">{image.header}</h2>
            <div className="flex items-start p-5">
              <span className="mr-2">•</span>
              <p className="text-gray-300">{image.description}</p>
            </div>
            <motion.div
              className="rounded-lg overflow-hidden mb-20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={image.url}
                alt={image.header || "Project image"}
                className="w-full object-cover px-5"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectDetailsPage;
