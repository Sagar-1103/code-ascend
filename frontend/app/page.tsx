"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Home() {
  const floatingIcons = [
    { src: "/js.svg", alt: "JavaScript", x: 300, y: -280 },
    { src: "/go.svg", alt: "Go", x: -350, y: -160 },
    { src: "/java.svg", alt: "Java", x: 100, y: 150 },
    { src: "/cpp.svg", alt: "C++", x: 500, y: 100 },
    { src: "/ts.svg", alt: "TypeScript", x: -500, y: 50 },
  ];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY - window.innerHeight / 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center relative overflow-hidden">
      {/* Main Text */}
      <motion.h1
        className="text-6xl md:text-8xl font-bold text-green-500  shadow-slate-50 text-center z-10 font-mono"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textShadow: "2px 2px 30px rgba(0, 255, 0, 0.5)",
        }}
      >
         Become Invincible
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-green-400 mt-6 text-center z-10 font-mono"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          textShadow: "0 4px 8px rgba(0, 255, 0, 0.5)",
        }}
      >
        Experience the thrill of overcoming challenges <br /> and forge your path to coding supremacy.
      </motion.p>

      <motion.button
        className="mt-8 px-6 py-3 bg-green-500 text-black font-semibold rounded-lg text-lg z-10 hover:bg-green-400 transition font-mono"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Get Started
      </motion.button>

      {/* Floating Icons */}
      {floatingIcons.map((icon, index) => (
        <motion.img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className="absolute w-12 md:w-16 opacity-80 hidden lg:block"
          style={{
            transform: `translate(-50%, -50%)`,
          }}
          initial={{ x: icon.x, y: icon.y, opacity: 0 }}
          animate={{
            x: icon.x + mousePosition.x * 0.1 * (index % 2 === 0 ? 1 : -1),
            y: icon.y + mousePosition.y * 0.1 * (index % 2 === 0 ? -1 : 1),
            opacity: 1,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
