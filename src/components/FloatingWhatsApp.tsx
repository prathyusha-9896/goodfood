
export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://api.whatsapp.com/send/?phone=919311209528&text=Hello&type=phone_number&app_absent=0`}
      className="fixed bottom-3 left-5 hidden sm:flex z-20"
    >
      <img
        src="/assets/images/common/whatsapp_icon.png"
        alt="whatsapp-icon"
        className="cursor-pointer rounded-full h-12 w-12"
      />
    </a>
  )
}
