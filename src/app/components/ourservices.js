"use client";
import { motion } from "framer-motion";
import {
  FaPenNib,
  FaSearch,
  FaTasks,
  FaLightbulb,
  FaChalkboardTeacher,
  FaHandshake,
} from "react-icons/fa";

const SERVICES = [
  {
    icon: <FaPenNib />,
    title: "Bid & Tender Writing",
    desc: "Crafting evaluator-focused, persuasive, and compliant bids that win.",
    color: "text-blue-400",
  },
  {
    icon: <FaSearch />,
    title: "Bid Review",
    desc: "Detailed analysis to enhance quality, structure, and scoring potential.",
    color: "text-purple-400",
  },
  {
    icon: <FaTasks />,
    title: "Bid Management",
    desc: "Seamless coordination from opportunity tracking to final submission.",
    color: "text-pink-400",
  },
  {
    icon: <FaLightbulb />,
    title: "Bid Advisory",
    desc: "Expert advice that aligns strategy, compliance, and presentation.",
    color: "text-yellow-400",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Training & Recruitment",
    desc: "Building skilled bid teams through tailored training and sourcing.",
    color: "text-green-400",
  },
  {
    icon: <FaHandshake />,
    title: "Client Partnership",
    desc: "Long-term collaboration for consistent, sustainable success.",
    color: "text-cyan-400",
  },
];

export default function OurServices() {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 to-gray-900 text-white py-24 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-bold mb-4"
        >
          What <span className="text-blue-400">We Do</span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          We offer integrated, results-driven bid services — combining clarity,
          compliance, and creativity.
        </p>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {/* Connecting lines */}
          <div className="absolute inset-0 hidden lg:block">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
          </div>

          {SERVICES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 bg-gray-900/60 border border-white/10 rounded-2xl p-8 backdrop-blur-lg hover:border-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] transition-all duration-300"
            >
              <div
                className={`text-4xl mb-4 ${item.color} drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-16 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform duration-300"
        >
          Explore All Services
        </motion.button>
      </div>
    </section>
  );
}
