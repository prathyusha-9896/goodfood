import "./fonts.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./pages/portfolio";
import BookDemo from "./pages/bookacall";
import ThankYou from "./pages/thankyou";
import ContactUs from "./pages/contactus";
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
