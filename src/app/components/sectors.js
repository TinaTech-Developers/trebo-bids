"use client";
import { motion } from "framer-motion";

const SECTORS = [
  {
    name: "Charities",
    image:
      "https://whydonate.com/cdn-cgi/imagedelivery/_0vgnXOEIHPwLg2E52a7gg/whydonate.com/2018/03/Support-Charities.png/w=600",
  },
  {
    name: "Construction & Infrastructure",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/1/374804678/MI/FV/WI/69225612/infrastructure-construction.jpg",
  },
  {
    name: "Consultancy",
    image:
      "https://uploads-ssl.webflow.com/5dd58b148c402e5126209d07/5e44e26a598c278f565bfe0f_Consultancy.jpg",
  },
  {
    name: "Custody & Justice",
    image:
      "https://www.southernafricalitigationcentre.org/wp-content/uploads/2025/04/Untitled-design-3.png",
  },
  {
    name: "Defence",
    image:
      "https://m.foolcdn.com/media/dubs/images/soldiers_at_sunset.width-880.jpg",
  },
  {
    name: "Energy",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Information Technology",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "International",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Sectors() {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 to-gray-900 text-white py-32 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-bold mb-6"
        >
          Sectors We <span className="text-blue-400">Serve</span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-24">
          We deliver expert bid solutions across a wide range of industries,
          combining clarity, compliance, and strategic insight.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {SECTORS.map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg group"
            >
              <img
                src={sector.image}
                alt={sector.name}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold px-4 text-center">
                  {sector.name}
                </h3>
              </div>

              {/* Bottom-left label */}
              <div className="absolute bottom-4 left-0 bg-blue-900 text-white text-sm font-semibold px-3 py-1  backdrop-blur-sm ">
                {sector.name}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-16 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform duration-300"
        >
          Explore Our Expertise
        </motion.button>
      </div>
    </section>
  );
}
