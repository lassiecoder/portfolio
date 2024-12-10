"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card.tsx";

const ThreeDCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 ">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 sm:gap-3">
        {dummyData.map((item, index) => (
          <div key={index}>
            <CardContainer className="inter-var font-medium">
              <CardBody
                key={index}
                className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.2] w-auto  h-auto rounded-xl p-6 border"
              >
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-gray-100 dark:text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-400 text-sm max-w-sm mt-2"
                >
                  {item.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                    // unoptimized
                    priority
                  />
                </CardItem>
                <div className="flex justify-end items-center mt-6">
                  <Link href={item.link} target="_blank">
                    <ButtonsCard>
                      <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                          View Project →
                        </span>
                      </button>
                    </ButtonsCard>
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDCard;

const dummyData = [
  {
    title: "Community Health Files",
    description:
      "The community-health-files package automates the setup and management  for open-source projects, providing a streamlined way to maintain project guidelines and policies.",
    image:
      "https://github.com/user-attachments/assets/cc1e0729-4de9-4014-8ef2-be3f47844d91",
    link: "https://github.com/lassiecoder/community-health-files"
  },
  {
    title: "EduFund - Mutual Funds & SIP",
    description:
      "EduFund, India's leading investment app, helps parents save for their children's education, ensuring a brighter future amid rising education expenses.",
    image:
      "https://github.com/lassiecoder/portfolio/assets/17312616/08a65762-328a-480e-bd20-cdc7df1a5a73",
    link: "https://play.google.com/store/apps/details?id=com.educationfund.edufund"
  },
  {
    title: "Shoplane – E-commerce website",
    description:
      "Shoplane's GitHub repository, with 340 stars and 250 forks, is a significant player in open-source e-commerce, influencing the online retail sector's development.",
    image:
      "https://github.com/lassiecoder/portfolio/assets/17312616/357237f8-298a-4f77-9cf4-63bea0b9892d",
    link: "https://github.com/lassiecoder/E-CommerceWebsite"
  },
  {
    title: "Torum: Cryptocurrency Social App",
    description:
      "Torum's mobile app fosters a vibrant SocialFi ecosystem, connecting over 230,000 cryptocurrency enthusiasts since its 2018 inception.",
    image:
      "https://github.com/lassiecoder/portfolio/assets/17312616/b86aa717-34bf-4aa2-a8fd-ae850e27ff62",
    link: "https://play.google.com/store/apps/details?id=com.torum.app&amp;hl=en_IN&amp;gl=US"
  },
  {
    title: "npx lassiecoder – in your terminal?",
    description:
      "A personalized command-line business card. This innovative tool allows you to showcase your professional profile, skills, and contact information in the terminal.",
    image:
      "https://github.com/lassiecoder/npx-lassiecoder/assets/17312616/fb0fd710-69ef-46ef-9f73-54ee4149c86f",
    link: "https://github.com/lassiecoder/npx-lassiecoder"
  },
  {
    title: "Mutual funding app",
    description:
      "The proof-of-concept app exhibits mutual funds with authentication, presenting a scrollable list of key fund information. Selecting a fund directs users to a detailed product page for additional insights.",
    image:
      "https://github.com/lassiecoder/portfolio/assets/17312616/fbcc8292-4b94-4156-8125-07ac93f9266e",
    link: "https://github.com/lassiecoder/mutual-funding-app"
  },
  {
    title: "Adecco",
    description:
      "The Adecco mobile app transforms job placement with accuracy, speed, and thorough evaluation. Daily linking over 700,000 individuals to top-tier global opportunities.",
    image:
      "https://github.com/lassiecoder/portfolio/assets/17312616/261c3286-edf3-4ba9-bf70-027fde826915",
    link: "https://play.google.com/store/apps/details?id=com.adecco.app20&amp;hl=en_IN&amp;gl=US"
  }
];
