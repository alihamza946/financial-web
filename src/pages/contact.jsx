import React from "react";
import HeaderFooter from "../components/HeaderFooter";

export default function Contact() {
  return (
    <HeaderFooter>
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Contact Us
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
          Get in touch with our experts for financial consultancy, audit, and business support.
        </p>
        <p className="text-indigo-600 font-medium">
          📧 info@nexorafinancials.com
        </p>
      </section>
    </HeaderFooter>
  );
}
