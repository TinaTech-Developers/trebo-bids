"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export function ProcessSection() {
  const steps = [
    "Initial Consultation – understand your goals",
    "Research & Preparation – gather information and assess requirements",
    "Drafting – write clear, compelling content",
    "Review & Feedback – refine and optimise",
    "Submission – ensure everything is compliant and delivered on time",
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-blue-400 mb-8 text-center">
        Our Process
      </h3>
      <ol className="list-decimal list-inside text-gray-300 space-y-4 max-w-3xl mx-auto">
        {steps.map((step, i) => (
          <motion.li
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-gray-900/50 p-4 rounded-lg"
          >
            {step}
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
