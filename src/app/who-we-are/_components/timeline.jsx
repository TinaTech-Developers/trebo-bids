"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const TIMELINE = [
  {
    year: "2013",
    title: "Founded Trebo-BIDS",
    desc: "Our journey began with a vision to help organizations win competitive bids.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2015",
    title: "First Major Win",
    desc: "Secured our first multi-million-dollar client project.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2018",
    title: "Team Expansion",
    desc: "Added expert writers and strategists to strengthen our offerings.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2020",
    title: "Global Clients",
    desc: "Started serving international clients across sectors.",
    img: "https://images.unsplash.com/photo-1581090700227-35b8bbf6f1f0?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2023",
    title: "200+ Successful Bids",
    desc: "Reached a major milestone with client satisfaction over 98%.",
    img: "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function TimelineZigzag() {
  return (
    <section className="relative py-32 bg-gray-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-blue-400 text-center mb-20">
          Our Journey
        </h2>

        <div className="relative flex flex-col gap-32">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative w-full lg:w-1/2 h-80 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-blue-400/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md">
                  {item.year}
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Vertical connector line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 top-20 bottom-20 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
