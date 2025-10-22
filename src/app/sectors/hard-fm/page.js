"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import ServiceLayout from "@/app/what-we-do/_components/servicelayout";
import { CTASection } from "../_components/ctasection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// FAQ data
const faqItems = [
  {
    question: "Initial Consultation",
    answer:
      "We review your facilities management goals and understand the project requirements for a strong bid strategy.",
  },
  {
    question: "Research & Preparation",
    answer:
      "Gather all necessary data on compliance, maintenance schedules, and project scope to prepare the bid.",
  },
  {
    question: "Drafting",
    answer:
      "Develop clear, technically accurate, and persuasive content tailored to Hard FM tenders.",
  },
  {
    question: "Review & Feedback",
    answer:
      "Ensure all submissions meet compliance, technical, and scoring requirements for evaluation.",
  },
  {
    question: "Submission",
    answer:
      "Deliver a polished, compliant bid on time, increasing your chances of winning contracts.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-blue-300 text-center mb-10">
        Our Hard FM Bid Process
      </h3>
      <div className="space-y-4">
        {faqItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 cursor-pointer"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <h4 className="text-xl font-bold text-blue-400">
                {item.question}
              </h4>
              <span className="text-gray-300">
                {openIndex === idx ? "−" : "+"}
              </span>
            </div>
            {openIndex === idx && (
              <motion.p
                className="mt-3 text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {item.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function HardFMPage() {
  const caseStudies = [
    {
      title: "National Healthcare FM Framework",
      description:
        "Supported a major healthcare provider in securing a multi-site FM contract across NHS facilities.",
    },
    {
      title: "University Campus Maintenance",
      description:
        "Produced a comprehensive bid covering mechanical, electrical, and general maintenance services.",
    },
    {
      title: "Commercial Property Management",
      description:
        "Delivered a technically accurate and commercially compelling submission for a private property portfolio.",
    },
  ];

  return (
    <ServiceLayout
      title="Hard FM (Facilities Management)"
      subtitle="Helping organisations win complex Hard FM tenders with clarity, compliance, and impact."
      slides={["Healthcare", "Education", "Commercial"]}
      backgroundImage="https://4.imimg.com/data4/EG/YN/MY-6793686/02.jpg"
    >
      {/* Intro */}
      <motion.section
        className="text-center max-w-5xl mx-auto mb-16 px-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-4">
          Hard FM Bid Writing
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Bidding in the Hard FM sector requires technical accuracy, compliance
          knowledge, and clarity in delivery. Our team has supported
          organisations across healthcare, education, and commercial sectors in
          winning high-value FM contracts.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          We combine detailed sector expertise with persuasive bid writing to
          help clients stand out and secure contracts.
        </p>
      </motion.section>

      {/* Hero Image */}
      <motion.section
        className="max-w-5xl mx-auto mb-20 px-6 relative h-64 md:h-96 rounded-xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src="https://4.imimg.com/data4/EG/YN/MY-6793686/02.jpg"
            alt="Facilities Management"
            fill
            className="object-cover"
          />
        </div>
      </motion.section>

      {/* How We Help */}
      <motion.section
        className="max-w-5xl mx-auto mb-20 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold text-blue-300 mb-6">
          How We Help Hard FM Clients
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          We help organisations articulate their technical capability,
          compliance, and service excellence in every bid. From mechanical and
          electrical maintenance to large-scale commercial FM projects, we
          ensure your proposal meets all evaluation criteria.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Our support reduces stress and increases your chances of winning,
          allowing you to focus on operational delivery while we handle the bid
          writing.
        </p>
      </motion.section>

      {/* Case Studies */}
      <motion.section
        className="max-w-6xl mx-auto mb-24 px-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold text-blue-300 text-center mb-10">
          Hard FM Case Studies
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseItem, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 hover:shadow-blue-400/10 transition"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h4 className="text-xl font-bold text-blue-400 mb-2">
                {caseItem.title}
              </h4>
              <p className="text-gray-300">{caseItem.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Quote */}
      <motion.section
        className="max-w-3xl mx-auto text-center px-6 mb-20 italic"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="text-gray-300 mb-4">
          “Kittle Group’s expertise in Hard FM bidding has been invaluable.
          Their guidance on compliance and technical writing helped us win
          critical contracts.”
        </p>
        <p className="text-blue-400 font-semibold">
          — Facilities Director, National Healthcare Trust
        </p>
      </motion.section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </ServiceLayout>
  );
}
