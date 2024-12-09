"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IoHomeOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { name: "Home", icon: IoHomeOutline, route: "/" },
    { name: "Skills", icon: GiSkills, route: "/skills" },
    { name: "Projects", icon: GoProjectRoadmap, route: "/projects" },
    { name: "Blog", icon: GoProjectRoadmap, route: "/blog" },
    // { name: "Contact", icon: IoMailOutline, route: "/contact" },
  ];

  return (
    <nav className="w-full h-[80px] bg-[#1e293b] flex items-center justify-center fixed top-0 z-50">
      <div className="text-white w-[85%] h-full flex items-center justify-between text-[20px] relative">
        <button
          className="font-bold text-2xl sm:text-2xl cursor-pointer"
          onClick={() => router.push("/")}
        >
          sagar manchakatla
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex ">
          <ul className="flex gap-7">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="cursor-pointer hover:text-[#0E78F9] transition-colors duration-300 text-[16px]"
                onClick={() => router.push(item.route)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer p-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>

        {/* Mobile Sidebar Menu */}
        <motion.div
          className="fixed top-0 left-0 h-full w-[280px] bg-[#1e293b] z-50 md:hidden flex flex-col"
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? "0%" : "-100%" }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button className="text-white p-2" onClick={() => setIsOpen(false)}>
              <IoCloseOutline size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <motion.ul
            className="flex flex-col gap-6 px-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            {menuItems.map((item) => (
              <motion.li
                key={item.name}
                className="group"
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  router.push(item.route);
                  setIsOpen(false);
                }}
              >
                <div
                  className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300
                  ${
                    item.name === "Home"
                      ? "bg-[#0E78F9] bg-opacity-20"
                      : "hover:bg-white hover:bg-opacity-5"
                  }`}
                  // onClick={() => router.push(item.route)}
                >
                  <item.icon
                    size={20}
                    className={`${
                      item.name === "Home" ? "text-blue-400" : "text-white"
                    }`}
                  />
                  <span
                    className={`text-[16px] ${
                      item.name === "Home" ? "text-blue-400" : "text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Nav;
