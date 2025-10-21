"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-t from-gray-950 to-gray-900 text-gray-300 py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-4 gap-12">
        {/* Branding */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-400">Trebo-BIDS</h3>
          <p className="text-gray-400 text-sm">
            Strategic bid consultancy transforming tender submissions into
            measurable success. We deliver clarity, compliance, and winning
            strategies for every client.
          </p>
          <p className="text-gray-400 text-sm">
            Open Hours: Mon-Fri, 9am - 6pm
          </p>
          <p className="text-gray-400 text-sm">
            Office: 123 Business Avenue, London, UK
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-blue-400">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-blue-400 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-400 transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-blue-400 transition-colors">
                FAQ
              </a>
            </li>
          </ul>
          <h5 className="text-blue-400 mt-6 font-semibold">
            Services Quick Links
          </h5>
          <ul className="space-y-1 text-gray-400 text-sm mt-2">
            <li>
              <a
                href="/services#writing"
                className="hover:text-blue-400 transition-colors"
              >
                Bid & Tender Writing
              </a>
            </li>
            <li>
              <a
                href="/services#review"
                className="hover:text-blue-400 transition-colors"
              >
                Bid Review
              </a>
            </li>
            <li>
              <a
                href="/services#management"
                className="hover:text-blue-400 transition-colors"
              >
                Bid Management
              </a>
            </li>
            <li>
              <a
                href="/services#advisory"
                className="hover:text-blue-400 transition-colors"
              >
                Bid Advisory
              </a>
            </li>
            <li>
              <a
                href="/services/training"
                className="hover:text-blue-400 transition-colors"
              >
                Training & Recruitment
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-blue-400">Contact</h4>
          <p className="text-gray-400 text-sm mb-2">
            Email: info@trebo-bids.com
          </p>
          <p className="text-gray-400 text-sm mb-2">Phone: +44 123 456 789</p>
          <p className="text-gray-400 text-sm mb-2">
            Support: support@trebo-bids.com
          </p>
          <p className="text-gray-400 text-sm mb-4">
            <a
              href="https://goo.gl/maps/example"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              View on Google Maps
            </a>
          </p>
          <div className="flex space-x-4 mt-2 text-lg">
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              title="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              title="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-blue-400">
            Newsletter
          </h4>
          <p className="text-gray-400 text-sm mb-4">
            Stay updated with our latest bid insights, tips, and industry news.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg border border-white/10 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-400 text-gray-900 font-semibold rounded-lg hover:bg-blue-500 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-xs mt-2">
            By subscribing, you agree to our{" "}
            <a href="/privacy" className="hover:text-blue-400">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Trebo-BIDS. All rights reserved.
      </div>
    </footer>
  );
}
