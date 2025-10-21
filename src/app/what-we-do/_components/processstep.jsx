"use client";
export function ProcessStep({ step, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-900/50 rounded-2xl border border-white/10">
      <div className="text-3xl font-bold text-blue-400 mb-2">{step}</div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}
