import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="px-6 py-24 min-h-[65vh]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-sm tracking-[4px] text-[#A77C48]">LET&apos;S CONNECT</p>
          <h1 className="text-5xl md:text-7xl font-light mt-5">
            Let&apos;s Create
            <br />
            <span className="text-[#A77C48]">Together.</span>
          </h1>
          <p className="mt-7 text-[#77716A] leading-8">
            Have a space in mind? Let&apos;s discuss your interior design project.
          </p>
        </div>
        <div className="bg-[#242321] text-white p-9 md:p-12 space-y-9">
          <h2 className="text-3xl font-light text-[#C5A477]">Get In Touch</h2>
          <div className="flex items-center gap-4">
            <Phone className="text-[#C5A477]" />
            <a href="tel:+918191949147">+91 81919 49147</a>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-[#C5A477]" />
            <span>Email address coming soon</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-[#C5A477]" />
            <a href="https://www.google.com/maps?ftid=0x39092bb5674de5ad:0x228ba120b964e326" target="_blank" rel="noopener noreferrer">Gali No. 5, Krishna Market Road, Near Gupta Store, Subhash Nagar, Dehradun, Uttarakhand - 248002</a>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-[#C5A477]">
            Back to Home <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
