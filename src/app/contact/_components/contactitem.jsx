import React from "react";

export default function ContactItem({ icon, title, text }) {
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
