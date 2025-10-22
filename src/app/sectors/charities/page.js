"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { CTASection } from "../_components/ctasection";
import ServiceLayout from "@/app/what-we-do/_components/servicelayout";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const faqItems = [
  {
    question: "Initial Consultation",
    answer:
      "We discuss your goals and understand your requirements to guide the bid process effectively.",
  },
  {
    question: "Research & Preparation",
    answer:
      "Gathering all necessary information and evaluating requirements to set your bid up for success.",
  },
  {
    question: "Drafting",
    answer:
      "Writing clear, compelling content tailored to the funder's expectations and your organisation's strengths.",
  },
  {
    question: "Review & Feedback",
    answer:
      "Refining your bid with constructive feedback to ensure clarity, consistency, and impact.",
  },
  {
    question: "Submission",
    answer:
      "Ensuring your application is compliant, polished, and submitted on time with confidence.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-blue-300 text-center mb-10">
        Our Bid Writing Process Explained
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

export default function CharitiesPage() {
  return (
    <ServiceLayout
      title="Charities & Not-for-Profits"
      subtitle="Helping you secure funding so you can keep making a difference."
      slides={["Grant Writing", "Funding Support", "Community Impact"]}
      backgroundImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80"
    >
      {/* Intro */}
      <motion.section
        className="text-center max-w-4xl mx-auto mb-16 px-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-4">
          Bid Writing for Charities and NFPs
        </h2>
        <p className="text-gray-300 leading-relaxed">
          You do great work — but with limited staff and volunteers, it can be
          hard to find the time and expertise to prepare compelling bids or
          funding applications. With competition for grants fiercer than ever,
          our team of expert bid writers can help you stand out and secure the
          resources you need to grow your impact.
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
          How We Help Charities Win Funding
        </h3>
        <p className="text-gray-300 leading-relaxed mb-6">
          Our writers understand exactly what funding authorities want to see.
          We’ll help you develop a clear, persuasive proposal that increases
          their confidence in your ability to deliver outcomes and create
          measurable social impact.
        </p>
        <p className="text-gray-300">
          To ease the strain on your budget, we offer deeply discounted day
          rates for registered charities, as well as ad-hoc pro-bono support for
          select organisations. Reach out to learn more about how we can help.
        </p>
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
          Charity Case Studies
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Offender Management Services",
              description:
                "Funding secured from Kent Police and Crime Commissioner for community rehabilitation initiatives.",
            },
            {
              title: "Domestic Abuse & Sexual Violence Services",
              description:
                "Winning urgent bids for intervention helplines and crisis support networks.",
            },
            {
              title: "Community Rehabilitation Company",
              description:
                "Delivered a complete, winning proposal within just three days to meet urgent funding needs.",
            },
            {
              title: "Rape Crisis England & Wales",
              description:
                "Supported national funding bids to expand outreach and survivor support programmes.",
            },
          ].map((caseItem, idx) => (
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
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-gray-300 mb-4">
          “Thanks to the team’s guidance, we secured the funding needed to
          continue providing essential community services. Their dedication and
          understanding of the charity sector are unmatched.”
        </p>
        <p className="text-blue-400 font-semibold">
          — Programme Director, UK Charity
        </p>
      </motion.section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </ServiceLayout>
  );
}
