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
      "We discuss your defence contracts goals and requirements to ensure a clear strategy from the outset.",
  },
  {
    question: "Research & Preparation",
    answer:
      "Gathering operational data, regulatory standards, and tender requirements to prepare a competitive submission.",
  },
  {
    question: "Drafting",
    answer:
      "Crafting detailed, clear, and compelling content tailored to military and defence procurement expectations.",
  },
  {
    question: "Review & Feedback",
    answer:
      "Refining content for technical accuracy, clarity, compliance, and scoring potential.",
  },
  {
    question: "Submission",
    answer:
      "Ensuring timely, polished, and fully compliant delivery to maximise chances of success.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-blue-300 text-center mb-10">
        Our Defence Bid Process
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

export default function DefencePage() {
  const caseStudies = [
    {
      title: "Multi-Million Pound Defence Framework",
      description:
        "Prepared a detailed submission to secure a major framework agreement with the Ministry of Defence.",
    },
    {
      title: "Equipment Supply Contract – Army",
      description:
        "Produced a compelling technical bid highlighting supply chain reliability and operational readiness.",
    },
    {
      title: "Naval Infrastructure Upgrade",
      description:
        "Assisted client with a high-value proposal detailing project management, risk mitigation, and innovation.",
    },
    {
      title: "Defence ICT Services",
      description:
        "Developed a winning tender for IT infrastructure services supporting defence operations.",
    },
    {
      title: "Aerospace & Security Systems",
      description:
        "Delivered a complex, technically-focused submission for cutting-edge aerospace systems procurement.",
    },
    {
      title: "Training & Consultancy – Defence Programmes",
      description:
        "Produced clear and concise bid material demonstrating capability in large-scale training programmes.",
    },
  ];

  return (
    <ServiceLayout
      title="Defence"
      subtitle="Supporting organisations to win complex and high-value defence contracts."
      slides={[
        "Military Frameworks",
        "Equipment & Systems",
        "Training & Consultancy",
      ]}
      backgroundImage="https://thetenderteam.com.au/wp-content/uploads/2018/06/defence-tenders-e1724264301419.jpg"
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
          Defence Bid Writing
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Kittle Group provides specialist bid writing support for defence and
          security organisations. We help clients win complex, high-value
          contracts by delivering clear, technically accurate, and persuasive
          proposals.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          Our expertise spans equipment supply, ICT services, training,
          consultancy, and large defence frameworks, ensuring every bid
          highlights capability, compliance, and value.
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
            src="https://thetenderteam.com.au/wp-content/uploads/2018/06/defence-tenders-e1724264301419.jpg"
            alt="Defence Operations"
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
          How We Help Defence Clients
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          We guide defence organisations through the complexities of tender
          submissions, ensuring proposals are technically accurate, compliant,
          and strategically presented.
        </p>
        <p className="text-gray-300 leading-relaxed">
          From strategy and research to drafting and submission, our team
          ensures every bid clearly demonstrates capability, experience, and
          value for money.
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
          Defence Case Studies
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
          “Kittle Group’s defence bid support has been crucial for securing
          high-value military and security contracts. Their insight and clarity
          make all the difference.”
        </p>
        <p className="text-blue-400 font-semibold">
          — Programme Director, Defence Contractor
        </p>
      </motion.section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </ServiceLayout>
  );
}
