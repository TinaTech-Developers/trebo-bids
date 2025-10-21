"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/who-we-are" },
    {
      name: "What We Do",
      dropdown: [
        "Bid & Tender Writing Service",
        "Bid Review Service",
        "Bid Management Service",
        "Bid Advisory Service",
        "Training & Recruitment",
      ],
    },
    {
      name: "Sectors",
      dropdown: [
        "Charities",
        "Construction & Infrastructure",
        "Consultancy",
        "Custody & Justice",
        "Defence",
        "Energy",
        "Hard FM",
        "Immigration",
        "Information Technology",
        "International",
        "Logistics",
        "NHS & Social Care",
      ],
    },
    {
      name: "Blog",
      dropdown: [
        "Bid Process",
        "Bidding Tips",
        "Professional Development",
        "Industry Insight",
        "Case Studies",
        "Why Choose Us",
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md shadow-lg transition-all">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-tight">
          <Link href="/">Trebo-BIDS</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 items-center font-medium text-gray-200">
          {menuLinks.map((link) =>
            link.dropdown ? (
              <li key={link.name} className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="flex items-center gap-1 group relative text-white font-semibold hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 transition-all"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all group-hover:w-full"></span>
                </button>
                {/* Dropdown */}
                {activeDropdown === link.name && (
                  <div
                    className="absolute top-full left-0 mt-2 bg-gray-900 rounded-lg py-4 px-6 w-64 shadow-lg border border-gray-700 transition-all"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item}
                        href={`/${link.name
                          .toLowerCase()
                          .replace(/ /g, "-")}/${item
                          .toLowerCase()
                          .replace(/ & /g, "-")
                          .replace(/ /g, "-")}`}
                        className="block py-2 px-2 text-gray-200 hover:text-white hover:bg-gradient-to-r from-blue-400 to-purple-500 rounded transition-all"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 transition-all font-semibold relative"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all hover:w-full"></span>
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white text-2xl"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-gray-900 z-50 transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-gray-700">
          <div className="text-2xl font-bold text-white">Trebo-BIDS</div>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-2xl text-white"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col gap-2 px-6 mt-6 text-gray-200 font-medium">
          {menuLinks.map((link) =>
            link.dropdown ? (
              <li key={link.name}>
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer py-2 hover:text-white transition-colors">
                    {link.name}
                    <span className="transform transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <ul className="pl-4 mt-2 flex flex-col gap-1">
                    {link.dropdown.map((item) => (
                      <li key={item}>
                        <Link
                          href={`/${link.name
                            .toLowerCase()
                            .replace(/ /g, "-")}/${item
                            .toLowerCase()
                            .replace(/ & /g, "-")
                            .replace(/ /g, "-")}`}
                          className="block py-1 hover:text-white hover:bg-gradient-to-r from-blue-400 to-purple-500 rounded transition-all"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={link.name}>
                <Link href={link.href} className="block py-2 hover:text-white">
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
