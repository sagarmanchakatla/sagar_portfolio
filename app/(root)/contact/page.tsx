// "use client";
// import { useState, useEffect, useRef } from "react";

// const page = () => {
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
//       className="flex flex-col items-center min-h-screen bg-[#111827] p-10 mt-20"
//       style={{
//         background: `
//         radial-gradient(
//           500px circle at ${mousePosition.x}px ${mousePosition.y}px,
//           rgba(29, 78, 216, 0.20),
//           transparent 90%
//         ),
//         repeating-linear-gradient(
//           0deg,
//           rgba(255, 255, 255, 0.045) 0px,
//           rgba(255, 255, 255, 0.045) 2px,
//           transparent 2px,
//           transparent 18px
//         ),
//         repeating-linear-gradient(
//           90deg,
//           rgba(255, 255, 255, 0.045) 0px,
//           rgba(255, 255, 255, 0.045) 2px,
//           transparent 2px,
//           transparent 18px
//         )
//       `,
//       }}
//     >
//       <div className="max-w-lg w-full p-8 bg-slate-800 rounded-lg shadow-lg mt-10">
//         <h1 className="text-4xl font-bold text-center text-white mb-4">
//           Contact Me
//         </h1>
//         <p className="text-center text-gray-400 mb-8">
//           Please contact me directly at{" "}
//           <a
//             href="mailto:sagarmanchakatla01@gmail.com"
//             className="text-blue-300 underline"
//           >
//             sagarmanchakatla01@gmail.com
//           </a>{" "}
//           or through this form.
//         </p>

//         <form className="space-y-4">
//           <div className="flex space-x-4">
//             <div className="w-1/2">
//               <label className="block text-gray-400 mb-1">First Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your first name"
//                 className="w-full p-2 bg-slate-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div className="w-1/2">
//               <label className="block text-gray-400 mb-1">Last Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your last name"
//                 className="w-full p-2 bg-slate-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-gray-400 mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full p-2 bg-slate-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-400 mb-1">Message</label>
//             <textarea
//               placeholder="Enter your message"
//               rows="4"
//               className="w-full p-2 bg-slate-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 bg-[#0E78F9] text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default page;

import React from "react";
import Contact from "@/components/Contact";

const page = () => {
  return (
    <div className="  mt-24 ">
      <Contact />
    </div>
  );
};

export default page;
