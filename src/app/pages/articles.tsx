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
    <div className="max-w-7xl mx-auto px-4 mt-32 pb-20 overflow-hidden font-medium">
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
        href={"https://techscoop.hashnode.dev"}
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
      "Stitch is an experimental AI tool from Google that bridges design and development by letting you design UIs that are backed by real, working code from the start.",
  },
  {
    techstack: "@medium/lassiecoder",
    href: "https://techscoop.hashnode.dev/gemini-ai-in-chrome-devtools",
    heading: "Automating your social media with n8n",
    description:
      "Managing multiple social media accounts can quickly turn into a full-time job. From posting updates to responding to messages, the repetitive tasks eat into time you could spend on creating valuable content.",
  },
  {
    techstack: "@techscoop/lassiecoder",
    href: "https://techscoop.hashnode.dev/gemini-ai-in-chrome-devtools",
    heading: "Gemini AI in Chrome DevTools",
    description:
      "Google integrates Gemini AI into Chrome DevTools, offering AI-powered debugging, code optimization, security insights, and accessibility improvements for developers.",
  },
  {
    techstack: "@techscoop/lassiecoder",
    href: "https://techscoop.hashnode.dev/using-deepseek-r1-for-free-in-visual-studio-code",
    heading: "Using DeepSeek R1 for Free in VSCode",
    description:
      "DeepSeek R1 - an open-source AI tool for code generation, seamlessly integrating with VSCode to enhance developer productivity and workflow efficiency.",
  },
  {
    techstack: "@medium.com/lassiecoder",
    href: "https://medium.com/nerd-for-tech/how-to-become-an-open-source-contributor-c07acbc8e9ca",
    heading: "How to Become an Open-Source Contributor",
    description:
      "If you’re looking to become an open-source contributor, this guide will walk you through everything you need to know to get started, from finding projects to making your first contribution.",
  },
  {
    techstack: "@medium.com/lassiecoder",
    href: "https://medium.com/@sharmapriyanka84510/commit-guidelines-f41b23f0bf4a",
    heading: "Git Commit Guidelines",
    description:
      "A comprehensive guide to crafting clear and meaningful Git commit messages, enhancing collaboration, maintainability, and understanding throughout the development process for future contributors.",
  },
  {
    techstack: "@medium.com/lassiecoder",
    href: "https://sharmapriyanka84510.medium.com/navigating-the-upgrade-odyssey-a-journey-through-react-native-project-upgrades-and-helpful-tools-1b4384dc7f6d",
    heading: "Navigating React Native Project Upgrades: A Journey & Tools.",
    description:
      "Upgrade React Native projects effortlessly using tools like Renovate, React Native CLI, npm-check-updates, Dependabot, and react-native-template-upgrade.",
  },
  {
    techstack: "@medium.com/lassiecoder",
    href: "https://medium.com/nerd-for-tech/fastlane-with-react-native-part-2-a1adea3321aa",
    heading: "Fastlane with React Native — Part-2",
    description:
      "Discover Fastlane's efficiency in Android app deployment, transitioning from manual to automated processes, enhancing workflow with its robust automation features.",
  },
  {
    techstack: "@medium.com/lassiecoder",
    href: "https://sharmapriyanka84510.medium.com/fastlane-with-react-native-part-1-ac916d99cb83",
    heading: "Fastlane with React Native — Part-1",
    description:
      "Fastlane optimizes iOS app development, automating build increments and metadata uploads, enhancing deployment efficiency with streamlined processes.",
  },
  {
    techstack: "@medium.com/lassiecoder",
    href: "https://medium.com/swlh/javascript-array-mutability-immutability-93d366c90751",
    heading: "JavaScript: Array, mutability & immutability",
    description:
      "JavaScript array methods explained briefly: length, map, immutable code, push/pop, delete/splice, filter, shift/unshift, reduce, and reduceRight.",
  },
];
