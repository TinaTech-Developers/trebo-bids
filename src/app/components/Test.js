"use client";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Owen Matthews",
    role: "Head of Procurement, AlphaCorp",
    text: "Trebo-BIDS transformed our bid submissions. Their expert writing and management helped us win several high-value contracts in competitive tenders.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Yolanda Reyes",
    role: "Operations Manager, Beta Solutions",
    text: "The team’s advisory services provided clarity and strategy to our bids. Their insights made a measurable difference to our success rates.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Maxine Brown",
    role: "CEO, Delta Innovations",
    text: "Professional, responsive, and highly skilled. Trebo-BIDS elevated our bid processes and delivered consistently high-quality submissions.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials1() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-950 to-gray-900 text-white py-24 overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-bold mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Our commitment to excellence has helped clients succeed across
          multiple sectors. Here's what they have to say.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="relative bg-gray-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-lg shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-400 object-cover mr-4"
                />
                <div className="text-left">
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
