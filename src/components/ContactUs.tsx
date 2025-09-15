import React from "react";

interface HelpFormProps {
  isOpen: boolean;
  onClose: () => void;
  backgroundImage: string;
}

const HelpForm: React.FC<HelpFormProps> = ({ isOpen, onClose, backgroundImage }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dim + blur backdrop (tap to close) */}
      <button
        aria-label="Close"
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Card */}
      <div className="relative z-10 grid w-[92%] max-w-md md:max-w-4xl grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl bg-[#FDF7F1] " style={{ willChange: "transform" }}>
        {/* Left image (desktop only) */}
        <div
          className=" bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Right side form desktop screen */}
        <div className="hidden md:block">
        <div className="p-6 sm:p-8 bg-[#FDF7F1] m-3 rounded-2xl">
          {/* Close button (top-right) */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-black/10 bg-white/70 text-gray-600 hover:bg-white"
            aria-label="Close dialog"
            type="button"
          >
            ×
          </button>

          <h2 className="text-[26px] font-semibold text-[#1F2937]">Need Help?</h2>
          <p className="mt-2 text-[#374151] leading-snug">
            Our gifting experts are available 24/7 <br />
            <span className="font-semibold">
              Or call us on{" "}
              <a href="tel:+919311205938" className="underline underline-offset-2">
                +91 93112 05938
              </a>
            </span>
          </p>

          {/* Make the content scrollable on small screens */}
          <form className="mt-6 space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            <input
              type="text"
              placeholder="Full name"
              className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
            />

            {/* Two-column pairs even on mobile (as in reference) */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
              />
            </div>

            <input
              type="text"
              placeholder="Company Name"
              className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Quantity Required"
                className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
              />
              <input
                type="text"
                placeholder="Budget per Hamper"
                className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
              />
            </div>

            <textarea
              placeholder="Any special instructions or requests?"
              className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
              rows={3}
            />

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-[#FBC7A3] py-3 font-semibold text-gray-900 transition hover:bg-[#f5b489] active:scale-[.99]"
            >
              Get a Corporate Quote
            </button>
          </form>
        </div>
        </div>

        {/* Right side form mobile screen*/}
        <div className="block md:hidden rounded-2xl"  style={{ backgroundImage: `url(${backgroundImage})` }} >
        <div className="p-6 bg-[#FDF7F1] m-3 rounded-2xl">
          {/* Close button (top-right) */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-black/10 bg-white/70 text-gray-600"
            aria-label="Close dialog"
            type="button"
          >
            ×
          </button>

          <h2 className="text-[26px] font-semibold text-[#1F2937]">Need Help?</h2>
          <p className="mt-2 text-[#374151] leading-snug">
            Our gifting experts are available 24/7 <br />
            <span className="font-semibold">
              Or call us on{" "}
              <a href="tel:+919311205938" className="underline underline-offset-2">
                +91 93112 05938
              </a>
            </span>
          </p>

          {/* Make the content scrollable on small screens */}
          <form className="mt-6 space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            <input
              type="text"
              placeholder="Full name"
              className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
            />

            {/* Two-column pairs even on mobile (as in reference) */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
              />
            </div>

            <input
              type="text"
              placeholder="Company Name"
              className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Quantity Required"
                className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
              />
              <input
                type="text"
                placeholder="Budget per Hamper"
                className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
              />
            </div>

            <textarea
              placeholder="Any special instructions or requests?"
              className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
              rows={3}
            />

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-[#FBC7A3] py-3 font-semibold text-gray-900 transition hover:bg-[#f5b489] active:scale-[.99]"
            >
              Get a Corporate Quote
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HelpForm;
