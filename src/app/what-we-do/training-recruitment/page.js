"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceLayout from "../_components/servicelayout";
import { CTASection } from "../_components/ctasection";
import { ProcessSection } from "../_components/processsection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function TrainingRecruitmentPage() {
  return (
    <ServiceLayout
      title="Training & Recruitment"
      subtitle="Tailored bid writer development and hiring solutions for growing organisations."
      slides={["Bid Writer Training", "Recruitment Support", "Team Capability"]}
      backgroundImage="https://images.unsplash.com/photo-1603570417039-5b62e3b1e6ae?auto=format&fit=crop&w=1600&q=80"
    >
      {/* Intro Section */}
      <motion.section
        className="text-center max-w-4xl mx-auto mb-16 px-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-4">
          Tailored Bid Writer Training for Your Team
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Kittle Group uses a specialised in-house bid writer training and
          development programme — both for our team and yours. By sharing the
          same proven techniques and strategies that we’ve refined internally,
          we enable your staff to receive the same high-quality training as our
          own expert writers.
        </p>
      </motion.section>

      {/* Testimonial 1 */}
      <motion.section
        className="max-w-3xl mx-auto px-6 mb-16 text-center italic"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="text-gray-300 mb-4">
          “Zoe was an absolute delight throughout the entire process. She took
          great care to make the material engaging and relevant to our business,
          ensuring that it aligned with our needs and specific areas of
          interest. Her ability to strike the perfect balance between
          informative and light-hearted sessions made the training enjoyable and
          impactful.”
        </p>
        <p className="text-blue-400 font-semibold">
          — Bid Manager, Outsourcing Provider
        </p>
      </motion.section>

      {/* Hiring and Training Section */}
      <motion.section
        className="bg-gray-800/50 rounded-2xl shadow-lg max-w-6xl mx-auto px-8 py-12 mb-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <h3 className="text-2xl font-semibold text-blue-300 mb-4 text-center">
          Hiring and Training Bid Writers for Your Business
        </h3>
        <p className="text-gray-300 mb-6 text-center">
          Many companies struggle to hire and train in-house bid writers.
          Without support, businesses often feel pressured to pay high salaries
          to attract talent or rely on untrained internal staff — resulting in
          frustration and short-term fixes.
          <br />
          <br />
          Kittle Group’s approach builds sustainable internal capability. By
          hiring promising new writers and providing them with structured
          training and mentorship, you can grow a strong internal team without
          competing in the salary war. Our process frees your leadership team to
          focus on core business, while we help develop reliable in-house
          bidding talent.
        </p>
      </motion.section>

      {/* Testimonial 2 */}
      <motion.section
        className="max-w-3xl mx-auto px-6 mb-16 text-center italic"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-gray-300 mb-4">
          “Their approach to screening and interviewing candidates added
          tremendous value, using tried and tested techniques we wouldn’t have
          otherwise had access to.”
        </p>
        <p className="text-blue-400 font-semibold">— Peter Corlett, MASS</p>
      </motion.section>

      {/* Support Packages Section */}
      <motion.section
        className="max-w-6xl mx-auto px-6 mb-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        <h3 className="text-2xl font-semibold text-blue-300 mb-8 text-center">
          Our Bid Writer Training & Recruitment Support
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-gray-800/50 p-6 rounded-2xl shadow-md hover:shadow-blue-400/10 transition"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold text-blue-400 mb-2">
              1. Hiring & Recruitment
            </h4>
            <p className="text-gray-300">
              Over the years, we’ve perfected the art of identifying bid writing
              potential in promising graduate and professional candidates. Let
              us help you recruit the right people to build your team.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800/50 p-6 rounded-2xl shadow-md hover:shadow-blue-400/10 transition"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <h4 className="text-xl font-bold text-blue-400 mb-2">
              2. Training & Development
            </h4>
            <p className="text-gray-300">
              Give your new joiners the same expert-level training we use
              internally. We continually refine our learning materials to ensure
              every session is engaging, practical, and effective.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800/50 p-6 rounded-2xl shadow-md hover:shadow-blue-400/10 transition"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-bold text-blue-400 mb-2">
              3. Combined Support
            </h4>
            <p className="text-gray-300">
              Let us handle both — sourcing and training your next bid writer.
              From candidate assessment to onboarding and skill development,
              we’ll tailor the process to your business culture and goals.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Closing CTA */}
      <motion.section
        className="max-w-3xl mx-auto text-center px-6 mb-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        <p className="text-gray-300 mb-4">
          We know that every client has a unique culture and set of needs. Get
          in touch and discover how our tailored bid writer training and
          recruitment services can help your business grow.
        </p>
      </motion.section>

      <ProcessSection />
      <CTASection />
    </ServiceLayout>
  );
}
