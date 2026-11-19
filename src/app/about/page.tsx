import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="min-h-[65vh] flex items-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-sm tracking-[4px] text-[#A77C48] mb-5">
          ABOUT MD HOME DECORE
        </p>
        <h1 className="text-5xl md:text-7xl font-light leading-tight">
          Creating Spaces.
          <br />
          <span className="text-[#A77C48]">Inspiring Lives.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-[#77716A] leading-8">
          We believe every space deserves thoughtful design.
          MD Home Decore brings together elegance, comfort
          and functionality to create timeless interiors.
        </p>
        <Link href="/portfolio" className="inline-flex items-center gap-3 mt-9 bg-[#242321] text-white px-7 py-4">
          Explore Our Work <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
