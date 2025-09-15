import React from "react";

interface HelpFormProps {
  /** Show as "modal" (popup) or "page" (inline section). Default: "modal" */
  mode?: "modal" | "page";

  /** Only used in modal mode */
  isOpen?: boolean;
  onClose?: () => void;

  /** Left-side background image (shown on md+ screens) */
  backgroundImage: string;

  /** Optional: override CTA text */
  ctaText?: string;
}

const HelpForm: React.FC<HelpFormProps> = ({
  mode = "modal",
  isOpen = false,
  onClose = () => {},
  backgroundImage,
  ctaText = "Get a Corporate Quote",
}) => {
  const isModal = mode === "modal";

  if (isModal && !isOpen) return null;

  return (
    <div
      className={
        isModal
          ? "fixed inset-0 z-50 flex items-center justify-center"
          : "w-full"
      }
    >
      {/* Backdrop (modal only) */}
      {isModal && (
        <button
          aria-label="Close"
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Shell / Card */}
      <div
        className={[
          "relative z-10 grid w-[92%] overflow-hidden rounded-2xl bg-[#FCFAF4] shadow-xl shadow-black/10 ",
          "grid-cols-1 md:grid-cols-2",
          isModal ? "max-w-md md:max-w-4xl" : "mx-auto max-w-6xl",
        ].join(" ")}
        style={{ willChange: "transform" }}
      >
        {/* Left image (md+) */}
        <div
          className="hidden md:block bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden="true"
        />

        {/* Right column (form) */}
        <div className="relative">
          {/* Inner card padding */}
          <div className="p-6 sm:p-8 bg-[#FCFAF4] m-3 rounded-2xl">
            {/* Close (modal only) */}
            {isModal && (
              <button
                onClick={onClose}
                className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-black/10 bg-white/70 text-gray-600 hover:bg-white"
                aria-label="Close dialog"
                type="button"
              >
                ×
              </button>
            )}

            <h2 className="text-[26px] font-semibold text-[#1F2937]">
              Need Help?
            </h2>
            <p className="mt-2 text-[#374151] leading-snug">
              Our gifting experts are available 24/7 <br />
              <span className="font-semibold">
                Or call us on{" "}
                <a
                  href="tel:+919311205938"
                  className="underline underline-offset-2"
                >
                  +91 93112 05938
                </a>
              </span>
            </p>

            {/* Form */}
            <form
              className={[
                "mt-6 space-y-4 pr-1",
                isModal ? "max-h-[70vh] overflow-y-auto" : "",
              ].join(" ")}
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: Hook up submit handler
              }}
            >
              <input
                type="text"
                placeholder="Full name"
                className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Company Name"
                className="w-full bg-transparent py-2 border-b border-gray-300 placeholder:text-[#808080] focus:outline-none focus:border-gray-700"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="number"
                  min={1}
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
                {ctaText}
              </button>
            </form>
          </div>
        </div>

        {/* Mobile-only: hero image behind card (page mode only) */}
        {!isModal && (
          <div
            className="md:hidden -mt-2 h-36 w-full bg-cover bg-center rounded-b-2xl"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
};

export default HelpForm;
