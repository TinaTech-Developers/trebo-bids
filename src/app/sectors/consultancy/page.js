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
      "We discuss your objectives, understand your requirements, and outline the bid strategy for maximum impact.",
  },
  {
    question: "Research & Preparation",
    answer:
      "Our team gathers all relevant information, evaluates requirements, and identifies opportunities to highlight your strengths.",
  },
  {
    question: "Drafting",
    answer:
      "Clear, persuasive, and technically accurate content is created to address every evaluation criterion and score highly.",
  },
  {
    question: "Review & Feedback",
    answer:
      "We refine your bid with constructive feedback, ensuring clarity, consistency, and adherence to compliance requirements.",
  },
  {
    question: "Submission",
    answer:
      "Final checks are completed to ensure a polished, compliant bid is submitted on time with confidence.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-blue-300 text-center mb-10">
        Our Consultancy Bid Process
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

export default function ConsultancyPage() {
  const caseStudies = [
    {
      title: "Palace of Westminster Restoration and Renewal Programme",
      description:
        "Supported consultancy client in presenting strategic solutions for heritage restoration.",
    },
    {
      title: "Strategic review of Network Rail’s procurement strategy",
      description:
        "Delivered insights and recommendations for the Office of Rail and Road.",
    },
    {
      title:
        "Development of priority targets for the Office of Environmental Protection (OEP), DEFRA",
      description:
        "Guided consultancy client on priority initiatives to align with government objectives.",
    },
    {
      title: "Army Efficiency Programme for the Ministry of Defence",
      description:
        "Assisted client in demonstrating operational improvements and efficiency strategies.",
    },
    {
      title: "Thames Water programme partner",
      description:
        "Helped articulate innovative solutions and project management capabilities.",
    },
    {
      title:
        "Management Consultancy Framework three (MCF3) & HS2 Project Representative",
      description:
        "Provided technical bid writing support for large-scale infrastructure and consultancy frameworks.",
    },
  ];

  return (
    <ServiceLayout
      title="Consultancy"
      subtitle="Helping consultancies win strategic public sector contracts with clarity and impact."
      slides={[
        "Government Frameworks",
        "Operational Excellence",
        "Strategic Advisory",
      ]}
      backgroundImage="https://images.unsplash.com/photo-1581091215366-2c33a5e4dcf5?auto=format&fit=crop&w=1600&q=80"
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
          Consultancy Bid Writing
        </h2>
        <p className="text-gray-300 leading-relaxed">
          With our support, our clients continue to win large and strategic
          contracts across government and the wider public sector. We have
          helped some of the world’s largest consultancies present their
          incredible people and innovative solutions in a way that resonates
          with public sector evaluators.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          Our experience spans a range of consultancy bids, including major CCS
          frameworks, operational efficiency programmes, and project and
          programme management contracts. We combine technical expertise with
          clear, persuasive writing to maximise your chances of success.
        </p>
      </motion.section>

      {/* How We Help Section */}
      <motion.section
        className="max-w-5xl mx-auto mb-20 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h3 className="text-2xl font-semibold text-blue-300 mb-6">
          How We Help Consultancy Clients
        </h3>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <p className="text-gray-300 mb-4">
              We help consultancy clients articulate their people, expertise,
              and innovative solutions to meet public sector evaluation
              requirements. Our team ensures proposals are clear, compelling,
              and compliant.
            </p>
            <p className="text-gray-300 mb-4">
              From strategy design to technical responses, our bid writers
              deliver high-quality submissions that maximise scoring potential.
              We support clients from initial consultation through to final
              submission.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="https://media.istockphoto.com/id/1947499362/photo/happy-group-of-business-people-discussing-strategy-during-team-meeting-at-the-office-desk.jpg?s=612x612&w=0&k=20&c=UXPrlQx09d8EP4_kTdAa-vC2LxD_ppY1tiG7eTPGVbE="
              alt="Consultancy team at work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Case Studies */}
      <motion.section
        className="max-w-6xl mx-auto mb-24 px-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-blue-300 text-center mb-10">
          Consultancy Case Studies
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

      {/* Quote / Impact */}
      <motion.section
        className="max-w-3xl mx-auto text-center px-6 mb-20 italic"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-gray-300 mb-4">
          “Working with this team has transformed the way we approach public
          sector bids. They understand our business strategy and help us present
          it clearly to evaluators.”
        </p>
        <p className="text-blue-400 font-semibold">
          — Senior Partner, Leading Consultancy
        </p>
      </motion.section>

      {/* Additional Visual / Illustration */}
      <motion.section
        className="max-w-5xl mx-auto mb-20 px-6 relative h-64 md:h-96 rounded-xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Image
          src="/Consultancy strategy session.jpg"
          alt="Consultancy strategy session"
          fill
          className="object-cover rounded-xl"
        />
      </motion.section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </ServiceLayout>
  );
}
