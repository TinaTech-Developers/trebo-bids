"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const FALLING_STARS = Array.from({ length: 12 }).map((_, i) => ({
  size: Math.random() * 4 + 3,
  startX: Math.random() * 100,
  delay: Math.random() * 5,
  duration: Math.random() * 3 + 3,
  drift: (Math.random() - 0.5) * 50,
}));

export default function CallToAction() {
  return (
    <section className="relative w-full h-[500px] bg-gradient-to-r from-gray-900 to-gray-950 overflow-hidden flex items-center justify-center text-center px-6">
      {/* Animated gradient blobs */}
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
      />

      {/* Falling stars */}
      {FALLING_STARS.map((star, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full bg-gradient-to-tr from-white to-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.7)]"
          style={{
            top: "-5px", // start slightly above the section
            left: `${star.startX}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            y: 500, // fall across section height
            x: [`0px`, `${star.drift}px`], // horizontal drift
            opacity: [0, 1, 0], // fade in and out
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: "loop",
            delay: star.delay,
            ease: "easeIn",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-3xl space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-bold text-white"
        >
          Ready to Transform Your Bid Success?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg lg:text-xl"
        >
          Partner with{" "}
          <span className="text-blue-400 font-semibold">Trebo-BIDS</span> to
          create winning strategies, improve processes, and achieve measurable
          results.
        </motion.p>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-6 mt-6"
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-blue-400 text-gray-900 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Book a Consultation
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
