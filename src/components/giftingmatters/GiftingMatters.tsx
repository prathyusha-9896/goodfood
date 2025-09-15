type Point = { id: number; text: string; color: string };

type GiftingMattersProps = {
  title?: string;
  image: string;
  alt?: string;
  points?: Point[];
  ctaText?: string;
};

function NumberIcon({ id, color }: { id: number; color: string }) {
  switch (id) {
    case 1:
      return (
        <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.8609 29.21V26.73H20.0609V18.25L16.8609 20.53V17.61L20.2409 15.21H23.0609V26.73H25.6609V29.21H16.8609Z" fill="#333333"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M21.8974 1.76073C27.7901 2.04411 33.4757 4.23498 37.1433 8.82834C40.8006 13.4088 41.6335 19.3988 40.5732 25.1508C39.4423 31.2862 36.9645 37.6377 31.3276 40.3784C25.6607 43.1336 19.0694 41.1986 13.4573 38.3347C8.05791 35.5794 3.66163 31.2315 2.02103 25.4232C0.271247 19.2282 0.533302 12.2064 4.68215 7.26729C8.74703 2.42812 15.5625 1.45609 21.8974 1.76073Z" stroke={color} strokeWidth="2"/>
        </svg>
      );
    case 2:
      return (
        <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6137 29.21V27.03L21.5137 22.81C22.127 22.2633 22.6137 21.8166 22.9737 21.47C23.347 21.11 23.6137 20.77 23.7737 20.45C23.9337 20.13 24.0137 19.7833 24.0137 19.41C24.0137 18.8366 23.8537 18.3766 23.5337 18.03C23.227 17.67 22.7537 17.49 22.1137 17.49C21.3803 17.49 20.8137 17.69 20.4137 18.09C20.0137 18.4766 19.8137 19.1433 19.8137 20.09H16.8137C16.8137 19.0366 17.0137 18.13 17.4137 17.37C17.8137 16.5966 18.407 16.0033 19.1937 15.59C19.9937 15.1766 20.967 14.97 22.1137 14.97C23.1803 14.97 24.0803 15.1633 24.8137 15.55C25.547 15.9233 26.0937 16.4433 26.4537 17.11C26.827 17.7766 27.0137 18.5433 27.0137 19.41C27.0137 20.05 26.8603 20.65 26.5537 21.21C26.2603 21.77 25.867 22.3033 25.3737 22.81C24.8803 23.3166 24.327 23.8233 23.7137 24.33L20.8337 26.73H27.2137V29.21H16.6137Z" fill="#333333"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8053 1.74425C25.7919 1.46379 31.8364 2.87128 36.0095 7.17387C40.7288 12.0396 44.0923 18.6911 42.6712 25.3196C41.2332 32.0272 35.3687 36.6214 29.0998 39.4041C23.1031 42.066 16.1633 42.7715 10.3938 39.6474C4.89604 36.6704 2.25883 30.5057 1.26536 24.332C0.359469 18.7026 1.78167 13.0148 5.39886 8.60787C8.94985 4.2816 14.2153 2.00612 19.8053 1.74425Z" stroke="#C4B58D" stroke-width="2"/>
        </svg>
      );
    case 3:
      return (
        <svg width="41" height="43" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.8648 29.45C19.7315 29.45 18.7782 29.27 18.0048 28.91C17.2315 28.5366 16.6448 28.01 16.2448 27.33C15.8582 26.65 15.6648 25.8433 15.6648 24.91H18.6648C18.6648 25.59 18.8382 26.0966 19.1848 26.43C19.5315 26.7633 20.0915 26.93 20.8648 26.93C21.5982 26.93 22.1448 26.77 22.5048 26.45C22.8782 26.1166 23.0648 25.65 23.0648 25.05C23.0648 24.4233 22.8782 23.95 22.5048 23.63C22.1448 23.31 21.5982 23.15 20.8648 23.15H19.5448V20.87H20.8648C21.5048 20.87 21.9982 20.7366 22.3448 20.47C22.6915 20.19 22.8648 19.7633 22.8648 19.19C22.8648 18.6966 22.6982 18.29 22.3648 17.97C22.0315 17.65 21.5315 17.49 20.8648 17.49C20.1848 17.49 19.6782 17.6433 19.3448 17.95C19.0248 18.2566 18.8648 18.71 18.8648 19.31H15.8648C15.8648 18.39 16.0448 17.61 16.4048 16.97C16.7782 16.3166 17.3382 15.8233 18.0848 15.49C18.8315 15.1433 19.7582 14.97 20.8648 14.97C21.9715 14.97 22.8982 15.1366 23.6448 15.47C24.3915 15.8033 24.9448 16.2566 25.3048 16.83C25.6782 17.4033 25.8648 18.05 25.8648 18.77C25.8648 19.5566 25.6448 20.2233 25.2048 20.77C24.7782 21.3033 24.2048 21.6833 23.4848 21.91C24.3115 22.1366 24.9448 22.5366 25.3848 23.11C25.8382 23.67 26.0648 24.4033 26.0648 25.31C26.0648 26.11 25.8515 26.8233 25.4248 27.45C25.0115 28.0633 24.4182 28.55 23.6448 28.91C22.8715 29.27 21.9448 29.45 20.8648 29.45Z" fill="#333333"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9944 1.71193C26.8166 1.65986 32.9894 2.61789 36.6969 7.12551C40.4651 11.7068 40.5458 18.0848 39.225 23.8766C37.9056 29.6623 34.7998 34.8453 29.6934 37.8357C24.0059 41.1666 17.0268 43.2077 11.0869 40.3551C5.13373 37.4962 2.39742 30.7446 1.31671 24.2082C0.323932 18.2036 1.63839 11.9767 5.63876 7.40332C9.42677 3.07272 15.2542 1.76328 20.9944 1.71193Z" stroke="#FA9E6C" stroke-width="2"/>
        </svg>
      );
    case 4:
      return (
        <svg width="40" height="43" viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.7207 29.21V26.25H14.1207V24.17L20.7207 15.21H23.7207V23.77H25.3007V26.25H23.7207V29.21H20.7207ZM16.9207 23.77H20.7207V18.55L16.9207 23.77Z" fill="#333333"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1352 1.71138C25.3241 1.77169 31.3646 4.17887 35.1701 9.0143C38.9277 13.7889 39.8433 20.1591 38.2545 26.0052C36.7401 31.5774 32.3925 35.6585 27.2118 38.2967C21.8202 41.0423 15.3845 43.2238 10.0523 40.3666C4.8904 37.6006 4.32554 30.9941 3.0101 25.3282C1.69026 19.6434 -0.599206 13.5296 2.69979 8.69792C6.21384 3.55123 12.8634 1.65027 19.1352 1.71138Z" stroke="#E22F39" stroke-width="2"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function GiftingMatters({
  alt,
  points = [
    { id: 1, text: "63% of employees stay longer when they feel recognised.", color: "#34A0B8" }, // teal
    { id: 2, text: "80% feel more connected to their company when appreciated.", color: "#F2C94C" }, // yellow
    { id: 3, text: "94% of executives say gifting strengthens business relationships.", color: "#F2994A" }, // orange
    { id: 4, text: "Premium gifting doubles brand engagement on social media.", color: "#EB5757" }, // red
  ],
  ctaText = "Book a Meeting",
}: GiftingMattersProps) {
  return (
    <section className="w-full bg-[#FCFAF4] text-black">
      <div className="mx-auto max-w-7xl px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Image Card */}
          <div className="rounded-xl overflow-hidden h-full">
            <img
              src='/assets/giftingmatters.png'
              alt={alt || "Corporate gifting showcase"}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: Content */}
          <div className="px-1">
            <h2 style={{ fontFamily: "Albra, serif" }} className="text-[28px] md:text-[58px] font-medium leading-[132%] text-[#333333]">
              Why Corporate <br /> Gifting Matters
            </h2>

            <ul className="mt-8 space-y-5">
              {points.map((p) => (
                <li key={p.id} className="flex items-center justify-center gap-4">
                  <NumberIcon id={p.id} color={p.color} />
                  <p className="text-sm md:text-[20px] text-black leading-[134%] font-semibold ">
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-center md:justify-start">
              <button onClick={() => (window.location.href = '/book_a_call')}
                className="rounded-full bg-[#FEC8B2] text-black px-6 md:px-7 py-3 md:py-3.5 font-medium"
              >
                {ctaText}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
