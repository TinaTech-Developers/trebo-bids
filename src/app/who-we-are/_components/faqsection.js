"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "What services does Trebo-BIDS offer?",
    answer:
      "We provide bid writing, bid management, and strategic advisory services — helping organizations craft winning proposals and secure competitive contracts.",
  },
  {
    question: "Who are your typical clients?",
    answer:
      "Our clients range from government entities and NGOs to private companies in construction, IT, professional services, and more.",
  },
  {
    question: "How long does a typical bid project take?",
    answer:
      "Project timelines vary based on bid complexity, but most engagements last between 1 to 4 weeks from strategy to submission.",
  },
  {
    question: "Do you offer training and workshops?",
    answer:
      "Yes. We provide tailored training programs to build bid capability and confidence within client teams.",
  },
  {
    question: "Can you help with international bids?",
    answer:
      "Absolutely! Trebo-BIDS has supported clients across borders with global tender submissions and compliance guidance.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl lg:text-5xl font-bold text-blue-400 mb-10"
        >
          Frequently Asked Questions
        </motion.h2>

        <p className="text-gray-400 max-w-3xl mx-auto mb-16">
          Have questions about how we work or what we offer? We’ve got answers
          to help you understand our process and services.
        </p>

        <div className="space-y-6 text-left">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left px-6 py-5 font-semibold text-lg text-white"
              >
                {faq.question}
                <ChevronDown
                  className={`w-6 h-6 text-blue-400 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6 text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full"></div>
      </div>
    </section>
  );
}
