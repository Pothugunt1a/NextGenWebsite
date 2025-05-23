
import { Button } from "@/components/ui/button";

export default function InfoBanner() {
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
              <div className="text-sm font-medium text-[#7C3AED] uppercase tracking-wide">REACH OUT NOW!</div>
              <a 
                href="tel:+14696660019"
                className="text-[#7C3AED] text-2xl font-semibold hover:text-[#6D28D9] transition-colors"
              >
                +1 (469) 666-0019
              </a>
              <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white flex items-center gap-2 group px-6">
                Contact us
                <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-1 text-xl">✉️</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
