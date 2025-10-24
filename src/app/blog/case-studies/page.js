"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BlogLayout from "@/app/blog/_components/bloglayout";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

// Sample case studies data
const caseStudies = [
  {
    id: 1,
    title: "Winning Government Tenders with Strategy",
    client: "City Council Procurement",
    date: "April 12, 2025",
    summary:
      "How Kittle Group helped a client win multiple local government tenders through strategic bid writing and compliance.",
    image:
      "https://images.unsplash.com/photo-1592496001024-0df4f0635a17?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Boosting Contract Success for SMEs",
    client: "Tech Innovators Ltd.",
    date: "February 19, 2025",
    summary:
      "Case study showing how structured bid management increased contract wins for small and medium-sized businesses.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Social Value in Public Contracts",
    client: "Community Development Org",
    date: "October 5, 2024",
    summary:
      "Demonstrating the impact of including social value strategies in proposals to improve win rates and community impact.",
    image:
      "https://images.unsplash.com/photo-1611078484600-fd1216b2e7f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Post-Brexit Contract Wins",
    client: "Logistics Solutions Inc.",
    date: "June 14, 2024",
    summary:
      "Navigating the post-Brexit procurement environment to secure contracts that were previously considered challenging.",
    image:
      "https://images.unsplash.com/photo-1601597111035-51e420ff4a57?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function CaseStudiesPage() {
  const slides = ["Case Studies", "Success Stories", "Expert Wins"];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <BlogLayout
      title="Case Studies"
      slides={slides}
      subtitle="Explore our client success stories and see how strategic bidding and expert guidance deliver results."
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
          Our Case Studies
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Discover how Kittle Group has helped clients achieve success across
          multiple industries through strategic bid management and expert
          insights.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Each case study highlights challenges, solutions, and results to
          inspire and guide your own approach.
        </p>
      </motion.section>

      {/* Case Studies Grid */}
      <motion.section
        className="max-w-6xl mx-auto mb-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h3 className="text-2xl font-semibold text-blue-300 mb-8 text-center">
          Featured Case Studies
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, idx) => (
            <Link
              key={caseStudy.id}
              href={`/blog/case-studies/${caseStudy.id}`}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden bg-gray-900/40 border border-gray-700 hover:border-blue-400 transition transform hover:scale-[1.02]"
                variants={fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover opacity-80 hover:opacity-100 transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold text-blue-400 mb-2">
                    {caseStudy.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">
                    {caseStudy.client}
                  </p>
                  <p className="text-gray-400 text-sm">{caseStudy.date}</p>
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
          {[
            {
              question: "How do case studies help my business?",
              answer:
                "They provide insights into successful strategies, highlight pitfalls to avoid, and show real-world results you can apply.",
            },
            {
              question: "Can we get a tailored case study?",
              answer:
                "Yes, we can provide tailored examples relevant to your industry or challenge upon request.",
            },
          ].map((item, idx) => (
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
          Want to achieve similar results?
        </h3>
        <p className="text-gray-300 mb-6">
          Contact our experts today and let’s explore how we can help your
          business win.
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
