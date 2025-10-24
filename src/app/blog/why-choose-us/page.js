"use client";

import { motion } from "framer-motion";
import BlogLayout from "@/app/blog/_components/bloglayout";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const reasons = [
  {
    title: "Proven Expertise",
    description:
      "Our team brings years of experience in bid writing and consultancy, ensuring your proposals stand out.",
  },
  {
    title: "Tailored Solutions",
    description:
      "We craft strategies and bids specifically for your business needs, maximizing your chances of success.",
  },
  {
    title: "Transparent Process",
    description:
      "Clear communication and step-by-step guidance make working with us seamless and predictable.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We focus on your goals and outcomes, providing personalized attention and measurable results.",
  },
  {
    title: "Innovative Strategies",
    description:
      "Combining industry insights with creative approaches ensures your bids are persuasive and distinctive.",
  },
  {
    title: "Continuous Support",
    description:
      "Beyond submissions, we provide feedback, analysis, and ongoing guidance to keep improving your success rate.",
  },
];

export default function WhyChooseUsPage() {
  const slides = ["Why Choose Us", "Our Strengths", "Expert Guidance"];

  return (
    <BlogLayout
      title="Why Choose Us"
      slides={slides}
      subtitle="Discover why Kittle Group is the trusted partner for businesses looking to win bids and achieve growth."
      backgroundImage="https://imageio.forbes.com/specials-images/dam/imageserve/1166693752/960x0.jpg?height=474&width=711&fit=bounds"
    >
      {/* Hero Intro */}
      <motion.section
        className="max-w-3xl mx-auto mb-20 text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
          Why Businesses Trust Kittle Group
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          Experience, strategy, and a client-first approach combine to help you
          win bids and grow your business.
        </p>
      </motion.section>

      {/* Alternating Sections */}
      <motion.section className="max-w-6xl mx-auto space-y-16">
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-blue-400 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-300 text-lg">{reason.description}</p>
            </div>
            <div className="flex-1 border-2 border-blue-400 rounded-2xl ">
              <div className="bg-blue-400/20 h-48 rounded-2xl flex items-center justify-center text-blue-400 font-bold text-xl">
                {reason.title}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="max-w-5xl mx-auto text-center bg-gray-800/50 p-12 rounded-2xl mt-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h3 className="text-3xl font-semibold text-blue-300 mb-4">
          Ready to Partner With Experts?
        </h3>
        <p className="text-gray-300 mb-6 text-lg">
          Let’s start your journey to winning more bids and achieving business
          growth.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-blue-500 transition"
        >
          Contact Us
        </a>
      </motion.section>
    </BlogLayout>
  );
}
