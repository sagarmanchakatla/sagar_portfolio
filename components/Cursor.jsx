"use client";

import React, { useEffect, useRef, useState } from "react";

const GradientCursorTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isReady, setIsReady] = useState(false);
  const circlesRef = useRef([]);

  const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e",
  ];

  const numberOfCircles = 20;

  useEffect(() => {
    setIsReady(true);
    circlesRef.current = Array(numberOfCircles)
      .fill()
      .map(() => ({ x: 0, y: 0 }));

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animateCircles = () => {
      let currentX = position.x;
      let currentY = position.y;

      const newCirclePositions = circlesRef.current.map((circle, index) => {
        // Calculate new position with easing
        const newX = currentX;
        const newY = currentY;

        // Update coordinates for next circle
        const nextCircle =
          circlesRef.current[index + 1] || circlesRef.current[0];
        currentX += (nextCircle.x - currentX) * 0.3;
        currentY += (nextCircle.y - currentY) * 0.3;

        return { x: newX, y: newY };
      });

      circlesRef.current = newCirclePositions;
      animationFrameId = requestAnimationFrame(animateCircles);
    };

    animateCircles();
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isReady) return null;

  return (
    <>
      {Array(numberOfCircles)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            className="pointer-events-none fixed left-0 top-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              left: `${circlesRef.current[index]?.x}px`,
              top: `${circlesRef.current[index]?.y}px`,
              backgroundColor: colors[index % colors.length],
              transform: `translate(-50%, -50%) scale(${
                (numberOfCircles - index) / numberOfCircles
              })`,
              zIndex: 9999 - index,
              opacity: 0.8,
              transition: "transform 0.05s ease-out",
            }}
          />
        ))}
    </>
  );
};

export default GradientCursorTrail;
