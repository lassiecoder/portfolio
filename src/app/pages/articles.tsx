"use client";
import React from "react";
import Link from "next/link";
import { PinContainer } from "@/components/ui/3d-pin";

export function Article() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-32 pb-20 overflow-hidden font-medium">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left xl:pl-0 lg:mb-0 lg:pl-5 sm:mb-0 sm:pl-2">
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
    </div>
  );
}

const pinData = [
  {
    techstack: "@medium.com/lassiecoder",
    href: "https://sharmapriyanka84510.medium.com/keeping-your-open-source-repo-happy-with-github-community-health-files-1972e3dacc27",
    heading:
      "Keeping Your Open Source Repo Happy with GitHub Community Health Files",
    description:
      "Explore essential strategies for organizing your open source repository, ensuring clarity and collaboration while avoiding chaos in the world of code maintenance."
  },
  {
    techstack: "@medium.com/lassiecoder",
    href: "https://medium.com/@sharmapriyanka84510/commit-guidelines-f41b23f0bf4a",
    heading: "Git Commit Guidelines",
    description:
      "A comprehensive guide to crafting clear and meaningful Git commit messages, enhancing collaboration, maintainability, and understanding throughout the development process for future contributors."
  },
  {
    techstack: "@dev.to/lassiecoder/",
    href: "https://dev.to/lassiecoder/git-common-developer-pitfalls-and-solutions-5aim",
    heading: "Git <> Common Developer Pitfalls and Solutions",
    description:
      "This article tackles typical Git challenges and offers actionable remedies to enhance version control and teamwork, empowering developers to optimize their workflows and collaboration processes."
  },
  {
    techstack: "@medium.com/lassiecoder",
    href: "https://sharmapriyanka84510.medium.com/navigating-the-upgrade-odyssey-a-journey-through-react-native-project-upgrades-and-helpful-tools-1b4384dc7f6d",
    heading: "Navigating React Native Project Upgrades: A Journey & Tools.",
    description:
      "Upgrade React Native projects effortlessly using tools like Renovate, React Native CLI, npm-check-updates, Dependabot, and react-native-template-upgrade."
  },
  {
    techstack: "@medium.com/lassiecoder",
    href: "https://medium.com/nerd-for-tech/fastlane-with-react-native-part-2-a1adea3321aa",
    heading: "Fastlane with React Native — Part-2",
    description:
      "Discover Fastlane's efficiency in Android app deployment, transitioning from manual to automated processes, enhancing workflow with its robust automation features."
  },
  {
    techstack: "@medium.com/lassiecoder",
    href: "https://sharmapriyanka84510.medium.com/fastlane-with-react-native-part-1-ac916d99cb83",
    heading: "Fastlane with React Native — Part-1",
    description:
      "Fastlane optimizes iOS app development, automating build increments and metadata uploads, enhancing deployment efficiency with streamlined processes."
  },
  {
    techstack: "@medium.com/lassiecoder",
    href: "https://medium.com/swlh/javascript-array-mutability-immutability-93d366c90751",
    heading: "JavaScript: Array, mutability & immutability",
    description:
      "JavaScript array methods explained briefly: length, map, immutable code, push/pop, delete/splice, filter, shift/unshift, reduce, and reduceRight."
  }
];
