
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function InfoBanner() {
  const handlePhoneClick = () => {
    window.location.href = "tel:+14696660019";
  };

  return (
    <div className="bg-gradient-to-r from-slate-50 to-slate-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
              For Further Information And To Learn More About Our AI Solutions
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Learn how we can support your organisation in harnessing the full potential of AI. Make contact with our experienced IT staff today.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="text-sm font-semibold text-primary uppercase tracking-wide">Reach Out Now!</div>
            <button 
              onClick={handlePhoneClick}
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all group"
            >
              <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                <Phone size={24} className="text-primary" />
              </div>
              <span className="text-xl font-bold text-primary">+1 (469) 666-0019</span>
            </button>
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
