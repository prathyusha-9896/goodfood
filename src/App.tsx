import "./fonts.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./pages/portfolio";
import BookDemo from "./pages/book_a_call";
import ThankYou from "./pages/thank_you";
import ContactUs from "./pages/contact_us";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/book_a_call" element={<BookDemo />} />
        <Route path="/thank_you" element={<ThankYou />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Render globally, outside <Routes> */}
      <FloatingWhatsApp />
    </>
  );
}
