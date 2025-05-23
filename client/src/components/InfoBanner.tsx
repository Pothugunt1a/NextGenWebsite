
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function InfoBanner() {
  const handlePhoneClick = () => {
    window.location.href = "tel:+14696660019";
  };

  return (
    <div className="bg-slate-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              For Further Information And To Learn More About Our AI Solutions <br></br>             Along with how we can support your organisation in harnessing <br></br>the full potential of AI make contact with our experienced IT staff.
            </h2>
           
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="text-sm text-slate-600">REACH OUT NOW!</div>
            <button 
              onClick={handlePhoneClick}
              className="text-xl font-bold text-primary flex items-center gap-2 hover:text-primary-dark transition-colors group"
            >
              <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                <Phone size={24} className="text-primary" />
              </div>
              +1 (469) 666-0019
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
