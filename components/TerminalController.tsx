"use client";

import React, { useRef, useEffect } from "react";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";

const TerminalController = () => {
  const terminalRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Prevent default touch behaviors
      const preventScroll = (e: TouchEvent) => {
        const target = e.target as HTMLElement;
        const terminalWrapper = container.querySelector(
          ".react-terminal-wrapper"
        );

        // Only prevent default if the touch is within the terminal
        if (terminalWrapper && terminalWrapper.contains(target)) {
          e.preventDefault();
        }
      };

      // Prevent scroll and zoom
      const preventZoom = (e: TouchEvent) => {
        if (e.touches.length > 1) {
          e.preventDefault();
        }
      };

      // Disable double-tap zoom
      const disableDoubleTapZoom = (e: TouchEvent) => {
        const now = new Date().getTime();
        const timesince = now - (window as any).lastTouch;

        if (timesince < 600 && timesince > 0) {
          e.preventDefault();
        }

        (window as any).lastTouch = now;
      };

      // Add event listeners
      document.addEventListener("touchstart", preventScroll, {
        passive: false,
      });
      document.addEventListener("touchmove", preventScroll, { passive: false });
      document.addEventListener("touchend", preventScroll, { passive: false });
      document.addEventListener("touchstart", preventZoom, { passive: false });
      document.addEventListener("touchmove", disableDoubleTapZoom, {
        passive: false,
      });

      return () => {
        // Clean up event listeners
        document.removeEventListener("touchstart", preventScroll);
        document.removeEventListener("touchmove", preventScroll);
        document.removeEventListener("touchend", preventScroll);
        document.removeEventListener("touchstart", preventZoom);
        document.removeEventListener("touchmove", disableDoubleTapZoom);
      };
    }
  }, []);

  const commands = {
    // ... (your existing commands remain the same)
  };

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center min-h-[80vh] p-10"
      // Additional inline styles to prevent scrolling
      style={{
        position: "relative",
        overflow: "hidden",
        WebkitOverflowScrolling: "touch",
        touchAction: "none",
      }}
    >
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-white mb-6">My Terminal</h1>
        <div
          className="mt-10 h-[500px] text-green-500 shadow-lg"
          // Additional touch prevention
          style={{
            touchAction: "none",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        >
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
