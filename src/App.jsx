import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Product";
import Deals from "./components/Deals";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import FullScreenCarousel from "./components/Slideshow";
import Deal from "./pages/Deal";
import PrivacyPolicy from "./pages/Privacy";
import TermsAndConditions from "./pages/Terms";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FullScreenCarousel />
                  <Hero />
                  <Products />
                  <Deals />
                </>
              }
            />
            <Route path="/deals" element={<Deal />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
