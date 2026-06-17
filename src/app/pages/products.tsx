"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";

import { HiMiniBellAlert } from "react-icons/hi2";
import { IoGitNetworkOutline } from "react-icons/io5";

const GIF_SRCS = ["/adsiftly-home-preview.gif", "/adsiftly-report.gif"];
const INTERVAL_MS = 4000;

function GifSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Lazy-start: only begin cycling once the card is in view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(
      () => setActiveIdx((i) => (i + 1) % GIF_SRCS.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [visible]);

  return (
    <div
      ref={ref}
      className="relative w-full h-full min-h-[220px] md:min-h-[320px] bg-zinc-950 overflow-hidden"
    >
      {GIF_SRCS.map((src, idx) => (
        <Image
          key={src}
          src={src}
          alt={`Adsiftly preview ${idx + 1}`}
          fill
          className={`object-cover transition-opacity duration-700 ${
            idx === activeIdx ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          unoptimized
        />
      ))}

      {/* dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {GIF_SRCS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === activeIdx ? "w-4 bg-white" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const products = [
  {
    name: "Adsiftly",
    tagline: "Smart Google Ads Intelligence",
    description:
      "Built in 48 hours. Finds exactly how much of a Google Ads budget is being wasted, gives a Waste Score out of 100, plain-English fixes, and a negative keyword list in 60 seconds. No agency. No jargon.",
    href: "https://adsiftly.com?utm_source=portfolio&utm_medium=referral&utm_campaign=launch",
    status: "Google Ads API · Under Review",
    icon: (
      <Image
        src="/adsiftly-logo.png"
        alt="Adsiftly"
        width={32}
        height={32}
        className="rounded-md"
        loading="lazy"
      />
    ),
  },
];

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <div className="px-4 mb-2">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left text-white pb-12">
          Products
        </h2>
      </div>

      <div className="flex flex-col items-center gap-6 px-4 mt-6">
        {products.map((product) => (
          <div
            key={product.name}
            className="inter-var font-medium w-full bg-black border border-white/[0.2] rounded-xl flex flex-col md:flex-row overflow-hidden"
          >
            {/* LHS — GIF slider */}
            <div className="w-full md:w-1/2 shrink-0">
              <GifSlider />
            </div>

            {/* RHS — text + CTA */}
            <div className="flex flex-col justify-between gap-5 p-6 md:p-8 w-full md:w-1/2">
              {/* Icon + badge */}
              <div className="flex items-center justify-between w-full">
                {product.icon}
                <span className="text-[10px] font-medium text-yellow-400 border border-yellow-400/30 bg-yellow-400/10 rounded-full px-2.5 py-0.5 tracking-wide">
                  {product.status}
                </span>
              </div>

              {/* Name */}
              <p className="text-2xl font-bold text-white -mt-1">
                {product.name}
              </p>

              {/* Tagline */}
              <p className="text-sm font-semibold text-gray-300 -mt-3">
                {product.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {product.description}
              </p>

              {/* CTA */}
              <div className="w-full mt-auto">
                <Link href={product.href} target="_blank">
                  <button className="relative inline-flex h-10 w-full overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-1.5 rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      Visit Adsiftly
                      <TbExternalLink className="text-base" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-3 max-[478px]:flex-col max-[478px]:space-x-0 max-[478px]:space-y-3 mt-10">
        <Link
          href={"https://forms.gle/udY3jQDBETu81BNf9"}
          target="_blank"
          className="block md:hidden"
        >
          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              &nbsp; Work with me &nbsp;
              <IoGitNetworkOutline className="mr-2 text-xl" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
