"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    href: "/courses/ai-ml",
    src: "/banners/ai-ml.webp",
    alt: "AI / ML course",
    kicker: "skillORA",
    title: "AI / ML Mastery",
    subtitle: "Python · TensorFlow · Job-ready projects",
  },
  {
    href: "/courses/multi-cloud-devsecops-ai",
    src: "/banners/devsecops.webp",
    alt: "Multi Cloud DevSecOps",
    kicker: "New Course",
    title: "Multi Cloud DevSecOps with AI",
    subtitle: "AWS · Azure · GCP · Terraform",
  },
  {
    href: "/courses/java-fullstack-ai-dsa",
    src: "/banners/java.webp",
    alt: "Java Full Stack",
    kicker: "Most Popular",
    title: "Java Full Stack with AI + DSA",
    subtitle: "Spring Boot · React · Placement support",
  },
  {
    href: "/courses/full-stack-web-development",
    src: "/banners/web.webp",
    alt: "Full Stack Web",
    kicker: "Live classes",
    title: "Full Stack Web Development",
    subtitle: "React · Node.js · MongoDB",
  },
  {
    href: "/#about",
    src: "/banners/workshop.webp",
    alt: "Hi-Tech City workshops",
    kicker: "Hyderabad",
    title: "Corporate office workshops",
    subtitle: "Level 6, N Height, Hi-Tech City",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const len = slides.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % len), 5200);
    return () => clearInterval(id);
  }, [len]);

  const prev = (index - 1 + len) % len;
  const next = (index + 1) % len;

  return (
    <div className="slider-container relative overflow-hidden px-2 md:px-8">
      <button
        className="absolute top-1/2 -translate-y-1/2 z-10 btn bg-secondary text-primary hover:bg-secondary border border-input h-10 w-10 left-4"
        aria-label="Previous slide"
        onClick={() => setIndex(prev)}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute top-1/2 -translate-y-1/2 z-10 btn bg-secondary text-primary hover:bg-secondary border border-input h-10 w-10 right-4"
        aria-label="Next slide"
        onClick={() => setIndex(next)}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <div className="flex items-center justify-center gap-4 max-w-7xl mx-auto">
        <Slide slide={slides[prev]} dim />
        <Link href={slides[index].href} className="block w-[78%] md:w-[62%] shrink-0">
          <Banner slide={slides[index]} featured />
        </Link>
        <Slide slide={slides[next]} dim />
      </div>
    </div>
  );
}

function Slide({ slide, dim }: { slide: (typeof slides)[number]; dim?: boolean }) {
  return (
    <div className={`hidden md:block w-[16%] shrink-0 ${dim ? "opacity-60 scale-95" : ""}`}>
      <Banner slide={slide} />
    </div>
  );
}

function Banner({ slide, featured }: { slide: (typeof slides)[number]; featured?: boolean }) {
  return (
    <div className="relative border rounded-[2rem] overflow-hidden shadow-lg bg-black">
      <img alt={slide.alt} src={slide.src} className="w-full aspect-[16/9] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      {featured && (
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 text-white">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-cyan-300 mb-1">{slide.kicker}</p>
          <h2 className="text-xl md:text-3xl font-bold leading-tight">{slide.title}</h2>
          <p className="text-sm md:text-base text-white/80 mt-1">{slide.subtitle}</p>
        </div>
      )}
    </div>
  );
}
