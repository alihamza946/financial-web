import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderFooter from "./components/HeaderFooter";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <HeaderFooter>
              <section
                id="home"
                className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center"
              >
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                  Empowering Financial Growth
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto mb-10">
                  Nexora Financials provides smart, data-driven financial
                  solutions for small and medium enterprises — helping you make
                  informed decisions with confidence.
                </p>
              </section>
            </HeaderFooter>
          }
        />

        {/* 👥 About Page */}
        <Route path="/about" element={<About />} />

        {/* 💼 Services Page */}
        <Route path="/services" element={<Services />} />

        {/* ✉️ Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
