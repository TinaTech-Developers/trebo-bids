"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function CTASection() {
  return (
    <motion.section
      className="bg-blue-400 py-16 text-center text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="mb-6">
        Contact our team today and discover how we can help you win more bids.
      </p>
      <a
        href="/contact"
        className="inline-block bg-white text-blue-400 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
      >
        Book a Consultation
      </a>
    </motion.section>
  );
}
