"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-900 to-gray-950 text-white py-24 overflow-hidden">
      {/* Subtle glowing elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 items-center gap-16">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Who <span className="text-blue-400">We Are</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="font-semibold text-blue-400">Trebo-BIDS</span> is a
            strategic consultancy specializing in bid management and tender
            support. We help organizations secure high-value contracts by
            delivering expert writing, process management, and winning
            strategies that align with their goals.
          </p>

          <p className="text-gray-400 leading-relaxed">
            With a proven track record across multiple sectors, we bring clarity
            to complexity—helping our clients present their value with precision
            and confidence in every submission.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-400">10+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-400">200+</h3>
              <p className="text-gray-400 text-sm">Successful Bids</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-pink-400">98%</h3>
              <p className="text-gray-400 text-sm">Client Satisfaction</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform duration-300"
          >
            Learn More About Us
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
              alt="Team Collaboration"
              width={800}
              height={500}
              className="object-cover w-full h-[450px] hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating tag */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -bottom-6 -left-6 bg-gray-900/90 px-6 py-4 rounded-2xl shadow-lg border border-white/10 backdrop-blur-md"
          >
            <h3 className="text-blue-400 font-semibold text-lg">
              10+ Years of Expertise
            </h3>
            <p className="text-sm text-gray-400">Trusted by 200+ clients</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
