import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  ["Residential Interiors", "Beautiful and functional homes designed around your lifestyle.", "residential"],
  ["Commercial Interiors", "Professional spaces that reflect your business identity.", "commercial"],
  ["Modular Kitchen", "Smart kitchen layouts with elegant finishes.", "modular-kitchen"],
  ["Bedroom Design", "Comfortable and luxurious personal spaces.", "bedroom"],
  ["Living Room Design", "Sophisticated spaces for everyday living.", "living-room"],
  ["Space Planning", "Intelligent layouts that maximise every corner.", "space-planning"],
];

export default function ServicesPage() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-[4px] text-[#A77C48]">WHAT WE DO</p>
        <h1 className="text-5xl md:text-7xl font-light mt-5">
          Our <span className="text-[#A77C48]">Services</span>
        </h1>
        <p className="mt-6 text-[#77716A] max-w-xl leading-8">
          Thoughtfully designed interiors for modern lifestyles.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map(([name, description, id], index) => (
            <div id={id} key={id} className="border border-[#D4C2A8] p-8 hover:bg-[#242321] hover:text-white transition-colors duration-300">
              <span className="text-[#A77C48] text-sm">0{index + 1}</span>
              <h2 className="text-2xl font-light mt-8">{name}</h2>
              <p className="text-sm leading-7 mt-4 opacity-70">{description}</p>
              <Link href="/contact" className="inline-flex items-center gap-2 mt-8 text-sm text-[#A77C48]">
                Enquire Now <ArrowUpRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
