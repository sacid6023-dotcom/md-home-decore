import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
  MapPin,
} from "lucide-react";

async function getCopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

const mapsUrl =
  "https://www.google.com/maps?ftid=0x39092bb5674de5ad:0x228ba120b964e326";

function Instagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.8"
      aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Facebook({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      fill="currentColor" aria-hidden="true">
      <path d="M14 22v-9h3l.5-4H14V7c0-1.1.3-2 2-2h2V2.4C17.5 2.2 16.4 2 15 2c-3 0-5 1.8-5 5v2H7v4h3v9z" />
    </svg>
  );
}

function Youtube({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.8"
      aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socials = [
  { name: "Instagram", icon: Instagram, href: "" },
  { name: "Facebook", icon: Facebook, href: "" },
  { name: "YouTube", icon: Youtube, href: "" },
];

export default async function Footer() {
  const year = await getCopyrightYear();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand footer-logo">
            <Image src="/images/md-home-decore-logo.jpg" alt="MD Home Decor Logo" width={52} height={52} className="md-site-logo" />

            <span className="brand-copy">
              <span className="brand-name">
                MD HOME DECORE
              </span>
              <span className="brand-tagline">
                INTERIORS &amp; LIFESTYLE
              </span>
            </span>
          </Link>

          <p>
            We create thoughtful interiors that make
            everyday living feel special.
          </p>

          <h3 className="footer-social-title">Follow Us</h3>

          <div className="footer-socials">
            {socials.map(({ name, icon: Icon, href }) =>
              href ? (
                <a key={name} href={href}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={name}
                  className="footer-social-icon">
                  <Icon size={18} />
                </a>
              ) : (
                <span key={name}
                  className="footer-social-icon social-pending"
                  title={`${name} - Coming soon`}>
                  <Icon size={18} />
                </span>
              )
            )}
          </div>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/">Home <ArrowUpRight size={14} /></Link>
          <Link href="/about">About us <ArrowUpRight size={14} /></Link>
          <Link href="/services">Our services <ArrowUpRight size={14} /></Link>
          <Link href="/portfolio">Our portfolio <ArrowUpRight size={14} /></Link>
          <Link href="/contact">Contact us <ArrowUpRight size={14} /></Link>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>
          <Link href="/services#residential">Residential interiors</Link>
          <Link href="/services#commercial">Commercial interiors</Link>
          <Link href="/services#bedroom">Bedroom design</Link>
          <Link href="/services#living-room">Living room design</Link>
          <Link href="/services#modular-kitchen">Modular kitchens</Link>
          <Link href="/services#space-planning">Space planning</Link>
        </div>

        <div className="footer-column">
          <h3>Get in Touch</h3>

          <a href="tel:+918191949147">
            <Phone size={16} /> +91 81919 49147
          </a>

          <a href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-address">
            <MapPin size={19} />
            <span>
              Gali No. 5, Krishna Market Road,
              Near Gupta Store, Subhash Nagar,
              Dehradun, Sewla Khurd,
              Uttarakhand - 248002, India
            </span>
          </a>

          <a href={mapsUrl} target="_blank"
            rel="noopener noreferrer">
            Get Directions <ArrowUpRight size={14} />
          </a>

          <Link href="/contact">
            Plan Your Project <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          &copy; {year} MD Home Decore. All rights reserved.
        </span>

        <a href="https://xgro.in"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-powered">
          <span>Powered by</span>
          <Image src="/images/xlogo.webp" alt="XGRO" className="xgro-logo" width={85} height={28} />
          <ArrowUpRight size={12} />
        </a>
      </div>
    </footer>
  );
}