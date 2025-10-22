// app/services/bid-management-service/page.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceLayout from "../_components/servicelayout";
import { ProcessSection } from "../_components/processsection";
import { CTASection } from "../_components/ctasection";
import {
  IntroSection,
  ProblemSection,
  SolutionSection,
  MethodologySection,
  WhoWeHelpSection,
} from "../_components/bidwritingsections";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const problems = [
  "Unclear roles or miscommunication slowing down bid progress",
  "Tight submission deadlines creating unnecessary pressure",
  "Disorganised documentation and lack of version control",
  "No clear project ownership or structure within the bid team",
];

const methodologySteps = [
  "People – defining roles, aligning goals, and maintaining communication across your bid team.",
  "Timing – creating and maintaining a detailed project plan, ensuring every deadline is met.",
  "Documentation – managing folders, governance, reviews, and final submission materials.",
  "Oversight – maintaining control and visibility at every stage of the bid.",
  "Continuous Improvement – building a reusable library of materials for future bids.",
];

const whoWeHelpPoints = [
  "Businesses that frequently submit tenders or RFPs",
  "Teams lacking in-house bid management expertise",
  "Organisations that need a structured, start-to-finish process",
  "Companies seeking stress-free and professionally handled bids",
];

export default function BidManagementPage() {
  return (
    <ServiceLayout
      title="Bid Management Service"
      subtitle="Comprehensive, end-to-end bid management from planning to submission."
      slides={[
        "Complete Oversight",
        "Expert Coordination",
        "Stress-Free Bidding",
      ]}
      backgroundImage="https://images.unsplash.com/photo-1605902711622-cfb43c4437f9?auto=format&fit=crop&w=1600&q=80"
    >
      {/* Intro Section */}
      <motion.section
        className="flex flex-col items-center max-w-4xl mx-auto text-center mb-20 px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-6">
          Let Trebo-Bids Manage Your Entire Bid Process
        </h2>
        <p className="text-gray-300 mb-4">
          Our comprehensive Bid Management Service takes the stress out of
          tendering by handling the full process from start to finish. We manage
          people, timing, and documentation — ensuring your bid is delivered
          efficiently, accurately, and on time.
        </p>
      </motion.section>

      {/* Section Blocks with Motion */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <IntroSection
          title="Comprehensive Bid Management Service"
          author="Trebo-Bids"
          date="2025"
        />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <ProblemSection problems={problems} />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <SolutionSection
          text="Our bid management consultants oversee the entire bidding process on your behalf, ensuring clarity, collaboration, and compliance throughout. From planning through to submission, we coordinate your team, maintain documentation, and guarantee that deadlines are met with confidence."
          stats="We remove the pressure of bid delivery — so you can focus on running your business."
        />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <MethodologySection steps={methodologySteps} />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <WhoWeHelpSection
          clients="Our bid management solutions are ideal for organisations that want complete oversight and control without the burden of managing it all internally."
          points={whoWeHelpPoints}
        />
      </motion.div>

      {/* Testimonial */}
      <motion.section
        className="py-12 max-w-4xl mx-auto px-6 text-center text-gray-300 italic"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="mb-2 text-lg">
          “We always have confidence that everything is under control — bids are
          submitted on time and to the highest quality.”
        </p>
        <p className="text-blue-400 font-semibold">
          — CEO, Strategic Consultancy (UK)
        </p>
      </motion.section>

      {/* Extra Info */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <SolutionSection text="At Trebo-Bids, our experienced bid management consultants become an extension of your team. We offer clear advice, transparent communication, and a proven process that consistently delivers results." />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <SolutionSection text="We can also provide bid training for in-house teams — helping you recruit, train, and equip your staff to handle future tenders with confidence." />
      </motion.div>

      {/* Footer sections */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <ProcessSection />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <CTASection />
      </motion.div>
    </ServiceLayout>
  );
}
