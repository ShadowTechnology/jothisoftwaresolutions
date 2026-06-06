"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const InteractiveCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "click" | "input" | "drag">("default");
  const [hoverLabel, setHoverLabel] = useState("");
  const [isMobile, setIsMobile] = useState(true);

  // Motion coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Easing spring physics for a high-end elastic tail feel
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports touch-only input
    const checkDevice = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
      setIsMobile(isTouch);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    // Analyze hover element to morph cursor size/labels dynamically
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const closestInteractive = target.closest("a, button, [role='button'], input, textarea, select, .three-d-card, .group");

      if (closestInteractive) {
        const tagName = closestInteractive.tagName.toLowerCase();
        
        if (tagName === "input" || tagName === "textarea") {
          setCursorType("input");
        } else if (closestInteractive.classList.contains("three-d-card") || closestInteractive.classList.contains("group")) {
          setCursorType("drag");
          const customLabel = closestInteractive.getAttribute("data-cursor-label");
          setHoverLabel(customLabel || "VIEW");
        } else {
          setCursorType("hover");
          const customLabel = closestInteractive.getAttribute("data-cursor-label");
          setHoverLabel(customLabel || "");
        }
      } else {
        setCursorType("default");
        setHoverLabel("");
      }
    };

    const handleMouseDown = () => setCursorType("click");
    const handleMouseUp = () => setCursorType("default");

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isVisible, isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  // Custom Cursor Visual Variants
  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "rgba(139, 92, 246, 0.08)",
      borderColor: "rgba(139, 92, 246, 0.4)",
    },
    hover: {
      width: 56,
      height: 56,
      backgroundColor: "rgba(6, 182, 212, 0.15)",
      borderColor: "rgba(6, 182, 212, 0.8)",
    },
    drag: {
      width: 70,
      height: 70,
      backgroundColor: "rgba(236, 72, 153, 0.2)",
      borderColor: "rgba(236, 72, 153, 0.8)",
    },
    input: {
      width: 12,
      height: 36,
      borderRadius: "4px",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderColor: "rgba(255, 255, 255, 0.8)",
    },
    click: {
      width: 24,
      height: 24,
      backgroundColor: "rgba(139, 92, 246, 0.4)",
      borderColor: "rgba(139, 92, 246, 1)",
    },
  };

  return (
    <>
      {/* Outer Spring Elastic Cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        animate={cursorType}
        variants={variants}
        transition={{ duration: 0.15, ease: "easeOut" }}
        style={{
          x: springX,
          y: springY,
          opacity: isVisible ? 1 : 0,
        }}
      >
        {cursorType === "drag" && hoverLabel && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-bold tracking-widest text-foreground font-heading"
          >
            {hoverLabel}
          </motion.span>
        )}
      </motion.div>

      {/* Tiny Instant Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
};
