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

const faqItems = [
  {
    question: "Initial Consultation",
    answer:
      "We discuss your organisation’s requirements and understand the scope of the custody & justice tender to provide focused guidance.",
  },
  {
    question: "Research & Preparation",
    answer:
      "Gathering information on regulations, competitors, and operational requirements to build a strong submission.",
  },
  {
    question: "Drafting",
    answer:
      "Writing compelling content that aligns with procurement evaluation criteria and showcases your capability.",
  },
  {
    question: "Review & Feedback",
    answer:
      "Refining your responses with clear structure, consistency, and compliance checks to maximise scoring.",
  },
  {
    question: "Submission",
    answer:
      "Ensuring your bid is polished, compliant, and delivered on time to meet all requirements.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-blue-300 text-center mb-10">
        Our Bid Process for Custody & Justice
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

export default function CustodyPage() {
  const caseStudies = [
    {
      title: "Electronic Monitoring Field Service – Ministry of Justice",
      description:
        "Delivered a winning proposal for a critical EM service contract, ensuring compliance and operational excellence.",
    },
    {
      title: "Gatwick Immigration Removal Centre",
      description:
        "Supported bid writing for custody management operations, highlighting service capability and efficiency.",
    },
    {
      title: "Prisoner Escorting & Court Custody Service (PECS)",
      description:
        "Prepared detailed tender submission demonstrating staffing, scheduling, and risk management.",
    },
    {
      title: "HMP Five Wells, Wellingborough",
      description:
        "Developed bid content showcasing facility management, security, and operational reliability.",
    },
    {
      title: "Derwentside Immigration Removal Centre",
      description:
        "Produced a compelling tender highlighting capability in detention and rehabilitation operations.",
    },
    {
      title: "Heathrow Immigration Removal Centre",
      description:
        "Crafted bid material addressing complex security and operational challenges with clarity.",
    },
  ];

  return (
    <ServiceLayout
      title="Custody & Justice"
      subtitle="Supporting top suppliers to win major custody, justice, and electronic monitoring contracts."
      slides={[
        "Prison & Escort Services",
        "Electronic Monitoring",
        "International Contracts",
      ]}
      backgroundImage="https://lh3.googleusercontent.com/8njJPr0B5CKhaR2VhI3J8u8dq7JXDWZo788WOj_MXtxNkR8oAgEJAnxrfIXJ9uxSWnhc6qVzrBc19_95w24T=s750"
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
          Custody & Justice Bid Writing
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Kittle Group is the leading bidding consultancy in the custody and
          justice sector. In the last five years, we have supported clients win
          over £5 billion in contracts.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          We help top suppliers secure the UK’s largest accommodation and
          prisoner escorting contracts, as well as major prison and electronic
          monitoring contracts internationally.
        </p>
      </motion.section>

      {/* Image Section */}
      <motion.section
        className="max-w-5xl mx-auto mb-20 px-6 relative h-64 md:h-96 rounded-xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src="https://www.leaders-in-law.com/wp-content/uploads/2024/05/Empowering-Fathers_-Find-a-Top-Father-Right-Lawyer-to-Uphold-Your-Custody-Rights.jpg"
            alt="Custody & Justice Operations"
            fill
            className="object-cover"
          />
        </div>
      </motion.section>

      {/* How We Help Section */}
      <motion.section
        className="max-w-5xl mx-auto mb-20 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold text-blue-300 mb-6">
          How We Help Clients in Custody & Justice
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          We help clients stand out in a highly competitive sector by ensuring
          their bids are clear, compelling, and demonstrate operational
          excellence.
        </p>
        <p className="text-gray-300 leading-relaxed">
          From strategy design to technical writing, we guide your bid through
          every stage — including complex compliance and service delivery
          requirements.
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
          Custody & Justice Case Studies
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

      {/* Impact Quote */}
      <motion.section
        className="max-w-3xl mx-auto text-center px-6 mb-20 italic"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="text-gray-300 mb-4">
          “Kittle Group’s support has been instrumental in winning complex
          custody and justice contracts. Their expertise, insight, and guidance
          are unmatched.”
        </p>
        <p className="text-blue-400 font-semibold">
          — Senior Director, Custody Services Provider
        </p>
      </motion.section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </ServiceLayout>
  );
}
