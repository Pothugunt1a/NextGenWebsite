import { Button } from "./ui/button";
import { useLocation } from "wouter";
import { Phone, Mail } from "lucide-react";

export default function InfoBanner() {
  const [, setLocation] = useLocation();
  const handlePhoneClick = () => {
    window.location.href = "tel:+14696660019";
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black py-12">
      <div className="absolute inset-0">
        <img
          src="/assets/contact-banner.jpg"
          alt="Contact Banner"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
        <div className="absolute top-10 left-10 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1">
            <h3
              className="text-3xl font-bold text-white mb-3 pl-6 border-l-4 border-gradient-to-r from-cyan-400 to-blue-500"
              style={{ borderLeftColor: "#0080FF" }}
            >
              For Further Information And To Learn More About Our AI Solutions
              Along With How We Can Support Your Organisation In Harnessing The
              Full Potential Of AI{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Make Contact
              </span>{" "}
              With Our Experienced IT Staff.
            </h3>
            <p className="text-gray-300">
              We're available for 8 hours a day! Contact us to request a
              detailed analysis and assessment of your plan.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="text-sm font-medium text-cyan-400 uppercase tracking-wide">
              REACH OUT NOW!
            </div>
            <a
              href="tel:+14696660019"
              className="flex items-center gap-2 text-white text-2xl font-semibold hover:text-cyan-400 transition-colors group"
            >
              <span className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-2 rounded-full group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300 border border-cyan-400/30">
                <Phone className="h-6 w-6 text-cyan-400" />
              </span>
              +1 (469) 666-0019
            </a>
            <Button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white group transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-cyan-500/25"
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
