"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Procurement Manager",
    quote:
      "Trebo-BIDS transformed our bid submissions. Every detail was clear, compliant, and highly persuasive.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bg: "https://images.unsplash.com/photo-1556740765-5f4b6f0f2f17?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "David Smith",
    role: "Head of Operations",
    quote:
      "Their strategic insights helped us win contracts that previously felt impossible.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    bg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Linda Nguyen",
    role: "Director",
    quote:
      "Professional, collaborative, and precise. Our value was presented with total clarity.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    bg: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        {TESTIMONIALS.map((t, idx) =>
          idx === current ? (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <Image
                src={t.bg}
                alt={t.name}
                fill
                className="object-cover brightness-50"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/80" />

              {/* Content */}
              <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 h-full flex flex-col justify-center items-start text-white space-y-6">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-xl lg:text-2xl font-semibold max-w-3xl"
                >
                  "{t.quote}"
                </motion.p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="relative w-14 h-14">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="rounded-full border-2 border-blue-400 object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-semibold">{t.name}</h4>
                    <p className="text-gray-300 text-sm">{t.role}</p>
                  </div>
                </div>

                {/* Floating label */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute bottom-6 left-6 bg-blue-400/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-md shadow-md"
                >
                  Client Feedback
                </motion.div>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </section>
  );
}
