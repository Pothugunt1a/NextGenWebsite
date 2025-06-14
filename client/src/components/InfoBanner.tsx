import { Button } from "./ui/button";
import { useLocation } from "wouter";
import { Phone, Mail } from "lucide-react";

export default function InfoBanner() {
  const [, setLocation] = useLocation();
  const handlePhoneClick = () => {
    window.location.href = "tel:+14696660019";
  };

  return (
    <div className="relative bg-slate-50 py-12">
      <div className="absolute inset-0">
        <img
          src="/assets/contact-banner.png"
          alt="Contact Banner"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-slate-900 mb-3 pl-6 border-l-4 border-primary">
              For Further Information And To Learn More About Our AI Solutions
              Along With How We Can Support Your Organisation In Harnessing The
              Full Potential Of AI{" "}
              <span className="text-dark-blue">Make Contact</span> With Our
              Experienced IT Staff.
            </h3>
            <p className="text-slate-600">
              We're available for 8 hours a day! Contact us to request a
              detailed analysis and assessment of your plan.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="text-sm font-medium text-primary uppercase tracking-wide">
              REACH OUT NOW!
            </div>
            <a
              href="tel:+14696660019"
              className="flex items-center gap-2 text-primary text-2xl font-semibold hover:text-primary-dark transition-colors group"
            >
              <span className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                <Phone className="h-6 w-6" />
              </span>
              +1 (469) 666-0019
            </a>
            <Button
              className="bg-primary hover:bg-primary-dark text-white group transition-all duration-300 flex items-center gap-2"
              onClick={() => {
                setLocation("/contact");
                window.scrollTo(0, 0);
              }}
            >
              <Mail className="h-4 w-4 text-white group-hover:rotate-12 transition-transform duration-300" />
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
