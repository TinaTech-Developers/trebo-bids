"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceLayout from "../_components/servicelayout";
import {
  IntroSection,
  ProblemSection,
  SolutionSection,
  MethodologySection,
  WhoWeHelpSection,
} from "../_components/bidwritingsections";
import { ProcessSection } from "../_components/processsection";
import { CTASection } from "../_components/ctasection";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const problems = [
  "They weren’t sure how best to respond to bids",
  "They had less time to run their business",
  "Their answers were often put together in a rush",
  "They didn’t get the wins they were hoping for",
];

const methodologySteps = [
  "Read In and Preparation",
  "Interviews",
  "Drafts",
  "Reviews",
  "Submission",
];

const whoWeHelpPoints = [
  "They want the best bidding process possible",
  "They understand the benefits of specialised bid writing",
  "They know about our consultancy",
];

const testimonials = [
  {
    quote:
      "“Working with Kittle’s bid writing team completely transformed our approach. Our success rate doubled in just 6 months.”",
    author: "CEO, Apex Solutions",
  },
  {
    quote:
      "“The clarity, structure, and insight in every proposal was phenomenal. We finally started winning the bids we wanted.”",
    author: "Director, GlobalTech Ltd",
  },
];

function BidWritingServicePage() {
  return (
    <ServiceLayout
      title="Bid & Tender Writing Service"
      subtitle="Expertly crafted bids that maximize your chances of winning contracts."
      slides={["Winning Bids", "Expert Writing", "High-Value Contracts"]}
      backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
    >
      {/* Intro */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center max-w-4xl mx-auto text-center mb-20 px-6"
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-6">What We Offer</h2>
        <p className="text-gray-300 mb-4">
          Our Bid & Tender Writing Service ensures that your proposals are
          clear, compelling, and compliant. We take a strategic approach that
          maximizes your chances of winning high-value contracts.
        </p>
        <p className="text-gray-300">
          From understanding your client’s needs to crafting persuasive
          narratives and ensuring compliance, our team supports you at every
          step of the bidding journey.
        </p>
      </motion.section>

      {/* Core Sections */}
      <IntroSection
        title="Let us do what we do best"
        author="Kittle"
        date="Jan 25-7574"
      />
      <ProblemSection problems={problems} />
      <SolutionSection
        text="By partnering with us, clients can focus on doing what they do best: running their business. They can trust us to guide them through the process and, most importantly, they get better results."
        stats="90% of our clients come back for multiple bids because of our high success rate."
      />
      <MethodologySection steps={methodologySteps} />
      <WhoWeHelpSection
        clients="Our services are ideal for organizations of all sizes: from SMEs bidding for local contracts to large corporations targeting complex national or international tenders."
        points={whoWeHelpPoints}
      />

      {/* Enhanced Testimonials */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 mb-20"
      >
        <h3 className="text-3xl font-semibold text-blue-400 text-center mb-12">
          Client Success Stories
        </h3>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 shadow-lg hover:shadow-blue-400/20 transition"
            >
              <p className="text-gray-300 italic mb-4">{t.quote}</p>
              <p className="text-blue-400 font-semibold">{t.author}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Process & CTA */}
      <ProcessSection />

      {/* Add Key Benefits Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 mb-20"
      >
        <h3 className="text-3xl font-semibold text-blue-400 mb-10 text-center">
          Key Benefits of Our Service
        </h3>
        <div className="grid md:grid-cols-3 gap-8 text-gray-300">
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-400/30 transition">
            <h4 className="text-xl font-bold text-blue-300 mb-2">
              Winning Proposals
            </h4>
            <p>
              Structured, persuasive, and client-focused proposals that win
              contracts consistently.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-400/30 transition">
            <h4 className="text-xl font-bold text-blue-300 mb-2">
              Time Efficiency
            </h4>
            <p>
              Free your team from the stress of writing bids so they can focus
              on core business.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-400/30 transition">
            <h4 className="text-xl font-bold text-blue-300 mb-2">
              Expert Guidance
            </h4>
            <p>
              Receive insights from experienced bid consultants on strategy,
              compliance, and presentation.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <CTASection />
    </ServiceLayout>
  );
}

export default BidWritingServicePage;
