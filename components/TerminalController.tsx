"use client";

import React, { useRef, useEffect } from "react";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";

const TerminalController = () => {
  const terminalRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleTouchMove = (e: TouchEvent) => {
        // Prevent scrolling only if the terminal is being interacted with
        const terminalElement = container.querySelector(
          ".react-terminal-wrapper"
        );
        if (terminalElement && terminalElement.contains(e.target as Node)) {
          e.preventDefault();
        }
      };

      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });

      return () => {
        document.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, []);

  const commands = {
    help: (
      <div className="font-light">
        <div>Available commands:</div>
        <div>
          <strong>help</strong> - Show available commands
        </div>
        <div>
          <strong>about</strong> - Show about information
        </div>
        <div>
          <strong>skills</strong> - Show skills information
        </div>
        <div>
          <strong>contact</strong> - Show contact information
        </div>
        <div>
          <strong>clear</strong> - Clear the screen
        </div>
      </div>
    ),
    about:
      "I am a dedicated student currently learning Full Stack Web Development and exploring the exciting field of Artificial Intelligence and Machine Learning.",
    skills: () => (
      <div>
        <div>
          <strong>Frontend:</strong> HTML, CSS, Bootstrap, Tailwind, Shadcn
          JavaScript, ReactJS
        </div>
        <div>
          <strong>Backend:</strong> NodeJS, Express Python, MongoDB
        </div>
        <div>
          <strong>Framework:</strong>NextJS
        </div>
      </div>
    ),
    contact: () => "You can reach me at sagarmanchakatla01@gmail.com",
    clear: () => {
      if (terminalRef.current && terminalRef.current.clearStdout) {
        terminalRef.current.clearStdout();
      }
      return "";
    },
  };

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center min-h-[80vh] p-10"
    >
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-white mb-6">My Terminal</h1>
        <div className="mt-10 h-[500px] text-green-500 shadow-lg">
          <TerminalContextProvider>
            <ReactTerminal
              ref={terminalRef}
              commands={commands}
              welcomeMessage={
                'Welcome to my terminal! Type "help" to see available commands.'
              }
              promptSymbol=">"
              themes={{
                custom: {
                  themeBGColor: "#1e293b",
                  themeToolbarColor: "#1e293b",
                  themeColor: "white",
                  themePromptColor: "white",
                },
              }}
              theme="custom"
            />
          </TerminalContextProvider>
        </div>
      </div>
    </div>
  );
};

export default TerminalController;
