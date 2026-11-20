"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const photos = Array.from(
  { length: 11 },
  (_, i) => `/images/about-slides/slide-${String(i + 1).padStart(2, "0")}.jpeg`
);

export default function AboutSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % photos.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="hs-photo hs-about-slideshow"
      role="img"
      aria-label="MD Home Decore interior projects slideshow"
    >
      {photos.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          loading={index === 0 ? "eager" : "lazy"}
          className={`about-slide-image ${
            active === index ? "is-active" : ""
          }`}
        />
      ))}

      <div className="about-slide-overlay">
        <span>OUR INTERIOR DESIGNS</span>
        <span>{String(active + 1).padStart(2, "0")} / 11</span>
      </div>
    </div>
  );
}