"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <motion.section
      className="max-w-5xl mx-auto text-center bg-gray-800/50 p-10 rounded-2xl my-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-semibold text-blue-300 mb-4">
        Ready to Take Your Bidding to the Next Level?
      </h3>
      <p className="text-gray-300 mb-6">
        Work with our experts to improve your win rate and submit stronger,
        higher-scoring bids.
      </p>
      <Link
        href="/contact"
        className="inline-block bg-blue-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-blue-500 transition"
      >
        Talk to Us
      </Link>
    </motion.section>
  );
}
