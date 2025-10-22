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
  "Not achieving the scores or results you expected on recent bids",
  "Uncertain whether your responses meet the buyer’s evaluation criteria",
  "Lack of in-house bid writing expertise or time for in-depth reviews",
  "Needing assurance before hitting the ‘Submit’ button",
];

const methodologySteps = [
  "Compliance Check – ensuring all buyer requirements are addressed",
  "Evidence Review – assessing how well your responses prove capability and experience",
  "Clarity Review – refining structure, tone, and readability for maximum impact",
  "Score Simulation – providing an evaluator-style assessment",
  "Actionable Feedback – giving practical improvement recommendations",
];

const whoWeHelpPoints = [
  "Businesses seeking expert validation before submission",
  "Organisations wanting to understand why bids haven’t scored higher",
  "Teams looking for professional guidance without full outsourcing",
];

export default function BidReviewServicePage() {
  return (
    <ServiceLayout
      title="Bid Review Service"
      subtitle="An expert eye to strengthen your in-house bids and improve results."
      slides={["Evaluator Insight", "Expert Feedback", "Improved Scores"]}
      backgroundImage="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80"
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
          Bid Review with Trebo-Bids
        </h2>
        <p className="text-gray-300 mb-4">
          Our Senior Writers offer a full bid review service — a detailed,
          evaluator-style assessment of your tender responses before submission.
          We identify strengths, highlight areas for improvement, and provide
          actionable advice to boost your chances of success.
        </p>
      </motion.section>

      {/* Section 1 */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <IntroSection
          title="Bid Review Service – Expert Feedback That Drives Results"
          author="Trebo-Bids"
          date="2025"
        />
      </motion.div>

      {/* Section 2 */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <ProblemSection problems={problems} />
      </motion.div>

      {/* Section 3 */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <SolutionSection
          text="Whether you’re submitting a bid soon or want to understand why previous submissions underperformed, our review service gives you clear direction and confidence. Each review is conducted by senior professionals with real-world evaluation experience."
          stats="Trebo-Bids reviews are fast, insightful, and designed to help you win more tenders."
        />
      </motion.div>

      {/* Section 4 */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <MethodologySection steps={methodologySteps} />
      </motion.div>

      {/* Section 5 */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <WhoWeHelpSection
          clients="Our Bid Review Service supports organisations of all sizes — from start-ups to global enterprises — who want to refine their bids with precision and insight."
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
          “Thank you so much for your reviews — the team found them incredibly
          useful!”
        </p>
        <p className="text-blue-400 font-semibold">
          — Business Development Director, Global Security Company
        </p>
      </motion.section>

      {/* Process + CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ProcessSection />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <CTASection />
      </motion.div>
    </ServiceLayout>
  );
}
