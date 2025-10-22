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
      "We discuss your energy project goals and funding requirements to develop a clear bid strategy.",
  },
  {
    question: "Research & Preparation",
    answer:
      "Gathering technical data, regulatory standards, and project specifics to build a compelling proposal.",
  },
  {
    question: "Drafting",
    answer:
      "Creating detailed, technically accurate, and persuasive content tailored to energy tenders.",
  },
  {
    question: "Review & Feedback",
    answer:
      "Ensuring proposals meet compliance, technical accuracy, and scoring requirements.",
  },
  {
    question: "Submission",
    answer:
      "Delivering polished, fully compliant bids on time to maximise your chances of success.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-blue-300 text-center mb-10">
        Our Energy Bid Process
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

export default function EnergyPage() {
  const caseStudies = [
    {
      title: "The Great Grid Upgrade Partnership (TGGUP) framework",
      description:
        "Supported a UK energy provider in delivering a winning bid for the national grid upgrade project.",
    },
    {
      title: "Partnership with a UK leading charge point provider",
      description:
        "Produced a technically detailed and commercially competitive submission for EV infrastructure.",
    },
  ];

  return (
    <ServiceLayout
      title="Energy"
      subtitle="Helping organisations win complex energy sector bids, from renewable projects to infrastructure frameworks."
      slides={["Renewable Energy", "Infrastructure", "Frameworks"]}
      backgroundImage="https://energyaction.com.au/wp-content/uploads/2024/10/energy-crisis-australia-businesses-1024x683.jpg"
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
          Energy Sector Bid Writing
        </h2>
        <p className="text-gray-300 leading-relaxed">
          The energy sector is diverse and rapidly evolving. Our writers have
          supported some of the UK’s largest infrastructure framework bids, from
          solar and heat pump installations to offshore wind and nuclear
          regeneration projects.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          In the past 18 months, we have helped clients win over £100 million in
          energy contracts, ensuring every bid is technically accurate,
          compelling, and compliant.
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
            src="https://www.heia-fr.ch/media/qvwf5vb1/key-visual-energy-2019.jpg?width=1200&v=1da69611b618110"
            alt="Energy Infrastructure"
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
          How We Help Energy Clients
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          We guide energy organisations through complex bids, ensuring technical
          accuracy, commercial competitiveness, and regulatory compliance.
        </p>
        <p className="text-gray-300 leading-relaxed">
          From renewables to nuclear and EV infrastructure, our team helps every
          bid highlight capability, innovation, and cost-effectiveness,
          increasing your chances of success.
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
          Energy Case Studies
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
          “The team’s support in energy bids has been invaluable. Their
          technical expertise and clear, compelling writing have helped us
          secure major projects efficiently.”
        </p>
        <p className="text-blue-400 font-semibold">
          — Project Director, UK Energy Company
        </p>
      </motion.section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </ServiceLayout>
  );
}
