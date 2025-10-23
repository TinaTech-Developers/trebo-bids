"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { CTASection } from "../_components/ctasection";
import ServiceLayout from "@/app/what-we-do/_components/servicelayout";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const faqItems = [
  {
    question: "Initial Consultation",
    answer:
      "We meet your team to understand your project requirements, timelines, and business goals for construction bidding.",
  },
  {
    question: "Research & Preparation",
    answer:
      "Analyse tender documents, client requirements, and evaluation criteria to set your bid up for success.",
  },
  {
    question: "Drafting",
    answer:
      "Create detailed, technically accurate, and compelling responses that highlight your experience and capabilities.",
  },
  {
    question: "Review & Feedback",
    answer:
      "Refine drafts with expert feedback ensuring clarity, compliance, and maximum scoring potential.",
  },
  {
    question: "Submission",
    answer:
      "Submit your bid professionally, on time, and fully compliant with tender requirements.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-blue-300 text-center mb-10">
        Our Construction Bid Process
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
              <div className="w-3 h-3 border border-white border-2 p-1 rounded-full bg-blue-500"></div>
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

export default function ConstructionPage() {
  return (
    <ServiceLayout
      title="Construction & Infrastructure"
      subtitle="Expert bid writing to help you win contracts and deliver major projects."
      slides={["Technical Excellence", "Project Delivery", "Client Confidence"]}
      backgroundImage="https://images.unsplash.com/photo-1560785494-4c15f3a8e5c8?auto=format&fit=crop&w=1600&q=80"
    >
      {/* Hero + Image */}
      <motion.section
        className="relative max-w-5xl mx-auto mb-16 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-full h-94 mb-6 rounded-xl overflow-hidden">
          <Image
            src="/scene-construction-site-with-equipment.jpg"
            alt="Construction site"
            fill
            className=" w-full h-full object-cover "
            quality={100} // maximum quality
          />
        </div>

        <h2 className="text-3xl font-bold text-blue-400 mb-4">
          Bid Writing for Construction & Infrastructure
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Bidding in the construction, civil engineering, and infrastructure
          sectors is competitive. Our expert team helps your business stand out,
          meet technical requirements, and secure those all-important contracts.
        </p>
      </motion.section>

      {/* Sector Challenges with image */}
      <motion.section
        className="max-w-5xl mx-auto mb-20 px-6 flex flex-col md:flex-row items-center gap-8"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Image
          fill
          quality={100}
          src="https://images.unsplash.com/photo-1560448204-2a0a6f7d84a5?auto=format&fit=crop&w=600&q=80"
          alt="Blueprints and construction planning"
          className="w-full md:w-1/2 rounded-xl object-cover"
        />
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-blue-300 mb-6">
            Challenges in Construction Bidding
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-3 leading-relaxed">
            <li>
              Competing against large, experienced firms with well-established
              approaches.
            </li>
            <li>
              Meeting highly technical tender requirements and presenting them
              clearly.
            </li>
            <li>Managing multiple tenders and teams simultaneously.</li>
            <li>Providing relevant evidence from past projects.</li>
            <li>
              Demonstrating resources and project management capability
              effectively.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* How We Help Section with image */}
      <motion.section
        className="max-w-5xl mx-auto mb-24 px-6 flex flex-col-reverse md:flex-row items-center gap-8"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-blue-300 mb-6">
            How Kittle Group Supports Your Bidding
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            We provide full consultation and bid writing services to help your
            business secure contracts. From major works to refurbishment, our
            team has extensive experience preparing high-scoring technical bids.
          </p>
          <p className="text-gray-300">
            We have supported national and private buyers, including Defence
            Infrastructure Organisation, National Highways, NHS, Ministry of
            Justice, and Network Rail.
          </p>
        </div>
        <Image
          fill
          quality={100}
          src="/scene-construction-site-with-equipment.jpg"
          alt="Construction team discussion"
          className="w-full md:w-1/2 rounded-xl"
        />
      </motion.section>

      {/* Case Studies */}
      <motion.section
        className="max-w-6xl mx-auto mb-24 px-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold text-blue-300 text-center mb-10">
          Construction Case Studies
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Hospital Construction Project",
              description:
                "Supported a leading Tier-1 construction company’s bid to construct a hospital.",
              image: "/hospital.jpg",
            },
            {
              title: "Small Secure Houseblock Programme",
              description:
                "Winning tender for Ministry of Justice programme, including refurbishment and compliance.",
              image:
                "https://plus.unsplash.com/premium_photo-1682125939509-03aa8ae4b587?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFNtYWxsJTIwU2VjdXJlJTIwSG91c2VibG9jayUyMFByb2dyYW1tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
            },
            {
              title: "Defence Estates Optimisation Programme",
              description:
                "Preparing and submitting a winning proposal for a national defence infrastructure project.",
              image:
                "https://media.istockphoto.com/id/1443457168/photo/mans-hand-pressing-the-illustrative-blue-house-icon-with-his-fingers.webp?a=1&b=1&s=612x612&w=0&k=20&c=98HnGKqIxt5YSJC20qTSvhLxG6E7d-w05Tzv5t-M0ec=",
            },
          ].map((caseItem, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800/40 border border-gray-700 rounded-2xl overflow-hidden hover:shadow-blue-400/10 transition"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-blue-400 mb-2">
                  {caseItem.title}
                </h4>
                <p className="text-gray-300">{caseItem.description}</p>
              </div>
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
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-gray-300 mb-4">
          “Kittle Group’s bid support helped us win our largest infrastructure
          project yet. Their understanding of technical requirements and project
          management was exceptional.”
        </p>
        <p className="text-blue-400 font-semibold">
          — Project Director, Leading Construction Firm
        </p>
      </motion.section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </ServiceLayout>
  );
}
