"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, Sparkles, X } from "lucide-react";

const services = [
  { name: "Residential Interior", href: "/services#residential" },
  { name: "Commercial Interior", href: "/services#commercial" },
  { name: "Luxury Bedroom Design", href: "/services#bedroom" },
  { name: "Living Room Design", href: "/services#living-room" },
  { name: "Modular Kitchen", href: "/services#modular-kitchen" },
  { name: "Space Planning", href: "/services#space-planning" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <header className="fh-wrapper">
        <div className="fh-bar">
          <Link href="/" className="fh-brand" aria-label="MD Home Decore home" onClick={closeMenus}>
            <Image src="/images/md-home-decore-logo.jpg" alt="MD Home Decor Logo" width={52} height={52} className="md-site-logo" />
            <span className="fh-brand-text">
              <span className="fh-brand-name">MD HOME <span>DECORE</span></span>
              <span className="fh-brand-tagline">INTERIORS &amp; LIFESTYLE</span>
            </span>
          </Link>

          <nav className="fh-desktop-nav" aria-label="Main navigation">
            {navigation.slice(0, 2).map((item) => (
              <Link key={item.href} href={item.href} className={`fh-nav-link ${pathname === item.href ? "active" : ""}`} onClick={closeMenus}>
                {item.name}
              </Link>
            ))}
            <div className="fh-services-dropdown">
              <button type="button" className={`fh-nav-link fh-services-trigger ${pathname.startsWith("/services") ? "active" : ""}`} aria-expanded={servicesOpen} onClick={() => setServicesOpen((open) => !open)}>
                Services <ChevronDown size={14} className={servicesOpen ? "rotated" : ""} />
              </button>
              <div className={`fh-dropdown-panel ${servicesOpen ? "open" : ""}`}>
                <div className="fh-dropdown-heading"><span>WHAT WE CREATE</span><p>Explore Our Expertise</p></div>
                {services.map((service, index) => (
                  <Link key={service.href} href={service.href} className="fh-dropdown-link" onClick={closeMenus}>
                    <span className="fh-dropdown-number">0{index + 1}</span>
                    <span>{service.name}</span><ArrowUpRight size={14} />
                  </Link>
                ))}
                <Link href="/services" className="fh-dropdown-footer" onClick={closeMenus}>Explore All Services <ArrowUpRight size={14} /></Link>
              </div>
            </div>
            {navigation.slice(2).map((item) => (
              <Link key={item.href} href={item.href} className={`fh-nav-link ${pathname === item.href ? "active" : ""}`} onClick={closeMenus}>
                {item.name}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="fh-cta" onClick={closeMenus}>
            Let&apos;s Discuss <span className="fh-cta-icon"><ArrowUpRight size={15} /></span>
          </Link>
          <button type="button" className="fh-mobile-toggle" onClick={() => setMobileOpen((open) => !open)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (<div className="fh-mobile-menu open">
          <div className="fh-mobile-topbar"><Sparkles size={13} /> DESIGNING SPACES. DEFINING LIFESTYLES.</div>
          {navigation.slice(0, 2).map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "mobile-active" : ""} onClick={closeMenus}>
              {item.name} <ArrowUpRight size={15} />
            </Link>
          ))}
          <button type="button" className="fh-mobile-service-trigger" onClick={() => setServicesOpen((open) => !open)} aria-expanded={servicesOpen}>
            Services <ChevronDown size={16} className={servicesOpen ? "rotated" : ""} />
          </button>
          {servicesOpen && (
            <div className="fh-mobile-services">
              {services.map((service) => <Link key={service.href} href={service.href} onClick={closeMenus}>{service.name}</Link>)}
              <Link href="/services" onClick={closeMenus}>View All Services</Link>
            </div>
          )}
          {navigation.slice(2).map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "mobile-active" : ""} onClick={closeMenus}>
              {item.name} <ArrowUpRight size={15} />
            </Link>
          ))}
          <Link href="/contact" className="fh-mobile-cta" onClick={closeMenus}>Let&apos;s Discuss Your Project <ArrowUpRight size={16} /></Link>
          <div className="fh-mobile-footer">MD HOME DECORE | DESIGN YOUR LIFESTYLE</div>
        </div>)}
      </header>
      <div className="fh-spacer" aria-hidden="true" />
    </>
  );
}