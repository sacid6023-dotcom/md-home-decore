"use client";

import HomeSections from "@/components/home/HomeSections";
import Link from "next/link";

import { ArrowRight, Play } from "lucide-react";

const clients = [
  { name: "Bharti Sharma", business: "Your work is good" },
  { name: "Rashid Malik", business: "Your worker is good" },
  { name: "Vikas", business: "Good work" },
  { name: "Morpal Yadav", business: "Best service" },
  { name: "Rubi Thakur", business: "Extremely good work" },
  { name: "Prince Tamta", business: "Quality is fantastic" },
  { name: "Deepak Gupta", business: "Bahut accha kaam hai aapka" },
  { name: "Raghav Vashisth", business: "Unique and stylish collection" },
  { name: "Ankit Chilyan", business: "Aapke bande accha kaam karte hain" },
  { name: "Purvi Sharma", business: "Best service, best work" },
  { name: "Sagar Mathur", business: "Aapka kaam bahut accha hai" },
  { name: "Asif Ali", business: "Very nice work" },
  { name: "Sagar Thakur", business: "Good service" },
  { name: "Akash Vedwal", business: "Value for money work" },
  { name: "Dhaniram Ji", business: "Best service" },
  { name: "Sakshi Sharma ", business: "Good work" },
  { name: "Sunil Kumar", business: "Good work" },
  { name: "Gorav Gupta", business: "Aakash kaam accha hai" },
  { name: "Md Sharma", business: "New interior shop" },
  { name: "Gudadan Sharma", business: "Good work" },
  { name: "Parvez", business: "Good work" },
  { name: "Chandrakant Sharma", business: "Good work" },
  { name: "Sharukh Sharukh", business: "Good work" },
  { name: "Govind Gangwar", business: "Good work" },
  { name: "Suraj Sharma", business: "Customer of MD Home Decore" },
  { name: "Prashant Choudhary", business: "Customer of MD Home Decore" },
];

export default function Home() {



  return (
    <>
      <section data-video-hero="true" className="relative isolate flex min-h-[calc(100vh-92px)] items-center justify-center overflow-hidden bg-[#242321] px-5 py-20 text-center">
        

        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#242321] via-[#3A3025] to-[#191816]" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-[#A77C48]/25 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 right-0 -z-10 h-96 w-96 rounded-full bg-[#C5A477]/15 blur-3xl" aria-hidden="true" />
        <div className="w-full max-w-5xl rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl md:p-14">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4C2A8]">MD Home Decore</p>
          <h1 className="mb-6 font-serif text-4xl leading-tight text-white md:text-6xl lg:text-7xl">
            Designing Spaces.<br />
            <span className="bg-gradient-to-r from-[#C5A477] to-[#D4C2A8] bg-clip-text text-transparent">Defining Lifestyles.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base font-light text-gray-200 md:text-xl">
            We transform everyday spaces into beautiful, timeless experiences.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/portfolio" className="flex items-center justify-center gap-3 rounded-full bg-[var(--gold)] px-8 py-4 font-medium text-white transition-colors hover:bg-[var(--gold-light)]">
              View Our Work <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="flex items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-4 font-medium text-white transition-colors hover:bg-white/10">
              <Play size={18} className="text-[var(--gold-light)]" /> Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-gray-200/60 bg-[#F8F9FA] py-16" aria-label="Our clients">
        <div className="container mx-auto mb-10 px-4 text-center">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B9CAE] md:text-sm">
            Trusted by Our Valued Customers
          </h2>
        </div>
        <div className="group relative flex w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#F8F9FA] to-transparent md:w-32" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#F8F9FA] to-transparent md:w-32" aria-hidden="true" />
          <div className="animate-scroll flex min-w-max items-center gap-6">
            {[...clients, ...clients].map((client, index) => (
              <div key={`${client.name}-${index}`} aria-hidden={index >= clients.length} className="flex w-[300px] items-center gap-4 rounded-2xl border border-gray-200/80 bg-white px-6 py-4 shadow-sm md:w-[320px]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-gray-50">
                  <span className="font-serif text-xl font-bold text-[var(--gold)]">{client.name.charAt(0)}</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold text-gray-900">{client.name}</h3>
                  <p className="mt-1 text-xs text-gray-500">{client.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    <HomeSections />
    </>
  );
}