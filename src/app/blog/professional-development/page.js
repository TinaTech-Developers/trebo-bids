"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BlogLayout from "@/app/blog/_components/bloglayout";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const faqItems = [
  {
    question: "What are the key stages of a winning bid?",
    answer:
      "From opportunity identification to post-submission review, each stage matters. Proper planning, compliance, and persuasive writing are key.",
  },
  {
    question: "How do I improve bid success rates?",
    answer:
      "Focus on understanding evaluator criteria, differentiating your offering, and maintaining clarity, accuracy, and compliance.",
  },
  {
    question: "Who should be on a bid team?",
    answer:
      "A mix of subject matter experts, bid writers, reviewers, and project managers ensures technical accuracy, readability, and timely submission.",
  },
  {
    question: "How do I handle multiple bids at once?",
    answer:
      "Prioritize opportunities, assign responsibilities, and maintain a centralized bid library to ensure consistency and efficiency.",
  },
];

const bidTips = [
  {
    id: 1,
    title: "Advice from the experts: Top traits of a winning bid team",
    date: "March 19, 2025",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "How to Win Bids and Tenders – Tips and Tricks",
    date: "January 29, 2025",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Bidding for Government Contracts – Expert Tips",
    date: "December 2, 2024",
    image:
      "https://images.unsplash.com/photo-1581091012184-7d8b3b50a6a1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "‘Can you find us tenders?’",
    date: "September 19, 2024",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Improving your bidding – lessons from tennis",
    date: "July 5, 2024",
    image:
      "https://images.unsplash.com/photo-1600181951734-9d94e9847866?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "How to improve your bidding and work winning",
    date: "March 20, 2024",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    title: "How to properly review your bid",
    date: "August 15, 2023",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function BidProcessPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const slides = ["Bid Process", "Winning Strategies", "Expert Insights"];

  return (
    <BlogLayout
      title="Bid Process"
      slides={slides}
      subtitle="Professional guidance, expert insights, and practical strategies to improve your bid success."
      backgroundImage="https://images.unsplash.com/photo-1581093588401-d30702bb1a4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* Introduction */}
      <motion.section
        className="max-w-4xl mx-auto mb-16 text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
          Mastering the Bid Process
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Winning bids require strategy, clarity, and an understanding of what
          evaluators value.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Kittle Group helps you navigate every step, ensuring compliance,
          persuasive content, and evaluator-focused presentation.
        </p>
      </motion.section>

      {/* Lifecycle */}
      <motion.section
        className="max-w-6xl mx-auto mb-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h3 className="text-3xl text-center font-semibold text-blue-300 mb-12">
          The Bid Lifecycle
        </h3>
        <div className="relative">
          {[
            {
              title: "Identify & Qualify",
              desc: "Research and prioritize bids aligned with your capabilities.",
            },
            {
              title: "Strategy & Planning",
              desc: "Plan your approach, resources, and win themes.",
            },
            {
              title: "Proposal Drafting",
              desc: "Craft structured, persuasive content.",
            },
            {
              title: "Review & QA",
              desc: "Ensure compliance, readability, and evaluator-friendly presentation.",
            },
            {
              title: "Submission & Follow-up",
              desc: "Submit on time and engage evaluators for clarification.",
            },
            {
              title: "Post-Bid Analysis",
              desc: "Review outcomes and refine your processes.",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className={`flex items-center mb-12 ${
                idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-400 text-black font-bold flex items-center justify-center z-10">
                {idx + 1}
              </div>
              <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 ml-6 mr-6 flex-1">
                <h4 className="text-xl font-bold text-blue-400 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-300">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="max-w-5xl mx-auto mb-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
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
      </motion.section>

      {/* Bid Tips & Insights (with images) */}
      <motion.section
        className="max-w-6xl mx-auto mb-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h3 className="text-2xl font-semibold text-blue-300 mb-8 text-center">
          Bid Tips & Insights
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bidTips.map((tip, idx) => (
            <Link key={tip.id} href={`/blog/bidding-tips/${tip.id}`}>
              <motion.div
                className="relative rounded-2xl overflow-hidden bg-gray-900/40 border border-gray-700 hover:border-blue-400 transition transform hover:scale-[1.02]"
                variants={fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    fill
                    className="object-cover opacity-80 hover:opacity-100 transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold text-blue-400 mb-2">
                    {tip.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{tip.date}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="max-w-5xl mx-auto text-center bg-gray-800/50 p-10 rounded-2xl mb-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h3 className="text-2xl font-semibold text-blue-300 mb-4">
          Ready to win your next bid?
        </h3>
        <p className="text-gray-300 mb-6">
          Contact our experts today and start crafting winning proposals.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-blue-500 transition"
        >
          Get Started
        </a>
      </motion.section>
    </BlogLayout>
  );
}
