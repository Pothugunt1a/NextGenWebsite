import React from "react";

const logos = [
  { src: "./assets/microsoft-seeklogo.png", alt: "Microsoft" },
  { src: "./assets/infosys-limited-seeklogo.png", alt: "Infosys" },
  { src: "./assets/ibm-logo.png", alt: "IBM" },
  { src: "./assets/google-2015-new-seeklogo.png", alt: "Google" },
  { src: "./assets/envato-seeklogo.png", alt: "Envato" },
  { src: "./assets/deloitte-seeklogo.png", alt: "Deloitte" },
  { src: "./assets/wipro-new-seeklogo.png", alt: "Wipro" },
  { src: "./assets/yahoo-seeklogo.png", alt: "Yahoo" },
];

export default function LogoCarousel() {
  return (
    <section className="py-12 overflow-hidden relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="./assets/Logos-banner.png"
          alt="Company Logos Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="w-full relative z-10">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-4 md:mx-8"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-4 md:mx-8"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
