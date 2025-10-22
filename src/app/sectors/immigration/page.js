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
    question: "Do you provide support for asylum and resettlement bids?",
    answer:
      "Yes. We have extensive experience supporting clients bidding for accommodation, welfare, and resettlement services under Home Office and local authority frameworks.",
  },
  {
    question: "Can you assist with detention and removal centre tenders?",
    answer:
      "Absolutely. We’ve supported numerous successful bids for Immigration Removal Centres (IRCs) and prisoner escorting services, providing technical and compliant submissions.",
  },
  {
    question: "Do you help small or first-time immigration service providers?",
    answer:
      "Yes — we guide smaller organisations through the tendering process, helping them navigate compliance and create winning proposals.",
  },
  {
    question: "What types of organisations do you work with?",
    answer:
      "Our clients include global facilities providers, specialist welfare organisations, housing providers, and transport companies within the immigration ecosystem.",
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

export default function ImmigrationPage() {
  const caseStudies = [
    {
      title: "Gatwick Immigration Removal Centre",
      description:
        "Supported successful rebid for major immigration removal operations in the South East.",
    },
    {
      title: "Accommodation for Asylum Seekers",
      description:
        "Helped our client secure a Home Office accommodation and welfare contract for asylum seekers.",
    },
    {
      title: "Refugee Resettlement",
      description:
        "Guided a humanitarian services provider through the resettlement bidding process, ensuring compliance and clarity.",
    },
    {
      title: "Hassockfield Immigration Removal Centre",
      description:
        "Delivered a high-scoring tender response that demonstrated welfare excellence and operational readiness.",
    },
    {
      title: "Heathrow Immigration Removal Centre",
      description:
        "Provided technical writing and evaluation insight to achieve top marks in delivery and risk management.",
    },
    {
      title: "Campsfield & Haslar IRC Contracts",
      description:
        "Advised clients bidding for multiple detention facilities with strong focus on safety, decency, and value.",
    },
  ];

  return (
    <ServiceLayout
      title="Immigration"
      subtitle="Helping leading providers win large-scale immigration, detention, and resettlement contracts."
      slides={[
        "Detention & Escorting",
        "Resettlement",
        "Accommodation & Welfare",
      ]}
      backgroundImage="hhttps://thumbs.dreamstime.com/b/immigration-sign-airport-inscription-pointer-concept-photo-passport-control-arrow-official-service-signpost-issue-banner-138083351.jpg"
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
          Immigration Bid Writing
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Kittle Group has unique insight and expertise in the immigration
          sector, having helped clients win billions of pounds in contracts
          across refugee resettlement, immigration detention, housing, and
          transport.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          Our founder’s direct experience managing £200m+ contracts annually
          within central government gives us an unrivalled understanding of what
          evaluators expect — and how to build winning, compliant submissions.
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
          src="https://citizenpath.com/cpwp/wp-content/uploads/2019/10/immigration-papers-documentation.jpg"
          alt="Immigration Services Team"
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
          How We Help Immigration Clients
        </h3>
        <p className="text-gray-300 mb-4">
          From housing and welfare to detention and resettlement, we help
          clients clearly communicate their operational excellence, compliance,
          and social responsibility. Our writers ensure each submission meets
          Home Office and local authority standards.
        </p>
        <p className="text-gray-300">
          Whether you are a large facilities provider or a specialist welfare
          organisation, we craft tailored, high-scoring bid responses that build
          evaluator confidence in your delivery capability.
        </p>
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
          Immigration Case Studies
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
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-gray-300 mb-4">
          “Kittle Group’s deep understanding of immigration operations made our
          bid far stronger. Their insights were game-changing.”
        </p>
        <p className="text-blue-400 font-semibold">
          — Head of Bids, Immigration Services Provider
        </p>
      </motion.section>

      {/* Additional Image */}
      <motion.section
        className="max-w-5xl mx-auto mb-20 px-6 relative h-64 md:h-96 rounded-xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Image
          src="https://www.dixcartuk.com/wp-content/uploads/1024photo-1593781493149-9cec4faaa7d2.jpg"
          alt="Humanitarian Aid and Resettlement"
          fill
          className="object-cover"
        />
      </motion.section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </ServiceLayout>
  );
}
