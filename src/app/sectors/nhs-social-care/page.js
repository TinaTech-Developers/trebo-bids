"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ServiceLayout from "@/app/what-we-do/_components/servicelayout";
import { CTASection } from "../_components/ctasection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// FAQ data
const faqItems = [
  {
    question: "Do you support NHS and social care bids?",
    answer:
      "Yes. We’ve helped providers secure contracts for hospital services, home care, community support, and social care frameworks.",
  },
  {
    question: "Can you assist smaller local authorities or charities?",
    answer:
      "Absolutely. We guide organisations of all sizes through the tendering process and help produce high-quality, compliant submissions.",
  },
  {
    question:
      "Do you provide support for both NHS and private healthcare providers?",
    answer:
      "Yes — our experience spans NHS Trusts, local councils, and private healthcare organisations.",
  },
  {
    question: "What types of services have you helped secure?",
    answer:
      "We’ve supported bids for hospital facilities, patient transport, mental health programmes, social care delivery, and integrated community services.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
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
    </section>
  );
}

export default function NHSPage() {
  const caseStudies = [
    {
      title: "Community Health and Wellbeing Partnership – NHS England",
      image:
        "https://img.freepik.com/free-photo/senior-woman-talking-with-nurse-home_23-2149143890.jpg",
    },
    {
      title: "Integrated Care Services Framework – Local Councils",
      image:
        "https://img.freepik.com/premium-photo/young-caregiver-assisting-senior-patient-hospital_1028938-270674.jpg",
    },
    {
      title: "Mental Health Support Programme – NHS Trusts",
      image:
        "https://img.freepik.com/premium-photo/group-therapist-talking-patients-hospital_1028938-232456.jpg",
    },
    {
      title: "Hospital Facilities Management – Major NHS Sites",
      image:
        "https://img.freepik.com/free-photo/modern-hospital-building_158595-7632.jpg",
    },
    {
      title: "Adult Social Care Service Delivery – County Authorities",
      image:
        "https://img.freepik.com/free-photo/social-workers-helping-disabled-man-wheelchair_23-2149209887.jpg",
    },
  ];

  return (
    <ServiceLayout
      title="NHS & Social Care"
      subtitle="Helping healthcare and social care providers secure high-impact contracts across the UK."
      slides={[
        "Hospital Services",
        "Community & Mental Health",
        "Social Care Delivery",
      ]}
      backgroundImage="https://img.freepik.com/premium-photo/healthcare-professional-concept-doctor-holding-hands-with-patient-hospital-corridor_1028938-442680.jpg"
    >
      {/* Intro */}
      <motion.section
        className="text-center max-w-5xl mx-auto mb-16 px-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-4">
          NHS & Social Care Bid Writing
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We support healthcare and social care providers to craft clear,
          compliant, and high-scoring bid submissions across the NHS and local
          authority sectors.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          From hospital facilities management to home care and mental health
          services, our expert team ensures your bid communicates operational
          excellence, compliance, and patient-focused delivery.
        </p>
      </motion.section>

      {/* Image Section */}
      <motion.section
        className="max-w-5xl mx-auto mb-20 px-6 relative h-64 md:h-96 rounded-xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <Image
          src="https://img.freepik.com/premium-photo/medical-team-discussing-patient-diagnosis-hospital-meeting-room_1028938-122254.jpg"
          alt="Healthcare professionals"
          fill
          className="object-cover"
        />
      </motion.section>

      {/* Case Studies */}
      <motion.section
        className="max-w-6xl mx-auto mb-24 px-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h3 className="text-2xl font-semibold text-blue-300 text-center mb-10">
          Case Studies
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((caseItem, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-800/40 border border-gray-700 rounded-2xl overflow-hidden hover:shadow-blue-400/10 transition"
            >
              <Image
                src={caseItem.image}
                alt={caseItem.title}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h4 className="text-lg font-semibold text-blue-400">
                  {caseItem.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </ServiceLayout>
  );
}
