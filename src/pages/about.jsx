import React from "react";
import HeaderFooter from "../components/HeaderFooter";

export default function About() {
  return (
    <HeaderFooter>
      <section
        id="about"
        className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center"
      >
        {/* 🧭 Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Who We Are
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          At <span className="text-indigo-600 font-medium">Nexora Financials</span>, 
          we redefine financial consultancy through precision, innovation, and trust.
          Our mission is to empower businesses with clarity, growth, and confidence 
          in every financial decision.
        </p>

        {/* 🧩 Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8 text-left mt-16">
          <div className="p-6 rounded-2xl backdrop-blur-xl bg-[rgba(255,255,255,0.5)] border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:scale-[1.02] transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              To become a trusted global name in financial consultancy by delivering
              data-driven strategies that fuel innovation, sustainability, and success.
            </p>
          </div>

          <div className="p-6 rounded-2xl backdrop-blur-xl bg-[rgba(255,255,255,0.5)] border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:scale-[1.02] transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              To provide expert financial guidance that enables businesses to make
              informed decisions, maximize profitability, and maintain compliance with
              ever-evolving regulations.
            </p>
          </div>

          <div className="p-6 rounded-2xl backdrop-blur-xl bg-[rgba(255,255,255,0.5)] border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:scale-[1.02] transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Integrity, innovation, and insight — we believe in transparent practices,
              creative problem-solving, and providing measurable value to our clients.
            </p>
          </div>
        </div>

        {/* 👥 Partners Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Our Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Imran Nawaz", title: "Managing Partner" },
              { name: "Muhammad Abdullah", title: "Senior Partner" },
              { name: "Atif", title: "Associate Partner" },
            ].map((partner, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[rgba(255,255,255,0.6)] border border-white/30 shadow-[0_8px_20px_rgba(0,0,0,0.05)] backdrop-blur-md hover:scale-[1.05] transition-all"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {partner.name}
                </h4>
                <p className="text-gray-600 text-sm">{partner.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </HeaderFooter>
  );
}
