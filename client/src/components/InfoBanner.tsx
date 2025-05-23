
import { Button } from "@/components/ui/button";

export default function InfoBanner() {
  return (
    <div className="bg-slate-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              For Further Information And To Learn More About Our AI Solutions
            </h2>
            <p className="text-slate-600">
              Along with how we can support your organisation in harnessing the full potential of AI make contact with our experienced IT staff.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="text-sm text-slate-600">REACH OUT NOW!</div>
            <div className="text-xl font-bold text-primary">+1 (469) 666-0019</div>
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
