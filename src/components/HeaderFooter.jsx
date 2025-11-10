import React from "react";
import { Link, useLocation } from "react-router-dom";
import NexoraLogo from "../assets/nexora-logo.png";

export default function HeaderFooter({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-700">
      {/* 🌈 Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-sky-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(99,102,241,0.15),transparent_70%)] blur-3xl opacity-70" />

      {/* ✅ HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[rgba(240,248,255,0.35)] shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-b border-white/30">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4 relative">
          {/* 🪪 Logo */}
          <Link to="/" className="flex items-center gap-3 select-none">
            <img
              src={NexoraLogo}
              alt="Nexora Financials"
              className="w-10 h-10 rounded-xl shadow-md backdrop-blur-sm"
            />
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
                Nexora Financials
              </h1>
              <p className="text-xs text-gray-600 tracking-wide">
                Finance • Consulting • Growth
              </p>
            </div>
          </Link>

          {/* ✅ Navigation */}
          <nav className="hidden md:flex items-center gap-8 relative">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition group ${
                  location.pathname === link.path
                    ? "text-indigo-600"
                    : "text-gray-800"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-[-4px] h-[2px] bg-gradient-to-r from-indigo-600 to-sky-500 transition-all duration-300 ${
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* ✅ MAIN CONTENT — 3D Roll Effect */}
      <main
        key={location.pathname} // Forces animation on route change
        className="relative z-10 animate-rollUp"
      >
        {children}
      </main>

      {/* ✅ FOOTER */}
      <footer
        id="footer"
        className="relative z-10 backdrop-blur-xl bg-[rgba(240,248,255,0.4)] border-t border-white/20 py-8 shadow-[0_-2px_20px_rgba(0,0,0,0.05)]"
      >
        <p className="text-center text-sm text-gray-700">
          © {new Date().getFullYear()} Nexora Financials — All rights reserved
        </p>
      </footer>

      {/* ✨ 3D Roll-Up Animation */}
      <style>{`
        @keyframes rollUp {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateX(45deg) translateY(60px);
            transform-origin: top center;
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateX(0deg) translateY(0);
            transform-origin: top center;
          }
        }

        .animate-rollUp {
          animation: rollUp 0.9s cubic-bezier(0.19, 1, 0.22, 1) both;
        }
      `}</style>
    </div>
  );
}
