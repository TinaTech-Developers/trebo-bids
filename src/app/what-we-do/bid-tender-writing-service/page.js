import React from "react";
import ServiceLayout from "../_components/servicelayout";
import { ServiceOverview } from "../_components/serviceoverview";
import { FeaturesSection } from "../_components/featuressection";
import { ProcessSection } from "../_components/processsection";
import { CTASection } from "../_components/ctasection";
import {
  IntroSection,
  ProblemSection,
  SolutionSection,
  MethodologySection,
  WhoWeHelpSection,
} from "../_components/bidwritingsections";

const problems = [
  "They weren’t sure how best to respond to bids",
  "They had less time to run their business",
  "Their answers were often put together in a rush",
  "They didn’t get the wins they were hoping for",
];

const methodologySteps = [
  "Read In and Preparation",
  "Interviews",
  "Drafts",
  "Reviews",
  "Submission",
];

const whoWeHelpPoints = [
  "They want the best bidding process possible",
  "They understand the benefits of specialised bid writing",
  "They know about our consultancy",
];

function page() {
  return (
    <ServiceLayout
      title="Bid & Tender Writing Service"
      subtitle="Expertly crafted bids that maximize your chances of winning contracts."
      slides={["Winning Bids", "Expert Writing", "High-Value Contracts"]}
      backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
    >
      <section className="flex flex-col items-center max-w-4xl mx-auto text-center mb-20 px-6">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">What We Offer</h2>
        <p className="text-gray-300 mb-4">
          Our Bid & Tender Writing Service ensures that your proposals are
          clear, compelling, and compliant.
        </p>
        {/* More content/components here */}
      </section>
      <IntroSection
        title="Let us do what we do best"
        author="Kittle"
        date="Jan 25-7574"
      />
      <ProblemSection problems={problems} />
      <SolutionSection
        text="By partnering with us, clients can focus on doing what they do best: running their business. They can trust us to guide them through the process and, most importantly, they get better results."
        stats="That’s why 90% of our bookings are from repeat clients."
      />
      <MethodologySection steps={methodologySteps} />
      <WhoWeHelpSection
        clients="If you bid for contracts, we can help you. Our partners range from small, local businesses through to market-leading multinational corporations."
        points={whoWeHelpPoints}
      />
      {/* <ServiceOverview
        title="Professional Bid Writing"
        description="We create clear, compelling, and compliant proposals to maximize your chances of winning contracts."
        image="https://images.unsplash.com/photo-1581091215366-2c33a5e4dcf5?auto=format&fit=crop&w=1600&q=80"
      /> */}
      {/* <FeaturesSection /> */}
      <ProcessSection />
      <CTASection />
    </ServiceLayout>
  );
}

export default page;
