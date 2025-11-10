import React, { useState, useRef, useEffect } from "react";
import HeaderFooter from "../components/HeaderFooter";

export default function Services() {
  const [modalService, setModalService] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const modalRef = useRef(null);

  const services = [
    {
      icon: "💼",
      title: "Business Advisory",
      desc: "Strategic insights to optimize performance and growth.",
      details:
        "We analyze your business, market, and KPIs to craft strategies that boost efficiency and profitability sustainably.",
    },
    {
      icon: "📊",
      title: "Financial Consultancy",
      desc: "Data-driven planning & modeling.",
      details:
        "Our experts help streamline cash flow, reduce inefficiencies, and implement strategies that lead to measurable financial health.",
    },
    {
      icon: "🧾",
      title: "Audit & Compliance",
      desc: "Transparent auditing with precision.",
      details:
        "We deliver internal and statutory audits ensuring full compliance with accounting and tax regulations — locally and internationally.",
    },
    {
      icon: "💡",
      title: "Tax Planning",
      desc: "Smart, efficient, compliant taxation.",
      details:
        "From tax strategy and filing to cross-border compliance, our experts ensure maximum efficiency while minimizing risks.",
    },
    {
      icon: "🏢",
      title: "Corporate Consultancy",
      desc: "Governance, structure & legal strategy.",
      details:
        "Corporate restructuring, governance systems, and business advisory — all tailored to align operations with long-term goals.",
    },
    {
      icon: "⚙️",
      title: "Outsourcing",
      desc: "Accounting, HR & payroll management.",
      details:
        "Free up internal resources by letting us handle your core operational tasks securely and efficiently.",
    },
  ];

  // Close modal on Escape or outside click
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setModalService(null);
    }
    function onClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalService(null);
      }
    }
    if (modalService) {
      document.addEventListener("keydown", onKey);
      document.addEventListener("mousedown", onClick);
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [modalService]);

  return (
    <HeaderFooter>
      {/* 🌈 Background gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-indigo-100 -z-10" />

      <section className="max-w-6xl mx-auto px-6 py-24 text-center relative">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Our Services
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
          Explore our professional solutions crafted for growth, compliance, and
          precision in the financial landscape.
        </p>

        {/* 💎 Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
          {services.map((s, i) => (
            <div
              key={i}
              className="relative group p-6 rounded-3xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_12px_40px_rgba(99,102,241,0.25)] cursor-pointer"
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => setModalService(s)}
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {s.desc}
              </p>

              {/* Solid Tooltip */}
              {hoverIndex === i && (
                <div className="absolute left-1/2 -translate-x-1/2 -top-6 transform translate-y-[-100%] w-72 sm:w-80 z-20 animate-fadeIn">
                  <div className="bg-white border border-gray-200 rounded-2xl p-4 text-left shadow-lg text-sm text-gray-800">
                    <div className="font-semibold text-indigo-600 mb-1">
                      {s.title}
                    </div>
                    <div className="text-gray-700">
                      {s.details.slice(0, 120)}...
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 🌫 Solid Modal */}
        {modalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
            <div className="absolute inset-0 bg-black/50" />
            <div
              ref={modalRef}
              className="relative max-w-2xl w-full mx-6 p-10 bg-white border border-gray-200 rounded-3xl shadow-2xl text-left animate-popup"
            >
              <button
                onClick={() => setModalService(null)}
                className="absolute top-4 right-6 text-2xl text-gray-500 hover:text-gray-800 transition"
              >
                ×
              </button>

              <div className="text-6xl mb-4">{modalService.icon}</div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                {modalService.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {modalService.details}
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setModalService(null)}
                  className="px-5 py-2 rounded-full bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200 transition"
                >
                  Close
                </button>
                <button className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-lg hover:opacity-90 transition">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ✨ Animations */}
      <style>{`
        @keyframes popup {
          0% { opacity: 0; transform: scale(0.9) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-popup { animation: popup .35s ease forwards; }
        .animate-fadeIn { animation: fadeIn .25s ease forwards; }
      `}</style>
    </HeaderFooter>
  );
}
