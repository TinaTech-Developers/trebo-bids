"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BlogLayout({
  title = "Blog ",
  slides = [],
  subtitle = "",
  backgroundImage = "",
  children,
}) {
  const [current, setCurrent] = useState(0);
  const [typeIndex, setTypeIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [stars, setStars] = useState([]);

  // Typewriter effect if slides are provided
  useEffect(() => {
    if (!slides.length) {
      setDisplayText(title);
      return;
    }

    const typing = setInterval(() => {
      setDisplayText(slides[current].slice(0, typeIndex + 1));
      setTypeIndex((prev) =>
        prev + 1 === slides[current].length ? 0 : prev + 1
      );
    }, 120);

    return () => clearInterval(typing);
  }, [slides, current, typeIndex, title]);

  // Slide cycle
  useEffect(() => {
    if (!slides.length) return;
    const cycle = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setTypeIndex(0);
    }, 6000);
    return () => clearInterval(cycle);
  }, [slides.length]);

  // Generate falling stars on client
  useEffect(() => {
    const generatedStars = [...Array(30)].map(() => ({
      left: Math.random() * 100, // random horizontal start
      size: Math.random() * 2 + 1, // size of star
      duration: Math.random() * 4 + 2, // speed
      delay: Math.random() * 5, // delay before falling
    }));
    setStars(generatedStars);
  }, []);

  return (
    <main className="relative w-full bg-gray-950 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden">
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Falling Stars */}
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-400 rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              top: "-2%", // start above hero
            }}
            animate={{ top: ["-2%", "102%"] }}
            transition={{
              repeat: Infinity,
              duration: star.duration,
              delay: star.delay,
              ease: "linear",
            }}
          />
        ))}

        {/* Hero Text */}
        <motion.h1 className="text-2xl lg:text-4xl font-bold z-10 drop-shadow-lg">
          {displayText}
          {slides.length > 0 && (
            <span className="animate-pulse text-blue-400">|</span>
          )}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-gray-300 mt-6 max-w-2xl z-10 text-lg">
            {subtitle}
          </p>
        )}
      </section>

      {/* Page Content */}
      <div className="relative z-10 px-6 lg:px-12 py-16">{children}</div>
    </main>
  );
}
