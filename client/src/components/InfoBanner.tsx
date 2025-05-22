
import { Button } from "@/components/ui/button";

export default function InfoBanner() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between bg-slate-50 rounded-lg p-6 md:p-8 gap-6">
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              For Further Information And To Learn More About Our AI Solutions
            </h3>
            <p className="text-gray-600">
              Along with how we can support your organisation in harnessing the full potential of AI make contact with our experienced IT staff.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2 min-w-fit">
            <div className="text-sm text-gray-600">REACH OUT NOW!</div>
            <div className="text-xl font-bold text-[#6E42EF]">+1 (469) 666-0019</div>
            <Button className="bg-[#6E42EF] hover:bg-[#5835C7]">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
