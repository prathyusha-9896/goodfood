
export default function PartnerBanner() {
  return (
    <section className="w-full bg-[#EEE9DD] justify-center items-center flex flex-col">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 text-center">
        <h2 style={{ fontFamily: "Albra, serif" }} className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-8">
          India's Most Reliable
          <br />
          Corporate Gifting Partner
        </h2>

        <div className="w-full justify-center grid md:grid-cols-6 grid-cols-2 md:gap-10 gap-4 items-center">
          <img src="/assets/years/1000.svg" alt="" />
          <img src="/assets/years/300k.svg" alt="" />
          <img src="/assets/years/2000.svg" alt="" />
          <img src="/assets/years/50.svg" alt="" />
          <img src="/assets/years/3yrs.svg" alt="" />
          <img src="/assets/years/100.svg" alt="" />

        </div>

      </div>
    </section>
  );
}
