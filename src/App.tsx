import "./fonts.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./pages/portfolio";
import BookDemo from "./pages/book_a_call";
import ThankYou from "./pages/thank_you";
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/book_a_call" element={<BookDemo />} />
      <Route path="/thank_you" element={<ThankYou />} />

      {/* optional: redirect unknown paths */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
