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

const Hero = () => {
  const [showSocials, setShowSocials] = useState(false);
  const router = useRouter();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white px-4 py-16 relative overflow-hidden">
      <div className="max-w-6xl w-full mx-auto space-y-8 px-10 md:px-0 relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          <div className="space-y-6 lg:max-w-[60%]">
            <div className="space-y-2">
              <TypeAnimation
                sequence={["Sagar", 1000, "Sagar Manchakatla", 2000]}
                wrapper="h1"
                speed={50}
                className="text-5xl md:text-7xl font-bold animate-fadeInLeft"
                repeat={Infinity}
                style={{ display: "inline-block" }}
              />
            </div>

            <h2 className="text-xl md:text-2xl text-white font-medium animate-fadeInLeft delay-200">
              Engineer and Full Stack Web Developer
            </h2>

            <p className="text-base md:text-lg text-[#AEAAAA] leading-relaxed animate-fadeInLeft delay-400">
              Strong engineering professional, pursuing Bachelor of Engineering
              focused in Computer Engineering from Thadomal Shahani Engineering
              College with a strong foundation in computer science principles,
              programming, and problem-solving. Through my coursework and
              hands-on projects, I have gained valuable experience in software
              development.
            </p>

            <div className="flex flex-wrap gap-4 lg:hidden">
              <button
                className="px-4 py-3 bg-gray-200 rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-300 transition-colors animate-bounceInDown delay-[100ms]"
                onClick={() =>
                  router.push("https://github.com/sagarmanchakatla")
                }
              >
                <FiGithub className="text-lg" />
                Github
              </button>
              <button
                className="px-4 py-3 bg-[#e4a853] rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#d69b43] transition-colors animate-bounceInDown delay-[200ms]"
                onClick={() =>
                  router.push(
                    "https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284"
                  )
                }
              >
                <FaLinkedinIn className="text-lg" />
                LinkedIn
              </button>
              <button
                className="px-4 py-3 bg-[#0E78F9] rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#1e88e5] transition-colors animate-bounceInDown delay-[300ms]"
                onClick={() => router.push("/pdfs/resume")}
              >
                <IoDocumentTextOutline className="text-lg" />
                Resume
              </button>
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
              <button
                className="px-4 py-3 bg-gray-200 rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-300 transition-colors animate-bounceInDown delay-[100ms]"
                onClick={() =>
                  router.push("https://github.com/sagarmanchakatla")
                }
              >
                <FiGithub className="text-lg" />
                Github
              </button>

              <button
                className="px-4 py-3 bg-[#e4a853] rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#d69b43] transition-colors animate-bounceInDown delay-[200ms]"
                onClick={() =>
                  router.push(
                    "https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284"
                  )
                }
              >
                <FaLinkedinIn className="text-lg" />
                LinkedIn
              </button>

              <button
                className="px-4 py-3 bg-[#ff7043] rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#f4683f] transition-colors animate-bounceInDown delay-[300ms]"
                onClick={() => router.push("/projects")}
              >
                <BsKanban className="text-lg" />
                Projects
              </button>

              <button
                className="px-4 py-3 bg-[#2196f3] rounded-lg text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#1e88e5] transition-colors animate-bounceInDown delay-[400ms]"
                onClick={() => router.push("/pdfs/resume")}
              >
                <IoDocumentTextOutline className="text-lg" />
                Resume
              </button>

              <button
                className="px-4 py-3 bg-[#424242] rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#383838] transition-colors animate-bounceInDown delay-[500ms]"
                onClick={() => router.push("/skills")}
              >
                <GiSkills className="text-lg" />
                Skills
              </button>

              <div className="relative">
                <button
                  className="w-full px-4 py-3 bg-[#4a148c] rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#3a1078] transition-colors animate-bounceInDown delay-[500ms]"
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
                    <button
                      className="w-full px-4 py-3 text-white font-medium text-sm flex items-center gap-2 hover:bg-[#3a1078] transition-colors"
                      onClick={() =>
                        router.push("https://instagram.com/sagar_manchakatla")
                      }
                    >
                      <FaInstagram className="text-lg" />
                      Instagram
                    </button>
                    <button
                      className="w-full px-4 py-3 text-white font-medium text-sm flex items-center gap-2 hover:bg-[#3a1078]transition-colors"
                      onClick={() =>
                        router.push("mailto:sagarmanchakatla@gmail.com")
                      }
                    >
                      <MdEmail className="text-lg" />
                      Mail
                    </button>
                    <button className="w-full px-4 py-3 text-white font-medium text-sm flex items-center gap-2 hover:bg-[#3a1078] transition-colors">
                      <FaTwitter className="text-lg" />
                      Twitter
                    </button>
                    <button
                      className="w-full px-4 py-3 text-white font-medium text-sm flex items-center gap-2 hover:bg-[#3a1078] transition-colors"
                      onClick={() =>
                        router.push(
                          "https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284"
                        )
                      }
                    >
                      <FaLinkedinIn className="text-lg" />
                      LinkedIn
                    </button>
                  </div>
                )}
              </div>

              <button
                className="px-4 py-3 bg-[#9c27b0] rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#8e24aa] transition-colors col-span-2 animate-bounceInDown delay-[600ms]"
                onClick={() => router.push("/blog")}
              >
                <FaBlog className="text-lg" />
                Blogs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
