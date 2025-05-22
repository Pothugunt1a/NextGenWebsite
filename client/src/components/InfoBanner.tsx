
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function InfoBanner() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex-grow mb-4 md:mb-0 md:mr-8">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              For Further Information And To Learn More About Our AI Solutions along With How We Can Support Your Organisation In Harnessing The Full Potential Of AI Make Contact With Our Experienced IT Staff.
            </h3>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-right">
              <div className="text-sm text-gray-600 uppercase">REACH OUT NOW!</div>
              <div className="text-xl md:text-2xl font-bold text-primary">+1 (469) 666-0019</div>
            </div>
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
