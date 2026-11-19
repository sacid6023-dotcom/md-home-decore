"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ChevronLeft, ChevronRight,
  Home, Building2, BedDouble, Sofa,
  CookingPot, Ruler, ShieldCheck,
  Sparkles, HeartHandshake, UserRound
} from "lucide-react";

const services = [
  { title: "Residential Interiors", icon: Home, id: "residential" },
  { title: "Commercial Interiors", icon: Building2, id: "commercial" },
  { title: "Luxury Bedrooms", icon: BedDouble, id: "bedroom" },
  { title: "Living Room Design", icon: Sofa, id: "living-room" },
  { title: "Modular Kitchens", icon: CookingPot, id: "modular-kitchen" },
  { title: "Space Planning", icon: Ruler, id: "space-planning" },
];

const team = [
  { role: "Interior Designer", image: "/images/team/member1.webp" },
  { role: "Project Manager", image: "/images/team/member2.webp" },
  { role: "Site Supervisor", image: "/images/team/member3.webp" },
  { role: "Design Consultant", image: "/images/team/member4.webp" },
];

const teamMembers = [
  { role: "Founder & CEO", image: "/images/team/founder.webp" },
  ...team,
];

const faqs = [
  {
    q: "What interior design services do you offer?",
    a: "We offer residential interiors, commercial interiors, bedroom design, modular kitchens and space planning."
  },
  {
    q: "Can you renovate an existing home?",
    a: "Contact our team to discuss the possibilities for transforming your existing space."
  },
  {
    q: "How much does interior design cost?",
    a: "Pricing depends on your project size, design requirements and selected materials."
  },
  {
    q: "How long does an interior project take?",
    a: "Project timelines depend on the scope, design and material availability."
  },
  {
    q: "How can I book a consultation?",
    a: "Call us at +91 81919 49147 or visit our contact page to discuss your project."
  },
];

function Photo({ src, label }: { src: string; label: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="hs-photo">
      <div className="hs-photo-placeholder">
        <span>{label}</span>
      </div>
      {(src === "/images/projects/md%20home%20de.jpg" ||
        src.includes("/before") ||
        src.includes("/after") ||
        process.env.NEXT_PUBLIC_PROJECT_IMAGES === "true") && !failed && (
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function Heading({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="hs-heading">
      <span>{tag}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default function HomeSections() {
  const [position, setPosition] = useState(50);
  const [active, setActive] = useState(0);
  const swipeStart = useRef<number | null>(null);

  const move = (step: number) => {
    setActive((current) =>
      (current + step + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <div className="home-sections">

      {/* ABOUT */}
      <section className="hs-section">
        <div className="hs-container hs-about">
          <Photo
            src="/images/projects/md%20home%20de.jpg"
            label="Our Interior Designs"
          />
          <div>
            <Heading tag="WHO WE ARE" title="Spaces That Tell Your Story." />
            <p>
              At MD Home Decore, we believe every space
              deserves a personality of its own. We bring
              creativity, functionality and timeless
              elegance together.
            </p>
            <Link href="/about" className="hs-button">
              Discover Our Story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="hs-section hs-soft">
        <div className="hs-container">
          <Heading tag="WHAT WE DO" title="Our Signature Services" />

          <div className="hs-services">
            {services.map(({ title, icon: Icon, id }) => (
              <Link
                key={id}
                href={`/services#${id}`}
                className="hs-service-card"
              >
                <Icon size={32} strokeWidth={1.4} />
                <h3>{title}</h3>
                <span>Explore Service <ArrowRight size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE AND AFTER */}
      <section className="hs-section">
        <div className="hs-container">
          <Heading
            tag="THE ART OF TRANSFORMATION"
            title="Before & After"
          />

          <div
  className="hs-comparison"
  role="slider"
  tabIndex={0}
  aria-label="Before and after transformation"
  aria-valuemin={0}
  aria-valuemax={100}
  aria-valuenow={position}
  onPointerDown={(e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition(Math.max(0, Math.min(100,
      ((e.clientX - rect.left) / rect.width) * 100
    )));
  }}
  onPointerMove={(e) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition(Math.max(0, Math.min(100,
      ((e.clientX - rect.left) / rect.width) * 100
    )));
  }}
  onKeyDown={(e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.max(0, Math.min(100,
        p + (e.key === "ArrowRight" ? 5 : -5)
      )));
    }
  }}
>
            <div className="hs-comparison-layer">
              <Photo
                src="/images/projects/after-room.jpg"
                label="After Decor"
              />
            </div>

            <div
              className="hs-comparison-layer"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Photo
                src="/images/projects/before-room.jpg"
                label="Before Decor"
              />
            </div>

            <span className="hs-before-label">BEFORE</span>
            <span className="hs-after-label">AFTER</span>

            <div
              className="hs-comparison-line"
              style={{ left: `${position}%` }}
            >
              <span><ChevronLeft /><ChevronRight /></span>
            </div>

            
          </div>

          <p className="hs-hint">
            Drag the slider to reveal the transformation
          </p>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="hs-section hs-soft">
        <div className="hs-container">
          <Heading tag="DESIGN INSPIRATION" title="Featured Spaces" />

          <div className="hs-projects">
            {["Living Spaces", "Luxury Bedrooms", "Modern Kitchens"].map((name, i) => (
              <Link href="/portfolio" key={name} className="hs-project-card">
                <Photo
                  src={`/images/projects/project${i + 1}.webp`}
                  label={name}
                />
                <h3>{name} <ArrowRight size={18} /></h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="hs-section hs-team-section">
        <div className="hs-container">
          <Heading tag="THE PEOPLE BEHIND THE DESIGN" title="Our Team" />

          <div
  className="hs-team-stage"
  onPointerDown={(e) => {
    swipeStart.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  }}
  onPointerUp={(e) => {
    if (swipeStart.current === null) return;
    const distance = swipeStart.current - e.clientX;

    if (Math.abs(distance) > 35) {
      move(distance > 0 ? 1 : -1);
    }

    swipeStart.current = null;
  }}
  onPointerCancel={() => {
    swipeStart.current = null;
  }}
>
  {teamMembers.map((member, index) => {
    const offset =
      (index - active + teamMembers.length) % teamMembers.length;

    const positionClass =
      offset === 0 ? "hs-team-center" :
      offset === 1 ? "hs-team-right" :
      offset === teamMembers.length - 1 ? "hs-team-left" :
      offset === 2 ? "hs-team-far-right" :
      "hs-team-far-left";

    return (
      <article
        key={member.image}
        className={`hs-team-card ${positionClass}`}
        aria-hidden={offset !== 0 && offset !== 1 && offset !== teamMembers.length - 1}
      >
        <Photo src={member.image} label={member.role} />
        <h3>{member.role}</h3>
        <span>MD Home Decore</span>
      </article>
    );
  })}
</div>
<div className="hs-team-controls">
            <button onClick={() => move(-1)} aria-label="Previous team member">
              <ChevronLeft size={22} />
            </button>

            {teamMembers.map((_, i) => (
              <button
                key={i}
                className={`hs-dot ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Team slide ${i + 1}`}
                aria-current={active === i}
              />
            ))}

            <button onClick={() => move(1)} aria-label="Next team member">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="hs-section">
        <div className="hs-container">
          <Heading tag="THE MD DIFFERENCE" title="Why Choose Us" />

          <div className="hs-benefits">
            {[
              { icon: ShieldCheck, title: "Quality Focused" },
              { icon: Sparkles, title: "Creative Designs" },
              { icon: HeartHandshake, title: "Personalized Approach" },
              { icon: UserRound, title: "Client First" },
            ].map(({ icon: Icon, title }) => (
              <div key={title}>
                <Icon size={35} strokeWidth={1.4} />
                <h3>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION */}
      <section className="hs-section hs-cta">
        <Heading tag="LET US CREATE SOMETHING BEAUTIFUL"
          title="Your Dream Space Starts Here." />

        <Link href="/contact" className="hs-button">
          Book a Consultation <ArrowRight size={18} />
        </Link>
      </section>

      {/* FAQ */}
      <section className="hs-section hs-soft">
        <div className="hs-container hs-faq">
          <Heading tag="HAVE QUESTIONS?"
            title="Frequently Asked Questions" />

          {faqs.map(({ q, a }) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

    </div>
  );
}