"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BlogLayout from "@/app/blog/_components/bloglayout";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const faqItems = [
  {
    question: "How often are industry insights published?",
    answer:
      "We publish new insights whenever there's relevant data, trends, or expert analysis that can help businesses improve their bidding and strategy.",
  },
  {
    question: "Who writes the insights?",
    answer:
      "Our insights are written by industry experts and experienced bid writers to ensure accuracy, relevance, and actionable advice.",
  },
  {
    question: "Can I suggest a topic for an insight?",
    answer:
      "Yes! You can contact us with your suggestion and, if relevant, we may publish it as part of our insights series.",
  },
];

const industryInsights = [
  {
    id: 1,
    title: "Kittle Group named in the FT1000 Fastest Growing Companies List",
    date: "March 4, 2025",
    image:
      "https://images.unsplash.com/photo-1581093588401-d30702bb1a4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 2,
    title: "Introduction to TUPE and bid writing",
    date: "June 26, 2024",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "How to improve your bidding and work winning",
    date: "March 20, 2024",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Adverse Selection in Bidding: When Buyers Get Procurement Wrong",
    date: "February 21, 2024",
    image:
      "https://images.unsplash.com/photo-1581091012184-7d8b3b50a6a1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "What is bid writing?",
    date: "May 26, 2023",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Insight #4: The purpose of bid writing",
    date: "August 31, 2022",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    title: "Insight #2: Rewards of specialisation in bid writing",
    date: "August 25, 2022",
    image:
      "https://images.unsplash.com/photo-1600181951734-9d94e9847866?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    title: "Kittle Group Guide to Social Value",
    date: "October 20, 2020",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    title: "Demonstrating social value",
    date: "January 10, 2020",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 10,
    title: "ISO accreditation – do I need it?",
    date: "November 1, 2019",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 11,
    title: "The tendering process – a two-way partnership",
    date: "June 17, 2019",
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 12,
    title: "Bidding for Contracts Post Brexit",
    date: "February 14, 2019",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function IndustryInsightPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const slides = ["Industry Insight", "Trends", "Expert Analysis"];

  const slugify = (title) =>
    title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

  return (
    <BlogLayout
      title="Industry Insight"
      slides={slides}
      subtitle="Explore our latest insights, analysis, and expert commentary on bidding and industry trends."
      backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80"
    >
      {/* Introduction */}
      <motion.section
        className="max-w-4xl mx-auto mb-16 text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
          Industry Insights
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Stay up-to-date with the latest industry trends, expert commentary,
          and actionable insights.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Our team provides analysis to help you make informed decisions,
          improve bidding strategies, and understand market dynamics.
        </p>
      </motion.section>

      {/* Insights Grid with Images */}
      <motion.section
        className="max-w-6xl mx-auto mb-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h3 className="text-2xl font-semibold text-blue-300 mb-8 text-center">
          All Insights
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryInsights.map((insight, idx) => (
            <Link
              key={insight.id}
              href={`/blog/industry-insight/${insight.id}`}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden bg-gray-900/40 border border-gray-700 hover:border-blue-400 transition transform hover:scale-[1.02]"
                variants={fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover opacity-80 hover:opacity-100 transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold text-blue-400 mb-2">
                    {insight.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{insight.date}</p>
                </div>
              </motion.div>
            </Link>
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
      {/* CTA Section */}
      <motion.section
        className="max-w-5xl mx-auto text-center bg-gray-800/50 p-10 rounded-2xl mb-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h3 className="text-2xl font-semibold text-blue-300 mb-4">
          Want more insights?
        </h3>
        <p className="text-gray-300 mb-6">
          Subscribe to get the latest industry updates and expert analysis
          directly.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-blue-500 transition"
        >
          Contact Us
        </a>
      </motion.section>
    </BlogLayout>
  );
}
