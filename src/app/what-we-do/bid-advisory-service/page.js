"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceLayout from "../_components/servicelayout";
import { ProcessSection } from "../_components/processsection";
import { CTASection } from "../_components/ctasection";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function BidAdvisoryService() {
  return (
    <ServiceLayout
      title="Bid Advisory Service"
      subtitle="Understand exactly how to win your bid with guidance from bidding experts."
      slides={["Strategy", "Guidance", "Growth"]}
      backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
    >
      {/* Intro Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center max-w-4xl mx-auto text-center mb-20 px-6"
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-4">
          Bid Winning Advisory – Let’s Take Your Bidding to the Next Level
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Whether you’re aiming to set a winning bid strategy, develop a
          high-performing bid function, or get expert insight into a must-win
          tender, our Bid Advisory Service gives you direct access to
          experienced professionals who understand what it takes to win.
        </p>
      </motion.section>
      {/* Why Choose Bid Advisory */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 max-w-6xl mx-auto px-6 mb-20 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left - Text */}
        <div>
          <h3 className="text-3xl font-semibold text-blue-400 mb-6">
            Why Choose Bid Advisory?
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Your goal is to deliver winning bids that delight leadership and
            drive business growth. But if your process isn’t producing the
            results you want — or you’re unsure how to structure a strong bid
            function — our experts can help. From bid strategy to team
            capability audits, we offer tailored support with proven results.
          </p>
          <p className="text-gray-400">
            We’ve helped countless organisations transform their bidding
            performance, giving them clarity, direction, and confidence to win.
          </p>
        </div>

        {/* Right - Testimonial Card */}
        <motion.div
          variants={fadeUp}
          className="bg-gradient-to-br from-gray-900/80 to-blue-900/40 p-8 rounded-2xl shadow-xl text-center border border-blue-800/30"
        >
          <p className="italic text-gray-200 mb-4">
            “Working with Trebo-Bids has revolutionised bidding for us. They’ve
            transformed how we manage bids, reduced stress, and improved our win
            rate.”
          </p>
          <p className="text-blue-400 font-semibold">
            — CEO, The Nichols Group
          </p>
        </motion.div>
      </motion.section>

      {/* Meet Our Bid Advisory Directors */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 mb-20 text-center"
      >
        <h3 className="text-3xl font-semibold text-blue-400 mb-10">
          Meet Our Bid Advisory Directors
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Sam",
              title:
                "Managing Director – Strategic Growth & Bid Team Development",
              desc: "Guided Trebo-Bids’ growth to multi-million turnover and helps organisations structure and optimise bid teams for success.",
            },
            {
              name: "Alan",
              title: "Founder – Procurement & Process Specialist",
              desc: "With 20 years’ experience in procurement and government advisory, Alan helps clients build structured, effective bid systems.",
            },
            {
              name: "Chris",
              title: "Director – Quality Assurance & Writer Development",
              desc: "Advised on billion-pound winning bids across defence, tech, and engineering. Conducts team capability audits and training programs.",
            },
          ].map((person, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.03 }}
              className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 shadow-md hover:shadow-blue-400/10 transition"
            >
              <h4 className="text-xl font-bold text-blue-300 mb-2">
                {person.name}
              </h4>
              <p className="text-gray-400 text-sm mb-4">{person.title}</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {person.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How We Can Help & Who We Work With */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 mb-20"
      >
        {/* How We Can Help */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-blue-400/40 transition">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">
            How We Can Help You
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>• 1:1 online bid workshops with senior experts</li>
            <li>• Guidance on scoring questions and writing strategies</li>
            <li>• Insights on sustainability and social value responses</li>
            <li>• Independent audits and capability reviews</li>
            <li>• Long-term partnerships to boost bid performance</li>
          </ul>
        </div>

        {/* Who We Work With */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-blue-400/40 transition">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">
            Who We Work With
          </h3>
          <p className="text-gray-300 mb-4">
            We support all levels of bidding maturity — from individuals to
            global bid teams — with tailored advice and frameworks for success.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li>• Bid managers and bid leads seeking expert direction</li>
            <li>• Business owners bidding for the first time</li>
            <li>• CEOs and leaders building or restructuring bid teams</li>
          </ul>
        </div>
      </motion.section>

      {/* How We Help */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-12 bg-gray-900/50 rounded-2xl max-w-5xl mx-auto px-6 mb-16"
      >
        <h3 className="text-2xl font-semibold text-blue-400 mb-4">
          How We Can Help You
        </h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            1:1 online bid workshops – walk through your procurement documents
            with a senior expert
          </li>
          <li>
            Guidance on scoring questions and developing clear, compelling
            answers
          </li>
          <li>
            Strategic insight into social value and sustainability responses
          </li>
          <li>Independent audits and team capability reviews</li>
          <li>Long-term advisory partnerships to strengthen bid performance</li>
        </ul>
      </motion.section>

      {/* Who We Help */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 mb-16"
      >
        <h3 className="text-2xl font-semibold text-blue-400 mb-4">
          Who We Work With
        </h3>
        <p className="text-gray-300 mb-4">
          Our advisory services support all levels of bidding maturity — from
          individual bid leads to global bid teams.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Bid managers and bid leads seeking expert guidance</li>
          <li>Business owners bidding for the first time</li>
          <li>CEOs and leaders building new bid teams or strategies</li>
        </ul>
      </motion.section>

      {/* Quote */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-12 text-center max-w-4xl mx-auto px-6 text-gray-300 italic"
      >
        <p className="mb-2 text-lg">
          “Getting started on the right foot is critical. A small mistake early
          can cost you the bid — we’ll help you set the right course from day
          one.”
        </p>
        <p className="text-blue-400 font-semibold">
          — Trebo-Bids Advisory Team
        </p>
      </motion.section>

      <ProcessSection />
      <CTASection />
    </ServiceLayout>
  );
}

export default BidAdvisoryService;
