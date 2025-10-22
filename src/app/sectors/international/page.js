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
    question: "Do you support international suppliers bidding into the UK?",
    answer:
      "Yes — we specialize in helping non-UK suppliers understand and succeed within the UK public procurement system.",
  },
  {
    question: "What challenges do international bidders typically face?",
    answer:
      "Many struggle with compliance, formatting, and UK-specific requirements. We simplify the process and help craft persuasive, compliant submissions.",
  },
  {
    question: "Can you assist multinational teams across different time zones?",
    answer:
      "Absolutely. Our global experience allows us to coordinate effectively with international bid teams across regions and time zones.",
  },
  {
    question: "Do you work with both public and private international clients?",
    answer:
      "Yes — we’ve supported multinational corporations, defence contractors, and international engineering consultancies in both public and private bids.",
  },
];
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer for international clients?",
      answer:
        "We support international suppliers bidding into the UK and help simplify complex procurement processes into clear, winning submissions.",
    },
    {
      question: "Do you work with non-UK based organizations?",
      answer:
        "Yes, we work with multinational suppliers around the world to support UK and international bids.",
    },
    {
      question: "How can we get started?",
      answer:
        "Simply get in touch with our bid specialists — we’ll discuss your needs and start crafting a winning strategy.",
    },
  ];

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

export default function InternationalPage() {
  const caseStudies = [
    {
      title:
        "Joint Venture for High Speed 2 (HS2) – Precast Concrete Tunnel System",
      description:
        "We supported a multinational joint venture in designing and presenting a complex engineering proposal for HS2, ensuring clarity, compliance, and technical excellence.",
    },
    {
      title: "Facilities Management – South Atlantic Islands Defence Estate",
      description:
        "Helped a global FM provider win a long-term facilities management contract supporting defence infrastructure overseas.",
    },
    {
      title: "Australian Government Infrastructure Tenders",
      description:
        "Provided bid writing expertise for multiple infrastructure and logistics projects in Australia.",
    },
    {
      title: "ADF Logistics and Operational Support",
      description:
        "Supported logistics tendering for the Australian Defence Force, highlighting efficiency and operational readiness.",
    },
    {
      title: "Electronic Monitoring – New Zealand Department of Corrections",
      description:
        "Delivered a high-quality bid submission for electronic monitoring systems, helping secure major international contracts.",
    },
    {
      title: "Blockchain Technology Framework – European Commission",
      description:
        "Crafted compelling narrative for an innovative blockchain technology proposal, emphasizing scalability and data security.",
    },
  ];

  return (
    <ServiceLayout
      title="International"
      subtitle="Helping multinational suppliers win complex bids across borders and procurement systems."
      slides={[
        "Global Bid Writing",
        "Cross-Border Frameworks",
        "International Procurement Support",
      ]}
      backgroundImage="https://www.chicagobooth.edu/-/media/project/chicago-booth/chicago-booth-review/2023/january/chicago-booth-flag-chain.jpg?cx=0.42&cy=0.43&cw=1880&ch=783&hash=C33818078E30202A5E5FA362B3423BCE"
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
          International Bid Writing Expertise
        </h2>
        <p className="text-gray-300 leading-relaxed">
          The international public sector market offers immense opportunities —
          but it’s highly competitive. Many international suppliers miss out on
          lucrative contracts due to unfamiliarity with the UK procurement
          system and its rigorous compliance standards.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          At Kittle Group, we help global organisations adapt, comply, and
          compete successfully in complex international tenders. Our experience
          spans infrastructure, defence, logistics, technology, and government
          projects across multiple continents.
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
          src="https://www.maishahuru.com/img/bachelor-of-arts-in-international-relations.jpg"
          alt="Global business collaboration"
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
          How We Support International Clients
        </h3>
        <p className="text-gray-300 mb-4">
          We simplify complex public procurement for multinational organisations
          — translating UK and international bidding standards into actionable,
          winning strategies.
        </p>
        <p className="text-gray-300">
          Whether you’re bidding into the UK for the first time or expanding
          your global tender footprint, our experienced team ensures your bid
          speaks the language of evaluators and demonstrates value, compliance,
          and capability.
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
          src="https://globallinklaw.com/wp-content/uploads/2024/04/international-contract-law.png"
          alt="International contract discussion"
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
          International Case Studies
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
          “Kittle Group transformed our approach to UK public procurement —
          their expertise bridged the cultural and technical gap perfectly.”
        </p>
        <p className="text-blue-400 font-semibold">
          — Bid Director, International Engineering Firm
        </p>
      </motion.section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </ServiceLayout>
  );
}
