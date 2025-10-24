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
  "Companies struggle to find skilled bid writers",
  "Existing staff may lack structured training",
  "High turnover and recruitment challenges",
  "Teams often fail to achieve consistent bid success",
];

const methodologySteps = [
  "Assessment & Screening",
  "Tailored Training Programmes",
  "Mentorship & Shadowing",
  "Capability Audits",
  "Ongoing Support",
];

const whoWeHelpPoints = [
  "Organisations building internal bid capability",
  "Teams seeking expert guidance and training",
  "Businesses aiming to attract and retain top bid talent",
];

const testimonials = [
  {
    quote:
      "“Kittle’s training and recruitment support completely transformed our bid team. Our success rate improved dramatically within months.”",
    author: "CEO, Nexa Solutions",
  },
  {
    quote:
      "“Their structured approach to hiring and developing bid writers has helped us build a high-performing internal team.”",
    author: "Bid Manager, GlobalTech Ltd",
  },
];

function TrainingRecruitmentPage() {
  return (
    <ServiceLayout
      title="Training & Recruitment"
      subtitle="Tailored bid writer development and hiring solutions for growing organisations."
      slides={["Bid Writer Training", "Recruitment Support", "Team Capability"]}
      backgroundImage="https://images.unsplash.com/photo-1603570417039-5b62e3b1e6ae?auto=format&fit=crop&w=1600&q=80"
    >
      {/* Intro Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center max-w-4xl mx-auto text-center mb-20 px-6"
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-6">
          Tailored Bid Writer Training & Recruitment
        </h2>
        <p className="text-gray-300 mb-4">
          We provide specialised training and recruitment services to help
          organisations build and grow high-performing bid teams. Our approach
          ensures your staff gain the skills and confidence to deliver winning
          bids.
        </p>
        <p className="text-gray-300">
          From candidate assessment to ongoing mentorship, we support your team
          every step of the way.
        </p>
      </motion.section>

      {/* Core Sections */}
      <IntroSection
        title="Let us do what we do best"
        author="Kittle"
        date="Oct 24-7575"
      />
      <ProblemSection problems={problems} />
      <SolutionSection
        text="By partnering with us, organisations can focus on core operations while we build and develop bid writing capability internally. Our structured approach ensures measurable improvements and sustainable team growth."
        stats="Over 90% of clients continue to work with us for ongoing development."
      />
      <MethodologySection steps={methodologySteps} />
      <WhoWeHelpSection
        clients="Our services are perfect for organisations of all sizes — from SMEs to multinational teams aiming to strengthen internal bid functions."
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

      {/* Key Benefits Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 mb-20"
      >
        <h3 className="text-3xl font-semibold text-blue-400 mb-10 text-center">
          Key Benefits of Our Training & Recruitment
        </h3>
        <div className="grid md:grid-cols-3 gap-8 text-gray-300">
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-400/30 transition">
            <h4 className="text-xl font-bold text-blue-300 mb-2">
              Skilled Teams
            </h4>
            <p>
              Build an internal team capable of delivering consistently winning
              bids.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-400/30 transition">
            <h4 className="text-xl font-bold text-blue-300 mb-2">
              Efficient Recruitment
            </h4>
            <p>
              Hire and onboard talented bid writers quickly with structured
              guidance.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-400/30 transition">
            <h4 className="text-xl font-bold text-blue-300 mb-2">
              Ongoing Support
            </h4>
            <p>
              Receive mentorship and capability audits to ensure long-term
              success.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <CTASection />
    </ServiceLayout>
  );
}

export default TrainingRecruitmentPage;
