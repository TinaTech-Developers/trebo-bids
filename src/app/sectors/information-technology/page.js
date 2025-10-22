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
    question: "Do you write bids for digital transformation projects?",
    answer:
      "Yes. We’ve supported multiple digital transformation and IT modernization frameworks, ensuring your technical excellence and innovation are clearly communicated.",
  },
  {
    question: "Can you assist with cybersecurity tenders?",
    answer:
      "Absolutely. We help clients demonstrate robust data protection, compliance, and risk management strategies that resonate with evaluators.",
  },
  {
    question: "Do you handle both public and private sector IT bids?",
    answer:
      "Yes — our experience spans central government, local authorities, and private corporations, including large-scale cloud and infrastructure frameworks.",
  },
  {
    question: "What types of IT contracts have you helped clients win?",
    answer:
      "We’ve supported bids in software development, cloud computing, network management, cybersecurity, and managed IT services.",
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

export default function InformationTechnologyPage() {
  const caseStudies = [
    {
      title: "National IT Infrastructure Renewal Programme",
      description:
        "Supported a large systems integrator in modernizing national digital infrastructure for improved resilience.",
    },
    {
      title: "Cloud Migration Framework for MoD",
      description:
        "Developed a high-scoring response showcasing expertise in secure cloud adoption and DevOps delivery.",
    },
    {
      title: "Digital Innovation Platform for Local Government",
      description:
        "Helped craft a winning bid emphasizing collaboration, scalability, and digital inclusivity.",
    },
    {
      title: "Data Analytics & AI Strategy for Home Office",
      description:
        "Provided structured content articulating complex data strategies in an accessible and evaluator-friendly format.",
    },
    {
      title: "Network Security Upgrade for NHS Digital",
      description:
        "Created compelling content outlining risk mitigation and cybersecurity excellence for healthcare systems.",
    },
  ];

  return (
    <ServiceLayout
      title="Information Technology"
      subtitle="Helping IT leaders secure digital transformation, infrastructure, and cybersecurity contracts."
      slides={[
        "Digital Transformation",
        "Cybersecurity",
        "Cloud & Infrastructure",
      ]}
      backgroundImage="https://bernardmarr.com/wp-content/uploads/2021/12/Future-Developments-of-AI.jpg"
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
          IT Bid Writing Excellence
        </h2>
        <p className="text-gray-300 leading-relaxed">
          The IT sector evolves quickly — and so does the competition. Kittle
          Group helps you clearly communicate your innovation, reliability, and
          technical capability to stand out in complex digital tenders.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          From digital transformation frameworks to cloud computing and
          cybersecurity bids, we transform technical details into persuasive,
          evaluator-friendly narratives that win.
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
          src="https://www.future-processing.com/blog/wp-content/uploads/2023/01/How-artificial-intelligence-will-change-the-future.jpg"
          alt="IT infrastructure and servers"
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
          How We Support IT Clients
        </h3>
        <p className="text-gray-300 mb-4">
          Our team has supported hundreds of IT service providers to secure
          large-scale government and private sector contracts. We specialize in
          presenting technical expertise in a structured, compelling format that
          demonstrates compliance and innovation.
        </p>
        <p className="text-gray-300">
          Whether your focus is cloud infrastructure, software engineering, or
          data analytics, we ensure your bids convey reliability, scalability,
          and strategic alignment with buyer requirements.
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
          src="https://media.licdn.com/dms/image/v2/C4E12AQETYiL8X_saBA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1629959752831?e=2147483647&v=beta&t=067Kk1zbSa-b1i3NDCOA7t3DLQWwt6VZjMbN7aAhEYk"
          alt="Cybersecurity concept"
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
          IT Case Studies
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

      {/* Quote / Testimonial */}
      <motion.section
        className="max-w-3xl mx-auto text-center px-6 mb-20 italic"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="text-gray-300 mb-4">
          “Kittle Group helped us articulate our complex technical offering into
          a clear, high-impact bid. Their understanding of digital frameworks is
          unmatched.”
        </p>
        <p className="text-blue-400 font-semibold">
          — Head of Bids, IT Solutions Provider
        </p>
      </motion.section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </ServiceLayout>
  );
}
