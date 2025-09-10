
export default function PartnerBanner() {
  return (
    <section className="w-full bg-[#EEE9DD] justify-center items-center flex flex-col">
      <div className="max-w-7xl mx-auto px-0 md:px-8 py-12 md:py-16 text-center justify-center items-center flex flex-col">
        <h2 style={{ fontFamily: "Albra, serif" }} className="text-[36px] md:text-[46px] font-semibold text-gray-900 mb-8">
          India's Most Reliable
          <br />
          Corporate Gifting Partner
        </h2>

        <div className="w-full grid grid-cols-2 md:grid-cols-6 md:gap-10 gap-4
                        place-items-center my-6">
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
