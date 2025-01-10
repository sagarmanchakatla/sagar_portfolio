"use client";

import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaBlog, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsKanban } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { MdAppsOutage } from "react-icons/md";
import { useRouter } from "next/navigation";

import HyperText from "@/components/ui/hyper-text";

const HoverFillButton = ({
  children,
  onClick,
  className,
  fillColor = "bg-gray-300",
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  fillColor?: string;
}) => {
  return (
    <button
      className={`
        relative 
        px-4 py-3 
        rounded-lg 
        font-medium 
        text-sm 
        flex 
        items-center 
        justify-center 
        gap-2 
        transition-all 
        duration-300 
        overflow-hidden 
        group
        ${className}
      `}
      onClick={onClick}
    >
      <span
        className={`
          absolute 
          inset-0 
          ${fillColor} 
          transform 
          -translate-x-full 
          group-hover:translate-x-0 
          transition-transform 
          duration-300 
          ease-in-out 
          z-0
        `}
      ></span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

const Hero = () => {
  const [showSocials, setShowSocials] = useState(false);
  const router = useRouter();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white px-4 py-16 mt-10 md:mt-0 relative overflow-hidden">
      <div className="max-w-6xl w-full mx-auto space-y-8 px-10 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          <div className="space-y-6 lg:max-w-[60%]">
            <div className="space-y-2">
              {/* <TypeAnimation
                sequence={["Sagar", 1000, "Sagar Manchakatla", 2000]}
                wrapper="h1"
                speed={50}
                className="text-[37px] sm:text-[40px] md:text-7xl font-bold animate-fadeInLeft"
                repeat={Infinity}
                style={{ display: "inline-block" }}
              /> */}
              <HyperText className="text-[37px] sm:text-[40px] md:text-7xl font-bold ">Sagar Manchakatla</HyperText>
            </div>

            <h2 className="text-[15px] md:text-2xl text-white font-medium animate-fadeInLeft delay-200">
              Engineer and Full Stack Web Developer
            </h2>

            <p className="text-[13px] md:text-lg text-[#AEAAAA] leading-relaxed animate-fadeInLeft delay-400">
              Strong engineering professional, pursuing Bachelor of Engineering
              focused in Computer Engineering from Thadomal Shahani Engineering
              College with a strong foundation in computer science principles,
              programming, and problem-solving. Through my coursework and
              hands-on projects, I have gained valuable experience in software
              development.
            </p>

            <div className="flex flex-wrap gap-4 lg:hidden">
              <HoverFillButton
                onClick={() =>
                  router.push("https://github.com/sagarmanchakatla")
                }
                className="text-black bg-gray-200 hover:text-white"
                fillColor="bg-gray-500"
              >
                <FiGithub className="text-lg" />
                Github
              </HoverFillButton>
              <HoverFillButton
                onClick={() =>
                  router.push(
                    "https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284"
                  )
                }
                className="text-black bg-[#deac66] hover:text-white"
                fillColor="bg-[#dc7723]"
              >
                <FaLinkedinIn className="text-lg" />
                LinkedIn
              </HoverFillButton>
              <HoverFillButton
                onClick={() => router.push("/pdfs/resume")}
                className="text-black bg-[#0E78F9] hover:text-white"
                fillColor="bg-[#2069df]"
              >
                <IoDocumentTextOutline className="text-lg" />
                Resume
              </HoverFillButton>
            </div>

            <div className="animate-bounce flex gap-2 items-center">
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                scroll more
              </p>
              <IoIosArrowDown className="text-gray-500" />
            </div>
          </div>

          <div className="hidden lg:block w-[35%] py-20 ml-10">
            <div className="grid grid-cols-2 gap-4">
              <HoverFillButton
                onClick={() =>
                  router.push("https://github.com/sagarmanchakatla")
                }
                className="text-black bg-gray-200 hover:text-white"
                fillColor="bg-gray-500"
              >
                <FiGithub className="text-lg" />
                Github
              </HoverFillButton>

              <HoverFillButton
                onClick={() =>
                  router.push(
                    "https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284"
                  )
                }
                className="text-black bg-[#e4a853] hover:text-white"
                fillColor="bg-[#dc7723]"
              >
                <FaLinkedinIn className="text-lg" />
                LinkedIn
              </HoverFillButton>

              <HoverFillButton
                onClick={() => router.push("/projects")}
                className="text-black bg-[#ff7043] hover:text-white"
                fillColor="bg-[#e3441c]"
              >
                <BsKanban className="text-lg" />
                Projects
              </HoverFillButton>

              <HoverFillButton
                onClick={() => router.push("/pdfs/resume")}
                className="text-black bg-[#2196f3] hover:text-white"
                fillColor="bg-[#2069df]"
              >
                <IoDocumentTextOutline className="text-lg" />
                Resume
              </HoverFillButton>

              <HoverFillButton
                onClick={() => router.push("/skills")}
                className="text-white bg-[#424242] hover:text-white"
                fillColor="bg-gray-500"
              >
                <GiSkills className="text-lg" />
                Skills
              </HoverFillButton>

              <div className="relative">
                <HoverFillButton
                  onClick={() => setShowSocials(!showSocials)}
                  className="text-white bg-[#4a148c] hover:text-white w-full"
                  fillColor="bg-[#3a1078]"
                >
                  <MdAppsOutage className="text-lg" />
                  Socials
                  <IoIosArrowDown
                    className={`transition-transform ${
                      showSocials ? "rotate-180" : ""
                    }`}
                  />
                </HoverFillButton>

                {showSocials && (
                  <div className="absolute top-full left-0 w-full mt-2 bg-[#4a148c] rounded-lg shadow-lg overflow-hidden z-10">
                    <HoverFillButton
                      onClick={() =>
                        router.push("https://instagram.com/sagar_manchakatla")
                      }
                      className="text-white w-full"
                      fillColor="bg-[#3a1078]"
                    >
                      <FaInstagram className="text-lg" />
                      Instagram
                    </HoverFillButton>
                    <HoverFillButton
                      onClick={() =>
                        router.push("mailto:sagarmanchakatla@gmail.com")
                      }
                      className="text-white w-full"
                      fillColor="bg-[#3a1078]"
                    >
                      <MdEmail className="text-lg" />
                      Mail
                    </HoverFillButton>
                    <HoverFillButton
                      onClick={() => router.push("https://x.com/Sagar_8745")}
                      className="text-white w-full"
                      fillColor="bg-[#3a1078]"
                    >
                      <FaTwitter className="text-lg" />
                      Twitter
                    </HoverFillButton>
                    <HoverFillButton
                      onClick={() =>
                        router.push(
                          "https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284"
                        )
                      }
                      className="text-white w-full"
                      fillColor="bg-[#dc7723]"
                    >
                      <FaLinkedinIn className="text-lg" />
                      LinkedIn
                    </HoverFillButton>
                  </div>
                )}
              </div>

              <HoverFillButton
                onClick={() => router.push("/blog")}
                className="text-white bg-[#9c27b0] hover:text-white col-span-2"
                fillColor="bg-[#8e24aa]"
              >
                <FaBlog className="text-lg" />
                Blogs
              </HoverFillButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


// "use client";

// import React, { useState } from "react";
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

// import { Engine, Render, World, Bodies, Body, Composite, Events } from 'matter-js';

// const HoverFillButton = ({
//   children,
//   onClick,
//   className,
//   fillColor = "bg-gray-300",
// }: {
//   children: React.ReactNode;
//   onClick: () => void;
//   className?: string;
//   fillColor?: string;
// }) => {
//   return (
//     <button
//       className={`
//         relative 
//         px-4 py-3 
//         rounded-lg 
//         font-medium  
//         text-sm 
//         flex 
//         items-center 
//         justify-center 
//         gap-2 
//         transition-all 
//         duration-300 
//         overflow-hidden 
//         group
//         ${className}
//       `}
//       onClick={onClick}
//     >
//       <span
//         className={`
//           absolute 
//           inset-0 
//           ${fillColor} 
//           transform 
//           -translate-x-full 
//           group-hover:translate-x-0 
//           transition-transform 
//           duration-300 
//           ease-in-out 
//           z-0
//         `}
//       ></span>
//       <span className="relative z-10 flex items-center gap-2">{children}</span>
//     </button>
//   );
// };

// const Hero = () => {
//   const [showSocials, setShowSocials] = useState(false);
//   const router = useRouter();

//   return (
//     <section className="min-h-screen flex flex-col justify-center items-center text-white px-4 py-16 mt-10 md:mt-0 relative overflow-hidden">
//       <div className="max-w-6xl w-full mx-auto space-y-8 px-10 md:px-10 relative z-10">
//         <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
//           <div className="space-y-6 lg:max-w-[60%]">
//             <div className="space-y-2">
//               <TypeAnimation
//                 sequence={["Sagar", 1000, "Sagar Manchakatla", 2000]}
//                 wrapper="h1"
//                 speed={50}
//                 className="text-[37px] sm:text-[40px] md:text-7xl font-bold animate-fadeInLeft"
//                 repeat={Infinity}
//                 style={{ display: "inline-block" }}
//               />
//             </div>

//             <h2 className="text-[15px] md:text-2xl text-white font-medium animate-fadeInLeft delay-200">
//               Engineer and Full Stack Web Developer
//             </h2>

//             <p className="text-[13px] md:text-lg text-[#AEAAAA] leading-relaxed animate-fadeInLeft delay-400">
//               Strong engineering professional, pursuing Bachelor of Engineering
//               focused in Computer Engineering from Thadomal Shahani Engineering
//               College with a strong foundation in computer science principles,
//               programming, and problem-solving. Through my coursework and
//               hands-on projects, I have gained valuable experience in software
//               development.
//             </p>

//             <div className="flex flex-wrap gap-4 lg:hidden">
//               <HoverFillButton
//                 onClick={() =>
//                   router.push("https://github.com/sagarmanchakatla")
//                 }
//                 className="text-black bg-gray-200 hover:text-white"
//                 fillColor="bg-gray-500"
//               >
//                 <FiGithub className="text-lg" />
//                 Github
//               </HoverFillButton>
//               <HoverFillButton
//                 onClick={() =>
//                   router.push(
//                     "https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284"
//                   )
//                 }
//                 className="text-black bg-[#deac66] hover:text-white"
//                 fillColor="bg-[#dc7723]"
//               >
//                 <FaLinkedinIn className="text-lg" />
//                 LinkedIn
//               </HoverFillButton>
//               <HoverFillButton
//                 onClick={() => router.push("/pdfs/resume")}
//                 className="text-black bg-[#0E78F9] hover:text-white"
//                 fillColor="bg-[#2069df]"
//               >
//                 <IoDocumentTextOutline className="text-lg" />
//                 Resume
//               </HoverFillButton>
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
//               <HoverFillButton
//                 onClick={() =>
//                   router.push("https://github.com/sagarmanchakatla")
//                 }
//                 className="text-black bg-gray-200 hover:text-white"
//                 fillColor="bg-gray-500"
//               >
//                 <FiGithub className="text-lg" />
//                 Github
//               </HoverFillButton>

//               <HoverFillButton
//                 onClick={() =>
//                   router.push(
//                     "https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284"
//                   )
//                 }
//                 className="text-black bg-[#e4a853] hover:text-white"
//                 fillColor="bg-[#dc7723]"
//               >
//                 <FaLinkedinIn className="text-lg" />
//                 LinkedIn
//               </HoverFillButton>

//               <HoverFillButton
//                 onClick={() => router.push("/projects")}
//                 className="text-black bg-[#ff7043] hover:text-white"
//                 fillColor="bg-[#e3441c]"
//               >
//                 <BsKanban className="text-lg" />
//                 Projects
//               </HoverFillButton>

//               <HoverFillButton
//                 onClick={() => router.push("/pdfs/resume")}
//                 className="text-black bg-[#2196f3] hover:text-white"
//                 fillColor="bg-[#2069df]"
//               >
//                 <IoDocumentTextOutline className="text-lg" />
//                 Resume
//               </HoverFillButton>

//               <HoverFillButton
//                 onClick={() => router.push("/skills")}
//                 className="text-white bg-[#424242] hover:text-white"
//                 fillColor="bg-gray-500"
//               >
//                 <GiSkills className="text-lg" />
//                 Skills
//               </HoverFillButton>

//               <div className="relative">
//                 <HoverFillButton
//                   onClick={() => setShowSocials(!showSocials)}
//                   className="text-white bg-[#4a148c] hover:text-white w-full"
//                   fillColor="bg-[#3a1078]"
//                 >
//                   <MdAppsOutage className="text-lg" />
//                   Socials
//                   <IoIosArrowDown
//                     className={`transition-transform ${
//                       showSocials ? "rotate-180" : ""
//                     }`}
//                   />
//                 </HoverFillButton>

//                 {showSocials && (
//                   <div className="absolute top-full left-0 w-full mt-2 bg-[#4a148c] rounded-lg shadow-lg overflow-hidden z-10">
//                     <HoverFillButton
//                       onClick={() =>
//                         router.push("https://instagram.com/sagar_manchakatla")
//                       }
//                       className="text-white w-full"
//                       fillColor="bg-[#3a1078]"
//                     >
//                       <FaInstagram className="text-lg" />
//                       Instagram
//                     </HoverFillButton>
//                     <HoverFillButton
//                       onClick={() =>
//                         router.push("mailto:sagarmanchakatla@gmail.com")
//                       }
//                       className="text-white w-full"
//                       fillColor="bg-[#3a1078]"
//                     >
//                       <MdEmail className="text-lg" />
//                       Mail
//                     </HoverFillButton>
//                     <HoverFillButton
//                       onClick={() => router.push("https://x.com/Sagar_8745")}
//                       className="text-white w-full"
//                       fillColor="bg-[#3a1078]"
//                     >
//                       <FaTwitter className="text-lg" />
//                       Twitter
//                     </HoverFillButton>
//                     <HoverFillButton
//                       onClick={() =>
//                         router.push(
//                           "https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284"
//                         )
//                       }
//                       className="text-white w-full"
//                       fillColor="bg-[#dc7723]"
//                     >
//                       <FaLinkedinIn className="text-lg" />
//                       LinkedIn
//                     </HoverFillButton>
//                   </div>
//                 )}
//               </div>

//               <HoverFillButton
//                 onClick={() => router.push("/blog")}
//                 className="text-white bg-[#9c27b0] hover:text-white col-span-2"
//                 fillColor="bg-[#8e24aa]"
//               >
//                 <FaBlog className="text-lg" />
//                 Blogs
//               </HoverFillButton>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
