"use client";
import React, { useEffect, useRef, useState } from "react";

const AnimatedBackground: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [gridSize, setGridSize] = useState({ cols: 0, rows: 0 });

  useEffect(() => {
    const updateGridSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const cellSize = 50; // Slightly larger cells

      setGridSize({
        cols: Math.ceil(width / cellSize) + 1,
        rows: Math.ceil(height / cellSize) + 1,
      });
    };

    updateGridSize();
    window.addEventListener("resize", updateGridSize);
    return () => window.removeEventListener("resize", updateGridSize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gridRef.current) return;

    const grid = gridRef.current;
    const rect = grid.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cells = grid.querySelectorAll(".grid-cell");
    cells.forEach((cell) => {
      const cellEl = cell as HTMLDivElement;
      const cellRect = cellEl.getBoundingClientRect();

      const distanceX = Math.abs(
        x - (cellRect.left - rect.left + cellRect.width / 2)
      );
      const distanceY = Math.abs(
        y - (cellRect.top - rect.top + cellRect.height / 2)
      );

      const maxDistance = 150; // Increased interaction radius
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      const opacity = Math.max(0, 1 - distance / maxDistance);
      cellEl.style.backgroundColor = `rgba(255, 255, 255, ${
        Math.pow(opacity, 2) * 0.1
      })`;
    });
  };

  const handleMouseLeave = () => {
    if (!gridRef.current) return;

    const cells = gridRef.current.querySelectorAll(".grid-cell");
    cells.forEach((cell) => {
      (cell as HTMLDivElement).style.backgroundColor =
        "rgba(255, 255, 255, 0.05)";
    });
  };

  return (
    <div
      ref={gridRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#111827]"
    >
      {gridSize.rows > 0 && gridSize.cols > 0 && (
        <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,50px)] grid-rows-[repeat(auto-fill,50px)] gap-0">
          {Array.from({ length: gridSize.rows * gridSize.cols }).map(
            (_, index) => (
              <div
                key={index}
                className="grid-cell w-[50px] h-[50px] border border-white/5"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  transition: "background-color 0.3s ease",
                }}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AnimatedBackground;
