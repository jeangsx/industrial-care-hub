const WHATSAPP_NUMBER = "51938154638";
const DEFAULT_MSG =
  "Hola ECC, me gustaría recibir información sobre sus servicios térmicos industriales.";

const WhatsAppFloat = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MSG)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 group"
    >
      <div className="flex items-center rounded-full bg-[#25D366] text-white p-2 shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)] hover:shadow-[0_14px_40px_-10px_rgba(37,211,102,0.9)] transition-all hover:-translate-y-0.5">
        <span className="relative grid place-items-center size-11 rounded-full bg-white">
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />
          {/* Original WhatsApp glyph */}
          <svg viewBox="0 0 32 32" className="relative size-7" aria-hidden="true">
            <path
              fill="#25D366"
              d="M16.003 3C9.382 3 4 8.383 4 15.003c0 2.367.69 4.57 1.878 6.43L4 29l7.78-1.84a11.95 11.95 0 0 0 4.222.77h.005C22.628 27.93 28 22.55 28 15.93 28 12.72 26.748 9.7 24.48 7.43A11.92 11.92 0 0 0 16.003 3Zm0 21.86h-.004a9.9 9.9 0 0 1-3.79-.747l-.272-.108-4.617 1.092 1.114-4.49-.177-.286a9.85 9.85 0 0 1-1.512-5.318c0-5.456 4.44-9.896 9.9-9.896 2.644 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.456-4.44 9.853-9.542 9.853Zm5.428-7.39c-.298-.15-1.762-.87-2.034-.97-.273-.1-.472-.15-.671.15-.198.298-.768.97-.942 1.168-.173.198-.347.223-.645.074-.297-.149-1.256-.463-2.392-1.476-.884-.788-1.48-1.762-1.654-2.06-.173-.297-.018-.458.13-.607.133-.132.298-.347.447-.52.149-.174.198-.298.297-.497.099-.198.05-.372-.025-.521-.074-.149-.671-1.617-.92-2.214-.242-.581-.488-.502-.671-.512l-.571-.01a1.1 1.1 0 0 0-.795.372c-.273.298-1.04 1.016-1.04 2.476s1.065 2.872 1.213 3.07c.149.198 2.095 3.2 5.077 4.487.71.306 1.263.49 1.694.626.712.227 1.36.195 1.872.119.571-.085 1.762-.72 2.01-1.416.247-.696.247-1.293.173-1.416-.074-.124-.272-.198-.57-.347Z"
            />
          </svg>
        </span>
      </div>
    </a>
  );
};

export default WhatsAppFloat;
