"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const STATS = [
  { value: 10, label: "Years Experience", color: "from-blue-400 to-blue-600" },
  {
    value: 200,
    label: "Successful Bids",
    color: "from-purple-400 to-purple-600",
  },
  {
    value: 98,
    label: "Client Satisfaction (%)",
    color: "from-pink-400 to-pink-600",
  },
  { value: 50, label: "Global Clients", color: "from-green-400 to-green-600" },
];

export default function StatsCounters() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <section
      ref={ref}
      className="relative py-32 bg-gray-950 text-white flex flex-col items-center justify-center overflow-hidden"
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-blue-400 mb-16">
        Our Achievements
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto px-6">
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 1, delay: i * 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-32 h-32">
              {/* Circular background */}
              <div className="absolute inset-0 rounded-full bg-gray-800/20" />
              {/* Animated progress */}
              <motion.div
                className={`absolute inset-0 rounded-full border-8 border-transparent border-t-blue-500 border-b-blue-500`}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 * (stat.value / 100) }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold">{stat.value}</span>
                {stat.label.includes("%") && (
                  <span className="text-2xl">%</span>
                )}
              </div>
            </div>
            <p className="text-gray-300 mt-4 text-center">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
