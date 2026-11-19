import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioPage() {
  return (
    <section className="px-6 py-24 min-h-[65vh]">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-[4px] text-[#A77C48]">OUR SELECTED WORK</p>
        <h1 className="text-5xl md:text-7xl font-light mt-5">
          Our <span className="text-[#A77C48]">Portfolio</span>
        </h1>
        <p className="mt-6 text-[#77716A] max-w-xl leading-8">
          Discover spaces shaped by creativity, craftsmanship and attention to detail.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {["Luxury Bedroom", "Modern Living Room", "Elegant Kitchen"].map((name, index) => (
            <div key={name} className="bg-[#242321] text-white p-9 min-h-64 flex flex-col justify-between">
              <span className="text-[#C5A477] text-sm">PROJECT 0{index + 1}</span>
              <div>
                <h2 className="text-2xl font-light">{name}</h2>
                <Link href="/contact" className="inline-flex items-center gap-2 mt-5 text-[#C5A477] text-sm">
                  Discuss a Similar Project <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
