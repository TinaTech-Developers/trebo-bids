"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const slides = [
    {
      title: "Transform Your Bid Success",
      subtitle:
        "We craft winning bids and tenders that help organizations secure high-value contracts.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Expert Advisory & Management",
      subtitle:
        "From strategy to submission, we manage every stage of your bid process with precision.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Empowering Winning Teams",
      subtitle:
        "Through training and recruitment, we build capability and confidence for continuous success.",
      image:
        "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slide Backgrounds */}
      <div
        className="absolute inset-0 flex transition-transform duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-full h-full"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `scale(${i === current ? 1 : 1.05})`,
              transition: "transform 1.2s ease-in-out",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-x"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 lg:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 lg:p-12 rounded-2xl shadow-2xl"
          >
            {/* Typewriter Title */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-lg">
              <Typewriter
                words={[slides[current].title]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={4000}
              />
            </h1>

            <p className="mt-4 text-gray-200 text-lg lg:text-xl drop-shadow-md">
              {slides[current].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots & Progress */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-white scale-125" : "bg-white/40"
              }`}
            ></button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-32 h-1 bg-white/30 rounded-full overflow-hidden">
          <motion.div
            key={current}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
            className="h-full bg-white"
          />
        </div>
      </div>
    </section>
  );
}
