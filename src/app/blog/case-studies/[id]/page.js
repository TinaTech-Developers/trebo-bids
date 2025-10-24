"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import BlogLayout from "@/app/blog/_components/bloglayout";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const caseStudies = [
  {
    id: 1,
    title: "Winning Government Tenders with Strategy",
    date: "April 12, 2025",
    hero: "https://images.unsplash.com/photo-1592496001024-0df4f0635a17?auto=format&fit=crop&w=1200&q=80",
    content:
      "<p>How Kittle Group helped a client win multiple local government tenders through strategic bid writing and compliance.</p><p>Challenge: The client struggled with understanding government evaluation criteria and lacked a structured bid process.</p><p>Solution: Kittle Group provided a tailored bid strategy, templates, and expert review at every stage.</p><p>Result: Successfully won 3 government tenders within 6 months, exceeding expectations.</p>",
  },
  {
    id: 2,
    title: "Boosting Contract Success for SMEs",
    date: "February 19, 2025",
    hero: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200&q=80",
    content:
      "<p>Case study showing how structured bid management increased contract wins for small and medium-sized businesses.</p><p>Challenge: SMEs had limited resources to prepare compliant bids and struggled to stand out.</p><p>Solution: We implemented a streamlined bid library and conducted training for the internal team.</p><p>Result: Increased bid success rate from 20% to 65% within a year.</p>",
  },
  // Add more case studies here...
];

export default function CaseStudyPost({ params }) {
  const post = caseStudies.find((p) => p.id.toString() === params.id);
  if (!post) return notFound();

  return (
    <BlogLayout
      title={post.title}
      subtitle={post.date}
      slides={["Case Studies", "Success Stories"]}
      backgroundImage={post.hero}
    >
      <motion.article
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-3 px-4 sm:px-6 lg:px-8"
      >
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            variants={fadeUp}
            className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/10"
          >
            <Image
              src={post.hero}
              alt={post.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="prose prose-invert max-w-none text-gray-300 prose-headings:text-blue-300 prose-strong:text-gray-100"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Sidebar */}
        <motion.aside
          variants={fadeUp}
          className="lg:col-span-1 space-y-6 lg:pl-6"
        >
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/70 border border-gray-700/60 p-6 rounded-2xl backdrop-blur-md hover:border-blue-500/40 transition">
            <h4 className="text-blue-400 font-bold mb-3 text-lg">
              Related Case Studies
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {caseStudies
                .filter((p) => p.id !== post.id)
                .slice(0, 3)
                .map((related) => (
                  <li key={related.id}>
                    <a
                      href={`/blog/case-studies/${related.id}`}
                      className="text-blue-300 hover:text-blue-400 hover:underline"
                    >
                      {related.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </motion.aside>
      </motion.article>
    </BlogLayout>
  );
}
