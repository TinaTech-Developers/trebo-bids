"use client";

import { ProcessStep } from "./processstep";

export function ProcessSection() {
  const steps = [
    {
      step: "1",
      title: "Requirement Analysis",
      description: "Understand your project and client needs.",
    },
    {
      step: "2",
      title: "Proposal Drafting",
      description: "Create a compelling and compliant bid.",
    },
    {
      step: "3",
      title: "Review & Approval",
      description: "Refine drafts and ensure compliance.",
    },
    {
      step: "4",
      title: "Submission & Follow-up",
      description: "Deliver the proposal and track progress.",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-blue-400 text-center mb-12">
        Our Process
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <ProcessStep key={i} {...s} />
        ))}
      </div>
    </section>
  );
}
