import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] py-7 text-gray-400 ">
      <div className="container mx-auto flex items-center justify-center space-x-4">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-gray-400 hover:text-white" size={20} />
        </a>
        <button aria-label="Close" className="text-gray-400 hover:text-white">
          <FaXTwitter size={20} />{" "}
        </button>
        <a href="mailto:someone@example.com">
          <FaEnvelope className="text-gray-400 hover:text-white" size={20} />
        </a>
      </div>
      <div className="text-center mt-2 text-gray-400 text-base">
        © 2024 Sagar Manchakatla. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
