
const Header = () => {

  return (
    <header className="w-full bg-[#FCFAF4]">
      <div
        className="mx-auto flex items-center justify-between gap-4
                   px-14 xl:px-28 2xl:px-36 pt-8"
      >
        {/* Left Menu (desktop only) */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-800">
          <a href="/diwali-gifts" className="hover:text-red-600">
            Diwali Gift Collections
          </a>
          <a href="/ready-to-ship" className="hover:text-red-600">
            Ready to Ship Hampers
          </a>
        </nav>

        {/* Logo (always visible) */}
        <a href="/" className="shrink-0">
          <img
            src="/assets/headerlogo.png"
            alt="The Good Road"
            className="object-contain"
          />
        </a>

        {/* Right Menu */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Portfolio (desktop only) */}
          <a
            href="/portfolio"
            className="hidden lg:inline-block text-[15px] font-medium text-gray-800 hover:text-red-600"
          >
            Portfolio
          </a>

          {/* Book a Call → triggers HelpForm modal */}
          <button
            // onClick={() => setOpen(true)}
            className="rounded-full bg-[#FDD1BA] px-4 py-2 text-sm font-semibold
                       text-gray-800 hover:bg-[#fcbfa3] transition
                       md:px-5 md:py-2.5 md:text-base"
          >
            Book a Call
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
