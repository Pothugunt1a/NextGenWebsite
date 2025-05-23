
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const logos = [
  { src: "/assets/microsoft-seeklogo.png", alt: "Microsoft" },
  { src: "/assets/infosys-limited-seeklogo.png", alt: "Infosys" },
  { src: "/assets/ibm-logo.png", alt: "IBM" },
  { src: "/assets/google-2015-new-seeklogo.png", alt: "Google" },
  { src: "/assets/envato-seeklogo.png", alt: "Envato" },
  { src: "/assets/deloitte-seeklogo.png", alt: "Deloitte" },
];

export default function LogoCarousel() {
  return (
    <section className="py-12 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6">
                <div className="p-2 h-24 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
