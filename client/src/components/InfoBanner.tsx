import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Phone } from "lucide-react";

export default function InfoBanner() {
  const [, setLocation] = useLocation();
  const handlePhoneClick = () => {
    window.location.href = "tel:+14696660019";
  };

  return (
    <div className="bg-slate-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                For Further Information And To Learn<br />More About Our AI Solutions
              </h2>
              <p className="text-slate-600">
                Along with how we can support your organisation in harnessing the full potential of AI make contact with our experienced IT staff.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-4">
              <div className="text-sm font-medium text-primary uppercase tracking-wide">REACH OUT NOW!</div>
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
                onClick={() => setLocation("/contact")}
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}