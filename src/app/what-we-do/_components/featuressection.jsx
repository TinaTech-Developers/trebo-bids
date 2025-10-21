"use client";

import { FaFileAlt, FaCheckCircle, FaClock } from "react-icons/fa";
import { FeatureCard } from "./featurecard";

export function FeaturesSection() {
  const features = [
    {
      icon: <FaFileAlt />,
      title: "Tailored Bid Writing",
      description:
        "Customized proposals aligned with your organization’s goals and client requirements.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Compliance & Quality",
      description:
        "Ensure your bids meet compliance standards and present a professional image.",
    },
    {
      icon: <FaClock />,
      title: "Timely Delivery",
      description:
        "We work with your deadlines to submit high-quality proposals on time.",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-blue-400 text-center mb-12">
        What We Offer
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
}
