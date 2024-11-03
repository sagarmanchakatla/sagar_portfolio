// // "use client";

// // import React, { useState } from "react";
// // import { FiGithub } from "react-icons/fi";
// // import { FaLinkedinIn, FaBlog, FaInstagram, FaTwitter } from "react-icons/fa";
// // import { IoDocumentTextOutline } from "react-icons/io5";
// // import { BsKanban } from "react-icons/bs";
// // import { GiSkills } from "react-icons/gi";
// // import { IoIosArrowDown } from "react-icons/io";
// // import { MdEmail } from "react-icons/md";
// // import { TypeAnimation } from "react-type-animation";
// // import { MdAppsOutage } from "react-icons/md";

// // const Hero = () => {
// //   const [showSocials, setShowSocials] = useState(false);

// //   return (
// //     <section className="min-h-screen flex flex-col justify-center items-center bg-[#111827] text-white px-4 py-16">
// //       <div className="max-w-6xl w-full mx-auto space-y-8 px-10 md:px-0">
// //         <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
// //           <div className="space-y-6 lg:max-w-[60%]">
// //             <div className="space-y-2">
// //               <TypeAnimation
// //                 sequence={["Sagar", 1000, "Sagar Manchakatla", 2000]}
// //                 wrapper="h1"
// //                 speed={50}
// //                 className="text-5xl md:text-7xl font-bold animate-fadeInLeft"
// //                 repeat={Infinity}
// //                 style={{ display: "inline-block" }}
// //               />
// //             </div>

// //             <h2 className="text-xl md:text-2xl text-white font-medium animate-fadeInLeft delay-200">
// //               Aspiring Engineer and Full Stack Web Developer
// //             </h2>

// //             <p className="text-base md:text-lg text-[#AEAAAA] leading-relaxed animate-fadeInLeft delay-400">
// //               Strong engineering professional, pursuing Bachelor of Engineering
// //               focused in Computer Engineering from Thadomal Shahani Engineering
// //               College with a strong foundation in computer science principles,
// //               programming, and problem-solving. Through my coursework and
// //               hands-on projects, I have gained valuable experience in software
// //               development.
// //             </p>

// //             <div className="flex flex-wrap gap-4 lg:hidden">
// //               <button className="px-4 py-3 bg-gray-200 rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-300 transition-colors animate-bounceInDown delay-[100ms]">
// //                 <FiGithub className="text-lg" />
// //                 Github
// //               </button>
// //               <button className="px-4 py-3 bg-[#e4a853] rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#d69b43] transition-colors animate-bounceInDown delay-[200ms]">
// //                 <FaLinkedinIn className="text-lg" />
// //                 LinkedIn
// //               </button>
// //               <button className="px-4 py-3 bg-[#0E78F9] rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#1e88e5] transition-colors animate-bounceInDown delay-[300ms]">
// //                 <IoDocumentTextOutline className="text-lg" />
// //                 Resume
// //               </button>
// //             </div>

// //             <div className="animate-bounce flex gap-2 items-center">
// //               <p className="text-sm text-gray-500 uppercase tracking-wider">
// //                 scroll more
// //               </p>
// //               <IoIosArrowDown className="text-gray-500" />
// //             </div>
// //           </div>

// //           <div className="hidden lg:block w-[35%] py-20 ml-10">
// //             <div className="grid grid-cols-2 gap-4">
// //               <button className="px-4 py-3 bg-gray-200 rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-300 transition-colors animate-bounceInDown delay-[100ms]">
// //                 <FiGithub className="text-lg" />
// //                 Github
// //               </button>

// //               <button className="px-4 py-3 bg-[#e4a853] rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#d69b43] transition-colors animate-bounceInDown delay-[200ms]">
// //                 <FaLinkedinIn className="text-lg" />
// //                 LinkedIn
// //               </button>

// //               <button className="px-4 py-3 bg-[#ff7043] rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#f4683f] transition-colors animate-bounceInDown delay-[300ms]">
// //                 <BsKanban className="text-lg" />
// //                 Projects
// //               </button>

// //               <button className="px-4 py-3 bg-[#2196f3] rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#1e88e5] transition-colors animate-bounceInDown delay-[400ms]">
// //                 <IoDocumentTextOutline className="text-lg" />
// //                 Resume
// //               </button>

// //               <button className="px-4 py-3 bg-[#424242] rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#383838] transition-colors animate-bounceInDown delay-[500ms]">
// //                 <GiSkills className="text-lg" />
// //                 Skills
// //               </button>

// //               <div className="relative">
// //                 <button
// //                   className="w-full px-4 py-3 bg-[#4a148c] rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#3a1078] transition-colors animate-bounceInDown delay-[500ms]"
// //                   onClick={() => setShowSocials(!showSocials)}
// //                 >
// //                   {/* <FaLinkedinIn className="text-lg" /> */}
// //                   <MdAppsOutage className="text-lg" />
// //                   Socials
// //                   <IoIosArrowDown
// //                     className={`transition-transform ${
// //                       showSocials ? "rotate-180" : ""
// //                     }`}
// //                   />
// //                 </button>

// //                 {showSocials && (
// //                   <div className="absolute top-full left-0 w-full mt-2 bg-[#4a148c] rounded-lg shadow-lg overflow-hidden z-10">
// //                     <button className="w-full px-4 py-3 text-white font-medium text-sm flex items-center gap-2 hover:bg-[#3a1078] transition-colors">
// //                       <FaInstagram className="text-lg" />
// //                       Instagram
// //                     </button>
// //                     <button className="w-full px-4 py-3 text-white font-medium text-sm flex items-center gap-2 hover:bg-[#3a1078]transition-colors">
// //                       <MdEmail className="text-lg" />
// //                       Mail
// //                     </button>
// //                     <button className="w-full px-4 py-3 text-white font-medium text-sm flex items-center gap-2 hover:bg-[#3a1078] transition-colors">
// //                       <FaTwitter className="text-lg" />
// //                       Twitter
// //                     </button>
// //                     <button className="w-full px-4 py-3 text-white font-medium text-sm flex items-center gap-2 hover:bg-[#3a1078] transition-colors">
// //                       <FaLinkedinIn className="text-lg" />
// //                       LinkedIn
// //                     </button>
// //                   </div>
// //                 )}
// //               </div>

// //               <button className="px-4 py-3 bg-[#9c27b0] rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#8e24aa] transition-colors col-span-2 animate-bounceInDown delay-[600ms]">
// //                 <FaBlog className="text-lg" />
// //                 Blogs
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { FiGithub } from "react-icons/fi";
// import { FaLinkedinIn, FaBlog, FaInstagram, FaTwitter } from "react-icons/fa";
// import { IoDocumentTextOutline } from "react-icons/io5";
// import { BsKanban } from "react-icons/bs";
// import { GiSkills } from "react-icons/gi";
// import { IoIosArrowDown } from "react-icons/io";
// import { MdEmail } from "react-icons/md";
// import { TypeAnimation } from "react-type-animation";
// import { MdAppsOutage } from "react-icons/md";
// import { useRouter } from "next/navigation";

// const Hero = () => {
//   const [showSocials, setShowSocials] = useState(false);
//   const router = useRouter();
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
//     <section
//       ref={heroRef}
//       className="min-h-screen flex flex-col justify-center items-center bg-[#111827] text-white px-4 py-16 relative overflow-hidden"
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
//       {/* Rest of the component remains unchanged */}
//       <div className="max-w-6xl w-full mx-auto space-y-8 px-10 md:px-0 relative z-10">
//         <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
//           <div className="space-y-6 lg:max-w-[60%]">
//             <div className="space-y-2">
//               <TypeAnimation
//                 sequence={["Sagar", 1000, "Sagar Manchakatla", 2000]}
//                 wrapper="h1"
//                 speed={50}
//                 className="text-5xl md:text-7xl font-bold animate-fadeInLeft"
//                 repeat={Infinity}
//                 style={{ display: "inline-block" }}
//               />
//             </div>

//             <h2 className="text-xl md:text-2xl text-white font-medium animate-fadeInLeft delay-200">
//               Aspiring Engineer and Full Stack Web Developer
//             </h2>

//             <p className="text-base md:text-lg text-[#AEAAAA] leading-relaxed animate-fadeInLeft delay-400">
// Strong engineering professional, pursuing Bachelor of Engineering
// focused in Computer Engineering from Thadomal Shahani Engineering
// College with a strong foundation in computer science principles,
// programming, and problem-solving. Through my coursework and
// hands-on projects, I have gained valuable experience in software
// development.
//             </p>

//             <div className="flex flex-wrap gap-4 lg:hidden">
//               <button
//                 className="px-4 py-3 bg-gray-200 rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-300 transition-colors animate-bounceInDown delay-[100ms]"
//                 onClick={() =>
//                   router.push("https://github.com/sagarmanchakatla")
//                 }
//               >
//                 <FiGithub className="text-lg" />
//                 Github
//               </button>
//               <button
//                 className="px-4 py-3 bg-[#e4a853] rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#d69b43] transition-colors animate-bounceInDown delay-[200ms]"
//                 onClick={() =>
//                   router.push(
//                     "https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284"
//                   )
//                 }
//               >
//                 <FaLinkedinIn className="text-lg" />
//                 LinkedIn
//               </button>
//               <button
//                 className="px-4 py-3 bg-[#0E78F9] rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#1e88e5] transition-colors animate-bounceInDown delay-[300ms]"
//                 onClick={() => router.push("/pdfs/resume")}
//               >
//                 <IoDocumentTextOutline className="text-lg" />
//                 Resume
//               </button>
//             </div>

//             <div className="animate-bounce flex gap-2 items-center">
//               <p className="text-sm text-gray-500 uppercase tracking-wider">
//                 scroll more
//               </p>
//               <IoIosArrowDown className="text-gray-500" />
//             </div>
//           </div>

//           <div className="hidden lg:block w-[35%] py-20 ml-10">
//             <div className="grid grid-cols-2 gap-4">
//               <button
//                 className="px-4 py-3 bg-gray-200 rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-300 transition-colors animate-bounceInDown delay-[100ms]"
//                 onClick={() =>
//                   router.push("https://github.com/sagarmanchakatla")
//                 }
//               >
//                 <FiGithub className="text-lg" />
//                 Github
//               </button>

//               <button
//                 className="px-4 py-3 bg-[#e4a853] rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#d69b43] transition-colors animate-bounceInDown delay-[200ms]"
//                 onClick={() =>
//                   router.push(
//                     "https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284"
//                   )
//                 }
//               >
//                 <FaLinkedinIn className="text-lg" />
//                 LinkedIn
//               </button>

//               <button
//                 className="px-4 py-3 bg-[#ff7043] rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#f4683f] transition-colors animate-bounceInDown delay-[300ms]"
//                 onClick={() => router.push("/projects")}
//               >
//                 <BsKanban className="text-lg" />
//                 Projects
//               </button>

//               <button
//                 className="px-4 py-3 bg-[#2196f3] rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#1e88e5] transition-colors animate-bounceInDown delay-[400ms]"
//                 onClick={() => router.push("/pdfs/resume")}
//               >
//                 <IoDocumentTextOutline className="text-lg" />
//                 Resume
//               </button>

//               <button
//                 className="px-4 py-3 bg-[#424242] rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#383838] transition-colors animate-bounceInDown delay-[500ms]"
//                 onClick={() => router.push("/skills")}
//               >
//                 <GiSkills className="text-lg" />
//                 Skills
//               </button>

//               <div className="relative">
//                 <button
//                   className="w-full px-4 py-3 bg-[#4a148c] rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#3a1078] transition-colors animate-bounceInDown delay-[500ms]"
//                   onClick={() => setShowSocials(!showSocials)}
//                 >
//                   <MdAppsOutage className="text-lg" />
//                   Socials
//                   <IoIosArrowDown
//                     className={`transition-transform ${
//                       showSocials ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {showSocials && (
//                   <div className="absolute top-full left-0 w-full mt-2 bg-[#4a148c] rounded-lg shadow-lg overflow-hidden z-10">
//                     <button
//                       className="w-full px-4 py-3 text-white font-medium text-sm flex items-center gap-2 hover:bg-[#3a1078] transition-colors"
//                       onClick={() =>
//                         router.push("https://instagram.com/sagar_manchakatla")
//                       }
//                     >
//                       <FaInstagram className="text-lg" />
//                       Instagram
//                     </button>
//                     <button
//                       className="w-full px-4 py-3 text-white font-medium text-sm flex items-center gap-2 hover:bg-[#3a1078]transition-colors"
//                       onClick={() =>
//                         router.push("mailto:sagarmanchakatla@gmail.com")
//                       }
//                     >
//                       <MdEmail className="text-lg" />
//                       Mail
//                     </button>
//                     <button className="w-full px-4 py-3 text-white font-medium text-sm flex items-center gap-2 hover:bg-[#3a1078] transition-colors">
//                       <FaTwitter className="text-lg" />
//                       Twitter
//                     </button>
//                     <button
//                       className="w-full px-4 py-3 text-white font-medium text-sm flex items-center gap-2 hover:bg-[#3a1078] transition-colors"
//                       onClick={() =>
//                         router.push(
//                           "https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284"
//                         )
//                       }
//                     >
//                       <FaLinkedinIn className="text-lg" />
//                       LinkedIn
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <button className="px-4 py-3 bg-[#9c27b0] rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#8e24aa] transition-colors col-span-2 animate-bounceInDown delay-[600ms]">
//                 <FaBlog className="text-lg" />
//                 Blogs
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import React, { useState, useEffect, useRef, memo } from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaBlog, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsKanban } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { MdEmail, MdAppsOutage } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/navigation";

// Memoized button components for better performance
const SocialButton = memo(({ icon: Icon, text, onClick, className }) => (
  <button
    className={`px-4 py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-colors ${className}`}
    onClick={onClick}
  >
    <Icon className="text-lg" />
    {text}
  </button>
));

const Hero = () => {
  const [showSocials, setShowSocials] = useState(false);
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const throttleRef = useRef(null);

  // Throttled mouse move handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!throttleRef.current) {
        throttleRef.current = setTimeout(() => {
          if (heroRef.current) {
            const rect = heroRef.current.getBoundingClientRect();
            setMousePosition({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          }
          throttleRef.current = null;
        }, 16); // Approximately 60fps
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      return () => {
        heroElement.removeEventListener("mousemove", handleMouseMove);
        if (throttleRef.current) {
          clearTimeout(throttleRef.current);
        }
      };
    }
  }, []);

  // Predefined social links
  const socialLinks = {
    github: "https://github.com/sagarmanchakatla",
    linkedin: "https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284",
    instagram: "https://instagram.com/sagar_manchakatla",
    email: "mailto:sagarmanchakatla@gmail.com",
  };

  // Background gradient style
  const backgroundStyle = {
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
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center bg-[#111827] text-white px-4 py-16 relative overflow-hidden"
      style={backgroundStyle}
    >
      <div className="max-w-6xl w-full mx-auto space-y-8 px-10 md:px-0 relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          <div className="space-y-6 lg:max-w-[60%]">
            <div className="space-y-2">
              <TypeAnimation
                sequence={["Sagar", 1000, "Sagar Manchakatla", 2000]}
                wrapper="h1"
                speed={50}
                className="text-5xl md:text-7xl font-bold"
                repeat={Infinity}
                style={{ display: "inline-block" }}
                preRenderFirstString={true}
              />
            </div>

            <h2 className="text-xl md:text-2xl text-white font-medium">
              Aspiring Engineer and Full Stack Web Developer
            </h2>

            <p className="text-base md:text-lg text-[#AEAAAA] leading-relaxed">
              Strong engineering professional, pursuing Bachelor of Engineering
              focused in Computer Engineering from Thadomal Shahani Engineering
              College with a strong foundation in computer science principles,
              programming, and problem-solving. Through my coursework and
              hands-on projects, I have gained valuable experience in software
              development.
            </p>

            {/* Mobile Buttons */}
            <div className="flex flex-wrap gap-4 lg:hidden">
              <SocialButton
                icon={FiGithub}
                text="Github"
                onClick={() => router.push(socialLinks.github)}
                className="bg-gray-200 text-black hover:bg-gray-300"
              />
              <SocialButton
                icon={FaLinkedinIn}
                text="LinkedIn"
                onClick={() => router.push(socialLinks.linkedin)}
                className="bg-[#e4a853] text-black hover:bg-[#d69b43]"
              />
              <SocialButton
                icon={IoDocumentTextOutline}
                text="Resume"
                onClick={() => router.push("/pdfs/resume")}
                className="bg-[#0E78F9] text-black hover:bg-[#1e88e5]"
              />
            </div>

            <div className="animate-bounce flex gap-2 items-center">
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                scroll more
              </p>
              <IoIosArrowDown className="text-gray-500" />
            </div>
          </div>

          {/* Desktop Buttons Grid */}
          <div className="hidden lg:block w-[35%] py-20 ml-10">
            <div className="grid grid-cols-2 gap-4">
              <SocialButton
                icon={FiGithub}
                text="Github"
                onClick={() => router.push(socialLinks.github)}
                className="bg-gray-200 text-black hover:bg-gray-300"
              />
              <SocialButton
                icon={FaLinkedinIn}
                text="LinkedIn"
                onClick={() => router.push(socialLinks.linkedin)}
                className="bg-[#e4a853] text-black hover:bg-[#d69b43]"
              />
              <SocialButton
                icon={BsKanban}
                text="Projects"
                onClick={() => router.push("/projects")}
                className="bg-[#ff7043] text-black hover:bg-[#f4683f]"
              />
              <SocialButton
                icon={IoDocumentTextOutline}
                text="Resume"
                onClick={() => router.push("/pdfs/resume")}
                className="bg-[#2196f3] text-black hover:bg-[#1e88e5]"
              />
              <SocialButton
                icon={GiSkills}
                text="Skills"
                onClick={() => router.push("/skills")}
                className="bg-[#424242] text-white hover:bg-[#383838]"
              />

              <div className="relative">
                <button
                  className="w-full px-4 py-3 bg-[#4a148c] rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#3a1078] transition-colors"
                  onClick={() => setShowSocials(!showSocials)}
                >
                  <MdAppsOutage className="text-lg" />
                  Socials
                  <IoIosArrowDown
                    className={`transition-transform ${
                      showSocials ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showSocials && (
                  <div className="absolute top-full left-0 w-full mt-2 bg-[#4a148c] rounded-lg shadow-lg overflow-hidden z-10">
                    <SocialButton
                      icon={FaInstagram}
                      text="Instagram"
                      onClick={() => router.push(socialLinks.instagram)}
                      className="w-full hover:bg-[#3a1078] text-white"
                    />
                    <SocialButton
                      icon={MdEmail}
                      text="Mail"
                      onClick={() => router.push(socialLinks.email)}
                      className="w-full hover:bg-[#3a1078] text-white"
                    />
                    <SocialButton
                      icon={FaTwitter}
                      text="Twitter"
                      onClick={() => router.push("#")}
                      className="w-full hover:bg-[#3a1078] text-white"
                    />
                    <SocialButton
                      icon={FaLinkedinIn}
                      text="LinkedIn"
                      onClick={() => router.push(socialLinks.linkedin)}
                      className="w-full hover:bg-[#3a1078] text-white"
                    />
                  </div>
                )}
              </div>

              <SocialButton
                icon={FaBlog}
                text="Blogs"
                onClick={() => router.push("/blogs")}
                className="bg-[#9c27b0] text-white hover:bg-[#8e24aa] col-span-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
