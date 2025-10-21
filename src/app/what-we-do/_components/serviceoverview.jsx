"use client";
import Image from "next/image";

export function ServiceOverview({ title, description, image }) {
  return (
    <section className="grid lg:grid-cols-2 gap-12 items-center py-16">
      <div>
        <h2 className="text-4xl font-bold text-blue-400 mb-6">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>
      {image && (
        <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-2xl">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}
    </section>
  );
}
