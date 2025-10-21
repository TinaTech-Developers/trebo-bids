"use client";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaTasks,
  FaPenNib,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";

const STEPS = [
  {
    icon: <FaSearch />,
    title: "Opportunity Identification",
    desc: "We research and pinpoint the most strategic opportunities aligned with your business objectives.",
    color: "bg-blue-400",
  },
  {
    icon: <FaTasks />,
    title: "Bid Planning",
    desc: "Structured planning ensures all resources, deadlines, and compliance requirements are accounted for.",
    color: "bg-purple-400",
  },
  {
    icon: <FaPenNib />,
    title: "Writing & Compliance",
    desc: "Our expert team crafts compelling, compliant bids that clearly communicate your value.",
    color: "bg-pink-400",
  },
  {
    icon: <FaCheckCircle />,
    title: "Review & Submission",
    desc: "Comprehensive reviews and quality checks guarantee your bid is submission-ready.",
    color: "bg-yellow-400",
  },
  {
    icon: <FaChartLine />,
    title: "Continuous Improvement",
    desc: "Post-submission analysis and feedback loops ensure ongoing improvement and higher win rates.",
    color: "bg-green-400",
  },
];

export default function OurProcess() {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 to-gray-900 text-white py-24 overflow-hidden">
      {/* Soft glowing background */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-bold mb-8"
        >
          Our <span className="text-blue-400">Process</span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          A clear, step-by-step methodology designed to maximize your bid
          success.
        </p>

        <div className="relative grid gap-12">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-start gap-6 lg:gap-8"
            >
              {/* Step number */}
              <div className="flex-shrink-0 relative">
                <div
                  className={`w-14 h-14 ${step.color} rounded-full flex items-center justify-center text-gray-900 font-bold text-lg shadow-lg`}
                >
                  {i + 1}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/10"></div>
                )}
              </div>

              {/* Card */}
              <div className="bg-gray-900/60 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex-1 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] transition-all duration-300">
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-16 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform duration-300"
        >
          Learn More About Our Approach
        </motion.button>
      </div>
    </section>
  );
}
