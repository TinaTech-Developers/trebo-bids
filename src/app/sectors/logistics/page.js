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

// FAQ Data
const faqItems = [
  {
    question:
      "Do you help logistics companies bid for public sector contracts?",
    answer:
      "Yes — we’ve supported logistics, transport, and supply chain providers in securing major public sector frameworks, including national distribution and fleet management contracts.",
  },
  {
    question: "Can you write bids for international logistics tenders?",
    answer:
      "Absolutely. We assist logistics and freight companies in preparing competitive, compliant submissions for both UK and overseas opportunities.",
  },
  {
    question:
      "Do you provide support with sustainability and innovation questions?",
    answer:
      "Yes. We help articulate your environmental commitments, green fleet investments, and innovative supply chain technologies clearly and persuasively.",
  },
  {
    question: "What types of logistics bids have you supported?",
    answer:
      "We’ve written successful tenders across freight, warehousing, courier services, fleet management, and defence logistics operations.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-blue-300 text-center mb-10">
        Frequently Asked Questions
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
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-bold text-blue-400">
                {item.question}
              </h4>
              <span className="text-gray-300 text-2xl leading-none">
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

export default function LogisticsPage() {
  const caseStudies = [
    {
      title: "UK National Freight Distribution Framework",
      description:
        "Supported a logistics leader in developing a winning proposal for a multi-year, multimillion-pound freight distribution framework across the UK.",
    },
    {
      title: "Defence Equipment Transport Contract",
      description:
        "Helped a specialist transport company secure a secure, time-critical logistics contract supporting the UK Ministry of Defence.",
    },
    {
      title: "Green Fleet and Sustainable Delivery Project",
      description:
        "Crafted high-scoring responses emphasizing low-emission fleets, route optimization, and carbon reduction strategy for a leading courier firm.",
    },
    {
      title: "Port Logistics and Maritime Operations",
      description:
        "Provided structured technical and management content for a bid involving complex port operations and multi-modal freight services.",
    },
    {
      title: "International Supply Chain Partnership",
      description:
        "Collaborated on a joint venture submission between UK and EU logistics firms, showcasing global reach and operational resilience.",
    },
  ];

  return (
    <ServiceLayout
      title="Logistics"
      subtitle="Helping logistics and supply chain companies win complex transport and delivery contracts."
      slides={[
        "Transport & Distribution",
        "Warehousing & Fulfilment",
        "Sustainable Logistics",
      ]}
      backgroundImage="https://academy.iccwbo.org/wp-content/uploads/2024/10/kh-66.jpg"
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
          Logistics Bid Writing Expertise
        </h2>
        <p className="text-gray-300 leading-relaxed">
          The logistics sector is fast-moving and competitive — with tight
          margins and high compliance standards. We help transport, freight, and
          logistics providers win tenders by crafting bids that showcase
          operational reliability, innovation, and value for money.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          Whether you’re bidding for last-mile delivery, warehousing, or
          large-scale distribution contracts, we ensure your submission
          demonstrates excellence, efficiency, and compliance at every stage.
        </p>
      </motion.section>

      {/* Image Section */}
      <motion.section
        className="max-w-5xl mx-auto mb-20 px-6 relative h-64 md:h-96 rounded-xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Image
          src="https://www.executivecompass.co.uk/wp-content/uploads/2024/03/woman-hands-tech-developer-laptop-1143x762.jpg"
          alt="Logistics and supply chain management"
          fill
          className="object-cover"
        />
      </motion.section>

      {/* How We Help */}
      <motion.section
        className="max-w-5xl mx-auto mb-20 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-blue-300 mb-6">
          How We Support Logistics Clients
        </h3>
        <p className="text-gray-300 mb-4">
          Our bid writers combine sector insight with technical expertise to
          help you win logistics contracts of all sizes. We understand supply
          chain operations, fleet management, sustainability, and compliance.
        </p>
        <p className="text-gray-300">
          We deliver clear, persuasive tender responses that demonstrate your
          ability to deliver efficiency, reliability, and innovation across the
          logistics spectrum.
        </p>
      </motion.section>

      {/* Additional Image */}
      <motion.section
        className="max-w-5xl mx-auto mb-20 px-6 relative h-64 md:h-96 rounded-xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Image
          src="https://reti.edu.my/wp-content/uploads/2021/04/20.jpg"
          alt="Freight transport and port logistics"
          fill
          className="object-cover"
        />
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
          Logistics Case Studies
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

      {/* Testimonial */}
      <motion.section
        className="max-w-3xl mx-auto text-center px-6 mb-20 italic"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="text-gray-300 mb-4">
          “Kittle Group helped us transform complex logistics operations into a
          clear and compelling story — their bid expertise is second to none.”
        </p>
        <p className="text-blue-400 font-semibold">
          — Head of Commercial Bids, Transport & Logistics Firm
        </p>
      </motion.section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </ServiceLayout>
  );
}
