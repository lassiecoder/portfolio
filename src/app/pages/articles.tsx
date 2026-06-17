"use client";
import React from "react";
import Link from "next/link";
import ReactGA from "react-ga4";
import { SiReaddotcv } from "react-icons/si";
import { PinContainer } from "@/components/ui/3d-pin";

export function Article() {
  const trackReadMoreClick = () => {
    ReactGA.event("article_read_more", {
      category: "Articles",
      label: "Read more - Tech Scoop",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 pb-20 overflow-hidden font-medium">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left xl:pl-0 lg:mb-0 lg:pl-5 sm:mb-0 sm:pl-2 text-white">
          Articles
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[0rem] w-full">
        {pinData.map((item, index) => (
          <div key={index}>
            <Link href={item.href} target="_blank">
              <PinContainer title={item.techstack} className="max-w-full">
                <div className="flex flex-col p-4 tracking-tight text-slate-100/50 h-[12rem] w-[18rem] lg:w-[16rem] lg:h-[14rem] sm:w-[18rem]">
                  <h3 className="font-bold text-base text-gray-100 mb-2">
                    {item.heading}
                  </h3>
                  <div className="text-sm text-gray-400 mb-4">
                    {item.description}
                  </div>
                </div>
              </PinContainer>
            </Link>
          </div>
        ))}
      </div>
      <Link
        onClick={trackReadMoreClick}
        href={"https://medium.com/@lassiecoder"}
        target="_blank"
        className="flex justify-end items-center gap-1 w-full text-gray-300 hover:text-blue-400 transition-colors duration-300"
      >
        <span className="md:text-sm text-sm lg:text-sm font-normal px-1">
          Read more
        </span>
        <SiReaddotcv className="text-xl" />
      </Link>
    </div>
  );
}

const pinData = [
  {
    techstack: "@medium/lassiecoder",
    href: "https://techscoop.hashnode.dev/gemini-ai-in-chrome-devtools",
    heading:
      "Stitch by Google — A new era for designing UIs faster and smarter",
    description:
      "Stitch is an experimental AI tool from Google that bridges design and development by letting you design UIs that are backed by real, working code from...",
  },
  {
    techstack: "@medium/lassiecoder",
    href: "https://medium.com/design-bootcamp/claude-fable-5-is-here-and-it-changes-everything-about-what-ai-can-actually-do-1f7d31b24b1b",
    heading: "Claude Fable 5 changes everything about what AI can actually do",
    description:
      "Anthropic launched its most capable model ever for general use. Here’s the deep technical breakdown of what makes it different, how the safeguards...",
  },
  {
    techstack: "@medium/lassiecoder",
    href: "https://medium.com/design-bootcamp/the-day-the-u-s-government-killed-anthropics-most-powerful-ai-d580651c1c8f",
    heading: "The day the U.S. Government killed Anthropic’s most Powerful AI",
    description:
      "Claude Fable 5 lasted five days in the wild. Here’s the full technical and political breakdown of the most dramatic AI shutdown in history...",
  },
  {
    techstack: "@medium/lassiecoder",
    href: "https://medium.com/gitconnected/your-browser-is-now-an-ai-no-api-key-required-3f813e902f51",
    heading: "Your browser is now an AI (No API key required)",
    description:
      "There’s a quiet shift happening in how AI gets delivered to users. While most developers are still wiring up cloud API calls, billing for tokens...",
  },
  {
    techstack: "@medium/lassiecoder",
    href: "https://medium.com/ai-advances/cursor-composer-2-5-the-ai-coding-agent-that-punches-way-above-its-price-tag-ce1e9c07e6f2",
    heading:
      "Cursor Composer 2.5: The AI coding agent that punches way above it’s price tag",
    description:
      "How Cursor’s latest model matches frontier AI on coding benchmarks, at one-tenth the cost, and what’s really powering it under the hood...",
  },
  {
    techstack: "@medium/lassiecoder",
    href: "https://techscoop.hashnode.dev/gemini-ai-in-chrome-devtools",
    heading: "Automating your social media with n8n",
    description:
      "Managing multiple social media accounts can quickly turn into a full-time job. From posting updates to responding to messages, the repetitive tasks into...",
  },
  {
    techstack: "@techscoop/lassiecoder",
    href: "https://techscoop.hashnode.dev/gemini-ai-in-chrome-devtools",
    heading: "Gemini AI in Chrome DevTools",
    description:
      "Google integrates Gemini AI into Chrome DevTools, offering AI-powered debugging, code optimization, security insights, and accessibility improvements for...",
  },
];
