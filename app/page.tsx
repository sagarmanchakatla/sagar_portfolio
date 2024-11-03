import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TerminalController from "@/components/TerminalController";
// import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <div>
      {/* <AnimatedBackground /> */}
      <Hero />
      <Skills />
      <Projects />
      <TerminalController />
      <Contact />
    </div>
  );
}
