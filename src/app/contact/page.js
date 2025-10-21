"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHandshake,
  FaCheckCircle,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";
import MainLayout from "../components/mainlayout";

/* 🧩 Reusable Components (defined before usage) */
function ContactItem({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-blue-400 text-2xl mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  );
}

function FormField({ label, placeholder, type = "text", textarea = false }) {
  return (
    <div>
      <label className="block text-sm mb-2 text-gray-300">{label}</label>
      {textarea ? (
        <textarea
          rows="5"
          placeholder={placeholder}
          className="w-full p-3 rounded-xl bg-gray-800 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full p-3 rounded-xl bg-gray-800 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
    </div>
  );
}

/* -------------------------------------------
   Main Contact Page
   ------------------------------------------- */
export default function ContactPage() {
  return (
    <MainLayout
      title="Get in Touch - Trebo-BIDS"
      subtitle="We’re ready to help you craft winning strategies, proposals, and advisory solutions that elevate your success."
      backgroundImage="https://images.unsplash.com/photo-1542223616-1f4f3b5f4f6a?auto=format&fit=crop&w=1600&q=80"
    >
      {/* Contact Section */}
      <section className="relative py-32 bg-gray-950 text-white overflow-hidden">
        {/* Glowing circles background */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 relative z-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <h2 className="text-4xl font-bold text-blue-400 mb-4">
              Let’s Work Together
            </h2>
            <p className="text-gray-300">
              Whether you’re looking to develop a winning bid, enhance your
              proposal strategy, or need advisory expertise, we’re here to help.
              Reach out and let’s start the conversation.
            </p>

            <div className="space-y-6">
              <ContactItem
                icon={<FaMapMarkerAlt />}
                title="Our Office"
                text="Harare, Zimbabwe"
              />
              <ContactItem
                icon={<FaEnvelope />}
                title="Email"
                text="info@trebobids.com"
              />
              <ContactItem
                icon={<FaPhoneAlt />}
                title="Phone"
                text="+263 77 123 4567"
              />
              <ContactItem
                icon={<FaClock />}
                title="Working Hours"
                text="Mon – Fri: 8:00 AM – 5:00 PM"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/50 p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl"
            // TODO: add onSubmit handler to connect to your backend
          >
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">
              Send Us a Message
            </h3>

            <div className="space-y-6">
              <FormField label="Full Name" placeholder="Enter your name" />
              <FormField
                label="Email"
                placeholder="Enter your email"
                type="email"
              />
              <FormField
                label="Message"
                placeholder="Write your message..."
                textarea
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg transition-all"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* Why Choose Us Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mt-32 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center px-6"
        >
          {[
            {
              icon: <FaHandshake />,
              title: "Trusted Partners",
              desc: "We build long-term relationships based on trust and transparency.",
            },
            {
              icon: <FaCheckCircle />,
              title: "Proven Success",
              desc: "Over 200 successful bids with 98% client satisfaction rate.",
            },
            {
              icon: <FaUsers />,
              title: "Expert Team",
              desc: "A professional team with strategic and bid management expertise.",
            },
            {
              icon: <FaTrophy />,
              title: "Award-Winning Results",
              desc: "Recognized for excellence in strategy and execution.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-gray-900/60 p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all"
            >
              <div className="text-4xl text-blue-400 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h4 className="font-semibold text-lg mb-2 text-white">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Map */}
        <div className="mt-32 max-w-6xl mx-auto px-">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.372078376108!2d31.0435!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5d33ebefb47%3A0x2595dfcb34df4e5f!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1700000000000"
            width="100%"
            height="400"
            className="border-0 rounded-3xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center bg-gradient-to-r from-blue-900 to-purple-900 py-20 rounded-3xl max-w-6xl mx-auto px-6"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Bid Strategy?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with <span className="text-blue-400">Trebo-BIDS</span> to
            craft high-impact proposals that win contracts.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg transition-transform"
          >
            Book a Consultation
          </motion.button>
        </motion.div>
      </section>
    </MainLayout>
  );
}
