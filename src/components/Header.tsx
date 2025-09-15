
const Header = () => {

  return (
    <header className="w-full bg-[#FCFAF4]">
      <div
        className="mx-auto flex items-center justify-between gap-4
                   px-14 xl:px-28 2xl:px-36 pt-8"
      >
        {/* Left Menu (desktop only) */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-800">
          <a href="https://www.thegoodroad.in/collections/diwali-corporate-gifts" className="hover:text-red-600">
            Diwali Gift Collections
          </a>
          <a href="/contact_us" className="hover:text-red-600">
            Contact Us
          </a>
        </nav>

        {/* Logo (always visible) */}
        <a href="/" className="shrink-0">
          <img
            src="/assets/headerlogo.svg"
            alt="The Good Road"
            className="object-contain"
          />
        </a>

        {/* Right Menu */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Portfolio (desktop only) */}
          {/* <a
            href="/portfolio"
            className="hidden lg:inline-block text-[15px] font-medium text-gray-800 hover:text-red-600"
          >
            Portfolio
          </a> */}

          {/* Book a Call → triggers HelpForm modal */}
          <a
            href="/book_a_call"
            className="rounded-full bg-[#FDD1BA] px-4 py-2 text-sm font-semibold
                       text-gray-800 hover:bg-[#fcbfa3] transition
                       md:px-5 md:py-2.5 md:text-base"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
