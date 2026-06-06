"use client";

import React, { useRef, useState } from "react";

interface ThreeDTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum rotation in degrees (default 12)
}

export const ThreeDTilt: React.FC<ThreeDTiltProps> = ({
  children,
  className = "",
  maxTilt = 12,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState({ rotateX: 0, rotateY: 0, shineX: 0, shineY: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Relative coordinates from 0 to width/height
    const absoluteX = e.clientX - rect.left;
    const absoluteY = e.clientY - rect.top;

    // Normalized coordinates from -0.5 to 0.5
    const relativeX = (absoluteX / width) - 0.5;
    const relativeY = (absoluteY / height) - 0.5;

    // Calculate rotation angles
    const rotateY = relativeX * maxTilt;
    const rotateX = -relativeY * maxTilt;

    setCoords({
      rotateX,
      rotateY,
      shineX: (absoluteX / width) * 100,
      shineY: (absoluteY / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Reset tilt smooth
    setCoords({ rotateX: 0, rotateY: 0, shineX: 50, shineY: 50 });
  };

  const style: React.CSSProperties = {
    transform: isHovering
      ? `perspective(1000px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg) scale3d(1.02, 1.02, 1.02)`
      : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: isHovering ? "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
    transformStyle: "preserve-3d",
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative select-none preserve-3d ${className}`}
    >
      {/* 3D Sheen Highlight Overlay */}
      {isHovering && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at ${coords.shineX}% ${coords.shineY}%, rgba(255, 255, 255, 0.08) 0%, transparent 60%)`,
            pointerEvents: "none",
            zIndex: 10,
            borderRadius: "inherit",
          }}
        />
      )}
      
      {/* Dynamic Glow Aura Layer */}
      <div
        className="absolute inset-0 rounded-inherit bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10 pointer-events-none"
        style={{
          transform: "translateZ(-20px)",
        }}
      />

      <div
        style={{
          transform: isHovering ? "translateZ(10px)" : "translateZ(0px)",
          transition: "transform 0.3s ease",
          height: "100%",
        }}
        className="h-full"
      >
        {children}
      </div>
    </div>
  );
};
