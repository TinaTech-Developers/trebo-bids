// components/BidWritingSections.js
import React from "react";
import {
  FaCheckCircle,
  FaRegLightbulb,
  FaUsers,
  FaTasks,
} from "react-icons/fa";

export function IntroSection({ title, author, date }) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
      <h2 className="text-5xl font-extrabold mb-4">{title}</h2>
      <p className="text-gray-200 text-lg">
        {author} - {date}
      </p>
    </section>
  );
}

export function ProblemSection({ problems }) {
  return (
    <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
      {problems.map((problem, i) => (
        <div
          key={i}
          className="bg-gray-800/60 p-6 rounded-xl shadow-lg flex items-start gap-4 hover:scale-105 transition-transform"
        >
          <FaRegLightbulb className="text-blue-400 text-2xl mt-1" />
          <p className="text-gray-200">{problem}</p>
        </div>
      ))}
    </section>
  );
}

export function SolutionSection({ text, stats }) {
  return (
    <section className="py-16 bg-gray-900/50 max-w-6xl mx-auto px-6 rounded-2xl text-center">
      <p className="text-gray-200 text-lg mb-6">{text}</p>
      {stats && <p className="text-blue-400 font-bold text-xl">{stats}</p>}
    </section>
  );
}

export function MethodologySection({ steps }) {
  return (
    <section className="py-16 max-w-6xl mx-auto px-6">
      <h3 className="text-3xl font-bold text-blue-400 mb-10 text-center">
        Our Proven Bid Methodology
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-gray-800/60 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-transform"
          >
            <FaTasks className="text-blue-400 text-3xl mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-2">Step {i + 1}</h4>
            <p className="text-gray-200">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WhoWeHelpSection({ clients, points }) {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-800/60 to-gray-900/70 max-w-6xl mx-auto px-6 rounded-2xl">
      <h3 className="text-3xl font-bold text-blue-400 mb-6 text-center">
        Who Do We Help
      </h3>
      <p className="text-gray-200 text-center mb-10">{clients}</p>
      <div className="grid md:grid-cols-3 gap-8">
        {points.map((point, i) => (
          <div
            key={i}
            className="bg-gray-800/70 p-6 rounded-xl shadow-lg flex flex-col items-center gap-4 hover:scale-105 transition-transform"
          >
            <FaUsers className="text-blue-400 text-3xl" />
            <p className="text-gray-200 font-semibold text-center">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
