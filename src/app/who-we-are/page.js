"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaAward, FaUsers, FaCheckCircle } from "react-icons/fa";
import Timeline from "./_components/timeline";
import StatsCounters from "./_components/statscounters";
import FAQSection from "./_components/faqsection";
import MainLayout from "../components/mainlayout";

const slides = [
  "Empowering Winning Bids",
  "Strategic Advisory & Management",
  "Building Capable Teams",
];

const STATS = [
  { value: "10+", label: "Years Experience", icon: <FaAward /> },
  { value: "200+", label: "Successful Bids", icon: <FaCheckCircle /> },
  { value: "98%", label: "Client Satisfaction", icon: <FaUsers /> },
];

export default function WhoWeArePage() {
  const [current, setCurrent] = useState(0);
  const [typeIndex, setTypeIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // Typewriter effect
  useEffect(() => {
    const typeInterval = setInterval(() => {
      setDisplayText(slides[current].slice(0, typeIndex + 1));
      setTypeIndex((prev) =>
        prev + 1 === slides[current].length ? 0 : prev + 1
      );
    }, 120);
    return () => clearInterval(typeInterval);
  }, [current, typeIndex]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setTypeIndex(0);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <MainLayout
      title="Who We Are - Trebo-BIDS"
      subtitle="Learn about Trebo-BIDS, our mission, vision, values, and achievements in empowering organizations to win high-value contracts."
      backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
    >
      <main className="relative w-full bg-gray-950 text-white overflow-x-hidden">
        {/* Hero */}
        {/* <section className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-black/60"></div>
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 2 + 1,
                delay: Math.random() * 3,
              }}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
          <motion.h1 className="text-5xl lg:text-6xl font-bold z-10 drop-shadow-lg">
            {displayText}
            <span className="animate-pulse text-blue-400">|</span>
          </motion.h1>
          <p className="text-gray-300 mt-6 max-w-2xl z-10">
            Trebo-BIDS delivers strategic bid management, expert writing, and
            advisory services to ensure clients consistently win.
          </p>
        </section> */}

        {/* About Section */}
        <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-400 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-400 mb-4">
              Trebo-BIDS is a premier consultancy focused on helping
              organizations win high-value contracts through expert bid writing,
              management, and advisory.
            </p>
            <p className="text-gray-400 mb-4">
              Our team blends strategy, compliance, and creativity to deliver
              high-impact solutions tailored to client goals.
            </p>
            <div className="flex gap-6 mt-8">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="flex flex-col items-center bg-gray-900/50 p-6 rounded-2xl border border-white/10"
                >
                  <div className="text-3xl mb-2 text-blue-400">{stat.icon}</div>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
              alt="Team Collaboration"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12 grid gap-16">
          <ZigzagCard
            title="Mission"
            text="Empower organizations to win through winning bids, strategy, and advisory."
            img="https://img.freepik.com/premium-photo/businessman-clicks-virtual-screen-mission_1085052-765.jpg"
            color="blue"
            reverse={false}
          />
          <ZigzagCard
            title="Vision"
            text="To be the most trusted consultancy in competitive bidding environments."
            img="https://media.istockphoto.com/id/500504909/photo/business-vision.jpg?s=612x612&w=0&k=20&c=sfAyloZ4GkAkZQ7KIm_Jeg33a4Z-HuR7lTijWbRN95g="
            color="purple"
            reverse={true}
          />
          <ZigzagCard
            title="Values"
            text="Integrity, Excellence, Collaboration, Innovation, Reliability."
            img="https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/06/moral-values-meaning.jpg"
            color="pink"
            reverse={false}
          />
        </section>
        <Timeline />
        <StatsCounters />
        <FAQSection />
        {/* Call-to-action */}
        <section className="relative w-full h-[400px] bg-gradient-to-r from-blue-900 to-purple-900 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Ready to Elevate Your Bid Success?
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl mb-8 max-w-2xl">
            Partner with{" "}
            <span className="text-blue-400 font-semibold">Trebo-BIDS</span> to
            create winning strategies and measurable results.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Book a Consultation
          </Link>
        </section>
      </main>
    </MainLayout>
  );
}

function ZigzagCard({ title, text, img, color, reverse }) {
  const colors = {
    blue: "text-blue-400",
    purple: "text-purple-400",
    pink: "text-pink-400",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`grid lg:grid-cols-2 gap-10 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="space-y-6">
        <h3 className={`text-3xl font-bold ${colors[color]}`}>{title}</h3>
        <p className="text-gray-300">{text}</p>
      </div>
    </motion.div>
  );
}
