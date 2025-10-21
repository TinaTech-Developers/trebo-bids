"use client";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl">
      <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
        Ready to Win Your Next Bid?
      </h2>
      <p className="text-gray-300 text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
        Partner with{" "}
        <span className="text-blue-400 font-semibold">Trebo-BIDS</span> for
        expert bid writing and advisory services.
      </p>
      <Link
        href="/contact"
        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Book a Consultation
      </Link>
    </section>
  );
}
